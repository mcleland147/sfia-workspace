---
status: temporary-review-handoff
cycle: M0-DEC-008 Corrective PR Readiness
profile: Light
branch: archive/sfia-v2.6-lot-0-inventories
base_main: 7baffa75a595da50e856af9dde07816369671a05
previous_head: fd6e03ebc86a1d19d7c642553d7c1f57bc205bd8
commit_corrective: 6cf7d361d9543a2a8b1fff8f78ea72be75f303f0
head_pr: 6cf7d361d9543a2a8b1fff8f78ea72be75f303f0
pr: 167
pr_merged: false
incorrect_path: ../archive/capitalization-inventories/
corrected_path: ../../archive/capitalization-inventories/
links_corrected: 2
link_resolution_verified: true
renames_unchanged: 9
active_references_valid: true
csv_sha: 00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275
csv_unchanged: true
archive_executed: 9
archive_remaining: 67
lots_a_j: not_started
baseline: v2.4
candidate: v2.6
readiness_verdict: READY_FOR_CHATGPT_PR_READINESS_RE_REVIEW
synthesis_only: no
---

# SFIA v2.6 — M0-DEC-008 Corrective PR Readiness Handoff

**Date/heure :** 2026-07-12 05:05 Europe/Paris
**Cycle :** M0-DEC-008 Corrective PR Readiness
**Profil :** Light
**Branche :** `archive/sfia-v2.6-lot-0-inventories`
**Previous HEAD :** `fd6e03ebc86a1d19d7c642553d7c1f57bc205bd8`
**Corrective commit :** `6cf7d361d9543a2a8b1fff8f78ea72be75f303f0`
**HEAD PR :** `6cf7d361d9543a2a8b1fff8f78ea72be75f303f0`
**PR #167 :** open — not merged
**synthesis only = no**

## Correctif

| Élément | Valeur |
|---------|--------|
| Cause | Remontée relative insuffisante (`../` → `../../`) |
| Liens corrigés | 2 |
| Résolution vérifiée | oui (`test -f`) |
| 9 renames R100 | inchangés |
| CSV | unchanged |
| Archives restantes | 67 |

## Ligne corrigée (sfia-foundation-documents-inventory.md:7)

```
**Inventaires bruts** (archivés M0-DEC-008, 2026-07-12) : [`foundation-candidate-files.txt`](../../archive/capitalization-inventories/foundation-candidate-files.txt) (462 fichiers), [`foundation-priority-files.txt`](../../archive/capitalization-inventories/foundation-priority-files.txt) (102 fichiers).

---

## 11. Correctif PR readiness — liens relatifs (2026-07-12 05:05 Europe/Paris)

**Contexte :** écart détecté pendant la revue ChatGPT PR readiness sur PR #167.

| Élément | Détail |
|

---

## DIFF correctif

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md
index 38af0ed..83d00f2 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md
@@ -4,7 +4,7 @@
 **Branche** : `capitalization/sfia-documentation-completeness`  
 **Mode** : identification uniquement — aucun document source modifié
 
-**Inventaires bruts** (archivés M0-DEC-008, 2026-07-12) : [`foundation-candidate-files.txt`](../archive/capitalization-inventories/foundation-candidate-files.txt) (462 fichiers), [`foundation-priority-files.txt`](../archive/capitalization-inventories/foundation-priority-files.txt) (102 fichiers).
+**Inventaires bruts** (archivés M0-DEC-008, 2026-07-12) : [`foundation-candidate-files.txt`](../../archive/capitalization-inventories/foundation-candidate-files.txt) (462 fichiers), [`foundation-priority-files.txt`](../../archive/capitalization-inventories/foundation-priority-files.txt) (102 fichiers).
 
 ## 1. Objectif
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-0-archive-inventories-execution.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-0-archive-inventories-execution.md
index fdcd82a..46dfc40 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-0-archive-inventories-execution.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-0-archive-inventories-execution.md
@@ -69,7 +69,9 @@ Exécuter physiquement l'archivage réversible des **9 inventaires temporaires**
 
 | Fichier | Modification |
 |---------|--------------|
-| `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` | Liens Markdown vers `../archive/capitalization-inventories/foundation-candidate-files.txt` et `foundation-priority-files.txt` + mention archivage M0-DEC-008 |
+| `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` | Liens Markdown vers `../../archive/capitalization-inventories/foundation-candidate-files.txt` et `foundation-priority-files.txt` + mention archivage M0-DEC-008 |
+
+> **Note correctif 2026-07-12 05:05 :** le premier commit utilisait `../archive/…` (un niveau insuffisant). Corrigé en `../../archive/…` — voir §11.
 
 ---
 
@@ -114,13 +116,35 @@ Exécuter physiquement l'archivage réversible des **9 inventaires temporaires**
 
 ---
 
+## 11. Correctif PR readiness — liens relatifs (2026-07-12 05:05 Europe/Paris)
+
+**Contexte :** écart détecté pendant la revue ChatGPT PR readiness sur PR #167.
+
+| Élément | Détail |
+|---------|--------|
+| **Cause** | Remontée relative insuffisante d'un niveau depuis `foundation-documents/` |
+| **Ancien chemin 1** | `../archive/capitalization-inventories/foundation-candidate-files.txt` |
+| **Nouveau chemin 1** | `../../archive/capitalization-inventories/foundation-candidate-files.txt` |
+| **Ancien chemin 2** | `../archive/capitalization-inventories/foundation-priority-files.txt` |
+| **Nouveau chemin 2** | `../../archive/capitalization-inventories/foundation-priority-files.txt` |
+| **Liens corrigés** | **2** |
+| **Résolution vérifiée** | **oui** — `test -f` depuis `foundation-documents/` |
+| **Autres références actives cassées** | **aucune** |
+| **Changement de périmètre** | **non** |
+| **9 renames R100** | **inchangés** |
+| **CSV** | **inchangé** — SHA `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` |
+| **PR #167** | **non mergée** |
+| **Commit correctif** | `fix: correct archived inventory relative links` (post-`fd6e03e`) |
+
+---
+
 ## 10. Verdict
 
 ```
 M0-DEC-008 ARCHIVE EXECUTION COMPLETE
-9 TEMPORARY INVENTORIES MOVED TO ARCHIVE
+LINK CORRECTIVE APPLIED — 2 RELATIVE PATHS FIXED
 CONTENT PRESERVED
-ACTIVE REFERENCES UPDATED
+ACTIVE REFERENCES VALID
 NO BROKEN ACTIVE REFERENCES
 CSV UNCHANGED
 67 ARCHIVE DECISIONS REMAIN UNEXECUTED
@@ -128,5 +152,5 @@ NO FILE DELETION
 LOTS A-J NOT STARTED
 SFIA v2.4 REMAINS BASELINE
 SFIA v2.6 REMAINS CANDIDATE
-PR PENDING — NOT MERGED
+PR #167 PENDING — NOT MERGED — READY FOR RE-REVIEW
 ```


## Verdict

M0-DEC-008 LINK CORRECTIVE COMPLETE — PR #167 NOT MERGED — READY FOR CHATGPT PR READINESS RE-REVIEW
