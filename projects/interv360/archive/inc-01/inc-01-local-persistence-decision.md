# Interv360 — INC-01 Local persistence decision

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Local persistence decision  
**Statut** : Draft  
**Branche** : `delivery/interv360-inc-01-local-persistence-decision`

---

## 1. Objectif

Ce document tranche le **mécanisme de persistance locale** à utiliser pour INC-01.

Il prépare la couche data avant le premier écran métier.

Il ne doit pas implémenter le flux complet INC-01.

---

## 2. Décisions de référence

**Sources :**

- [`inc-01-data-scope.md`](inc-01-data-scope.md)
- [`inc-01-technical-scope.md`](inc-01-technical-scope.md)
- [`inc-01-start-checklist.md`](inc-01-start-checklist.md)
- [`inc-01-app-foundation-summary.md`](inc-01-app-foundation-summary.md)
- [`projects/interv360/app/src/data/README.md`](../app/src/data/README.md)
- [`projects/interv360/app/src/seed/README.md`](../app/src/seed/README.md)

**Décisions déjà actées :**

- mono-app web ;
- données fictives uniquement ;
- persistance locale structurée ;
- pas de backend ;
- pas d'API externe ;
- pas de base serveur ;
- pas de SQL / DDL / migration ;
- reset démo à prévoir ;
- seed SAV-DEMO-001 / INT-DEMO-001 à préparer.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Verdict |
|--------|-------------|-----------|---------|---------|
| `localStorage` | Stockage clé/valeur navigateur simple, sérialisation JSON | Très simple, natif, suffisant pour un seed léger mono-session, reset facile par suppression de clés | Peu adapté à des volumes importants ou requêtes complexes ; limite de taille navigateur | **Retenu pour INC-01** |
| `IndexedDB` | Stockage navigateur structuré orienté objets | Plus robuste, meilleur pour structures complexes et volumes plus importants | API plus lourde, complexité supérieure pour un socle INC-01 mono-session | **Réserve ultérieure** — si besoin de requêtes ou volumes non couverts par localStorage |
| Fichier local | Stockage via fichier local contrôlé | Rejouable hors navigateur selon environnement | Moins naturel pour une mono-app web navigateur ; dépend de l'environnement d'exécution | **Non retenu** pour INC-01 |
| SQLite embarqué | Base locale embarquée | Structuré, requêtes possibles | Trop lourd pour INC-01 ; ajoute dépendance et complexité sans besoin démontré | **Non retenu** pour INC-01 |
| Backend / base serveur | Persistance centralisée | Trajectoire produit plus complète | Hors périmètre INC-01 (`inc-01-data-scope.md`, `inc-01-technical-scope.md`) | **Exclu** |

---

## 4. Critères de décision

| Critère | Poids | Commentaire |
|---------|------|-------------|
| Simplicité | Fort | INC-01 doit rester léger — aligné avec option « stockage navigateur structuré » de `inc-01-data-scope.md` |
| Rejouabilité démo | Fort | Reset nécessaire — localStorage permet une purge par préfixe de clés |
| Données fictives uniquement | Fort | Aucun risque data réelle ; volume limité (SAV-DEMO-001) |
| Compatibilité mono-app web | Fort | Natif navigateur, pas de backend |
| Réversibilité | Moyen | Couche data abstraite possible ; migration vers IndexedDB envisageable si besoin |
| Maintenabilité | Moyen | JSON sérialisé + clés namespacées = structure lisible |
| Complexité technique | Fort | Éviter surarchitecture — IndexedDB/SQLite non justifiés à ce stade |

---

## 5. Décision proposée

**Décision :**

- [x] `localStorage`
- [ ] `IndexedDB`
- [ ] Fichier local
- [ ] SQLite embarqué
- [ ] Report de décision

### Recommandation

**Retenir `localStorage`** comme premier mécanisme de persistance locale pour INC-01.

### Justification

- Cohérent avec `inc-01-data-scope.md` : persistance locale légère, stockage navigateur en option préférée ;
- Suffisant pour la démo mono-session et le jeu fictif limité (SAV-DEMO-001, INT-DEMO-001, journal de 5 entrées) ;
- Compatible avec la mono-app React + Vite sans dépendance additionnelle ;
- Reset démo simple : suppression des clés sous un préfixe applicatif (`interv360-inc01:`) puis rechargement du seed ;
- IndexedDB reste une **option de révision** si le volume d'objets, les requêtes locales ou les performances le justifient — hors besoin actuel documenté.

**Convention retenue (à implémenter dans un cycle applicatif ultérieur) :**

- préfixe de clés : `interv360-inc01:` ;
- état applicatif sérialisé en JSON (objets conceptuels INC-01) ;
- couche `src/data/` comme seul point d'accès au stockage — pas d'appels `localStorage` dispersés dans l'UI.

---

## 6. Stratégie de reset démo

Le mécanisme retenu devra permettre :

- réinitialiser le seed `SAV-DEMO-001` ;
- réinitialiser l'intervention `INT-DEMO-001` ;
- rejouer le chemin nominal STAT-01 → STAT-06 ;
- vider le journal fonctionnel minimal ;
- restaurer les 5 entrées de démonstration initiales si nécessaire.

**Décision reset :**

| Élément | Décision |
|---------|----------|
| Mécanisme | Fonction `resetDemo()` exposée par la couche data (à implémenter hors ce cycle documentaire) |
| Action technique | Supprimer toutes les clés `localStorage` préfixées `interv360-inc01:` |
| Re-seed | Recharger l'état initial depuis la définition seed fictive (`src/seed/`) |
| Déclenchement | Réservé à un contrôle explicite (ex. bouton « Réinitialiser la démo ») — pas de reset automatique au chargement |
| Journal | Les 5 entrées initiales du journal sont restaurées avec le seed (`inc-01-demo-data.md` §9) |

---

## 7. Garde-fous

Le cycle ne doit pas introduire :

- données réelles ;
- CRM ;
- API externe ;
- backend ;
- base serveur ;
- SQL / DDL / migration ;
- authentification ;
- dashboard ;
- multi-utilisateur ;
- flux complet STAT-06.

---

## 8. Impact applicatif autorisé

Selon la décision, il est autorisé de préparer uniquement :

- un README data mis à jour ;
- éventuellement un README seed mis à jour ;
- une note de décision ;
- éventuellement un squelette de module data très minimal si nécessaire, sans écran métier et sans flux complet.

**Dans ce cycle :** mise à jour documentaire des README `src/data/` et `src/seed/` uniquement — **aucun module data exécutable** ajouté.

Aucune fonctionnalité métier visible ne doit être ajoutée dans ce cycle.

---

## 9. Décision finale

**Statut proposé :**

- [x] Décision validée
- [ ] Décision à compléter
- [ ] Décision reportée

**Décision finale :**

INC-01 utilise **`localStorage`** (navigateur, JSON sérialisé, clés préfixées `interv360-inc01:`) comme mécanisme de persistance locale pour la phase de démonstration mono-session.

Le reset démo s'effectuera par purge du préfixe puis re-seed fictif.

IndexedDB, fichier local, SQLite embarqué et backend/base serveur ne sont **pas retenus** pour INC-01 à ce stade.

---

## 10. Prochain cycle recommandé

Après validation, ouvrir :

`delivery/interv360-inc-01-list-skeleton`

**Objectif :**

- créer le squelette du premier écran liste demandes ;
- utiliser uniquement le mécanisme data retenu (`localStorage` via couche `src/data/`) ;
- utiliser uniquement les données fictives ;
- ne pas implémenter le flux complet INC-01.
