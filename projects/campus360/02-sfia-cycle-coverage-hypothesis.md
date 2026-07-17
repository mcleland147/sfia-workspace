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
