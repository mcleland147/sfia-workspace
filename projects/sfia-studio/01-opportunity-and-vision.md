# SFIA Studio — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (consommée — Option C) |
| **Statut** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Autorité** | Morris |

> **Note historique :** Ce document a porté l’opportunité et la vision lors du pré-cadrage. Le **cadrage détaillé validé** (D-VAL-9 / DF-G1) et l’**état courant post-merge** sont portés par **README et `04`–`07`**. En cas d’écart, **README prime**.

### Bandeau post-merge

| Élément | Valeur |
|---------|--------|
| Nature | Document **historique** de pré-cadrage |
| PR #207 | **MERGED** — merge `ec21074…` ; socle sur `main` |
| D-VAL-10 (historique) | Commit / push / draft PR autorisés — merge **non** autorisé par cette décision |
| Observation | Merge réalisé et vérifié techniquement |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 ; cadrage documentaire **clôturé** |
| Prochain cycle | **Non sélectionné** |

### Statut des décisions (rappel)

| Élément | Statut |
|---------|--------|
| D-VAL-1 à D-VAL-9 | **Validés** (historiques) |
| D-VAL-10 / G7 | **Historique** — commit / push / draft PR autorisés ; merge non autorisé **par D-VAL-10** |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| G1 / G2 / G4 / G6 / DF-G1 | **VALIDÉ** |
| G3 | **REVUE CONFORME** |
| G5 | **VALIDÉ SUR LE PRINCIPE** |
| Prochain cycle | **Non sélectionné** |

> Handoff review ≠ décision Morris. État courant porté par README et `04`–`07`.

---

## 1. Résumé exécutif

Boucle actuelle (observation) :

**Morris → ChatGPT → template Git → prompt Cursor → exécution → review pack → analyse ChatGPT → décision Morris.**

Opérationnelle sous SFIA v2.6, mais fragmentée.

**SFIA Studio** (projet officiel) construit une **plateforme métier opérationnelle et durable** pour piloter les cycles et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris — en **consommant** SFIA v2.6 (Option C).

Le pré-cadrage (ce document + `02`/`03`) est **clôturé et synchronisé**. Le cadrage détaillé validé vit dans `04`–`07`.

---

## 2. Définitions

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme métier complète — couverture **progressive** des cycles SFIA |
| **POC** | Preuve de faisabilité technique limitée |
| **MVP** | Première version réellement utilisable (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas des cycles |

---

## 3. Contexte

| Élément | Observation / décision |
|---------|------------------------|
| Baseline | SFIA v2.6 — **consommée**, non modifiée (Option C) |
| Source de vérité | Git |
| Autorité | Morris (L0) |
| Architecture historique Studio/Runtime/Core | Inspiration — **non validée** |

---

## 4. Problème (G2 validé)

Absence d’une plateforme métier permettant de piloter durablement les cycles SFIA (qualification → exécution contrôlée → revue → décision) tout en préservant Git, Morris, GPT, Cursor et un mécanisme d’orchestration déterministe dans leurs rôles.

---

## 5. Irritants (hypothèses)

Copier/coller GPT↔Cursor ; multiplicité d’artefacts ; dépendance à la discipline opérateur ; visibilité Git partielle ; absence d’UI métier ; tentation d’automatiser trop tôt.

---

## 6. Opportunité produit (G2 validé)

| Dimension | Contenu |
|-----------|---------|
| Produit | Plateforme métier complète de pilotage des cycles |
| Orchestration | Git + GPT + Cursor + orchestration déterministe sous gates |
| Traçabilité | Ancrée Git |
| Relation méthode | Consomme v2.6 — Option C |
| Progressivité | Produit → archi → POC → MVP → industrialisation plateforme |

---

## 7. Opportunité méthode

Épreuve terrain sur conformité aux garde-fous v2.6. **Non-objectif :** créer v2.7 ou relancer v3.0. Toute évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 8. Vision produit (corrigée G3-R1 à G3-R5)

### Formulation cible (G3-R1)

> **SFIA Studio permet de qualifier, lancer, suivre et clôturer les cycles SFIA.**
> **La plateforme est ensuite destinée à être exploitée de manière industrialisée, sécurisée, observable, maintenable et distribuable.**

Éviter toute formulation du type « industrialiser les cycles SFIA ».

### Orchestration déterministe (G3-R2)

> Un mécanisme d’orchestration déterministe, éventuellement matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions.
>
> Sa séparation avec l’interface SFIA Studio reste à qualifier pendant l’architecture fonctionnelle et technique.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Support macOS (G3-R3)

> Le POC devra pouvoir être exécuté dans l’environnement local de Morris sur macOS.
> Cette contrainte de preuve ne présume ni du support technique ni du mode de distribution du produit cible.

Plateforme produit définitive (native, web locale, desktop packagée, cloud, hybride) : **non décidée**.

### Valeur produit (G3-R4)

Le POC valide la **faisabilité technique**.
Le MVP et les expérimentations produit valideront la **valeur métier**.

**Dimensions candidates de mesure** (à confirmer au cadrage détaillé — non contractualisées) :

- réduction du nombre de manipulations entre GPT, Cursor et Git ;
- réduction des erreurs de routage et de contrat ;
- diminution du temps de préparation et de clôture d’un cycle ;
- amélioration de la visibilité sur les gates ;
- amélioration de la traçabilité des décisions ;
- diminution de la charge cognitive opérateur ;
- conformité accrue aux garde-fous SFIA ;
- reproductibilité des cycles.

### Couverture des 15 cycles (G3-R5)

> La cible produit prévoit une couverture progressive des quinze cycles SFIA.
> Cette cible n’implique pas leur disponibilité dans le POC ou le MVP.
> Chaque incrément couvre uniquement les cycles nécessaires à la valeur et aux risques traités.

Le sous-ensemble MVP reste à définir au cadrage et au backlog. Aucun cycle n’est automatiquement activé.

### Orientations candidates

| Aspect | Orientation |
|--------|-------------|
| Nature | Plateforme métier opérationnelle et durable |
| Rôle | Cockpit de cycle — pas seconde source de vérité |
| Couverture | Progressive — pas obligation immédiate des 15 |
| Décision | Morris |
| Automatisation | Progressive ; L3/L4 hors pré-cadrage |
| Orchestration | Mécanisme déterministe candidat |

### Explicitement non décidé

Stack ; architecture ; contenu exact POC ; MVP ; mode de distribution produit ; multi-user / cloud / auth détaillés.

---

## 9. Trajectoire

```text
Pré-cadrage
  → cadrage produit complet
  → conception et architecture cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP utilisable
  → delivery incrémental
  → industrialisation de la plateforme
```

POC **dérivé** de la vision et d’une architecture cible suffisamment cadrée — pas l’inverse.

---

## 10. Catégories

| Catégorie | Contenu |
|-----------|---------|
| Produit cible | Plateforme complète ; couverture progressive |
| POC | Faisabilité technique (Git, GPT, Cursor, orchestration déterministe, règles, gates) |
| MVP | Première valeur métier utilisable — non défini |
| Industrialisation | Exploitation durable de la plateforme |

---

## 11. Parties prenantes

| Acteur | Rôle |
|--------|------|
| Morris | Autorité L0 — utilisateur primaire |
| GPT | Qualification / analyse / revue |
| Cursor | Exécuteur repository |
| Orchestration déterministe (Runtime candidat) | Contrats, permissions, gates — **non validé** |
| Git / GitHub | Source de vérité / revue |

---

## 12. Proposition de valeur

Pilotage métier durable ; moins de friction ; meilleure conformité et traçabilité. Valeur mesurée via critères candidats §8 (G3-R4) au MVP — pas via le seul POC.

---

## 13. Principes fondateurs

1. Git = source de vérité durable.
2. Morris décide les gates.
3. GPT prépare ; Cursor exécute.
4. Produit complet ; POC = étape de faisabilité.
5. POC dérive de l’architecture cible.
6. POC ≠ MVP ≠ industrialisation plateforme.
7. Faisabilité technique ≠ valeur métier.
8. Couverture progressive des 15 cycles.
9. Orchestration déterministe = besoin candidat, architecture non figée.
10. macOS = contrainte de preuve POC.
11. Option C : consomme v2.6, ne la modifie pas.
12. Observation ≠ règle méthode.

---

## 14. Périmètre produit global candidat

Pilotage progressif des cycles ; orchestration sous gates ; visibilité Git ; historique décisions ; garde-fous ; trajectoire MVP puis industrialisation plateforme ; automatisation progressive future.

Le POC local macOS n’est **pas** le périmètre produit.

---

## 15. POC de faisabilité (principe G5 validé)

### Rôle

Démontrer la faisabilité d’implémentation : Git, GPT, Cursor, mécanisme d’orchestration déterministe, règles SFIA, gates Morris — depuis une interface métier.

### Questions techniques cibles (périmètre détaillé ultérieur)

| # | Question |
|---|----------|
| 1 | L’interface peut-elle lire l’état Git réel ? |
| 2 | Les instructions SFIA peuvent-elles être composées et injectées à GPT ? |
| 3 | GPT peut-il produire une qualification et un contrat structurés ? |
| 4 | Cursor peut-il être invoqué de manière contrôlée ? |
| 5 | Le mécanisme d’orchestration déterministe peut-il imposer gates et stop conditions ? |
| 6 | Résultats, diffs et review packs récupérables et analysables ? |
| 7 | Exécution possible dans l’environnement local Morris sur macOS ? |

G5 validé **n’autorise pas** le démarrage du POC. Périmètre précis après cadrage et architecture suffisante.

### Le POC ne valide pas

Produit complet ; MVP ; industrialisation ; couverture des 15 cycles ; stack ; architecture définitive ; **valeur métier complète**.

---

## 16. Hors périmètre (ce cycle)

Cadrage détaillé ; architecture ; stack ; UX/Figma ; backlog ; code ; démarrage POC/MVP ; modification v2.6 ; commit/push/PR projet.

---

## 17. Hypothèses

| ID | Hypothèse |
|----|----------|
| H1 | Friction principale = orchestration multi-outils |
| H2 | POC lève les risques techniques critiques — **pas** la valeur produit seule |
| H3 | GPT / Cursor restent moteurs d’analyse / exécution à moyen terme |
| H4 | Morris décideur au moins jusqu’au MVP |
| H5 | UI peut renforcer les gates sans les contourner |
| H6 | Option C (**validée**) reste appropriée |
| H7 | POC dérivé d’architecture cible suffisante |
| H8 | Orchestration déterministe utile ; forme/nom non figés |

---

## 18. Contraintes

Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6 et DF-G1 **réalisés** ; G7 historique (D-VAL-10) = commit/push/draft PR ; merge = fait Git (PR #207) — régularisé D-VAL-11 validée (2026-07-18) ; cadrage documentaire clôturé ; Campus360 hors périmètre.

---

## 19. Risques

Seconde vérité ; contournement gates ; Runtime figé trop tôt ; macOS pris pour plateforme produit ; confusion POC/valeur ; couverture 15 cycles prise pour obligation MVP ; architecture historique prise pour validée.

---

## 20. Critères de crédibilité G3

1. Pas de formulation « industrialiser les cycles ».
2. Runtime = candidat non figé.
3. macOS = contrainte de preuve.
4. Critères candidats de valeur présents ; POC ≠ valeur.
5. Couverture 15 cycles = progressive.
6. G1/G2/G4/G5 principe / G3 revue conforme / G6 / DF-G1 / G7 historique correctement marqués ; merge observé (PR #207) ; D-VAL-11 validée ; cadrage documentaire clôturé ; prochain cycle non sélectionné.

---

## 21. Relation SFIA v2.6

| Option | Statut |
|--------|--------|
| A — Extension compatible | Non retenue |
| B — Évolution méthode | Non retenue (cycles séparés possibles plus tard) |
| **C — Produit indépendant consommant v2.6** | **VALIDÉE (D-VAL-6 / G4)** |

---

## 22. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / gates (prime sur l’état courant) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités / cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres / critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire / décisions |

---

*SFIA Studio — document historique de pré-cadrage — PR #207 mergée — D-VAL-11 validée — Morris décide.*
