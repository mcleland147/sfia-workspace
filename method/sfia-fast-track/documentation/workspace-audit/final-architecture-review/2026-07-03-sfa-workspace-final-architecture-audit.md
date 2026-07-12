# SFA Workspace — Final Architecture Audit

**Date** : 2026-07-03
**Branche** : `consolidation/sfia-method-improvements`
**Commit de référence** : `2cec1d8` — `docs: clarify sfia method and practice structure`
**Mode** : Final SFA Workspace Architecture Audit (lecture seule — aucun déplacement)

---

## 1. Objectif

Ce document réalise l'audit final de l'arborescence SFIA Workspace après les nettoyages opérationnels (Rounds 1–2) et la finition structure méthode (Round 3).

L'objectif n'est pas seulement de vérifier que la branche est mergeable, mais de vérifier que l'arborescence correspond à la vision cible de la SFA :

- claire ;
- cohérente ;
- sans doublons majeurs bloquants ;
- alignée avec la logique SFA ;
- exploitable pour Notion comme IDE métier ;
- exploitable pour les futurs cycles SFIA ;
- suffisamment propre pour devenir la base de référence.

**Inventaires associés** (même dossier) :

| Fichier | Contenu |
|---------|---------|
| `final-directory-map-all.txt` | 232 dossiers |
| `final-directory-map-depth3.txt` | Arborescence profondeur 3 |
| `final-markdown-files.txt` | 494 fichiers `.md` / `.mdx` |
| `final-docs-files.txt` | 58 fichiers sous `docs/` |
| `final-method-files.txt` | 94 fichiers sous `method/` |
| `final-interv360-files.txt` | 496 fichiers Interv360 (hors exports Figma, hors `node_modules`) |
| `final-prompts-files.txt` | 21 fichiers sous `prompts/` |
| `final-exports-files.txt` | 13 fichiers sous `exports/` |
| `final-tools-files.txt` | 36 fichiers sous `tools/` (profondeur 3) |

---

## 2. Vision cible évaluée

La SFA doit s'appuyer sur une arborescence permettant de distinguer clairement :

- la méthode active ;
- les méthodes complémentaires ;
- les pratiques plateforme ;
- les standards ;
- les templates ;
- les prompts ;
- les projets de référence ;
- les archives ;
- les exports Notion ;
- les outils techniques ;
- les futurs moteurs d'orchestration.

**Évaluation globale** : la vision est **largement atteinte**. Les trois racines ambiguës (`method/`, `methods/`, `docs/methods/`) ont été résolues au Round 3.

---

## 3. Synthèse de décision

**Décision : GO AVEC RÉSERVES**

**Justification** :

L'arborescence actuelle est structurellement conforme à la vision SFA. Les couches méthode / pratiques / templates / prompts sont lisibles. Interv360 suit la séquence 00–09 sans doublon actif. Notion est correctement positionné comme IDE métier éditorialisé, pas miroir brut.

Les réserves identifiées sont **mineures** : README manquants sur quelques phases Interv360, documents de contrôle ou d'audit non rafraîchis post-Round 3, payloads JSON historiques avec anciens chemins, liens résiduels dans `app/src/` (hors périmètre volontaire). Aucune réserve n'est bloquante pour une PR workspace cleanup.

---

## 4. Arborescence racine

| Zone | Rôle attendu | Statut | Commentaire |
|------|--------------|--------|-------------|
| `README.md` | Point d'entrée workspace | **OK** | Structure, Method Layers, Notion — aligné Round 3 |
| `docs/` | Documentation plateforme | **OK** | README + sous-zones documentées |
| `method/` | Méthodes d'exécution | **OK** | `sfia-fast-track/` + `complementary/` |
| `projects/` | Projets de référence | **OK** | Interv360 seul projet actif |
| `prompts/` | Assets prompts | **OK** | README + 10 familles |
| `exports/` | Exports préparés | **OK** | `exports/notion/` + README explicite « non source de vérité » |
| `tools/` | Outillage technique | **OK** | `cmp-001/` embarqué, non touché sur la branche |
| `docker/` | Outillage design | **OK** | `docker/penpot/` présent |
| `components/` | Composants réutilisables | **OK** | README minimal — zone peu peuplée, acceptable |
| `.github/` | CI et workflows | **OK** | Présent, non modifié sur la branche |
| `methods/` (racine) | — | **OK (absent)** | Supprimé au Round 3 |
| `docs/methods/` | — | **OK (absent)** | Renommé `docs/practices/` |
| `.cursor/` | Config IDE | **OK** | Hors périmètre SFA documenté — acceptable |

**Racines ambiguës** : aucune racine fantôme `methods/`, `templates/` ou `standards/` à la racine.

**Fichiers isolés racine** : `.gitignore`, `README.md`, `.DS_Store` (non versionné — cosmétique local).

---

## 5. Méthode, pratiques et templates

| Zone | Rôle | Statut | Commentaire |
|------|------|--------|-------------|
| `method/sfia-fast-track/` | Méthode active | **OK** | README, `core/`, `automation/`, `cycles/`, `ui/`, `templates/`, `checklists/`, `documentation/`, `archive/` |
| `method/complementary/` | Méthodes complémentaires | **OK** | README + `controlled-delivery/` (14 fichiers) |
| `docs/practices/` | Pratiques plateforme | **OK** | 22 fichiers : `roles/` (6+README), `process/`, `architecture/`, `ux-ui/` |
| `docs/templates/` | Templates plateforme | **OK** | README + `architecture/`, `process/`, `ux-ui/`, `tooling/penpot/` |
| `docs/standards/` | Standards plateforme | **OK** | README présent |
| `method/sfia-fast-track/templates/` | Templates Fast Track | **OK** | 6 templates opérationnels — distinct de `docs/templates/` |
| `prompts/` | Prompts | **OK** | Catalogue + 7 familles ; README distingue templates FT vs plateforme |

**Séparation méthode / pratiques** : claire depuis Round 3.

| Ancienne ambiguïté | Résolution |
|--------------------|------------|
| `methods/` vs `method/` | `method/complementary/` |
| `docs/methods/` vs `method/` | `docs/practices/` |
| Templates doubles | Justifié : opérationnel FT vs capitalisation plateforme |

**README structurants** — cohérence narrative :

| Fichier | Aligné Round 3 |
|---------|----------------|
| `README.md` (racine) | Oui |
| `docs/README.md` | Oui |
| `method/README.md` | Oui |
| `method/complementary/README.md` | Oui |
| `docs/practices/README.md` | Oui |
| `method/sfia-fast-track/README.md` | Oui — ne mentionne pas explicitement `docs/practices/` (mineur) |
| `prompts/README.md` | Oui |

---

## 6. Projet Interv360

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| Séquence 00–09 | **OK** | Tous les dossiers présents |
| Un numéro = une phase | **OK** | Aucun doublon actif |
| Anciens dossiers actifs absents | **OK** | `05-tests`, `06-documentation`, `07-delivery`, `07-rex`, `08-roadmap`, `09-architecture` — absents de l'actif |
| Delivery séparé de release | **OK** | `04-delivery/` vs `05-release/` |
| Audit/REX séparés | **OK** | `06-audit-rex/` |
| Roadmap séparée | **OK** | `09-roadmap/` |
| Documentation transverse | **OK** | `07-documentation/` |
| Présentation séparée | **OK** | `08-presentation/` |
| Archives distinctes | **OK** | `archive/` riche et structuré (stubs, inc-*, notion-sync, cmp, figma-v1, role-enrichment…) |
| Code isolé | **OK** | `app/`, `backend/` — non modifiés sur la branche |
| README projet | **OK** | Table 00–09 alignée avec l'état réel |
| Documents majeurs | **OK** | `premium-design-system.md`, `mvp-release-readiness.md`, `current-application-audit.md`, `adr/` |

**README par phase** :

| Phase | README |
|-------|--------|
| `00-intake` à `03-design` | Présent |
| `04-delivery` | **Absent** — mineur |
| `05-release` | **Absent** — mineur |
| `06-audit-rex` | Présent |
| `07-documentation` | Présent |
| `08-presentation` | **Absent** — mineur |
| `09-roadmap` | **Absent** — mineur |
| `app/`, `backend/`, `archive/` | Présent |

**02-architecture/** : 13 fichiers ADR actifs + ~14 payloads JSON Notion historiques (`notion-sync-*.json`) — voir §10.

---

## 7. Notion IDE métier

| Contrôle | Statut | Commentaire |
|----------|--------|-------------|
| Notion positionné comme IDE métier | **OK** | README racine, `notion-target-content-map.md`, `notion-publication-plan.md` |
| Pas de sync brute | **OK** | Exclusions explicites ; `exports/notion/README.md` confirme |
| Mapping cible présent | **OK** | `notion-target-content-map.md` — 11 pages cibles |
| Sources repo clarifiées | **OK** | §6 ajouté Round 3 : FT / complementary / practices |
| Archives exclues du brut | **OK** | §4 exclusions : inc-*, stubs, logs, inventaires |
| Distinction méthode / pratiques / prompts | **OK** | Mapping + README racine |
| `exports/notion/` non source de vérité | **OK** | README explicite |

**Point mineur** : `notion-publication-plan.md` (rédigé avant Round 3) ne cite pas encore `docs/practices/` par nom — à intégrer au chantier Notion.

---

## 8. Doublons et incohérences restantes

### Doublons justifiés (non bloquants)

| Doublon apparent | Justification |
|------------------|---------------|
| `docs/templates/` ↔ `method/sfia-fast-track/templates/` | Templates plateforme vs opérationnels FT — documenté dans `prompts/README.md` |
| `docs/tooling/penpot/` ↔ `docker/penpot/` ↔ `prompts/tooling/penpot/` | Doc / runtime / prompts — rôles distincts |
| `method/sfia-fast-track/audit-rex/` ↔ `projects/interv360/06-audit-rex/` | REX méthode vs REX projet — acceptable |
| Nombreux dossiers `archive/` | Traçabilité historique — séparés de l'actif |

### Incohérences mineures

| Élément | Diagnostic |
|---------|------------|
| `docs/practices/methods-structure-check.md` §2 | Arborescence cible affiche encore `docs/methods/` — document de contrôle daté 2026-06-28, partiellement mis à jour |
| `docs/practices/process/2026-06-28-bpmn-method-integration-audit.md` | Recommandations mentionnent `methods/process/` — à actualiser vers `docs/practices/process/` |
| `method/sfia-fast-track/documentation/documentation-audit.md` | Références `methods/controlled-delivery/`, `docs/methods/` — audit pré-Round 3 |
| `method/sfia-fast-track/documentation/documentation-structure-target.md` | Idem — cible historique |
| `exports/notion/README.md` | Ne cite pas `docs/practices/` dans la liste des sources actives |

> Aucun doublon structurel bloquant identifié.

---

## 9. Dossiers vides ou suspects

### Dossiers vides

| Dossier | Diagnostic | Recommandation |
|---------|------------|----------------|
| `projects/interv360/app/node_modules/.vite-temp` | Artefact build Vite | Ignorer — généré localement |
| `projects/interv360/backend/node_modules/.vite-temp` | Idem | Ignorer |

Aucun dossier structurel vide bloquant dans l'arborescence documentaire.

### Dossiers suspects (analyse)

| Dossier | Diagnostic | Recommandation |
|---------|------------|----------------|
| `projects/interv360/03-design/exports/` | Non suivi Git (`??`) — exports Figma locaux | Ajouter au `.gitignore` ou documenter dans `03-design/README.md` — hors scope cleanup |
| `projects/interv360/02-architecture/figma-first-draft-screens/` | Écrans draft Figma | Conserver — lié au design |
| `.cursor/mcp-templates/` | Config Cursor | Hors périmètre SFA |
| `tools/cmp-001/docs/` | Doc embarquée CMP | Ne pas toucher |

### README manquants (mineur)

| Dossier | Recommandation |
|---------|----------------|
| `docs/roadmaps/` | Ajouter README lors d'un cycle roadmaps plateforme |
| `docs/tooling/` | Ajouter README court (renvoi vers `docs/tooling/penpot/`) |
| `projects/interv360/04-delivery/` | README optionnel post-PR |
| `projects/interv360/05-release/` | Idem |
| `projects/interv360/08-presentation/` | Idem |
| `projects/interv360/09-roadmap/` | Idem |

---

## 10. Anciens chemins résiduels

### Recherche active (hors `workspace-audit/`, `archive/`, `app/`, `backend/`, exports Figma)

| Occurrence | Fichier | Type | Décision |
|------------|---------|------|----------|
| `docs/methods/` | `projects/interv360/02-architecture/notion-sync-*.json` (14 fichiers) | Payloads CMP historiques | **Mineur** — artefacts Notion pré-Round 3 ; ne pas republier tels quels |
| `docs/methods/` | `docs/practices/methods-structure-check.md` §2 (arborescence cible) | Doc de contrôle | **Mineur** — actualiser le diagramme |
| `methods/` (racine) | `docs/practices/methods-structure-check.md` | Mention historique / contrôle | **OK** — contexte de vérification |
| `methods/controlled-delivery/` | `method/sfia-fast-track/documentation/documentation-audit.md` | Audit pré-Round 3 | **OK** — historique documentaire |
| `07-delivery/` | `projects/interv360/app/src/data/README.md` | Lien interne app | **Mineur** — hors périmètre volontaire ; lien cassé vers archive |
| `07-delivery/` | `projects/interv360/app/src/seed/README.md` | Idem | **Mineur** — idem |
| `docs/methods/`, `07-delivery/`, `methods/` | `projects/interv360/archive/**` | Archive | **OK** — historique |
| `docs/methods/`, `methods/` | `method/sfia-fast-track/documentation/workspace-audit/**` | Audit | **OK** — trace des rounds |
| `docs/methods/` | `method/sfia-fast-track/archive/**` | Archive méthode | **OK** |

**Documents actifs Markdown Interv360** (`01-cadrage/`, `02-architecture/adr/`, `04-delivery/`…) : **aucune occurrence** des anciens chemins `docs/methods/`, `methods/controlled-delivery/`, `07-delivery/`, `08-roadmap/`, `09-architecture/`.

**Prompts et docs actifs** : chemins mis à jour vers `docs/practices/` au Round 3.

> Les occurrences restantes dans documents actifs sont soit historiques/audit/archive, soit des payloads JSON CMP à traiter au chantier Notion — **non bloquantes** pour la structure.

---

## 11. Réserves

### Bloquantes

Aucune réserve bloquante identifiée.

### Mineures

1. **README manquants** — 4 phases Interv360 (`04`, `05`, `08`, `09`) + `docs/roadmaps/`, `docs/tooling/`.
2. **`docs/practices/methods-structure-check.md`** — diagramme §2 obsolète (`docs/methods/`).
3. **Payloads JSON** dans `02-architecture/` — 14 fichiers avec `docs/methods/` embarqué.
4. **Liens `07-delivery/`** dans `app/src/data/README.md` et `app/src/seed/README.md` — liens probablement cassés (fichier archivé).
5. **`documentation-audit.md` / `documentation-structure-target.md`** — non rafraîchis post-Round 3.
6. **Exports Figma non suivis** — `projects/interv360/03-design/exports/` en `??`.
7. **`method/sfia-fast-track/README.md`** — pourrait renvoyer explicitement vers `docs/practices/`.

### À traiter dans le chantier Notion

1. Actualiser `notion-publication-plan.md` avec `docs/practices/` et `method/complementary/`.
2. Ne pas republier les payloads JSON tels quels — régénérer depuis sources à jour.
3. Structurer Notion : méthode active / complémentaire / pratiques / prompts / cas Interv360 / archives.
4. Enrichir `exports/notion/README.md` avec la distinction practices.

---

## 12. Conformité contraintes (cette passe)

| Contrainte | Respectée |
|------------|-----------|
| Aucun déplacement | Oui |
| Aucune suppression | Oui |
| Aucun code touché | Oui |
| `app/`, `backend/` non touchés | Oui |
| `.github/workflows/` non touché | Oui |
| `tools/cmp-001/` non touché | Oui |
| Exports Figma non touchés | Oui |
| Notion sync non exécuté | Oui |
| Pas de push / pas de PR | Oui |

**Vérification branche vs `main`** :

- Aucun chemin interdit touché sur la branche.
- `projects/interv360/app/README.md` non modifié.

---

## 13. Décision finale

**Décision proposée :**

> Le workspace SFA est **cohérent et conforme à la structure cible**, avec des réserves mineures documentées. La branche est **prête pour PR workspace cleanup** après revue visuelle.

**Niveau** : **GO AVEC RÉSERVES**

Les réserves ne justifient pas une passe structurelle supplémentaire avant PR. Elles peuvent être traitées en parallèle ou après merge (README phases, actualisation docs de contrôle, chantier Notion).

---

## 14. Suite recommandée

1. **Revue visuelle** des README racine, `method/`, `docs/practices/`, `projects/interv360/README.md`.
2. **Créer la PR** workspace cleanup sur `consolidation/sfia-method-improvements`.
3. **Merger** après revue humaine.
4. **Post-merge** (optionnel, non bloquant) :
   - README pour phases Interv360 04, 05, 08, 09 ;
   - actualiser `methods-structure-check.md` §2 ;
   - `.gitignore` pour `03-design/exports/`.
5. **Ouvrir le chantier Notion IDE métier SFA** — s'appuyer sur `notion-target-content-map.md`, régénérer payloads, ne pas sync brut.

---

## 15. Historique des nettoyages (contexte)

| Passe | Commit clé | Résultat |
|-------|------------|----------|
| Round 1 | `74b420e` → consolidé | Restructuration FT, archive Interv360, normalisation phases |
| Round 2 | `766ae0d` | Séquence 00–09, liens, archives QA |
| Round 3 | `2cec1d8` | `methods/` → `method/complementary/`, `docs/methods/` → `docs/practices/` |
| Final audit | *(ce document)* | GO AVEC RÉSERVES |
