# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 22:50 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| **HEAD** | `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` |
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

**Ordre narratif obligatoire :** Hub + Acte I → **Acte II** → Acte III (NovaBuild) → Actes IV–V → Actes VI–VII → migration → QA → capitalisation.

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants.

---

## 2. Modèle A / B

| Cycle | Périmètre | Gate |
|-------|-----------|------|
| **A — Git** | Brouillons Markdown complets | GO Morris commit/PR/merge |
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

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git

| Objectif | Brouillons Acte III + III.1–III.4 — cas composite NovaBuild |
| Prérequis | PD-03A/B ✓ — Acte II avant fil rouge |
| Gate | M1–M5 Morris · distinction fiction / preuves |

*Cycle présent — brouillons en revue.*

### PD-04B — Acte III — implémentation Notion

Pages fil rouge NovaBuild — gate M7 Morris futur.

### PD-05A — Actes IV et V — préparation Git

Galerie livrables · garanties et limites.

### PD-05B — Actes IV et V — implémentation Notion

Matérialisation L0.

### PD-06A — Actes VI et VII — préparation Git

Personas · annexes méthode simplifiées.

### PD-06B — Actes VI et VII — implémentation Notion

Pages persona + portail annexes.

### PD-07A — Migration legacy — préparation Git

Plan redirections §00–11 → architecture Discovery.

### PD-07B — Migration legacy — Notion

Redirections · archivage — gate Morris GO migration.

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A ✓ → PD-03B ✓  ← Acte II
├── PD-04A → PD-04B     ← NovaBuild (cycle courant)
├── PD-05A → PD-05B
├── PD-06A → PD-06B
├── PD-07A → PD-07B
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence éditoriale Git recommandée :** 03A → 04A → 05A → 06A → 07A (parallélisme A possible avec gates par incrément).

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B)
    → Acte II (03A ✓ / 03B ✓)
      → Acte III NovaBuild (04A en cours / 04B)
        → IV–V (05) → VI–VII (06) → Migration (07)
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

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md)
