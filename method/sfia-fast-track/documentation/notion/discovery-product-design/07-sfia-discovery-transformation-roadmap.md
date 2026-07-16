# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Décision Morris** | Acte II avant Acte III — séquence narrative I → II → III |

---

## 1. Positionnement

| Phase | Contenu |
|-------|---------|
| **PD-01** | Product Design Candidate — mergé ✓ |
| **PD-nA** | Préparation éditoriale Git |
| **PD-nB** | Implémentation Notion L0 |
| **PD-08** | QA narrative et métier |
| **PD-09** | Décision capitalisation — GO Morris |

**Ordre narratif obligatoire :** Hub + Acte I → **Acte II** → Acte III (NovaBuild) → Actes IV–V → Actes VI–VII → **migration** → QA → capitalisation.

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants.

---

## 2. Modèle A / B

| Cycle | Périmètre | Gate |
|-------|-----------|------|
| **A — Git** | Brouillons Markdown complets · plans | GO Morris commit/PR/merge |
| **B — Notion** | Matérialisation L0 manuelle | GO Morris implémentation |

---

## 3. Incréments

### PD-01 — Product Design Candidate ✓

Corpus PD-01 — mergé (PR #195).

### PD-02A — Hub + Acte I — préparation Git ✓

Brouillons Hub + Acte I — mergé (PR #196).

### PD-02B — Hub + Acte I — implémentation Notion ✓

| Prérequis | PD-02A mergé (PR #196) ✓ |
| Notion | Hub Discovery créé · Acte I créé |
| Source Git | Corpus PD-02A mergé via PR #196 |
| Statut | **Finalisé** |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

Git reste la **source de vérité** — Notion = couche métier et pédagogique.

### PD-03A — Acte II — préparation Git ✓

Brouillon Acte II — mergé (PR #197).

### PD-03B — Acte II — implémentation Notion ✓

| Prérequis | PD-03A mergé ✓ |
| Notion | Acte II créé |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git ✓

Brouillons Acte III + III.1–III.4 — mergé (PR #198).

### PD-04B — Acte III — implémentation Notion ✓

| Prérequis | PD-04A mergé (PR #198) ✓ |
| Notion | Pages fil rouge NovaBuild |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05A — Actes IV et V — préparation Git ✓

Brouillons Acte IV (galerie livrables) · Acte V (garanties et limites) — mergé (PR #199).

| Merge commit | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| Prérequis | PD-04A/B ✓ |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05B — Actes IV et V — implémentation Notion ✓

| Prérequis | PD-05A mergé (PR #199) ✓ |
| Notion | Pages Actes IV et V |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-06A — Actes VI et VII — préparation Git ✓

Brouillons Acte VI (hub + VI.1–VI.4) · Acte VII (portail méthode) — mergé (PR #200).

| Merge commit | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| Prérequis | PD-05A/B ✓ |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-06B — Actes VI et VII — implémentation Notion ✓

| Prérequis | PD-06A mergé (PR #200) ✓ |
| Notion | Pages persona + portail Acte VII |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-07A — Migration legacy — préparation Git

| Objectif | Inventaire §00–11 · plan de migration réversible · redirections Candidate |
| Prérequis | PD-06A/B ✓ |
| Gate | M1–M6 Morris · absence DELETE · Lot 0 Notion réservé à PD-07B |
| Livrables Git | `discovery/migration/sfia-discovery-legacy-content-inventory.md` · `sfia-discovery-legacy-migration-plan.md` |

*Cycle courant — inventaire et plan en revue.*

### PD-07B — Migration legacy — Notion

| Objectif | Lot 0 inventaire Notion · redirections · annexes · archivage réversible |
| Prérequis | PD-07A mergé · GO Morris |
| Statut | **Futur** |
| Interdit | Delete · archivage sans GO page par page |

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B · **non réalisée** à ce stade.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A ✓ → PD-03B ✓  ← Acte II
├── PD-04A ✓ → PD-04B ✓  ← NovaBuild
├── PD-05A ✓ → PD-05B ✓  ← Actes IV–V
├── PD-06A ✓ → PD-06B ✓  ← Actes VI–VII
├── PD-07A → PD-07B     ← Migration legacy (cycle courant)
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence :** migration → QA → capitalisation.

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B ✓)
    → Acte II (03A ✓ / 03B ✓)
      → Acte III NovaBuild (04A ✓ / 04B ✓)
        → Actes IV–V (05A ✓ / 05B ✓)
          → Actes VI–VII (06A ✓ / 06B ✓)
            → Migration (07A en cours / 07B)
              → QA (08) → Capitalisation? (09)
```

---

## 6. Mapping renumérotation (référence)

| Ancien ID | Nouveau ID | Contenu |
|-----------|------------|---------|
| PD-03A/B | **PD-04A/B** | Acte III NovaBuild |
| PD-04A/B | **PD-05A/B** | Actes IV et V |
| PD-05A/B | **PD-06A/B** | Actes VI et VII |
| PD-06A/B | **PD-07A/B** | Migration legacy |
| PD-07 | **PD-08** | QA |
| PD-08 | **PD-09** | Capitalisation |
| — | **PD-03A/B** | **Acte II** (nouveau slot) |

---

## 7. Critères capitalisation (PD-09)

Itérations réelles · usage amélioré · gabarits réutilisables · dette acceptable · **GO Morris**

---

## Liens

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md) · [Migration plan](../discovery/migration/sfia-discovery-legacy-migration-plan.md)
