# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 |
| **Préfixe décisions** | `POC-CAND-*` — identifiants locaux (même après validation) |
| **D-VAL nouvelles** | **Aucune** |
| **POC** | **Non lancé** |
| **Destinataire** | Morris |

> Décision Morris du **2026-07-19** : validation du cadrage Option B. POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucun merge autorisé par ce pack seul (POC-G10 = draft PR).

---

## 1. Observations factuelles

1. Delivery P0 clôturé (PR #217) ; capitalisation intégrée (PR #218).
2. Cadrage Option B produit puis **validé Morris 2026-07-19**.
3. AF-Option C **VALIDÉE** (fond) et **opérationnalisée** pour le POC (POC-CAND-03).
4. Baseline SFIA v2.6 / Option C méthode **inchangée**.
5. POC / MVP / industrialisation **non engagés**.

---

## 2. Hypothèses

H1–H8 du document `20` — dont H6 (orchestrateur local) **retenue avec réserve** (POC-CAND-07) : outil/forme **ouverts**.

---

## 3–5. Options (historique de cadrage)

Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées comme **historique de qualification**. Les choix Morris sont dans §6–7.

---

## 6. Décisions POC-CAND — état Morris 2026-07-19

> Identifiants locaux au cadrage. **Aucune D-VAL nouvelle.**

| ID | Décision | Statut Morris |
|----|----------|---------------|
| **POC-CAND-01** | Problème + objectif de preuve acceptés | **VALIDÉE** |
| **POC-CAND-02** | Scénario **S1** sélectionné (DOC read-only + rejet hors allowlist obligatoire) | **VALIDÉE** |
| **POC-CAND-03** | Frontières Studio / orch. / Git / Cursor ; AF-Option C opérationnalisée ; Git = vérité | **VALIDÉE** |
| **POC-CAND-04** | L3 cible après GO ; L4* plafond chemin d’orchestration (**≠** niveau produit/Runtime) ; arbitrage L0 ; L5 global interdit | **VALIDÉE** |
| **POC-CAND-05** | Lecture Git réelle autorisée (futur POC) ; écritures distantes **simulées** ; aucun commit/push/PR/merge réel sans décision distincte | **VALIDÉE** |
| **POC-CAND-06** | Critères succès / échec / abandon acceptés | **VALIDÉE** |
| **POC-CAND-07** | Orchestrateur local déterministe = hypothèse candidate ; outil/techno/forme **ouverts** ; aucune archi Runtime validée | **VALIDÉE AVEC RÉSERVE** |
| **POC-CAND-08** | Après intégration cadrage → prochaine étape candidate = **architecture POC ciblée** ; pas de backlog/delivery direct | **VALIDÉE** |
| **POC-CAND-09** | Commit / push / **draft PR** du cadrage (via POC-G10) | **VALIDÉE** |
| **POC-CAND-10** | Aucun lancement POC tant que gates nécessaires non ouverts explicitement | **VALIDÉE** |

---

## 7. Gates Morris — état 2026-07-19

| Gate | Objet | Statut |
|------|-------|--------|
| **POC-G1** | Problème + objectif de preuve | **VALIDÉ** |
| **POC-G2** | Scénario métier unique S1 | **VALIDÉ** |
| **POC-G3** | Frontières d’autorité et de vérité | **VALIDÉ** |
| **POC-G4** | Niveau maximal d’automatisation | **VALIDÉ** |
| **POC-G5** | Lecture Git réelle ; écritures distantes simulées | **VALIDÉ** |
| **POC-G6** | Critères succès / échec / abandon | **VALIDÉ** |
| **POC-G7** | Architecture POC candidate | **PROPOSÉ / NON VALIDÉ** |
| **POC-G8** | Backlog POC | **PROPOSÉ / NON VALIDÉ** |
| **POC-G9** | Delivery POC | **PROPOSÉ / NON VALIDÉ** |
| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ** |

**Cette décision n’autorise pas le merge** de la draft PR — merge = GO Morris distinct.

---

## 8. Impacts

Cadrage validé → versionnement autorisé (draft PR) → après merge/post-merge : décision distincte sur **POC-G7** uniquement. Pas de shortcut delivery.

---

## 9. Dette / ouverts

- Outil / forme orchestrateur (réserve POC-CAND-07)
- Harness vs UI P0
- Allowlist chemins détaillée (architecture)
- Clôture formelle AF
- MVP / industrialisation / réserves P0

---

## 10. Séquence après intégration du cadrage

```text
Draft PR cadrage (POC-G10) — EN COURS
  → GO merge (décision distincte)
  → post-merge cadrage
  → décision distincte architecture POC ciblée (POC-G7)
  → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
  → décision post-POC : abandon / itération / préparation MVP
```

POC-G7 / G8 / G9 **non ouverts**.

---

## 11. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage | **VALIDÉ PAR MORRIS** — 2026-07-19 |
| POC lancé | **Non** |
| POC-G7…G9 | **Fermés** |
| Runtime / techno | **Non sélectionnés** |
| Versionnement | **Autorisé** (draft PR) |
| Merge | **Non autorisé** |

**Verdict PR readiness :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`

---

*Decision pack VALIDÉ 2026-07-19 — POC NON LANCÉ — merge non autorisé.*
