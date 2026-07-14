# ACTE III.3 — Delivery et QA

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.3 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment livrer rapidement sans perdre les décisions et la qualité ? |

---

## 1. Découpage en incrément

NovaBuild ne livre pas « tout le MVP » en une fois. Le **premier incrément** couvre le **socle chantier** :

- liste des chantiers ;
- création et fiche ;
- statuts de base ;
- navigation principale.

Les tâches, réserves et jalons viennent dans des **incréments suivants** — chacun avec son propre cycle delivery + QA.

---

## 2. Backlog sélectionné

Pour l'incrément en cours, le PO extrait du backlog :

- user stories **priorisées** ;
- critères d'acceptation **rappelés** ;
- dépendances **explicitées**.

Le périmètre d'exécution est **borné** — Cursor n'improvise pas hors scope.

---

## 3. Contrat d'exécution Cursor

Avant code, un **contrat d'exécution** fixe :

| Élément | Contenu |
|---------|---------|
| **Intention** | Livrer INC-01 socle chantier |
| **Sources** | Cadrage · archi · UX validés |
| **Périmètre in** | Écrans et règles listés |
| **Périmètre out** | Tâches · réserves · intégrations |
| **Livrables** | Code · tests · rapport · PR |
| **Gate** | Merge Morris après QA |

**Cursor exécute** — il ne redéfinit pas le MVP.

---

## 4. Exécution sans dump technique

L'équipe SFIA produit :

- composants et pages **alignés** sur la carte écrans ;
- logique métier **conforme** au modèle d'états ;
- tests automatisés **ciblés** ;
- documentation d'incrément **courte**.

Le lecteur Discovery **n'a pas besoin** du code source — il doit voir que l'incrément **existe** et **se relie** aux décisions amont.

---

## 5. Commit · PR · review pack

Chaque incrément aboutit à une **Pull Request** :

- description **métier** : ce qui change pour l'utilisateur ;
- lien aux **critères d'acceptation** ;
- **review pack** pour analyse Morris / ChatGPT — synthèse qualité, pas dump brut ;
- historique **Git** comme preuve de traçabilité.

La PR est le **pont** entre exécution IA et décision humaine.

---

## 6. Contrôles automatisés

Avant revue humaine :

- lint et build ;
- tests unitaires et d'intégration ;
- parcours **E2E** sur scénarios prioritaires *(catégorie vérifiée dans des projets SFIA — détail masqué lecteur)*.

Un build vert **n'équivaut pas** à un GO merge — c'est une **condition nécessaire**, pas suffisante.

---

## 7. Scénarios QA

Le cycle QA documente :

| Artefact | Rôle |
|----------|------|
| **Stratégie QA** | Périmètre testé par incrément |
| **Scénarios** | Cas nominaux et limites métier |
| **Rapport d'exécution** | Résultat des tests |
| **Réserves** | Écarts ouverts · non masqués |

NovaBuild (fiction) exécute des scénarios sur **création chantier · statuts · navigation** — pas une campagne de tests exhaustive non sourcée.

---

## 8. Preuves runtime

**Moment de preuve P3** — le lecteur voit une **preuve fonctionnelle** :

- capture d'écran ou schéma de l'application ;
- confirmation qu'un parcours **prioritaire** fonctionne ;
- lien implicite avec les critères d'acceptation.

Pas de vidéo longue · pas de log serveur · pas de données réelles.

---

## 9. Correction de réserves

Si la QA révèle un écart :

1. réserve **documentée** ;
2. correction **bornée** ;
3. re-test **ciblé** ;
4. mise à jour du review pack.

SFIA **n'ignore pas** les réserves pour « aller plus vite ».

---

## 10. Gate merge

| Distinction | Signification |
|-------------|---------------|
| **READY techniquement** | Build · tests · QA documentée |
| **GO Morris merge** | Décision humaine · périmètre respecté · preuves suffisantes |

Morris **ne merge pas** par défaut — il **tranche** après lecture du pack et des preuves.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Le code fonctionne localement, mais cela ne prouve ni l'alignement métier ni l'absence de régression. |
| **Résolution** | PR · QA · review pack **relient** implémentation, critères et preuves. |
| **Preuves** | Premier incrément mergé · review pack lisible · preuve runtime ou fonctionnelle. |

---

## 12. Transition vers III.4

L'incrément est validé et mergé. Reste la question de **mise en service** et d'**exploitation**.

> **Comment passer d'un incrément validé à un service exploitable et améliorable ?**

**→ Continuer : [ACTE III.4 — Release et RUN](sfia-discovery-act-03-4-release-and-run-editorial-draft.md)**

**← Retour : [ACTE III.2 — Conception et UX](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md)**

---

## 13. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Incréments delivery | delivery-increments · dossiers 07-delivery-inc-0N/ |
| QA | Dossier 08-qa-test/ · specs E2E (catégorie) |
| PR / review pack | Pattern PR readiness · closure reports |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–12 ci-dessus.*
