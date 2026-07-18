# SFIA Studio — Decision pack conception fonctionnelle (validation)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `10-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle (finalisation documentaire) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Statut** | `functional-design-validated` |
| **Destinataire** | Morris (L0) |
| **Décision** | Validation Morris — **2026-07-18** |

> Pack de **validation**. FD-CAND-01…08 **VALIDÉES**. Identifiants `FD-CAND-*` = locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL. **Pas de D-VAL-12.**

---

## 1. Synthèse du cycle

| Étape | Fait |
|-------|------|
| Sélection cycle 2 | Morris — 2026-07-18 |
| Production `08`–`10` | Cycle conception Critical |
| Revue handoff | `80987d8…` sur `sfia/review-handoff` |
| **Validation conception** | **Morris — 2026-07-18 — VALIDÉE** |
| Intégration Git projet | **Non réalisée** — GO distinct requis |
| Cycle suivant | **Non sélectionné** |

Livrables validés localement :

- `08-functional-design.md` — contrat fonctionnel ;
- `09-functional-flows-and-rules.md` — parcours F1–F12 et règles BR ;
- `10-functional-decision-pack.md` — le présent pack de validation.

Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé. Aucun commit / push / PR projet.

---

## 2. Sources consultées

- Template cycle SFIA v2.6 ; routing guide ; operating model ; rules/guardrails ;
- Cadrage `01`–`07` sur `main` @ `8f5e8a8…` ;
- Capacités C1–C16 et UC1–UC8 (`05`) ;
- Handoff conception `80987d8…` ;
- Décisions D-VAL-1 à D-VAL-11 (inchangées).

---

## 3. Décision Morris de validation

| Champ | Valeur |
|-------|--------|
| Décision | Validation de la conception fonctionnelle SFIA Studio |
| Autorité | Morris |
| Date | **2026-07-18** |
| Objet | Socle fonctionnel `08`–`10` + FD-CAND-01…08 |
| Effet Git projet | **Aucun** (commit/push/PR interdits dans ce sous-cycle) |
| Effet architecture / POC / MVP | **Aucun** |

---

## 4. Périmètre validé

- Acteurs et responsabilités fonctionnelles ;
- Domaines D1–D10 (regroupements fonctionnels) ;
- Douze états et transitions ;
- Exigences FR-001…025 ;
- Règles BR-001…025 ;
- Parcours F1–F12 et matrices ;
- Invariants INV-01…14 ;
- Données fonctionnelles candidates (sans schéma) ;
- Sécurité fonctionnelle (besoins) ;
- UX fonctionnelle non visuelle ;
- Critères AC-01…08 ;
- Risques RF-01…07 (registre à suivre).

---

## 5. Périmètre explicitement exclu (inchangé)

| Exclu | Statut |
|-------|--------|
| Architecture fonctionnelle détaillée / technique | **Non validée** |
| Stack / API / BDD / microservices / frameworks | **Non décidés** |
| Figma / maquettes / design system | Non autorisés |
| Backlog / user stories delivery | Non créés |
| POC / MVP | **Non lancés / non définis** |
| Code / tests | Interdits |
| Commit / push / PR / merge projet | **Interdits** (GO distinct) |
| Modification SFIA v2.6 / Campus360 | Interdites |

---

## 6. Réserves structurantes

| Réserve | Portée |
|---------|--------|
| Domaines D1–D10 | **≠** composants techniques |
| États / transitions | **≠** implémentation |
| Données candidates | **≠** schéma technique / BDD |
| Runtime / orchestrateur | Candidat — non contractuel |
| Architecture | Non validée |
| Stack | Non décidée |
| POC | Non lancé |
| MVP | Non défini |
| Backlog | Non lancé |
| Cycle suivant | Non lancé par cette validation |

---

## 7. FD-CAND-01 à FD-CAND-08 — VALIDÉES

> Note : les identifiants `FD-CAND` sont locaux au cycle de conception fonctionnelle. Leur validation **ne modifie pas** la numérotation D-VAL historique. **Aucune D-VAL-12.**

| ID | Décision | Effet (avec réserves) | Statut |
|----|----------|------------------------|--------|
| **FD-CAND-01** | Domaines fonctionnels D1–D10 | Socle domaines validé | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-02** | Acteurs et responsabilités | Contrat d’autorité stable | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-03** | États et transitions | Contrat de cycle validé | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-04** | Invariants INV-01…14 | Garde-fous stables | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-05** | Parcours F1–F12 | Référentiel parcours validé | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-06** | Passage à l’architecture fonctionnelle | Option de séquencement privilégiée **retenue** — **cycle non lancé** ; GO de démarrage distinct requis | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-07** | Cycle UX fonctionnel non visuel avant architecture | Option alternative **retenue** — **non sélectionnée** | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-08** | Préparer ultérieurement le périmètre POC | Préparation ultérieure autorisable — **POC non lancé** | **VALIDÉE — Morris — 2026-07-18** |

FD-CAND-06 et FD-CAND-07 n’entraînent **aucun** démarrage automatique de cycle. La sélection effective du cycle suivant reste **ouverte**.

---

## 8. Domaines / états / exigences / règles / parcours / invariants

| Élément | Statut |
|---------|--------|
| Domaines D1–D10 | **Validés** (fonctionnels ≠ techniques) |
| États et transitions | **Validés** |
| FR-001…025 | **Validées** |
| BR-001…025 | **Validées** |
| F1–F12 | **Validés** |
| INV-01…14 | **Validés** |

---

## 9. Risques (registre à suivre)

RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir historique du cycle).

---

## 10. Questions ouvertes (hors validation)

| Zone | Question |
|------|----------|
| Fonctionnel | Priorisation des parcours F* pour une première incrémentation |
| UX | Surfaces d’information minimales avant UI |
| Architecture | Frontières Studio / orchestrateur — **cycle futur non lancé** |
| POC | Preuves de faisabilité — **non sélectionnées** |
| MVP | Sous-ensemble de valeur — **non défini** |
| Branche | Sort de `project/sfia-studio-pre-framing` |

---

## 11. Décisions encore ouvertes

| Décision | Statut |
|----------|--------|
| Autorisation commit / push / PR de la conception | **Non prise** — interdite dans ce sous-cycle |
| Sélection / lancement du cycle architecture fonctionnelle | **Non sélectionné** (recommandation ci-dessous) |
| Validation future du contenu d’architecture | Ouverte |
| Sort des branches (`functional-design` / `pre-framing`) | Ouvert |
| Contenu du POC | Ouvert — non lancé |
| Définition / lancement du MVP | Ouvert — non lancé |

---

## 12. Gates

| Gate | Statut |
|------|--------|
| Validation Morris conception | **VALIDÉE** — 2026-07-18 |
| FD-CAND-01…08 | **VALIDÉES** |
| Finalisation documentaire | **Autorisée** (ce sous-cycle) |
| GO Git projet (commit/push/PR) | **Interdit** |
| GO cycle suivant | **Non pris** |
| Merge / suppression branche | **Interdits** |

---

## 13. Cycle suivant

| Élément | Valeur |
|---------|--------|
| Recommandation | Architecture fonctionnelle Critical |
| Qualification | **RECOMMANDATION — NON SÉLECTIONNÉE** |
| Lancement | **Non autorisé** par la présente validation |

---

## 14. Verdict documentaire

`SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`

---

## 15. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat validé |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR validés |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — conception VALIDÉE (Morris — 2026-07-18) — FD-CAND-01…08 VALIDÉES — pas de D-VAL-12 — Critical — Morris décide.*
