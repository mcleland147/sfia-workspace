# Chantiers360 v2 — Wireframes fonctionnels (textuels)

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/02-ux-ui/wireframes-functional.md`  
**Cycle :** UX/UI (post PR #97)

> Wireframes **textuels Markdown** — zones fonctionnelles et actions.  
> Pas de design graphique, pas de composants UI, pas de librairie, pas de code.

---

## 1. Liste des chantiers

**Priorité :** P1 | **UC :** UC-02

```
┌────────────────────────────────────────────────────────────┐
│  CHANTIERS360                                    [+ Nouveau]│
├────────────────────────────────────────────────────────────┤
│  [ Prochaines actions → ]                                   │
├────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Rénovation salle de bain — Dupont                    │  │
│  │ Statut: En cours                          ⚠ Retard   │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Extension garage — Martin                            │  │
│  │ Statut: À démarrer                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Peinture façade — Leroy                              │  │
│  │ Statut: En pause                                     │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Zones :** en-tête app | lien prochaines actions | cartes chantier (libellé, client implicite, statut, retard)  
**Actions :** `[+ Nouveau]` → création | clic carte → fiche | `[ Prochaines actions ]` → vue transverse

---

## 2. Fiche chantier

**Priorité :** P1 | **UC :** UC-03, UC-07

```
┌────────────────────────────────────────────────────────────┐
│  ← Retour    Rénovation salle de bain — Dupont    [Éditer] │
├────────────────────────────────────────────────────────────┤
│  Client: Dupont          Adresse: 12 rue des Lilas, Lyon   │
│  Statut: [ En cours ▼ ]              Retard: [ ⚠ Oui / Non ]│
│  Début prévu: 01/08    Fin prévue: 15/09                   │
├────────────────────────────────────────────────────────────┤
│  [ Tâches ]  [ Réserves ]  [ Jalons ]  [ Comptes rendus ]   │
├────────────────────────────────────────────────────────────┤
│  (contenu section active — voir wireframes 3 à 6)           │
└────────────────────────────────────────────────────────────┘
```

**Zones :** navigation retour | en-tête identité | statut + retard | onglets/sections | zone contenu  
**Actions :** `[Éditer]` → édition infos | changement statut | toggle retard | navigation sections

---

## 3. Section tâches

**Priorité :** P1 | **UC :** UC-04

```
┌────────────────────────────────────────────────────────────┐
│  Tâches — Rénovation salle de bain              [+ Tâche]  │
├────────────────────────────────────────────────────────────┤
│  ○ Poser carrelage sol          [ À faire ▼ ]              │
│  ○ Installation sanitaires      [ En cours ▼ ]             │
│  ✓ Démolition existant          [ Terminée ▼ ]             │
└────────────────────────────────────────────────────────────┘
```

**Zones :** titre section | liste tâches (libellé + sélecteur statut)  
**Actions :** `[+ Tâche]` → saisie libellé | changement statut inline

---

## 4. Section réserves

**Priorité :** P1 | **UC :** UC-05

```
┌────────────────────────────────────────────────────────────┐
│  Réserves — Rénovation salle de bain           [+ Réserve] │
├────────────────────────────────────────────────────────────┤
│  Fuite robinet cuisine voisine                               │
│  Statut: [ Ouverte ▼ ]                                       │
│  ─────────────────────────────────────────────────────────  │
│  Carrelage teinte à valider                                  │
│  Statut: [ En cours de traitement ▼ ]                        │
└────────────────────────────────────────────────────────────┘
```

**Zones :** titre section | liste réserves (description + statut)  
**Actions :** `[+ Réserve]` → saisie description | changement statut

---

## 5. Section jalons / planning simple

**Priorité :** P2 | **UC :** UC-06

```
┌────────────────────────────────────────────────────────────┐
│  Jalons — Rénovation salle de bain                 [Éditer]│
├────────────────────────────────────────────────────────────┤
│  Début prévu:    01/08/2026                                │
│  Fin prévue:     15/09/2026                                │
│  Prochaine intervention:  05/08 — Pose carrelage           │
│  Jalon à venir:           Livraison sanitaires             │
│  Commentaire:             Accès immeuble matin uniquement  │
└────────────────────────────────────────────────────────────┘
```

**Zones :** champs planning simple — lecture / édition groupée  
**Actions :** `[Éditer]` → mode saisie champs optionnels  
**Note UX :** section visible mais **non dominante** — pas de calendrier graphique

---

## 6. Section comptes rendus

**Priorité :** P2 | **UC :** UC-08

```
┌────────────────────────────────────────────────────────────┐
│  Comptes rendus — Rénovation salle de bain    [+ Nouveau]  │
├────────────────────────────────────────────────────────────┤
│  04/08/2026 — 14:30 (auto)                                 │
│  Démolition terminée. Début carrelage demain matin.        │
│  ─────────────────────────────────────────────────────────  │
│  01/08/2026 — 09:15 (auto)                                 │
│  Première visite. Accès OK. Début démolition.              │
├────────────────────────────────────────────────────────────┤
│  [ Zone saisie contenu libre ]                             │
│  [ Enregistrer ]                                           │
└────────────────────────────────────────────────────────────┘
```

**Zones :** historique chronologique (date auto + texte) | zone saisie nouveau CR  
**Actions :** `[+ Nouveau]` / saisie + `[ Enregistrer ]` — date automatique, contenu libre

---

## 7. Vue prochaines actions

**Priorité :** P2 | **UC :** UC-09

```
┌────────────────────────────────────────────────────────────┐
│  ← Retour    Prochaines actions                             │
├────────────────────────────────────────────────────────────┤
│  ⚠ RETARD — Rénovation salle de bain — Dupont        [ → ] │
│  ─────────────────────────────────────────────────────────  │
│  TÂCHE — Poser carrelage sol                         [ → ] │
│  Chantier: Rénovation salle de bain                          │
│  ─────────────────────────────────────────────────────────  │
│  RÉSERVE — Fuite robinet cuisine voisine            [ → ] │
│  Chantier: Rénovation salle de bain                          │
│  ─────────────────────────────────────────────────────────  │
│  JALON — Pose carrelage le 05/08                     [ → ] │
│  Chantier: Rénovation salle de bain                          │
└────────────────────────────────────────────────────────────┘
```

**Zones :** liste items dérivés (type, libellé, chantier) | lien navigation  
**Actions :** `[ → ]` → fiche chantier section source  
**Règle :** aucun bouton d'ajout manuel — contenu 100 % dérivé

---

## 8. Création chantier (formulaire)

**Priorité :** P1 | **UC :** UC-01

```
┌────────────────────────────────────────────────────────────┐
│  ← Annuler    Nouveau chantier                              │
├────────────────────────────────────────────────────────────┤
│  Libellé *        [ __________________________ ]           │
│  Client *         [ __________________________ ]           │
│  Adresse *        [ __________________________ ]           │
│  Statut           [ À démarrer ▼ ]                         │
│  ── Planning (optionnel) ──                                │
│  Début prévu      [ __/__/____ ]                           │
│  Fin prévue       [ __/__/____ ]                           │
│  Commentaire      [ __________________________ ]           │
├────────────────────────────────────────────────────────────┤
│  [ Enregistrer ]                                            │
└────────────────────────────────────────────────────────────┘
```

**Zones :** champs obligatoires | bloc planning optionnel | action enregistrer  
**Actions :** `[ Enregistrer ]` → fiche chantier | `← Annuler` → liste

---

## Limites de ce document

- Pas de couleurs, typographie, espacements pixel
- Pas de composants React / Vue / HTML
- Pas de design system ni tokens
- Wireframes = **intention UX** pour cycle backlog et delivery

---

**Documents liés :** `screen-map.md`, `user-flows.md`, `ux-decisions.md`
