# Checklist — Architecture fonctionnelle détaillée

**Type** : Checklist SFIA  
**Domaine** : Architecture fonctionnelle  
**Statut** : Draft  
**Usage** : Réutilisable

---

## 1. Objectif

Cette checklist permet de **vérifier la qualité et la complétude** d'un cycle d'architecture fonctionnelle détaillée.

Elle s'utilise :

- avant d'ouvrir le cycle ;
- pendant la production des livrables ;
- avant la synthèse ;
- avant la clôture ;
- avant la préparation de PR.

Elle **ne remplace pas** la relecture métier ni la validation humaine.

---

## 2. Avant de démarrer

- [ ] Contexte projet disponible
- [ ] Besoin métier clarifié
- [ ] Périmètre connu ou hypothèses explicites
- [ ] Acteurs identifiés
- [ ] Processus existants relus (BPMN ou équivalent)
- [ ] ADR existantes relues
- [ ] Exclusions connues documentées
- [ ] Branche Git dédiée créée
- [ ] Working tree clean
- [ ] Aucun secret exposé
- [ ] Méthode et standard des livrables relus (`functional-architecture-method.md`, `functional-architecture-deliverables-standard.md`)

---

## 3. Pendant la production

- [ ] Le périmètre est documenté (`functional-architecture-scope.md`)
- [ ] Les domaines sont distincts (`functional-domains.md`)
- [ ] Les objets métier sont nommés (`business-objects.md`)
- [ ] Les statuts sont séparés des indicateurs (`status-and-transitions.md`)
- [ ] Les transitions sont cohérentes et traçables
- [ ] Les intégrations sont décrites fonctionnellement (`integration-functional-view.md`)
- [ ] La source de vérité est identifiée
- [ ] Les vues de pilotage sont décrites (`dashboard-and-alerts.md`)
- [ ] Les exclusions sont rappelées dans chaque livrable pertinent
- [ ] Aucune dérive technique n'est introduite
- [ ] Aucun backlog n'est créé
- [ ] Aucun livrable projet hors périmètre architecture fonctionnelle n'est modifié sans raison

---

## 4. Avant synthèse

- [ ] Tous les livrables intermédiaires existent (scope → dashboard)
- [ ] Les termes sont cohérents entre documents
- [ ] Les règles structurantes sont alignées avec RG et ADR
- [ ] Les ADR sont respectées, non contredites
- [ ] Les points ouverts sont identifiés
- [ ] Aucun livrable n'introduit de contradiction avec un autre
- [ ] Les matrices (domaines, objets, statuts, ADR) sont alignées

---

## 5. Avant clôture

- [ ] La synthèse consolide sans ajouter de décision structurante (`functional-architecture-summary.md`)
- [ ] La clôture liste les livrables produits (`2026-06-28-functional-architecture-cycle-closure.md`)
- [ ] La clôture distingue acquis et points ouverts
- [ ] La phase suivante est identifiée
- [ ] Les exclusions sont confirmées
- [ ] Les garde-fous du cycle sont rappelés
- [ ] L'état Git est propre
- [ ] Les commits sont atomiques et messageés de façon claire
- [ ] Le commit de clôture est prêt

---

## 6. Interdits à vérifier

- [ ] Aucun fichier `.env` modifié
- [ ] Aucun secret affiché ou commité
- [ ] Aucun code applicatif créé
- [ ] Aucune API créée
- [ ] Aucun SQL créé
- [ ] Aucun modèle technique créé
- [ ] Aucun BPMN créé ou modifié (sauf cycle processus dédié)
- [ ] Aucun SVG modifié
- [ ] Aucune user story créée
- [ ] Aucun backlog créé
- [ ] Aucun cas ou scénario de test créé
- [ ] Aucune maquette UI finale créée
- [ ] Aucun composant front créé
- [ ] Aucune publication Notion réalisée
- [ ] Aucun appel API Notion réalisé
- [ ] Aucun planning de delivery ouvert

---

## 7. Critères de validation

Le cycle est **validable documentairement** lorsque :

| Critère | Validé |
|---------|:------:|
| 8 livrables présents selon le standard | ☐ |
| Périmètre et exclusions cohérents sur scope, synthèse, clôture | ☐ |
| Domaines à responsabilités distinctes | ☐ |
| Objets métier nommés et reliés | ☐ |
| Statuts / indicateurs distingués | ☐ |
| Intégrations fonctionnelles sans glissement technique | ☐ |
| Dashboard décrit comme non source de vérité | ☐ |
| ADR intégrées ou explicitement hors périmètre | ☐ |
| Interdits vérifiés (section 6) | ☐ |
| Branche prête pour revue / PR | ☐ |

---

## 8. Prochaine phase possible

Après clôture validée, phases **possibles** — non déclenchées automatiquement :

| Phase | Objectif |
|-------|----------|
| UX/UI | Parcours et écrans à partir du fonctionnel stabilisé |
| Spécifications fonctionnelles détaillées | Règles et cas métier approfondis |
| Cadrage technique | Hypothèses d'architecture et stack |
| Backlog | Découpage delivery |
| Tests | Stratégie et cas de test |
| Delivery | Implémentation |

**Capitalisation méthode SFIA (recommandée après merge) :** templates, prompts, enrichissement du README méthodes.

---

*Checklist SFIA — Architecture fonctionnelle détaillée — Draft — Réutilisable.*
