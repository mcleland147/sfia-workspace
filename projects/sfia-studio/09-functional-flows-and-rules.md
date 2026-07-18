# SFIA Studio — Parcours fonctionnels et règles métier

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `09-functional-flows-and-rules.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Statut** | `functional-flows-and-rules-validated` |
| **Autorité** | Morris |
| **Décision validation** | Morris — **2026-07-18** — parcours et règles **VALIDÉS** |
| **FD-CAND** | FD-CAND-01…08 **VALIDÉES** (voir `10`) |

> Parcours F1–F12 et règles `BR-*` **validés** comme référentiel fonctionnel. **Pas** d’implémentation technique. Commit / push / PR / ready-for-review / merge restent des autorisations **distinctes**. Pas d’auto-merge, pas de suppression automatique de branche, pas de promotion automatique de candidate, pas de L5 global.

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

### Statut de validation (2026-07-18)

| Élément | Statut |
|---------|--------|
| Parcours F1–F12 | **VALIDÉS** comme parcours fonctionnels |
| Règles BR-001…025 | **VALIDÉES** comme règles métier |
| Matrices (C1–C16 / profils / L0–L5 / actions sensibles) | **VALIDÉES** comme référentiel fonctionnel |
| Implémentation technique | **Non décidée** |

---

## 4. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat FR / états |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC |

---

*SFIA Studio — parcours et règles VALIDÉS (Morris — 2026-07-18) — Critical — Morris décide.*
