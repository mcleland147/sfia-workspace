# 08 — Framework d'acceptation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## 1. Objectif

Définir les **critères de jugement** de la future expérience Discovery — avant et après implémentation Notion (PD-07).

---

## 2. Critères minimum (18)

| # | Critère | Mesure |
|---|---------|--------|
| C1 | Compréhension immédiate valeur | Reformulation 2 min post 10 min |
| C2 | Distinction classique / IA libre / SFIA | Quiz 3 items |
| C3 | Raconter SFIA avec ses mots | Entretien 5 min |
| C4 | Rôles Morris/ChatGPT/Cursor/Git/Notion | Schéma annoté |
| C5 | Projet bout en bout | Récit 5 phases minimum |
| C6 | Livrables concrets identifiés | ≥ 5 types cités |
| C7 | Garanties et limites | 2 garanties + 2 limites |
| C8 | Projection persona | « Mon cas » articulé |
| C9 | Envie poursuivre | Score ≥ 4/5 |
| C10 | Absence fuite méthodologique | Audit prompts/catalog |
| C11 | Absence promesse excessive | Revue éditoriale §05 |
| C12 | Cohérence Git | Métadonnées SHA |
| C13 | Navigation sans impasse | Walkthrough 4 parcours |
| C14 | Temps lecture maîtrisé | Parcours dans budget |
| C15 | Métier > méthode | Ratio contenu Actes I–VI |
| C16 | Mobile lisible | Test 2 pages |
| C17 | Accessibilité | Pas couleur seule |
| C18 | Candidate visible | Badge v2.5 |
| C19 | Distinction fiction NovaBuild / preuves SFIA | Test explicite post Acte III |
| C20 | Absence statistiques non sourcées | Revue Acte I + corpus — aucun chiffre sans source |

---

## 3. Grille revue Morris

| Domaine | Question | ☐ |
|---------|----------|---|
| Vision | IDE métier clair ? | |
| Narration | Actes cohérents ? | |
| Fil rouge | NovaBuild composite distingué des preuves réelles ? | |
| Chiffres | Aucune statistique non sourcée (Acte I) ? | |
| Confidentialité | Pas de fuite ? | |
| Promesses | Sobres ? | |
| Migration | Mapping P0 acceptable ? | |
| Roadmap | Cycles Git (A) / Notion (B) séparés ? | |
| GO PD-02A | Editorial Hub + Acte I autorisé ? | |

---

## 4. Tests utilisateurs

### 4.1 Lecteur non technique

- Parcours 10 min · Reformulation · Score C1, C3, C9

### 4.2 Chef de projet

- Parcours 30 min · Identification livrables · C5, C6

### 4.3 Développeur

- Acte VII + lien Git · Pas de frustration « manque détail » si renvoi clair · C4

### 4.4 Prospect PME

- Teaser 3 min + conviction partielle · C1, C8

### 4.5 Test confidentialité

- Chercher prompt catalog, routing exhaustif, automation — **doit échouer** sur Notion · C10

### 4.6 Test valeur

- « Qu'achète-on avec SFIA ? » — réponse métier sans jargon · C15

### 4.7 Test storytelling

- Récit NovaBuild fluide · C5

### 4.8 Test NovaBuild / preuves

- Après Acte III : le lecteur distingue fiction NovaBuild et preuves SFIA réelles · C19

### 4.9 Test statistiques

- Revue Acte I : aucun taux, économie ou gain chiffré sans source · C20

---

## 5. Verdicts possibles

| Verdict | Signification |
|---------|---------------|
| **DISCOVERY PRODUCT DESIGN CORRECTED — READY FOR COMMIT** | Réserves R1–R3 traitées ; corpus PD-01 prêt pour commit/PR |
| **DISCOVERY PRODUCT DESIGN READY** | Corpus PD-01 validé pour commit/PR |
| **READY WITH EDITORIAL RESERVES** | Corrections mineures documentées |
| **NARRATIVE INSUFFICIENT** | Actes ou fil rouge à retravailler |
| **VALUE PROPOSITION INSUFFICIENT** | Actes I–II faibles |
| **METHODOLOGY OVEREXPOSED** | Confidentialité violée |
| **MORRIS DECISION REQUIRED** | Arbitrage positioning |

---

## 6. Application cycle présent (PD-01)

Ce framework s'applique **pleinement** à PD-07 (QA Notion). Pour PD-01 :

- Revue Morris sur **documents Git** via critères C1–C8 en **lecture simulée**
- C10–C13 à l'implémentation
- Verdict attendu post-revue : **DISCOVERY PRODUCT DESIGN READY** ou réserves

---

## 7. Seuils GO / NO-GO implémentation

| Condition | GO PD-02A (Git) | GO PD-02B (Notion) |
|-----------|-----------------|---------------------|
| PD-01 merged | Requis | Requis |
| Fil rouge NovaBuild composite documenté | Requis | Requis |
| Brouillons Hub + Acte I validés Morris | Requis | Requis |
| Source Git stable (merge recommandé) | — | Requis |
| Contrat éditorial validé | Requis | Requis |
| Statistique non sourcée détectée | **NO-GO** | **NO-GO** |
| METHODOLOGY OVEREXPOSED | **NO-GO** | **NO-GO** |

---

## Liens

→ [05 Contrat éditorial](05-sfia-discovery-editorial-contract.md) · [07 Roadmap](07-sfia-discovery-transformation-roadmap.md)
