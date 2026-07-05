# Chantiers360 v2 — Flux UX prioritaires

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/02-ux-ui/user-flows.md`  
**Cycle :** UX/UI (post PR #97)

> Flux UX au niveau **parcours utilisateur** — pas de backlog, pas de user stories détaillées.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## Flux 1 — Créer un chantier

**Priorité :** P1 | **UC :** UC-01

```
[Liste chantiers]
      │
      │  Clic [+ Nouveau]
      ▼
[Formulaire création]
      │  Saisie: libellé, client, adresse
      │  Optionnel: dates, commentaire
      │  Clic [Enregistrer]
      ▼
[Fiche chantier] — statut À démarrer
```

**Points UX :** formulaire court — 3 champs obligatoires only ; redirection directe vers fiche après création.

---

## Flux 2 — Mettre à jour un chantier

**Priorité :** P1 | **UC :** UC-03, UC-07

```
[Liste chantiers]
      │  Clic carte chantier
      ▼
[Fiche chantier — en-tête]
      │
      ├── Changer statut (dropdown)
      ├── Toggle retard (manuel)
      └── Clic [Éditer] → modifier client, adresse, dates
              │
              ▼
         [Enregistrer] → retour fiche
```

**Points UX :** statut et retard modifiables sans quitter la fiche ; édition infos via action explicite.

---

## Flux 3 — Ajouter une tâche

**Priorité :** P1 | **UC :** UC-04

```
[Fiche chantier]
      │  Onglet / section [Tâches]
      ▼
[Section tâches]
      │  Clic [+ Tâche]
      ▼
[Saisie libellé] → ajout liste (statut À faire)
      │
      │  Changement statut inline (À faire → En cours → Terminée)
      ▼
[Liste mise à jour]
```

**Points UX :** ajout en une étape ; changement statut sans modal complexe.

---

## Flux 4 — Ajouter une réserve

**Priorité :** P1 | **UC :** UC-05

```
[Fiche chantier]
      │  Onglet / section [Réserves]
      ▼
[Section réserves]
      │  Clic [+ Réserve]
      ▼
[Saisie description] → ajout liste (statut Ouverte)
      │
      │  Changement statut (Ouverte → En cours → Levée)
      ▼
[Liste mise à jour]
```

**Points UX :** même pattern que tâches — cohérence interaction.

---

## Flux 5 — Renseigner un jalon simple

**Priorité :** P2 | **UC :** UC-06

```
[Fiche chantier]
      │  Onglet / section [Jalons]
      ▼
[Section jalons / planning simple]
      │  Clic [Éditer]
      ▼
[Saisie champs optionnels]
  — dates début / fin
  — prochaine intervention
  — jalon à venir
  — commentaire
      │  [Enregistrer]
      ▼
[Affichage lecture — section non dominante]
```

**Points UX :** planning visible mais secondaire ; pas de calendrier graphique.

---

## Flux 6 — Rédiger un compte rendu rapide

**Priorité :** P2 | **UC :** UC-08

```
[Fiche chantier]
      │  Onglet / section [Comptes rendus]
      ▼
[Section comptes rendus]
      │  Clic [+ Nouveau] ou zone saisie visible
      ▼
[Saisie contenu libre]
      │  Date = automatique
      │  Clic [Enregistrer]
      ▼
[Historique mis à jour — plus récent en haut]
```

**Points UX :** saisie textuelle courte ; pas de modèle documentaire ; date non saisie par l'utilisateur.

---

## Flux 7 — Consulter les prochaines actions

**Priorité :** P2 | **UC :** UC-09

```
[Liste chantiers]
      │  Clic [Prochaines actions]
      ▼
[Vue prochaines actions]
      │  Items dérivés affichés:
      │    — retards
      │    — tâches ouvertes
      │    — réserves ouvertes
      │    — jalons / interventions
      │
      │  Clic [→] sur un item
      ▼
[Fiche chantier — section source]
```

**Points UX :** entrée depuis liste ; pas de saisie ; navigation directe vers contexte.

---

## Flux transversal — Matinée type (P1 + P2)

```
1. Ouvrir app → [Liste chantiers]
2. Clic [Prochaines actions] → prioriser journée
3. Clic item → [Fiche chantier] → section concernée
4. Mise à jour statut / tâche / réserve
5. Optionnel: [Comptes rendus] → saisie fin de visite
6. Retour [Liste] ou [Prochaines actions]
```

---

## Flux exclus du MVP

| Flux | Raison |
|------|--------|
| Consultation client chantier | Accès client hors MVP |
| Création devis | Extension métier future |
| Émission facture | Extension métier future |
| Sync comptable | Extension métier future |
| Planning Gantt / ressources | Planning avancé hors MVP |

---

**Documents liés :** `screen-map.md`, `wireframes-functional.md`, `ux-decisions.md`
