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
