# SFIA Review Pack — FULL mono-cycle
## Campus360 — Clôture pré-cadrage (G2/G3) + commit + push

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-17 13:15:44 CEST |
| **Repo** | `mcleland147/sfia-workspace` |
| **Cycle** | 1 — Cadrage (formalisation finale G2/G3, clôture pré-cadrage, préparation PR readiness) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Branche** | `project/campus360-opportunity-framing` |
| **HEAD initial** | `c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e` |
| **HEAD final (commit projet)** | `4275a60cf81acffa00e5faa77c33bd3a583ed599` |
| **origin/main** | `c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e` |
| **origin/project branch** | `4275a60cf81acffa00e5faa77c33bd3a583ed599` |
| **Review pack** | FULL — content-complete, anti-stub |
| **Review Handoff** | **required** |
| **Verdict** | `PRE-FRAMING CLOSED — BRANCH PUSHED — READY FOR PR READINESS` |

---

## 0. Instruction ChatGPT obligatoire

Analyser le handoff distant :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier :

1. formalisation G2 **VALIDÉ AVEC RÉSERVE** ;
2. texte exact de la réserve ;
3. G3 **VALIDÉ** sans démarrage du cadrage détaillé ;
4. pré-cadrage clôturé ;
5. commit G5 = 4 fichiers uniquement ;
6. push G6 vérifié ;
7. G7 **non exécuté** — routage PR readiness ;
8. absence d’architecture / backlog / code / nouveau fichier ;
9. cohérence des quatre documents ;
10. verdict `PRE-FRAMING CLOSED — BRANCH PUSHED — READY FOR PR READINESS`.

---

## 1. Git truth

### État initial

```text
Branch: project/campus360-opportunity-framing
HEAD:   c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e
origin/main: c10f1c4282ed1ed6114e4961ff0c2658d4d7ce7e
Working tree: 4 docs Campus360 untracked ; artefacts tmp/handoff/.sfia
Remote project branch: absent
```

### État final

```text
Branch: project/campus360-opportunity-framing
HEAD:   4275a60cf81acffa00e5faa77c33bd3a583ed599
Remote: 4275a60cf81acffa00e5faa77c33bd3a583ed599 (MATCH)
Status:
?? .sfia/
?? .tmp-sfia-review/
?? sfia-review-handoff/
```

---

## 2. Qualification

| Champ | Valeur |
|-------|--------|
| Nature | Dernière itération Cycle 1 — clôture pré-cadrage |
| Pas | Cadrage détaillé / PR readiness / conception / architecture / backlog |
| Profil | Critical |
| Typologie | DOC |

---

## 3. Sources lues

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. Handoff antérieur G2 formalization (`3c53fd2`)
6. Quatre documents Campus360 locaux
7. Décisions Morris de ce prompt — prioritaires

---

## 4. Décisions Morris formalisées

| Gate | Statut |
|------|--------|
| G1 | **VALIDÉ** |
| G2 | **VALIDÉ AVEC RÉSERVE** |
| G3 | **VALIDÉ** (autorisé, non démarré) |
| G4 | **VALIDÉ** |
| G5 | **EXÉCUTÉ** |
| G6 | **EXÉCUTÉ** |
| G7 | **EN ATTENTE** — cycle 13 PR readiness |

### Texte exact de la réserve G2

> Le périmètre MVP final reste intégralement maintenu. Sa réalisation devra être découpée en incréments proportionnés, chacun assorti de critères de sortie intermédiaires, sans réduction implicite de la cible MVP finale.

Nature : règle de trajectoire et de delivery — ne rouvre pas le périmètre — non bloquante.

---

## 5. Validations avant commit

| Contrôle | Résultat |
|----------|----------|
| Anciens statuts G2 ARBITRÉ / G3 EN ATTENTE | Absents |
| G2 VALIDÉ AVEC RÉSERVE | Présent |
| G3 VALIDÉ + non démarré | Présent |
| Réserve incrémentale | Présente |
| 5 populations / multi-campus / identité simulée / RGPD majeurs | Présents |
| Pas de contenu cadrage détaillé / archi / backlog | PASS |
| Liens relatifs / 4 fichiers seulement | PASS |
| Trailing whitespace | Corrigé avant commit |

---

## 6. G5 — Commit

| Champ | Valeur |
|-------|--------|
| SHA | `4275a60cf81acffa00e5faa77c33bd3a583ed599` |
| Sujet | `docs(campus360): close pre-framing and validate G2 G3` |
| Fichiers | 4 fichiers Campus360 uniquement |

```text
4275a60 docs(campus360): close pre-framing and validate G2 G3
 projects/campus360/01-opportunity-and-vision.md    | 273 +++++++++++++++++++++
 .../campus360/02-sfia-cycle-coverage-hypothesis.md | 181 ++++++++++++++
 projects/campus360/03-pre-framing-decision-pack.md | 211 ++++++++++++++++
 projects/campus360/README.md                       | 145 +++++++++++
 4 files changed, 810 insertions(+)

Files:
projects/campus360/01-opportunity-and-vision.md
projects/campus360/02-sfia-cycle-coverage-hypothesis.md
projects/campus360/03-pre-framing-decision-pack.md
projects/campus360/README.md
```

---

## 7. G6 — Push

| Champ | Valeur |
|-------|--------|
| Commande | `git push -u origin project/campus360-opportunity-framing` |
| SHA local | `4275a60cf81acffa00e5faa77c33bd3a583ed599` |
| SHA remote | `4275a60cf81acffa00e5faa77c33bd3a583ed599` |
| Vérification | **MATCH** |

G7 non exécuté — aucune PR créée.

---

## 8. Contenu intégral final des quatre fichiers


### Fichier : `projects/campus360/README.md`

```markdown
# Campus360

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
| **Nom** | **Campus360** — **validé Morris (G4)** — 17 juillet 2026 |
| **Statut** | `pre-framing-closed` / `awaiting-pr-readiness` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — clôture pré-cadrage (Cycle 1) |
| **Typologie cycle** | DOC |
| **Cycle projet** | 1 — Cadrage (sous-angle : formalisation finale G2/G3, clôture pré-cadrage, préparation PR readiness) |
| **Profil SFIA** | Critical |
| **Branche** | `project/campus360-opportunity-framing` |
| **Chemin** | `projects/campus360/` |

---

## 1. Finalité du projet

Campus360 est le **projet produit fictif étalon** validé par Morris (G1) pour appliquer et éprouver la baseline opérationnelle **SFIA v2.6** sur une trajectoire plus substantielle que Chantiers360 et Interv360.

Cible produit validée (G2 — **VALIDÉ AVEC RÉSERVE**) :

- **échelle nationale multi-campus** dès le MVP ;
- **cinq populations** et habilitations multi-niveaux ;
- noyau fonctionnel (identité, catalogue, réservation, notifications) + pilotage local/national + intégration identité **simulée complète** ;
- support / RUN **borné** ;
- RGPD allégé (**majeurs uniquement**) ;
- critères de sortie MVP renforcés (fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN).

### Réserve G2 (règle de trajectoire — non bloquante)

> Le périmètre MVP final reste **intégralement maintenu**.
> Sa réalisation devra être **découpée en incréments proportionnés**, chacun assorti de **critères de sortie intermédiaires**, **sans réduction implicite** de la cible MVP finale.

Cette réserve est une règle de **trajectoire et de delivery**. Elle **ne rouvre pas** le périmètre G2.

**Campus360 n’est pas un véhicule de promotion SFIA 3.0.** Il applique SFIA v2.6 telle qu’officialisée.

**Distinction critique :** la cible **fonctionnelle** nationale multi-campus **n’implique aucune** architecture technique distribuée, multi-région, stack ou fournisseur d’identité réel décidés à ce stade.

---

## 2. Documents du socle de pré-cadrage

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, gates, navigation, règles de séparation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines, risques |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse de couverture des 15 cycles + transverses |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack de clôture — décisions Morris & gates |

Aucun autre document projet n’est créé dans cette itération. **Aucun document de cadrage détaillé.**

---

## 3. État courant

| Élément | État |
|---------|------|
| Pré-cadrage / opportunité | **CLÔTURÉ** |
| Cadrage détaillé | **Autorisé (G3)** — **non démarré** |
| Conception / architecture / UX / delivery | Hors périmètre de cette exécution |
| Commit branche projet (G5) | **Autorisé / exécuté** dans cette exécution |
| Push branche projet (G6) | **Autorisé / exécuté** dans cette exécution |
| Création PR (G7) | **EN ATTENTE** — cycle **13 — PR readiness** |

> **Règle G3 :** le cadrage détaillé est **autorisé** mais **ne démarre** qu’après clôture du pré-cadrage, commit conforme, push de la branche, cycle PR readiness, création et traitement de la PR, puis décision de suite. **Cette exécution ne démarre pas le cadrage détaillé.**

---

## 4. Statut des gates Morris

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Campus360 comme projet étalon | **VALIDÉ** — 17 juillet 2026 |
| **G2** | Périmètre MVP | **VALIDÉ AVEC RÉSERVE** — 17 juillet 2026 |
| **G3** | Passage au cadrage détaillé | **VALIDÉ** — 17 juillet 2026 *(démarrage différé — voir §3)* |
| **G4** | Nom Campus360 | **VALIDÉ** — 17 juillet 2026 |
| **G5** | Commit branche projet | **EXÉCUTÉ** *(cette exécution)* |
| **G6** | Push branche projet | **EXÉCUTÉ** *(cette exécution)* |
| **G7** | Création PR | **EN ATTENTE** — cycle **PR readiness** |

Détail : voir [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md).

---

## 5. Résumé du périmètre MVP (G2 validé)

| Volet | Contenu retenu |
|-------|----------------|
| **Échelle** | National multi-campus dès la première cible ; admin nationale et locale ; données rattachées à un campus ; pilotage consolidé national |
| **Fonctionnel** | Identité / rôles / habilitations ; catalogue ; réservation d’espaces ; notifications simples ; pilotage local et national ; exceptions ; intégration identité structurante |
| **Populations (5)** | Étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN |
| **Support / RUN** | Borné — **pas** d’ITSM / CMDB / centre de support avancé |
| **Identité** | Contrat + fournisseur **fictif** + simulation **complète** — **aucune** connexion réelle |
| **RGPD** | Majeurs uniquement ; données minimales ; pas de DPIA dans ce cycle |
| **Sortie MVP** | Fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness |
| **Réserve** | Incréments proportionnés + critères intermédiaires — **cible MVP finale inchangée** |

---

## 6. Hors périmètre (cette exécution)

- Contenu de cadrage détaillé (malgré G3 validé — démarrage différé)
- Code, stack, architecture technique détaillée
- Backlog, user stories, UX/UI, Figma
- Fournisseur d’identité réel
- Logement, paiement réel, restauration complète, IoT
- ITSM / CMDB / centre de support avancé
- DPIA complète
- Architecture distribuée / multi-région technique
- Modification SFIA / SFIA 3.0
- Création de PR / merge (G7)

---

## 7. Source de vérité

| Niveau | Source |
|--------|--------|
| **Méthode** | Git `main` — documents SFIA v2.6 canoniques |
| **Décisions structurantes** | Morris (G1–G7) |
| **Projet Campus360** | Documents versionnés sous `projects/campus360/` |

---

## 8. Règle de séparation projet / méthode / capitalisation

| Couche | Contenu autorisé | Contenu interdit |
|--------|------------------|------------------|
| **Projet produit** | Vision, périmètre G2, hypothèses, trajectoire Campus360 | Modification des documents SFIA canoniques |
| **Actifs réutilisables** | Patterns observés *ultérieurement* | Promotion implicite en standard méthode |
| **Observations méthodologiques** | Limites, frictions (REX projet) | Doctrine SFIA nouvelle |
| **Capitalisation SFIA** | Cycle CAPA dédié + GO Morris | Relancer SFIA 3.0 via Campus360 |

> Un apprentissage issu de Campus360 ne devient standard SFIA que via un **cycle de capitalisation** explicite, avec gate Morris.

---

## 9. Prochaine étape

Cycle **13 — PR readiness** (G7), puis décision de suite après traitement de la PR.
Le **cadrage détaillé** (toujours Cycle 1) ne démarre qu’après cette chaîne.
```

---

### Fichier : `projects/campus360/01-opportunity-and-vision.md`

```markdown
# Campus360 — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | **Campus360** (nom **validé** G4 — 17 juillet 2026) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (clôture pré-cadrage / formalisation finale G2/G3) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Statut** | Pré-cadrage **CLÔTURÉ** — G2 validé avec réserve ; G3 validé (cadrage détaillé **autorisé, non démarré**) |
| **Autorité** | Morris |

> Socle d’opportunité **clôturé**. Ce document **n’est pas** un cadrage détaillé. G3 autorise le cadrage détaillé mais **ne le démarre pas** dans cette exécution.

---

## 1. Résumé exécutif

Morris a validé **Campus360** comme projet étalon SFIA v2.6 (G1) et le nom **Campus360** (G4).

Le périmètre MVP (G2) est **VALIDÉ AVEC RÉSERVE** : cible nationale multi-campus, cinq populations, noyau fonctionnel borné, intégration identité simulée complète, support/RUN borné, RGPD majeurs uniquement, critères de sortie renforcés.

**Réserve G2 (non bloquante) :** le périmètre MVP final reste intégralement maintenu ; sa réalisation devra être découpée en incréments proportionnés, chacun assorti de critères de sortie intermédiaires, sans réduction implicite de la cible MVP finale.

Le passage au cadrage détaillé (G3) est **VALIDÉ**, avec démarrage **différé** après clôture pré-cadrage, commit, push, PR readiness, PR et décision de suite.

| Gate | Statut |
|------|--------|
| G1 — Projet étalon | **VALIDÉ** |
| G2 — Périmètre MVP | **VALIDÉ AVEC RÉSERVE** |
| G3 — Cadrage détaillé | **VALIDÉ** — autorisé, **non démarré** |
| G4 — Nom | **VALIDÉ** |
| G5 — Commit | **EXÉCUTÉ** (cette exécution) |
| G6 — Push | **EXÉCUTÉ** (cette exécution) |
| G7 — PR | **EN ATTENTE** — cycle PR readiness |

**Verdict de clôture :** `PRE-FRAMING CLOSED — BRANCH PUSHED — READY FOR PR READINESS`.

---

## 2. Contexte

| Élément | État |
|---------|------|
| Baseline méthode | SFIA v2.6 = baseline opérationnelle officielle |
| Chantiers360 / Interv360 | Projets antérieurs bornés — complétés, non remplacés |
| Décision Morris | Campus360 = étalon (G1) ; périmètre G2 validé avec réserve ; G3 validé |
| Pré-cadrage | **Clôturé** |

---

## 3. Problème fictif adressé

Dans un réseau **national multi-campus**, les services du quotidien sont fragmentés : catalogue et réservations dispersés, identités non unifiées, faible vision nationale, intégration identité absente ou partielle, conformité et exploitation peu industrialisées.

**Besoin fictif :** plateforme unifiée pour découvrir, réserver et piloter les services campus sous identité et habilitations multi-niveaux, à l’échelle nationale multi-campus, avec support/RUN borné.

---

## 4. Opportunité

| Dimension | Opportunité |
|-----------|-------------|
| **Produit** | Scénario crédible, national multi-campus, cinq populations |
| **Méthode** | Terrain SFIA v2.6 sans nouvelle doctrine |
| **Couverture cycles** | Potentiel élevé — activation par déclencheurs |
| **Différenciation** | Multi-campus × multi-populations × identité simulée × RUN borné |
| **Capitalisation** | Observations futures — pas de SFIA 3.0 |

---

## 5. Vision produit

> Campus360 est une plateforme nationale de services campus qui permet aux cinq populations retenues de **découvrir, réserver et piloter** les services du quotidien (catalogue, espaces, notifications, exceptions), sous une identité et des habilitations multi-niveaux (campus / national), avec un support/RUN borné et une intégration identité simulée complète — sans connexion réelle à un fournisseur externe au MVP.

### Caractéristiques validées (G2)

| Aspect | Orientation |
|--------|-------------|
| **Échelle** | National multi-campus dès la première cible |
| **Administration** | Nationale et locale |
| **Données** | Rattachées à un campus |
| **Habilitations** | Multi-niveaux |
| **Pilotage** | Local et national consolidé |
| **Populations** | Cinq (voir §7) |
| **Identité** | Simulation complète, fournisseur fictif |
| **Conformité** | RGPD majeurs ; accessibilité en UX/QA futurs |
| **Trajectoire** | Incréments proportionnés (réserve G2) — cible MVP inchangée |

### Explicitement non décidé / exclu du MVP

| Élément | Statut |
|---------|--------|
| Architecture technique distribuée / multi-région | **Non décidé** |
| Stack | **Non choisi** |
| Fournisseur / protocole d’identité réel | **Non choisi** |
| Logement, restauration complète, paiement réel, IoT | **Hors MVP** |
| ITSM / CMDB / centre de support avancé | **Hors MVP** |
| Contenu de cadrage détaillé | **Hors ce document** (G3 = autorisation, pas contenu) |
| Nombre / contenu / ordre des incréments | **Non inventés ici** — cadrage détaillé ultérieur |

---

## 6. Proposition de valeur

| Bénéficiaire | Valeur |
|--------------|--------|
| **Étudiant / personnel** | Catalogue + réservation + notifications |
| **Gestionnaire de campus** | Pilotage local, exceptions |
| **Administrateur national** | Visibilité consolidée, gouvernance des droits |
| **Support / RUN** | Incidents, disponibilité, diagnostic N1, erreurs d’intégration |
| **Morris / SFIA** | Étalon trajectoire longue v2.6 |

---

## 7. Cinq populations (G2)

| # | Population | Rôle principal |
|---|------------|----------------|
| 1 | **Étudiant** | Consommer services |
| 2 | **Personnel** | Consommer services ; usages métier |
| 3 | **Gestionnaire de campus** | Pilotage local ; exceptions |
| 4 | **Administrateur national** | Gouvernance multi-campus ; pilotage consolidé |
| 5 | **Support / RUN** | Incidents de service, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration |

**Règle :** les cinq sont dans le périmètre ; les cinq sont exigés en critères de sortie MVP ; les parcours peuvent être livrés **incrémentalement** (réserve G2) ; la cible MVP finale inclut les cinq.

---

## 8. Domaines fonctionnels (G2 validé)

| Domaine | Statut MVP |
|---------|------------|
| Identité, rôles, habilitations | **Inclus** |
| Catalogue de services | **Inclus** |
| Réservation d’espaces | **Inclus** |
| Notifications simples | **Inclus** |
| Pilotage local et national | **Inclus** |
| Gestion des exceptions | **Inclus** |
| Intégration identité structurante (simulée) | **Inclus** |
| Support / RUN borné | **Inclus** |
| Événements complets, restauration, logement, paiement réel, ITSM, IoT | **Hors MVP** |

---

## 9. Capacités métier principales

1. Authentifier et autoriser selon population, campus et niveau national.
2. Rattacher les données à un campus ; gérer plusieurs campus nativement.
3. Publier et découvrir un catalogue de services.
4. Réserver un espace (disponibilité, conflits, statuts).
5. Notifier simplement les acteurs concernés.
6. Piloter localement et nationalement (occupation, exceptions, consolidation).
7. Intégrer l’identité via simulation complète — **sans** connexion réelle.
8. Opérer un support/RUN borné (incidents, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration, reprise bornée).

---

## 10. Contraintes et hypothèses

### 10.1 Contraintes

| Contrainte | Description |
|------------|-------------|
| G1 / G4 | Étalon et nom validés |
| G2 | Périmètre validé **avec réserve** incrémentale |
| G3 | Cadrage détaillé **autorisé**, démarrage **différé** |
| National multi-campus | Cible fonctionnelle — pas d’archi technique décidée |
| Cinq populations | Périmètre + critères de sortie |
| Identité simulée | Fournisseur fictif uniquement |
| RGPD | Majeurs ; données minimales |
| Baseline | SFIA v2.6 uniquement |

### 10.2 Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Le MVP national multi-campus est réalisable par incréments proportionnés (réserve G2) |
| H2 | Les critères intermédiaires d’incrément ne remplacent pas les critères de sortie finaux |
| H3 | La simulation identité complète suffit sans IdP réel au MVP |
| H4 | Le découpage incrémental sera traité au **cadrage détaillé** — non inventé ici |
| H5 | Les 15 cycles restent un potentiel — G3 ne les lance pas automatiquement |
| H6 | G7 reste un cycle PR readiness séparé |

---

## 11. Risques majeurs

| ID | Risque | Mitigation |
|----|--------|------------|
| R1 | Lire G3 comme démarrage immédiat du cadrage détaillé | Séparation autorisation / démarrage |
| R2 | Transformer la réserve en réduction du MVP | Réserve = trajectoire, pas scope cut |
| R3 | Surconception technique « nationale » | Séparer fonctionnel / technique |
| R4 | Inventer les incréments trop tôt | Report au cadrage détaillé |
| R5 | Forçage des 15 cycles | Matrice `02-…` |
| R6 | Confusion simulation / IdP réel | Fournisseur fictif |
| R7 | Confusion projet / méthode / SFIA 3.0 | Séparation ; CAPA séparée |

---

## 12. Différenciation vs Chantiers360 et Interv360

| Critère | Chantiers360 | Interv360 | Campus360 |
|---------|--------------|-----------|-----------|
| Échelle | PME | Organisation SAV | **Nationale multi-campus** |
| Populations | Artisan / PME | Rôles SAV | **Cinq populations** |
| Intégrations | Limitées | Contrats simulés | **Identité simulée complète** |
| RUN | Peu central | Partiel | **Support/RUN borné** + critères sortie |
| Rôle SFIA | Pilote v2.0 | Référence | **Étalon v2.6 (G1)** |

---

## 13. Critères de crédibilité

Satisfaits sous G2 validé : problème compréhensible ; cinq populations ; multi-campus nécessaire ; identité simulée structurelle ; RGPD/accessibilité réels ; trajectoire incrémentale pensable ; pas d’archi technique préemptée.

---

## 14. Critères de sortie du MVP (G2 — cible finale inchangée)

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

**Réserve :** chaque incrément aura des critères de sortie **intermédiaires** ; ils **ne remplacent pas** cette liste finale.

---

## 15. RGPD — périmètre décidé (sans DPIA)

| Inclus | Exclu |
|--------|-------|
| Majeurs uniquement | Mineurs ; responsables légaux |
| Identité minimale ; campus ; rôles ; réservation ; logs nécessaires | Santé ; logement ; paiement réel ; DPIA (ce cycle) |

---

## 16. Critères de succès du projet étalon

1. Pré-cadrage clôturé et versionné (G5/G6).
2. PR readiness puis PR traitées (G7 — cycle séparé).
3. Cadrage détaillé conduit après chaîne G3 différée.
4. MVP livré selon critères de sortie G2, via incréments proportionnés.
5. Séparation projet / méthode / capitalisation respectée.
6. Aucune promotion SFIA 3.0.

---

## 17. Recommandation / prochaines étapes

| Élément | Position |
|---------|----------|
| **Pré-cadrage** | **Clôturé** |
| **G2** | Validé avec réserve — périmètre **fermé** |
| **G3** | Validé — cadrage détaillé **autorisé, non démarré** |
| **G7** | Cycle **13 — PR readiness** |
| **Interdit maintenant** | Contenu de cadrage détaillé, conception, architecture, backlog, code, PR |

**Distinction observation / recommandation / décision :**

- **Observation :** la réserve G2 discipline la delivery sans réduire le MVP.
- **Recommandation :** enchaîner sur PR readiness, puis décider la suite.
- **Décisions G1–G6 :** prises / exécutées ; **G7** à venir.
```

---

### Fichier : `projects/campus360/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# Campus360 — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | **Campus360** (nom validé G4) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (clôture pré-cadrage) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Pré-cadrage **CLÔTURÉ** — trajectoire actualisée post-G2/G3 ; **aucun cycle automatiquement lancé** |
| **Référence méthode** | `sfia-v2.5-project-cycles-method-candidate.md` (acquis absorbés v2.6) |

> **Règle :** les 15 cycles restent un **référentiel de couverture potentielle**. G3 n’active aucun cycle automatiquement. Activation **uniquement** par déclencheur réel. Profil **requalifié à chaque cycle**. Pas d’ordre séquentiel rigide. Pas de forçage pour atteindre quinze.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur trajectoire produit sérieuse |
| **Activable** | Fortement probable compte tenu de G2 |
| **Conditionnel** | Dépend d’un événement ou arbitrage |
| **Événementiel** | INC / RUN / EVOL — incident ou décision |

---

## 2. Synthèse de couverture

| # | Cycle | Caractère | Probabilité | Note post-clôture |
|---|-------|-----------|-------------|-------------------|
| 1 | Cadrage | Quasi systématique | **Certaine** | Pré-cadrage **clôturé** ; cadrage détaillé = prochaine activité **après PR** (toujours Cycle 1) |
| 2 | Conception fonctionnelle | Quasi systématique | **Très élevée** | Après cadrage détaillé |
| 3 | Architecture fonctionnelle | Activable | **Très élevée** | — |
| 4 | UX/UI | Activable | **Très élevée** | 5 populations + accessibilité |
| 5 | Backlog / user stories | Quasi systématique | **Très élevée** | Lieu naturel du découpage incrémental (réserve G2) |
| 6 | Architecture technique | Activable | **Très élevée** | Sans stack préjugée |
| 7 | Intégration / DevOps | Activable | **Très élevée** | Identité simulée complète |
| 8 | Delivery / implémentation | Quasi systématique | **Certaine** | Incréments proportionnés (réserve G2) |
| 9 | QA / validation | Quasi systématique | **Certaine** | Critical probable en sortie MVP |
| 10 | Sécurité / RSSI | Activable | **Très élevée** | — |
| 11 | Déploiement / release | Activable | **Très élevée** | Critères sortie |
| 12 | Observabilité / RUN readiness | Activable | **Très élevée** | Support/RUN borné |
| 13 | PR readiness | Quasi systématique | **Certaine** | **Prochaine étape immédiate (G7)** |
| 14 | Post-merge | Quasi systématique | **Certaine** | — |
| 15 | Capitalisation / REX | Quasi systématique | **Élevée** | Proportionnée — pas de promotion méthode ici |

---

## 3. Réserve G2 — impact trajectoire (sans définir les incréments)

| Règle | Contenu |
|-------|---------|
| **Cible MVP finale** | **Inchangée** (critères de sortie G2 complets) |
| **Découpage** | Sera traité dans le **cadrage détaillé** puis backlog — **non défini ici** |
| **Incréments** | Proportionnés ; chacun avec critères de sortie **intermédiaires** |
| **Requalification** | Chaque incrément / cycle est requalifié (type, profil, périmètre) |
| **Interdiction** | Les critères intermédiaires **ne remplacent pas** les critères de sortie finaux |
| **Interdiction** | Inventer nombre, contenu ou ordre des incréments dans ce document |

---

## 4. Matrice détaillée (synthèse opérationnelle)

Les justifications détaillées du pré-cadrage restent valides. Mises à jour clés :

### Cycle 1 — Cadrage

| Champ | Contenu |
|-------|---------|
| **État** | Pré-cadrage **clôturé** |
| **Suite** | Cadrage détaillé **autorisé (G3)** mais **non démarré** — après PR readiness / PR / décision de suite |
| **Profil probable cadrage détaillé** | À re-qualifier à l’ouverture |
| **Gates** | G1–G6 traités ; G7 = PR readiness |

### Cycle 5 / 8 — Backlog & Delivery

| Champ | Contenu |
|-------|---------|
| **Lien réserve G2** | Découpage en incréments proportionnés ; critères intermédiaires ; cible finale intacte |
| **Ne pas faire ici** | Définir les incréments |

### Cycle 9 — QA

| Champ | Contenu |
|-------|---------|
| **Profil probable sortie MVP** | Critical |
| **Couverture** | Fonctionnel, sécurité, accessibilité, performance |

### Cycle 13 — PR readiness

| Champ | Contenu |
|-------|---------|
| **État** | **Prochaine étape** — G7 |
| **Déclencheur** | Branche poussée, pré-cadrage clôturé |

### Cycles 3, 4, 6, 7, 10, 11, 12

Fortement probables compte tenu de G2 — **non lancés** par G3.

---

## 5. Classes de cycles

| Classe | Cycles |
|--------|--------|
| Quasi systématiques | 1, 2, 5, 8, 9, 13, 14, 15 |
| Activables (fortement probables) | 3, 4, 6, 7, 10, 11, 12 |
| Conditionnels | Profondeur Critical ; Figma ; ADR lourds |
| Événementiels | RUN / correctifs / CAPA |

---

## 6. Transverses (non cycles cœur)

### RGPD

Majeurs ; données minimales ; campus ; rôles ; réservation ; logs nécessaires. Exclusions : santé, mineurs, logement, paiement réel. **Pas de DPIA** ici. Bloc toujours actif.

### Accessibilité

Activation future pour les cinq populations — cycles UX/UI et QA. **Pas de travail UX** dans cette exécution.

### Performance

National multi-campus + pics justifient travaux futurs. **Pas de SLA** ici.

### Sécurité

Habilitations, identité simulée, logs, séparation campus/national. **Pas de threat model** ici.

### Observabilité / RUN readiness

Critères de sortie + support/RUN borné maintenus. **Pas de runbooks** ici.

### Capitalisation / REX documentaire

Clôture du pré-cadrage tracée. **Pas** de modification méthode SFIA. **Pas** de promotion en baseline.

---

## 7. Séparation projet / méthode / capitalisation

| Couche | Règle |
|--------|-------|
| Projet produit | `projects/campus360/` |
| Observations | REX projet |
| Capitalisation SFIA | Cycle CAPA + GO Morris uniquement |

---

## 8. Trajectoire macro (hypothèse — aucun démarrage implicite)

```text
Pré-cadrage Cycle 1                         ← CLÔTURÉ
    → Commit (G5) + Push (G6)               ← cette exécution
    → Cycle 13 — PR readiness (G7)          ← prochaine étape
    → PR + décision de suite
Cadrage détaillé (Cycle 1, DOC)             ← uniquement après chaîne ci-dessus
    → Conception → (archi fonc. / UX) → backlog (incréments)
    → Archi technique → DevOps / identité simulée
    → Sécurité → Delivery INC-n + QA
    → Release + RUN readiness
    → EVOL / RUN / CAPA selon besoins
```

**G3 n’autorise pas** à sauter PR readiness ni à démarrer le cadrage détaillé dans cette exécution.

---

## 9. Revue anti-couverture artificielle

| Signal | Statut |
|--------|--------|
| 15 cycles obligatoires | Évité |
| G3 = lancement multi-cycles | Évité |
| Incréments inventés | Évité |
| Réduction MVP via réserve | Interdit |
| Architecture = multi-campus | Séparé |

**Conclusion :** pré-cadrage clôturé ; hypothèses de couverture intactes ; prochaine action méthodologique après PR = cadrage détaillé (Cycle 1).
```

---

### Fichier : `projects/campus360/03-pre-framing-decision-pack.md`

```markdown
# Campus360 — Decision pack de clôture du pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | **Campus360** (nom **validé** G4) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (clôture pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Statut pré-cadrage** | **CLÔTURÉ** |
| **Verdict documentaire (avant commit)** | `PRE-FRAMING DECISIONS COMPLETE — READY FOR COMMIT` |
| **Verdict documentaire (après push)** | `PRE-FRAMING CLOSED — BRANCH PUSHED — READY FOR PR READINESS` |

---

## 1. Décision suivante

**Cycle 13 — PR readiness (G7).**

Ne pas démarrer le cadrage détaillé dans cette exécution, malgré G3 validé.

---

## 2. Statut final des gates

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Projet étalon SFIA v2.6 | **VALIDÉ** |
| **G2** | Périmètre MVP | **VALIDÉ AVEC RÉSERVE** |
| **G3** | Passage au cadrage détaillé | **VALIDÉ** — autorisé, **non démarré** |
| **G4** | Nom Campus360 | **VALIDÉ** |
| **G5** | Commit branche projet | **EXÉCUTÉ** |
| **G6** | Push branche projet | **EXÉCUTÉ** |
| **G7** | Création PR | **EN ATTENTE** — cycle **PR readiness** |

---

## 3. Décisions Morris finales de clôture du pré-cadrage — 17 juillet 2026

### 3.1 Validation G2

Le périmètre MVP Campus360 est **validé** :

- cible nationale multi-campus ;
- cinq populations : étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN ;
- identité, rôles et habilitations multi-niveaux ;
- catalogue de services ;
- réservation d’espaces ;
- notifications simples ;
- pilotage local et national ;
- gestion des exceptions ;
- intégration identité structurante avec simulation complète ;
- support / RUN borné ;
- utilisateurs majeurs uniquement ;
- données personnelles minimales ;
- critères de sortie couvrant fonctionnel, intégration, QA, sécurité, accessibilité, performance, release et RUN readiness.

### 3.2 Réserve de découpage incrémental (validée avec G2)

**Texte exact de la réserve :**

> Le périmètre MVP final reste intégralement maintenu.
> Sa réalisation devra être découpée en incréments proportionnés, chacun assorti de critères de sortie intermédiaires, sans réduction implicite de la cible MVP finale.

**Nature :** règle de **trajectoire et de delivery**.
**Effets :**

- ne rouvre **pas** le périmètre G2 ;
- n’est **pas** une réserve bloquante ;
- n’autorise **pas** à inventer les incréments dans le pré-cadrage ;
- le découpage sera traité au **cadrage détaillé** / backlog ultérieurs ;
- chaque incrément sera **requalifié** ;
- les critères intermédiaires **ne remplacent pas** les critères de sortie finaux.

### 3.3 Validation G3

Le passage au cadrage détaillé Campus360 est **autorisé**.

### 3.4 Séparation autorisation / démarrage effectif

Le cadrage détaillé **ne démarre** qu’après :

1. clôture du pré-cadrage ;
2. commit projet conforme (G5) ;
3. push de la branche projet (G6) ;
4. cycle **PR readiness** ;
5. création et traitement de la pull request (G7) ;
6. décision de suite après contrôle de la PR.

**G3 validé ≠ cadrage détaillé démarré.**

### 3.5 Autorisation G5 / G6

- **G5** : commit borné des quatre documents Campus360 — **autorisé et exécuté** dans cette exécution.
- **G6** : push de `project/campus360-opportunity-framing` — **autorisé et exécuté** dans cette exécution.

### 3.6 Report de G7

La création de PR est **reportée** au cycle distinct **13 — PR readiness**.
**Aucune PR** dans cette exécution.

### 3.7 G1 / G4 (rappel)

- G1 : Campus360 = projet étalon SFIA v2.6 — **VALIDÉ**.
- G4 : nom Campus360 — **VALIDÉ**.

---

## 4. Critères de clôture du pré-cadrage

| Critère | Statut |
|---------|--------|
| Quatre documents cohérents | À vérifier avant commit |
| G1–G4 formalisés | Oui |
| Réserve G2 tracée sans réduction MVP | Oui |
| G3 autorisé sans démarrage implicite | Oui |
| Aucun contenu de cadrage détaillé | Oui |
| Aucune architecture / backlog / code | Oui |
| G5 commit conforme (4 fichiers) | Exécuté dans cette exécution |
| G6 push vérifié | Exécuté dans cette exécution |
| G7 non exécuté | Oui |

---

## 5. Actions autorisées (cette exécution)

- Modifier les quatre documents du socle.
- Commit borné (G5).
- Push de la branche projet (G6).
- Review Pack FULL + Review Handoff Git.

## 6. Actions interdites (cette exécution)

- Créer une PR / draft PR (G7).
- Démarrer le cadrage détaillé.
- Créer `00-framing/` ou tout document supplémentaire.
- Conception, architecture, backlog, code.
- Choisir stack ou fournisseur d’identité réel.
- Modifier la méthode SFIA.
- Force push ; push `main` ; merge ; suppression de branche.

---

## 7. Scénario retenu (clôturé)

| Élément | Contenu |
|---------|---------|
| Projet | Campus360 — étalon SFIA v2.6 |
| Échelle | Nationale multi-campus (fonctionnel) |
| MVP | Noyau + pilotage + identité simulée + RUN borné |
| Populations | Cinq |
| Réserve | Incréments proportionnés — cible finale intacte |
| Suite immédiate | PR readiness (G7) |
| Suite après PR | Cadrage détaillé (Cycle 1) si décision de suite |

---

## 8. Risques résiduels

| Risque | Mitigation |
|--------|------------|
| Démarrer le cadrage détaillé trop tôt | Chaîne G3 différée explicite |
| Réduire le MVP via la réserve | Texte réserve + contrôles |
| Inventer les incréments maintenant | Interdit — cadrage détaillé |
| Créer une PR dans cette exécution | G7 explicitement reporté |
| Surconception technique nationale | Séparation fonctionnel / technique |

---

## 9. Questions ouvertes restantes

| # | Question | Note |
|---|----------|------|
| Q1 | Contenu / nombre / ordre des incréments | Cadrage détaillé + backlog |
| Q2 | Niveau d’accessibilité cible (référentiel) | UX/QA |
| Q3 | Protocole d’identité (abstraction vs choix) | Conception / architecture |
| Q4 | Décision de suite post-PR | Après G7 |

---

## 10. Périmètre inclus / hors périmètre (rappel)

### Inclus (G2)

National multi-campus ; cinq populations ; identité/rôles/habilitations ; catalogue ; réservation ; notifications ; pilotage local/national ; exceptions ; identité simulée complète ; support/RUN borné ; RGPD majeurs ; critères de sortie renforcés ; réserve incrémentale.

### Hors MVP / hors cette exécution

Cadrage détaillé (contenu) ; code ; stack ; archi technique ; IdP réel ; logement ; resto complète ; paiement réel ; IoT ; ITSM/CMDB ; DPIA ; PR ; SFIA 3.0.

---

## 11. Verdicts

```text
PRE-FRAMING DECISIONS COMPLETE — READY FOR COMMIT
```

```text
PRE-FRAMING CLOSED — BRANCH PUSHED — READY FOR PR READINESS
```

---

## 12. Références

- [README.md](./README.md)
- [01-opportunity-and-vision.md](./01-opportunity-and-vision.md)
- [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md)
```

---

## 9. Réserves

1. G7 reste à traiter en cycle PR readiness.
2. Cadrage détaillé autorisé mais non démarré — chaîne post-PR obligatoire.
3. Découpage incrémental non défini (volontaire) — cadrage détaillé ultérieur.
4. Artefacts untracked `.tmp-sfia-review/`, `.sfia/`, worktree handoff — hors commit projet.

Aucune réserve bloquante sur la clôture du pré-cadrage.

---

## 10. Décision suivante

Cycle **13 — PR readiness** (G7).

---

## 11. Verdict

```text
PRE-FRAMING CLOSED — BRANCH PUSHED — READY FOR PR READINESS
```

Pack FULL mono-cycle — prêt pour analyse ChatGPT sans accès workspace local.
