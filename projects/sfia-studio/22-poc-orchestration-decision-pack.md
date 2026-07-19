# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) ; sync post-merge cycle 14 |
| **Profil** | Critical (cadrage) / Standard (post-merge sync) |
| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) |
| **Préfixe décisions** | `POC-CAND-*` — identifiants locaux (même après validation) |
| **D-VAL nouvelles** | **Aucune** |
| **POC** | **Non lancé** |
| **Destinataire** | Morris |

> Décision Morris du **2026-07-19** : validation du cadrage Option B. Intégration Git : PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) **MERGED** (`be713c45…`). POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucune décision d’architecture POC prise. POC **non lancé**.

---

## 1. Observations factuelles

1. Delivery P0 clôturé (PR #217) ; capitalisation intégrée (PR #218).
2. Cadrage Option B produit, **validé Morris 2026-07-19**, puis **intégré** (PR #219).
3. AF-Option C **VALIDÉE** (fond) et **opérationnalisée** pour le POC (POC-CAND-03).
4. Baseline SFIA v2.6 / Option C méthode **inchangée**.
5. POC / MVP / industrialisation **non engagés**.
6. POC-G10 **consommé** par le versionnement et le merge du cadrage.

---

## 2. Hypothèses

H1–H8 du document `20` — dont H6 (orchestrateur local) **retenue avec réserve** (POC-CAND-07) : outil/forme **ouverts**.

---

## 3–5. Options (historique de cadrage)

Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées comme **historique de qualification**. Les choix Morris sont dans §6–7.

---

## 6. Décisions POC-CAND — état post-intégration PR #219

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
| **POC-CAND-09** | Commit / push / draft PR du cadrage (via POC-G10) | **VALIDÉE** puis **consommée** (PR #219) |
| **POC-CAND-10** | Aucun lancement POC tant que gates nécessaires non ouverts explicitement | **VALIDÉE** |

---

## 7. Gates Morris — état post-intégration PR #219

| Gate | Objet | Statut |
|------|-------|--------|
| **POC-G1** | Problème + objectif de preuve | **VALIDÉ** |
| **POC-G2** | Scénario métier unique S1 | **VALIDÉ** |
| **POC-G3** | Frontières d’autorité et de vérité | **VALIDÉ** |
| **POC-G4** | Niveau maximal d’automatisation | **VALIDÉ** |
| **POC-G5** | Lecture Git réelle ; écritures distantes simulées | **VALIDÉ** |
| **POC-G6** | Critères succès / échec / abandon | **VALIDÉ** |
| **POC-G7** | Architecture POC candidate | **FERMÉ / NON VALIDÉ** |
| **POC-G8** | Backlog POC | **FERMÉ / NON VALIDÉ** |
| **POC-G9** | Delivery POC | **FERMÉ / NON VALIDÉ** |
| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |

**Merge #219 = fait Git.** N’ouvre **pas** POC-G7. N’autorise **pas** le lancement du POC.

---

## 8. Impacts

Cadrage validé + intégré → cycle de cadrage **clôturable** documentairement → sync post-merge **versionnée** (draft PR #220) → prochaine décision : **GO merge #220** ; après intégration, éventuel **POC-G7**. Pas de shortcut backlog/delivery.

---

## 9. Dette / ouverts

- Outil / forme orchestrateur (réserve POC-CAND-07)
- Harness vs UI P0 (réserve d’architecture)
- Allowlist chemins détaillée (architecture)
- Clôture formelle AF
- MVP / industrialisation / réserves P0
- GO merge draft PR #220 (requis ; non accordé ici)

---

## 10. Séquence après intégration du cadrage

```text
Cadrage validé (2026-07-19)
  → POC-G10 consommé — PR #219 MERGED (be713c45…)
  → post-merge sync documentaire — versionnée ; draft PR #220 ouverte ; merge = GO Morris distinct
  → décision distincte éventuelle architecture POC (POC-G7) — FERMÉE
  → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
  → décision post-POC : abandon / itération / préparation MVP
```

POC-G7 / G8 / G9 **non ouverts**. Aucune architecture POC prise. Aucun lancement POC.

---

## 11. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage | **VALIDÉ + INTÉGRÉ** (PR #219) |
| POC-G10 | **CONSOMMÉ** |
| Sync post-merge | **Versionnée** — draft PR #220 |
| GO commit / push / draft PR | **Consommé** |
| Merge #220 | **Non autorisé** |
| POC lancé | **Non** |
| Architecture / backlog / delivery POC | **Non lancés** |
| POC-G7…G9 | **Fermés** |
| Runtime / techno | **Non sélectionnés** (outil ouvert) |
| Prochaine décision Morris | **GO merge #220** ; éventuellement POC-G7 après intégration |

**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`

---

*Decision pack VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC-G10 CONSOMMÉ — POC NON LANCÉ — POC-G7 fermé.*
