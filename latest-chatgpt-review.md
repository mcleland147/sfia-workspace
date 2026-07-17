# SFIA Review Pack — FULL mono-cycle
## Campus360 — Cycle 1 Detailed Framing (Critical DOC)

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-17 13:35:41 CEST |
| **Repo** | `mcleland147/sfia-workspace` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Branche** | `project/campus360-detailed-framing` |
| **Base / HEAD** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` (= origin/main `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03`) |
| **Commit projet** | **Aucun** |
| **Push projet** | **Aucun** |
| **Review Handoff** | **required** |
| **Verdict** | `DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED` |

---

## 0. Instruction ChatGPT

Analyser `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier :

1. contenu intégral des 5 fichiers projet (README + 04–07) ;
2. cohérence G2 + réserve (non-réduction MVP) ;
3. 4 incréments proposés sans backlog ;
4. 5 populations conservées ;
5. gates DF-G1…G12 proposés (non auto-validés) ;
6. absence d’architecture / stack / stories / code ;
7. absence de commit/push projet ;
8. recommandations vs décisions clairement séparées ;
9. verdict `DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED`.

---

## 1. Git truth

```text
Branch: project/campus360-detailed-framing
HEAD:   ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
origin/main: ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
Commit projet: NONE
Push projet: NONE
Status:
M projects/campus360/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? sfia-review-handoff/
```

### Diff stat (uncommitted)

```text
projects/campus360/README.md | 134 ++++++++++++++++++++++---------------------
 1 file changed, 68 insertions(+), 66 deletions(-)
```

---

## 2. Qualification

| Champ | Valeur |
|-------|--------|
| Justification Critical | Étalon national multi-campus ; 5 pops ; multi-domaines ; identité simulée ; réserve G2 ; impacts futurs larges ; anti-réduction MVP / anti-préemption technique |
| Blocs activés | RGPD, accessibilité, performance, UX (dépendance), sécurité, DevOps (dépendances), release, RUN, REX léger |
| Blocs non ouverts | Conception, archi fonc/tech, backlog, UX/Figma, delivery, QA détaillée |

---

## 3. Décisions Morris applicables

| Décision | Statut |
|----------|--------|
| G1–G4 | VALIDÉS (G2 avec réserve) |
| G3 + GO DETAILED FRAMING | Cadrage détaillé **démarré** |
| G5–G7 pré-cadrage | EXÉCUTÉS (PR #206) |
| Commit/push/PR cette branche | **Non autorisés** |
| Validation fond cadrage / trajectoire / DF gates | **Attendues** |

---

## 4. Trajectoire proposée (recommandation — option A)

| INC | Objectif | Pops progressives |
|-----|----------|-------------------|
| INC-01 | Socle identité multi-campus & catalogue | Toutes présentes ; usagers consultent ; admins publient |
| INC-02 | Réservation, notifications, exceptions | Usagers + gestionnaire cœur |
| INC-03 | Pilotage local & national | Gestionnaire + admin national |
| INC-04 | Identité simulée complète & support/RUN borné | Support/RUN cœur ; sync impacte tous |

Options B (3 INC) et C (identité partagée) documentées dans `05`.

---

## 5. Gates proposés DF-G1…DF-G12

Voir `07` — propositions non validées. Immédiats : DF-G1 (cadrage), DF-G2 (trajectoire), DF-G3 (gates/RACI).

---

## 6. Contrôles

| Contrôle | Résultat |
|----------|----------|
| 4 fichiers créés + README modifié seulement | PASS |
| Contenu complet (anti-stub) | PASS |
| G2/réserve / 5 pops / multi-campus / identité simulée / majeurs | PASS |
| 4 INC max raisonnable | PASS |
| Critères intermédiaires ≠ finaux | PASS |
| Pas stack/archi/backlog/code/IdP réel | PASS |
| Pas commit/push/staged | PASS |
| git diff --check | PASS |

---

## 7. Contenu intégral des fichiers projet


### Fichier : `projects/campus360/README.md`

```markdown
# Campus360

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
| **Nom** | **Campus360** — **validé Morris (G4)** — 17 juillet 2026 |
| **Statut** | `detailed-framing-in-progress` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé (DOC, Critical) |
| **Typologie cycle** | DOC |
| **Cycle projet** | 1 — Cadrage (sous-angle : **cadrage détaillé**) |
| **Profil SFIA** | Critical |
| **Branche** | `project/campus360-detailed-framing` |
| **Chemin** | `projects/campus360/` |
| **Pré-cadrage** | **Mergé** via PR #206 (`ec7f397`) |

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

**Campus360 n’est pas un véhicule de promotion SFIA 3.0.**

**Distinction critique :** national multi-campus = cible **fonctionnelle** — **aucune** architecture distribuée, multi-région, stack ou IdP réel décidé à ce stade.

---

## 2. Navigation documentaire

### Pré-cadrage (mergé PR #206)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse couverture 15 cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack de clôture pré-cadrage |

### Cadrage détaillé (en cours — draft)

| Document | Rôle |
|----------|------|
| [04-detailed-framing.md](./04-detailed-framing.md) | Cadrage détaillé produit / périmètre / contraintes |
| [05-mvp-increment-trajectory.md](./05-mvp-increment-trajectory.md) | Trajectoire incrémentale (réserve G2) |
| [06-governance-and-stakeholders.md](./06-governance-and-stakeholders.md) | Gouvernance et parties prenantes |
| [07-risks-dependencies-and-gates.md](./07-risks-dependencies-and-gates.md) | Risques, dépendances, gates DF proposés |

> **Cadrage détaillé ≠ conception / architecture / backlog / UX / code.**

---

## 3. État courant

| Élément | État |
|---------|------|
| Pré-cadrage | **CLÔTURÉ** — mergé PR #206 |
| G3 | **VALIDÉ** — cadrage détaillé **démarré** par décision Morris `GO — DETAILED FRAMING CAMPUS360` |
| Cadrage détaillé | **`detailed-framing-in-progress`** — draft local, **non commité** |
| Conception / architecture / backlog / delivery | **Non démarrés** |
| Commit / push / PR (cette branche) | **Interdits** sans nouveau GO Morris |

---

## 4. Statut des gates (rappel)

| Gate | Statut |
|------|--------|
| G1 | **VALIDÉ** |
| G2 | **VALIDÉ AVEC RÉSERVE** |
| G3 | **VALIDÉ** — cadrage détaillé démarré |
| G4 | **VALIDÉ** |
| G5–G7 (pré-cadrage) | **EXÉCUTÉS** (PR #206 mergée) |
| Gates DF-G* | **Proposés** — voir `07-…` — non validés |

---

## 5. Résumé du périmètre MVP (G2 validé)

| Volet | Contenu retenu |
|-------|----------------|
| **Échelle** | National multi-campus ; admin nationale et locale |
| **Fonctionnel** | Identité / rôles ; catalogue ; réservation ; notifications ; pilotage local/national ; exceptions ; identité structurante |
| **Populations (5)** | Étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN |
| **Support / RUN** | Borné — pas d’ITSM / CMDB |
| **Identité** | Fournisseur fictif + simulation complète — aucune connexion réelle |
| **RGPD** | Majeurs ; données minimales |
| **Sortie MVP** | Fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN |
| **Réserve** | Incréments proportionnés — cible finale inchangée |

---

## 6. Hors périmètre (cadrage détaillé)

- Conception fonctionnelle détaillée, architecture, backlog, user stories
- UX/UI, Figma, wireframes
- Code, stack, IdP réel
- DPIA complète, threat model complet, runbooks complets
- Commit / push / PR / merge de `project/campus360-detailed-framing`
- Modification SFIA / SFIA 3.0

---

## 7. Source de vérité

| Niveau | Source |
|--------|--------|
| **Méthode** | Git `main` — SFIA v2.6 |
| **Décisions structurantes** | Morris |
| **Projet** | `projects/campus360/` (pré-cadrage sur `main` ; cadrage détaillé en draft branche locale) |

---

## 8. Séparation projet / méthode / capitalisation

| Couche | Autorisé | Interdit |
|--------|----------|----------|
| Projet | Cadrage Campus360 | Modifier SFIA canonique |
| Observations | REX / handoff | Doctrine implicite |
| Capitalisation SFIA | Cycle CAPA + GO Morris | SFIA 3.0 via Campus360 |

---

## 9. Décision suivante

**Revue Morris du cadrage détaillé** (docs `04`–`07` + handoff) :

- valider le fond ;
- valider ou amender la trajectoire incrémentale ;
- valider ou amender les gates DF ;
- décider commit/push/PR ;
- désigner le prochain cycle (recommandation : conception fonctionnelle).
```

---

### Fichier : `projects/campus360/04-detailed-framing.md`

```markdown
# Campus360 — Cadrage détaillé

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `04-detailed-framing.md` |
| **Cycle** | 1 — Cadrage (sous-angle : cadrage détaillé) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Branche** | `project/campus360-detailed-framing` |
| **Autorité** | Morris (L0) |
| **Statut** | `draft` — revue Morris requise |
| **Pré-cadrage** | Mergé PR #206 — `ec7f397` |

> Ce document **cadre** le produit et sa trajectoire. Il **ne** conçoit **pas** la solution, **ne** choisit **pas** d’architecture, **ne** produit **pas** de backlog.

---

## 1. Résumé exécutif

Campus360 est le projet étalon SFIA v2.6 (G1), nommé officiellement (G4), au périmètre MVP national multi-campus validé avec réserve incrémentale (G2). Le cadrage détaillé est démarré par décision Morris (`GO — DETAILED FRAMING CAMPUS360`) après merge de la PR #206.

Ce cadrage transforme le pré-cadrage en cadre exploitable : objectifs, périmètre, populations, capacités, contraintes transverses, principes de découpage, critères de succès, et décisions encore dues à Morris.

**Verdict documentaire proposé :** `DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED`.

---

## 2. Rappel des décisions G1–G4 et réserve G2

| Gate | Statut | Contenu |
|------|--------|---------|
| **G1** | VALIDÉ | Campus360 = projet étalon SFIA v2.6 |
| **G2** | VALIDÉ AVEC RÉSERVE | Périmètre MVP national multi-campus (voir §8) |
| **G3** | VALIDÉ | Cadrage détaillé autorisé — **démarré** dans cette exécution |
| **G4** | VALIDÉ | Nom officiel Campus360 |
| G5–G7 (pré-cadrage) | EXÉCUTÉS | Commit, push, PR #206, merge |

**Réserve G2 (texte exact) :**

> Le périmètre MVP final reste intégralement maintenu.
> Sa réalisation devra être découpée en incréments proportionnés, chacun assorti de critères de sortie intermédiaires, sans réduction implicite de la cible MVP finale.

**Nature :** règle de trajectoire et de delivery — ne rouvre pas le périmètre — non bloquante.

---

## 3. Problème et opportunité

### Problème

Dans un réseau national multi-campus, les services du quotidien (catalogue, réservation d’espaces, notifications, pilotage) sont fragmentés ; les identités et habilitations ne sont pas unifiées entre campus et niveau national ; l’intégration identité est absente ou partielle ; la conformité et l’exploitation restent peu industrialisées.

### Opportunité

Fournir une plateforme unifiée fictive permettant de découvrir, réserver et piloter les services campus sous identité et habilitations multi-niveaux, à l’échelle nationale multi-campus, avec support/RUN borné et intégration identité simulée complète — terrain d’épreuve durable pour SFIA v2.6.

---

## 4. Objectifs du projet

1. Démontrer un MVP national multi-campus cohérent pour cinq populations.
2. Exercer identité, catalogue, réservation, notifications, pilotage local/national, exceptions, identité simulée complète, support/RUN borné.
3. Satisfaire les critères de sortie G2 (fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness).
4. Respecter la réserve G2 via une trajectoire incrémentale proportionnée.
5. Séparer clairement projet, méthode et capitalisation SFIA.

---

## 5. Résultats attendus

| Résultat | Description |
|----------|-------------|
| Produit MVP | Cible G2 intégralement démontrable en sortie |
| Trajectoire | Incréments avec critères intermédiaires (voir `05-…`) |
| Gouvernance | Rôles, RACI, gates DF (voir `06-…` et `07-…`) |
| Preuves | Chaîne documentaire + preuves runtime ultérieures par cycle |
| Apprentissage SFIA | Observations projet — capitalisation méthode seulement via CAPA + GO Morris |

---

## 6. Non-objectifs

- Remplacer Chantiers360 ou Interv360.
- Promouvoir SFIA 3.0 ou modifier la méthode dans ce cycle.
- Livrer un SI campus « complet » (logement, resto, paiement, IoT, ITSM).
- Connecter un fournisseur d’identité réel au MVP.
- Produire dans ce cycle : conception détaillée, architecture, backlog, UX/Figma, code.

---

## 7. Périmètre inclus (G2 — inchangé)

- Cible **nationale multi-campus** ; admin nationale et locale ; données rattachées à un campus ; habilitations multi-niveaux ; pilotage consolidé national.
- Identité, rôles, habilitations.
- Catalogue de services.
- Réservation d’espaces.
- Notifications simples.
- Pilotage local et national.
- Gestion des exceptions.
- Intégration identité **simulée complète** (création, MAJ, désactivation, doublons, idempotence, erreurs, reprises, désynchronisations, traçabilité, supervision) — fournisseur **fictif**.
- Support / RUN **borné** (incidents de service, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration, reprise bornée).
- Utilisateurs **majeurs** ; données personnelles **minimales**.
- Critères de sortie : fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness.

---

## 8. Périmètre exclu

| Exclu | Note |
|-------|------|
| Logement, restauration complète, paiement réel, IoT / contrôle d’accès physique | Hors MVP |
| ITSM complet, CMDB, centre de support avancé | Hors MVP |
| Fournisseur / protocole d’identité **réel** | Hors MVP |
| Architecture distribuée / multi-région technique, stack | Non décidé |
| DPIA complète | Hors ce cycle de cadrage |
| Conception / architecture / backlog / UX-Figma / code | Cycles ultérieurs |

---

## 9. Cinq populations et responsabilités fonctionnelles

| Population | Responsabilités fonctionnelles MVP |
|------------|-------------------------------------|
| **Étudiant** | Consulter catalogue ; réserver espaces ; recevoir notifications ; gérer ses réservations dans les limites de rôle |
| **Personnel** | Idem étudiant + usages métier campus selon habilitations |
| **Gestionnaire de campus** | Administrer services/espaces locaux ; traiter exceptions ; piloter occupation locale |
| **Administrateur national** | Gouverner multi-campus ; habilitations ; pilotage consolidé ; supervision transverse |
| **Support / RUN** | Consulter incidents de service ; statut disponibilité ; diagnostic N1 ; traçabilité ; erreurs d’intégration ; reprise bornée |

**Règle :** les cinq sont dans le périmètre ; les cinq doivent être couvertes en **sortie MVP** ; la couverture peut être **progressive** par incrément (réserve G2).

---

## 10. Capacités métier attendues

1. Authentifier et autoriser (population × campus × niveau national).
2. Rattacher les données à un campus ; gérer plusieurs campus nativement.
3. Publier / découvrir un catalogue de services.
4. Réserver un espace (disponibilité, conflits, statuts).
5. Notifier simplement les acteurs concernés.
6. Piloter localement et nationalement (occupation, exceptions, consolidation).
7. Intégrer l’identité via simulation complète — sans connexion réelle.
8. Opérer le support/RUN borné défini en G2.

---

## 11. Parcours métier à cadrer ultérieurement (conception / UX)

| ID | Parcours | Populations principales |
|----|----------|-------------------------|
| P1 | Authentification et sélection de contexte campus | Toutes |
| P2 | Découverte catalogue | Étudiant, personnel |
| P3 | Réservation d’espace (création → confirmation → modification/annulation) | Étudiant, personnel, gestionnaire |
| P4 | Traitement d’exception (conflit, indisponibilité) | Gestionnaire, admin national |
| P5 | Pilotage local | Gestionnaire |
| P6 | Pilotage consolidé national | Administrateur national |
| P7 | Supervision flux identité simulés (erreur, reprise, désync) | Support/RUN, admin |
| P8 | Incident de service / disponibilité (N1) | Support/RUN |

Ces parcours sont des **cibles de conception/UX futures**, pas des specs d’écran.

---

## 12. Contraintes fonctionnelles

- Données métier rattachées à un campus.
- Habilitations multi-niveaux (campus / national) sans confusion de privilèges.
- Réservations soumises à règles de disponibilité et de conflit.
- Notifications simples (pas de plateforme marketing).
- Exceptions visibles et traitables par les rôles adéquats.
- Simulation identité : couverture complète des cas G2, y compris non-happy-path.

---

## 13. Contraintes réglementaires et transverses

### RGPD

| Élément | Cadrage |
|---------|---------|
| **Populations données** | Majeurs uniquement |
| **Catégories** | Identité minimale ; rattachement campus ; rôles/habilitations ; réservation ; logs techniques/sécurité nécessaires |
| **Finalités** | Fourniture des services campus MVP ; sécurité ; exploitation bornée |
| **Minimisation** | Pas de santé, logement, paiement réel, mineurs, responsables légaux |
| **Responsabilité** | Rôle DPO fictif + product owner fictif (voir `06-…`) |
| **Futur** | Registre des traitements ; éventuelle DPIA si élargissement ou risque élevé |
| **Déclencheurs DPIA (futurs)** | Introduction de mineurs ; données sensibles ; profilage ; nouveau traitement à risque élevé |

### Accessibilité

| Élément | Cadrage |
|---------|---------|
| **Populations** | Les cinq, avec attention usagers en situation de handicap |
| **Objectif** | Exigence d’accessibilité numérique pour parcours MVP |
| **Preuves futures** | Contrôles UX + QA (critère de sortie G2) |
| **Référentiel** | **À arbitrer Morris** (option candidate : alignement type RGAA / WCAG — non décidé) |

### Performance

| Élément | Cadrage |
|---------|---------|
| **Usages critiques** | Auth, catalogue, réservation, pilotage |
| **Pics** | Rentrée, examens, événements campus |
| **Attentes** | Temps de réponse « acceptables » à qualifier en conception/archi/QA — **pas de SLA chiffré ici** |
| **Preuves** | Tests de performance = critère sortie MVP |

### Sécurité

| Élément | Cadrage |
|---------|---------|
| Habilitations multi-niveaux | Séparation campus / national |
| Journalisation | Accès sensibles, flux identité |
| Intégrité flux identité | Erreurs, reprises, désynchronisations tracées |
| Futur | Analyse de risques / threat model en cycle sécurité |

### Release / RUN

| Élément | Cadrage |
|---------|---------|
| Release | Pilote démontrable + rollback testable |
| RUN | Logs, métriques, alertes minimales ; procédures RUN minimales ; support borné |
| Non-objectifs | ITSM/CMDB |

---

## 14. Hypothèses

| ID | Hypothèse | Statut |
|----|----------|--------|
| H-DF-01 | Quatre incréments suffisent pour respecter la réserve G2 sans réduire le MVP | Proposition — à valider Morris |
| H-DF-02 | La simulation identité peut être outillée progressivement (happy path puis non-happy-path) | Hypothèse |
| H-DF-03 | Le support/RUN borné peut être démontré sans ITSM | Hypothèse |
| H-DF-04 | Un référentiel d’accessibilité unique sera choisi avant UX Critical | Hypothèse |
| H-DF-05 | Les parcours P1–P8 couvrent le cœur MVP pour conception/UX | Hypothèse |

---

## 15. Dépendances

| Dépendance | Type | Commentaire |
|------------|------|-------------|
| Décisions G1–G4 / réserve G2 | Interne | Socle non négociable sans nouvelle décision Morris |
| Simulation identité | Structurante | Bloque une partie des preuves intégration/RUN |
| Choix référentiel accessibilité | Morris | Avant UX/QA accessibilité |
| Cycles conception → … → release | Méthode | Ordre non rigide ; déclencheurs réels |
| Aucun IdP réel | Externe fictif | Fournisseur fictif uniquement |

---

## 16. Principes de découpage incrémental

1. Chaque incrément apporte une **valeur démontrable**.
2. Aucun incrément ne **réduit** la cible MVP finale.
3. Les critères **intermédiaires** ≠ critères **finaux** G2.
4. Populations et capacités progressives, couverture **complète en sortie**.
5. Dépendances maîtrisées ; réversibilité relative ; risque proportionné.
6. Testabilité et observabilité dès que pertinent.
7. Pas de découpage par couche technique pure ; pas de micro-incréments artificiels.

Détail : `05-mvp-increment-trajectory.md`.

---

## 17. Résultats attendus par incrément (haut niveau)

| Incrément | Résultat attendu (haut niveau) |
|-----------|--------------------------------|
| **INC-01** | Socle identité multi-campus + catalogue opérable |
| **INC-02** | Réservation + notifications + exceptions |
| **INC-03** | Pilotage local et national |
| **INC-04** | Identité simulée complète + support/RUN borné + contribution aux critères transverses de sortie |

---

## 18. Critères de succès projet

1. Cible G2 démontrée sans réduction.
2. Cinq populations couvertes en sortie.
3. Trajectoire incrémentale exécutée avec critères intermédiaires tracés.
4. Séparation projet / méthode respectée.
5. Aucune promotion SFIA 3.0.
6. Gates Morris respectés avant conception, architecture, backlog, release.

---

## 19. Critères de sortie du cadrage détaillé

Le cadrage détaillé peut être considéré **complet** (après GO Morris) lorsque :

1. Les documents `04`–`07` + README sont cohérents avec G2/réserve.
2. La trajectoire incrémentale est **acceptée** ou **réorientée** explicitement.
3. Les gates DF proposés sont **acceptés, amendés ou rejetés**.
4. Les arbitrages listés §20 sont tranchés ou reportés avec traçabilité.
5. Aucune architecture/stack/backlog n’a été smuggled.
6. La suite de cycles candidats est claire.

---

## 20. Décisions Morris encore nécessaires

| ID | Décision | Urgence |
|----|----------|---------|
| DM-DF-01 | Valider le cadrage détaillé (`04`–`07`) | Immédiate (revue) |
| DM-DF-02 | Valider ou amender la trajectoire INC-01…04 | Immédiate |
| DM-DF-03 | Valider / amender les gates DF-G* | Immédiate |
| DM-DF-04 | Autoriser commit / push / PR de cette branche | Après validation fond |
| DM-DF-05 | Choisir le prochain cycle (conception vs autre) | Après DM-DF-01/02 |
| DM-DF-06 | Arbitrer référentiel accessibilité | Avant UX Critical |
| DM-DF-07 | Cleanup branche pré-cadrage (optionnel) | Indépendant |

---

## 21. Cycles suivants candidats

| Priorité pressentie | Cycle | Condition |
|---------------------|-------|-----------|
| 1 | Conception fonctionnelle | Après validation cadrage + GO |
| 2 | Architecture fonctionnelle | Si complexité flux le justifie |
| 3 | UX/UI | Après conception ; accessibilité activée |
| 4 | Backlog / user stories | Découpage INC → stories |
| … | Technique, DevOps, sécurité, QA, release, RUN | Selon déclencheurs |

Aucun cycle n’est lancé automatiquement.

---

## 22. Actions interdites avant gates

- Conception détaillée, architecture, backlog, UX/Figma, code.
- Choix de stack ou d’IdP réel.
- Réduction du MVP ou exclusion d’une population.
- Commit / push / PR / merge de cette branche sans GO Morris.
- Modification de la méthode SFIA.

---

## 23. Verdict documentaire

```text
DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED
```

**Observation :** le cadrage est prêt pour revue.
**Recommandation :** valider `04`–`07` puis enchaîner sur conception fonctionnelle.
**Décision :** réservée à Morris.
```

---

### Fichier : `projects/campus360/05-mvp-increment-trajectory.md`

```markdown
# Campus360 — Trajectoire incrémentale MVP

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `05-mvp-increment-trajectory.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition — **non validée** Morris |
| **Objet** | Satisfaire la réserve G2 sans réduire le MVP |

> Ce document définit une **trajectoire de cadrage** à haut niveau.
> Ce n’est **pas** un backlog, **pas** des user stories, **pas** un plan d’architecture.

---

## 1. Principes de découpage

1. **Non-réduction** : la cible MVP G2 reste intégrale en sortie.
2. **Valeur démontrable** à chaque incrément.
3. **Progressivité** des populations et capacités — couverture complète en fin de trajectoire.
4. **Dépendances maîtrisées** : pas d’incrément « orphelin ».
5. **Réversibilité relative** : éviter les paris techniques irréversibles (aucune stack imposée ici).
6. **Risque proportionné** : cas complexes identité/RUN en fin de trajectoire, pas exclus.
7. **Testabilité / observabilité** : chaque incrément doit pouvoir être prouvé.
8. **Pas de découpage couche technique** (front/back/infra) comme logique principale.
9. **Pas de micro-incréments** artificiels.
10. Critères **intermédiaires** ≠ critères **finaux** G2.

---

## 2. Critères de cohérence d’un incrément

| Critère | Question |
|---------|----------|
| Valeur démontrable | Que peut-on montrer à Morris / acteurs fictifs ? |
| Dépendances maîtrisées | Les prérequis sont-ils livrés ou simulés explicitement ? |
| Réversibilité | Peut-on ajuster sans dettes structurantes non gated ? |
| Risque proportionné | Le risque est-il justifié par la valeur ? |
| Testabilité | Existe-t-il des preuves fonctionnelles envisageables ? |
| Observabilité | Dispose-t-on de signaux minimaux si pertinent ? |
| Non-réduction MVP | Contribue-t-on à la cible finale sans la rogner ? |

---

## 3. Proposition d’incréments (recommandation)

**Nombre proposé : 4** — découle de l’analyse (socle → métier cœur → pilotage → durcissement identité/RUN).

| ID | Nom | Intention |
|----|-----|-----------|
| **INC-01** | Socle identité multi-campus & catalogue | Fonder le contexte national multi-campus et l’accès aux services |
| **INC-02** | Réservation, notifications & exceptions | Délivrer le parcours métier cœur |
| **INC-03** | Pilotage local & national | Exploiter la valeur multi-niveaux et multi-campus |
| **INC-04** | Identité simulée complète & support/RUN borné | Couvrir non-happy-path identité + exploitation bornée |

---

## 4. Détail des incréments

### INC-01 — Socle identité multi-campus & catalogue

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Authentification/autorisation de base ; rattachement campus ; catalogue publiable/consultable ; skeleton multi-campus |
| **Populations (progressif)** | Étudiant, personnel (consultation) ; gestionnaire & admin national (publication/admin légère) ; support/RUN (accès lecture minimal / présence rôle) |
| **Capacités** | Cap. 1–3 (authZ de base, multi-campus, catalogue) |
| **Hors cet incrément** | Réservation ; notifications métier ; pilotage consolidé ; non-happy-path identité complets ; RUN incidents |
| **Critères intermédiaires** | Au moins 2 campus fictifs ; 4 rôles opérationnels démontrés ; catalogue consultable ; aucune connexion IdP réelle |
| **Contribution à la cible finale** | Socle indispensable à toutes les capacités G2 |
| **Gate Morris pressenti** | DF-G4 (GO INC-01) — voir `07-…` |

### INC-02 — Réservation, notifications & exceptions

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Parcours réservation bout-en-bout ; notifications simples ; gestion d’exceptions |
| **Populations** | Étudiant & personnel (réserver) ; gestionnaire (exceptions/espaces) ; admin national (visibilité) ; support (lecture erreurs métier si exposées) |
| **Capacités** | Cap. 4–6 (réservation, notifications, exceptions ; amorces pilotage local) |
| **Dépendance** | INC-01 |
| **Hors cet incrément** | Pilotage national consolidé complet ; simulation identité non-happy-path complète ; RUN N1 complet |
| **Critères intermédiaires** | Création/modification/annulation réservation ; notification émise ; au moins un type d’exception traité ; tests fonctionnels du parcours P3/P4 amorçables |
| **Contribution** | Cœur de valeur usager |
| **Gate** | DF-G5 |

### INC-03 — Pilotage local & national

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Vues de pilotage local et consolidé national ; démonstration habilitations multi-niveaux sur données multi-campus |
| **Populations** | Gestionnaire (local) ; administrateur national (consolidé) ; autres populations en consultation selon droits |
| **Capacités** | Cap. 6 approfondie (pilotage) |
| **Dépendance** | INC-01, INC-02 |
| **Hors cet incrément** | BI avancée ; ITSM ; identité non-happy-path complète |
| **Critères intermédiaires** | Indicateurs d’occupation/exceptions locaux ; vue consolidée ≥2 campus ; séparation des privilèges campus/national prouvée |
| **Contribution** | Différenciation étalon vs projets bornés |
| **Gate** | DF-G6 |

### INC-04 — Identité simulée complète & support/RUN borné

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Couvrir le contrat d’intégration identité **complet** (cas G2) ; activer support/RUN borné ; préparer release/RUN readiness |
| **Populations** | Support/RUN pleinement exercé ; admin national ; impacts sur toutes les populations via sync identité |
| **Capacités** | Cap. 7–8 (identité simulée complète, support/RUN borné) |
| **Dépendance** | INC-01…03 (contexte métier pour donner sens aux flux) |
| **Hors cet incrément** | IdP réel ; ITSM/CMDB ; runbooks encyclopédiques |
| **Critères intermédiaires** | Scénarios : création/MAJ/désactivation, doublons, idempotence, erreur, reprise, désync, traçabilité, supervision ; incident de service + disponibilité + diagnostic N1 démontrables ; contribution explicite aux critères sortie sécurité/intégration/RUN/release |
| **Contribution** | Clôture des exigences G2 différenciantes |
| **Gate** | DF-G7 |

---

## 5. Matrice populations × incréments

| Population | INC-01 | INC-02 | INC-03 | INC-04 | Sortie MVP |
|------------|--------|--------|--------|--------|------------|
| Étudiant | Consult. | **Cœur** | Consult. | Impact sync | **Couverte** |
| Personnel | Consult. | **Cœur** | Consult. | Impact sync | **Couverte** |
| Gestionnaire campus | Admin légère | **Exceptions** | **Pilotage local** | Support collab. | **Couverte** |
| Admin national | Admin légère | Visibilité | **Pilotage national** | Supervision | **Couverte** |
| Support / RUN | Présence rôle | Lecture | Lecture | **Cœur** | **Couverte** |

Aucune population n’est exclue définitivement.

---

## 6. Matrice capacités × incréments

| Capacité | INC-01 | INC-02 | INC-03 | INC-04 |
|----------|--------|--------|--------|--------|
| AuthZ / multi-campus | **Base** | Étendu | Étendu | Durci (sync) |
| Catalogue | **Oui** | — | — | — |
| Réservation | — | **Oui** | — | — |
| Notifications | — | **Oui** | — | — |
| Exceptions | — | **Oui** | Suivi | — |
| Pilotage local/national | Amorcé | Amorcé | **Oui** | — |
| Identité simulée complète | Happy path minimal | — | — | **Complet** |
| Support/RUN borné | Stub rôle | — | — | **Oui** |

---

## 7. Dépendances entre incréments

```text
INC-01 → INC-02 → INC-03
                ↘
                 INC-04 (après INC-02 au minimum ; recommandé après INC-03)
```

**Règle :** INC-04 ne doit pas précéder le métier cœur (sinon simulation sans valeur métier). INC-03 peut être allégé si Morris priorise INC-04 plus tôt — **option B** ci-dessous.

---

## 8. Critères intermédiaires vs finaux

| Niveau | Rôle |
|--------|------|
| **Intermédiaire (par INC)** | Autoriser la clôture d’un incrément et le passage au suivant |
| **Final (G2)** | Déclarer le MVP atteint — liste des 12 critères de sortie du pré-cadrage |

Les critères intermédiaires **ne remplacent jamais** les critères finaux.

### Critères de non-régression

- Chaque nouvel INC doit préserver les parcours validés des INC précédents.
- Les habilitations déjà démontrées ne doivent pas régresser.
- Les campus fictifs et rattachements restent cohérents.

---

## 9. Éléments explicitement différés (hors MVP / hors trajectoire)

- Logement, resto complète, paiement réel, IoT.
- ITSM / CMDB / centre de support avancé.
- IdP réel / protocole définitif.
- Stack, architecture distribuée, multi-région technique.
- Incréments post-MVP (EVOL) : événements complets, etc.

---

## 10. Gates Morris entre incréments (propositions)

| Gate | Objet |
|------|-------|
| DF-G4 | GO démarrage / clôture INC-01 |
| DF-G5 | GO INC-02 |
| DF-G6 | GO INC-03 |
| DF-G7 | GO INC-04 |
| DF-G8 | GO déclaration sortie MVP (critères finaux) |

Détail et preuves : `07-risks-dependencies-and-gates.md`.
Ces gates sont des **propositions**, pas des décisions validées.

---

## 11. Risques de découpage

| Risque | Mitigation |
|--------|------------|
| Réduire le MVP « pour aller plus vite » | Réserve G2 ; revue DF-G* |
| Reporter indéfiniment Support/RUN | INC-04 obligatoire avant sortie MVP |
| Faire INC-04 trop tôt | Dépendance métier INC-02+ |
| Sur-découper (>4) | Recommandation 4 ; option C seulement si Morris l’exige |
| Architecture implicite via découpage | Interdiction stack/archi dans ce doc |

---

## 12. Options alternatives

| Option | Description | Forces | Faiblesses |
|--------|-------------|--------|------------|
| **A — 4 INC (recommandée)** | Socle → métier → pilotage → identité/RUN | Équilibre valeur / risque ; 5 pops couvertes | INC-04 dense |
| **B — 3 INC** | Fusion pilotage dans INC-02 ; INC-03 = identité/RUN | Plus court | Charge INC métier trop lourde ; risque de qualité |
| **C — 4 INC avec identité non-happy-path partagée INC-02/04** | Amorcer erreurs identité dès INC-02 | Risque identité plus tôt | Complexité précoce, moins de valeur usager |

---

## 13. Recommandation (non décision)

**Recommandation :** adopter l’**option A (4 incréments INC-01…04)** comme trajectoire de référence pour la suite (conception, backlog).

**Justification :** respecte la réserve G2 ; conserve les cinq populations ; place le métier cœur tôt ; reporte le durcissement identité/RUN sans l’exclure ; évite le sur-découpage.

**Décision attendue Morris :** DM-DF-02 — valider, amender ou choisir B/C.
```

---

### Fichier : `projects/campus360/06-governance-and-stakeholders.md`

```markdown
# Campus360 — Gouvernance et parties prenantes

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `06-governance-and-stakeholders.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition de gouvernance — **non validée** Morris |
| **Autorité ultime** | Morris (L0) |

> Acteurs **fictifs par rôle**. Aucune personne réelle inventée.

---

## 1. Autorité de décision

| Niveau | Acteur | Pouvoir |
|--------|--------|---------|
| **L0** | **Morris** | GO/NO-GO structurants ; scope ; gates DF ; commit/push/PR/merge ; cycles suivants ; capitalisation méthode |
| L1 fictif | Product Owner Campus360 | Priorisation produit dans le cadre G2 ; préparation des arbitrages Morris |
| L2 fictifs | Responsables domaine / transverse | Propositions, preuves, exécution bornée |
| Exécution | Cursor / ChatGPT | Analyse et exécution bornée — **non décideurs** |

---

## 2. Acteurs projet fictifs nécessaires

| Rôle fictif | Mission |
|-------------|---------|
| **Product Owner (PO)** | Valeur MVP, trajectoire INC, arbitrages produit préparés |
| **Responsable métier campus** | Besoins gestionnaire / usagers campus |
| **Responsable national** | Cohérence multi-campus, pilotage consolidé |
| **Responsable identité / intégration** | Contrat simulation identité, cas non-happy-path |
| **RSSI fictif** | Exigences sécurité, habilitations, journaux |
| **DPO fictif** | Minimisation, majeurs-only, déclencheurs DPIA |
| **Référent accessibilité** | Objectifs et preuves accessibilité |
| **Responsable RUN / release** | Support borné, observabilité minimale, rollback |
| **QA Lead fictif** | Stratégie de preuves (sans plan détaillé ici) |
| **SFIA Method Observer** | Observations méthode — sans promotion baseline |

---

## 3. Représentation des cinq populations

| Population | Représentant fictif | Mode |
|------------|---------------------|------|
| Étudiant | Groupe usagers étudiants (fictif) | Besoins consultation via PO / métier campus |
| Personnel | Groupe usagers personnels (fictif) | Idem |
| Gestionnaire de campus | Responsable métier campus | Direct |
| Administrateur national | Responsable national | Direct |
| Support / RUN | Responsable RUN / release | Direct |

---

## 4. Matrice RACI (synthèse)

Légende : **R** Responsible · **A** Accountable · **C** Consulted · **I** Informed

| Décision / activité | Morris | PO | Métier campus | National | Identité | RSSI | DPO | Access. | RUN/Release | QA |
|---------------------|--------|-----|---------------|----------|----------|------|-----|---------|-------------|-----|
| Scope MVP G2 | **A** | C | C | C | C | C | C | C | C | I |
| Trajectoire INC | **A** | R | C | C | C | C | I | I | C | C |
| GO cycle suivant | **A** | R | C | C | C | C | C | C | C | C |
| Commit / PR / merge | **A** | R | I | I | I | I | I | I | I | I |
| Exigences sécurité | A* | C | I | C | C | **R** | C | I | C | C |
| Exigences RGPD | A* | C | I | I | C | C | **R** | I | I | I |
| Accessibilité | A* | C | C | I | I | I | I | **R** | I | C |
| Simulation identité | A* | C | I | C | **R** | C | C | I | C | C |
| RUN readiness | A* | C | I | I | C | C | I | I | **R** | C |
| Capitalisation SFIA | **A** | I | I | I | I | I | I | I | I | I |

\* Morris reste A sur tout arbitrage structurant ; R opérationnel préparé par le rôle métier/transverse.

---

## 5. Gouvernance nationale / campus

| Niveau | Responsabilités |
|--------|-----------------|
| **National** | Règles d’habilitation transverses ; catalogue de politiques ; pilotage consolidé ; arbitrage inter-campus |
| **Campus** | Exploitation locale des services/espaces ; exceptions locales ; qualité de service locale |
| **Règle** | Une donnée métier est rattachée à un campus ; le national voit/consolide selon habilitation — sans effacer la responsabilité locale |

---

## 6. Responsabilités par domaine

### Produit

- PO : cohérence MVP, non-réduction G2, préparation gates DF.
- Métier campus / national : validation métier des parcours cadrés.

### Sécurité / RGPD / accessibilité

- RSSI : modèle d’habilitation, journaux, exigences d’analyse future.
- DPO : minimisation, majeurs-only, registre futur, déclencheurs DPIA.
- Accessibilité : objectifs, preuves UX/QA, options de référentiel pour Morris.

### Intégration identité

- Responsable identité : couverture simulation complète ; traçabilité ; pas d’IdP réel au MVP.

### RUN / release

- Responsable RUN/release : support borné ; logs/métriques/alertes minimales ; rollback testable ; pas d’ITSM.

---

## 7. Instances

| Instance | Objet | Fréquence indicative |
|----------|-------|----------------------|
| **Arbitrage Morris** | Gates DF, scope, cycles, Git | À chaque jalon structurant |
| **Comité produit fictif** | Alignement PO / métiers / transverses | Par incrément (préparation) |
| **Revue transverse** | Sécurité, RGPD, accessibilité, RUN | Avant GO INC à risque (surtout INC-04) |
| **Validation de preuves** | QA / démonstrations | Clôture d’INC |

Pas de calendrier figé (pas de dates imposées).

---

## 8. Règles d’escalade

1. Tout risque de **réduction du MVP** → escalade immédiate Morris.
2. Tout besoin d’**architecture / stack / IdP réel** → stop + gate Morris.
3. Désaccord national vs campus sur habilitations → arbitrage Morris.
4. Élargissement hors G2 (logement, paiement, ITSM…) → NO-GO sauf nouvelle décision.
5. Friction méthodologique SFIA → observation documentée ; CAPA seulement avec GO Morris.

---

## 9. Décisions réservées à Morris

- Validation du cadrage détaillé et de la trajectoire INC.
- Activation des cycles suivants.
- GO commit / push / PR / merge.
- Choix référentiel accessibilité (si plusieurs options).
- Toute décision d’architecture / stack / fournisseur réel.
- Promotion d’un apprentissage en standard SFIA.
- Cleanup de branches.
- Réouverture ou amendement de G2.

---

## 10. Décisions délégables (dans le cadre G2)

- Rédaction de specs de conception **après** GO cycle.
- Priorisation fine **intra-incrément** (sans sortir du scope INC).
- Choix de formulations documentaires non structurantes.
- Organisation des revues fictives de préparation.

Toute délégation cesse dès qu’un gate DF est requis.

---

## 11. Preuves attendues par type de gate (haut niveau)

| Type de gate | Preuves typiques |
|--------------|------------------|
| Validation cadrage | Docs `04`–`07` cohérents ; revue ChatGPT/handoff |
| GO INC | Objectifs INC ; critères intermédiaires ; dépendances OK ; démo ou preuves QA selon maturité |
| GO cycle suivant | Brief cycle ; hors périmètre ; profil justifié |
| GO release | Release notes ; rollback testé ; RUN readiness minimale |
| GO sortie MVP | Matrice des 12 critères G2 ; non-régression ; 5 populations |

Détail numéroté : `07-risks-dependencies-and-gates.md`.

---

## 12. Séparation projet / méthode / capitalisation

| Couche | Contenu | Autorité |
|--------|---------|----------|
| **Projet** | Campus360 sous `projects/campus360/` | Morris + rôles fictifs |
| **Méthode SFIA** | Documents canoniques v2.6 | Morris via CAPA |
| **Observations** | REX dans handoff / docs projet | Non binding |
| **Capitalisation** | Standards réutilisables | Cycle CAPA + GO Morris uniquement |

Campus360 **n’est pas** un véhicule SFIA 3.0.
```

---

### Fichier : `projects/campus360/07-risks-dependencies-and-gates.md`

```markdown
# Campus360 — Risques, dépendances et gates

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `07-risks-dependencies-and-gates.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition — gates DF **non validés** Morris |
| **Série de gates** | DF-G1 … DF-G12 (nouvelle série, distincte de G1–G7 pré-cadrage) |

---

## 1. Registre des risques

| ID | Catégorie | Risque | Impact | Mitigation | Rôle |
|----|-----------|--------|--------|------------|------|
| R01 | Produit | Perte de clarté sur la valeur usager (catalogue/réservation) | Élevé | INC-02 tôt ; démos parcours | PO |
| R02 | Périmètre | Réduction implicite du MVP | Critique | Réserve G2 ; gates DF ; stop conditions | Morris / PO |
| R03 | Périmètre | Scope creep (logement, paiement, ITSM) | Élevé | Hors MVP explicite | PO / Morris |
| R04 | Multi-campus | Confusion responsabilité campus/national | Élevé | Règles rattachement ; RACI | National / campus |
| R05 | Habilitation | Élévation de privilèges cross-campus | Critique | Séparation niveaux ; preuves INC-03/sécurité | RSSI |
| R06 | Identité | Simulation incomplète (happy path only) | Élevé | INC-04 obligatoire avant sortie | Identité |
| R07 | Identité | Glissement vers IdP réel | Élevé | Interdiction MVP ; gate | Morris |
| R08 | RGPD | Introduction de mineurs ou données excessives | Critique | Majeurs-only ; minimisation ; DPO | DPO |
| R09 | Accessibilité | Report indéfini des preuves | Moyen | Critère sortie G2 ; gate avant UX | Access. / QA |
| R10 | Performance | Sous-estimation des pics multi-campus | Moyen | Cadrage pics ; tests futurs | QA / Archi future |
| R11 | Sécurité | Journaux insuffisants sur flux sensibles | Élevé | Exigences dès conception ; cycle sécurité | RSSI |
| R12 | Release/RUN | Release sans rollback testé | Élevé | Critère G2 ; DF-G12 | RUN/Release |
| R13 | RUN | Dérive vers ITSM | Moyen | Périmètre borné support | RUN |
| R14 | Découpage | Trop d’incréments / micro-découpage | Moyen | Plafond raisonnable (reco 4) | PO |
| R15 | Découpage | INC-04 trop tardif → dette identité | Moyen | Ne pas clôturer MVP sans INC-04 | PO |
| R16 | Méthode | Confusion projet / capitalisation SFIA | Moyen | Séparation ; CAPA gated | Method observer |
| R17 | Méthode | Forçage des 15 cycles | Moyen | Activation par déclencheur | PO / Morris |
| R18 | Gouvernance | Démarrage conception sans GO | Élevé | DF-G8 | Morris |

---

## 2. Dépendances

### Internes

| Dépendance | De → Vers |
|------------|-----------|
| Pré-cadrage G1–G4 / réserve | Socle de ce cadrage |
| INC-01 | INC-02, 03, 04 |
| INC-02 | INC-03, 04 |
| Docs `04`–`07` | Revue Morris avant cycles suivants |
| Simulation identité | Preuves intégration, sécurité, RUN |

### Externes fictives

| Dépendance | Nature |
|------------|--------|
| Fournisseur d’identité **fictif** | Contrat + simulation — pas de connexion réelle |
| Campus fictifs (données) | Jeux de données multi-campus |
| Aucun SI académique réel | Hors MVP |

---

## 3. Hypothèses à valider

| ID | Hypothèse | Validation pressentie |
|----|-----------|----------------------|
| HA-01 | 4 INC suffisent | Revue Morris DM-DF-02 |
| HA-02 | Accessibilité prouvable sans choix immédiat du référentiel | Avant UX : DM-DF-06 |
| HA-03 | Support borné suffisant vs attentes « nationales » | Revue INC-04 |
| HA-04 | Performance testable sans SLA chiffré précoce | Cycle perf/QA |

---

## 4. Signaux d’alerte

- Demande d’exclure une population « pour simplifier ».
- Demande d’IdP réel « juste pour démarrer ».
- Apparition de modules hors G2 dans un brief INC.
- Stories techniques sans valeur métier (découpage couche).
- Absence de critères intermédiaires dans un GO INC.
- Confusion entre critère intermédiaire et sortie MVP.
- Proposition de modifier SFIA « via Campus360 ».

---

## 5. Gates Morris proposés (série DF)

> **Proposition de gouvernance** — à valider / amender / rejeter par Morris.
> Ne remplacent pas G1–G7 historiques ; les complètent pour la suite.

| Gate | Objet | Preuves attendues | Statut |
|------|-------|-------------------|--------|
| **DF-G1** | Validation du cadrage détaillé (`04`–`07` + README) | Handoff FULL ; cohérence G2/réserve | **À valider** |
| **DF-G2** | Validation trajectoire INC-01…04 (ou alternative) | Doc `05` ; matrice pops/capacités | **À valider** |
| **DF-G3** | Validation gates DF et RACI | Docs `06`–`07` | **À valider** |
| **DF-G4** | GO INC-01 | Objectifs ; critères intermédiaires ; hors scope | Proposition |
| **DF-G5** | GO INC-02 | Dépendance INC-01 ; parcours réservation | Proposition |
| **DF-G6** | GO INC-03 | Pilotage local/national ; habilitations | Proposition |
| **DF-G7** | GO INC-04 | Plan simulation complète + RUN borné | Proposition |
| **DF-G8** | GO cycle conception fonctionnelle | Brief cycle ; hors périmètre | Proposition |
| **DF-G9** | GO architecture fonctionnelle (si déclenchée) | Justification complexité | Proposition |
| **DF-G10** | GO UX/UI (+ accessibilité cadrée) | Parcours ; option référentiel tranchée ou reportée | Proposition |
| **DF-G11** | GO backlog / architecture technique / DevOps (selon cycle) | Périmètre INC ; pas de stack smuggled sans gate dédié | Proposition |
| **DF-G12** | GO release pilote / RUN readiness / sortie MVP | Critères G2 ; rollback ; 5 pops | Proposition |

**Git (hors série DF mais rappelés) :** commit / push / PR de `project/campus360-detailed-framing` = décisions Morris **séparées**, non autorisées dans l’exécution courante.

---

## 6. Stop conditions

STOP et escalade Morris si :

1. Réduction du MVP ou exclusion d’une population.
2. Nécessité de choisir une architecture / stack / IdP réel pour continuer.
3. Contradiction avec G1–G4 / réserve G2.
4. Demande de modifier la méthode SFIA.
5. Scope impossible à fermer.
6. Trajectoire nécessitant un découpage artificiel non justifiable.
7. Action Git distante projet sans GO.

---

## 7. Critères de passage vers les cycles suivants

| Cycle cible | Prérequis de passage |
|-------------|----------------------|
| **Conception fonctionnelle** | DF-G1/G2 (ou équivalent validé) ; DF-G8 |
| **Architecture fonctionnelle** | Spec fonctionnelle ; complexité multi-domaines justifiée ; DF-G9 |
| **UX/UI** | Parcours priorisés ; accessibilité cadrée ; DF-G10 ; pas de Figma sans GO source |
| **Backlog / user stories** | Conception (± UX) ; trajectoire INC acceptée ; DF-G11 partiel |
| **Architecture technique** | Arbitrages fonctionnels ; gate stack dédié si irréversible |
| **Intégration / DevOps** | Besoin pipeline/env réel ; contrat identité simulé |
| **QA** | Stories/critères ; profil selon risque (Critical probable en sortie MVP) |
| **Sécurité** | Surfaces authZ/identité ; pas de threat model avant cycle dédié |
| **Release** | Artefacts ; rollback ; DF-G12 partiel |
| **RUN readiness** | Observabilité minimale ; support borné ; DF-G12 |

---

## 8. Lien avec les blocs transverses

| Bloc | Risques liés | Gate / cycle |
|------|--------------|--------------|
| RGPD | R08 | Conception, sécurité, QA ; DPIA si déclencheur |
| Accessibilité | R09 | UX, QA ; DM-DF-06 |
| Performance | R10 | Archi, QA, observabilité |
| Sécurité | R05, R11 | Sécurité, INC-03/04 |
| Intégration | R06, R07 | DevOps, INC-04 |
| Release/RUN | R12, R13 | Release, RUN, INC-04 |

---

## 9. Décisions Morris attendues (immédiat)

1. **DF-G1** — valider le cadrage détaillé.
2. **DF-G2** — valider la trajectoire (option A recommandée).
3. **DF-G3** — valider la série de gates DF.
4. Autoriser ou non commit/push/PR de la branche `project/campus360-detailed-framing`.
5. Désigner le prochain cycle (recommandation : conception fonctionnelle).

---

## 10. Verdict

Registre et gates **prêts pour arbitrage Morris**.
Aucune auto-validation des gates DF dans cette exécution.
```

---

## 8. Décisions Morris attendues

1. Valider cadrage détaillé (DF-G1).
2. Valider/amender trajectoire INC (DF-G2) — reco option A.
3. Valider/amender gates DF (DF-G3).
4. Autoriser ou non commit/push/PR de `project/campus360-detailed-framing`.
5. Désigner prochain cycle (reco : conception fonctionnelle).
6. Référentiel accessibilité (DM-DF-06) — avant UX Critical.

## 9. Réserves

1. Documents non versionnés (volontaire — pas de commit).
2. Snapshot historique G7 dans docs pré-cadrage inchangé.
3. Gates DF non validés.

## 10. Verdict

```text
DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED
```
