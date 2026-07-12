# Interv360 — Folder Normalization Audit

## 1. Objectif

Ce document audite spécifiquement l'arborescence `projects/interv360/`.

L'objectif est d'identifier :

- les dossiers en doublon ;
- les dossiers ambigus ;
- les phases incohérentes ;
- les documents mal rangés ;
- les dossiers historiques à archiver ;
- les dossiers actifs à conserver ;
- la cible de remise en ordre.

Aucun fichier n'est déplacé dans ce document.

**Inventaires :** `interv360-directory-map.txt`, `interv360-all-files.txt`, `interv360-markdown-files.txt`, `interv360-folder-volume.txt`

## 2. Cartographie actuelle

Arborescence de premier niveau constatée (plus riche que l'audit global initial) :

```text
projects/interv360/
├── README.md
├── 00-intake/
├── 01-cadrage/
├── 02-architecture/          # ADR MVP + Figma v1 + logs Notion + clarifications
├── 03-design/
├── 03-process/               # ⚠ doublon numéro 03 — BPMN/process pré-delivery
├── 04-adr/                   # ⚠ ADR précoces (4 ADR) — doublon sémantique avec 02-architecture/adr/
├── 04-delivery/              # ⚠ README stub seul — doublon nom avec cible future 04-delivery
├── 05-functional-architecture/  # ⚠ architecture fonctionnelle pré-delivery
├── 05-tests/                 # ⚠ collision numéro 05
├── 06-documentation/         # ⚠ README stub — collision numéro 06
├── 06-ux-ui/                 # ⚠ UX pré-delivery — collision numéro 06
├── 07-delivery/              # 111 md — delivery réel mais numéroté 07
├── 07-rex/                   # ⚠ README placeholder — collision numéro 07 avec delivery
├── 08-presentation/
├── 09-architecture/          # ⚠ roadmaps/futures évolutions — nom trompeur
├── app/                      # Code frontend — NE PAS TOUCHER
└── backend/                  # Code backend — NE PAS TOUCHER
```

**Constat majeur :** l'arborescence mélange deux conventions :

1. **Phases SFIA génériques** (00–06) du cadrage initial : process, functional-architecture, ux-ui, tests, documentation ;
2. **Phases delivery MVP/Premium** ajoutées ensuite sans renumérotation : `07-delivery`, `07-rex`, `08-presentation`, `09-architecture`.

## 3. Volumétrie par dossier

| Dossier | Fichiers totaux | Markdown | Rôle observé |
|---------|-----------------|----------|--------------|
| `00-intake/` | 3 | 3 | Intake projet |
| `01-cadrage/` | 16 | 15 | Cadrage métier, arbitrages MVP |
| `02-architecture/` | 114 | 87 | Architecture MVP : ADR (9), Figma v1 (7), Notion logs (28), clarification (10), reste actif |
| `03-design/` | 17 | 16 | Design Figma/Penpot, premium brief |
| `03-process/` | 16 | 7 | BPMN, process SAV — **phase pré-delivery historique** |
| `04-adr/` | 6 | 6 | ADR précoces (001–004) — **remplacés par 02-architecture/adr/** |
| `04-delivery/` | 1 | 1 | **README stub vide** — placeholder jamais peuplé |
| `05-functional-architecture/` | 8 | 8 | Archi fonctionnelle — **phase pré-delivery clos** |
| `05-tests/` | 1 | 1 | README stratégie tests |
| `06-documentation/` | 1 | 1 | README stub |
| `06-ux-ui/` | 8 | 8 | UX reprise, parcours — **phase pré-delivery clos** |
| `07-delivery/` | 111 | 111 | Delivery réel : 52 actifs + 59 `inc-*` historiques |
| `07-rex/` | 1 | 1 | README « à venir » — REX réel dans `method/` |
| `08-presentation/` | 4 | 4 | Démo, runbook, script présentation |
| `09-architecture/` | 14 | 14 | Backend framing, auth, **roadmaps produit** — mal nommé |
| `app/` | 126 | 6 | Code + README techniques |
| `backend/` | 31 | 1 | Code + README |
| **Total Interv360** | **~483** | **~291** | |

## 4. Doublons et incohérences constatés

### 4.1. Architecture en triple

| Dossier | Contenu réel | Diagnostic |
|---------|--------------|------------|
| `02-architecture/` | ADR MVP (9), synthèses P1/P2, Figma v1, **28 logs Notion**, clarifications, QA/prompt catalog | Architecture active **noyée dans l'historique** |
| `02-architecture/adr/` | ADR-001 à ADR-008 + CAND-009 | **Référence architecture MVP actuelle** |
| `04-adr/` | ADR-001 à ADR-004 (numérotation **différente** : status-mapping, CRM sync…) | ADR **précoces pré-MVP** — doublon de nommage |
| `05-functional-architecture/` | Objets métier, statuts, domaines, intégrations | Archi **fonctionnelle** pré-implémentation — clos |
| `09-architecture/` | Backend stack, auth framing, **mvp-final-roadmap**, product roadmaps | Ce n'est **pas** l'architecture socle — plutôt **roadmap / évolutions futures** |

**Décision proposée :**

- Conserver `02-architecture/` pour l'architecture MVP active (ADR + synthèses) après archivage logs/clarifications ;
- Archiver `04-adr/` vers `archive/pre-mvp-adr/` (ADR précoces, numérotation obsolète) ;
- Archiver `05-functional-architecture/` vers `archive/functional-architecture/` (cycle clos) ;
- Renommer `09-architecture/` en `08-roadmap/` (roadmaps, auth/backend framing futur).

### 4.2. Delivery en double

| Élément | Contenu | Diagnostic |
|---------|---------|------------|
| `04-delivery/` | README « à venir » uniquement | **Placeholder mort** — créé avant le vrai delivery |
| `07-delivery/` | 111 fichiers — lots MVP, premium UI, industrialisation, **audit**, release readiness | **Vrai delivery** mais mal numéroté et surchargé |
| `07-delivery/` (hors `inc-*`) | ~52 documents actifs | Lots produit, API hardening, premium-design-system, current-application-audit |
| `07-delivery/inc-01-*` | ~45 fichiers | Micro-incréments démo pré-MVP |
| `07-delivery/inc-02-*` à `inc-04-*` | ~14 fichiers | Micro-cycles locaux clos |
| `interv360-mvp-final-roadmap.md` | Dans `09-architecture/` | Roadmap lots — **mal rangée** (devrait être delivery ou roadmap) |

**Décision proposée :**

1. Archiver tous les `inc-*` vers `archive/inc-01/` … `inc-04/` ;
2. Supprimer ou fusionner le stub `04-delivery/README.md` après création du vrai `04-delivery/` ;
3. Renommer `07-delivery/` → `04-delivery/` une fois allégé ;
4. Déplacer `interv360-mvp-final-roadmap.md` vers `04-delivery/` ou `08-roadmap/` selon lecture (roadmap = `08-roadmap/`).

### 4.3. Audit / REX dispersés

| Élément | Emplacement | Diagnostic |
|---------|-------------|------------|
| `current-application-audit.md` | `07-delivery/` | **Audit application** — ne devrait pas être en delivery |
| `07-rex/README.md` | `07-rex/` | Placeholder « à venir » — **vide de contenu** |
| `interv360-application-rex.md` | `method/sfia-fast-track/` | **REX réel** — capitalisé côté méthode SFIA |
| `2026-07-01-inc-01-phase-2-rex.md` | `07-delivery/` | REX micro-cycle — historique |
| `2026-07-02-audit-trail.md` | `07-delivery/` | Doc **fonctionnelle** audit trail MVP — reste delivery |

**Décision proposée :**

- Créer `06-audit-rex/` ;
- Y déplacer `current-application-audit.md` ;
- Fusionner `07-rex/` dans `06-audit-rex/` (README + lien vers REX méthode) ;
- Conserver `interv360-application-rex.md` dans `method/sfia-fast-track/audit-rex/` avec lien croisé projet ;
- Archiver `2026-07-01-inc-01-phase-2-rex.md`.

### 4.4. Release dispersée

| Élément | Emplacement | Diagnostic |
|---------|-------------|------------|
| `2026-07-02-mvp-release-readiness.md` | `07-delivery/` | **Release readiness** — devrait être en release |
| Notes release GitHub | Non trouvées dans `projects/interv360/` | Probablement uniquement sur GitHub Releases |
| Tags `v0.1.0-mvp`, `v0.2.0-premium-ui` | Documentés dans `method/` | Référence release côté méthode, pas projet |
| `2026-07-01-demo-mvp-closure.md`, `product-industrialization.md` | `07-delivery/` | Clôture delivery — reste delivery ou release selon lecture |

**Décision proposée :**

- Créer `05-release/` ;
- Y déplacer `2026-07-02-mvp-release-readiness.md` ;
- Y ajouter futures release notes si créées dans le repo.

### 4.5. Présentation / démo

| Élément | Emplacement | Diagnostic |
|---------|-------------|------------|
| `08-presentation/` | 4 fichiers | Runbook E2E, script démo, package présentation — **cohérent** |
| `batch-04-demo-presentation-package.md` | `07-delivery/` | Chevauchement thématique avec `08-presentation/` |
| `inc-01-demo-script.md`, `inc-01-final-demo-package.md` | `07-delivery/` | Historique — archiver |

**Décision proposée :**

- Renommer `08-presentation/` → `07-presentation/` après création `06-audit-rex/` ;
- Archiver doublons démo dans `inc-*` ;
- Conserver `08-presentation/` actifs comme référence démo post-MVP.

### 4.6. Phases pré-delivery SFIA (03-process, 06-ux-ui)

| Dossier | Contenu | Diagnostic |
|---------|---------|------------|
| `03-process/` | BPMN, exceptions SAV, cycle closure | **Cycle process clos** — valeur historique |
| `06-ux-ui/` | Screen inventory, user journeys, UX reprise | **Cycle UX clos** — remplacé par 03-design + premium |
| `05-tests/` | README seul | Stub |
| `06-documentation/` | README seul | Stub |

**Décision proposée :**

- Archiver `03-process/`, `06-ux-ui/` vers `archive/pre-delivery-phases/` ;
- Archiver ou fusionner stubs `05-tests/`, `06-documentation/` ;
- Ne pas conserver ces numéros en phases actives.

### 4.7. Design vs architecture Figma

| Zone | Contenu Figma | Diagnostic |
|------|---------------|------------|
| `02-architecture/figma-*` | 7 fichiers — cycle Figma v1, review sessions | **Historique** Figma v1 |
| `03-design/` | 16 fichiers — Penpot, premium redesign, reprise | **Design actif** + transitions |
| `03-design/exports/` | Non suivis | Hors git |

**Décision proposée :**

- Conserver `03-design/` pour design actif ;
- Archiver `02-architecture/figma-*` vers `archive/figma-v1/` ou conserver avec bandeau « historique » ;
- Lien explicite vers `method/sfia-fast-track/figma-design-first-ui-method.md`.

## 5. Dossiers actifs proposés (cible)

```text
projects/interv360/
├── README.md                    # Index à réécrire (état post-MVP/Premium)
├── 00-intake/
├── 01-cadrage/
├── 02-architecture/             # ADR + synthèses actives uniquement
│   └── adr/
├── 03-design/
├── 04-delivery/                 # ex-07-delivery allégé
├── 05-release/                  # nouveau
├── 06-audit-rex/                # audit app + index REX
├── 07-presentation/             # ex-08-presentation
├── 08-roadmap/                  # ex-09-architecture
├── app/                         # NE PAS TOUCHER
├── backend/                     # NE PAS TOUCHER
└── archive/
    ├── pre-mvp-adr/             # ex-04-adr
    ├── pre-delivery-phases/     # ex-03-process, 06-ux-ui, 05-functional-architecture
    ├── inc-01/
    ├── inc-02/
    ├── inc-03/
    ├── inc-04/
    ├── notion-sync/
    ├── clarification/
    ├── figma-v1/
    └── cmp/
```

**Dossiers à supprimer après migration (contenu vide ou stub) :**

- `04-delivery/README.md` (remplacé par vrai `04-delivery/`) ;
- `07-rex/` (fusionné dans `06-audit-rex/`) ;
- `05-tests/`, `06-documentation/` (stubs — archiver README puis retirer dossiers vides).

## 6. Mapping dossier actuel → cible

| Dossier actuel | Dossier cible | Action | Justification |
|----------------|---------------|--------|---------------|
| `00-intake/` | `00-intake/` | Conserver | Origine besoin |
| `01-cadrage/` | `01-cadrage/` | Conserver | Cadrage |
| `02-architecture/` | `02-architecture/` | Conserver + alléger | ADR MVP actifs |
| `03-design/` | `03-design/` | Conserver | Design actif |
| `03-process/` | `archive/pre-delivery-phases/process/` | Archiver | Cycle BPMN clos |
| `04-adr/` | `archive/pre-mvp-adr/` | Archiver | ADR précoces obsolètes |
| `04-delivery/` (stub) | — | Supprimer après migration | Placeholder mort |
| `05-functional-architecture/` | `archive/pre-delivery-phases/functional-architecture/` | Archiver | Cycle clos |
| `05-tests/` | `archive/stubs/` ou supprimer | Archiver stub | README seul |
| `06-documentation/` | `archive/stubs/` ou supprimer | Archiver stub | README seul |
| `06-ux-ui/` | `archive/pre-delivery-phases/ux-ui/` | Archiver | Cycle UX clos |
| `07-delivery/` | `04-delivery/` | Renommer après archive | Vrai delivery |
| `07-rex/` | `06-audit-rex/` | Fusionner | Placeholder → audit-rex |
| `08-presentation/` | `07-presentation/` | Renommer | Séquence logique |
| `09-architecture/` | `08-roadmap/` | Renommer | Roadmaps, pas archi socle |
| `app/` | `app/` | Ne pas toucher | Code frontend |
| `backend/` | `backend/` | Ne pas toucher | Code backend |

## 7. Mapping fichiers actifs à déplacer

Documents **actifs** prioritaires (hors `inc-*`, hors logs Notion) :

| Fichier actuel | Cible | Action | Justification |
|----------------|-------|--------|---------------|
| `07-delivery/current-application-audit.md` | `06-audit-rex/current-application-audit.md` | Déplacer | Audit ≠ delivery |
| `07-delivery/premium-design-system.md` | `04-delivery/premium-design-system.md` | Déplacer | Cycle UI livré |
| `07-delivery/2026-07-02-mvp-release-readiness.md` | `05-release/2026-07-02-mvp-release-readiness.md` | Déplacer | Release readiness |
| `09-architecture/interv360-mvp-final-roadmap.md` | `08-roadmap/interv360-mvp-final-roadmap.md` | Déplacer | Roadmap lots MVP |
| `09-architecture/interv360-product-roadmap-next.md` | `08-roadmap/` | Déplacer | Roadmap produit |
| `09-architecture/interv360-product-roadmap-after-role-simulation.md` | `08-roadmap/` | Déplacer | Idem |
| `09-architecture/interv360-next-product-axis.md` | `08-roadmap/` | Déplacer | Axes futurs |
| `09-architecture/interv360-auth-*.md` (3 fichiers) | `08-roadmap/` | Déplacer | Cadrage futur auth |
| `09-architecture/interv360-backend-*.md` (4 fichiers) | `08-roadmap/` | Déplacer | Cadrage backend futur |
| `09-architecture/2026-07-02-interv360-workflow-extension-framing.md` | `08-roadmap/` | Déplacer | Extension future |
| `09-architecture/interv360-role-simulation-review.md` | `08-roadmap/` ou `04-delivery/` | À valider | Revue rôles — lié MVP |
| `09-architecture/2026-07-01-interv360-product-industrialization-framing.md` | `04-delivery/` ou `08-roadmap/` | À valider | Industrialisation |
| `08-presentation/*` (4 fichiers) | `07-presentation/*` | Renommer dossier | Présentation |
| `02-architecture/adr/ADR-001` à `008` | `02-architecture/adr/` | Conserver | ADR actifs |
| `07-rex/README.md` | `06-audit-rex/README.md` | Fusionner + enrichir | Lien REX méthode |

**Documents actifs restant dans `04-delivery/` (ex-07-delivery, ~40 fichiers) :**

Lots MVP (`api-product-hardening`, `request-model-finalization`, `product-ux-finalization`, `product-industrialization`, `backend-*`, `workflow-*`, etc.) — conserver en delivery après archivage `inc-*`.

## 8. Documents à archiver avant renommage

| Famille | Volume `.md` | Archive cible |
|---------|--------------|---------------|
| `inc-01-*` | ~45 | `archive/inc-01/` |
| `inc-02-*`, `inc-03-*`, `inc-04-*` | ~14 | `archive/inc-02/` … `inc-04/` |
| `notion-sync-*` | 28 | `archive/notion-sync/` |
| `clarification-*` | 10 | `archive/clarification/` |
| `cmp-prompt-schema-extension-*` | 5 | `archive/cmp/` |
| `02-architecture/figma-*` | 7 | `archive/figma-v1/` (si validé) |
| `04-adr/*` | 6 | `archive/pre-mvp-adr/` |
| `03-process/*` | 7 | `archive/pre-delivery-phases/process/` |
| `05-functional-architecture/*` | 8 | `archive/pre-delivery-phases/functional-architecture/` |
| `06-ux-ui/*` | 8 | `archive/pre-delivery-phases/ux-ui/` |

**Total archive estimé : ~138 fichiers Markdown** sur 291 (~47 %).

## 9. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Casser des liens internes | Docs cassées | `grep` références + mise à jour liens post-mv |
| Déplacer un document encore actif en archive | Perte lisibilité | Liste §7 validée humainement |
| Confusion ADR 04-adr vs 02-architecture/adr | Mauvaise décision technique | README ADR expliquant les deux jeux |
| Renommer trop tôt | Confusion Git diff | Commits séparés : archive → renommer → déplacer actifs |
| Toucher app/backend | Hors scope | Exclure explicitement |
| README projet obsolète | Mauvaise orientation | Réécrire `projects/interv360/README.md` en phase finale |
| Collision `04-delivery` stub vs cible | Erreur git mv | Supprimer stub avant renommage 07→04 |

## 10. Décision attendue

Décisions à valider humainement :

- [ ] `07-delivery/` devient `04-delivery/` (après archivage `inc-*`)
- [ ] `07-rex/` fusionne dans `06-audit-rex/`
- [ ] `08-presentation/` devient `07-presentation/`
- [ ] `09-architecture/` devient `08-roadmap/`
- [ ] `current-application-audit.md` sort de delivery
- [ ] `2026-07-02-mvp-release-readiness.md` va en `05-release/`
- [ ] `premium-design-system.md` reste en delivery (`04-delivery/`)
- [ ] `04-adr/` archivé (ADR précoces)
- [ ] `03-process/`, `05-functional-architecture/`, `06-ux-ui/` archivés (phases pré-delivery)
- [ ] `04-delivery/README` stub supprimé après migration
- [ ] Figma v1 (`02-architecture/figma-*`) archivé ou conservé avec statut historique
- [ ] `interv360-mvp-final-roadmap.md` va en `08-roadmap/` (pas delivery)

## 11. Suite

Après validation :

1. archiver les historiques (`inc-*`, Notion, phases pré-delivery, `04-adr`) ;
2. créer `05-release/`, `06-audit-rex/` ;
3. déplacer les fichiers actifs listés en §7 ;
4. renommer les dossiers phases (`07-delivery` → `04-delivery`, etc.) ;
5. réécrire `projects/interv360/README.md` ;
6. mettre à jour les liens internes et le REX méthode si chemins projet cités ;
7. produire inventaire post-nettoyage.
