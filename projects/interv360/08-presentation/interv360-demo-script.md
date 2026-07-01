# Interv360 — Demo Script

**Durée indicative** : 10–15 minutes  
**Public** : interlocuteur métier ou technique, sans connaissance des cycles internes  
**Prérequis** : application lancée en local

---

## 1. Préparation

- Lancer l'application depuis `projects/interv360/app/` : `npm run dev`.
- Vérifier que les **3 demandes fictives** sont visibles.
- Si besoin, cliquer sur **Réinitialiser la démo**.
- Vérifier que le scénario guidé est à **l'étape 1**.
- Ouvrir la navigation interne si utile (Readiness, Scénario, Demande, Journal).

---

## 2. Introduction orale

Phrase proposée :

> « Interv360 est ici présenté comme un démonstrateur local. L'objectif n'est pas de montrer une solution production, mais d'illustrer un parcours SAV structuré, lisible et pilotable. Toutes les données sont fictives et le fonctionnement reste local. »

---

## 3. Déroulé

### Étape 1 — Readiness

**Action** : montrer le panneau readiness (`#section-readiness`).

**Message** :

> « La démo indique elle-même les capacités disponibles, une checklist de présentation et les limites assumées. On sait immédiatement ce qui est démontrable et ce qui reste hors périmètre. »

**Points à montrer** : badge « Démo prête », critères, distinction Démontré / Fictif / Hors périmètre.

---

### Étape 2 — Scénario guidé

**Action** : montrer le scénario guidé et avancer d'une étape si utile.

**Message** :

> « Un fil conducteur aide le présentateur à suivre l'ordre recommandé sans mémoriser toute l'interface. »

---

### Étape 3 — Multi-demandes

**Action** : montrer la liste des demandes SAV.

**Message** :

> « On n'est plus sur une demande unique : la liste permet de simuler plusieurs situations SAV fictives, avec des statuts différents. »

**Points à montrer** : `SAV-DEMO-001` (STAT-01), `SAV-DEMO-002` (STAT-02), `SAV-DEMO-003` (STAT-06).

---

### Étape 4 — Filtres et recherche

**Action** : filtrer par `STAT-02`, puis rechercher `SAV-DEMO-001`, puis effacer.

**Message** :

> « Les filtres et la recherche restent locaux, en mémoire, mais ils rendent la démonstration plus exploitable pour retrouver une demande ou isoler un statut. »

---

### Étape 5 — Détail demande

**Action** : sélectionner `SAV-DEMO-001`.

**Message** :

> « La fiche permet de lire les informations principales, les indicateurs de priorité et criticité, et le contexte fictif enrichi. »

---

### Étape 6 — Workflow

**Action** : cliquer sur **Qualifier la demande** (STAT-01 → STAT-02).

**Message** :

> « Le workflow nominal reste volontairement simple et contrôlé : une seule action visible à la fois, sur le parcours STAT-01 à STAT-06. »

---

### Étape 7 — Journal

**Action** : descendre jusqu'au journal (`#section-journal`).

**Message** :

> « Chaque action locale est tracée dans un journal fictif filtré par demande. On peut montrer la traçabilité sans backend. »

---

### Étape 8 — Reset

**Action** : cliquer sur **Réinitialiser la démo**.

**Message** :

> « Le reset permet de rejouer la démonstration proprement : données seed, filtres, recherche, scénario et sélection par défaut. »

---

## 4. Points d'attention

- Ne **pas** présenter le démonstrateur comme une solution production.
- Rappeler que les **données sont fictives**.
- Rappeler qu'il n'y a **pas d'intégration CRM** ni d'API.
- Insister sur la **maîtrise du périmètre** et les garde-fous assumés.
- Ne pas promettre de fonctionnalités listées en « Hors périmètre » dans le panneau readiness.

---

## 5. Conclusion orale

Phrase proposée :

> « Le démonstrateur permet aujourd'hui de discuter du parcours, des capacités attendues et des prochaines décisions, sans dépendre encore d'une architecture cible complète. La suite pourrait porter sur des scénarios métier plus riches, une architecture backend ou une intégration CRM — mais ce n'est pas l'objet de cette démo. »

---

## 6. Références

- Package complet : [`interv360-demo-presentation-package.md`](./interv360-demo-presentation-package.md)
- Synthèse one-page : [`interv360-demo-one-page-summary.md`](./interv360-demo-one-page-summary.md)
