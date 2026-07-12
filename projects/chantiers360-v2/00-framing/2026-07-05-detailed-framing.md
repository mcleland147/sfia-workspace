# Chantiers360 v2 — Cadrage détaillé

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/2026-07-05-detailed-framing.md`  
**Cycle :** Cadrage détaillé (post PR #95)  
**Version :** 1.0 — draft revue Morris

## 1. Objectif produit

Fournir un **outil de suivi de chantier simple et centralisé** pour artisans et petites entreprises du bâtiment, permettant de piloter l'activité opérationnelle au quotidien sans dispersion d'information.

Objectif du pilote SFIA v2.0 : valider la méthode de delivery sur un **produit métier réel**, avec un MVP **borné, utilisable et mesurable**.

## 2. Problème métier

Les petites structures du bâtiment gèrent souvent leurs chantiers de façon **fragmentée** :

- informations réparties entre carnets, messages, fichiers et mémoire individuelle ;
- difficulté à avoir une **vue d'ensemble** fiable (statut, tâches, réserves, prochaines actions) ;
- risque d'**oubli** de réserves client ou de tâches en cours ;
- faible visibilité sur les **retards** et la **prochaine intervention** ;
- comptes rendus rédigés de manière irrégulière ou non centralisés.

Chantiers360 v2 vise à **structurer le suivi opérationnel** sans entrer dans la gestion commerciale ou comptable au MVP.

## 3. Utilisateurs cibles

| Utilisateur | Besoin principal | MVP |
|-------------|------------------|-----|
| **Artisan indépendant** | Suivre ses chantiers, tâches et réserves seul | ✅ Utilisateur principal |
| **Petite entreprise du bâtiment** | Vue d'ensemble des chantiers actifs | ✅ |
| **Conducteur de travaux léger** | Coordonner tâches, réserves et jalons | ✅ |
| **Responsable opérationnel** | Piloter statuts et prochaines actions | ✅ |
| **Client final** | Consulter avancement, réserves, comptes rendus | ❌ Hors MVP — futur espace consultation / validation |

## 4. Contexte d'usage

- **Contexte générique** — pas de client réel identifié dans ce pilote.
- **Données fictives** en phases initiales de delivery.
- Usage principalement **terrain et bureau léger** — pas d'application mobile native au MVP.
- Session de travail typique : consulter la liste des chantiers, ouvrir un chantier, mettre à jour statut / tâches / réserves / jalons, rédiger un compte rendu rapide, identifier les prochaines actions.
- Outil centré sur l'**artisan / PME** — pas de portail client au MVP.

## 5. Périmètre MVP confirmé

**MVP validé Morris (inchangé) :**

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

### Inclus au MVP

| Domaine | Éléments |
|---------|----------|
| **Chantier** | Création, consultation, liste, statut |
| **Client / adresse** | Informations minimales rattachées au chantier |
| **Tâches** | Ajout, suivi, statut simple |
| **Réserves** | Ajout, suivi, statut simple |
| **Planning simple** | Jalons simples — dates prévues, prochaine intervention, jalon à venir, retard, commentaire |
| **Compte rendu rapide** | Rédaction et consultation sur un chantier |
| **Prochaines actions** | Vue synthétique des actions à mener |

### Hors MVP (rappel)

- devis, facturation, intégrations comptables *(extensions métier prioritaires futures)*
- accès client
- planning avancé
- architecture technique, code applicatif, reprise V0

Voir `scope-boundaries.md` pour le détail des limites.

## 6. Hypothèses

- Le MVP suffit à **démontrer la valeur** du suivi centralisé pour un artisan ou une petite équipe.
- Un **planning simple** (jalons, dates, prochaine intervention) couvre le besoin opérationnel sans planning avancé.
- Les **statuts simples** (chantier, tâche, réserve) suffisent au cadrage initial — pas de workflow complexe au MVP.
- L'**accès client** peut attendre une extension dédiée après validation du socle interne.
- **Devis / facturation / comptabilité** relèvent d'un module commercial distinct — priorité future, pas du MVP.
- Le projet reste **from scratch** — V0 non consultée avant fin de pilote.

## 7. Contraintes

| Contrainte | Description |
|------------|-------------|
| **From scratch** | Aucune reprise Chantiers360 V0 |
| **Scope borné** | Pas de dérive vers gestion commerciale ou comptable au MVP |
| **Simplicité** | Pas de planning avancé, pas de mobile native, pas d'IA générative avancée |
| **Méthode SFIA** | Git = source de vérité ; Morris = autorité de décision |
| **Automatisation** | L2 max pour ce cycle — génération guidée, pas d'arbitrage automatisé |
| **Pas de surproduction** | Cadrage métier uniquement — pas d'architecture ni de code |
| **Pilote générique** | Données fictives ; pas de contrainte client réel imposée |

## 8. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Dérive vers devis / facturation | Scope creep, retard MVP | Extensions explicitement hors MVP — gate Morris |
| Confusion planning simple vs avancé | Surconception | Jalons simples documentés ; planning avancé exclu |
| Réintroduction implicite V0 | Biais méthodologique | Règle from scratch — comparaison fin pilote only |
| Backlog ou architecture prématurés | Dette avant validation métier | Cycle dédiés après cadrage Morris |
| MVP trop riche pour un pilote | Sous-delivery SFIA | Critères de succès bornés — voir §11 |
| Oubli des prochaines actions | Perte de valeur perçue | Cas d'usage et règles métier dédiés |
| Automatisation L5 prématurée | Perte de contrôle Morris | L2 cycle courant — gate avant L3+ |

## 9. Questions ouvertes

Questions à trancher par Morris **après revue de ce cadrage** — pas de décision implicite :

1. **Priorisation des cas d'usage** — ordre de delivery incrémental après architecture fonctionnelle ?
2. **Granularité des statuts** — les statuts proposés (§ business-rules) sont-ils suffisants ou à simplifier ?
3. **Compte rendu rapide** — format libre uniquement, ou structure minimale imposée (date, auteur, contenu) ?
4. **Prochaines actions** — générées manuellement, dérivées des tâches/réserves, ou les deux ?
5. **Retard** — indicateur manuel, calculé sur dates prévues, ou les deux ?
6. **Multi-utilisateur** — le MVP pilote suppose-t-il un seul utilisateur ou une petite équipe partagée ?
7. **Extensions métier** — ordre de priorité entre devis, facturation et intégrations comptables pour le cycle post-MVP ?

## 10. Décisions Morris requises

| # | Décision | Statut |
|---|----------|--------|
| 1 | Valider le cadrage détaillé (ce cycle) | ⏳ En attente |
| 2 | Confirmer le MVP inchangé | ⏳ En attente |
| 3 | Valider les cas d'usage prioritaires | ⏳ En attente |
| 4 | Valider les règles métier simples proposées | ⏳ En attente |
| 5 | Valider les limites de scope (scope-boundaries) | ⏳ En attente |
| 6 | Trancher les questions ouvertes (§9) | ⏳ En attente |
| 7 | Autoriser le cycle suivant : architecture fonctionnelle | ⏳ Après validation cadrage |
| 8 | Maintenir exclusion V0 jusqu'à fin pilote | ✅ Confirmé bootstrap |

## 11. Critères de succès du MVP

Le MVP sera considéré **réussi** si un utilisateur cible (artisan / PME) peut :

1. **Créer et lister** des chantiers avec client, adresse et statut.
2. **Suivre** les tâches et réserves d'un chantier avec statuts simples.
3. **Renseigner** des jalons simples (dates, prochaine intervention, retard éventuel).
4. **Rédiger** un compte rendu rapide rattaché à un chantier.
5. **Consulter** les prochaines actions sans parcourir toutes les sources dispersées.
6. **Identifier** un retard ou un chantier nécessitant attention via statut ou indicateur simple.

Critères méthode SFIA v2.0 (pilote) :

- cycle Git / PR / post-merge / capitalisation exercé sur le delivery ;
- scope MVP respecté — pas de dérive vers extensions commerciales ou accès client ;
- comparaison V0 réservée à la **fin du pilote** uniquement.

---

**Documents liés :**

- `use-cases.md` — cas d'usage prioritaires
- `business-rules.md` — règles métier simples
- `scope-boundaries.md` — limites MVP / hors MVP
- `2026-07-07-project-framing.md` — framing initial bootstrap

**Automation level autorisé :** L2 — génération guidée. Gate Morris avant cycle suivant.
