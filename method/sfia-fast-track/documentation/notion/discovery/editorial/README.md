# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-05A — Actes IV et V (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-acts-04-05-editorial` |
| **HEAD / base** | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV–V (en cours) → VI–VII
```

**Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | ✓ mergé (PD-04A) |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | ✓ mergé (PD-04A) |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | ✓ mergé (PD-04A) |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | ✓ mergé (PD-04A) |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | ✓ mergé (PD-04A) |
| 9 | [sfia-discovery-act-04-what-sfia-produces-editorial-draft.md](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) | IV | **PD-05A — revue** |
| 10 | [sfia-discovery-act-05-why-it-works-editorial-draft.md](sfia-discovery-act-05-why-it-works-editorial-draft.md) | V | **PD-05A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)
5. **Acte IV** — ce que SFIA produit
6. **Acte V** — pourquoi cela fonctionne

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
| Actes IV–V | **PD-05A** (présent — revue) | PD-05B — futur |
| Actes VI–VII | PD-06A — futur | PD-06B |

**NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (L2)
- Preuve avant promesse · cinq familles / cinq mécanismes max
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A · PD-03A · PD-04A mergés ✓
- PD-02B · PD-03B · PD-04B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓

---

## 9. Gates Acte IV–V (PD-05A)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte IV | En attente |
| **M2** | Preuves Acte IV | En attente |
| **M3** | Structure Acte V | En attente |
| **M4** | Garanties / limites | En attente |
| **M5** | Continuité III → IV → V → VI | En attente |
| **M6** | Contenu complet | En attente |
| **M7** | GO commit / push / PR | En attente |
| **M8** | GO PD-05B Notion | Hors cycle — futur |

---

## 10. Critères d'entrée PD-05B

- Actes IV et V validés Morris · merge Git recommandé · GO implémentation Notion L0
- Dépendance : PD-04A/B ✓

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)
