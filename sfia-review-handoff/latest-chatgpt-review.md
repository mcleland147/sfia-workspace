# SFIA Studio — Review Pack FULL — Correction G3 (R1–R5)

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-18 15:27:13 CEST |
| **Fuseau** | Europe/Paris (CEST, UTC+2) |
| **Repository** | `/Users/morris/Projects/sfia-workspace` |
| **Branche** | `project/sfia-studio-pre-framing` |
| **HEAD** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **origin/main** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **Cycle** | 1 — Correction finale vision G3 |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Review pack** | FULL — mono-cycle |
| **Review Handoff Git** | **required** |
| **Verdict** | `SFIA STUDIO G3 RESERVES ADDRESSED — READY FOR FINAL G3 REVIEW` |

---

## 1. État Git

| Élément | Valeur |
|---------|--------|
| Staged | Aucun |
| Tracked hors périmètre | `M projects/campus360/README.md` (préexistant, non touché) |
| Studio | `?? projects/sfia-studio/` — 4 fichiers corrigés |
| Commit projet | Aucun |

---

## 2. Sources

Template v2.6 ; routing ; operating model ; rules ; 4 docs Studio ; handoff `f648fbd` (D-VAL-3) ; décisions Morris D-VAL-4..7 de ce prompt.

---

## 3. Décisions D-VAL-1 à D-VAL-7

| # | Contenu | Statut |
|---|---------|--------|
| D-VAL-1 | Initier pré-cadrage | VALIDÉE |
| D-VAL-2 | Socle documentaire local | VALIDÉE |
| D-VAL-3 | Produit complet ; POC = faisabilité | VALIDÉE |
| D-VAL-4 / G1 | Projet officiel | VALIDÉE |
| D-VAL-5 / G2 | Problème / opportunité | VALIDÉE |
| D-VAL-6 / G4 | Option C | VALIDÉE |
| D-VAL-7 / G5 | Principe POC faisabilité | VALIDÉE (principe) |

---

## 4. Statut G1–G7

| Gate | Statut |
|------|--------|
| G1 | VALIDÉ — GO |
| G2 | VALIDÉ — GO |
| G3 | CORRECTION AUTORISÉE — VALIDATION FINALE EN ATTENTE |
| G4 | VALIDÉ — OPTION C |
| G5 | VALIDÉ SUR LE PRINCIPE |
| G6 | EN ATTENTE |
| G7 | EN ATTENTE |

---

## 5. Réserves G3 traitées

| ID | Traitement |
|----|------------|
| G3-R1 | Industrialiser la plateforme, pas les cycles |
| G3-R2 | Orchestration déterministe candidate ; Runtime non contractuel |
| G3-R3 | macOS = contrainte de preuve POC |
| G3-R4 | Critères candidats de valeur ; POC ≠ valeur |
| G3-R5 | Couverture progressive des 15 cycles |

---

## 6. Contenu complet des fichiers


### 6.1 — `projects/sfia-studio/README.md`

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `pre-framing-g3-correction-ready-for-final-review` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 correction finale vision G3 (DOC, Critical) |
| **Typologie cycle** | DOC — composante EVOL projet |
| **Cycle projet** | 1 — Cadrage (sous-phase : **correction finale vision produit**) |
| **Profil SFIA** | Critical |
| **Branche** | `project/sfia-studio-pre-framing` |
| **Chemin** | `projects/sfia-studio/` |

---

## 1. Finalité du projet (produit complet)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.

### Formulation structurante (D-VAL-3)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Distinction obligatoire

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme complète — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée |
| **MVP** | Première version **réellement utilisable** (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** (sécurisée, observable, maintenable, distribuable) — **pas** « industrialiser les cycles » |

### Vision produit (candidat G3 — correction R1–R5)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions.

Sa séparation avec l’interface SFIA Studio reste à qualifier pendant l’architecture fonctionnelle et technique.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel d’orchestration déterministe | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

La cible produit prévoit une **couverture progressive** des quinze cycles SFIA. Cette cible n’implique **pas** leur disponibilité dans le POC ou le MVP. Chaque incrément couvre uniquement les cycles nécessaires à la valeur et aux risques traités.

### Faisabilité vs valeur métier

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique uniquement |
| **MVP / expérimentations produit** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS / environnement local

Le POC devra pouvoir être exécuté dans l’environnement local de Morris sur **macOS**. Cette contrainte de preuve **ne présume ni** du support technique **ni** du mode de distribution du produit cible (native, web locale, desktop packagée, cloud, hybride — **non décidés**).

### Relation méthode (G4 — Option C)

SFIA Studio est un **produit indépendant consommant SFIA v2.6**. Toute évolution de méthode = cycle CAPA/EVOL méthode séparé + GO Morris. **Aucune modification de v2.6** dans ce projet sans cycle dédié.

**SFIA Studio n’est pas une promotion de SFIA v2.7, ni une relance de SFIA v3.0.**

---

## 2. Trajectoire macro

```text
SFIA Studio — produit cible complet
  → cadrage produit complet
  → architecture fonctionnelle et technique cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP réellement utilisable
  → construction incrémentale
  → industrialisation de la plateforme
```

Aucun cycle lancé automatiquement. Aucune stack / architecture validée.

---

## 3. Navigation

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, décisions, vision corrigée |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision G3-R1–R5, valeur produit |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive des cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Gates G1–G7 et D-VAL |

> **Pré-cadrage ≠ cadrage détaillé / architecture / UX / backlog / POC / MVP / code.**

---

## 4. Justification Critical

Correction de vision structurante ; transcription D-VAL-4 à D-VAL-7 ; impacts croisés produit / POC / MVP / industrialisation ; G6/G7 dépendent de la conformité G3.

N’autorise pas : architecture, stack, POC, MVP, doctrine, commit projet, push projet, PR.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| **Git = source de vérité** | Durable ; stockage opérationnel éventuel = dérivé / reconstructible (hypothèse) |
| **Morris décide** | Gates structurants |
| **GPT / Cursor** | Qualifient / exécutent — ne décident pas |
| **Option C** | Produit indépendant consommant v2.6 (**validé**) |
| **POC ≠ valeur métier** | Faisabilité ≠ MVP |
| **Couverture progressive** | 15 cycles = cible, pas obligation immédiate |
| **Runtime candidat** | Besoin d’orchestration — architecture non figée |
| **macOS = preuve** | Pas plateforme produit |
| **Observation ≠ règle** | Pas de promotion méthode |

---

## 6. Gates (statut actualisé)

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Projet officiel | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | Problème / opportunité | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | Vision produit complète | **CORRECTION AUTORISÉE — VALIDATION FINALE EN ATTENTE** |
| **G4** | Relation v2.6 | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | POC de faisabilité | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) — périmètre détaillé ultérieur |
| **G6** | Cadrage détaillé | **EN ATTENTE** (après validation finale G3) |
| **G7** | Commit / push / PR socle | **EN ATTENTE** (après validation finale G3) |

**Rappels :** G1 ≠ autorisation cadrage détaillé. G5 ≠ démarrage du POC. G4 ≠ modification de v2.6.

---

## 7. Décisions validées (D-VAL)

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Créer le socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité uniquement | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème et opportunité validés | G2 |
| D-VAL-6 | Option C — produit indépendant consommant v2.6 | G4 |
| D-VAL-7 | Principe POC de faisabilité validé ; périmètre détaillé après cadrage/archi | G5 |

### En attente

| Décision | Statut |
|----------|--------|
| Validation finale vision produit (G3) | Après revue de cette correction |
| Cadrage détaillé (G6) | Après G3 final |
| Commit / push / PR (G7) | Après G3 final |
| Stack / architecture / contenu POC / MVP | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT de la conformité G3-R1 à G3-R5.
2. Morris : **validation finale G3**.
3. Puis arbitrage **G6** et **G7**.

**Verdict de ce cycle :** `SFIA STUDIO G3 RESERVES ADDRESSED — READY FOR FINAL G3 REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` (consommée, non modifiée) |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 baseline |
| Documents projet | `projects/sfia-studio/` (locaux, non mergés) |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné |

---

*SFIA Studio — projet officiel — Option C — G3 en validation finale — baseline SFIA v2.6 — Morris décide.*
```

### 6.2 — `projects/sfia-studio/01-opportunity-and-vision.md`

```markdown
# SFIA Studio — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (correction finale vision G3) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (consommée — Option C) |
| **Statut** | `pre-framing-g3-correction-ready-for-final-review` |
| **Autorité** | Morris |

> Vision produit en **correction G3-R1 à G3-R5**. Validation finale G3 **en attente** après revue. Pas de cadrage détaillé, architecture, stack, MVP ni POC démarrés.

---

## 1. Résumé exécutif

Boucle actuelle (observation) :

**Morris → ChatGPT → template Git → prompt Cursor → exécution → review pack → analyse ChatGPT → décision Morris.**

Opérationnelle sous SFIA v2.6, mais fragmentée.

**SFIA Studio** (projet officiel) construit une **plateforme métier opérationnelle et durable** pour piloter les cycles et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris — en **consommant** SFIA v2.6 (Option C).

| Élément | Statut |
|---------|--------|
| D-VAL-1 à D-VAL-3 | **Validés** |
| G1 projet officiel (D-VAL-4) | **VALIDÉ** |
| G2 problème / opportunité (D-VAL-5) | **VALIDÉ** |
| G4 Option C (D-VAL-6) | **VALIDÉ** |
| G5 principe POC (D-VAL-7) | **VALIDÉ SUR LE PRINCIPE** |
| G3 vision produit | **Correction traitée — validation finale en attente** |
| G6 / G7 | **EN ATTENTE** après G3 final |

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

Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6/G7 bloqués jusqu’à G3 final ; Campus360 hors périmètre.

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
6. G1/G2/G4/G5 principe correctement marqués ; G3 final en attente ; G6/G7 en attente.

---

## 21. Relation SFIA v2.6

| Option | Statut |
|--------|--------|
| A — Extension compatible | Non retenue |
| B — Évolution méthode | Non retenue (cycles séparés possibles plus tard) |
| **C — Produit indépendant consommant v2.6** | **VALIDÉE (D-VAL-6 / G4)** |

---

## 22. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / gates |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | D-VAL et gates |

---

*SFIA Studio — vision corrigée G3-R1–R5 — Option C — validation finale G3 en attente — Morris décide.*
```

### 6.3 — `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# SFIA Studio — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (correction finale vision G3) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C — consommée) |
| **Statut** | `pre-framing-g3-correction-ready-for-final-review` |
| **Référence** | Template v2.6 §4.1 ; routing guide §4–§6 |

> **Règle (G3-R5) :** les 15 cycles représentent la **cible de couverture progressive** du produit. Aucun incrément n’est obligé de les couvrir tous. Le MVP pourra couvrir un **sous-ensemble prioritaire** — **non sélectionné ici**. Aucun cycle n’est automatiquement activé. Profil requalifié à chaque cycle.
>
> **Décisions :** G1, G2, G4 (Option C), principe G5 **validés**. G3 en validation finale. G6/G7 en attente.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur trajectoire produit complète |
| **Activable** | Fortement probable si engagé |
| **Conditionnel** | Dépend d’un événement / arbitrage |
| **Événementiel** | INC / RUN / EVOL |

---

## 2. Quatre couvertures distinctes

| Couverture | Objet | Règle |
|------------|-------|-------|
| **Produit cible** | Progressive des 15 cycles | Cible long terme — pas obligation immédiate |
| **POC** | Lot technique mobilisant plusieurs cycles | **Jamais** un cycle autonome ; faisabilité seulement |
| **MVP** | Sous-ensemble prioritaire | À définir au cadrage / backlog — **pas ici** |
| **Industrialisation** | Cycles renforcés (sécurité, release, RUN…) | Exploitation durable de la **plateforme** |

Le POC est un **lot** pouvant mobiliser architecture technique, intégration/DevOps, sécurité, QA — **pas** un 16ᵉ cycle.

---

## 3. Familles de cycles

| Famille | Exemples |
|---------|----------|
| Conception produit cible | 1–4, 6 |
| POC de faisabilité (lot) | Parties bornées de 6, 7, 8, 9, 10 |
| Construction MVP | 5, 8, puis 9–12 selon besoin |
| Industrialisation plateforme | 7, 10–12 renforcés |
| Évolution méthode | Hors produit — CAPA/EVOL + GO Morris |

---

## 4. Synthèse des 15 cycles (hypothèse produit)

| # | Cycle | Caractère | Note |
|---|-------|-----------|------|
| 1 | Cadrage | Quasi systématique | Pré-cadrage ; cadrage détaillé si G6 |
| 2 | Conception fonctionnelle | Quasi systématique | Plateforme métier |
| 3 | Architecture fonctionnelle | Activable | Orchestration déterministe à cadrer — non validée |
| 4 | UX/UI | Activable | Figma désactivé ici |
| 5 | Backlog / user stories | Quasi systématique | Après POC / poursuite — sous-ensemble MVP |
| 6 | Architecture technique | Activable | Cible d’abord ; POC en dérive |
| 7 | Intégration / DevOps | Activable | Faisabilité puis industrialisation |
| 8 | Delivery | Quasi systématique | Lot POC borné puis incréments MVP |
| 9 | QA / validation | Quasi systématique | QA faisabilité **et** QA produit |
| 10 | Sécurité / RSSI | Activable | Critique produit ; contrôles en POC |
| 11 | Déploiement / release | Activable | Surtout industrialisation plateforme |
| 12 | Observabilité / RUN | Activable | Industrialisation ; tests limités en POC |
| 13 | PR readiness | Quasi systématique | Si versionnement |
| 14 | Post-merge | Quasi systématique | Si merge |
| 15 | Capitalisation / REX | Quasi systématique | Observations ≠ promotion méthode |

---

## 5. Profils probables (non figés)

Pré-cadrage / correction G3 : Critical. Autres situations : à requalifier. Aucun profil futur figé.

---

## 6. Déclencheurs (hypothèses)

| Phase | Déclencheur | Cycles probables |
|-------|-------------|------------------|
| Cadrage produit | GO G6 (après G3 final) | 1 suite |
| Conception / archi | Clôture cadrage | 2, 3, 4, 6 |
| POC (lot) | GO dédié post-archi | 6/7/8/9/10 bornés |
| MVP | GO post-POC | Sous-ensemble via 5, 8… |
| Industrialisation plateforme | Maturité MVP | 7, 10–12 |
| Capitalisation | Leçon durable | 15 |

---

## 7. Blocs transverses

FinOps, RGPD, accessibilité, performance, sécurité, DevOps, observabilité, capitalisation : identifiés. UX/UI+Figma **désactivé**. GreenOps conditionnel.

---

## 8. Projet vs méthode

| Famille | Règle |
|---------|-------|
| Cycles projet SFIA Studio | Sous `projects/sfia-studio/` (+ code futur) |
| Cycles méthode | `method/`, `prompts/` — GO Morris + cycle dédié (Option C) |

Interdit ici : modification v2.6, v2.7, v3.0.

---

## 9. Trajectoire macro (hypothèse)

```text
Pré-cadrage
  → cadrage détaillé produit
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI initiale si nécessaire
  → architecture technique candidate
  → POC de faisabilité (lot multi-cycles)
  → QA de faisabilité
  → décision Morris de poursuite
  → backlog / MVP (sous-ensemble)
  → delivery incrémental
  → sécurité / QA / release / RUN readiness
  → industrialisation de la plateforme
  → capitalisation / REX
```

Ne lance aucun cycle. Pas de backlog. Pas d’architecture validée. Pas de sélection du sous-ensemble MVP.

---

## 10. Ce que ce document n’est pas

Activation auto ; architecture déguisée ; backlog ; sélection MVP ; validation POC ; centrage projet sur POC ; obligation immédiate des 15 cycles.

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Décisions / gates |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision G3-R1–R5 |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | D-VAL / gates |

---

*SFIA Studio — couverture progressive — POC = lot — Option C — Morris décide.*
```

### 6.4 — `projects/sfia-studio/03-pre-framing-decision-pack.md`

```markdown
# SFIA Studio — Decision pack de pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (correction finale vision G3) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut pré-cadrage** | `pre-framing-g3-correction-ready-for-final-review` |
| **Verdict** | `SFIA STUDIO G3 RESERVES ADDRESSED — READY FOR FINAL G3 REVIEW` |

---

## 1. Objet

Pack d’arbitrage pour :
1. tracer D-VAL-1 à D-VAL-7 ;
2. permettre la **validation finale G3** après traitement G3-R1 à G3-R5 ;
3. préparer ensuite les décisions **G6** et **G7**.

---

## 2. Décisions validées (D-VAL-1 à D-VAL-7)

| # | Décision | Gate | Statut |
|---|----------|------|--------|
| D-VAL-1 | Initier le pré-cadrage SFIA Studio | — | **VALIDÉE** |
| D-VAL-2 | Créer localement le socle documentaire | — | **VALIDÉE** |
| D-VAL-3 | Produit complet ; POC = faisabilité technique intermédiaire uniquement | Trajectoire | **VALIDÉE** |
| D-VAL-4 | SFIA Studio confirmé comme **projet officiel** | **G1** | **VALIDÉE** |
| D-VAL-5 | Problème et opportunité **validés** | **G2** | **VALIDÉE** |
| D-VAL-6 | **Option C** — produit indépendant consommant SFIA v2.6 | **G4** | **VALIDÉE** |
| D-VAL-7 | **Principe** d’un POC technique de faisabilité **validé** ; périmètre détaillé après cadrage/archi suffisants | **G5** | **VALIDÉE (principe)** |

### Contenu D-VAL-3 (rappel)

Produit complet ; POC ≠ produit ≠ MVP ≠ limite de trajectoire ; POC dérivé de vision/archi ; MVP et industrialisation distincts.

### Contenu D-VAL-6 (G4)

SFIA Studio adopte l’Option C. Toute évolution de méthode = cycle CAPA/EVOL méthode séparé + GO Morris. **Ne modifie pas** SFIA v2.6.

### Contenu D-VAL-7 (G5)

Principe POC validé. **N’autorise pas** le démarrage du POC. Périmètre précis ultérieur.

---

## 3. Statut des gates G1–G7

| Gate | Statut | Formulation |
|------|--------|-------------|
| **G1** | **VALIDÉ — GO** | SFIA Studio est un projet officiel. |
| **G2** | **VALIDÉ — GO** | Le problème et l’opportunité sont validés. |
| **G3** | **CORRECTION AUTORISÉE — VALIDATION FINALE EN ATTENTE** | Réserves G3-R1 à G3-R5 traitées dans ce cycle ; validation finale Morris après revue. |
| **G4** | **VALIDÉ — OPTION C** | Produit indépendant consommant SFIA v2.6. |
| **G5** | **VALIDÉ SUR LE PRINCIPE** | POC technique de faisabilité requis ; périmètre précis après cadrage/archi. |
| **G6** | **EN ATTENTE** | Morris statue après revue et validation finale G3. |
| **G7** | **EN ATTENTE** | Morris statue après revue et validation finale G3. |

### Rappels d’effet

| Décision | N’autorise pas |
|----------|----------------|
| G1 validé | Cadrage détaillé automatique |
| G4 Option C | Modification de SFIA v2.6 |
| G5 principe | Démarrage du POC |
| G3 correction documentaire | Validation finale G3, G6, G7 |

---

## 4. Réserves G3 traitées (R1–R5)

| ID | Réserve | Traitement |
|----|---------|------------|
| **G3-R1** | « Industrialiser les cycles » | Vision : qualifier/lancer/suivre/clôturer les cycles ; industrialiser la **plateforme** |
| **G3-R2** | Runtime figé | Mécanisme d’orchestration déterministe **candidat** ; nom non contractuel ; archi non validée |
| **G3-R3** | macOS = plateforme produit | macOS = contrainte de **preuve** POC uniquement |
| **G3-R4** | POC = valeur produit | Critères candidats de valeur ajoutés ; POC = faisabilité ; MVP = valeur |
| **G3-R5** | 15 cycles obligatoires | Couverture **progressive** ; MVP = sous-ensemble à définir plus tard |

---

## 5. Formulation G5 (principe validé)

POC destiné **uniquement** à démontrer la faisabilité d’implémentation.

Questions techniques cibles (périmètre détaillé **non figé**) :

1. Lecture état Git réel ?
2. Composition / injection instructions SFIA vers GPT ?
3. Qualification et contrat structurés par GPT ?
4. Invocation contrôlée de Cursor ?
5. Orchestration déterministe (Runtime candidat) : gates et stop conditions ?
6. Récupération / analyse résultats, diffs, review packs ?
7. Exécution dans l’environnement local Morris sur **macOS** (contrainte de preuve) ?

### Le POC ne valide pas

Produit complet ; MVP ; industrialisation plateforme ; couverture des 15 cycles ; stack ; architecture définitive ; valeur métier complète.

---

## 6. Décisions non prises

| Sujet | Statut |
|-------|--------|
| Validation finale G3 | En attente revue |
| G6 cadrage détaillé | En attente |
| G7 commit/push/PR | En attente |
| Stack / architecture | Non pris |
| Contenu exact POC / MVP | Non pris |
| Mode distribution produit | Non pris |
| L3/L4 | Non pris |
| Modification v2.6 | Interdite ici |

---

## 7. Option C (validée) — rappel impacts

| Impact | Contenu |
|--------|---------|
| Produit | Indépendant, consomme v2.6 |
| Méthode | Inchangée sans cycle CAPA/EVOL + GO |
| Risque évité | Confusion extension = baseline |

Options A/B : non retenues pour la relation produit/méthode au démarrage.

---

## 8. Trajectoire macro

```text
Produit cible complet
  → cadrage produit complet
  → architecture fonctionnelle et technique cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP réellement utilisable
  → construction incrémentale
  → industrialisation de la plateforme
```

---

## 9. Risques résiduels

| ID | Risque | Reporté à |
|----|--------|-----------|
| R1 | Seconde vérité hors Git | Cadrage / sécurité |
| R2 | Contournement gates | Sécurité ; POC |
| R3 | Runtime figé trop tôt | Architecture |
| R4 | macOS pris pour plateforme produit | G3 final / cadrage |
| R5 | Confusion POC ↔ valeur | G3-R4 / MVP |
| R6 | 15 cycles pris pour obligation MVP | G3-R5 / backlog |
| R7 | Campus360 local coexistant | Discipline Git |

---

## 10. Questions ouvertes (post-correction)

1. Morris valide-t-il **définitivement G3** après cette correction ?
2. G6 — cadrage détaillé maintenant, plus tard, ou refusé ?
3. G7 — quand versionner le socle ?
4. Quelles questions G5 retenues dans le périmètre POC détaillé (ultérieur) ?
5. POC jetable ou réutilisable (post-POC) ?

---

## 11. Critères de clôture pré-cadrage (actualisés)

| Critère | Gate | État |
|---------|------|------|
| Projet officiel | G1 | **Fait** |
| Problème / opportunité | G2 | **Fait** |
| Vision produit | G3 | **Correction faite — validation finale attendue** |
| Relation v2.6 Option C | G4 | **Fait** |
| Principe POC | G5 | **Fait (principe)** |
| Cadrage détaillé | G6 | En attente |
| Versionnement | G7 | En attente |

---

## 12. Prochaine décision recommandée

1. Revue ChatGPT conformité G3-R1–R5.
2. **Validation finale G3** par Morris.
3. Puis **G6** puis **G7**.

G6 favorable ≠ cadrage démarré automatiquement. G5 ≠ POC démarré.

---

## 13. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| G3-R1 à G3-R5 | Traitées |
| D-VAL-1 à D-VAL-7 | Tracées |
| Architecture / stack | Non choisies |
| Ready for final G3 review | **Oui** |
| Ready for G6 / G7 | **Après** validation finale G3 |
| Ready for POC / MVP | **Non** |

**Verdict :** `SFIA STUDIO G3 RESERVES ADDRESSED — READY FOR FINAL G3 REVIEW`

---

## 14. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / décisions |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision corrigée |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |

---

*SFIA Studio — decision pack — G3 correction — D-VAL-1..7 — Morris décide.*
```

---

## 7. Validations

| Contrôle | Résultat |
|----------|----------|
| Phrase « industrialiser les cycles » comme affirmation | Absente (seulement en négation / correction) |
| Runtime non figé | Oui |
| macOS = preuve | Oui |
| Critères valeur candidats | Oui |
| Couverture progressive | Oui |
| G1/G2/G4/G5 principe | Validés |
| G3 final / G6 / G7 | En attente |
| Stack / architecture / POC démarré | Non |
| Staged projet | Aucun |
| Campus360 touché | Non |
| `git diff --check` | OK |

## 8. Réserves restantes

1. Validation finale G3 par Morris après revue GPT.
2. Périmètre détaillé POC non figé (attendu).
3. Sous-ensemble MVP non sélectionné (attendu).
4. Handoff précédent f648fbd obsolète jusqu’à ce push.
5. Working tree Campus360 coexistant.

## 9. Verdict

`SFIA STUDIO G3 RESERVES ADDRESSED — READY FOR FINAL G3 REVIEW`

---

*Fin review pack FULL — ne pas committer `.tmp-sfia-review/` sur la branche projet.*
