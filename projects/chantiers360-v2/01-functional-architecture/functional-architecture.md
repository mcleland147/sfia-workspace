# Chantiers360 v2 — Architecture fonctionnelle

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/01-functional-architecture/functional-architecture.md`  
**Cycle :** Architecture fonctionnelle (post PR #96)  
**Version :** 1.0 — draft revue Morris

> **Niveau document :** architecture **fonctionnelle** MVP uniquement.  
> Pas de stack technique, API, base de données, composants applicatifs ni code.

## 1. Intention fonctionnelle

Permettre à un artisan ou une petite équipe du bâtiment de **centraliser le suivi opérationnel** de leurs chantiers : statut, tâches, réserves, jalons simples, comptes rendus et prochaines actions — sans outils commerciaux ou comptables au MVP.

## 2. Périmètre MVP

**MVP confirmé Morris (inchangé) :**

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

| Inclus | Exclu |
|--------|-------|
| Chantier, client, adresse, statut | Devis, facturation, intégrations comptables |
| Tâches, réserves | Accès client |
| Jalons simples / planning simple | Planning avancé |
| Retard (indicateur manuel) | Architecture technique, code |
| Compte rendu rapide | Backlog détaillé, maquettes UI |
| Prochaines actions (dérivées) | Reprise Chantiers360 V0 |

## 3. Principes fonctionnels

1. **Simplicité** — workflows courts, statuts simples, pas de règles métier complexes au MVP.
2. **Chantier comme pivot** — tâches, réserves, jalons, comptes rendus et retard sont rattachés au chantier.
3. **Prochaines actions dérivées** — agrégation automatique depuis tâches, réserves, jalons et retards ; pas de saisie manuelle dédiée.
4. **Retard manuel** — l'utilisateur marque un chantier en retard ; calcul automatique = option future uniquement.
5. **Compte rendu léger** — date automatique, contenu libre, pas de modèle documentaire complexe.
6. **Multi-utilisateur simple** — petite équipe possible ; pas de gestion fine des rôles ou permissions au MVP.
7. **From scratch** — aucune reprise V0 ; comparaison réservée à la fin du pilote.

## 4. Parcours utilisateur principal

```
[Liste chantiers]
      │
      ├─► Créer un chantier (UC-01) ──► [Fiche chantier]
      │
      └─► Ouvrir un chantier (UC-02) ──► [Fiche chantier]
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
              Statut chantier           Tâches / Réserves          Jalons simples
              (UC-03)                   (UC-04, UC-05)             (UC-06, UC-07)
                    │                         │                         │
                    └─────────────────────────┼─────────────────────────┘
                                              ▼
                                    Compte rendu rapide (UC-08)
                                              │
                                              ▼
                              Prochaines actions (UC-09 — dérivées)
```

**Parcours type — matinée terrain :**

1. Consulter la **liste des chantiers** et repérer statuts / retards.
2. Ouvrir la vue **prochaines actions** pour prioriser la journée.
3. Sur un chantier : mettre à jour **tâches**, **réserves** ou **statut**.
4. Renseigner **prochaine intervention** ou **jalon** si nécessaire.
5. Rédiger un **compte rendu rapide** en fin de visite.

## 5. Modules fonctionnels

| Module | Rôle | Cas d'usage | Priorité |
|--------|------|-------------|----------|
| **Chantier** | Socle — identité et statut global du chantier | UC-01, UC-02, UC-03 | P1 |
| **Client / adresse** | Informations minimales rattachées au chantier | UC-01 | P1 |
| **Tâches** | Décomposition et suivi du travail restant | UC-04 | P1 |
| **Réserves** | Suivi des points à lever | UC-05 | P1 |
| **Jalons / planning simple** | Visibilité dates et prochaines interventions | UC-06 | P2 |
| **Retard** | Signal d'attention sur un chantier | UC-07 | P2 |
| **Compte rendu rapide** | Historique opérationnel textuel | UC-08 | P2 |
| **Prochaines actions** | Vue synthétique dérivée | UC-09 | P2 |

## 6. Relations fonctionnelles entre modules

```
                    ┌──────────────┐
                    │   Chantier   │◄─── Client / adresse
                    │   (statut)   │
                    └──────┬───────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
      ┌─────────┐    ┌──────────┐   ┌─────────────┐
      │ Tâches  │    │ Réserves │   │ Jalons /    │
      └────┬────┘    └────┬─────┘   │ planning    │
           │              │         └──────┬──────┘
           │              │                │
           └──────────────┼────────────────┘
                          ▼
                   ┌─────────────┐
                   │   Retard    │ (indicateur sur chantier)
                   └──────┬──────┘
                          │
           ┌──────────────┼──────────────┐
           ▼              ▼              ▼
    ┌─────────────┐ ┌───────────┐ ┌──────────────────┐
    │ Comptes     │ │ Prochaines│ │ (extensions      │
    │ rendus      │ │ actions   │ │  futures hors    │
    └─────────────┘ └───────────┘ │  MVP)            │
                                  └──────────────────┘
```

**Règles de relation :**

- Tâches, réserves, jalons, comptes rendus et retard sont **subordonnés** au chantier.
- Les **prochaines actions** **lisent** l'état des tâches, réserves, jalons et retards — elles ne créent pas de données indépendantes.
- Le **statut chantier** reste **indépendant** des statuts tâches/réserves (pas de calcul automatique imposé).
- **Client / adresse** sont des attributs fonctionnels du chantier, pas un module autonome au MVP.

## 7. Décisions Morris intégrées

| # | Arbitrage | Intégration |
|---|-----------|-------------|
| 1 | Priorisation UC | P1 : UC-01 à UC-05 ; P2 : UC-06 à UC-09 |
| 2 | Statuts | Conservés tels que `business-rules.md` — pas de complexification |
| 3 | Compte rendu | Date automatique ; contenu libre ; pas de modèle documentaire complexe |
| 4 | Prochaines actions | Dérivées (tâches, réserves, jalons, retards) — pas de saisie manuelle MVP |
| 5 | Retard | Indicateur **manuel** au MVP ; calcul auto = option future |
| 6 | Multi-utilisateur | Petite équipe possible ; pas de rôles/permissions fines au MVP |
| 7 | Extensions métier | Ordre futur : devis → facturation → intégrations comptables — hors MVP |

## 8. Exclusions

- Stack technique, API, base de données, schéma technique
- Composants frontend / backend
- Backlog détaillé, user stories, maquettes UI
- Devis, facturation, intégrations comptables, accès client
- Planning avancé, Gantt, ressources, dépendances
- Chantiers360 V0 — consultation interdite avant fin pilote
- Gestion fine des rôles et permissions

## 9. Limites avant UX/UI et backlog

Ce cycle **arrête** l'architecture fonctionnelle. Les cycles suivants couvriront :

| Cycle suivant | Contenu attendu |
|---------------|-----------------|
| **UX/UI** | Parcours écran, wireframes, design system léger |
| **Backlog MVP** | User stories, incréments delivery, critères d'acceptation |
| **Architecture technique** | Stack, modèle de données, API — cycle dédié ultérieur |

**Gate Morris** requis avant ouverture du cycle UX/UI.

---

**Documents liés :**

- `functional-domains.md` — domaines fonctionnels détaillés
- `navigation-model.md` — navigation fonctionnelle
- `state-model.md` — états et transitions métier
- `functional-decisions.md` — trace des décisions

**Sources cadrage :** `00-framing/` — detailed-framing, use-cases, business-rules, scope-boundaries

**Automation level :** L2 — génération guidée. Gate Morris avant UX/UI.
