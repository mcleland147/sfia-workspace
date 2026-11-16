# SFIA Studio Next — Review Pack FULL
## ML4D Sas Nora — Qualification des gates RECETTE (Gouvernance D2 / Migration 013 / ENV-01)

| Champ | Valeur |
| --- | --- |
| Date | 2026-11-16 |
| GO Morris | Qualification pré-RECETTE — 16 novembre 2026 |
| Type SFIA | 9 — QA / validation · CRITICAL · EVOL |
| Mode | Investigation + simulation isolée · **AUCUN déploiement** · **AUCUNE modification produit** |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| HEAD candidat | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Tree web | `6f089bda818fa60e061f458fad928f3478e648b4` |
| Build DEV présent | `T03qorYZpGs0odz56Nb9f` (ne constitue **pas** un build RECETTE) |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Handoff technique précédent | `96a7790a` / blob `d9486ada` (TECHNICALLY ACCEPTED WITH RESERVES — contexte ChatGPT) |
| Contrats docs | `22ee5540052db0932149a74f53b5b389970e0118` |
| Package | `0.0.0-dev` |
| CKC | absent → fallback SFIA v2.6 |
| Push produit / PR / merge | **AUCUN** |

---

## 1. Git Truth Check

| Contrôle | Résultat |
| --- | --- |
| Repo / origin | `mcleland147/sfia-workspace` · HTTPS GitHub |
| Branche / HEAD | Conformes au GO |
| Tree web | Conforme |
| Ascendance `acb5ce65` | OK |
| Worktree produit | seul `.tmp-sfia-review/chatgpt-review.md` touché (pack) |
| Build DEV `.next/BUILD_ID` | `T03qorYZpGs0odz56Nb9f` observé |
| Port DEV :3102 | **NON OBSERVÉ** (pas de listener au moment du check) |
| Port RECETTE :3200 | **OBSERVÉ** PID 80352 `next-server` cwd worktree UX-004 |

**Verdict Git :** base qualifiée — pas de STOP.

---

## 2. Statut des environnements (ENV-01)

Politique : `governance/environnements-recette-et-promotions.md` blob `14b61f0d` ON MAIN — vérifié.
Versioning : `governance/product-versioning.md` blob `8bc93e0f` ON MAIN — vérifié.
DATA-01 : politique de contenu validée (Decision Record R4 2026-11-04) ; **mécanismes opérationnels de sauvegarde produit R5/R6 NON PROUVÉS** hors simulation isolée de ce cycle.

### RECETTE actuelle (reconfirmée)

| Élément | Observation |
| --- | --- |
| Worktree | `.../sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983` |
| HEAD | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Tree web RECETTE | `467a46216d45651063c7fdfe328f15abec9fd2fc` |
| Build | `20blGylSEta7201PgVvlw` |
| Process | PID 80352 · `127.0.0.1:3200` · LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` |
| Lane env | `STUDIO_LANE=RECETTE` (via `~/.config/sfia-studio-next/recette/.env.local`) |
| PostgreSQL | conteneur `sfia-next-recette-pg` · host `127.0.0.1:5434` · DB `sfia_next_recette_ml4` · rôle `sfia_next_recette_ml4` |
| Secrets | **non exposés** dans ce pack |
| Isolation vs DEV | conteneur/port/DB distincts de `sfia-next-dev-pg:5433` / `sfia_next_dev` |
| Mutation ce cycle | **aucune** (lecture seule + process inchangé) |

STABLE : **NOT AVAILABLE**.

---

## 3. GATE A — Unicité des noms (proposition normative D2)

### Contradiction

- **R2 / PF-CRE-14** (actuel) : création de deux projets de même nom → *identités durables distinctes sans fusion*.
- **R4 A12** : homonymes → IDs distincts, portefeuille non fusionné.
- **RG-CRE-012** : identité pérenne distincte du nom — **à conserver**.
- **Arbitrage Morris 2026-11-16 (produit)** : un même Pilote ne crée pas deux projets au même nom normalisé.
- **Candidat `cd091385`** : enforcement **applicatif transactionnel** (`normalizeProjectNameKey` / verrou pilote) ; **pas** de contrainte UNIQUE SQL ; R2/R4 **non réécrits**.

### Observation RECETTE (agrégats anonymisés, lecture seule)

| Métrique | Valeur |
| --- | --- |
| Projets | 17 |
| Groupes homonymes **même Pilote** (nom normalisé) | **0** |
| Clés de nom partagées **entre Pilotes** | **1** (autorisé sous la nouvelle règle) |
| Noms privés | **non exposés** |

Aucun traitement historique requis sur RECETTE pour l’unicité même-Pilote (absence d’homonymes).

### Proposition normative prête pour GO D2 Morris (texte candidat — **non appliqué**)

> **RG-CRE-NOM-01 (proposition) — Unicité de nom par Pilote.**
> Pour un même `ownerPilotId`, deux projets ne peuvent pas partager la même clé de nom normalisée.
> Normalisation : `trim` + collapse des espaces + case-fold `fr-FR` ; les accents restent distincts ; pas de similarité IA ; pas de renommage automatique.
> **Effet à la création :** `CONFLICT` sans nouvelle ligne projet.
> **Inter-Pilotes :** homonymie autorisée.
> **Identité :** `projectId` demeure l’identité durable (`RG-CRE-012` inchangé).
> **Replay :** même clé d’idempotence + même fingerprint → même projet (`ALREADY_CREATED`).
> **Concurrence :** au plus une création gagnante sous verrou pilote.
> **Historique :** pas de purge ni fusion rétroactive des projets existants.

**PF-CRE-14 (proposition de correction du résultat attendu, sans réécriture silencieuse de l’historique R2) :**

| | Historique R2 | Proposition |
| --- | --- | --- |
| Scénario | Deux créations même nom / même Pilote | inchangé |
| Résultat attendu | Deux projets, IDs distincts | **Refus** de la 2ᵉ création (`CONFLICT`) ; le 1ᵉr projet demeure |
| Trace | Conserver PF-CRE-14 historique + note « supersédé par RG-CRE-NOM-01 après GO D2 » | Publication gouvernée |

**R4 A12 :** conserver la leçon *identité ≠ nom* ; mettre à jour le **comportement attendu runtime** (refus homonyme même Pilote) dans une note d’erratum/architecture sous GO distinct — **pas dans ce cycle**.

**Classification version :** capacité Sas reste **MINOR candidate** (comportement plus strict à la création, sans migration de données historiques). Rupture significative pour scripts/tests qui supposaient PF-CRE-14 permissif — risque **documenté**, pas MAJOR inventé.

**Tests déjà présents sur le candidat (preuve technique, pas norme) :** A12/Morris-name PG ; GapA concurrent same-name ; E2E noms uniques.

### Verdict GATE A

**GATE A — PROPOSITION READY FOR MORRIS D2**
Norme **non publiée**. Interdit d’éditer R2/R4 sans GO D2 distinct.

---

## 4. GATE B — Migration 013

### B1 — Source au HEAD candidat (intégral)

```sql
-- Additive PreparationProjection snapshot (ML4D Sas Nora).
-- Reversible: DROP COLUMN projection_json.
-- Does not invent provenance for historical rows (NULL = partial / legacy).
ALTER TABLE preparations
  ADD COLUMN IF NOT EXISTS projection_json jsonb;

COMMENT ON COLUMN preparations.projection_json IS
  'D2 PreparationProjection v1 snapshot; non-authorizing; revision-aligned with creation_revision';
```

### Script `db-migrate.sh` (intégral)

```bash
#!/usr/bin/env bash
# Apply studio core migrations in order on a target Postgres database.
# Defaults target the local DEV container/database — never RECETTE/STABLE.
# Fail-closed: any SQL error aborts the script (ON_ERROR_STOP + set -e).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
DB_NAME="${SFIA_PG_DATABASE:-sfia_next_dev}"
MIGRATIONS_DIR="${ROOT}/src/db/migrations"

apply() {
  local file="$1"
  echo "Applying ${file} → ${CONTAINER}/${DB_NAME}"
  docker exec -i "${CONTAINER}" \
    psql -v ON_ERROR_STOP=1 -U "${DB_USER}" -d "${DB_NAME}" \
    < "${MIGRATIONS_DIR}/${file}"
}

apply "001_initial_studio_core.sql"
apply "002_session_auth_mode.sql"
apply "003_ml2_knowledge_documents.sql"
apply "004_ml2_integrity_corrective.sql"
apply "005_ml2_conversation_turn_command.sql"
apply "006_ml2_turn_owner_token.sql"
apply "007_ml3_pilotage_decisions.sql"
apply "008_git_collaboration.sql"
apply "009_publication_ref_attempt_unique.sql"
apply "010_github_app_user_oauth.sql"
apply "011_oauth_session_binding.sql"
apply "012_auth_concurrency_safety.sql"
apply "013_preparation_projection.sql"
echo "db:migrate OK (001→013)"
```

Observations script :
- applique **001→013** séquentiellement ;
- cible par défaut le conteneur DEV — commentaire « never RECETTE/STABLE » ;
- **pas** de table de tracking des migrations ;
- plusieurs migrations antérieures sont `IF NOT EXISTS` / additives ; **pour autant**, rejouer **toute** la chaîne 001→013 sur une base RECETTE déjà peuplée n’est **pas** qualifié ici comme procédure de déploiement (chemin recommandé : **appliquer uniquement 013** après sauvegarde).

Fichier 013 **absent** du worktree RECETTE UX-004 (`b05dacf4`) — attendu.

### B2 — Pré-check RECETTE (lecture seule)

| Contrôle | Résultat |
| --- | --- |
| Colonne `projection_json` | **ABSENTE** |
| Colonnes `preparations` observées | id, owner_pilot_id, status, creation_revision, preview_name, preview_summary, created_at, updated_at |
| Préparations | 178 (OPEN 161 · ATTACHED 17) |
| Table tracking migrations | **ABSENTE** |
| Hypothèse « RECETTE = 012 » | **COMPATIBLE** avec l’absence de `projection_json` (non prouvée via registre de versions) |

### B3 — Compatibilité (analyse + simulation)

| Cas | Résultat |
| --- | --- |
| Ancienne prép. `projection_json` NULL | **SIM PASS** (insert legacy puis NULL_OK) |
| Écriture JSONB ultérieure | **SIM PASS** |
| Code UX-004 sans champ Drizzle `projectionJson` + colonne absente aujourd’hui | OK actuel |
| Code UX-004 + colonne additive future | **COMPATIBLE attendu** (colonne nullable ignorée par ORM ancien) — **NOT RUNTIME-TESTED** sur process RECETTE |
| Candidat Sas exige colonne | **OUI** (schema Drizzle + persistance projection) ⇒ **013 prérequis** avant servir `cd091385` |

### B4 — Sauvegarde (DATA-01 / ENV-01)

| Élément | Statut |
| --- | --- |
| Politique DATA-01 | Validée en contenu R4 ; mécanismes quotidiens chiffrés **NOT PROVEN** opérationnellement |
| Méthode adaptée proposée | `pg_dump -Fc` de `sfia_next_recette_ml4` vers emplacement hors volume runtime, avant 013 |
| Emplacement | À choisir par Morris (hors Git ; hors worktree hot) |
| Intégrité | checksum du dump + `pg_restore` test |
| Restauration éprouvable ce cycle | **OUI sur DB jetable isolée DEV** (voir B5) — **PAS sur RECETTE** |
| Données sensibles | **exclues** du pack |

### B5 — Simulation (DB jetable `sfia-next-dev-pg` / `sfia_mig013_qual_20261116`)

**Interdit RECETTE/STABLE mutables — respecté.**

| Étape | Résultat |
| --- | --- |
| Create DB jetable | PASS |
| Apply 001→012 | PASS |
| `projection_json` pré-013 | `f` |
| Dump pre-013 | PASS (~101 416 octets dump custom) |
| Apply 013 | PASS → `jsonb\|YES` |
| Re-apply 013 (`IF NOT EXISTS`) | PASS |
| Legacy NULL + update JSON | PASS |
| Dump post-013 + restore sibling DB | PASS (valeur restaurée) |
| Restore dump pre-013 | PASS (`projection_json` redevient absent) |
| Cleanup DBs jetables | PASS |

### B6 — Retour arrière

| Stratégie | Perte de données ? | Recommandation |
| --- | --- | --- |
| Roll-forward applicatif : garder colonne ; rollback code vers UX-004 | **Non** si UX-004 ignore la colonne | **Préférer** |
| `DROP COLUMN projection_json` après écritures Sas | **Oui** — projections perdues | **NE PAS** proposer par défaut |
| Restauration dump pre-013 | Remet état pré-colonne ; **perd** toute écriture post-dump | Seulement si incident + dump valide |
| Écritures concurrentes pendant migrate | Risque faible (DDL add column) mais fenêtre à geler côté app idéalement | Planifier courte indisponibilité ou maintenance |

### B7 — Verdict migration

**MIGRATION 013 — QUALIFIED FOR RECETTE PROPOSAL**

Ce verdict **n’autorise pas** l’application. GO Morris d’effet distinct requis.

---

## 5. Manifeste RECETTE CANDIDATE (non servi)

| Champ | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Base main | `997d4c4e` |
| Source branch | `feat/next-ml4d-sas-nora-convergence-20261116` |
| SHA candidat | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Tree web | `6f089bda818fa60e061f458fad928f3478e648b4` |
| Version | `0.0.0-dev` · **NO RELEASE** · STABLE N/A |
| Classe | MINOR candidate (sous réserve Gate A D2) |
| Build reproductible attendu | **Nouveau** build RECETTE depuis le SHA (ne pas réutiliser `T03qorYZpGs0odz56Nb9f` DEV ni `20blGylSEta7201PgVvlw` UX-004) |
| Schema | Prérequis **013** sur DB RECETTE |
| Dataset | DB actuelle `sfia_next_recette_ml4` (178 prép.) + scénarios R01–R17 |
| Capacités | Sas Nora projection/create/continuité + unicité app-level |
| Tests déjà rapportés | UNIT/PG/BROWSER FAKE PASS sur candidat ; LIVE NOT PROVEN |
| Sauvegarde | `pg_dump -Fc` pré-013 + test restore isolé |
| Rollback | Préférer rollback code + conserver colonne ; sinon restore dump |
| Séquence de bascule proposée | 1) GO D2 norme 2) sauvegarde 3) GO apply 013 4) build RECETTE 5) bascule process 6) smoke 7) séance Morris |
| Post-déploiement | R01–R17 + contrôles schema + absence de régression UX-003/004 |
| Gate Morris | Autorisations listées §9 |

---

## 6. Matrice de recette Morris (support — preuves utilisateur à Morris)

R01 Nouvelle préparation · R02 Intention floue · R03 Clarification · R04 Aperçu/provenance · R05 Hypothèse/question · R06 Correction dialogue · R07 Recommandation qualitative · R08 Création explicite sans formulaire · R09 Homonyme même Pilote refusé · R10 Homonyme inter-Pilotes OK · R11 Transition espace projet · R12 Même fil refresh · R13 Aucun cycle/CKI/Git induit · R14 Reprise prép. inachevée · R15 Erreur/conflit/incertitude · R16 Non-régression UX-003/004 · R17 États Figma 607:3/62/131/203/277.

**Cursor n’usurpe pas** review visuelle / captures / verdict utilisateur.

Suite LIVE proposée (sous autorisation) : 2–3 tours maturation réels OpenAI + 1 création ; credentials non invoqués ce cycle (`OPENAI_KEY_SET=true` observé côté RECETTE env, **non utilisé**).

---

## 7. Fake / Real

| Niveau | Statut ce cycle |
| --- | --- |
| UNIT/PG/BROWSER FAKE candidat | PASS rapportés (cycles précédents) — **non rejoués intégralement** ici |
| Simulation migration isolée | **PASS** (ce cycle) |
| RECETTE schema read-only | **OBSERVÉ** |
| Restauration | **PROVEN** sur jetable · **NOT PROVEN** sur lane RECETTE |
| NORA LIVE | **NOT PROVEN** |
| MORRIS UI | **PENDING** |

---

## 8. Risques et dette/exit

1. Gate A non publiée → dette normative vs code.
2. 013 non appliquée → candidat **non déployable** tel quel sur schéma RECETTE actuel.
3. DATA-01 sauvegardes opérationnelles quotidiennes **NOT PROVEN**.
4. Script `db-migrate.sh` 001→013 : ne pas l’utiliser comme « migrate all » aveugle sur RECETTE.
5. Build RECETTE reproductible du SHA **non produit** ce cycle.
6. Contradiction PF-CRE-14 documentée jusqu’au GO D2.
7. Nomsake DB labels sur conteneur DEV (hygiène) — isolation réelle par conteneur/port OK.

---

## 9. Autorisations encore nécessaires (Morris)

1. **GO D2** publication norme unicité (Gate A).
2. **GO effet** sauvegarde + application **013 seule** sur RECETTE.
3. **GO bascule** build/process RECETTE vers SHA `cd091385` (ou successeur).
4. Séance **MORRIS UI** + éventuel **NORA LIVE** borné.
5. Pas de PR/merge/STABLE/ADOPTED/Gate C/ML5 dans ce cycle.

---

## 10. Verdicts

| Gate | Verdict |
| --- | --- |
| A Unicité | **PROPOSITION READY FOR MORRIS D2** (norme non modifiée) |
| B Migration 013 | **MIGRATION 013 — QUALIFIED FOR RECETTE PROPOSAL** (non appliquée) |
| ENV-01 readiness | Isolation RECETTE confirmée ; manifeste candidat préparé ; **non servi** |

### Verdict global

**READY WITH RESERVES — RECETTE PREPARATION QUALIFIED**

Réserves critiques : norme D2 ouverte ; 013 non appliquée ; build RECETTE du SHA absent ; LIVE/UI PENDING ; sauvegardes DATA-01 opérationnelles NOT PROVEN hors jetable.

**CE CYCLE NE DÉPLOIE RIEN. RECETTE NON MUTÉE. R2/R4 NON MODIFIÉS.**
