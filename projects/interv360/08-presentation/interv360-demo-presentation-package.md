# Interv360 — Demo Presentation Package

**Projet** : Interv360  
**Type** : Package de présentation externe  
**Version** : Batch 04  
**Statut** : Prêt à présenter

---

## 1. Objectif de la présentation

Présenter le démonstrateur Interv360 comme un **prototype local** permettant d'illustrer un parcours SAV structuré, lisible et pilotable.

L'interlocuteur n'a pas besoin de connaître les cycles INC ou les batches internes : ce document résume ce que le démonstrateur montre aujourd'hui et comment le présenter.

---

## 2. Message clé

Interv360 démontre qu'un flux SAV peut être rendu **lisible, pilotable et démontrable localement**, avant toute intégration backend, CRM ou production.

Le démonstrateur sert à :

- valider des principes fonctionnels ;
- discuter d'un parcours cible ;
- préparer des décisions d'architecture sans engager trop tôt une solution complexe.

---

## 3. Ce que le démonstrateur montre

| Zone | Contenu |
|------|---------|
| Readiness | Critères de préparation, checklist, capacités et limites |
| Scénario guidé | Fil conducteur en 6 étapes avec progression visuelle |
| Multi-demandes | 3 demandes fictives (`SAV-DEMO-001` à `003`) |
| Sélection | Demande active pilotant détail, workflow et journal |
| Filtres / recherche | Filtre par statut et recherche locale en mémoire |
| Indicateurs | Priorité et criticité fictives par demande |
| Fiche détail | Informations enrichies (catégorie, canal, impact, centre démo) |
| Workflow nominal | STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 |
| Journal local | Événements fictifs filtrés par demande |
| Reset | Restauration seed, filtres, recherche, scénario et sélection |

---

## 4. Déroulé conseillé

1. Présenter l'objectif et le message clé.
2. Montrer le **panneau readiness** (`#section-readiness`).
3. Suivre le **scénario guidé** (`#section-scenario`).
4. Sélectionner une demande dans la liste.
5. Montrer **filtres et recherche** sur les demandes fictives.
6. Consulter la **fiche détail** et les indicateurs.
7. Exécuter une **transition workflow** sur `SAV-DEMO-001`.
8. Vérifier le **journal local** pour la demande active.
9. **Réinitialiser** la démo pour conclure sur la rejouabilité.
10. Conclure sur limites assumées et trajectoire possible.

Durée indicative : 10 à 15 minutes.

---

## 5. Capacités démontrées

| Capacité | Démontrée | Commentaire |
|----------|-----------|-------------|
| Multi-demandes | Oui | 3 demandes fictives locales |
| Workflow nominal | Oui | STAT-01 → STAT-06, une action à la fois |
| Journal local | Oui | Filtré par demande sélectionnée |
| Filtres / recherche | Oui | Local en mémoire, combinable |
| Priorité / criticité | Oui | Indicateurs fictifs (Batch 01) |
| Scénario guidé | Oui | Pilotage présentateur (Batch 02) |
| Readiness | Oui | Package de démo intégré (Batch 03) |
| Parcours readonly | Oui | Qualification, planification, intervention, compte rendu |
| Backend / API | Non | Hors périmètre volontaire |
| CRM / production | Non | Hors périmètre volontaire |

---

## 6. Limites assumées

- **Données fictives uniquement** — aucune donnée réelle, aucun client réel.
- **Fonctionnement local** — persistance via `localStorage`, pas de serveur.
- **Pas de backend** — aucune API, aucune base serveur, aucun SQL.
- **Pas de CRM** — aucune intégration externe.
- **Pas d'authentification** — pas de multi-utilisateur.
- **Pas de production** — le démonstrateur n'est pas une solution opérationnelle.
- **Pas de STAT-05 / STAT-07 / STAT-08** — parcours nominal limité et assumé.

Ces limites sont **volontaires** : elles permettent de sécuriser le périmètre de démonstration.

---

## 7. Valeur SFIA démontrée

Le projet Interv360 illustre la méthode SFIA Controlled Delivery :

| Principe | Illustration sur Interv360 |
|----------|---------------------------|
| Cadrage progressif | INC-01 : micro-cycles pour stabiliser démonstrateur et garde-fous |
| Fast Delivery | INC-02 à INC-04 : incréments clairs, faible risque |
| Batch Delivery | Batches 01 à 04 : lots cohérents, un document par lot |
| Adaptation au risque | Plus de contrôle au début, accélération quand le cadre est stable |
| Garde-fous conservés | Build, tests, périmètre explicité à chaque lot |
| Post-merge léger | Traçabilité dans le document unique, sans summary séparé |

Message pour l'interlocuteur : **la méthode ne se juge pas à la quantité de documents, mais à sa capacité à sécuriser les décisions importantes tout en livrant vite quand le cadre est stable.**

---

## 8. Trajectoire possible

Options envisageables après ce démonstrateur :

| Option | Description |
|--------|-------------|
| Scénarios métier alternatifs | Enrichir les cas fictifs sans changer l'architecture |
| Architecture backend | Cadrer API, persistance serveur, intégrations |
| Modèle de données cible | Définir entités et statuts hors démo locale |
| Intégration CRM future | Préparer les points de jonction sans les implémenter |
| Gestion des rôles | Technicien, superviseur, client — hors périmètre actuel |
| Prototype connecté | Passer d'un démonstrateur local à un prototype intégré |

Aucune de ces options n'est engagée par le démonstrateur actuel.

---

## 9. Lancement technique

Depuis `projects/interv360/app/` :

```bash
npm install
npm run dev
```

Validation locale :

```bash
npm run build
npm run test -- --run
```

Référence applicative : `projects/interv360/app/README.md`

---

## 10. Documents associés

| Document | Usage |
|----------|-------|
| [`interv360-demo-script.md`](./interv360-demo-script.md) | Script de démonstration pas à pas |
| [`interv360-demo-one-page-summary.md`](./interv360-demo-one-page-summary.md) | Synthèse courte partageable |
| [`../app/README.md`](../app/README.md) | Documentation technique applicative |
| [`../04-delivery/batch-03-demo-readiness-package.md`](../04-delivery/batch-03-demo-readiness-package.md) | Traçabilité Batch 03 |

---

## 11. Conclusion

Interv360 est un **démonstrateur local prêt à être présenté**.

Il ne prétend pas être une solution production, mais il montre un parcours SAV structuré, maîtrisé et rejouable — avec des limites explicites et une trajectoire ouverte pour la suite.
