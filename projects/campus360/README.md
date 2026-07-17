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
