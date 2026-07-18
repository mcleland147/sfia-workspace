# SFIA Studio — Review Pack FULL — Cadrage détaillé produit

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-18 15:57:33 CEST |
| **Fuseau** | Europe/Paris (CEST, UTC+2) |
| **Repository** | `/Users/morris/Projects/sfia-workspace` |
| **Branche** | `project/sfia-studio-pre-framing` |
| **HEAD** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **origin/main** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **Cycle** | 1 — Cadrage détaillé produit |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Review pack** | FULL — mono-cycle |
| **Review Handoff Git** | **required** |
| **Verdict** | `SFIA STUDIO DETAILED FRAMING DOCUMENTED — READY FOR MORRIS REVIEW` |

---

## 1. État Git

| Élément | Valeur |
|---------|--------|
| Staged | Aucun |
| Campus360 | `M README.md` préexistant — **non touché** |
| Studio | Untracked — README modifié + 04–07 créés |
| Commit / push projet | Aucun (G7 en attente) |

---

## 2. Sources consultées

Template v2.6 ; routing guide ; operating model ; rules ; docs Studio 01–03 ; handoff `74b23ed` ; structure Campus360 04–07 (structure seule) ; décisions D-VAL-1…8 du prompt.

---

## 3. D-VAL-1 à D-VAL-8 et G1–G7

| # | Contenu | Gate | Statut |
|---|---------|------|--------|
| D-VAL-1…3 | Pré-cadrage / produit / POC | — | VALIDÉES |
| D-VAL-4 | Projet officiel | G1 | VALIDÉ |
| D-VAL-5 | Problème / opportunité | G2 | VALIDÉ |
| D-VAL-6 | Option C | G4 | VALIDÉ |
| D-VAL-7 | Principe POC | G5 | VALIDÉ (principe) |
| D-VAL-8 | Cadrage détaillé autorisé | G6 | VALIDÉ |
| — | Revue G3 conforme (pas de D-VAL inventé) | G3 | REVUE CONFORME |
| — | Commit/push/PR projet | G7 | EN ATTENTE |

---

## 4. Fichiers

| Action | Fichier |
|--------|---------|
| Modifié | `projects/sfia-studio/README.md` |
| Créé | `04-detailed-product-framing.md` |
| Créé | `05-product-capabilities-and-use-cases.md` |
| Créé | `06-scope-constraints-and-success-criteria.md` |
| Créé | `07-product-trajectory-and-decision-pack.md` |

Inventaire SHA (cycle) :

```
README.md  lines=200  sha=e3a288dc98548470336d1f8401332b76d2f76e7b20f63cf3907d569b7eeb3171
04-…md  lines=235  sha=a8e08d661e9a7608bee638f5661b5b0e7748b26ca5acdd7eec9f9bf994c31840
05-…md  lines=377  sha=94fd2efb79668910e110cc4452fe9d70f0f685c81bfa3b3ebe0e39a570b42f44
06-…md  lines=247  sha=e3608dfd2cd23e01f29c51030b7a8a6022d6d807385c3058233af017881552ec
07-…md  lines=258  sha=1f8a343cf8a2ba3e164b9e94a33fe3490fff7c283bef94bb5d515b06bdbcf9de
```

---

## 5. Synthèse structurante

- Vision : qualifier/lancer/suivre/clôturer cycles ; industrialiser la **plateforme**.
- Capacités C1–C16 ; cas UC1–UC8.
- POC = faisabilité (7 questions) ; MVP = principes seulement ; industrialisation = plateforme.
- NFR candidates ; 8 critères de valeur candidats.
- Options de séquencement post-cadrage ; gates DF-G* proposés.
- Runtime candidat ; macOS = preuve ; Option C ; aucune stack/archi.

---

## 6. Contenu complet des fichiers du cycle


### 6.1 — `projects/sfia-studio/README.md`

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `detailed-framing-in-progress` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé produit (DOC, Critical) |
| **Typologie cycle** | DOC — EVOL projet |
| **Cycle projet** | 1 — Cadrage (sous-phase : **cadrage détaillé produit**) |
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
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas « industrialiser les cycles » |

### Vision produit (base du cadrage)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

Revue documentaire G3 : **conforme** (aucune réserve bloquante). Aucune décision Morris supplémentaire inventée. La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions. Séparation Studio / Runtime à qualifier en architecture.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensemble MVP **non sélectionné** ici.

### Faisabilité vs valeur

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique |
| **MVP** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS

Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

### Relation méthode (G4 — Option C)

Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 2. Trajectoire macro

```text
Pré-cadrage → cadrage détaillé (ce cycle)
  → conception / architecture / UX (cycles futurs)
  → POC de faisabilité → décision de poursuite
  → MVP → delivery incrémental → industrialisation plateforme
```

Aucune stack / architecture validée. Aucun cycle suivant démarré.

---

## 3. Navigation

### Pré-cadrage

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (en cours)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

---

## 4. Justification Critical

Projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation ; risques de sur-cadrage et seconde vérité.

N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/push/PR projet.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git = source de vérité | Durable ; état opérationnel dérivé / reconstructible |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |

---

## 6. Gates G1–G7

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 (pas de D-VAL inventé) |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé **autorisé et en cours** |
| **G7** | **EN ATTENTE** — commit / push / PR projet **interdits** |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. G7 ≠ handoff review.

---

## 7. Décisions D-VAL-1 à D-VAL-8

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |

### En attente

| Décision | Statut |
|----------|--------|
| G7 commit / push / PR projet | **EN ATTENTE** |
| Validation documentaire du cadrage détaillé | Après revue GPT / Morris |
| Prochain cycle (conception / archi / UX…) | Après validation cadrage |
| Stack / architecture / contenu POC / MVP | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT du cadrage détaillé (handoff).
2. Morris : validation documentaire du cadrage.
3. Puis : sélection du prochain cycle et/ou **G7**.

**Verdict de ce cycle :** `SFIA STUDIO DETAILED FRAMING DOCUMENTED — READY FOR MORRIS REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Documents projet | `projects/sfia-studio/` (locaux) |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné |

---

*SFIA Studio — cadrage détaillé en cours — G6 validé — G7 en attente — Option C — Morris décide.*
```

### 6.2 — `projects/sfia-studio/04-detailed-product-framing.md`

```markdown
# SFIA Studio — Cadrage détaillé produit

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `04-detailed-product-framing.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `detailed-framing-in-progress` |
| **Décisions applicables** | D-VAL-1 à D-VAL-8 |
| **Autorité** | Morris |

> Contrat produit détaillé. **Pas** de conception fonctionnelle, architecture, stack, backlog, UX ni POC.

---

## 1. Résumé exécutif

SFIA Studio est le projet officiel visant une **plateforme métier opérationnelle et durable** pour **qualifier, lancer, suivre et clôturer** les cycles SFIA, en orchestrant Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris, tout en **consommant** SFIA v2.6 (Option C).

Le pré-cadrage (G1–G5, revue G3 conforme) et **G6** autorisent ce cadrage détaillé. Le **POC** reste une preuve de faisabilité ultérieure. Le **MVP** et l’**industrialisation de la plateforme** restent distincts et non figés ici. **G7** (versionnement projet) reste en attente.

---

## 2. Problème validé (G2)

### Situation actuelle

La boucle SFIA fonctionne manuellement :

**Morris → ChatGPT → template Git → prompt Cursor → exécution → review pack → analyse → décision Morris.**

### Effets observables

- Friction de copier/coller entre surfaces (chat, IDE, terminal, fichiers temporaires).
- Charge cognitive liée à la multiplicité d’artefacts (prompt, rapport, review pack, handoff).
- Risque d’écarts hors branche / hors périmètre par discipline opérateur variable.
- Visibilité partielle de l’état Git et des gates en un seul lieu.
- Tentation d’automatiser trop tôt et de contourner les gates humains.

### Populations concernées

| Population | Implication |
|------------|-------------|
| Morris | Utilisateur primaire et autorité L0 |
| Futurs opérateurs autorisés | Candidats ultérieurs — non définis pour le MVP |
| Contributeurs / reviewers | Consommateurs indirects de la traçabilité Git |

### Symptômes vs causes candidates

| Symptômes | Causes candidates (hypothèses) |
|-----------|--------------------------------|
| Friction multi-outils | Absence d’interface métier unifiée |
| Erreurs de contrat / routage | Qualification et sources non assistées dans un cockpit |
| Perte de contexte | État dispersé hors d’une vue cycle unique |
| Risque de dérive | Gates et stop conditions non présentés au même endroit que l’exécution |

---

## 3. Opportunité validée (G2)

| Dimension | Contenu |
|-----------|---------|
| **Valeur attendue** | Pilotage métier durable des cycles ; moins de friction ; meilleure conformité aux garde-fous ; traçabilité ancrée Git |
| **Pourquoi maintenant** | Méthode v2.6 stabilisée ; boucle éprouvée ; friction devenue le goulot principal |
| **Coût de l’inaction** | Persistance de la charge cognitive ; risque accru d’écarts ; difficulté à industrialiser l’exploitation de la plateforme |
| **Limites** | Ne remplace pas la méthode ; ne crée pas de valeur métier sans MVP ultérieur ; Option C interdit le couplage doctrine silencieux |

---

## 4. Vision produit détaillée

1. Plateforme métier **complète** (produit cible), pas un POC.
2. Pilotage **progressif** des cycles SFIA (pas obligation immédiate des 15).
3. Orchestration Git + GPT + Cursor + mécanisme déterministe **sous gates Morris**.
4. Industrialisation de la **plateforme** (sécurité, observabilité, maintenabilité, distribution) — **pas** des cycles.
5. Git = vérité durable ; état opérationnel éventuel = dérivé / reconstructible.
6. Automatisation progressive bornée — **jamais** d’arbitrage automatique.

---

## 5. Objectifs produit candidats

| ID | Objectif qualitatif | Résultat attendu |
|----|---------------------|------------------|
| O1 | Unifier le pilotage de cycle | Intention → clôture dans une surface métier |
| O2 | Renforcer la conformité | Contrats, profils, chemins interdits, stop conditions visibles |
| O3 | Ancrer la traçabilité | Décisions et preuves rattachées à Git |
| O4 | Réduire la friction | Moins de manipulations manuelles GPT/Cursor/Git |
| O5 | Préparer la preuve technique | POC de faisabilité dérivé du produit (pas l’inverse) |
| O6 | Préparer la valeur métier | MVP utilisable après preuve — non défini ici |
| O7 | Préparer l’exploitation durable | Industrialisation plateforme ultérieure |

Aucune valeur numérique inventée.

---

## 6. Non-objectifs

- Remplacer Git comme source de vérité.
- Automatiser les arbitrages Morris.
- Modifier silencieusement SFIA v2.6 / créer v2.7 / relancer v3.0.
- Couvrir immédiatement les quinze cycles.
- Transformer le POC en produit ou en MVP.
- Imposer l’architecture plateforme historique (Studio/Runtime/Core/Knowledge) comme cible validée.
- Choisir stack, API, modèle de données ou UX dans ce cycle.

---

## 7. Utilisateurs et parties prenantes

| Acteur | Rôle |
|--------|------|
| **Morris** | Utilisateur primaire ; autorité de décision |
| **Futurs opérateurs autorisés** | Candidats produit ultérieurs |
| **GPT** | Qualification, analyse, revue — non décideur |
| **Cursor** | Exécuteur repository contrôlé |
| **Git / GitHub** | Vérité / revue PR |
| **Mécanisme d’orchestration (candidat)** | Contrats, permissions, gates, stop conditions |
| **Sécurité / exploitation** | Exigences et contrôles futurs |
| **Contributeurs** | Consommateurs de la traçabilité |

---

## 8. Principes produit

| Principe | Implication |
|----------|-------------|
| **Repo-first** | Git porte l’état durable |
| **Human gates** | Aucune décision structurante automatisée |
| **Réversibilité** | Actions bornées, arrêtables, traçables |
| **Explicabilité** | Contrats, profils, stop conditions visibles |
| **État durable dans Git** | Décisions, docs, preuves versionnées |
| **État opérationnel dérivé** | Reconstructible depuis Git — hypothèse |
| **Permissions minimales** | Moindre privilège agents / commandes |
| **Automatisation progressive** | L3/L4 futurs éventuels — non activés |

---

## 9. Hypothèses

| ID | Domaine | Hypothèse | Risque si fausse |
|----|---------|-----------|------------------|
| H1 | Valeur | La friction multi-outils est le goulot principal | Mauvais produit |
| H2 | Usage | Morris restera l’opérateur primaire au moins jusqu’au MVP | Gouvernance à revoir |
| H3 | Faisabilité | Orchestration Git/GPT/Cursor/mécanisme déterministe est réalisable | POC échoue |
| H4 | Gouvernance | Les gates UI renforcent sans contourner | Risque sécurité |
| H5 | Adoption | Une UI métier améliore la conformité v2.6 | ROI faible |
| H6 | Méthode | Option C reste adaptée | Repositionnement G4 |
| H7 | Preuve | POC dérivé d’une archi cible suffisante | POC non représentatif |

---

## 10. Contraintes

| Domaine | Contrainte |
|---------|------------|
| Méthode | Consomme v2.6 ; Option C ; pas de modification silencieuse |
| Repository | Git = source de vérité |
| Environnement initial | Preuve POC sur macOS local Morris — non contractuel pour le produit |
| Fournisseurs | GPT / Cursor / éventuels services — capacités non inventées |
| Sécurité | Secrets, permissions, exécution locale, gates |
| Coûts | Tokens / modèles / exécutions à mesurer |
| Accessibilité | Exigence produit à qualifier — pas de référentiel figé ici |

---

## 11. Dépendances

| Dépendance | Nature |
|------------|--------|
| Git | Lecture / écriture contrôlée d’état |
| GPT | Qualification, analyse, verdict |
| Cursor | Exécution repository bornée |
| Mécanisme d’orchestration | Candidat — non validé |
| Environnement local | Preuve initiale |
| Permissions / secrets | Prérequis sécurité |

---

## 12. Risques de niveau cadrage

| ID | Risque | Domaine |
|----|--------|---------|
| R1 | Valeur non démontrée malgré faisabilité | Valeur |
| R2 | Contournement des gates via UI | Sécurité |
| R3 | Fuite de contexte vers fournisseurs IA | Confidentialité / RGPD |
| R4 | Dépendance fournisseur IA / Cursor | Dépendance |
| R5 | Dette par sur-cadrage ou archi prématurée | Dette |
| R6 | Complexité plateforme trop tôt | Complexité |
| R7 | Seconde source de vérité opaque | Gouvernance |
| R8 | Observabilité insuffisante | Observabilité |
| R9 | Sur-automatisation (L3/L4 trop tôt) | Gouvernance |

---

## 13. Questions ouvertes

1. Ordre des cycles post-cadrage (conception vs architecture vs UX) ?
2. Niveau de preuve architecture avant définition détaillée du POC ?
3. Métriques de valeur à contractualiser au MVP ?
4. Gouvernance multi-opérateur future ?
5. Politique secrets / permissions produit ?
6. G7 — quand versionner le socle ?

---

## 14. Critères de clôture du cadrage détaillé

| Critère | Cible |
|---------|-------|
| Contrat produit (04) | Complet et cohérent |
| Capacités / cas d’usage (05) | Exploitables sans backlog |
| Périmètres / critères (06) | Produit ≠ POC ≠ MVP ≠ industrialisation |
| Trajectoire / décisions (07) | Options de routage sans lancement |
| Alignement D-VAL-1…8 | Cohérent |
| Architecture / stack / MVP / POC démarrés | **Absents** |
| Revue GPT + arbitrage Morris | Requis |

---

## 15. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / gates |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — cadrage détaillé produit — G6 — Morris décide.*
```

### 6.3 — `projects/sfia-studio/05-product-capabilities-and-use-cases.md`

```markdown
# SFIA Studio — Capacités produit et cas d’usage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `05-product-capabilities-and-use-cases.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `detailed-framing-in-progress` |
| **Décisions** | D-VAL-1 à D-VAL-8 |

> Définit **ce que le produit doit permettre**. Pas de backlog, user stories détaillées, écrans, composants ni architecture.

---

## 1. Acteurs

| Acteur | Nature | Rôle |
|--------|--------|------|
| Morris | Humain | Opérateur primaire ; décideur L0 |
| Futur opérateur autorisé | Humain (candidat) | Usage ultérieur éventuel |
| GPT | Système | Qualification, analyse, verdict |
| Cursor | Système | Exécution repository bornée |
| Git | Système | Source de vérité / historique |
| Mécanisme d’orchestration (candidat) | Système | Contrats, permissions, gates, stop conditions |

---

## 2. Carte de capacités produit candidates

Légende statut : **Cible** = produit long terme · **POC potentiel** · **MVP potentiel** · **Ultérieur** — sans décider le périmètre MVP.

### C1 — Gestion d’une intention

| Champ | Contenu |
|-------|---------|
| Finalité | Capturer une demande Morris en intention de cycle |
| Utilisateur | Morris |
| Valeur | Entrée standardisée |
| Dépendances | UI métier |
| Risques | Ambiguïté non qualifiée |
| Statut | Cible / MVP potentiel |

### C2 — Qualification SFIA

| Champ | Contenu |
|-------|---------|
| Finalité | Qualifier cycle, profil, typologie, profondeur |
| Utilisateur | Morris + GPT |
| Valeur | Routage conforme v2.6 |
| Dépendances | Template / routing / GPT |
| Risques | Mauvais profil (Critical implicite) |
| Statut | Cible / MVP potentiel / POC potentiel (partiel) |

### C3 — Lecture du contexte repository

| Champ | Contenu |
|-------|---------|
| Finalité | Lire branche, HEAD, status, fichiers pertinents |
| Utilisateur | Morris / GPT / Cursor |
| Valeur | Repo-informed |
| Dépendances | Git |
| Risques | Contexte incomplet / trop large |
| Statut | Cible / POC potentiel |

### C4 — Sélection et chargement des sources canoniques

| Champ | Contenu |
|-------|---------|
| Finalité | Identifier et charger template, guides, docs projet |
| Utilisateur | GPT (assisté) / Morris |
| Valeur | Conformité sources |
| Dépendances | Git main / projet |
| Risques | Sources obsolètes |
| Statut | Cible / POC potentiel |

### C5 — Génération d’un contrat Cursor

| Champ | Contenu |
|-------|---------|
| Finalité | Produire un prompt/contrat borné |
| Utilisateur | GPT → Morris |
| Valeur | Exécution contrôlée |
| Dépendances | Template §structure |
| Risques | Contrat incomplet |
| Statut | Cible / POC potentiel / MVP potentiel |

### C6 — Présentation des gates Morris

| Champ | Contenu |
|-------|---------|
| Finalité | Afficher gates / GO-NOGO explicites |
| Utilisateur | Morris |
| Valeur | Pas d’auto-arbitrage |
| Dépendances | Orchestration candidate |
| Risques | Contournement UI |
| Statut | Cible / MVP potentiel / POC potentiel |

### C7 — Suivi d’une exécution

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre l’exécution Cursor bornée |
| Utilisateur | Morris |
| Valeur | Visibilité / arrêt |
| Dépendances | Cursor ; orchestration |
| Risques | Exécution opaque |
| Statut | Cible / POC potentiel |

### C8 — Collecte rapport et review pack

| Champ | Contenu |
|-------|---------|
| Finalité | Récupérer rapport / review pack |
| Utilisateur | Morris / GPT |
| Valeur | Preuve exploitable |
| Dépendances | Cursor ; fichiers locaux |
| Risques | Pack incomplet |
| Statut | Cible / POC potentiel / MVP potentiel |

### C9 — Analyse et verdict GPT

| Champ | Contenu |
|-------|---------|
| Finalité | Analyser le retour ; proposer verdict |
| Utilisateur | GPT → Morris |
| Valeur | Décision informée |
| Dépendances | GPT ; pack |
| Risques | Verdict biaisé |
| Statut | Cible / MVP potentiel |

### C10 — Enregistrement des décisions

| Champ | Contenu |
|-------|---------|
| Finalité | Tracer décisions Morris (ancrage Git) |
| Utilisateur | Morris |
| Valeur | Auditabilité |
| Dépendances | Git |
| Risques | Décision hors Git |
| Statut | Cible / MVP potentiel |

### C11 — Visibilité Git (branche, HEAD, status, diff)

| Champ | Contenu |
|-------|---------|
| Finalité | Afficher l’état Git réel |
| Utilisateur | Morris |
| Valeur | Anti-dérive |
| Dépendances | Git |
| Risques | Affichage trompeur |
| Statut | Cible / POC potentiel |

### C12 — Historique de cycles

| Champ | Contenu |
|-------|---------|
| Finalité | Consulter l’historique des cycles |
| Utilisateur | Morris |
| Valeur | Continuité / REX |
| Dépendances | Git + éventuel état dérivé |
| Risques | Seconde vérité |
| Statut | Cible / Ultérieur / MVP potentiel |

### C13 — Permissions et stop conditions

| Champ | Contenu |
|-------|---------|
| Finalité | Appliquer permissions, chemins interdits, stops |
| Utilisateur | Orchestration + Morris |
| Valeur | Sécurité / conformité |
| Dépendances | Mécanisme déterministe candidat |
| Risques | Contournement |
| Statut | Cible / POC potentiel |

### C14 — Observabilité et diagnostic

| Champ | Contenu |
|-------|---------|
| Finalité | Logs, audit, reprise, diagnostic |
| Utilisateur | Morris / exploitation |
| Valeur | RUN readiness |
| Dépendances | Journalisation |
| Risques | Bruit / fuite |
| Statut | Cible / Ultérieur / POC potentiel (limité) |

### C15 — Suivi des coûts

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre coûts modèles / tokens / exécutions |
| Utilisateur | Morris |
| Valeur | FinOps |
| Dépendances | Fournisseurs IA |
| Risques | Mesure incomplète |
| Statut | Cible / Ultérieur / MVP potentiel |

### C16 — Administration des paramètres produit

| Champ | Contenu |
|-------|---------|
| Finalité | Paramétrer chemins, profils par défaut, connexions bornées |
| Utilisateur | Morris |
| Valeur | Opérabilité |
| Dépendances | Config locale sécurisée |
| Risques | Secrets mal gérés |
| Statut | Cible / Ultérieur |

---

## 3. Cas d’usage prioritaires candidats

### UC1 — Lancer un cycle documentaire borné

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention documentaire |
| Acteur | Morris |
| Préconditions | Repo accessible ; baseline connue |
| Résultat | Cycle qualifié prêt à cadrage/prompt |
| Gates | Qualification profil ; périmètre |
| Erreurs / stops | Repo inaccessible ; Critical non justifié |
| Preuves | Intention + qualification tracées |

### UC2 — Préparer un prompt Cursor repo-informed

| Champ | Contenu |
|-------|---------|
| Déclencheur | Qualification OK |
| Acteur | GPT + Morris |
| Préconditions | Sources lues ; Git truth check |
| Résultat | Contrat Cursor complet |
| Gates | Revue contrat avant exécution |
| Erreurs / stops | Sources absentes ; contrat incomplet |
| Preuves | Prompt + inventaire sources |

### UC3 — Exécuter une analyse read-only

| Champ | Contenu |
|-------|---------|
| Déclencheur | Contrat read-only |
| Acteur | Cursor |
| Préconditions | Permissions lecture |
| Résultat | Rapport d’analyse sans écriture hors périmètre |
| Gates | Confirmation read-only |
| Erreurs / stops | Tentative d’écriture |
| Preuves | Status / diffs nuls hors lecture |

### UC4 — Contrôler un review pack

| Champ | Contenu |
|-------|---------|
| Déclencheur | Fin d’exécution |
| Acteur | Morris + GPT |
| Préconditions | Pack présent |
| Résultat | Complétude / verdict proposés |
| Gates | Acceptation pack |
| Erreurs / stops | Contenu manquant |
| Preuves | Checklist complétude |

### UC5 — Soumettre une décision Morris

| Champ | Contenu |
|-------|---------|
| Déclencheur | Verdict proposé |
| Acteur | Morris |
| Préconditions | Preuves disponibles |
| Résultat | GO / NO-GO / amendement tracé |
| Gates | Décision humaine obligatoire |
| Erreurs / stops | Auto-approve interdit |
| Preuves | Décision ancrée |

### UC6 — Préparer une PR readiness

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention de PR |
| Acteur | Morris + Cursor/GPT |
| Préconditions | Diff borné ; G7 ou GO équivalent |
| Résultat | Dossier PR readiness |
| Gates | G7 / readiness |
| Erreurs / stops | Fichiers hors périmètre |
| Preuves | Diff check / inventaire |

### UC7 — Suivre un cycle interrompu

| Champ | Contenu |
|-------|---------|
| Déclencheur | Interruption / stop |
| Acteur | Morris |
| Préconditions | État partiel journalisé |
| Résultat | État d’interruption visible |
| Gates | Reprise ou abandon |
| Erreurs / stops | État perdu |
| Preuves | Journal / status Git |

### UC8 — Reprendre un cycle depuis Git

| Champ | Contenu |
|-------|---------|
| Déclencheur | Reprise après interruption |
| Acteur | Morris |
| Préconditions | Vérité Git cohérente |
| Résultat | Cycle repris sans seconde vérité |
| Gates | Confirmation HEAD/branche |
| Erreurs / stops | Divergence non résolue |
| Preuves | Truth check |

---

## 4. Parcours opérateur macro

```text
Intention
  → Qualification
  → Cadrage / contrat
  → Autorisation (gate Morris)
  → Exécution
  → Revue (pack / analyse)
  → Décision Morris
  → Clôture (ancrage Git / éventuel handoff)
```

Parcours **fonctionnel**, non visuel. Aucune maquette.

---

## 5. Matrice capacités × cycles SFIA (potentielle)

| Capacité | Cycles potentiellement touchés |
|----------|--------------------------------|
| C1–C2 | 1 Cadrage |
| C3–C5 | 1, 13, delivery doc |
| C6–C7 | Transverse (tous cycles exécutés) |
| C8–C9 | 9 QA, 13 PR readiness, 15 REX |
| C10–C12 | Transverse gouvernance |
| C13 | 10 Sécurité |
| C14 | 12 Observabilité / RUN |
| C15 | FinOps transverse |
| C16 | Administration transverse |

**Règles :** couverture **progressive** ; aucun cycle forcé ; **pas de sélection MVP** ici ; POC = lot multi-capacités, pas un cycle autonome.

---

## 6. Hors capacité produit

- Arbitrage automatique des gates Morris.
- Modification silencieuse de méthode / baseline.
- Auto-merge / auto-push projet.
- Gestion opaque des secrets.
- Vérité durable hors Git.
- Couverture obligatoire immédiate des 15 cycles.

---

## 7. Questions ouvertes

1. Quelles capacités sont indispensables au premier MVP (à décider plus tard) ?
2. Quelle granularité d’historique de cycles sans créer de seconde vérité ?
3. Quelles permissions minimales pour Cursor en POC ?
4. Quelles surfaces UX prioritaires après capacité map ?

---

## 8. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — capacités et cas d’usage — cadrage détaillé — Morris décide.*
```

### 6.4 — `projects/sfia-studio/06-scope-constraints-and-success-criteria.md`

```markdown
# SFIA Studio — Périmètres, contraintes et critères de succès

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `06-scope-constraints-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `detailed-framing-in-progress` |
| **Décisions** | D-VAL-1 à D-VAL-8 |

> Borne le produit, les phases et les preuves. **Ne sélectionne pas** le MVP. **Ne fige pas** le POC détaillé. **Ne conçoit pas** l’industrialisation.

---

## 1. Périmètre produit cible

| Élément | Contenu candidat |
|---------|------------------|
| Capacités | Carte C1–C16 (voir `05-…`) — couverture progressive |
| Cycles | Quinze cycles = cible long terme, pas obligation immédiate |
| Utilisateurs | Morris primaire ; opérateurs futurs candidats |
| Exploitation | Industrialisation **plateforme** ultérieure |
| Méthode | Consomme v2.6 (Option C) |

---

## 2. Périmètre du cadrage détaillé (ce cycle)

### Définit

- Contrat produit (problème, opportunité, vision, objectifs, non-objectifs).
- Acteurs, capacités, cas d’usage, parcours macro.
- Distinctions produit / POC / MVP / industrialisation.
- Exigences non fonctionnelles **candidates**.
- Critères de valeur **candidats**.
- Trajectoire et options de prochains cycles.

### Ne définit pas

- Conception fonctionnelle détaillée ; architecture ; stack ; API ; modèle de données.
- UX/UI / Figma / maquettes.
- Backlog / user stories / estimations.
- Contenu exact du POC ; sélection MVP.
- Code, CI/CD, packaging.

---

## 3. Périmètre candidat du POC (principe G5)

| Règle | Contenu |
|-------|---------|
| Nature | Preuve de **faisabilité technique** uniquement |
| Dérivation | Après cadrage + architecture cible **suffisante** |
| Détail | **Non figé** dans ce cycle |
| Valeur métier | **Non validée** par le POC |

### Sept questions G5 (rappel)

1. Lecture état Git réel ?
2. Composition / injection instructions SFIA → GPT ?
3. Qualification et contrat structurés par GPT ?
4. Invocation contrôlée de Cursor ?
5. Orchestration déterministe : gates et stop conditions ?
6. Récupération / analyse résultats, diffs, review packs ?
7. Exécution dans l’environnement local Morris sur **macOS** (contrainte de preuve) ?

macOS ≠ plateforme produit définitive.

---

## 4. Périmètre candidat du MVP (principes uniquement)

| Principe | Contenu |
|----------|---------|
| Nature | Première version **réellement utilisable** |
| Valeur | Métier mesurable — critères candidats §9 |
| Cycles | **Sous-ensemble** prioritaire — **non sélectionné ici** |
| Relation au POC | Après preuve de faisabilité et GO de poursuite |
| Interdiction | Confondre MVP et POC ; inventer le périmètre maintenant |

---

## 5. Périmètre d’industrialisation (plateforme)

| Domaine | Besoin candidat (non conçu) |
|---------|-----------------------------|
| Sécurité | Permissions, secrets, contrôles durables |
| Observabilité | Logs, audit, diagnostic, reprise |
| Maintenance | Évolutivité, dette maîtrisée |
| Distribution | Mode de livraison produit — non décidé |
| Support | RUN borné ultérieur |
| Conformité | RGPD, accessibilité, méthode |

Pas de conception détaillée dans ce cycle.

---

## 6. Contraintes obligatoires

| Contrainte | Origine |
|------------|---------|
| Git = source de vérité | Operating model / rules |
| Morris = autorité | Gouvernance L0 |
| Option C | D-VAL-6 / G4 |
| Baseline v2.6 inchangée | Méthode |
| Gates humains | D-VAL / operating model |
| Pas d’automatisation d’arbitrage | Garde-fou |
| macOS = preuve POC non contractuelle | G3-R3 |
| Runtime = candidat non contractuel | G3-R2 |
| G7 en attente | Morris |

---

## 7. Exigences non fonctionnelles candidates

Chaque exigence = **besoin à qualifier** — **aucun seuil inventé**.

| NFR | Besoin candidat |
|-----|-----------------|
| Sécurité | Contrôler accès repo, agents, commandes, secrets |
| Confidentialité | Minimiser contexte transmis aux IA |
| Traçabilité | Relier intentions, exécutions, décisions, preuves |
| Auditabilité | Permettre revue a posteriori |
| Réversibilité | Pouvoir arrêter / revenir sans opacité |
| Accessibilité | UI métier utilisable — référentiel ultérieur |
| Performance | Qualifier latence IA, contexte, durée cycles, volumétrie Git |
| Résilience | Reprendre après interruption |
| Maintenabilité | Éviter dette prématurée |
| Interopérabilité | Intégrer Git / GPT / Cursor bornés |
| Coût | Suivre inducteurs (modèles, tokens, stockage, exécutions, hébergement) |
| Sobriété | Éviter sur-automatisation et sur-contexte (GreenOps léger) |

---

## 8. Blocs cadrage (identification)

| Bloc | Identification | Non produit |
|------|----------------|-------------|
| Sécurité / RSSI | Acteurs, actifs, familles de risques, contrôles déterministes | Threat model |
| RGPD | Demandes, historique, décisions, fichiers, logs, contexte IA | DPIA |
| Accessibilité | Exigence produit | Référentiel / UI |
| FinOps | Inducteurs de coûts ; métriques futures | Budget |
| Performance | Latence, contexte, durée, volumétrie Git | SLA |
| UX/UI | Surfaces à concevoir plus tard | Maquettes / Figma |
| DevOps | Frontières Git/GPT/Cursor/orchestration | Interfaces techniques |
| Observabilité | Logs, audit, reprise, diagnostic | Runbook / SLO |
| Capitalisation | Observation ≠ règle méthode | Cycle méthode |
| GreenOps | Identification légère | Engagements |

---

## 9. Critères candidats de valeur produit

| # | Critère | Mesure ultérieure (méthode à définir) |
|---|---------|----------------------------------------|
| 1 | Réduction des manipulations GPT / Cursor / Git | Comptage d’étapes / observation |
| 2 | Réduction erreurs de routage et de contrat | Taux d’écarts |
| 3 | Diminution temps préparation / clôture | Durée observée |
| 4 | Amélioration visibilité des gates | Feedback opérateur |
| 5 | Amélioration traçabilité des décisions | Couverture décisions↔Git |
| 6 | Diminution charge cognitive | Charge perçue / erreurs |
| 7 | Conformité accrue aux garde-fous | Checklists / audits |
| 8 | Reproductibilité des cycles | Reprises réussies |

Aucune cible numérique inventée. Le POC **ne contractualise pas** ces critères ; le MVP et les expérimentations produit les valideront.

---

## 10. Critères de réussite du cadrage détaillé

| Critère | Attendu |
|---------|---------|
| Documents 04–07 complets | Oui |
| Cohérence D-VAL-1…8 / G1–G7 | Oui |
| Frontières cadrage vs conception/archi/backlog | Respectées |
| Revue GPT | Effectuée |
| Validation Morris du cadrage | Requise pour clôturer |

---

## 11. Critères futurs de réussite du POC

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Hypothèses techniques critiques démontrées |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Faisabilité partielle ; réserves documentées |
| `FEASIBILITY NOT DEMONSTRATED` | Preuve insuffisante ou échec |

Le POC ne produit pas de verdict de valeur métier.

---

## 12. Critères futurs de réussite du MVP

| Critère | Nature |
|---------|--------|
| Valeur métier réelle | Au moins une boucle utilisable mesurable |
| Utilisabilité | Opérateur peut conduire un cycle borné |
| Conformité aux gates | Aucun contournement structurel |
| Ancrage Git | Décisions / preuves traçables |

Sans métrique inventée.

---

## 13. Hypothèses et risques (synthèse)

Voir `04-…` §9 et §12. Risques majeurs : seconde vérité ; contournement gates ; confusion POC/MVP ; sur-cadrage ; dépendance fournisseurs.

---

## 14. Stop conditions produit

Arrêt / escalade Morris si :

- automatisation d’une décision structurante ;
- écriture durable hors Git ;
- modification silencieuse de méthode ;
- élargissement au-delà du contrat de cycle ;
- secrets exposés ;
- force push / merge non autorisé ;
- présentation d’une candidate comme baseline.

---

## 15. Questions ouvertes

1. Quelles NFR prioriser avant POC ?
2. Quelles métriques de valeur instrumenter au MVP ?
3. Quel niveau d’observabilité minimal en POC ?
4. Politique de conservation des logs / contextes IA ?

---

## 16. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — périmètres et critères — cadrage détaillé — Morris décide.*
```

### 6.5 — `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

```markdown
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `detailed-framing-in-progress` |
| **Décisions** | D-VAL-1 à D-VAL-8 |
| **Destinataire** | Morris |

> Prépare les décisions **après** le cadrage détaillé. Ne lance aucun cycle suivant. Ne décide pas G7.

---

## 1. Rappel D-VAL-1 à D-VAL-8

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C — consomme v2.6 | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Cadrage détaillé **autorisé** | G6 |

---

## 2. Statut G1–G7

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 ; **pas de D-VAL inventé** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage en cours / à valider documentairement |
| **G7** | **EN ATTENTE** — commit / push / PR **projet** interdits |

Le push du handoff `sfia/review-handoff` **≠ G7**.

---

## 3. Trajectoire produit candidate

```text
Pré-cadrage
  → cadrage détaillé          ← (ce cycle)
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI initiale
  → architecture technique candidate
  → définition du POC
  → POC de faisabilité (lot multi-cycle)
  → décision de poursuite
  → backlog / MVP
  → delivery incrémental
  → QA / sécurité / release / RUN
  → industrialisation plateforme
  → capitalisation
```

### Précisions

- Trajectoire **non séquentielle rigide** ; activation par déclencheurs.
- POC = **lot** multi-cycle, pas un cycle SFIA autonome.
- MVP **distinct** du POC.
- G7 = versionnement du socle — **distinct** des décisions de phases futures.
- Aucune stack / architecture validée.

---

## 4. Prochains cycles candidats (options de routage — non lancés)

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Validation documentaire du cadrage |
| Objectif | Préciser comportements et règles métier des capacités |
| Dépendances | Documents 04–07 validés |
| Profil probable | Critical ou Standard — à requalifier |
| Gates possibles | Périmètre conception ; non-objectifs |
| Livrables attendus | Specs fonctionnelles bornées |
| Pourquoi pas maintenant | Cadrage non encore validé Morris |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin de structurer capacités / frontières |
| Objectif | Modules logiques ; séparation Studio / orchestration candidate |
| Dépendances | Conception ou capacité map validée |
| Profil probable | Critical |
| Gates possibles | Frontières ; non-choix de stack |
| Livrables attendus | Vue fonctionnelle — pas technique |
| Pourquoi pas maintenant | Risque de figer trop tôt |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Déclencheur | Parcours opérateur à concevoir |
| Objectif | Surfaces et parcours — accessibilité |
| Dépendances | Capacités / cas d’usage |
| Profil probable | Standard ou Critical |
| Gates possibles | Contrat visuel ultérieur |
| Livrables attendus | Maquettes / Figma (cycle dédié) |
| Pourquoi pas maintenant | Figma désactivé ; cadrage d’abord |

### 4.4 Architecture technique

| Champ | Contenu |
|-------|---------|
| Déclencheur | Après archi fonctionnelle suffisante |
| Objectif | Options techniques ; préparation POC |
| Dépendances | Archi fonctionnelle |
| Profil probable | Critical |
| Gates possibles | Choix d’options — pas stack imposée trop tôt |
| Livrables attendus | Options / ADR candidats |
| Pourquoi pas maintenant | Hors périmètre cadrage |

### 4.5 Sécurité / RSSI préliminaire

| Champ | Contenu |
|-------|---------|
| Déclencheur | Avant POC à permissions élevées |
| Objectif | Familles de risques et contrôles minimaux |
| Dépendances | Capacités C13 / NFR sécurité |
| Profil probable | Critical |
| Gates possibles | Go sécurité borné |
| Livrables attendus | Note risques / contrôles — pas threat model complet |
| Pourquoi pas maintenant | Identification déjà faite au cadrage |

---

## 5. Décisions à préparer après cadrage

| ID | Décision | Nature |
|----|----------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris |
| D-NEXT-2 | Sélection du prochain cycle | Morris |
| D-NEXT-3 | Autorisation versionnement **G7** | Morris |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Dette** | Faible si bornée |
| **Prérequis** | Cadrage validé |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |
| **Dette** | Moyenne si dérive vers stack |
| **Prérequis** | Capacité map stable |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |
| **Dette** | Refonte UX si capacités changent |
| **Prérequis** | Cas d’usage prioritaires |

### Recommandation candidate (non décision)

**Option 1** comme séquence par défaut : conception fonctionnelle bornée → architecture fonctionnelle → puis UX ou technique selon risques.

Morris reste libre de choisir Option 2 ou 3.

---

## 7. Gates futurs proposés (non validés)

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **PROPOSÉ** |
| **DF-G2** | Sélectionner le prochain cycle | **PROPOSÉ** |
| **DF-G3** | Autoriser G7 (commit/push/PR projet) | **PROPOSÉ** (= G7) |
| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Ces gates **ne sont pas** validés par ce document.

---

## 8. Questions Morris

1. Validez-vous le cadrage détaillé (DF-G1) ?
2. Quel prochain cycle (conception / archi / UX / autre) ?
3. Autorisez-vous G7 maintenant ou après revue ?
4. Quel niveau d’architecture minimale avant POC ?
5. Quelles priorités NFR avant le POC ?

---

## 9. Critères de clôture du cadrage détaillé

| Critère | État cible |
|---------|------------|
| 04–07 complets et cohérents | Oui (ce cycle) |
| Alignement D-VAL / G1–G7 | Oui |
| Pas d’archi/stack/MVP/POC démarrés | Oui |
| Handoff publié | Requis |
| Revue GPT | Requise |
| Validation Morris DF-G1 | Requise pour clôturer |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé documenté | Oui |
| Ready for Morris review | **Oui** |
| Ready for next cycle | **Après** DF-G1 / sélection |
| Ready for G7 | **Non** — en attente |
| Ready for POC | **Non** |

**Verdict :** `SFIA STUDIO DETAILED FRAMING DOCUMENTED — READY FOR MORRIS REVIEW`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL |
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |

---

*SFIA Studio — trajectoire et decision pack — cadrage détaillé — Morris décide.*
```

---

## 7. Blocs activés

Sécurité, RGPD, accessibilité, FinOps, performance, UX (identification), DevOps, observabilité, capitalisation, GreenOps léger — identification seule, pas de conception.

## 8. Hypothèses / options / recommandations

- Hypothèses H1–H7 (04).
- Options séquencement 1–3 ; recommandation candidate Option 1 (non décision).
- Gates DF-G1…DF-G7 proposés.

## 9. Décisions restant Morris

DF-G1 validation cadrage ; prochain cycle ; G7 ; ordre conception/archi/UX ; preuve avant POC ; mesure valeur ; fournisseurs IA ; secrets.

## 10. Validations

| Contrôle | Résultat |
|----------|----------|
| D-VAL-8 / G6 | Inscrits validés |
| G7 | EN ATTENTE |
| 1 README + 4 créés | Oui |
| Architecture / stack / backlog / POC / MVP figés | Non |
| Campus360 touché | Non |
| Staged | Aucun |
| Liens Markdown | Valides |
| `git diff --check` | OK |

## 11. Réserves

1. Pré-cadrage 01–03 non re-synchronisés statutairement vers `detailed-framing-in-progress` (hors périmètre fichiers de ce cycle) — README/04–07 font foi.
2. Sous-ensemble MVP et POC détaillé volontairement non figés.
3. G3 sans D-VAL dédié — conforme au prompt.
4. Working tree Campus360 coexistant.

## 12. Verdict

`SFIA STUDIO DETAILED FRAMING DOCUMENTED — READY FOR MORRIS REVIEW`

---

*Fin review pack FULL — ne pas committer `.tmp-sfia-review/` sur la branche projet.*
