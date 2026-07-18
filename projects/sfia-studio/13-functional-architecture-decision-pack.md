# SFIA Studio — Pack de décisions d’architecture fonctionnelle (amendé)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `13-functional-architecture-decision-pack.md` |
| **Statut** | `functional-architecture-validated-pr-open` |
| **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
| **Profil** | Critical |
| **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
| **Commit** | `215325858ed493564f6083ec5adc1618008593f6` |
| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) draft — merge **non autorisé** |
| **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |

> **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
> **AF-Option A/B/C** = options d’architecture fonctionnelle — **distinctes** de l’**Option C méthode** SFIA v2.6 (relation produit/méthode déjà validée).

---

## 1. Décisions validées à préserver (rappel)

| ID | Statut |
|----|--------|
| D-VAL-1…11 | Inchangées |
| FD-CAND-01…08 | VALIDÉES (conception) |
| Conception `08`–`10` | Baseline **inchangée** |
| Option C méthode SFIA v2.6 | **VALIDÉE** (D-VAL-6 / G4) — inchangée |
| D-VAL-12 | **Absente** — non créée |

---

## 2. Hors périmètre (interdit)

Stack ; API ; BDD ; services techniques ; Figma ; backlog ; POC ; MVP ; code ; commit/push/PR projet ; lancement cycle suivant ; D-VAL-12.

---

## 3. Options d’architecture fonctionnelle (AF-Option)

> Nommage **AF-Option** pour éviter toute collision avec l’Option C méthode.

### AF-Option A — Studio centré pilotage, orchestration externe

| Champ | Contenu |
|-------|---------|
| Description | Studio = pilotage + vues ; orchestration hors produit (scripts/processus humains) |
| Responsabilités | FB-01…FB-11 dans Studio ; FB-12 hors ou minimal |
| Frontières | Studio ne pilote pas un moteur intégré |
| Avantages | Simplicité initiale ; faible couplage technique anticipé |
| Limites | Moins de déterminisme ; charge Morris |
| Risques | Incohérence d’application des gates |
| Dette | Réintégration orchestrateur plus tard |
| Git vérité | Compatible |
| Autorité Morris | Compatible si gates stricts |
| Évolution | Vers AF-Option B ou AF-Option C |
| UX/UI | Surfaces pilotage prioritaires |
| Architecture technique | Orchestrateur = futur choix |
| POC/MVP | POC léger possible plus tard |
| Statut | **Non retenue** |

### AF-Option B — Studio avec moteur fonctionnel intégré, exécution externe

| Champ | Contenu |
|-------|---------|
| Description | Studio intègre logique de gates/contrats/états ; Cursor reste externe |
| Responsabilités | FB-01…FB-11 + cœur logique ; Cursor externe |
| Avantages | UX cohérente ; règles centralisées |
| Limites | Risque de « Studio = Runtime » |
| Risques | Seconde vérité ; GO implicite |
| Dette | Découplage difficile |
| Git vérité | Risque si états locaux trop forts |
| Autorité Morris | OK si discipline |
| Évolution | Peut converger vers AF-Option C |
| UX/UI | Fort impact surfaces |
| Architecture technique | Moteur à découper plus tard |
| POC/MVP | POC moteur plus tôt |
| Statut | **Non retenue** |

### AF-Option C — Studio et orchestrateur déterministe candidat séparés avec contrat explicite

| Champ | Contenu |
|-------|---------|
| Description | Studio pilote ; orchestrateur **candidat** séparé applique contrats/GO/stops ; Cursor exécute |
| Responsabilités | FB-01…FB-11 Studio ; FB-12 séparé par contrat |
| Avantages | Aligné INV-12 / BR-019 / Runtime candidat ; séparation d’autorité claire |
| Limites | Complexité de contrat |
| Risques | Sur-spécification précoce |
| Dette | Contrat à stabiliser |
| Git vérité | Compatible |
| Autorité Morris | Meilleure prévention GO système |
| Évolution | Meilleure pour architecture technique future |
| UX/UI | Studio reste surface humaine |
| Architecture technique | Découpage naturel |
| POC/MVP | POC orchestrateur borné possible plus tard |
| **Statut** | **VALIDÉE** par Morris — 2026-07-18 |

**Distinction obligatoire :** AF-Option C ≠ Option C méthode SFIA v2.6.

---

## 4. Comparaison

| Critère | AF-Option A | AF-Option B | AF-Option C |
|---------|-------------|-------------|-------------|
| Séparation autorité | Moyenne | Moyenne | **Forte** |
| Risque seconde vérité | Bas | **Élevé** | Bas–moyen |
| Alignement Runtime candidat | Faible | Ambigu | **Fort** |
| Complexité immédiate | Basse | Moyenne | Moyenne–haute |
| Évolutivité technique future | Moyenne | Contrainte | **Haute** |
| Compatibilité Option C méthode | Oui | Oui | Oui |
| Décision Morris | Non retenue | Non retenue | **VALIDÉE** |

---

## 5. Décision d’architecture — AF-Option C

**AF-Option C est VALIDÉE** par Morris (Studio ↔ orchestrateur déterministe candidat séparés, contrat explicite).

Effets automatiques **absents** : pas de stack, pas de Runtime contractuel, pas de services, pas de POC/MVP, pas de D-VAL-12.

Justification : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décideur ; prépare architecture technique sans la lancer.

---

## 6. AF-CAND — statuts après revue Morris

| ID | Décision | Statut | Effet | Effet non automatique |
|----|----------|--------|-------|----------------------|
| AF-CAND-01 | Découpe FB-01…FB-12 comme blocs fonctionnels | **VALIDÉE** | Structure docs/UX | ≠ composants tech |
| AF-CAND-02 | Orchestrateur déterministe **séparé** (AF-Option C) | **VALIDÉE** | Frontière Studio/orch. | ≠ Runtime contractuel |
| AF-CAND-03 | Git reste seule vérité durable | **VALIDÉE** | Truth model | ≠ choix stockage |
| AF-CAND-04 | Registre décisions ancré Git / preuves | **VALIDÉE** | FB-09 | ≠ schéma |
| AF-CAND-05 | États transitoires autorisés si reconstructibles | **VALIDÉE** | FB-10 | ≠ BDD |
| AF-CAND-06 | Modèle gates : GO explicite, durée, périmètre, révocation | **VALIDÉE** | FB-05 | ≠ protocole |
| AF-CAND-07 | Reprise = relecture Git + GO si sensible | **VALIDÉE** | AF-10 | ≠ auto-resume |
| AF-CAND-08 | Automatisation : L0 arbitrage ; L3–L4 exécution ; pas L5 global | **VALIDÉE** | Matrice L | ≠ implémentation |
| AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | **VALIDÉE** | Observabilité | ≠ outil APM |
| AF-CAND-10 | Option d’architecture = **AF-Option C** | **VALIDÉE** | Orientation | ≠ validation tech |
| AF-CAND-11A | Trajectoire recommandée après architecture fonctionnelle (voir §6.1) | **VALIDÉE** (recommandation uniquement) | Oriente la séquence | Ne lance aucun cycle |
| AF-CAND-11B | Sélection effective du prochain cycle | **NON DÉCIDÉE / À SÉLECTIONNER** | — | Nouveau GO Morris requis |
| AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | **VALIDÉE** | Gouvernance | — |

### 6.1 AF-CAND-11A — Trajectoire recommandée (VALIDÉE)

Après validation et intégration documentaire de l’architecture fonctionnelle, la trajectoire **recommandée** est :

1. UX/UI fonctionnelle et visuelle ;
2. architecture technique ;
3. POC borné de faisabilité ;
4. définition du MVP après retour du POC et validation Morris.

**Statut :** VALIDÉE comme **recommandation de trajectoire uniquement**.

**Effets :** oriente la séquence ; prépare le futur cycle UX/UI ; **ne lance** aucun cycle ; **ne valide** aucune architecture technique ; **ne définit** ni POC ni MVP.

### 6.2 AF-CAND-11B — Sélection du prochain cycle (NON DÉCIDÉE)

La sélection effective du prochain cycle reste une décision Morris **distincte**.

**Statut :** **NON DÉCIDÉE / À SÉLECTIONNER**.

**Effets :** aucun cycle lancé automatiquement ; UX/UI reste seulement le prochain cycle **recommandé** (via 11A) ; un nouveau GO Morris est requis pour sélectionner et lancer le cycle suivant.

---

## 7. Matrice de traçabilité (extrait structurant)

### Domaines D1–D10

| Élément | Bloc | Flux | Exigence | AF-CAND | Réserve |
|---------|------|------|----------|---------|---------|
| D1 | FB-02 | AF-01 | FR-001/002 | 01 | ≠ composant |
| D2 | FB-03 | AF-02/11 | FR-003/004/015/023 | 03 | |
| D3 | FB-04 | AF-03 | FR-005 | 01 | |
| D4 | FB-05 | AF-04/12 | FR-006/007/018/021 | 06 | |
| D5 | FB-06/12 | AF-05/06 | FR-008/009 | 02 | |
| D6 | FB-07 | AF-07/13 | FR-010/011/022 | 09 | |
| D7 | FB-08 | AF-08 | FR-012/013 | 09 | |
| D8 | FB-09 | AF-09 | FR-014/020 | 04 | |
| D9 | FB-10 | AF-10 | FR-016/017 | 07 | |
| D10 | FB-11 | **AF-01 / AF-15** | FR-024/025 | 01 | Admin/qualification + lecture bornée |

### Exigences FR-001…025

| Élément source | Bloc | Flux | Exigence | Décision | Réserve |
|----------------|------|------|----------|----------|---------|
| FR-001 | FB-02 | AF-01 | FR | AF-CAND-01 | Domaine≠composant |
| FR-002 | FB-02 | AF-01 | FR | AF-CAND-01 | Domaine≠composant |
| FR-003 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
| FR-004 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
| FR-005 | FB-04 | AF-03 | FR | AF-CAND-01 | Domaine≠composant |
| FR-006 | FB-05 | AF-04 | FR | AF-CAND-01 | Domaine≠composant |
| FR-007 | FB-05 | AF-04 | FR | AF-CAND-01 | Domaine≠composant |
| FR-008 | FB-06 | AF-05 | FR | AF-CAND-01 | Domaine≠composant |
| FR-009 | FB-05/06 | AF-06 | FR | AF-CAND-01 | Domaine≠composant |
| FR-010 | FB-07 | AF-07 | FR | AF-CAND-01 | Domaine≠composant |
| FR-011 | FB-07 | AF-07 | FR | AF-CAND-01 | Domaine≠composant |
| FR-012 | FB-08 | AF-08 | FR | AF-CAND-01 | Domaine≠composant |
| FR-013 | FB-08/09 | AF-08/09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-014 | FB-09 | AF-09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-015 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
| FR-016 | FB-10 | AF-10 | FR | AF-CAND-01 | Domaine≠composant |
| FR-017 | FB-10 | AF-10 | FR | AF-CAND-01 | Domaine≠composant |
| FR-018 | FB-05 | AF-04/05 | FR | AF-CAND-01 | Domaine≠composant |
| FR-019 | FB-06/09 | AF-05/09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-020 | FB-03/09 | AF-09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-021 | FB-05 | AF-12 | FR | AF-CAND-01 | Domaine≠composant |
| FR-022 | FB-07/09 | AF-07/09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-023 | FB-03/06 | AF-11 | FR | AF-CAND-01 | Domaine≠composant |
| FR-024 | FB-11 | **AF-01 / AF-15** | FR | AF-CAND-01 | Coûts candidats — sens inchangé |
| FR-025 | FB-11 | **AF-01 / AF-15** | FR | AF-CAND-01 | Admin paramètres — sens inchangé |

### Règles BR-001…025

Toutes couvertes via FB-05/09/12 + AF-04/09/11/12 + AF-CAND-03/06/08/12. Mapping : BR-001→FB-05/09 ; BR-002/003→FB-03/09 ; BR-004/005→FB-02 ; BR-006/007→FB-04/05 ; BR-008/011→FB-05/AF-12 ; BR-009/010→FB-07/AF-13 ; BR-012…015→FB-09/10 ; BR-016…018→FB-05 ; BR-019/025→FB-12 ; BR-020→FB-01/08 ; BR-021→réserves ; BR-022→**Option C méthode** ; BR-023/024→FB-02/11.

### Parcours F1–F12

Voir document 12 §9 — couverture complète via AF-01…AF-15.

### Invariants INV-01…14

| INV | Couverture architecture |
|-----|-------------------------|
| 01 | AF-12, FB-05 |
| 02 | FB-02, AF-01 |
| 03 | FB-08/09 |
| 04 | Truth model, AF-CAND-03 |
| 05 | AF-CAND-12 ; candidate ≠ validée |
| 06 | FB-07, AF-07 |
| 07 | AF-13 |
| 08 | AF-09, FR-022 |
| 09 | AF-11 |
| 10 | Matrice L, AF-CAND-08 |
| 11 | AF-12 |
| 12 | FB-12, **AF-Option C** |
| 13 | AF-06/10 |
| 14 | AF-CAND-* ; AF-CAND-11B non décidée |

### AC-01…08 / RF-01…07

AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde vérité, GO implicite, Runtime confondu, etc.) — registre à suivre, **non clos**.

### Douze états / transitions

États conception (intention → clôture / stop / reprise) couverts par AF-01…AF-15 et FB-01/06/10 — **sans modèle de persistance**.

---

## 8. Risques / réserves / questions Morris

**Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; promotion implicite d’AF-CAND-11B.
**Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.
**Questions Morris restantes :**
1. Autorisez-vous le ready-for-review / merge de la draft PR #211 (GO distincts) ?
2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
3. Quel sort pour les branches (`pre-framing` / `functional-design` / architecture) ?

---

## 9. Gates de validation

| Gate | Statut |
|------|--------|
| Validation AF-Option C | **FAIT** |
| Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
| AF-CAND-11B sélection cycle | **OUVERT** |
| Versionnement architecture | **Réalisé** — commit `2153258…` ; draft PR #211 |
| Ready-for-review / merge PR #211 | **Non autorisé** |
| Clôture formelle cycle architecture (post-merge) | **Non** — non intégrée sur `main` |
| Lancement UX/UI / tech / POC / MVP | **Non** |

---

## 10. Effets d’une validation / non automatiques

| Validé | N’implique pas |
|--------|----------------|
| AF-Option C | Stack / Runtime contractuel |
| FB-01…12 | Services créés |
| AF-CAND-01…10, 11A, 12 | D-VAL-12 |
| AF-CAND-11A (trajectoire) | Cycle suivant lancé |
| AF-CAND-11B | Toujours **non décidée** |

---

## 11. Proposition de cycle suivant (non lancé)

**Recommandation (AF-CAND-11A VALIDÉE) :** UX/UI fonctionnelle et visuelle en premier, puis architecture technique, POC borné, MVP après retour POC.

**Sélection (AF-CAND-11B) :** **NON DÉCIDÉE**. Aucun cycle lancé. Nouveau GO Morris requis.

---

## 12. Verdict

**Architecture fonctionnelle VALIDÉE** sur le fond — statut `functional-architecture-validated-pr-open` — commit `2153258…` — draft PR #211 — **non intégrée** sur `main`.

Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12.
Non décidé : AF-CAND-11B.
Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Merge **non autorisé**.

---

*Pack AF validé — Critical — draft PR #211 — Morris décide AF-CAND-11B et GO merge.*
