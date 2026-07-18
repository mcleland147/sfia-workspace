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
| **Statut** | `functional-design-validated` |
| **Autorité** | Morris (L0) |
| **Décision validation** | Morris — **2026-07-18** — conception fonctionnelle **VALIDÉE** |
| **Décisions cadrage** | D-VAL-1 à D-VAL-11 (historiques / validées) |
| **Décisions conception** | FD-CAND-01 à FD-CAND-08 — **VALIDÉES** — Morris — 2026-07-18 |
| **Cycle suivant** | **Non sélectionné** |

> Contrat de conception fonctionnelle **validé**. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP. Aucune D-VAL-12.

---

## 0. Validation Morris (2026-07-18)

| Champ | Valeur |
|-------|--------|
| Décision | Validation explicite de la conception fonctionnelle SFIA Studio |
| Autorité | Morris (L0) |
| Date | **2026-07-18** |
| FD-CAND-01…08 | **VALIDÉES** |
| Identifiants | `FD-CAND-*` = identifiants locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL historique |
| D-VAL-12 | **Non créée** |

### Périmètre validé (socle fonctionnel)

Acteurs et responsabilités ; domaines D1–D10 ; douze états ; transitions ; FR-001…025 ; BR-001…025 ; parcours F1–F12 ; invariants ; AC-01…08 ; risques RF-01…07 (registre à suivre) ; sécurité fonctionnelle ; UX fonctionnelle non visuelle ; données fonctionnelles candidates (sans schéma technique).

### Réserves structurantes

| Réserve | Portée |
|---------|--------|
| Domaines D1–D10 | Regroupements **fonctionnels** — **≠** composants techniques |
| États / transitions | Indépendants de toute implémentation |
| Données candidates | **≠** modèle de données / schéma BDD |
| Orchestrateur / « SFIA Runtime » | **Candidat** — non contractuel |
| Architecture fonctionnelle / technique | **Non validée** |
| Stack / API / BDD / composant / service / framework | **Non choisis** |
| POC | **Non lancé** |
| MVP | **Non défini / non lancé** |
| Backlog / user stories | **Non créés** |
| Cycle suivant | **Non lancé** par cette validation |
| Actions Git projet | Commit / push / PR / merge **non autorisés** par cette validation |

### Effet de la validation

- Le référentiel fonctionnel `08`–`10` devient **socle validé** localement.
- Aucun effet sur architecture, POC, MVP, stack ou actions Git projet.
- L’intégration sur `main` exige un **GO Git distinct**.

### Éléments non décidés

Architecture ; UX/UI visuelle ; stack ; contenu POC ; définition MVP ; commit/push/PR de la conception ; sort des branches ; sélection du cycle suivant.

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
| AC-08 | Les décisions FD-CAND-01…08 sont validées (Morris — 2026-07-18) avec réserves ; aucune D-VAL-12 |

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
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation conception |

---

*SFIA Studio — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*
