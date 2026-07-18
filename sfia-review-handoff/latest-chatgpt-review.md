# SFIA Studio — Review Pack FULL — Synchronisation pré-cadrage 01–03

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-18 16:36:34 CEST |
| **Fuseau** | Europe/Paris (CEST, UTC+2) |
| **Repository** | `/Users/morris/Projects/sfia-workspace` |
| **Branche** | `project/sfia-studio-pre-framing` |
| **HEAD** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **origin/main** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **Cycle** | Synchronisation documentaire post D-VAL-9 |
| **Profil** | Standard |
| **Baseline** | SFIA v2.6 (Option C) |
| **Review pack** | FULL — mono-cycle |
| **Review Handoff Git** | **required** |
| **Verdict** | `SFIA STUDIO PRE-FRAMING DOCS SYNCHRONIZED — READY FOR MORRIS REVIEW` |

---

## 1. État Git

| Élément | Valeur |
|---------|--------|
| Staged | Aucun |
| Modifiés ce cycle | `01`, `02`, `03` uniquement |
| Inchangés | README, `04`–`07` (SHA inchangés vs handoff `63ab142`) |
| Campus360 | Préexistant, non touché |
| Commit / push projet | Aucun (G7 en attente) |

---

## 2. Sources

Template v2.6 ; routing ; operating model ; rules ; README + `01`–`07` ; handoff `63ab142` ; décisions D-VAL-1…9 du prompt.

---

## 3. D-VAL-1 à D-VAL-9 / Gates

| # | Contenu | Gate | Statut |
|---|---------|------|--------|
| D-VAL-1…7 | Pré-cadrage / produit / G1–G5 principe | — | VALIDÉES |
| D-VAL-8 | Cadrage détaillé autorisé | G6 | VALIDÉE |
| D-VAL-9 | Cadrage détaillé validé | DF-G1 | VALIDÉE |
| G1/G2/G4/G5/G6 | — | — | VALIDÉS |
| G3 | Revue conforme | — | REVUE CONFORME |
| DF-G1 | Cadrage détaillé | — | VALIDÉ |
| G7 | Commit/push/PR projet | — | EN ATTENTE |
| Prochain cycle | — | — | Non sélectionné |

---

## 4. Statuts obsolètes corrigés

| Avant | Après |
|-------|-------|
| `pre-framing-g3-correction-ready-for-final-review` | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| G3 validation finale en attente | G3 REVUE CONFORME |
| G6 EN ATTENTE | G6 VALIDÉ |
| DF-G1 PROPOSÉ / absent | DF-G1 VALIDÉ (D-VAL-9) |
| Cadrage détaillé futur / non démarré | Cadrage détaillé validé dans `04`–`07` |
| Verdict G3 reserves addressed | Verdict synchronisation + G7 pending |

## 5. Liens ajoutés

Vers README + `04`–`07` dans chaque fichier `01`–`03`.

## 6. Fichiers modifiés (SHA)

```
01-opportunity-and-vision.md  sha=db895c5f22a8a4843a8a4c095c33ac2d415be23e525fbc040cb36bb28805b752
02-sfia-cycle-coverage-hypothesis.md  sha=d5eb9af45758d4ae419a9b193afbbda337febf8f9d5aef964485385f9932c3ec
03-pre-framing-decision-pack.md  sha=64637846762f304b97cafe7003cb3bcbaf7f93d3e2d5fce8efd9bece143557aa
```

---

## 7. Contenu complet des trois fichiers


### 7.1 — `projects/sfia-studio/01-opportunity-and-vision.md`

```markdown
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

> **Note historique :** Ce document a porté l’opportunité et la vision lors du pré-cadrage. Le **cadrage détaillé validé** (D-VAL-9 / DF-G1) est désormais porté par les documents `04` à `07`. En cas d’écart sur l’état courant, **README et `04`–`07` priment**.

### Statut actuel (synchronisation post D-VAL-9)

| Élément | Statut |
|---------|--------|
| D-VAL-1 à D-VAL-7 | **Validés** |
| D-VAL-8 / G6 | **VALIDÉ** — cadrage détaillé autorisé |
| D-VAL-9 / DF-G1 | **VALIDÉ** — cadrage détaillé validé |
| G1 / G2 | **VALIDÉ** |
| G3 | **REVUE CONFORME** |
| G4 | **VALIDÉ — OPTION C** |
| G5 | **VALIDÉ SUR LE PRINCIPE** |
| G7 | **EN ATTENTE** (commit / push / PR projet) |
| Prochain cycle | **Non sélectionné** |

> G7 reste nécessaire pour commit, push et PR de la branche projet. Le push technique du Review Handoff Git **ne vaut pas** G7.

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

Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6 et DF-G1 **réalisés** ; G7 en attente ; Campus360 hors périmètre.

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
6. G1/G2/G4/G5 principe / G3 revue conforme / G6 / DF-G1 correctement marqués ; G7 en attente ; prochain cycle non sélectionné.

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

*SFIA Studio — document historique de pré-cadrage — synchronisé post D-VAL-9 — G7 en attente — Morris décide.*
```

### 7.2 — `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# SFIA Studio — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Baseline** | SFIA v2.6 (Option C — consommée) |
| **Statut** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Référence** | Template v2.6 §4.1 ; routing guide §4–§6 |

> **Règle (G3-R5) :** les 15 cycles représentent la **cible de couverture progressive** du produit. Aucun incrément n’est obligé de les couvrir tous. Le MVP pourra couvrir un **sous-ensemble prioritaire** — **non sélectionné ici**. Aucun cycle n’est automatiquement activé. Profil requalifié à chaque cycle.
>
> **Statut actuel (post D-VAL-9) :** G1, G2, G3 (revue conforme), G4 (Option C), G5 (principe), G6 **validés**. DF-G1 **validé** (cadrage détaillé). G7 **EN ATTENTE**. Prochain cycle **non sélectionné**.
>
> La sélection du prochain cycle reste une décision Morris distincte. Aucun cycle de conception, architecture ou UX n’est lancé par cette synchronisation. En cas d’écart, README et `04`–`07` priment.

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
| 1 | Cadrage | Quasi systématique | Pré-cadrage **clôturé** ; cadrage détaillé **validé** (D-VAL-9) — voir `04`–`07` |
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
| Cadrage produit | GO G6 **réalisé** ; DF-G1 **validé** | 1 suite (cadrage détaillé livré) |
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
Pré-cadrage                          ← historique (01–03)
  → cadrage détaillé produit         ← VALIDÉ (D-VAL-9 / DF-G1) — docs 04–07
  → conception fonctionnelle         ← non lancé (recommandation, non décision)
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

Cadrage détaillé **réalisé**. Ne lance aucun cycle suivant. Pas de backlog. Pas d’architecture validée. Pas de sélection du sous-ensemble MVP. Prochain cycle = décision Morris distincte.

---

## 10. Ce que ce document n’est pas

Activation auto ; architecture déguisée ; backlog ; sélection MVP ; validation POC ; centrage projet sur POC ; obligation immédiate des 15 cycles.

---

## 11. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Décisions / gates (prime) |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision historique |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — document historique de pré-cadrage — synchronisé post D-VAL-9 — prochain cycle non lancé — Morris décide.*
```

### 7.3 — `projects/sfia-studio/03-pre-framing-decision-pack.md`

```markdown
# SFIA Studio — Decision pack de pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut pré-cadrage** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Verdict** | `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 PENDING` |

---

## 1. Objet

Pack d’arbitrage **historique** du pré-cadrage, synchronisé après validation du cadrage détaillé.

Ce document :
1. trace D-VAL-1 à D-VAL-9 ;
2. enregistre le statut G1–G7 et DF-G1 ;
3. renvoie au cadrage détaillé validé (`04`–`07`) ;
4. rappelle que **G7** et le **prochain cycle** restent des décisions Morris.

En cas d’écart sur l’état courant, **README et `04`–`07` priment**.

---

## 2. Décisions validées (D-VAL-1 à D-VAL-9)

| # | Décision | Gate | Statut |
|---|----------|------|--------|
| D-VAL-1 | Initier le pré-cadrage SFIA Studio | — | **VALIDÉE** |
| D-VAL-2 | Créer localement le socle documentaire | — | **VALIDÉE** |
| D-VAL-3 | Produit complet ; POC = faisabilité technique intermédiaire uniquement | Trajectoire | **VALIDÉE** |
| D-VAL-4 | SFIA Studio confirmé comme **projet officiel** | **G1** | **VALIDÉE** |
| D-VAL-5 | Problème et opportunité **validés** | **G2** | **VALIDÉE** |
| D-VAL-6 | **Option C** — produit indépendant consommant SFIA v2.6 | **G4** | **VALIDÉE** |
| D-VAL-7 | **Principe** d’un POC technique de faisabilité **validé** ; périmètre détaillé après cadrage/archi suffisants | **G5** | **VALIDÉE (principe)** |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | **G6** | **VALIDÉE** |
| D-VAL-9 | Cadrage détaillé SFIA Studio **validé** | **DF-G1** | **VALIDÉE** |

### Contenu D-VAL-3 (rappel)

Produit complet ; POC ≠ produit ≠ MVP ≠ limite de trajectoire ; POC dérivé de vision/archi ; MVP et industrialisation distincts.

### Contenu D-VAL-6 (G4)

SFIA Studio adopte l’Option C. Toute évolution de méthode = cycle CAPA/EVOL méthode séparé + GO Morris. **Ne modifie pas** SFIA v2.6.

### Contenu D-VAL-7 (G5)

Principe POC validé. **N’autorise pas** le démarrage du POC. Périmètre précis ultérieur.

### Contenu D-VAL-8 / D-VAL-9

D-VAL-8 a autorisé le cadrage détaillé. D-VAL-9 / DF-G1 valide le cadrage documenté dans `04`–`07`. **Ne lance pas** le prochain cycle. **Ne vaut pas** G7.

---

## 3. Statut des gates G1–G7 et DF-G1

| Gate | Statut | Formulation |
|------|--------|-------------|
| **G1** | **VALIDÉ** | SFIA Studio est un projet officiel. |
| **G2** | **VALIDÉ** | Le problème et l’opportunité sont validés. |
| **G3** | **REVUE CONFORME** | Vision corrigée = base validée du cadrage. |
| **G4** | **VALIDÉ — OPTION C** | Produit indépendant consommant SFIA v2.6. |
| **G5** | **VALIDÉ SUR LE PRINCIPE** | POC de faisabilité requis ; détail ultérieur. |
| **G6** | **VALIDÉ** | Cadrage détaillé autorisé (D-VAL-8). |
| **DF-G1** | **VALIDÉ** | Cadrage détaillé validé (D-VAL-9). |
| **G7** | **EN ATTENTE** | Commit / push / PR de la branche **projet**. |

> G7 reste nécessaire pour commit, push et PR de la branche projet. Le push technique du Review Handoff Git **ne vaut pas** G7.

### Rappels d’effet

| Décision | N’autorise pas |
|----------|----------------|
| G1 validé | Automatisme des phases suivantes |
| G4 Option C | Modification de SFIA v2.6 |
| G5 principe | Démarrage du POC |
| G6 / DF-G1 | Conception / architecture / UX / G7 / prochain cycle |

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

## 6. Décisions non prises / restantes Morris

| Sujet | Statut |
|-------|--------|
| G7 commit / push / PR projet | **EN ATTENTE** |
| Sélection du prochain cycle | **Non sélectionné** |
| Ordre conception / architecture / UX | Non pris |
| Contenu exact POC / démarrage POC | Non pris |
| MVP / backlog | Non pris |
| Stack / architecture | Non pris |
| Sécurité détaillée / secrets | Non pris |
| Mode distribution produit | Non pris |
| L3/L4 | Non pris |
| Modification v2.6 | Interdite ici |

**DF-G1 est VALIDÉ.** Les autres gates futurs (DF-G2…) restent **non validés**.

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
  → pré-cadrage (01–03) — historique synchronisé
  → cadrage détaillé (04–07) — VALIDÉ D-VAL-9 / DF-G1
  → conception / architecture / UX — non lancés
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

## 10. Questions ouvertes (post-synchronisation)

1. G7 — quand versionner le socle projet (commit / push / PR) ?
2. Quel prochain cycle (conception bornée recommandée, non décidée) ?
3. Ordre conception / architecture / UX ?
4. Quelles questions G5 retenues dans le périmètre POC détaillé (ultérieur) ?
5. POC jetable ou réutilisable (post-POC) ?

---

## 11. Critères de clôture pré-cadrage (actualisés)

| Critère | Gate | État |
|---------|------|------|
| Projet officiel | G1 | **Fait** |
| Problème / opportunité | G2 | **Fait** |
| Vision produit | G3 | **Revue conforme** |
| Relation v2.6 Option C | G4 | **Fait** |
| Principe POC | G5 | **Fait (principe)** |
| Cadrage détaillé autorisé | G6 | **Fait** |
| Cadrage détaillé validé | DF-G1 / D-VAL-9 | **Fait** |
| Versionnement projet | G7 | **En attente** |

---

## 12. Prochaine décision recommandée

1. Revue ChatGPT de cette synchronisation `01`–`03`.
2. **G7** — autorisation commit / push / PR projet (si souhaité).
3. **Sélection du prochain cycle** (conception fonctionnelle bornée = recommandation, pas décision).

G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. Handoff ≠ G7.

---

## 13. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| D-VAL-1 à D-VAL-9 | Tracées |
| DF-G1 | **VALIDÉ** |
| G7 | **EN ATTENTE** |
| Prochain cycle | Non sélectionné |
| Architecture / stack / POC / MVP | Non démarrés |
| Synchronisation 01–03 | **Oui** |

**Verdict :** `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 PENDING`

---

## 14. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / décisions (prime) |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision historique |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — decision pack historique — synchronisé post D-VAL-9 — G7 en attente — Morris décide.*
```

---

## 8. Validations

| Contrôle | Résultat |
|----------|----------|
| Exactement 3 fichiers projet modifiés | Oui |
| README / 04–07 inchangés | Oui (SHA identiques) |
| D-VAL-8 / D-VAL-9 | Présents |
| DF-G1 VALIDÉ | Oui |
| G7 EN ATTENTE | Oui |
| Prochain cycle non lancé | Oui |
| Fond historique préservé | Oui (sync statutaire) |
| Architecture / backlog / POC / MVP | Non ajoutés |
| Staged | Aucun |
| Campus360 | Non touché |

## 9. Réserves

1. README / 04–07 non re-synchronisés dans ce cycle (interdit par périmètre) — ils portent déjà D-VAL-8 / G6 ; D-VAL-9 y est porté via synchronisation 01–03 + handoff.
2. Conception fonctionnelle reste recommandation, pas décision.

## 10. Verdict

`SFIA STUDIO PRE-FRAMING DOCS SYNCHRONIZED — READY FOR MORRIS REVIEW`

---

*Fin review pack FULL — handoff ≠ G7.*
