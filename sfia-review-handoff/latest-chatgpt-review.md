# SFIA Review Pack — FULL mono-cycle
## Campus360 — Formalisation décisions Morris G2 (fermeture documentaire)

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-17 13:06:12 CEST |
| **Repo** | `mcleland147/sfia-workspace` |
| **Cycle projet** | 1 — Cadrage (fermeture documentaire / formalisation décisions Morris) |
| **Profil SFIA** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Branche** | `project/campus360-opportunity-framing` |
| **HEAD** | `c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e` |
| **origin/main** | `c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e` |
| **Review pack** | FULL — content-complete, anti-stub |
| **Review Handoff Git** | **required** |
| **Verdict** | `G2 DECISIONS FORMALIZED — MORRIS FINAL G2 CONFIRMATION REQUIRED` |

---

## 0. Instruction ChatGPT obligatoire

Analyser le handoff distant :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier :

1. contenu intégral des quatre documents ;
2. formalisation exacte des décisions Morris ;
3. fermeture documentaire des réserves G2 ;
4. **absence de validation implicite de G3** ;
5. cohérence national multi-campus ;
6. cinq populations ;
7. intégration identité simulée complète ;
8. périmètre RGPD allégé (majeurs) ;
9. critères de sortie renforcés ;
10. absence d’architecture ou backlog prématuré ;
11. absence de modification hors périmètre ;
12. recommandation GO / GO avec réserves / REWORK pour **confirmation G2 uniquement**.

---

## 1. Git truth

```text
Workspace: /Users/morris/Projects/sfia-workspace
Repo:      mcleland147/sfia-workspace
Branch:    project/campus360-opportunity-framing
HEAD:      c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e  (attendu c10f1c4… — MATCH)
origin/main: c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e
Working tree: untracked projects/campus360/ + artefacts tmp/handoff
NO commit projet | NO push projet
```

### git status --short

```text
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/
?? sfia-review-handoff/
```

---

## 2. Qualification

| Champ | Valeur |
|-------|--------|
| Nature | Itération de fermeture documentaire du Cycle 1 — **pas un nouveau cycle** |
| Profil | Critical |
| Typologie | DOC |
| Autorise cadrage détaillé ? | **NON** (G3 EN ATTENTE) |

---

## 3. Sources lues

1. `prompts/templates/sfia-cycle-execution-template.md` (référence cycle précédent / contrat)
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. Handoff précédent `sfia/review-handoff` @ `5898bdd` (Campus360 pre-framing)
6. Quatre documents locaux `projects/campus360/*`
7. **Décisions Morris du prompt (17 juillet 2026)** — prioritaires

---

## 4. Décisions Morris intégrées

| Gate | Statut intégré |
|------|----------------|
| G1 | **VALIDÉ** |
| G2 | **ARBITRÉ** — confirmation documentaire finale requise |
| G3 | **EN ATTENTE** |
| G4 | **VALIDÉ** |
| G5 | **EN ATTENTE** |
| G6 | **EN ATTENTE** |
| G7 | **EN ATTENTE** |

Six arbitrages G2 + critères de sortie formalisés dans les quatre fichiers.

---

## 5. Matrice décision → fichier → section


| Décision Morris | Fichier | Sections impactées |
|-----------------|---------|-------------------|
| G1 VALIDÉ | README, 01, 03 | Identité étalon ; résumé ; gates ; recommandation |
| G4 VALIDÉ | README, 01, 02, 03 | Nom validé (plus provisoire) partout |
| G2 Échelle nationale multi-campus | README, 01, 02, 03 | Vision ; contraintes ; trajectoire ; périmètre |
| G2 Périmètre fonctionnel | README, 01, 03 | Domaines ; capacités ; inclus/exclus |
| G2 Cinq populations | README, 01, 02, 03 | Populations ; UX ; critères sortie |
| G2 Support/RUN borné | README, 01, 02, 03 | Capacités ; transverse RUN ; exclusions ITSM |
| G2 Identité simulée complète | README, 01, 02, 03 | Intégration ; cycle 7 ; hors IdP réel |
| G2 RGPD majeurs | README, 01, 02, 03 | Contraintes ; transverse RGPD ; exclusions |
| G2 Critères de sortie | README, 01, 02, 03 | Critères succès/sortie ; QA Critical ; release/RUN |
| G3 EN ATTENTE | README, 01, 02, 03 | Statuts ; règle anti-G3 implicite ; trajectoire |
| G5/G6/G7 EN ATTENTE | README, 01, 03 | Gates ; actions interdites |


---

## 6. Contrôles exécutés

| Contrôle | Résultat |
|----------|----------|
| Local Git Truth Check | PASS — branche/HEAD attendus |
| 4 fichiers uniquement | PASS |
| Aucun fichier méthode/code | PASS |
| G1/G4 VALIDÉ partout | PASS |
| G2 ARBITRÉ + confirmation | PASS |
| G3 EN ATTENTE (non implicite) | PASS |
| G5/G6/G7 EN ATTENTE | PASS |
| Cinq populations | PASS |
| National multi-campus | PASS |
| Identité simulée complète / pas réel | PASS |
| RGPD majeurs / pas DPIA | PASS |
| Critères sortie complets | PASS |
| Pas de stack / pas d’archi technique | PASS |
| Ancien verdict GO DETAILED FRAMING retiré | PASS |
| Liens relatifs | PASS |
| Anti-surcomplexité | PASS — exclusions MVP maintenues |

---

## 7. Réserves

1. G2 reste sous **confirmation finale Morris** après revue ChatGPT.
2. Critères de sortie ambitieux : à découper en incréments lors des cycles futurs (pas dans cette itération).
3. Artefacts untracked `.tmp-sfia-review/`, `.sfia/`, worktree handoff — expliqués.
4. Typo mineure corrigée : « Cible produit retenue » (README).

Aucune réserve bloquante pour la confirmation G2.

---

## 8. Contenu intégral des quatre fichiers (après modification)


### Fichier : `projects/campus360/README.md`

```markdown
# Campus360

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
| **Nom** | **Campus360** — **validé Morris (G4)** — 17 juillet 2026 |
| **Statut** | `pre-framing` — décisions G1/G4 validées ; G2 arbitré (confirmation documentaire finale) ; **G3 non autorisé** |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — itération de fermeture documentaire (Cycle 1) |
| **Typologie cycle** | DOC |
| **Cycle projet** | 1 — Cadrage (sous-angle : fermeture documentaire des réserves / formalisation décisions Morris) |
| **Profil SFIA** | Critical |
| **Branche** | `project/campus360-opportunity-framing` |
| **Chemin** | `projects/campus360/` |

---

## 1. Finalité du projet

Campus360 est le **projet produit fictif étalon** retenu par Morris (G1) pour appliquer et éprouver la baseline opérationnelle **SFIA v2.6** sur une trajectoire plus substantielle que Chantiers360 et Interv360.

Cible produit retenue (G2 — arbitrages Morris) :

- **échelle nationale multi-campus** dès le MVP ;
- **cinq populations** et habilitations multi-niveaux ;
- noyau fonctionnel (identité, catalogue, réservation, notifications) + pilotage local/national + intégration identité **simulée complète** ;
- support / RUN **borné** ;
- RGPD allégé (**majeurs uniquement**) ;
- critères de sortie MVP renforcés (sécurité, accessibilité, performance, release, RUN).

**Campus360 n’est pas un véhicule de promotion SFIA 3.0.** Il applique SFIA v2.6 telle qu’officialisée.

**Distinction critique :** la cible **fonctionnelle** nationale multi-campus **n’implique aucune** architecture technique distribuée, multi-région, stack ou fournisseur d’identité réel décidés à ce stade.

---

## 2. Documents du socle de pré-cadrage

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, gates, navigation, règles de séparation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines, risques |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse de couverture des 15 cycles + transverses |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack actualisé — décisions Morris & gates |

Aucun autre document projet n’est créé dans cette itération.

---

## 3. État courant

| Élément | État |
|---------|------|
| Pré-cadrage / opportunité | **Fermeture documentaire en cours** — G1/G4 validés ; G2 arbitré, confirmation finale attendue |
| Cadrage détaillé | **Non démarré** — **interdit** tant que G3 n’est pas validé explicitement |
| Conception / architecture / UX / delivery | Hors périmètre |
| Commit branche projet | **Interdit** (G5 en attente) |
| Push / PR / merge branche projet | **Interdits** (G6/G7 en attente) |

> **Règle :** aucun cadrage détaillé ne démarre avant **G3**. La fermeture de G2 (même confirmée) **ne vaut pas** autorisation de cadrage détaillé.

---

## 4. Statut des gates Morris

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Campus360 comme projet étalon | **VALIDÉ** — 17 juillet 2026 |
| **G2** | Périmètre MVP (6 arbitrages) | **ARBITRÉ** — confirmation documentaire finale attendue |
| **G3** | Passage au cadrage détaillé | **EN ATTENTE** |
| **G4** | Nom Campus360 | **VALIDÉ** — 17 juillet 2026 |
| **G5** | Commit branche projet | **EN ATTENTE** |
| **G6** | Push branche projet | **EN ATTENTE** |
| **G7** | Création PR | **EN ATTENTE** |

Détail des arbitrages G2 : voir [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) § « Décisions Morris du 17 juillet 2026 ».

---

## 5. Résumé du périmètre MVP (G2)

| Volet | Contenu retenu |
|-------|----------------|
| **Échelle** | National multi-campus dès la première cible ; admin nationale et locale ; données rattachées à un campus ; pilotage consolidé national |
| **Fonctionnel** | Identité / rôles / habilitations ; catalogue ; réservation d’espaces ; notifications simples ; pilotage gestionnaire local et national ; exceptions ; intégration identité structurante |
| **Populations (5)** | Étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN |
| **Support / RUN** | Borné (incidents de service, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration, reprise bornée) — **pas** d’ITSM / CMDB / centre de support avancé |
| **Identité** | Contrat + fournisseur **fictif** + simulation **complète** (CRUD, doublons, idempotence, erreurs, reprises, désync, traçabilité, supervision) — **aucune** connexion réelle |
| **RGPD** | Majeurs uniquement ; données minimales ; pas de santé / mineurs / logement / paiement réel ; pas de DPIA dans ce cycle |
| **Sortie MVP** | Cinq populations couvertes ; multi-campus démontré ; identité simulée complète ; parcours validés ; tests fonctionnels / sécurité / accessibilité / performance ; logs-métriques-alertes minimales ; procédures RUN minimales ; release pilote + rollback testable |

---

## 6. Hors périmètre (cette itération et MVP initial)

- Cadrage détaillé (avant G3)
- Code, stack, architecture technique détaillée, modèle de données détaillé, schémas d’API
- Backlog, user stories delivery, UX/UI, Figma
- Fournisseur d’identité réel, protocole d’identité définitif
- Logement, paiement réel, restauration complète, IoT / contrôle d’accès physique
- ITSM complet, CMDB, centre de support avancé
- DPIA complète
- Architecture distribuée / multi-région technique
- Modification SFIA / SFIA 3.0
- Commit / push / PR / merge de la branche projet

---

## 7. Source de vérité

| Niveau | Source |
|--------|--------|
| **Méthode** | Git `main` — documents SFIA v2.6 canoniques |
| **Décisions structurantes** | Morris (G1–G7) — prioritaire sur handoff antérieur |
| **Projet Campus360** | Documents sous `projects/campus360/` *(versionnés après GO G5)* |

---

## 8. Règle de séparation projet / méthode / capitalisation

| Couche | Contenu autorisé | Contenu interdit |
|--------|------------------|------------------|
| **Projet produit** | Vision, périmètre G2, hypothèses, trajectoire Campus360 | Modification des documents SFIA canoniques |
| **Actifs réutilisables** | Patterns observés *ultérieurement* | Promotion implicite en standard méthode |
| **Observations méthodologiques** | Limites, frictions (REX projet) | Doctrine SFIA nouvelle |
| **Capitalisation SFIA** | Cycle CAPA dédié + GO Morris | Relancer SFIA 3.0 via Campus360 |

> Un apprentissage issu de Campus360 ne devient standard SFIA que via un **cycle de capitalisation** explicite, avec gate Morris.
```

---

### Fichier : `projects/campus360/01-opportunity-and-vision.md`

```markdown
# Campus360 — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | **Campus360** (nom **validé** G4 — 17 juillet 2026) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (fermeture documentaire / formalisation décisions Morris) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Statut** | Décisions G1/G4 validées ; G2 arbitré — confirmation documentaire finale ; **G3 non autorisé** |
| **Autorité** | Morris |

> Ce document est un **socle d’opportunité actualisé**. Il ne constitue **pas** un cadrage détaillé, une architecture, ni un backlog. Aucun cadrage détaillé avant **G3**.

---

## 1. Résumé exécutif

Après Chantiers360 et Interv360, Morris a retenu **Campus360** comme **projet étalon SFIA v2.6** (G1) et a **validé le nom** (G4).

Les arbitrages de périmètre (G2) fixent une cible MVP **nationale multi-campus**, avec **cinq populations**, un noyau fonctionnel borné, une **intégration identité simulée complète**, un support/RUN borné, un RGPD allégé (**majeurs uniquement**), et des **critères de sortie renforcés**.

**État décisionnel :**

| Gate | Statut |
|------|--------|
| G1 — Projet étalon | **VALIDÉ** |
| G2 — Périmètre MVP | **ARBITRÉ** — confirmation documentaire finale attendue |
| G3 — Cadrage détaillé | **EN ATTENTE** — non autorisé |
| G4 — Nom | **VALIDÉ** |
| G5 / G6 / G7 | **EN ATTENTE** |

**Verdict documentaire de cette itération :** `G2 DECISIONS FORMALIZED — MORRIS FINAL G2 CONFIRMATION REQUIRED`.

La cible nationale multi-campus est une décision **fonctionnelle / produit**. Elle **ne décide pas** d’architecture technique distribuée, de multi-région, de stack, ni de fournisseur d’identité réel.

---

## 2. Contexte

| Élément | État |
|---------|------|
| Baseline méthode | SFIA v2.6 = baseline opérationnelle officielle |
| Chantiers360 | MVP capitalisé — domaine unique, parcours delivery |
| Interv360 | Référence SAV / interventions, intégrations simulées |
| Décision Morris | Campus360 = projet étalon (G1) ; nom validé (G4) |
| Périmètre | Arbitrages G2 formalisés dans ce socle |

Les projets antérieurs restent insuffisants pour stress-tester durablement multi-domaines couplés, multi-habilitations, sécurité/RGPD, RUN/release à échelle nationale fictive, et cycles encore peu exercés — d’où le choix de Campus360.

---

## 3. Problème fictif adressé

Dans un réseau **national multi-campus**, les services du quotidien sont fragmentés :

- réservation d’espaces et catalogue de services dispersés ;
- identités et droits non unifiés entre campus et niveau national ;
- faible vision consolidée pour l’administration nationale ;
- intégration identité absente ou partielle ;
- conformité et accessibilité traitées en silo ;
- exploitation (incidents de service, disponibilité, pics) peu industrialisée.

**Besoin fictif :** une plateforme unifiée permettant de découvrir, réserver et piloter les services campus sous identité et habilitations cohérentes, à l’échelle nationale multi-campus, avec un socle d’exploitation borné.

---

## 4. Opportunité

| Dimension | Opportunité |
|-----------|-------------|
| **Produit** | Scénario crédible, national multi-campus, cinq populations |
| **Méthode** | Terrain pour SFIA v2.6 sans nouvelle doctrine |
| **Couverture cycles** | Potentiel élevé — activation par déclencheurs réels |
| **Différenciation** | Multi-campus × multi-populations × identité simulée × RUN borné |
| **Capitalisation** | Observations futures — pas de SFIA 3.0 |

---

## 5. Vision produit

> Campus360 est une plateforme nationale de services campus qui permet aux cinq populations retenues de **découvrir, réserver et piloter** les services du quotidien (catalogue, espaces, notifications, exceptions), sous une identité et des habilitations multi-niveaux (campus / national), avec un support/RUN borné et une intégration identité simulée complète — sans connexion réelle à un fournisseur externe au MVP.

### Caractéristiques retenues (G2)

| Aspect | Orientation validée |
|--------|---------------------|
| **Échelle** | National multi-campus dès la première cible |
| **Administration** | Nationale et locale |
| **Données** | Rattachées à un campus |
| **Habilitations** | Multi-niveaux (campus / national) |
| **Pilotage** | Consolidé national + gestionnaire local |
| **Populations** | Cinq populations (voir §7) |
| **Intégration identité** | Simulation complète sur fournisseur fictif |
| **Conformité** | RGPD majeurs uniquement ; accessibilité à activer en UX/QA |
| **Exploitation** | Support/RUN borné ; critères de sortie RUN/release |

### Explicitement non décidé / exclu du MVP

| Élément | Statut |
|---------|--------|
| Architecture technique distribuée / multi-région | **Non décidé** |
| Stack | **Non choisi** |
| Fournisseur d’identité réel / protocole définitif | **Non choisi** |
| Logement, restauration complète, paiement réel, IoT | **Hors MVP** |
| ITSM / CMDB / centre de support avancé | **Hors MVP** |
| DPIA complète | **Hors ce cycle** (et non requise pour formaliser G2) |

---

## 6. Proposition de valeur

| Bénéficiaire | Valeur |
|--------------|--------|
| **Étudiant / personnel** | Accès unifié catalogue + réservation + notifications |
| **Gestionnaire de campus** | Pilotage local, exceptions, occupation |
| **Administrateur national** | Visibilité consolidée multi-campus, gouvernance des droits |
| **Support / RUN** | Consultation incidents, disponibilité, erreurs d’intégration, diagnostic N1 |
| **Morris / SFIA** | Étalon trajectoire longue v2.6 |

---

## 7. Utilisateurs et parties prenantes

### 7.1 Cinq populations du périmètre MVP (G2)

| # | Population | Rôle principal |
|---|------------|----------------|
| 1 | **Étudiant** | Consommer services (catalogue, réservation, notifications) |
| 2 | **Personnel** | Consommer services ; usages métier campus |
| 3 | **Gestionnaire de campus** | Administrer services locaux ; exceptions ; pilotage local |
| 4 | **Administrateur national** | Gouvernance multi-campus ; habilitations ; pilotage consolidé |
| 5 | **Support / RUN** | Incidents de service, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration |

**Règle populations :**

- les **cinq** populations sont dans le **périmètre MVP** ;
- les **cinq** doivent être **couvertes par les critères de sortie** du MVP ;
- les parcours peuvent être **livrés de manière incrémentale** ;
- la **cible MVP finale** inclut les cinq populations.

### 7.2 Parties prenantes

| Partie prenante | Intérêt |
|-----------------|--------|
| Morris | Décisions G1–G7, gates |
| Direction campus nationale (fictive) | Cohérence multi-campus |
| DPO / RSSI (fictifs) | Conformité et sécurité — analyses détaillées ultérieures |
| ChatGPT / Cursor | Analyse / exécution — non décideurs |

---

## 8. Domaines fonctionnels (périmètre G2)

| # | Domaine | Statut MVP |
|---|---------|------------|
| D1 | Identité, rôles, habilitations | **Inclus** |
| D2 | Catalogue de services | **Inclus** |
| D3 | Réservation d’espaces | **Inclus** |
| D4 | Notifications simples | **Inclus** |
| D5 | Pilotage gestionnaire local et national | **Inclus** |
| D6 | Gestion des exceptions | **Inclus** |
| D7 | Intégration identité structurante (simulée) | **Inclus** |
| D8 | Support / RUN borné | **Inclus** (borné — voir §9) |
| — | Événements complets, restauration complète | **Hors MVP** |
| — | Logement | **Hors MVP** |
| — | Paiement réel | **Hors MVP** |
| — | ITSM / CMDB / IoT | **Hors MVP** |

---

## 9. Capacités métier principales

1. Authentifier et autoriser selon population, campus et niveau national.
2. Rattacher les données à un campus ; piloter plusieurs campus nativement.
3. Publier et découvrir un catalogue de services.
4. Réserver un espace (disponibilité, conflits, statuts).
5. Notifier simplement les acteurs concernés.
6. Piloter localement et nationalement (occupation, exceptions, consolidation).
7. Intégrer l’identité via simulation complète (création, MAJ, désactivation, doublons, idempotence, erreurs, reprises, désynchronisations, traçabilité, supervision) — **sans** connexion réelle.
8. Opérer un support/RUN borné : consultation incidents de service, statut de disponibilité, diagnostic de premier niveau, consultation de la traçabilité, suivi des erreurs d’intégration, reprise bornée si prévue.

---

## 10. Contraintes et hypothèses

### 10.1 Contraintes

| Contrainte | Description |
|------------|-------------|
| **Étalon validé** | G1 — Campus360 retenu |
| **Nom validé** | G4 — Campus360 |
| **National multi-campus** | Première cible MVP (décision fonctionnelle) |
| **Cinq populations** | Périmètre + critères de sortie |
| **Identité simulée** | Fournisseur fictif ; simulation complète ; pas de réel |
| **RGPD** | Majeurs uniquement ; données minimales ; exclusions sensibles |
| **Support/RUN** | Borné — pas d’ITSM/CMDB |
| **G3** | Cadrage détaillé interdit tant que non validé |
| **Baseline** | SFIA v2.6 uniquement |
| **DOC only** | Aucun code / archi détaillée / backlog dans cette itération |
| **Pas d’archi technique** | Multi-campus ≠ architecture distribuée décidée |

### 10.2 Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Le MVP national multi-campus borné (noyau + pilotage + identité simulée + RUN borné) est réalisable par incréments |
| H2 | Les cinq populations peuvent être couvertes progressivement, avec cible finale à cinq |
| H3 | La simulation identité complète suffit à exercer intégration, QA, sécurité et RUN sans IdP réel |
| H4 | Le RGPD majeurs-only réduit la charge sans affaiblir la crédibilité étalon |
| H5 | Les 15 cycles restent un potentiel — activation par déclencheurs |
| H6 | G3, G5, G6, G7 restent des décisions Morris séparées |
| H7 | Campus360 complète Chantiers360 / Interv360 — ne les remplace pas |

---

## 11. Risques majeurs

| ID | Risque | Mitigation |
|----|--------|------------|
| R1 | Ambition nationale → surconception technique | Séparer décision fonctionnelle et architecture technique |
| R2 | Critères de sortie trop lourds pour un premier INC | Incréments successifs ; sortie = cible MVP finale |
| R3 | Forçage des 15 cycles | Matrice `02-…` ; déclencheurs réels |
| R4 | Validation implicite de G3 | Statuts explicites ; README + decision pack |
| R5 | Confusion simulation / IdP réel | Contrat fictif ; interdiction connexion réelle |
| R6 | Scope creep (logement, paiement, ITSM) | Hors MVP explicite |
| R7 | Contradiction interdocuments | Cette itération de fermeture ; confirmation G2 |
| R8 | Confusion projet / méthode / SFIA 3.0 | Séparation ; CAPA séparée |

---

## 12. Différenciation vs Chantiers360 et Interv360

| Critère | Chantiers360 | Interv360 | Campus360 (retenu) |
|---------|--------------|-----------|---------------------|
| Échelle | PME | Organisation SAV | **Nationale multi-campus** |
| Populations | Artisan / PME | Rôles SAV enrichis | **Cinq populations** dont admin national + RUN |
| Intégrations | Limitées | Contrats simulés | **Identité simulée complète** (CRUD + erreurs + supervision) |
| RUN | Peu central | Partiel | **Support/RUN borné** + critères sortie |
| Conformité | Légère | RSSI documenté | **RGPD majeurs** + accessibilité activable |
| Rôle SFIA | Pilote v2.0 | Référence orchestration | **Étalon trajectoire longue v2.6 (G1)** |

---

## 13. Critères de crédibilité

Campus360 reste crédible si :

1. Le problème est compréhensible sans jargon technique.
2. Les cinq populations ont des besoins non triviaux.
3. Le multi-campus et les habilitations multi-niveaux sont nécessaires au MVP.
4. L’intégration identité simulée est structurelle (pas cosmétique).
5. Le RGPD et l’accessibilité sont réels sans DPIA/UI encyclopédiques dès le pré-cadrage.
6. Une trajectoire incrémentale vers les critères de sortie est pensable.
7. La complexité n’est pas artificielle.
8. Aucune architecture technique n’est préemptée par le multi-campus fonctionnel.

**Auto-évaluation post-G2 :** critères satisfaits sous réserve de la confirmation documentaire finale G2 et du maintien des exclusions.

---

## 14. Critères de sortie du MVP (G2)

Le MVP est considéré atteint lorsque **tous** les points suivants sont démontrés :

1. Cinq populations couvertes.
2. Fonctionnement national multi-campus démontré.
3. Intégration identité simulée complète.
4. Parcours métier validés.
5. Tests fonctionnels.
6. Contrôles sécurité.
7. Contrôles accessibilité.
8. Tests de performance.
9. Logs, métriques et alertes minimales.
10. Procédures RUN minimales.
11. Release pilote démontrable.
12. Rollback prévu et testable.

Ces critères définissent la **cible de sortie MVP**, pas le contenu d’un seul incrément ni d’un cadrage détaillé (G3 en attente).

---

## 15. RGPD — périmètre décidé (sans DPIA)

| Inclus | Exclu |
|--------|-------|
| Utilisateurs **majeurs** uniquement | Mineurs ; responsables légaux |
| Données d’identité **minimales** | Données de santé |
| Rattachement campus | Logement |
| Rôles et habilitations | Paiement réel |
| Données de réservation | DPIA complète (ce cycle) |
| Journaux techniques et sécurité nécessaires | |

---

## 16. Options alternatives (historique)

Les options Mairie360 et FleetOps360 restent documentées comme alternatives historiques. **Morris a retenu Campus360 (G1).** Elles ne sont plus candidates actives sauf nouvelle décision Morris.

---

## 17. Recommandation

| Élément | Position |
|---------|----------|
| **Projet étalon** | Campus360 — **validé G1** |
| **Nom** | Campus360 — **validé G4** |
| **Périmètre** | Arbitrages G2 formalisés — **confirmation documentaire finale** attendue |
| **Cadrage détaillé** | **Non autorisé** — G3 en attente |
| **Commit / push / PR** | **Non autorisés** — G5/G6/G7 en attente |
| **À ne pas faire** | Architecture, backlog, code, IdP réel, DPIA, G3 implicite |

**Distinction observation / recommandation / décision :**

- **Observation :** les arbitrages G2 renforcent la crédibilité et la charge du MVP.
- **Recommandation documentaire :** confirmer G2 après revue ChatGPT de cette formalisation.
- **Décision G3 et suivantes :** **réservées à Morris**, séparément.
```

---

### Fichier : `projects/campus360/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# Campus360 — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | **Campus360** (nom validé G4) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (fermeture documentaire / formalisation G2) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Hypothèse actualisée post-arbitrages Morris G2 — **non engagement de parcours forcé** ; **G3 non autorisé** |
| **Référence méthode** | `sfia-v2.5-project-cycles-method-candidate.md` (acquis absorbés v2.6) |

> **Règle :** les 15 cycles sont un **référentiel de couverture potentielle**. Aucun cycle n’est obligatoire « parce que Campus360 est l’étalon ». Activation **uniquement** par déclencheur réel. Profil **requalifié à chaque cycle**. Pas d’ordre séquentiel rigide. Pas de forçage pour atteindre quinze.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur toute trajectoire produit sérieuse |
| **Activable** | Fortement probable compte tenu des arbitrages G2 |
| **Conditionnel** | Dépend d’un événement, d’un arbitrage ou d’une phase |
| **Événementiel** | INC / RUN / EVOL — déclenché par incident ou décision |

| Colonne | Sens |
|---------|------|
| **Profil probable** | Hypothèse — à re-qualifier à chaque ouverture |
| **Preuve opérationnelle** | Ce qui démontre que le cycle n’est pas artificiel |

---

## 2. Synthèse de couverture (post-G2)

| # | Cycle | Caractère | Probabilité post-G2 | Évolution vs pré-cadrage initial |
|---|-------|-----------|---------------------|----------------------------------|
| 1 | Cadrage | Quasi systématique | **Certaine** (en cours ; G3 encore en attente) | — |
| 2 | Conception fonctionnelle | Quasi systématique | **Très élevée** (5 populations, multi-campus) | Renforcée |
| 3 | Architecture fonctionnelle | Activable | **Très élevée** | **Renforcée** |
| 4 | UX/UI | Activable | **Très élevée** (5 populations + accessibilité) | **Renforcée** |
| 5 | Backlog / user stories | Quasi systématique | **Très élevée** | — |
| 6 | Architecture technique | Activable | **Très élevée** — **sans stack décidée** | **Renforcée** |
| 7 | Intégration / DevOps | Activable | **Très élevée** (identité simulée complète) | **Fortement renforcée** |
| 8 | Delivery / implémentation | Quasi systématique | **Certaine** (si GO produit après gates) | — |
| 9 | QA / validation | Quasi systématique | **Certaine** — profil **probablement Critical** en sortie MVP | **Renforcée** |
| 10 | Sécurité / RSSI | Activable | **Très élevée** (habilitations, identité, logs) | **Fortement renforcée** |
| 11 | Déploiement / release | Activable | **Très élevée** (release pilote + rollback = critères sortie) | **Fortement renforcée** |
| 12 | Observabilité / RUN readiness | Activable | **Très élevée** (critères sortie + support/RUN borné) | **Fortement renforcée** |
| 13 | PR readiness | Quasi systématique | **Certaine** | — |
| 14 | Post-merge | Quasi systématique | **Certaine** | — |
| 15 | Capitalisation / REX | Quasi systématique | **Élevée** (proportionnée) | — |

**Lecture critique :** les arbitrages G2 **augmentent la probabilité** des cycles différenciants (3, 4, 6, 7, 9–12). Ils **n’imposent pas** leur ouverture automatique ni un ordre unique. **G3 n’est pas validé** : la trajectoire ci-dessous reste une hypothèse.

---

## 3. Matrice détaillée des 15 cycles

### Cycle 1 — Cadrage

| Champ | Contenu |
|-------|---------|
| **Justification** | Projet étalon (G1) ; périmètre G2 ; Critical |
| **Déclencheur** | Intention Morris ; formalisation décisions |
| **Entrée** | Décisions Morris ; baseline v2.6 |
| **Livrable potentiel** | Socle pré-cadrage (ce dossier) ; **cadrage détaillé uniquement si G3** |
| **Dépendances** | Méthode v2.6 |
| **Caractère** | Quasi systématique |
| **Profil probable** | Critical (pré-cadrage / fermeture G2) ; à re-qualifier pour G3 |
| **Gates Morris** | G1–G4 (partiel) ; G3 séparé ; G5–G7 séparés |
| **Risque couverture artificielle** | Faible |
| **Preuve opérationnelle** | Gates tracés ; G3 non implicite |

### Cycle 2 — Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| **Justification** | Cinq populations ; multi-campus ; règles réservation / habilitations |
| **Déclencheur** | **G3 validé** + besoin de formaliser parcours et règles |
| **Entrée** | Vision G2 ; domaines inclus ; contraintes RGPD |
| **Livrable potentiel** | Spec fonctionnelle MVP ; parcours ; règles |
| **Dépendances** | Cycle 1 ; **G3** |
| **Caractère** | Quasi systématique |
| **Profil probable** | Critical probable (impact produit structurant) |
| **Gates Morris** | GO conception ; arbitrages métier |
| **Risque couverture artificielle** | Moyen si spec hors domaines G2 |
| **Preuve opérationnelle** | Périmètre borné aux domaines G2 |

### Cycle 3 — Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| **Justification** | Couplage identité × catalogue × réservation × pilotage national/local × identité simulée |
| **Déclencheur** | Complexité de flux multi-campus / multi-niveaux |
| **Entrée** | Spec fonctionnelle |
| **Livrable potentiel** | Cartographie flux ; découpage ; arbitrages |
| **Dépendances** | Cycle 2 |
| **Caractère** | Activable — **probabilité très élevée** |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO architecture fonctionnelle structurante |
| **Risque couverture artificielle** | Moyen — éviter sur-modélisation |
| **Preuve opérationnelle** | Découpage justifié par conflits réels campus/national |

### Cycle 4 — UX/UI

| Champ | Contenu |
|-------|---------|
| **Justification** | Cinq populations ; parcours distincts ; **accessibilité activée** |
| **Déclencheur** | Besoin parcours / écrans / source design |
| **Entrée** | Spec ; architecture fonctionnelle légère |
| **Livrable potentiel** | Cartes d’écrans ; wireframes ; brief Figma ; exigences accessibilité |
| **Dépendances** | Cycles 2–3 (partiels) |
| **Caractère** | Activable — **probabilité très élevée** |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO UX cible ; GO Figma si fidélité |
| **Risque couverture artificielle** | Moyen — polish trop tôt |
| **Preuve opérationnelle** | Parcours pour les cinq populations (incrémentaux OK) |

### Cycle 5 — Backlog / user stories

| Champ | Contenu |
|-------|---------|
| **Justification** | Découpage vers critères de sortie MVP |
| **Déclencheur** | Préparation INC |
| **Entrée** | Spec ; UX ; priorités |
| **Livrable potentiel** | Épics ; stories ; incréments |
| **Dépendances** | Cycles 2–4 selon profondeur |
| **Caractère** | Quasi systématique |
| **Profil probable** | Standard |
| **Gates Morris** | GO priorisation si conflit |
| **Risque couverture artificielle** | Faible si stories INVEST |
| **Preuve opérationnelle** | Incréments testables ; cible finale = critères sortie |

### Cycle 6 — Architecture technique

| Champ | Contenu |
|-------|---------|
| **Justification** | Multi-campus fonctionnel ; environnements ; intégration identité simulée |
| **Déclencheur** | Avant delivery applicatif significatif |
| **Entrée** | Architecture fonctionnelle ; contraintes |
| **Livrable potentiel** | Options stack ; ADR ; structure — **stack non préjugée ici** |
| **Dépendances** | Cycles 2–3 |
| **Caractère** | Activable — **probabilité très élevée** |
| **Profil probable** | Critical si irréversible / sécurité |
| **Gates Morris** | GO stack ; GO architecture structurante |
| **Risque couverture artificielle** | Élevé si multi-région technique forcé |
| **Preuve opérationnelle** | Décisions proportionnées au MVP ; pas d’archi « nationale cloud » gratuite |

### Cycle 7 — Intégration / DevOps

| Champ | Contenu |
|-------|---------|
| **Justification** | Simulation identité complète ; environnements ; pipelines |
| **Déclencheur** | Besoin contrats d’intégration / CI / environnements |
| **Entrée** | Architecture technique ; contrat identité fictif |
| **Livrable potentiel** | Pipeline ; stratégie env ; simulation identité outillée |
| **Dépendances** | Cycle 6 |
| **Caractère** | Activable — **fortement probable** |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO stratégie environnements / secrets |
| **Risque couverture artificielle** | Élevé — plateforme DevOps enterprise avant besoin |
| **Preuve opérationnelle** | Flux identité simulés réellement exercés (erreurs, reprises, supervision) |

### Cycle 8 — Delivery / implémentation

| Champ | Contenu |
|-------|---------|
| **Justification** | Réalisation incrémentale vers critères de sortie |
| **Déclencheur** | GO backlog + architecture suffisante |
| **Entrée** | Stories ; guidelines |
| **Livrable potentiel** | Code / config par INC |
| **Dépendances** | Cycles 5–6 |
| **Caractère** | Quasi systématique |
| **Profil probable** | Standard (INC) ; Critical zones sensibles |
| **Gates Morris** | GO INC ; GO merge |
| **Risque couverture artificielle** | Faible |
| **Preuve opérationnelle** | Incréments clôturés avec preuves |

### Cycle 9 — QA / validation

| Champ | Contenu |
|-------|---------|
| **Justification** | Critères sortie : tests fonctionnels, sécurité, accessibilité, performance |
| **Déclencheur** | Chaque INC ; jalon sortie MVP |
| **Entrée** | Critères d’acceptation ; risques |
| **Livrable potentiel** | Plans / rapports QA ; réserves |
| **Dépendances** | Cycle 8 |
| **Caractère** | Quasi systématique |
| **Profil probable** | **Critical probable en sortie MVP** ; Standard sur INC courants |
| **Gates Morris** | GO clôture INC / sortie MVP |
| **Risque couverture artificielle** | Moyen si encyclopédie de tests hors stories |
| **Preuve opérationnelle** | Scénarios liés aux critères de sortie G2 |

### Cycle 10 — Sécurité / RSSI

| Champ | Contenu |
|-------|---------|
| **Justification** | Habilitations multi-niveaux ; identité simulée ; logs ; séparation campus/national |
| **Déclencheur** | Conception authZ ; revue menaces ; avant critères sécurité sortie |
| **Entrée** | Modèle populations ; surfaces |
| **Livrable potentiel** | Analyse menaces proportionnée ; contrôles — **pas de threat model dans cette itération** |
| **Dépendances** | Cycles 2–3–6 |
| **Caractère** | Activable — **fortement probable** |
| **Profil probable** | Critical |
| **Gates Morris** | GO contrôles sécurité structurants |
| **Risque couverture artificielle** | Moyen — audit ISO trop tôt |
| **Preuve opérationnelle** | Contrôles liés élévation de privilège, fuite, désync identité |

### Cycle 11 — Déploiement / release

| Champ | Contenu |
|-------|---------|
| **Justification** | Critère sortie : release pilote + rollback testable |
| **Déclencheur** | Mise à disposition hors local ; jalon MVP |
| **Entrée** | Artefacts ; checklist |
| **Livrable potentiel** | Notes release ; procédure rollback |
| **Dépendances** | Cycles 7–9 |
| **Caractère** | Activable — **fortement probable** |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO release |
| **Risque couverture artificielle** | Moyen si cérémonial sans artefact |
| **Preuve opérationnelle** | Release reproduisible ; rollback testé |

### Cycle 12 — Observabilité / RUN readiness

| Champ | Contenu |
|-------|---------|
| **Justification** | Critères sortie (logs/métriques/alertes, procédures RUN) ; support/RUN borné ; pics nationaux |
| **Déclencheur** | Avant release exploitable ; besoin supervision |
| **Entrée** | Architecture ; scénarios incident de service |
| **Livrable potentiel** | Observabilité minimale ; runbooks légers — **pas de runbooks complets ici** |
| **Dépendances** | Cycles 6–7–11 |
| **Caractère** | Activable — **fortement probable** |
| **Profil probable** | Standard à Critical |
| **Gates Morris** | GO readiness exploitation |
| **Risque couverture artificielle** | Élevé — stack observability complète sans charge |
| **Preuve opérationnelle** | Support/RUN borné exercé ; signaux pour erreurs d’intégration |

### Cycle 13 — PR readiness

| Champ | Contenu |
|-------|---------|
| **Justification** | Chaque livraison Git significative |
| **Déclencheur** | Branche prête |
| **Caractère** | Quasi systématique |
| **Profil probable** | Aligné cycle parent |
| **Gates Morris** | GO création PR (dont G7 pour cette branche projet) |
| **Risque couverture artificielle** | Nul |
| **Preuve opérationnelle** | PR selon contrat SFIA |

### Cycle 14 — Post-merge

| Champ | Contenu |
|-------|---------|
| **Justification** | Clôture, réserves, suite |
| **Déclencheur** | Merge Morris |
| **Caractère** | Quasi systématique |
| **Profil probable** | Light à Standard |
| **Risque couverture artificielle** | Nul |
| **Preuve opérationnelle** | Statuts post-merge tracés |

### Cycle 15 — Capitalisation / REX

| Champ | Contenu |
|-------|---------|
| **Justification** | Apprentissages après jalons |
| **Déclencheur** | Fin MVP / friction notable |
| **Caractère** | Quasi systématique (proportionné) |
| **Profil probable** | Capitalization |
| **Gates Morris** | GO capitalisation ; GO promotion méthode si applicable |
| **Risque couverture artificielle** | Moyen — capitaliser trop tôt / SFIA 3.0 |
| **Preuve opérationnelle** | Leçons actionnables ; séparation projet / méthode |

---

## 4. Typologies v2.4 pressenties

| Typologie | Quand | Exemple |
|-----------|-------|---------|
| **DOC** | Cadrage, formalisation G2 | Cette itération |
| **INC** | Delivery bornée | INC réservation ; INC identité simulée |
| **EVOL** | Extension post-MVP | Restauration, événements |
| **RUN** | Incident / correctif | Pic rentrée ; erreur intégration |
| **CAPA** | Promotion apprentissage | Après friction réelle + GO Morris |

---

## 5. Classes de cycles

| Classe | Cycles | Note post-G2 |
|--------|--------|--------------|
| **Quasi systématiques** | 1, 2, 5, 8, 9, 13, 14, 15 | Inchangé |
| **Activables (fortement probables)** | 3, 4, 6, 7, 10, 11, 12 | Probabilités **renforcées** par G2 |
| **Conditionnels** | Profondeur Critical ; Figma ; ADR lourds | Selon arbitrages |
| **Événementiels** | RUN / correctifs / re-cadrage / CAPA | Incidents, réserves |

**Anti-pattern interdit :** ouvrir 7, 10, 11 ou 12 « pour cocher » sans signal produit/risque.

---

## 6. Transverses (non cycles cœur)

### 6.1 RGPD / conformité — périmètre G2

| Élément | Décidé |
|---------|--------|
| **Populations données** | Majeurs uniquement |
| **Données** | Identité minimale ; campus ; rôles/habilitations ; réservation ; logs techniques/sécurité nécessaires |
| **Exclusions** | Santé ; mineurs ; responsables légaux ; logement ; paiement réel |
| **DPIA** | **Pas** dans ce cycle |
| **Cycles d’analyse détaillée** | Conception (2), archi fonctionnelle (3), sécurité (10), QA (9), delivery (8) si besoin |
| **Bloc** | Toujours **actif** malgré allègement majeurs-only |

### 6.2 Accessibilité

| Élément | Décidé |
|---------|--------|
| **Activation future** | Oui — pour les **cinq populations** |
| **Cycles** | UX/UI (4), QA (9) ; conception (2) pour exigences |
| **Hors cette itération** | Référentiel UI détaillé ; audit complet |

### 6.3 FinOps

| Élément | Identification |
|---------|----------------|
| Cloud / services managés / stockage / multi-env | Probables à l’architecture technique |
| **Hors cette itération** | Chiffrage ; provider |

### 6.4 GreenOps

| Axes | Note |
|------|------|
| Sobriété, conservation, volumétrie, environnements | À traiter aux cycles architecture / observabilité |
| **Hors cette itération** | Cible contractuelle carbone |

### 6.5 Performance

| Élément | Décidé |
|---------|--------|
| **Justification** | National multi-campus + pics (rentrée, examens, événements) |
| **Travaux futurs** | Tests de performance = critère de sortie MVP |
| **Hors cette itération** | SLA chiffré |

### 6.6 Sécurité (transverse)

| Élément | Trace |
|---------|-------|
| Habilitations multi-niveaux | Campus / national |
| Identité simulée | Erreurs, désync, traçabilité |
| Logs | Techniques et sécurité nécessaires |
| **Hors cette itération** | Threat model détaillé |

### 6.7 Observabilité / RUN readiness (transverse)

| Élément | Trace |
|---------|-------|
| Critères sortie | Logs, métriques, alertes minimales ; procédures RUN minimales |
| Support/RUN borné | Incidents service, disponibilité, diagnostic N1, traçabilité, erreurs intégration, reprise bornée |
| Exclusions | ITSM, CMDB, centre de support avancé |
| **Hors cette itération** | Runbooks complets |

---

## 7. Séparation projet / actifs / observations / capitalisation

| Couche | Règle |
|--------|-------|
| **Projet produit** | `projects/campus360/` uniquement |
| **Actifs réutilisables** | Extraction consciente ultérieure |
| **Observations méthodologiques** | REX projet |
| **Capitalisation SFIA** | Cycle CAPA + GO Morris — **interdit** ici |

---

## 8. Trajectoire macro pressentie (hypothèse — G3 non lancé)

```text
Pré-cadrage + formalisation G2 (DOC, Critical)   ← itération courante
    → Confirmation finale G2 (Morris)
    → G3 ? (décision séparée — EN ATTENTE)
Cadrage détaillé (DOC)                            ← uniquement si G3
    → Conception fonctionnelle MVP
    → Architecture fonctionnelle (très probable)
    → UX/UI + accessibilité (5 populations)
    → Backlog / INC
    → Architecture technique (sans préjuger stack)
    → Intégration / DevOps (identité simulée)
    → Sécurité / RSSI (fortement probable)
    → Delivery INC-n + QA (Critical en sortie)
    → Release pilote + rollback
    → Observabilité / RUN readiness (borné)
    → EVOL / RUN / CAPA selon besoins
```

Aucun jalon calendaire. **Aucun démarrage de cadrage détaillé** dans cette itération.

---

## 9. Revue anti-couverture artificielle

| Signal | Statut |
|--------|--------|
| 15 cycles obligatoires | **Évité** |
| Modules hors G2 pour « faire un cycle » | **Évité** |
| Architecture technique = multi-campus | **Séparé explicitement** |
| G3 implicite | **Évité** — G3 EN ATTENTE |
| Observabilité/RSSI dès le jour 1 sans besoin | **Signalé** — activation conditionnelle |

**Conclusion :** G2 **renforce** la légitimité des cycles différenciants sans les rendre automatiques.
```

---

### Fichier : `projects/campus360/03-pre-framing-decision-pack.md`

```markdown
# Campus360 — Decision pack pré-cadrage (actualisé)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | **Campus360** (nom **validé** G4) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (fermeture documentaire / formalisation décisions) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Statut** | G1/G4 validés ; G2 arbitré — confirmation documentaire finale ; G3/G5/G6/G7 en attente |
| **Verdict documentaire proposé** | `G2 DECISIONS FORMALIZED — MORRIS FINAL G2 CONFIRMATION REQUIRED` |

> Cursor / ChatGPT formalisent et contrôlent. **Seul Morris confirme G2 et tranche G3+.**

---

## 1. Décision suivante attendue

**Uniquement :**

1. **Confirmation finale de G2** après revue documentaire ChatGPT de cette formalisation.
2. **Puis**, dans une décision **ultérieure ou explicitement séparée** : G3 (cadrage détaillé).

**Ne pas** considérer G3 comme validé parce que G2 est fermé ou confirmé.

G5 / G6 / G7 restent hors de cette décision.

---

## 2. Statut des gates (17 juillet 2026)

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Campus360 comme projet étalon SFIA v2.6 | **VALIDÉ** |
| **G2** | Périmètre MVP (6 arbitrages) | **ARBITRÉ — sous contrôle documentaire final** |
| **G3** | Passage au cadrage détaillé | **EN ATTENTE** |
| **G4** | Nom Campus360 | **VALIDÉ** |
| **G5** | Commit branche `project/campus360-opportunity-framing` | **EN ATTENTE** |
| **G6** | Push branche projet | **EN ATTENTE** |
| **G7** | Création PR | **EN ATTENTE** |

---

## 3. Décisions Morris du 17 juillet 2026

### 3.1 G1 — Projet étalon — VALIDÉ

Campus360 est retenu comme projet étalon pour éprouver SFIA v2.6 sur une trajectoire longue.

### 3.2 G4 — Nom — VALIDÉ

Le nom **Campus360** est le nom officiel du projet (plus provisoire).

### 3.3 G2 — Périmètre MVP — ARBITRÉ (6 arbitrages)

#### Arbitrage 1 — Échelle

- MVP **national multi-campus** dès la première cible ;
- administration **nationale et locale** ;
- plusieurs campus gérés **nativement** ;
- données **rattachées à un campus** ;
- visibilité et habilitations **multi-niveaux** ;
- pilotage consolidé **national**.

**Conséquence :** décision **fonctionnelle / produit**. **Aucune** architecture technique distribuée, multi-région, stack ou topologie cloud n’est décidée par cet arbitrage.

#### Arbitrage 2 — Périmètre fonctionnel

Inclus au MVP :

- identité, rôles et habilitations ;
- catalogue de services ;
- réservation d’espaces ;
- notifications simples ;
- pilotage gestionnaire **local et national** ;
- gestion des exceptions ;
- intégration identité **structurante**.

#### Arbitrage 3 — Populations (cinq)

1. étudiant ;
2. personnel ;
3. gestionnaire de campus ;
4. administrateur national ;
5. support / RUN.

**Conséquence :** les cinq sont dans le périmètre ; les cinq sont exigés en **critères de sortie** ; les parcours peuvent être **incrémentaux**.

#### Arbitrage 4 — Support / RUN borné

Inclus :

- consultation des incidents de service ;
- statut de disponibilité ;
- diagnostic de premier niveau ;
- consultation de la traçabilité ;
- suivi des erreurs d’intégration ;
- reprise bornée si prévue.

Exclus :

- ITSM complet ;
- CMDB ;
- centre de support avancé.

#### Arbitrage 5 — Intégration identité

- contrat d’intégration ;
- fournisseur **fictif** ;
- simulation **complète** : création, mise à jour, désactivation, doublons, idempotence, erreurs, reprises, désynchronisations, traçabilité détaillée, supervision des flux ;
- **aucune** connexion réelle à un fournisseur externe au MVP ;
- **aucun** protocole / fournisseur réel choisi dans ce cycle.

#### Arbitrage 6 — RGPD

Inclus : majeurs uniquement ; identité minimale ; rattachement campus ; rôles/habilitations ; réservation ; journaux techniques et sécurité nécessaires.

Exclus : données de santé ; mineurs ; responsables légaux ; logement ; paiement réel ; **DPIA complète** dans ce cycle.

#### Critères de sortie du MVP (partie constitutive de G2)

1. cinq populations couvertes ;
2. fonctionnement national multi-campus démontré ;
3. intégration identité simulée complète ;
4. parcours métier validés ;
5. tests fonctionnels ;
6. contrôles sécurité ;
7. contrôles accessibilité ;
8. tests de performance ;
9. logs, métriques et alertes minimales ;
10. procédures RUN minimales ;
11. release pilote démontrable ;
12. rollback prévu et testable.

**Conséquence :** ces critères définissent la **cible de sortie MVP**, pas un unique incrément, et **n’autorisent pas** G3.

### 3.4 G3 / G5 / G6 / G7 — non validés

Aucun de ces gates n’est validé. Aucune implication automatique depuis G1/G2/G4.

---

## 4. Recommandation (état actuel)

| Élément | Position |
|---------|----------|
| **G1 / G4** | Déjà validés — ne pas rouvrir sans nouvelle décision Morris |
| **G2** | Formalisé dans les quatre documents — **demander confirmation finale** après revue ChatGPT |
| **G3** | **Ne pas** autoriser tant que non tranché explicitement |
| **G5–G7** | Maintenir en attente |
| **Exécution** | Aucun cadrage détaillé, conception, architecture, backlog, code |

---

## 5. Scénario retenu (post-G2)

| Élément | Contenu |
|---------|---------|
| **Projet** | Campus360 — étalon SFIA v2.6 |
| **Échelle** | Nationale multi-campus dès MVP |
| **MVP** | Noyau (identité, catalogue, réservation, notifications) + pilotage local/national + exceptions + identité simulée complète + support/RUN borné |
| **Populations** | Cinq (voir §3.3) |
| **RGPD** | Majeurs ; données minimales |
| **Méthode** | SFIA v2.6 uniquement |
| **Prochain cycle possible** | Cadrage détaillé — **uniquement si G3** |
| **Couverture 15 cycles** | Potentiel renforcé — **jamais forcé** |

---

## 6. Options alternatives (historique)

| Option | Statut |
|--------|--------|
| A — Campus360 | **Retenue (G1)** |
| B — Mairie360 | Non retenue — archive historique |
| C — FleetOps360 | Non retenue — archive historique |
| D — Étendre Interv360 / Chantiers360 | Non retenue |
| E — NO-GO étalon | Non retenue |

---

## 7. Avantages du scénario retenu

- Différenciation claire vs Chantiers360 / Interv360.
- Complexité légitime (multi-campus × 5 populations × identité simulée × RUN).
- Critères de sortie qui forcent naturellement QA Critical, release, sécurité, observabilité — **sans forcer les cycles a priori**.
- Compatible SFIA v2.6 sans SFIA 3.0.

---

## 8. Limites

- Critères de sortie ambitieux : exigent un découpage incrémental discipliné.
- Risque de lire « national multi-campus » comme architecture technique.
- Charge Critical documentaire et gates nombreux.
- G3 non ouvert : le projet reste en pré-cadrage jusqu’à décision séparée.

---

## 9. Risques

| Risque | Mitigation |
|--------|------------|
| Surconception technique nationale | Séparer fonctionnel / technique |
| G3 implicite | Statuts explicites dans les 4 docs |
| Critères sortie = un seul mega-INC | Incréments ; cible finale MVP |
| IdP réel glissé | Fournisseur fictif uniquement |
| Contradiction interdocuments | Cette formalisation + confirmation G2 |
| Scope creep | Hors périmètre §10 |

---

## 10. Périmètre inclus / hors périmètre

### Inclus (G2)

- National multi-campus (fonctionnel)
- Cinq populations
- Identité, rôles, habilitations
- Catalogue ; réservation d’espaces ; notifications simples
- Pilotage local et national ; exceptions
- Intégration identité simulée complète (fournisseur fictif)
- Support / RUN borné
- RGPD majeurs / données minimales
- Critères de sortie listés §3.3

### Hors périmètre MVP / cette itération

- Cadrage détaillé (avant G3)
- Code, stack, architecture technique détaillée, multi-région technique
- Protocole / fournisseur d’identité **réel**
- Backlog, user stories delivery, UX/UI, Figma
- Logement ; restauration complète ; paiement réel ; IoT
- ITSM ; CMDB ; centre de support avancé
- DPIA complète
- Modification SFIA / SFIA 3.0
- Commit / push / PR projet (G5–G7)

---

## 11. Critères de succès du projet étalon

1. G2 confirmé sans contradiction documentaire.
2. MVP livré selon critères de sortie G2 (incrémentalement).
3. Cinq populations couvertes en sortie.
4. Identité simulée complète exercée.
5. Au moins un cycle différenciant (sécurité, DevOps, RUN, release) activé pour une vraie raison.
6. Séparation projet / méthode / capitalisation respectée.
7. Aucune promotion SFIA 3.0.

---

## 12. Critères d’arrêt

- MVP impossible à découper en incréments malgré arbitrage Morris ;
- contradiction majeure non résolue dans la formalisation G2 ;
- dérive vers architecture technique ou méthode SFIA ;
- complexité artificielle ;
- validation implicite de G3 / G5–G7.

---

## 13. Trajectoire macro

Voir `02-sfia-cycle-coverage-hypothesis.md` §8.

**Point d’arrêt actuel :** confirmation G2 → puis décision **séparée** G3.

---

## 14. Questions ouvertes restantes

| # | Question | Note |
|---|----------|------|
| Q1 | Confirmation finale G2 après revue ChatGPT ? | **Décision immédiate attendue** |
| Q2 | G3 — autoriser le cadrage détaillé ? | **Décision séparée ultérieure** |
| Q3 | G5/G6/G7 — commit / push / PR ? | **Décisions séparées** |
| Q4 | Protocole d’identité (abstrait vs choix ultérieur) | Reporté aux cycles conception / architecture — **pas maintenant** |
| Q5 | Niveau d’accessibilité cible (référentiel) | Reporté UX/QA — exigence d’activation déjà posée |

Questions **closes** par Morris le 17 juillet 2026 : échelle nationale dès MVP ; mineurs exclus ; nom Campus360 ; populations (cinq) ; espace gestionnaire local **et** national inclus.

---

## 15. Verdict documentaire proposé

```text
G2 DECISIONS FORMALIZED — MORRIS FINAL G2 CONFIRMATION REQUIRED
```

**Ce verdict signifie :**

- les décisions Morris sont **tracées** dans les quatre documents ;
- G2 est **arbitré** et formalisé ;
- une **confirmation finale G2** reste due après revue ChatGPT ;
- **G3 n’est pas validé**.

---

## 16. Décision Morris — confirmation G2 (à remplir)

| Champ | Valeur |
|-------|--------|
| **Date** | _à renseigner_ |
| **Décideur** | Morris |
| **Confirmation G2** | `CONFIRMÉ` / `CONFIRMÉ AVEC RÉSERVES` / `REWORK REQUIRED` |
| **Commentaires G2** | |
| **G3** | **Non traité ici** — décision séparée |
| **G5 / G6 / G7** | **Non traités ici** |

---

## 17. Références

- [README.md](./README.md)
- [01-opportunity-and-vision.md](./01-opportunity-and-vision.md)
- [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md)
```

---

## 9. Actions interdites respectées

- Pas de commit / push / PR / merge branche projet
- Pas de démarrage cadrage détaillé (G3)
- Pas de conception / architecture / backlog / code
- Pas de modification SFIA
- Seul push : Review Handoff Git

---

## 10. Fin du Review Pack

Pack FULL mono-cycle — prêt pour analyse ChatGPT sans accès workspace local.
