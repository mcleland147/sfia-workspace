# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-03A — Acte II (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-act-02-editorial` |
| **HEAD / base** | `4994954f195169a3262910439fcd2455955c38f5` |
| **Horodatage** | 2026-07-14 20:45 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ (Hub + Acte I) · PD-03B+ futurs |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II (en cours) → Acte III NovaBuild → IV–V → VI–VII
```

**Acte II avant Acte III** — le contraste et le modèle SFIA précèdent le fil rouge composite.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | **PD-03A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** *(futur PD-04A)* — fil rouge NovaBuild

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | **PD-02B ✓** — Hub + Acte I Notion finalisés |
| Acte II | **PD-03A** (présent) | PD-03B — futur |
| Acte III | PD-04A — futur | PD-04B |

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (Actes I–II)
- NovaBuild = cas composite · aucun chiffre non sourcé
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A mergés ✓
- **PD-02B finalisé** (Hub + Acte I Notion) ✓
- **Acte II avant Acte III** ✓
- NovaBuild composite ✓
- Aucune action Notion dans PD-03A ✓

---

## 9. Décisions restantes (Acte II)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte II | Validée |
| **M2** | Contraste tripartite | Validée (R3) |
| **M3** | Niveau exposition méthode | Validée |
| **M4** | Roadmap renumérotée | Validée (R1–R2) |
| **M5** | GO commit / push / PR | En attente |
| **M6** | GO PD-03B Notion (distinct) | Hors cycle |

---

## 10. Critères d'entrée PD-03B

- Acte II validé Morris · merge Git recommandé · GO implémentation Notion L0

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)
