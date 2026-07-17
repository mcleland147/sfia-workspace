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
