# SFIA Studio — Review Pack FULL — Conception fonctionnelle

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-18 17:37:40 CEST |
| **Repository** | `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`) |
| **Branche** | `project/sfia-studio-functional-design` |
| **HEAD** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Base origin/main** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL produit |
| **Niveau review pack** | FULL |
| **Autorité** | Morris (L0) |

---

## 1. Justification Critical

- SFIA Studio pilote des actions Git, GPT et Cursor ;
- le produit expose des permissions, gates Morris et stop conditions ;
- il doit empêcher l’auto-arbitrage et les actions hors périmètre ;
- il manipule des preuves, rapports et décisions constituant la traçabilité ;
- une ambiguïté fonctionnelle peut conduire à une action distante ou destructive non autorisée ;
- le mécanisme d’orchestration déterministe reste candidat et doit être décrit fonctionnellement sans être figé techniquement.

Critical ne vaut pas autorisation d’élargir le périmètre.

---

## 2. Blocs activés / désactivés

### Activés

- sécurité fonctionnelle ;
- gouvernance Git ;
- traçabilité et auditabilité ;
- UX fonctionnelle non visuelle ;
- permissions et stop conditions ;
- gestion des erreurs et reprises ;
- capitalisation légère du cycle.

### Désactivés

- FinOps détaillé ; GreenOps ; RGPD détaillé (sauf données fonctionnelles candidates) ;
- accessibilité détaillée ; performance technique ; UX/UI visuelle et Figma ;
- architecture technique ; DevOps ; déploiement/release ; observabilité technique/RUN.

---

## 3. Gates Morris

| Gate | Statut |
|------|--------|
| Démarrage conception fonctionnelle | **AUTORISÉ** (décision Morris 2026-07-18) |
| Validation de la conception | **Requise après revue** |
| Création / validation MVP | **Interdite** |
| Sélection du POC | **Interdite** |
| Architecture | **Non autorisée** |
| Commit / push / PR projet | **Interdits** |
| Suppression branche | **Interdite** |
| Lancement cycle suivant | **Interdit** sans GO distinct |

---

## 4. État Git initial (truth check)

- Repository exact : `/Users/morris/Projects/sfia-workspace`
- `origin/main` exact : `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a`
- Branche de travail créée localement : `project/sfia-studio-functional-design` @ base `origin/main`
- Working tree hors périmètre préservé : Campus360, `.sfia/`, `.tmp-sfia-review/`, `sfia-review-handoff/`
- Aucun fichier staged
- Aucune modification SFIA Studio préexistante non expliquée
- Push de la branche projet : **interdit**

---

## 5. État Git final (après rédaction documentaire)

```text
 M projects/campus360/README.md
 M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? projects/sfia-studio/08-functional-design.md
?? projects/sfia-studio/09-functional-flows-and-rules.md
?? projects/sfia-studio/10-functional-decision-pack.md
?? sfia-review-handoff/
```

### Diff Studio (name-status)

```text
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/README.md
?? projects/sfia-studio/08-functional-design.md
?? projects/sfia-studio/09-functional-flows-and-rules.md
?? projects/sfia-studio/10-functional-decision-pack.md
```

### Diff Studio (stat — tracked only)

```text
 .../07-product-trajectory-and-decision-pack.md     | 91 +++++++++++++---------
 projects/sfia-studio/README.md                     | 57 +++++++++-----
 2 files changed, 92 insertions(+), 56 deletions(-)
```

### git diff --check (Studio)

```text
(clean — exit 0)
```

### Fichiers staged

```text
(aucun)
```

---

## 6. Sources consultées

### Méthode

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` (si présent)

### Projet (cadrage sur main)

- `projects/sfia-studio/README.md`
- `projects/sfia-studio/01-opportunity-and-vision.md`
- `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md`
- `projects/sfia-studio/03-pre-framing-decision-pack.md`
- `projects/sfia-studio/04-detailed-product-framing.md`
- `projects/sfia-studio/05-product-capabilities-and-use-cases.md`
- `projects/sfia-studio/06-scope-constraints-and-success-criteria.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

### Handoff

- Branche `sfia/review-handoff`
- `sfia-review-handoff/latest-chatgpt-review.md`
- Dernier handoff attendu : `9e8d87b5d8e47456b03f4c941a890945cf0e35ca`

### Éléments cadrage utilisés

Vision ; acteurs ; C1–C16 ; UC1–UC8 ; parcours macro ; critères de succès ; contraintes ; D-VAL-1…11 ; séparation produit/POC/MVP ; Runtime candidat ; Option C ; couverture progressive des quinze cycles.

---

## 7. Périmètre

### Créés

1. `projects/sfia-studio/08-functional-design.md`
2. `projects/sfia-studio/09-functional-flows-and-rules.md`
3. `projects/sfia-studio/10-functional-decision-pack.md`

### Modifiés

1. `projects/sfia-studio/README.md`
2. `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

### Hors périmètre (non touchés par ce cycle)

- Campus360 (modifications préexistantes laissées intactes)
- method / prompts / docs / .sfia / code / tests
- documents historiques 01–06 (non modifiés)
- D-VAL-1…11 (non modifiés ; aucune D-VAL-12)

---

## 8. Acteurs

Morris (L0 décide) · GPT (qualifie/analyse) · Cursor (exécute borné) · Git (vérité) · opérateur futur candidat · orchestrateur déterministe candidat (applique, ne décide pas).

---

## 9. Domaines fonctionnels

D1 Intention/qualification · D2 Git/sources · D3 Contrat · D4 Gates/permissions · D5 Exécution/suivi · D6 Rapports · D7 Analyse · D8 Décisions · D9 Historique/reprise · D10 Admin/coûts.

---

## 10. États du cycle

intention_capturée · qualification_en_cours · qualification_prête · attente_gate_morris · autorisé · en_exécution · stoppé · rapport_disponible · revue_en_cours · décision_requise · clôturé · abandonné.

---

## 11. Transitions

Documentées dans `08` : déclencheur, acteur, préconditions, résultat, preuves, erreurs, stop, besoin Morris.

---

## 12. Exigences fonctionnelles

FR-001…FR-025 (capture, qualification, pre-check, sources, contrat Cursor, gates, autorisation, suivi, arrêt, rapport, review pack, analyse GPT, décision Morris, ancrage Git, reprise, historique, auditabilité, permissions, erreurs, absence de seconde vérité).

---

## 13. Règles métier

BR-001…BR-025 (autorité Morris, Git vérité, hiérarchie sources, profil explicite, Critical justifié, périmètre borné, protected paths, commit/push/PR/merge séparés, review pack, handoff, stop, horodatage, preuve avant READY, historique, reprise, pas d’auto-merge, pas de suppression auto de branche, pas de promotion auto de candidate, etc.).

---

## 14. Parcours

F1–F12 : lancer cycle · prompt repo-informed · gate Morris · exécution · interruption · rapport/pack · analyse · décision · PR readiness · post-merge · reprise · divergence.

---

## 15. Invariants

INV documentés dans `08` : aucune action distante sans GO ; aucun Critical implicite ; aucune décision inventée ; Git prime ; hypothèse ≠ décision ; review pack selon cycle ; handoff si décidé ; aucun READY sans preuve ; arrêt si divergence ; automatiser l’exécution répétable, pas l’arbitrage.

---

## 16. Risques

RF-01…RF-07 (autorité ambiguë, seconde vérité, Critical implicite, confusion architecture, confusion POC/MVP, orchestrateur décideur, reprise silencieuse).

---

## 17. Questions ouvertes

Fonctionnel / UX / architecture / POC / MVP / exploitation — séparées ; aucune ne lance un cycle.

---

## 18. Décisions candidates

FD-CAND-01…08 — **candidates uniquement** — aucun effet tant que non validées. Pas de D-VAL-12.

---

## 19. Garde-fous

- Aucun commit / push / PR projet
- Aucune architecture / stack / API / BDD décidée
- Aucun POC / MVP lancé
- Aucune modification Campus360 / méthode
- Working tree hors périmètre préservé
- Handoff review uniquement sur `sfia/review-handoff`

---

## 20. Contrôle des termes architecture/stack/POC/MVP

Toutes les occurrences dans `08`–`10` sont des **limites**, **questions ouvertes**, **dépendances futures** ou éléments **explicitement non décidés**. Aucune architecture validée ; aucune stack choisie ; aucun POC/MVP lancé.

---

## 21. Diff / checks

- `git diff --check` : clean
- Fichiers staged : aucun
- Commit projet : **aucun**
- Push projet : **aucun**

---

## 22. Décisions Morris nécessaires

1. Valider ou amender la conception (FD-CAND-01…08)
2. Sélectionner le cycle suivant après validation
3. Décider du sort de `project/sfia-studio-pre-framing`
4. Autoriser ultérieurement (séparément) tout commit/push/PR projet

---

## 23. Verdict

`SFIA STUDIO FUNCTIONAL DESIGN READY FOR MORRIS REVIEW`

---

## 24. CONTENU COMPLET — 08-functional-design.md

```markdown
# SFIA Studio — Conception fonctionnelle

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `08-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL produit |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `origin/main` @ `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Branche travail** | `project/sfia-studio-functional-design` (locale — push interdit) |
| **Statut** | `functional-design-candidate-review` |
| **Autorité** | Morris (L0) |
| **Décisions cadrage** | D-VAL-1 à D-VAL-11 (historiques / validées) |
| **Décisions conception** | FD-CAND-* uniquement — **non validées** |

> Contrat de conception fonctionnelle. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP.

---

## 1. Objet et limites

### Couvre

- acteurs et responsabilités fonctionnelles ;
- domaines fonctionnels dérivés de C1–C16 ;
- états et transitions d’un cycle SFIA dans Studio ;
- exigences fonctionnelles (`FR-*`) ;
- invariants ;
- données fonctionnelles candidates (sans stockage) ;
- sécurité fonctionnelle (besoins, sans technologie) ;
- UX fonctionnelle non visuelle ;
- critères d’acceptation fonctionnels.

### Ne couvre pas

| Hors périmètre | Statut |
|----------------|--------|
| Architecture fonctionnelle détaillée (composants / frontières techniques) | Non autorisée |
| Architecture technique / stack / API / BDD | Non décidées |
| Maquettes / Figma / design system | Non autorisés |
| Backlog / user stories de delivery | Non autorisés |
| POC / MVP | Non lancés / non définis |
| Code / tests applicatifs | Interdits |
| Commit / push / PR projet | Interdits |

### Séparation

| Artifact | Rôle |
|----------|------|
| Cadrage `04`–`07` | Contrat produit validé (entrée) |
| Conception `08`–`10` | Comportements et règles (ce cycle) |
| Architecture (future) | Structure logique / technique — non lancée |
| Delivery / POC / MVP | Preuve ou valeur — ultérieurs |

---

## 2. Acteurs et responsabilités fonctionnelles

| Acteur | Nature | Responsabilité | Ne fait pas |
|--------|--------|----------------|-------------|
| **Morris** | Humain L0 | Décide gates structurants ; autorise actions sensibles ; clôture | Automatiser l’arbitrage |
| **GPT** | Système | Qualifie, challenge, analyse, propose verdicts | Décider ; exécuter Git |
| **Cursor** | Système | Exécute dans un contrat borné | Inventer le périmètre ; merger seul |
| **Git** | Système | Source de vérité ; historique ; preuves | Décider |
| **Opérateur futur** | Humain candidat | Usage ultérieur éventuel | Autorité L0 |
| **Orchestrateur déterministe (candidat)** | Mécanisme candidat | Applique contrats, permissions, gates, stop | Créer des autorisations ; arbitrer |

Le nom « SFIA Runtime » reste **non contractuel**. L’architecture de ce mécanisme est **non validée**.

---

## 3. Domaines fonctionnels

Regroupements **fonctionnels** (≠ composants techniques) :

| Domaine | Capacités | Objet |
|---------|-----------|-------|
| **D1 — Intention et qualification** | C1, C2 | Capturer l’intention ; qualifier cycle / profil / blocs |
| **D2 — Contexte Git et sources** | C3, C4, C11 | Repo-informed pre-check ; sources canoniques ; visibilité Git |
| **D3 — Contrat d’exécution** | C5 | Générer le contrat Cursor borné |
| **D4 — Gates et permissions** | C6, C13 | Présenter gates ; appliquer permissions et stop |
| **D5 — Exécution et suivi** | C7, C14 | Suivre exécution ; diagnostic fonctionnel |
| **D6 — Rapports et review packs** | C8 | Collecter et contrôler rapports / packs |
| **D7 — Analyse et verdict** | C9 | Analyse GPT ; verdict proposé |
| **D8 — Décisions et clôture** | C10 | Enregistrer décisions Morris ; clôturer |
| **D9 — Historique et reprise** | C12 | Historique cycles ; reprise depuis Git |
| **D10 — Administration et exploitation** | C15, C16 | Coûts candidats ; paramètres produit |

Ces domaines ne fixent aucune découpe de services, modules ou packages.

---

## 4. Contrat fonctionnel de cycle — états candidats

États **candidats** (sans modèle technique imposé) :

| État | Signification |
|------|---------------|
| `intention_capturée` | Intention enregistrée, non encore qualifiée |
| `qualification_en_cours` | Qualification profil / blocs / sources |
| `qualification_prête` | Qualification proposée, en attente de confirmation |
| `attente_gate_morris` | Gate structurant présenté |
| `autorisé` | GO Morris reçu pour l’action demandée |
| `en_exécution` | Exécution Cursor / collecte en cours |
| `stoppé` | Stop condition ou interruption explicite |
| `rapport_disponible` | Rapport / review pack collecté |
| `revue_en_cours` | Analyse GPT / revue en cours |
| `décision_requise` | Arbitrage Morris requis |
| `clôturé` | Cycle terminé avec décision tracée |
| `abandonné` | Cycle abandonné explicitement |

---

## 5. Transitions

| Transition | Déclencheur | Acteur | Préconditions | Résultat | Preuves | Erreurs / stop | Gate Morris |
|------------|-------------|--------|---------------|----------|---------|----------------|-------------|
| Intention → qualification | Soumission intention | Morris | Projet connu | `qualification_en_cours` | Intention horodatée | Intention incomplète | Non |
| Qualification → prête | Fin qualification GPT | GPT | Sources lues | `qualification_prête` | Note de qualification | Sources manquantes | Non |
| Prête → attente gate | Action sensible demandée | Studio | Qualification cohérente | `attente_gate_morris` | Demande de gate | Périmètre ambigu | Oui (présentation) |
| Attente → autorisé | GO explicite | Morris | Gate affiché | `autorisé` | Décision GO | Refus / amendement | Oui |
| Autorisé → exécution | Lancement | Cursor / orchestrateur candidat | Contrat borné | `en_exécution` | Contrat + HEAD | Divergence Git | Non si déjà GO |
| Exécution → stoppé | Stop / erreur / annulation | Morris / système | Exécution active | `stoppé` | Journal stop | Contournement stop | Selon cause |
| Exécution → rapport | Fin nominale | Cursor | Livrables attendus | `rapport_disponible` | Rapport / pack | Pack incomplet | Non |
| Rapport → revue | Demande analyse | GPT / Morris | Pack présent | `revue_en_cours` | Pack référencé | Pack illisible | Non |
| Revue → décision requise | Verdict proposé | GPT | Analyse faite | `décision_requise` | Verdict candidat | Verdict inventé | Oui |
| Décision → clôturé | Décision Morris | Morris | Verdict / options | `clôturé` | Décision ancrée | Décision hors Git | Oui |
| * → abandonné | Abandon explicite | Morris | Cycle ouvert | `abandonné` | Motif | Abandon silencieux | Oui |

**Règle :** aucune transition vers une action distante (push, PR, merge, suppression branche) sans GO Morris **distinct**.

---

## 6. Autorité fonctionnelle

1. **Morris** — seule autorité de décision structurante.
2. **GPT** — qualifie et recommande ; ne décide pas.
3. **Cursor** — exécute un contrat ; n’élargit pas le périmètre.
4. **Git** — trace et prime.
5. **Orchestrateur candidat** — applique le contrat ; **ne crée pas** d’autorisations.

Observation ≠ recommandation ≠ décision.

---

## 7. Exigences fonctionnelles

| ID | Exigence | Domaine |
|----|----------|---------|
| FR-001 | Capturer une intention de cycle avec projet, objectif et typologie | D1 |
| FR-002 | Qualifier cycle SFIA, profil, blocs activés/désactivés avec justification | D1 |
| FR-003 | Exécuter un repo-informed pre-check (branche, HEAD, status, base) | D2 |
| FR-004 | Sélectionner et charger des sources canoniques explicites | D2 |
| FR-005 | Générer un contrat Cursor borné (fichiers autorisés/interdits, actions) | D3 |
| FR-006 | Afficher les gates Morris avant toute action sensible | D4 |
| FR-007 | Enregistrer une autorisation explicite Morris (GO / NO-GO / amendement) | D4 |
| FR-008 | Suivre l’état d’une exécution jusqu’à fin, stop ou erreur | D5 |
| FR-009 | Permettre l’arrêt immédiat d’une exécution | D4 / D5 |
| FR-010 | Collecter rapport d’exécution et review pack | D6 |
| FR-011 | Contrôler la complétude minimale d’un review pack | D6 |
| FR-012 | Soumettre le pack à analyse GPT et produire un verdict proposé | D7 |
| FR-013 | Distinguer verdict proposé et décision Morris | D7 / D8 |
| FR-014 | Enregistrer une décision Morris avec horodatage et références | D8 |
| FR-015 | Afficher branche, HEAD, status, diff pertinents | D2 |
| FR-016 | Conserver un historique de cycles reconstructible depuis Git | D9 |
| FR-017 | Reprendre un cycle interrompu à partir de Git et des artefacts tracés | D9 |
| FR-018 | Appliquer permissions et stop conditions avant actions sensibles | D4 |
| FR-019 | Journaliser les événements structurants (gates, stops, décisions) | D5 / D8 |
| FR-020 | Empêcher l’écriture durable hors Git (pas de seconde vérité) | D2 / D8 |
| FR-021 | Traiter commit, push, PR, ready-for-review et merge comme autorisations **distinctes** | D4 |
| FR-022 | Exiger une preuve suffisante avant tout READY / clôture nominale | D6 / D8 |
| FR-023 | Signaler les divergences Git / mémoire / sources et stopper si nécessaire | D2 / D5 |
| FR-024 | Exposer un suivi de coûts candidat (sans moteur imposé) | D10 |
| FR-025 | Administrer des paramètres produit candidats sans contourner les gates | D10 |

---

## 8. Invariants fonctionnels

| ID | Invariant |
|----|-----------|
| INV-01 | Aucune action distante sans GO Morris explicite |
| INV-02 | Aucun Critical implicite — profil justifié à chaque cycle |
| INV-03 | Aucune décision structurante inventée par GPT ou Cursor |
| INV-04 | Git prime sur tout état dérivé |
| INV-05 | Hypothèse ≠ décision ; candidate ≠ validée |
| INV-06 | Review pack requis selon le type de cycle |
| INV-07 | Handoff requis lorsque décidé Critical / explicitement |
| INV-08 | Pas de READY sans preuve suffisante |
| INV-09 | Arrêt en cas de divergence non résolue |
| INV-10 | Automatiser l’exécution répétable, pas l’arbitrage |
| INV-11 | Commit / push / PR / merge / suppression branche = gates séparés |
| INV-12 | L’orchestrateur candidat n’élève jamais ses propres privilèges |
| INV-13 | Un cycle abandonné ou stoppé reste traçable |
| INV-14 | Les décisions candidates n’ont aucun effet tant que non validées |

---

## 9. Données fonctionnelles candidates

Informations nécessaires — **sans schéma de stockage** :

| Famille | Exemples |
|---------|----------|
| Identité | ID cycle, projet, titre, typologie |
| Qualification | Profil, blocs, justification Critical |
| Git | Branche, HEAD, base, status, merge-base |
| Périmètre | Fichiers autorisés / interdits / protected paths |
| Gates | Type, statut, décideur, horodatage |
| Décisions | Contenu, GO/NO-GO, références |
| Exécution | Contrat, événements, stops |
| Preuves | Rapports, review packs, SHAs, liens |
| Verdicts | Proposition GPT, décision Morris |
| Coûts | Estimations / relevés candidats |
| Journaux | Horodatages, acteurs, actions |

---

## 10. Sécurité fonctionnelle

Besoins candidats — **aucune technologie choisie** :

| Besoin | Exigence |
|--------|----------|
| Authentification opérateur | Identifier l’opérateur avant actions sensibles |
| Autorisation | Moindre privilège ; lecture ≠ écriture ≠ distante |
| Chemins | Allowlist / protected paths explicites |
| Branche / HEAD | Contrôle avant écriture |
| Confirmations | Confirmation explicite des actions sensibles |
| Divergence | Stop immédiat si incohérence |
| Journalisation | Décisions et stops auditables |
| Secrets | Protection exigée — mécanisme non imposé |
| Non-répudiation raisonnable | Décisions Morris horodatées et référencées |
| Réversibilité | Actions automatisées stoppables / traçables |
| L5 | Impossible en global — pas d’auto-arbitrage total |

---

## 11. UX fonctionnelle non visuelle

Morris doit pouvoir :

| Voir | Décider | Distinguer |
|------|---------|------------|
| État du cycle | GO / NO-GO / amendement | Observation vs recommandation vs décision |
| Branche / HEAD / status | Autoriser commit, push, PR, merge **séparément** | Candidate vs validée |
| Gates en attente | Stopper / reprendre / abandonner | Preuve manquante vs preuve suffisante |
| Erreurs et divergences | Clôturer | Action locale vs distante |
| Review pack / verdict proposé | Choisir le cycle suivant (hors ce document) | Automatisation autorisée vs interdite |

Pas de wireframes, maquettes, Figma, dimensions ni composants UI.

---

## 12. Critères d’acceptation fonctionnels

| ID | Critère |
|----|---------|
| AC-01 | Chaque capacité C1–C16 est couverte par au moins un domaine et une FR |
| AC-02 | Chaque UC1–UC8 est tracé vers au moins un parcours F* (doc 09) |
| AC-03 | Aucune transition distante sans gate Morris |
| AC-04 | États et transitions sont explicites et testables |
| AC-05 | Invariants INV-01…14 sont formulés sans ambiguïté d’autorité |
| AC-06 | Aucune stack / API / BDD / composant technique n’est validé |
| AC-07 | POC et MVP restent hors conception (limites / questions ouvertes uniquement) |
| AC-08 | Les décisions de conception sont listées en FD-CAND-* non validées |

---

## 13. Questions ouvertes

| Zone | Questions |
|------|-----------|
| Fonctionnel | Granularité des états ; priorisation des parcours F* pour une première incrémentation |
| UX | Surfaces exactes d’affichage des gates (non visuelle ici) |
| Architecture | Frontières Studio / orchestrateur candidat — **cycle futur** |
| POC | Questions de faisabilité à retenir — **non sélectionnées** |
| MVP | Sous-ensemble de valeur — **non défini** |
| Exploitation | Mode multi-opérateur ; distribution — **non décidé** |

---

## 14. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Navigation |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC1–UC8 |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours et BR |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Arbitrage conception |

---

*SFIA Studio — conception fonctionnelle candidate — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*

```

---

## 25. CONTENU COMPLET — 09-functional-flows-and-rules.md

```markdown
# SFIA Studio — Parcours fonctionnels et règles métier

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `09-functional-flows-and-rules.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Statut** | `functional-design-candidate-review` |
| **Autorité** | Morris |

> Parcours F1–F12 et règles `BR-*`. **Pas** d’implémentation technique.

---

## 1. Parcours fonctionnels

### F1 — Lancer un cycle documentaire borné

| Champ | Contenu |
|-------|---------|
| Objectif | Créer et qualifier une intention de cycle DOC borné |
| Acteur primaire | Morris |
| Secondaires | GPT, Git |
| Préconditions | Projet SFIA Studio connu ; Git accessible |
| Scénario nominal | 1) Saisir intention 2) Pre-check Git 3) Qualification GPT 4) Confirmer profil/blocs 5) État `qualification_prête` ou `attente_gate_morris` |
| Variantes | Light vs Critical ; reprise d’une intention brouillon |
| Erreurs | Intention incomplète ; repo inaccessible |
| Stop | Divergence Git majeure |
| Gates | Non pour la seule capture ; oui si action sensible suit |
| Données | Intention, projet, profil, blocs |
| Preuves | Intention horodatée ; note de qualification |
| État final | `qualification_prête` |
| Auto autorisées | Lecture Git ; proposition de qualification |
| Auto interdites | Décision de lancer une écriture distante |

### F2 — Préparer un prompt Cursor repo-informed

| Champ | Contenu |
|-------|---------|
| Objectif | Produire un contrat Cursor cohérent avec le repo |
| Acteur primaire | GPT / Morris |
| Secondaires | Git, Cursor (contrat non encore lancé) |
| Préconditions | Qualification prête ; sources sélectionnées |
| Scénario nominal | 1) Pre-check 2) Sources 3) Périmètre fichiers 4) Génération contrat 5) Revue Morris |
| Variantes | Read-only vs écriture locale documentaire |
| Erreurs | Sources absentes ; HEAD inattendu |
| Stop | Working tree incompatible non tracé |
| Gates | GO avant exécution (F4), pas avant génération |
| Données | Branche, HEAD, allowlist, interdits |
| Preuves | Contrat versionné / horodaté |
| État final | Contrat prêt → `attente_gate_morris` si exécution demandée |
| Auto autorisées | Lecture ; drafting |
| Auto interdites | Exécution sans GO |

### F3 — Soumettre et enregistrer un gate Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Présenter un gate et enregistrer GO / NO-GO / amendement |
| Acteur primaire | Morris |
| Secondaires | Studio (présentation), Git (trace) |
| Préconditions | Action sensible identifiée |
| Scénario nominal | 1) Afficher enjeu 2) Options 3) Décision 4) Ancrage |
| Variantes | Amendement de périmètre |
| Erreurs | Gate ambigu ; décision hors Git |
| Stop | Tentative de contournement |
| Gates | Le gate lui-même |
| Données | Type gate, décision, horodatage |
| Preuves | Décision référencée |
| État final | `autorisé` ou retour qualification / abandon |
| Auto autorisées | Affichage ; journalisation |
| Auto interdites | Auto-GO |

### F4 — Lancer une exécution autorisée

| Champ | Contenu |
|-------|---------|
| Objectif | Démarrer Cursor dans le contrat borné |
| Acteur primaire | Cursor / orchestrateur candidat |
| Secondaires | Morris (superviseur), Git |
| Préconditions | `autorisé` ; contrat cohérent avec HEAD |
| Scénario nominal | 1) Vérifier HEAD/branche 2) Appliquer allowlist 3) Exécuter 4) Émettre événements |
| Variantes | Exécution read-only vs écriture locale |
| Erreurs | Fichier hors périmètre ; commande interdite |
| Stop | Divergence ; stop manuel ; protected path |
| Gates | GO préalable (F3) |
| Données | Contrat, événements |
| Preuves | Journal d’exécution |
| État final | `en_exécution` puis `rapport_disponible` ou `stoppé` |
| Auto autorisées | Exécution bornée |
| Auto interdites | Élargissement ; push ; merge |

### F5 — Interrompre une exécution

| Champ | Contenu |
|-------|---------|
| Objectif | Stopper immédiatement une exécution |
| Acteur primaire | Morris (ou stop automatique) |
| Préconditions | `en_exécution` |
| Scénario nominal | 1) Signal stop 2) Halt 3) Journal 4) État `stoppé` |
| Variantes | Stop automatique (divergence) vs manuel |
| Erreurs | Stop ignoré |
| Stop | N/A (est le stop) |
| Gates | Non pour stop de sécurité |
| Données | Motif, horodatage |
| Preuves | Événement stop |
| État final | `stoppé` |
| Auto autorisées | Stop de sécurité |
| Auto interdites | Reprise automatique d’une action distante |

### F6 — Collecter un rapport et un review pack

| Champ | Contenu |
|-------|---------|
| Objectif | Rassembler preuves d’exécution |
| Acteur primaire | Cursor / Studio |
| Préconditions | Fin nominale ou stop avec artefacts |
| Scénario nominal | 1) Collecter 2) Contrôler complétude minimale 3) `rapport_disponible` |
| Variantes | Pack FULL vs Standard |
| Erreurs | Pack incomplet |
| Stop | Contenu manquant bloquant |
| Gates | Selon cycle |
| Données | Rapport, pack, SHAs |
| Preuves | Pack lui-même |
| État final | `rapport_disponible` |
| Auto autorisées | Collecte / contrôle structurel |
| Auto interdites | Verdict final |

### F7 — Analyser le pack et proposer un verdict

| Champ | Contenu |
|-------|---------|
| Objectif | Analyse GPT + verdict proposé |
| Acteur primaire | GPT |
| Préconditions | Pack disponible |
| Scénario nominal | 1) Lire pack 2) Challenger 3) Verdict candidat 4) `décision_requise` |
| Variantes | Revue partielle |
| Erreurs | Pack illisible ; conclusion inventée |
| Stop | Contradiction majeure non signalée |
| Gates | Décision finale = Morris |
| Données | Verdict proposé |
| Preuves | Analyse référencée |
| État final | `décision_requise` |
| Auto autorisées | Analyse / recommandation |
| Auto interdites | Décision structurante |

### F8 — Enregistrer une décision Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Ancrer une décision L0 |
| Acteur primaire | Morris |
| Préconditions | `décision_requise` ou gate ouvert |
| Scénario nominal | 1) Choisir 2) Motiver 3) Horodater 4) Référencer preuves 5) Tracer |
| Variantes | Validation partielle / amendement |
| Erreurs | Décision non tracée |
| Stop | Tentative d’effet sans trace |
| Gates | Oui |
| Données | Décision, références |
| Preuves | Enregistrement décision |
| État final | `clôturé` ou retour cycle |
| Auto autorisées | Journalisation |
| Auto interdites | Décider à la place de Morris |

### F9 — Préparer une PR readiness

| Champ | Contenu |
|-------|---------|
| Objectif | Contrôler readiness avant publication distante |
| Acteur primaire | Cursor / Morris |
| Préconditions | Diff borné ; preuves |
| Scénario nominal | 1) Diff check 2) Périmètre 3) Pack 4) Demande GO push/PR séparés |
| Variantes | Draft PR vs ready-for-review (GO distincts) |
| Erreurs | Fichiers hors périmètre |
| Stop | Secret / hors scope |
| Gates | Push ; création PR ; ready-for-review ; merge = séparés |
| Données | Diff stat, liste fichiers |
| Preuves | Pack readiness |
| État final | `attente_gate_morris` |
| Auto autorisées | Contrôles locaux |
| Auto interdites | Push / PR / merge sans GO |

### F10 — Contrôler un post-merge

| Champ | Contenu |
|-------|---------|
| Objectif | Vérifier intégrité post-intégration sur `main` |
| Acteur primaire | Cursor / GPT |
| Préconditions | Merge observé |
| Scénario nominal | 1) Fetch 2) Ascendance 3) Diff périmètre 4) Intégrité blobs 5) Pack 6) Décision clôture si écart gouvernance |
| Variantes | Écart d’autorisation à qualifier sans réécrire l’histoire |
| Erreurs | Contenu divergent |
| Stop | Altération détectée |
| Gates | Clôture / régularisation = Morris |
| Données | SHAs, inventaire |
| Preuves | Pack post-merge |
| État final | `rapport_disponible` / `décision_requise` |
| Auto autorisées | Lecture / comparaison |
| Auto interdites | Rewrite history ; D-VAL inventée |

### F11 — Reprendre un cycle interrompu depuis Git

| Champ | Contenu |
|-------|---------|
| Objectif | Reprendre sans seconde vérité |
| Acteur primaire | Morris / Cursor |
| Préconditions | Cycle `stoppé` ; artefacts Git |
| Scénario nominal | 1) Relire Git 2) Reconstruire état dérivé 3) Confirmer 4) Reprendre ou abandonner |
| Variantes | Reprise partielle |
| Erreurs | Artefacts manquants |
| Stop | Incohérence non résolue |
| Gates | Reprise d’action sensible = nouveau GO |
| Données | Références Git, état reconstruit |
| Preuves | Journal de reprise |
| État final | État repris cohérent |
| Auto autorisées | Reconstruction lecture |
| Auto interdites | Reprise distante silencieuse |

### F12 — Gérer une divergence Git / mémoire / sources

| Champ | Contenu |
|-------|---------|
| Objectif | Détecter et traiter les divergences |
| Acteur primaire | Studio / Morris |
| Préconditions | Incohérence détectée |
| Scénario nominal | 1) Signaler 2) Stopper actions sensibles 3) Présenter écart 4) Décision Morris |
| Variantes | Mémoire vs Git ; sources vs HEAD |
| Erreurs | Divergence ignorée |
| Stop | Oui — par défaut |
| Gates | Oui pour lever le stop |
| Données | Description écart |
| Preuves | Capture d’écart |
| État final | `stoppé` puis reprise ou abandon |
| Auto autorisées | Détection / stop |
| Auto interdites | « Réparer » en silence |

---

## 2. Matrices

### 2.1 Parcours × capacités C1–C16

| | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|--|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|
| F1 | ● | ● | ● | ○ | | | | | | | ● | | ○ | | | |
| F2 | ○ | ● | ● | ● | ● | ○ | | | | | ● | | ○ | | | |
| F3 | | | | | | ● | | | | ● | | | ● | | | |
| F4 | | | ● | | ● | ○ | ● | | | | ● | | ● | ● | | |
| F5 | | | | | | ○ | ● | | | | | | ● | ● | | |
| F6 | | | | | | | ○ | ● | | | | ○ | | ○ | | |
| F7 | | | | ○ | | | | ● | ● | | | | | | | |
| F8 | | | | | | ● | | | ○ | ● | | ● | ● | | | |
| F9 | | | ● | ● | ○ | ● | ○ | ● | ○ | | ● | | ● | | ○ | |
| F10 | | | ● | ● | | ○ | | ● | ● | ○ | ● | ● | ● | | | |
| F11 | ○ | ○ | ● | ● | ○ | ○ | ○ | ○ | | ○ | ● | ● | ● | ● | | |
| F12 | | | ● | ● | | ● | ● | | | ○ | ● | ○ | ● | ● | | |

Légende : ● primaire · ○ secondaire

### 2.2 Parcours × profils

| Parcours | Light | Standard | Critical | Capitalization |
|----------|-------|----------|----------|----------------|
| F1–F2 | ○ | ● | ● | ○ |
| F3–F5 | ○ | ● | ● | ○ |
| F6–F8 | ○ | ● | ● | ● |
| F9–F10 | | ● | ● | ○ |
| F11–F12 | ○ | ● | ● | ○ |

### 2.3 Parcours × niveaux d’automatisation L0–L5

| Niveau | Sens | Parcours concernés |
|--------|------|--------------------|
| L0 | Décision humaine | F3, F8 (cœur) |
| L1–L2 | Aide / drafting | F1, F2, F7 |
| L3 | Exécution bornée après GO | F4, F6, F9 (contrôles) |
| L4 | Orchestration candidate limitée | F4/F5 sous contrat — **non validé techniquement** |
| L5 | Auto-arbitrage global | **Interdit** |

### 2.4 Parcours × actions sensibles

| Action | Parcours | Gate distinct |
|--------|----------|---------------|
| Écriture locale hors allowlist | F4 | Stop |
| Commit | F9 | GO commit |
| Push | F9 | GO push |
| Création PR | F9 | GO PR |
| Ready-for-review | F9 | GO distinct |
| Merge | F9 / F10 | GO merge |
| Suppression branche | — | GO dédié — jamais auto |
| Force push | — | Interdit / GO exceptionnel explicite |

---

## 3. Règles métier

| ID | Règle |
|----|-------|
| BR-001 | Morris est la seule autorité de décision structurante |
| BR-002 | Git est la source de vérité ; tout état dérivé doit être reconstructible |
| BR-003 | Hiérarchie des sources : Git `main` / docs projet / méthode / handoff — sans seconde vérité |
| BR-004 | Le profil est sélectionné explicitement à chaque cycle |
| BR-005 | Critical est justifié ; jamais implicite |
| BR-006 | Le périmètre d’exécution est borné (allowlist / denylist) |
| BR-007 | Les protected paths ne sont jamais modifiés sans GO dédié |
| BR-008 | Commit, push, PR, ready-for-review et merge sont des autorisations **séparées** |
| BR-009 | Un review pack est produit selon le niveau décidé pour le cycle |
| BR-010 | Un handoff Git est publié lorsque requis (Critical / décision explicite) |
| BR-011 | Les stop conditions priment sur la poursuite automatique |
| BR-012 | Toute décision structurante est horodatée |
| BR-013 | Preuve avant READY / clôture nominale |
| BR-014 | L’historique de cycle est conservé et traçable |
| BR-015 | Une reprise exige relecture Git et, si sensible, un nouveau GO |
| BR-016 | Pas d’auto-merge |
| BR-017 | Pas de suppression automatique de branche |
| BR-018 | Pas de promotion automatique d’une candidate (FD-CAND / D-VAL candidate) |
| BR-019 | GPT ne décide pas ; Cursor n’élargit pas ; l’orchestrateur candidat n’autorise pas |
| BR-020 | Observation ≠ recommandation ≠ décision |
| BR-021 | POC ≠ MVP ≠ produit cible ≠ industrialisation plateforme |
| BR-022 | Option C : consommer SFIA v2.6 sans la modifier dans ce produit |
| BR-023 | Couverture progressive des quinze cycles — aucun cycle auto-activé |
| BR-024 | macOS = contrainte de preuve éventuelle — pas plateforme produit définitive |
| BR-025 | Runtime / orchestrateur = candidat non contractuel |

Ces règles ne définissent **aucune** implémentation technique.

---

## 4. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat FR / états |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Arbitrage |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC |

---

*SFIA Studio — parcours et règles — conception candidate — Critical — Morris décide.*

```

---

## 26. CONTENU COMPLET — 10-functional-decision-pack.md

```markdown
# SFIA Studio — Decision pack conception fonctionnelle

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `10-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Statut** | `functional-design-candidate-review` |
| **Destinataire** | Morris (L0) |

> Pack d’arbitrage. Les identifiants `FD-CAND-*` sont **candidates** — aucun effet tant que non validées. **Pas de D-VAL-12.**

---

## 1. Synthèse du cycle

Décision Morris du **2026-07-18** : démarrer le cycle **2 — Conception fonctionnelle** (Critical) pour SFIA Studio.

Livrables produits (candidates en revue) :

- `08-functional-design.md` — contrat fonctionnel ;
- `09-functional-flows-and-rules.md` — parcours F1–F12 et règles BR ;
- `10-functional-decision-pack.md` — le présent pack.

Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé. Aucun commit / push / PR projet.

---

## 2. Sources consultées

- Template cycle SFIA v2.6 ; routing guide ; operating model ; rules/guardrails ;
- Cadrage `01`–`07` sur `main` @ `8f5e8a8…` ;
- Capacités C1–C16 et UC1–UC8 (`05`) ;
- Handoff post-merge PR #208 `9e8d87b…` ;
- Décisions D-VAL-1 à D-VAL-11.

---

## 3. Périmètre couvert

- Acteurs et autorités ;
- Domaines D1–D10 ;
- États et transitions de cycle ;
- Exigences FR-001…025 ;
- Parcours F1–F12 ;
- Règles BR-001…025 ;
- Invariants INV-01…14 ;
- Données fonctionnelles candidates ;
- Sécurité fonctionnelle (besoins) ;
- UX fonctionnelle non visuelle ;
- Critères d’acceptation AC-01…08.

---

## 4. Périmètre explicitement exclu

| Exclu | Statut |
|-------|--------|
| Architecture fonctionnelle détaillée / technique | Non autorisée |
| Stack / API / BDD / microservices / frameworks | Non décidés |
| Figma / maquettes / design system | Non autorisés |
| Backlog / user stories delivery | Non autorisés |
| POC / MVP | Non lancés / non définis |
| Code / tests | Interdits |
| Commit / push / PR / merge projet | Interdits |
| Modification SFIA v2.6 / Campus360 | Interdites |

---

## 5. Domaines fonctionnels proposés

D1 Intention/qualification · D2 Git/sources · D3 Contrat · D4 Gates/permissions · D5 Exécution/suivi · D6 Rapports · D7 Analyse · D8 Décisions · D9 Historique/reprise · D10 Admin/coûts.

---

## 6. États et transitions proposés

Douze états candidats (`intention_capturée` … `abandonné`) et transitions avec gates pour actions sensibles. Commit/push/PR/merge restent des GO distincts.

---

## 7. Exigences fonctionnelles

FR-001 à FR-025 (voir `08`).

---

## 8. Règles métier

BR-001 à BR-025 (voir `09`).

---

## 9. Parcours fonctionnels

F1–F12 alignés sur UC1–UC8 et étendus (PR readiness, post-merge, divergence).

| UC cadrage | Parcours |
|------------|----------|
| UC1 | F1 |
| UC2 | F2 |
| UC3 | F4 (variante read-only) |
| UC4 | F6 / F7 |
| UC5 | F3 / F8 |
| UC6 | F9 |
| UC7 | F5 / F11 |
| UC8 | F11 |

---

## 10. Invariants

INV-01…14 — autorité Morris, Git prime, pas d’auto-arbitrage, candidates sans effet.

---

## 11. Risques fonctionnels

| ID | Risque | Mitigation documentaire |
|----|--------|-------------------------|
| RF-01 | Ambiguïté d’autorité → action distante | INV / BR / F3 / F9 |
| RF-02 | Seconde vérité hors Git | FR-020 / BR-002 |
| RF-03 | Critical implicite | BR-005 |
| RF-04 | Confusion conception → architecture | Limites explicites |
| RF-05 | Confusion POC / MVP / produit | BR-021 |
| RF-06 | Orchestrateur candidat pris pour décideur | Acteurs §08 |
| RF-07 | Reprise silencieuse après stop | F11 / BR-015 |

---

## 12. Contradictions / ambiguïtés détectées

| Élément | Qualification |
|---------|---------------|
| Cadrage vs conception | Aucune contradiction bloquante détectée |
| Écart d’autorisation merge #208 | Traçabilité gouvernance — hors conception ; déjà documenté post-merge |
| Granularité des états | À arbitrer (FD-CAND) — non bloquant |

---

## 13. Questions ouvertes

| Zone | Question |
|------|----------|
| Fonctionnel | Quels parcours F* prioritaires pour une première incrémentation ? |
| UX | Quelles surfaces d’information minimales avant UI ? |
| Architecture | Frontières Studio / orchestrateur — cycle futur |
| POC | Quelles preuves de faisabilité minimales — **non sélectionnées** |
| MVP | Sous-ensemble de valeur — **non défini** |
| Branche | Sort de `project/sfia-studio-pre-framing` |

---

## 14. Décisions candidates (non contractuelles)

| ID | Décision candidate | Effet si validée | Statut |
|----|--------------------|------------------|--------|
| **FD-CAND-01** | Valider les domaines fonctionnels D1–D10 | Base pour architecture ultérieure | **CANDIDATE** |
| **FD-CAND-02** | Valider acteurs et responsabilités | Contrat d’autorité stable | **CANDIDATE** |
| **FD-CAND-03** | Valider états et transitions | Contrat de cycle | **CANDIDATE** |
| **FD-CAND-04** | Valider invariants INV-01…14 | Garde-fous stables | **CANDIDATE** |
| **FD-CAND-05** | Valider parcours prioritaires F1–F12 (ou sous-ensemble) | Entrée architecture / UX | **CANDIDATE** |
| **FD-CAND-06** | Autoriser le passage à l’architecture fonctionnelle | Lance un cycle distinct | **CANDIDATE** |
| **FD-CAND-07** | Autoriser un cycle UX fonctionnel non visuel avant architecture | Ordre alternatif | **CANDIDATE** |
| **FD-CAND-08** | Préparer ultérieurement le périmètre POC (sans le lancer) | Préparation seulement | **CANDIDATE** |

> Aucune FD-CAND ne lance POC, MVP, stack, code, commit ou push.

---

## 15. Gates de validation

| Gate | Objet | Statut |
|------|-------|--------|
| Revue ChatGPT handoff | Qualifier la conception | Requis |
| Validation Morris conception | Accepter / amender FD-CAND | **En attente** |
| GO cycle suivant | Architecture / UX / autre | Non pris |
| GO Git projet | Commit / push / PR | **Interdit** dans ce cycle |

---

## 16. Options Morris

### A — Valider la conception telle quelle

Accepter FD-CAND-01…05 ; décider ensuite FD-CAND-06 ou 07.

### B — Amender puis re-revue

Demander corrections bornées sur états, parcours ou règles.

### C — Valider un sous-ensemble de parcours

Réduire F* prioritaires avant architecture.

### Recommandation candidate (≠ décision)

Valider FD-CAND-01…05, puis **FD-CAND-06** (architecture fonctionnelle légère) — sans lancer POC/MVP.

---

## 17. Verdict documentaire

`SFIA STUDIO FUNCTIONAL DESIGN READY FOR MORRIS REVIEW`

---

## 18. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — decision pack conception — FD-CAND only — Critical — Morris décide.*

```

---

## 27. CONTENU COMPLET MODIFIÉ — README.md

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `functional-design-candidate-review` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — conception fonctionnelle documentaire (DOC, Critical) |
| **Typologie cycle** | DOC — EVOL produit |
| **Cycle projet** | 2 — Conception fonctionnelle (lancé par décision Morris — 2026-07-18) |
| **Profil SFIA** | Critical |
| **Branche travail** | `project/sfia-studio-functional-design` (locale — push interdit) |
| **Branche historique** | `project/sfia-studio-pre-framing` (conservée ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **Source de vérité** | Git **`main`** — PR **#207** / **#208** ; base `8f5e8a8…` |

---

## 0. État post-merge (observation)

| Élément | Valeur |
|---------|--------|
| PR | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Socle sur `main` | Huit documents intégrés — intégrité vérifiée |
| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
| Cadrage documentaire | **Clôturé** (D-VAL-11) — inchangé |
| Synchronisation post-merge | **Validée** (D-VAL-11) |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Cycle 2 | Conception fonctionnelle — **candidate en revue** (non validée) |
| Prochain cycle après conception | **Non sélectionné** |
| Branche projet historique | Conservée ; suppression = décision distincte |

> Le merge PR #207 est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. D-VAL-11 **régularise** l’intégration et clôture le cadrage documentaire. Le cycle 2 est lancé ; la conception n’est **pas** validée.

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

Revue documentaire G3 : **conforme** (aucune réserve bloquante). La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**. Cadrage détaillé **validé** via **D-VAL-9 / DF-G1**.

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

## 2. Trajectoire macro (état factuel)

```text
Pré-cadrage                    ← terminé historiquement
  → cadrage détaillé           ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement (G7)         ← commit / push / draft PR réalisés (D-VAL-10)
  → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
  → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
  → conception fonctionnelle   ← **lancée** (2026-07-18) — candidate en revue
  → architecture / UX          ← non sélectionnés
  → POC → MVP → delivery → industrialisation plateforme
```

Aucune stack / architecture validée. Conception **non** validée. POC / MVP non lancés.

---

## 3. Navigation

### Pré-cadrage (historique)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, état post-merge, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

### Conception fonctionnelle — candidate en revue

| Document | Rôle |
|----------|------|
| [08-functional-design.md](./08-functional-design.md) | Contrat de conception fonctionnelle |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack d’arbitrage (FD-CAND) |

> Conception **candidate en revue** — non validée. ≠ architecture / stack / UX visuelle / backlog / POC / MVP / code.

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle) est en profil **Critical** : actions Git/GPT/Cursor ; permissions et gates ; prévention d’auto-arbitrage ; traçabilité des preuves et décisions.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Socle `projects/sfia-studio/` intégré via PR #207 |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |

---

## 6. Gates G1–G7 (historiques) et observation merge

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **VALIDÉE**. |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.

---

## 7. Décisions D-VAL-1 à D-VAL-11

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
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** autorisés ; **merge non autorisé** (historique) | G7 |
| D-VAL-11 | Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire **clôturé** ; branche conservée ; prochain cycle non sélectionné | Clôture |

### Contenu D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte ; prochain cycle non sélectionné |

### Décisions encore ouvertes

| Décision | Statut |
|----------|--------|
| Validation ou amendement de la conception fonctionnelle (FD-CAND) | **En revue** |
| Sélection du cycle suivant après validation conception | **Non sélectionné** |
| Sort de la branche `project/sfia-studio-pre-framing` | Conservée ; décision distincte |
| Stack / architecture / contenu POC / MVP | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT du handoff conception fonctionnelle.
2. Validation ou amendement Morris de la conception (FD-CAND-*).
3. Sélection du cycle suivant après validation (non lancée).
4. Sort de la branche historique (décision distincte).

**Recommandation (≠ décision) :** valider FD-CAND-01…05 puis arbitrer architecture vs UX fonctionnelle.

**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL DESIGN READY FOR MORRIS REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Documents projet | `projects/sfia-studio/` sur **`main`** (PR #207 / `ec21074`) |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |

---

*SFIA Studio — cadrage documentaire clôturé (D-VAL-11) — conception fonctionnelle candidate en revue — Option C — Morris décide.*

```

---

## 28. CONTENU COMPLET MODIFIÉ — 07-product-trajectory-and-decision-pack.md

```markdown
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `functional-design-candidate-review` (trajectoire) ; cadrage documentaire **clôturé** |
| **Décisions** | D-VAL-1 à D-VAL-11 (inchangées) |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` — base `8f5e8a8…` (PR #207 / #208) |

> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception candidate — **non validée**.

---

## 0. État post-merge

| Élément | Valeur |
|---------|--------|
| PR #207 | **MERGED** |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Intégration | Techniquement vérifiée ; **reconnue** (D-VAL-11) |
| D-VAL-10 | Historique — **n’autorisait pas** le merge |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Cadrage documentaire | **Clôturé** (inchangé) |
| Branche projet historique | Conservée ; intégrée à `main` ; suppression = décision distincte |
| Cycle 2 conception | **Sélectionné et lancé** — 2026-07-18 — candidate en revue |
| Prochain cycle après conception | **Non sélectionné** |

> Le merge est un fait Git. D-VAL-11 le régularise et clôture le cadrage documentaire.

### Trace factuelle — cycle 2 (conception fonctionnelle)

| Champ | Valeur |
|-------|--------|
| Date | **2026-07-18** |
| Décision Morris | Sélection et démarrage du cycle **2 — Conception fonctionnelle** |
| Profil | Critical |
| Périmètre | Documents `08`–`10` + navigation bornée README / `07` |
| Statut conception | `functional-design-candidate-review` — **non validée** |
| Exclu | Architecture ; UX visuelle ; stack ; POC ; MVP ; code ; commit/push/PR projet |
| D-VAL-1…11 | **Inchangées** — aucune D-VAL-12 créée |

---

## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)

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
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** **autorisés** ; **merge non autorisé** | G7 |

### Contenu D-VAL-10 (G7) — historique

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff ≠ G7.

### D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |

---

## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 validée. |

G7 **≠** autorisation rétroactive de merge.

---

## 3. Trajectoire produit (état factuel)

```text
Pré-cadrage                         ← terminé historiquement
  → cadrage détaillé                ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
  → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
  → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
  → conception fonctionnelle        ← **lancée** 2026-07-18 — candidate en revue
  → architecture fonctionnelle      ← non sélectionnée
  → UX/UI initiale                  ← non sélectionnée
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
- G7 historique = versionnement (commit / push / draft PR) — **distinct** du merge.
- Merge = fait Git ; régularisation et clôture = **D-VAL-11 validée**.
- Aucune stack / architecture validée.
- Conception fonctionnelle **lancée** ; **non** validée ; aucune architecture / UX visuelle / POC / MVP lancée.
- Cycle suivant après conception **non sélectionné**.

---

## 4. Prochains cycles candidats (options de routage — non lancés)

### 4.0 Synchronisation documentaire post-merge

| Champ | Contenu |
|-------|---------|
| Statut | **FAIT / VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé |
| Objectif | Aligner docs sur l’état Git post-merge |
| Ne lance pas | Conception / architecture / POC |

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **LANCÉE** — 2026-07-18 — décision Morris explicite |
| Objectif | Préciser comportements et règles métier des capacités |
| Livrables | `08` / `09` / `10` — candidats en revue |
| Profil | Critical |
| Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin de structurer capacités / frontières |
| Objectif | Modules logiques ; séparation Studio / orchestration candidate |
| Pourquoi pas maintenant | Risque de figer trop tôt |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Déclencheur | Parcours opérateur à concevoir |
| Pourquoi pas maintenant | Figma désactivé ; cycle non sélectionné |

### 4.4 Architecture technique

| Champ | Contenu |
|-------|---------|
| Déclencheur | Après archi fonctionnelle suffisante |
| Pourquoi pas maintenant | Prématuré ; stack non décidée |

### 4.5 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Avant POC à permissions élevées |
| Pourquoi pas maintenant | Identification déjà faite au cadrage |

---

## 5. Décisions à préparer

| ID | Décision | Nature | Statut |
|----|----------|--------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
| D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
| D-NEXT-2b | Validation ou amendement de la conception (FD-CAND) | Morris | **En revue** |
| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **Non sélectionné** |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Partiellement tranché (conception lancée) ; suite non prise |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Prérequis** | Cadrage documentaire clôturé (D-VAL-11) |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |

### Recommandation (≠ décision / ≠ sélection)

**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée et lancée** le 2026-07-18. Les options 2 et 3 restent candidates pour le cycle **suivant** après validation de la conception.

Morris reste libre d’amender la conception ou de choisir un autre ordre. **Aucun** cycle architecture / UX visuelle / POC / MVP n’est lancé.

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **FAIT** pour conception (2026-07-18) ; suite après conception **ouverte** |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique ; merge hors périmètre D-VAL-10 |
| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G4+ **ne sont pas** validés. La validation de la conception (FD-CAND) est un gate distinct — **en attente**.

---

## 8. Questions Morris

1. Validez-vous ou amendez-vous la conception fonctionnelle (FD-CAND-01…08) ?
2. Quel cycle suivant après validation (architecture fonctionnelle / UX fonctionnelle / autre) ?
3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
4. Quel niveau d’architecture minimale avant POC ?
5. Quelles priorités NFR avant le POC ?

---

## 9. Critères de clôture du cadrage détaillé

| Critère | État |
|---------|------|
| 04–07 complets et cohérents | **Oui** |
| Alignement D-VAL-1…11 / G1–G7 / DF-G1 | **Oui** |
| Pas d’archi/stack/MVP/POC démarrés | **Oui** |
| DF-G1 validé | **Oui** (D-VAL-9) |
| G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
| Merge PR #207 | **Fait Git** — régularisé D-VAL-11 |
| Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
| Cycle conception fonctionnelle | **Lancé** — candidate en revue |
| Prochain cycle après conception | **Non sélectionné** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
| Intégration `main` | **Oui** (PR #207 / `ec21074` ; base actuelle `8f5e8a8…`) |
| Synchronisation post-merge | **VALIDÉE** (D-VAL-11) |
| Cadrage documentaire | **Clôturé** |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Conception fonctionnelle | **Candidate en revue** — non validée |
| Ready for architecture / POC / MVP | **Non** |

**Verdict :** `SFIA STUDIO FUNCTIONAL DESIGN READY FOR MORRIS REVIEW`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL / état |
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [08-functional-design.md](./08-functional-design.md) | Conception — contrat |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — arbitrage |

---

*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle candidate en revue — Morris décide.*

```

---

## 29. Instruction ChatGPT

Lire depuis Git :

- repository : `mcleland147/sfia-workspace`
- ref : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- base : `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a`

Analyser : conformité cadrage ; complétude conception ; acteurs ; états/transitions ; exigences ; règles ; parcours ; invariants ; sécurité fonctionnelle ; absence d’architecture/stack décidée ; absence POC/MVP lancé ; décisions candidates ; readiness validation Morris ; cycle suivant recommandé **sans le lancer**.

---

*Review pack FULL — SFIA Studio conception fonctionnelle — Critical — 2026-07-18 17:37:40 CEST*
