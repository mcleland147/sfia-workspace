# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## 1. Positionnement

| Phase | Contenu |
|-------|---------|
| **PD-01** | Product Design Candidate — corpus présent |
| **PD-nA** | Préparation éditoriale Git (brouillons complets) |
| **PD-nB** | Implémentation Notion L0 (après validation source Git) |
| **PD-07** | QA narrative et métier |
| **PD-08** | Décision capitalisation — GO Morris |

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants ; toute exception exige une décision Morris explicite et une source Git stable identifiable.

**Aucune action Notion dans PD-01 ni dans les cycles A.**

---

## 2. Modèle A / B

| Cycle | Périmètre | Livrables | Gate |
|-------|-----------|-----------|------|
| **A — Git** | Brouillons Markdown complets dans `discovery/` ou équivalent | Review pack, handoff si requis | GO Morris commit/PR/merge |
| **B — Notion** | Lecture version Git validée ; action L0 manuelle | Pages Notion, revue visuelle | GO Morris implémentation ; rollback possible |

Chaque **B** exige : source Git stable · aucune écriture Git pendant B · pas d'automatisation · revue Morris.

---

## 3. Incréments

### PD-01 — Product Design Candidate ✓ (présent)

Contrat Product Design — 9 fichiers — gate GO commit/PR corpus.

### PD-02A — Préparation éditoriale Git : Hub + Acte I

| Champ | Valeur |
|-------|--------|
| Objectif | Brouillons Hub Discovery + Acte I complets |
| Git | Création fichiers editorial Discovery |
| Review pack | Full ou light selon profil |
| Gate Morris | Validation narrative Acte I |
| Notion | **Aucune** |

### PD-02B — Implémentation Notion : Hub + Acte I

| Champ | Valeur |
|-------|--------|
| Objectif | Matérialiser Hub + Acte I dans Notion |
| Prérequis | PD-02A validé ; merge Git **recommandé** |
| Notion | Création pages L0 — manuel |
| Git | Lecture seule |
| Rollback | Restaurer depuis editorial Git |
| Gate | Revue visuelle Morris |

### PD-03A — Préparation éditoriale Git : fil rouge NovaBuild

| Champ | Valeur |
|-------|--------|
| Objectif | Brouillons Acte III (III.1–III.4) — cas composite NovaBuild |
| Preuve | Catégories livrables SFIA vérifiables — pas export projet brut |
| Gate | Test PO + distinction fiction/preuve |

### PD-03B — Implémentation Notion : Acte III

| Prérequis | PD-03A validé |
| Notion | Pages fil rouge |
| Gate | Confidentialité + crédibilité narrative |

### PD-04A — Préparation Git : Actes II, IV, V

Brouillons contraste tripartite, galerie livrables, garanties/limites.

### PD-04B — Implémentation Notion : Actes II, IV, V

Matérialisation L0 après validation 04A.

### PD-05A — Préparation Git : Actes VI et VII

Brouillons personas + annexes méthode simplifiées.

### PD-05B — Implémentation Notion : Actes VI et VII

Pages persona + portail annexes ; mapping P0 legacy documenté.

### PD-06A — Préparation Git : plan migration legacy

Plan redirections §00–11 → architecture Discovery — pas de suppression Notion dans A.

### PD-06B — Migration contrôlée Notion

Redirections, archivage parcours legacy — gate Morris GO migration.

### PD-07 — QA narrative et métier

Framework §08 · dépend PD-02B–06B · verdict acceptation.

### PD-08 — Décision capitalisation

Évaluer promotion method/core — GO Morris explicite.

---

## 4. Dépendances globales

```text
PD-01
├── PD-02A → PD-02B
├── PD-03A → PD-03B  (peut chevaucher 02A après gate Morris)
├── PD-04A → PD-04B  (après 03A recommandé)
├── PD-05A → PD-05B
├── PD-06A → PD-06B  (après 05B)
├── PD-07 (après 06B)
└── PD-08 (après PD-07)
```

**Parallélisme autorisé en préparation (A)** — pas en implémentation (B) sans source Git validée par incrément.

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01)
  → Préparation éditoriale Git (PD-nA)
    → Implémentation Notion (PD-nB)
      → QA (PD-07)
        → Capitalisation? (PD-08)
```

---

## 6. Quick wins post-PD-01

- GO commit/PR corpus PD-01
- Lancement PD-02A (Hub + Acte I editorial Git)

---

## 7. Critères capitalisation (PD-08)

Itérations réelles · usage amélioré · gabarits réutilisables · dette acceptable · **GO Morris**

---

## Liens

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md)
