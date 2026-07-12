# SFIA v2.0 — Design Coverage Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.0  
**Version :** 1.0 — draft revue Morris  
**Source pilote :** Chantiers360 v2 — réserve R-UX-01 (INC-05 `/prochaines-actions`)

> **Standard méthode** — cycle documentaire uniquement. Ne modifie pas le code projet, Figma, captures ni backlog sans gate dédié.

## 1. Objectif

Formaliser la **couverture design SFIA v2.0** pour répondre à la question :

> *Tous les écrans doivent-ils avoir une frame Figma dédiée, ou Cursor peut-il extrapoler à partir d'une direction artistique (DA) existante ?*

**Réponse standard :**

| Affirmation | Statut |
|-------------|--------|
| Figma obligatoire pour **chaque** écran | ❌ **Non** |
| Source explicite de cohérence design pour **chaque** écran | ✅ **Oui** |
| Extrapolation Cursor depuis patterns validés | ✅ **Oui** — sous conditions |
| Extrapolation libre sans référence | ❌ **Interdit** |
| Documentation de toute extrapolation | ✅ **Obligatoire** |

**Objectifs complémentaires :**

- éviter l'obligation de tout maquettiser en Figma au MVP ;
- éviter les écrans génériques produits par extrapolation libre ;
- capitaliser le retour d'expérience R-UX-01 (Chantiers360 v2 INC-05).

## 2. Doctrine

| Principe | Règle |
|----------|-------|
| **Figma structurant** | Figma **obligatoire** pour les écrans structurants du MVP |
| **Figma forte densité UX** | Figma **recommandé** pour les écrans à forte densité UX ou parcours critiques |
| **Figma secondaire / dérivé** | Figma **optionnel** pour écrans secondaires, dérivés ou utilitaires |
| **Extrapolation Cursor** | Autorisée **uniquement** depuis patterns validés, composants existants et DA explicitement nommée |
| **Git = source de vérité** | Décisions, réserves UX, références patterns et extrapolations versionnées dans le repo |
| **Morris = gate structurant** | Morris valide les arbitrages de couverture design et toute nouvelle DA |
| **Pas de rattrapage implicite** | Aucun cycle polish / Figma / refonte UI sans décision Morris explicite |

**Compléments standards liés :**

- `sfia-v2-design-figma-cycle-standard.md` — cycle Design Figma MVP (écrans P1 structurants)
- `sfia-v2-figma-fidelity-gate-standard.md` — preuve design-to-code sur frame de référence
- `sfia-v2-delivery-qa-test-standard.md` — QA delivery ; réserves UX documentées en QA-G3/G4

## 3. Typologie des écrans

| Type | Description | Exemples Chantiers360 v2 |
|------|-------------|--------------------------|
| **Écran structurant** | Point d'entrée, navigation principale, identité produit | Dashboard (`38:502`) |
| **Écran critique métier** | Cœur de valeur métier — erreur coûteuse si mal conçu | Fiche chantier, création chantier |
| **Écran à forte densité UX** | Nombreuses actions, états, onglets, listes complexes | Fiche tâches, fiche réserves |
| **Écran dérivé** | Agrégation, synthèse ou vue transverse depuis données existantes | `/prochaines-actions` |
| **Écran technique / utilitaire** | Support opérationnel, peu de valeur branding | États vides, messages système |
| **État vide / erreur / secondaire** | Variantes d'un écran principal | Liste chantiers vide, placeholder onglet |

## 4. Matrice de décision Figma

| Type d'écran | Figma dédié obligatoire ? | Extrapolation Cursor autorisée ? | Conditions | Gate Morris requis ? | Exemple Chantiers360 |
|--------------|---------------------------|----------------------------------|------------|----------------------|----------------------|
| Écran structurant | ✅ **Oui** | ❌ Non (spike fidélité si gate M8) | Frame P1 validée ; spike si exigé | ✅ Oui — validation design | Dashboard |
| Écran critique métier | ✅ **Oui** | ❌ Non | Frame P1 ou référence explicite validée | ✅ Oui | Création chantier |
| Écran forte densité UX | ⚠️ **Recommandé** | ⚠️ Conditionnel | Si pas de frame : gate Morris + réserve UX documentée | ✅ Si pas de frame dédiée | Fiche tâches, fiche réserves |
| Écran dérivé | ❌ Non | ✅ **Oui** | Patterns + composants existants ; DA nommée ; doc extrapolation | ⚠️ Si réserve acceptée — non bloquant | `/prochaines-actions` (R-UX-01) |
| Écran technique / utilitaire | ❌ Non | ✅ Oui | Réutilisation composants ; pas de nouvelle DA | ❌ Non si patterns validés | Messages placeholder INC-01 |
| État vide / erreur / secondaire | ❌ Non | ✅ Oui | Cohérence tokens / composants parent | ❌ Non si documenté | Empty state liste chantiers |

**Légende :** ✅ obligatoire / autorisé — ❌ interdit — ⚠️ conditionnel avec documentation.

## 5. Sources de cohérence design

Chaque écran livré doit déclarer **au moins une** source explicite :

| Source | Usage | Traçabilité repo |
|--------|-------|----------------|
| **Frame Figma dédiée** | Écrans structurants / critiques | `04-design/figma-brief.md`, node ID, captures |
| **Frame Figma de référence** | Extrapolation depuis écran proche | Lien frame + justification dans delivery doc |
| **Design system** | Composants et tokens partagés | Bibliothèque documentée ou spike |
| **Composants existants** | Réutilisation code (`components/`) | Chemins composants cités dans prompt |
| **Tokens / styles Tailwind** | Cohérence visuelle sans nouvelle DA | Config Tailwind, classes récurrentes |
| **Patterns validés** | Layouts déjà mergés et acceptés Morris | PR / frame / composant référencé |
| **Captures validées** | Preuve visuelle acceptée | `04-design/captures/` |
| **Règles explicites prompt Cursor** | Contraintes d'extrapolation dans le cycle delivery | Prompt + réserve UX si applicable |

> **Invariant :** l'absence de frame Figma dédiée **n'exempte pas** de déclarer une source de cohérence.

## 6. Règles d'extrapolation Cursor

Cursor peut extrapoler un écran **sans frame Figma dédiée** si **toutes** les conditions suivantes sont remplies :

| # | Condition |
|---|-----------|
| C1 | L'écran est **secondaire, dérivé, utilitaire** ou **état secondaire** (voir §3–§4) |
| C2 | Les **composants et patterns** cibles existent déjà dans le code ou sont validés par une frame de référence |
| C3 | La **DA cible** est **explicitement nommée** (frame, spike, composant parent) |
| C4 | Le prompt **interdit** la création d'une nouvelle direction artistique |
| C5 | Le résultat est documenté comme **« design extrapolé depuis patterns existants »** |
| C6 | Une **réserve UX** est ouverte si aucune frame dédiée — statut **acceptée** par Morris si non bloquant |
| C7 | Aucun écran **structurant** n'est remplacé par extrapolation libre |

**Documentation minimale extrapolation :**

- écran concerné (route, composant) ;
- patterns / composants réutilisés (chemins, frames) ;
- décision Morris ou réserve UX (ex. R-UX-01) ;
- absence de rattrapage design dans le cycle courant.

## 7. Interdictions

| # | Interdiction |
|---|--------------|
| I1 | Créer une **nouvelle direction artistique implicite** non validée Morris |
| I2 | Livrer un écran **générique** (admin template, UI par défaut) si une DA validée existe |
| I3 | Remplacer un **écran structurant Figma** par une extrapolation libre |
| I4 | Lancer un **rattrapage design** (Figma, polish, refonte) sans décision Morris |
| I5 | Modifier **Figma, captures, code UI** dans un cycle méthode documentaire |
| I6 | **Lever** une réserve UX sans cycle dédié et validation Morris |
| I7 | Inférer **GO design polish** depuis une extrapolation acceptée avec réserves |

## 8. Modèle de réserve UX

### R-UX-XX — Écran sans frame Figma dédiée

| Champ | Contenu attendu |
|-------|-----------------|
| **Constat** | Écran livré sans maquette Figma dédiée |
| **Type d'écran** | dérivé / secondaire / utilitaire / autre (§3) |
| **Sources de cohérence** | patterns, composants, frames de référence cités |
| **Impact** | fonctionnel / QA / méthode — bloquant ou non |
| **Statut** | Ouverte — Acceptée / À traiter / Levée |
| **Décision Morris** | acceptation cycle courant ; pas de rattrapage ; etc. |
| **Traitement éventuel** | cycle polish / frame Figma / design system — **séparé** |
| **Blocage PR ?** | Non si acceptée et documentée — Oui si structurant sans gate |
| **Capitalisation** | alimente ce standard ou évolution méthode |

**Exemple pilote :** R-UX-01 — Chantiers360 v2 INC-05.

## 9. Bloc prompt Cursor type

### Écran sans frame Figma dédiée — extrapolation DA existante

```text
Contexte design :
- Écran : <route / composant>
- Type : écran dérivé / secondaire (sfia-v2-design-coverage-standard.md §3)
- Aucune frame Figma dédiée pour cet écran.

Sources de cohérence obligatoires :
- DA cible : <frame Figma / spike / composant parent — ex. Dashboard 38:502>
- Patterns à réutiliser : <liste composants / layouts — chemins repo>
- Tokens / styles : <Tailwind / tokens existants>

Interdictions :
- Ne pas créer une nouvelle direction artistique.
- Ne pas produire d'UI générique type admin dashboard.
- Ne pas modifier Figma / captures / 04-design/.
- Ne pas lancer de rattrapage design.

Documentation attendue :
- Marquer l'implémentation comme « design extrapolé depuis patterns existants ».
- Documenter la réserve UX R-UX-XX si applicable.
- Référencer sfia-v2-design-coverage-standard.md.

Gate :
- Gate Morris non requis si écran secondaire/dérivé + patterns validés + réserve acceptée.
- Gate Morris obligatoire si écran structurant ou nouvelle DA.
```

## 10. Gates Morris

| Situation | Gate Morris |
|-----------|-------------|
| Écran **structurant** sans frame Figma dédiée | ✅ **Obligatoire** — NO-GO delivery sans arbitrage |
| **Nouvelle DA** (palette, typo, layout system) | ✅ **Obligatoire** |
| **Divergence forte** Figma ↔ code sur écran P1 | ✅ **Obligatoire** |
| Écran **secondaire / dérivé** + patterns validés + réserve UX acceptée | ❌ **Non requis** pour PR readiness |
| Levée réserve UX (frame dédiée, polish) | ✅ **Obligatoire** — cycle séparé |

## 11. Niveaux d'automatisation

| Niveau | Rôle — design coverage |
|--------|-------------------------|
| **L0** | Morris — arbitrage couverture design, acceptation réserves UX, GO polish |
| **L1** | Contrôle présence source cohérence + matrice §4 avant PR readiness |
| **L2** | Génération docs réserves UX, prompts extrapolation, rapports QA |
| **L3** | Implémentation UI bornée — réutilisation composants existants uniquement |
| **L4** | Orchestration design → delivery avec gates Figma + coverage + QA |
| **L5 global** | **Interdit** — pas d'extrapolation ou delivery UI sans gates |

Voir : `sfia-v2-automation-levels.md`.

## 12. Application — Chantiers360 v2 / R-UX-01

| Élément | Valeur |
|---------|--------|
| **Réserve** | R-UX-01 — ouverte, acceptée, non bloquante |
| **Écran** | `/prochaines-actions` — `ProchainesActionsList` |
| **Type** | Écran dérivé (agrégation transverse) |
| **Frame Figma dédiée** | ❌ Absente |
| **Sources de cohérence** | Patterns dashboard / listes / fiche chantier ; spike Dashboard `38:502` ; composants Tailwind existants |
| **Décision INC-05** | Extrapolation acceptée — **pas de rattrapage design** dans INC-05 |
| **Statut post-MVP** | Réserve **non levée** — standard méthode produit (ce document) |
| **Blocage** | Aucun — CLOSED WITH RESERVES et MVP CAPITALIZED WITH RESERVES maintenus |

## 13. Décisions postérieures possibles (cycles séparés)

| Cycle | Statut par défaut |
|-------|-------------------|
| Design polish `/prochaines-actions` | Non lancé — décision Morris |
| Extension Figma frames P2 | Non lancé |
| Design system complet | Non lancé |
| Refonte UI globale | Non lancé |

> Toute évolution visuelle post-MVP = **cycle distinct** avec gate Morris — hors scope de ce standard.

---

**Références :**

- `sfia-v2-design-figma-cycle-standard.md`
- `sfia-v2-figma-fidelity-gate-standard.md`
- `sfia-v2-automation-levels.md`
- `projects/chantiers360-v2/08-qa-test/inc-05/qa-reserves.md` — R-UX-01
- `projects/chantiers360-v2/09-capitalization/2026-07-07-mvp-capitalization-report.md` — enseignement F4

**Decision (provisional) :** SFIA V2.0 DESIGN COVERAGE STANDARD DOCUMENTED — PENDING MORRIS VALIDATION
