# ACTE III.1 — Intention et cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.1 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment une demande simple devient-elle un projet borné et gouverné ? |

---

## 1. La demande initiale

Laurent, dirigeant fictif de **NovaBuild**, formule une demande familière :

> « Je veux une application complète pour gérer mes chantiers, mes équipes terrain, les photos, les réserves et le suivi client. »

L'intention est **légitime**. Le problème : la demande mélange **plusieurs produits** — suivi opérationnel, gestion documentaire, relation client — sans règles métier stabilisées.

---

## 2. Utilisateurs et enjeux

| Profil | Besoin exprimé | Enjeu |
|--------|----------------|-------|
| **Dirigeant** | Vision globale des chantiers | Décisions sans données fiables |
| **Conducteur de travaux** | Suivre tâches et réserves sur le terrain | Saisie rapide · statuts clairs |
| **Assistante bureau** | Consolider l'information | Éviter doubles saisies |
| **Équipe terrain** | Photos et compte rendu | Lien chantier ↔ bureau |

Enjeux métier NovaBuild (fiction) : **chantiers · interventions · réserves · statuts · prochaines actions** — sans promettre un ERP complet dès le jour 1.

---

## 3. Premières ambiguïtés

Sans cadrage, plusieurs questions restent ouvertes :

- Qu'est-ce qu'une **réserve** « clôturée » ?
- Qui peut **modifier** le statut d'un chantier ?
- Les **photos** sont-elles dans le MVP ou plus tard ?
- Faut-il **devis et facturation** dès maintenant ?

Ces ambiguïtés ne se résolvent pas en codant plus vite — elles demandent **qualification et arbitrage**.

---

## 4. Qualification ChatGPT

Dans SFIA, **ChatGPT** intervient en amont de l'exécution :

- reformule la demande en **capacités métier** ;
- propose un **premier découpage** (in / out) ;
- signale les **zones floues** à trancher ;
- prépare une **note de cadrage** structurée.

ChatGPT **propose** — il ne valide pas seul le périmètre.

---

## 5. Arbitrage Morris

**Morris** intervient à la **gate de scope** :

- le MVP couvre-t-il le **socle chantier** utile ?
- les exclusions (devis, facturation, app native…) sont-elles **explicitées** ?
- l'équipe NovaBuild comprend-elle **ce qui n'est pas livré** au premier incrément ?

La décision est **documentée** — pas seulement oralisée en réunion.

---

## 6. Cadrage du MVP

Le périmètre retenu pour NovaBuild (fiction) se concentre sur une chaîne lisible :

```text
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

| Dans le MVP | Hors MVP (explicitement) |
|-------------|--------------------------|
| Création et fiche chantier | Devis · facturation · compta |
| Tâches et réserves par chantier | Planning avancé · Gantt |
| Statuts et prochaines actions | App mobile native |
| Compte rendu textuel | GED documentaire complète |

> **Note pédagogique :** cette structure de périmètre s'inspire de **catégories de cadrage** observables dans des projets SFIA documentés — le détail reste scénarisé pour NovaBuild.

---

## 7. Hypothèses et note de cadrage

La **note de cadrage** versionnée dans Git consolide :

- objectif du MVP ;
- utilisateurs prioritaires ;
- règles métier de base ;
- limites de scope ;
- risques identifiés ;
- critères de succès **qualitatifs** (pas de KPI inventés).

C'est le **premier livrable** que le lecteur peut relier à une trace — pas à une démo technique.

---

## 8. Premiers items de backlog

Le cadrage alimente un **backlog initial** — épics et user stories — sans encore entrer dans le code :

| Type | Exemple NovaBuild (fiction) |
|------|----------------------------|
| **Epic** | Piloter la liste des chantiers |
| **User story** | En tant que conducteur, je consulte les réserves ouvertes d'un chantier |
| **Critère d'acceptation** | Statuts réserves conformes aux règles métier validées |

Le backlog **n'est pas exhaustif** — il est **suffisant** pour lancer la conception.

---

## 9. Gate de validation du scope

| Élément | Statut |
|---------|--------|
| Périmètre MVP | Validé Morris |
| Exclusions | Documentées |
| Note de cadrage | Versionnée Git |
| Backlog initial | Présent |
| GO conception | Accordé |

**Moment de preuve P1 :** un cadrage explicite et une décision de scope **existent dans Git** — le projet ne repose plus sur une conversation floue.

---

## 10. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | NovaBuild veut « une application complète », mais le besoin est trop large et les règles ne sont pas stabilisées. |
| **Résolution** | Un premier périmètre **utile et vérifiable** est défini — sans prétendre couvrir tout le produit. |
| **Preuve** | Note de cadrage · limites in/out · gate scope Morris · trace Git. |

---

## 11. Transition vers III.2

Le périmètre est fixé. Il faut maintenant **concevoir** le fonctionnement : rôles, règles, parcours, écrans.

> **Comment transformer le cadrage en règles, parcours et écrans cohérents ?**

**→ Continuer : [ACTE III.2 — Conception et UX](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md)**

**← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**

---

## 12. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Cadrage / scope | Documents de framing et limites MVP (pilote SFIA) |
| Use cases · règles métier | Fichiers 00-framing/ du pilote documentaire |
| Backlog initial | Structure epics / user stories / incréments |

*Chemins détaillés — review pack PD-04A uniquement.*

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–11 ci-dessus.*
