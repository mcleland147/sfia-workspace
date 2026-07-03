# Interv360 — INC-01 Demo reset summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Demo reset  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-demo-reset`

---

## 1. Objectif du cycle

Ce cycle a implémenté le **reset explicite** de la démo INC-01.

Il sécurise la rejouabilité de la démonstration avant d'ajouter de nouveaux écrans ou de nouvelles vues métier.

Le cycle ne vise pas à implémenter le workflow complet STAT-01 → STAT-06.

---

## 2. Décisions de référence

Le cycle respecte les décisions précédentes :

- mono-app React + TypeScript + Vite ;
- séparation logique UI / domain / data / seed ;
- persistance locale via `localStorage` ;
- préfixe de stockage `interv360-inc01:` ;
- accès au stockage uniquement via `src/data/` ;
- seed fictif `SAV-DEMO-001` ;
- données fictives uniquement ;
- pas de backend ;
- pas d'API ;
- pas de base serveur ;
- pas de CRM ;
- pas de transition métier.

**Sources :** [`inc-01-local-persistence-decision.md`](inc-01-local-persistence-decision.md), [`inc-01-request-detail-skeleton-summary.md`](inc-01-request-detail-skeleton-summary.md)

**Commit applicatif :** `96b9515` — `feat: add INC-01 demo reset`

---

## 3. Fichiers créés ou modifiés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/data/interv360LocalStorage.ts` | Purge des clés `interv360-inc01:*` |
| `projects/interv360/app/src/data/requestsRepository.ts` | `resetDemoData()` et `initializeRequests()` |
| `projects/interv360/app/src/data/requestsRepository.test.ts` | Tests reset + re-seed |
| `projects/interv360/app/src/ui/requests/DemoResetControl.tsx` | Bouton explicite de reset |
| `projects/interv360/app/src/ui/requests/DemoResetControl.css` | Styles du contrôle |
| `projects/interv360/app/src/ui/requests/DemoResetControl.test.tsx` | Tests du contrôle |
| `projects/interv360/app/src/app/App.tsx` | Orchestration du reset et refresh `dataVersion` |
| `projects/interv360/app/src/ui/requests/RequestsList.tsx` | Rafraîchissement via `dataVersion` |
| `projects/interv360/app/src/ui/requests/RequestDetail.tsx` | Rafraîchissement via `dataVersion` |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Test end-to-end du reset |
| `projects/interv360/app/README.md` | Documentation du reset |

---

## 4. Mécanisme de reset implémenté

Le reset est **explicite et contrôlé**.

**Séquence :**

1. l'utilisateur clique sur `Réinitialiser la démo` ;
2. `App` appelle `resetDemoData()` ;
3. `resetDemoData()` purge les clés `localStorage` préfixées `interv360-inc01:` ;
4. le seed fictif est rechargé ;
5. `dataVersion` est incrémenté ;
6. `RequestsList` et `RequestDetail` se rafraîchissent ;
7. un message de confirmation horodaté est affiché.

---

## 5. Comportement après reset

Après reset, l'application revient à l'état de démonstration initial :

| Élément | Valeur restaurée |
|---------|------------------|
| Demande | `SAV-DEMO-001` |
| Statut | `STAT-01` |
| Client | `Client Démo Industrie` |
| Site | `Lyon Démo` |
| Technicien | `Technicien Démo 01` |

Les données mutées localement sont remplacées par le seed fictif initial.

---

## 6. Couche data

L'accès au stockage reste centralisé dans `src/data/`.

| Sujet | Décision |
|-------|----------|
| Mécanisme | `localStorage` |
| Préfixe | `interv360-inc01:` |
| Purge | `clearInterv360LocalStorage()` |
| Reset | `resetDemoData()` |
| Initialisation | `initializeRequests()` |
| Accès direct depuis l'UI | Non |
| Données réelles | Interdites |

L'UI ne manipule pas directement `localStorage`.

---

## 7. Vérifications réalisées

**Commandes exécutées :**

```bash
cd projects/interv360/app
npm run build
npm run test -- --run
```

**Résultats :**

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 10 tests passés |
| Fichiers de tests | 5 fichiers |

---

## 8. Garde-fous respectés

Le cycle n'a pas créé :

- workflow complet STAT-01 → STAT-06 ;
- transition de statut ;
- qualification active ;
- planification active ;
- clôture ;
- STAT-05 / STAT-07 / STAT-08 ;
- backend serveur ;
- API externe ;
- base serveur ;
- SQL / DDL / migration ;
- CRM réel ;
- données réelles ;
- dashboard ;
- multi-utilisateur ;
- sprint Jira ;
- tickets ;
- publication Notion.

---

## 9. Limites assumées

Le cycle ne couvre pas encore :

- qualification readonly ;
- qualification active ;
- planification ;
- intervention mobile ;
- compte rendu mobile ;
- journal fonctionnel métier complet ;
- transitions STAT-01 → STAT-06 ;
- clôture locale STAT-06.

---

## 10. Décision de clôture

**Décision proposée :**

- [x] Cycle demo reset clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-demo-reset` est **clôturé avec succès**.

La démo INC-01 est désormais **rejouable** : les données fictives peuvent être restaurées explicitement, sans ajout de workflow métier.

Cette clôture **n'autorise pas encore** l'implémentation complète du flux SAV INC-01.

---

## 11. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-qualification-readonly-skeleton`

**Objectif :**

- préparer une vue readonly de la qualification ;
- afficher les éléments de qualification fictifs ;
- maintenir les données fictives uniquement ;
- ne pas permettre encore de transition STAT-01 → STAT-02 ;
- ne pas ajouter de workflow métier complet.

**Alternative :**

`delivery/interv360-inc-01-planning-readonly-skeleton`

**Objectif :**

- préparer une vue readonly de planification ;
- afficher un créneau et un technicien fictifs ;
- ne pas permettre encore d'action de planification.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-qualification-readonly-skeleton`, car la qualification est la prochaine brique logique avant toute transition métier.
