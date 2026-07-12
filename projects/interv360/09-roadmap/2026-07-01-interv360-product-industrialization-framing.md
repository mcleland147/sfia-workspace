# Interv360 — Product Industrialization Framing

**Projet** : Interv360  
**Cycle** : Product Industrialization Framing  
**Mode** : SFIA Fast Delivery stratégique  
**Statut** : Cadrage sortie démo vers produit  
**Branche** : `architecture/interv360-product-industrialization-framing`  
**Base** : `main` @ `ca083de`

Documents de référence : [`demo-mvp-closure.md`](../04-delivery/demo-mvp-closure.md), [`backend-minimal-prototype.md`](../04-delivery/backend-minimal-prototype.md), [`frontend-api-connection.md`](../04-delivery/frontend-api-connection.md), [`interv360-backend-target-framing.md`](./interv360-backend-target-framing.md), [`interv360-backend-data-model-decision.md`](./interv360-backend-data-model-decision.md), [`interv360-backend-technical-stack-decision.md`](./interv360-backend-technical-stack-decision.md), [`interv360-backend-api-contract-framing.md`](./interv360-backend-api-contract-framing.md)

---

## 1. Objectif

Ce document cadre la sortie du mode démonstrateur Interv360.

La version **Interv360 Demo MVP** est clôturée dans `main` (PR #48, §17 de [`demo-mvp-closure.md`](../04-delivery/demo-mvp-closure.md)).

L'objectif de ce cycle est de définir comment transformer Interv360 en produit réel, sans prolonger artificiellement la démo.

---

## 2. Point de départ

Le démonstrateur dispose déjà de :

- frontend React / TypeScript ;
- mode local par défaut ;
- mode API opt-in ;
- backend minimal Express ;
- contrat API `/api/v1` ;
- workflow SAV nominal ;
- journal ;
- reset ;
- navigation par écran ;
- runbook E2E ;
- feedback humain positif ;
- irritant principal traité.

Avancement démonstrateur retenu :

> environ 95 %.

La phase démo est considérée comme terminée.

---

## 3. Décision de bascule

Décision :

> Interv360 doit sortir du mode démo et entrer dans une trajectoire produit.

Cela signifie :

- arrêter les polish opportunistes ;
- arrêter les cycles purement démonstrateur ;
- ouvrir des incréments produit ;
- traiter les vrais sujets de produit :
  - persistance ;
  - identité ;
  - utilisateurs ;
  - droits ;
  - données ;
  - API robuste ;
  - intégration métier ;
  - exploitation ;
  - sécurité.

---

## 4. Ce qui change entre démo et produit

| Sujet | Démo MVP | Produit réel |
|-------|----------|--------------|
| Données | Fictives | Structurées, persistées, gouvernées |
| Backend | Minimal Express | Backend fiable, testable, exploitable |
| Persistance | Mémoire / localStorage | Base ou stockage durable |
| Identité | Aucune | Authentification / utilisateurs |
| Droits | Aucun | Rôles / permissions |
| Workflow | Nominal | Cas nominaux + exceptions |
| API | Démo locale | API stable et documentée |
| CRM | Hors scope | À cadrer |
| Exploitation | Locale | Environnements, logs, configuration |
| Sécurité | Garde-fous démo | Exigences produit |

---

## 5. Risques si on code trop vite

Risques identifiés :

- transformer la démo en produit sans architecture claire ;
- empiler des corrections locales ;
- introduire une persistance mal cadrée ;
- mélanger données fictives et logique produit ;
- coder l'authentification trop tôt ;
- ouvrir CRM / rôles / données réelles sans décision ;
- perdre la cohérence SFIA.

Décision :

> ne pas commencer par une grosse refonte, mais par un premier incrément produit maîtrisé.

---

## 6. Options de trajectoire produit

### Option A — Persistance backend d'abord

Objectif :

- remplacer la mémoire backend par une persistance durable ;
- conserver le frontend et l'API existants ;
- préparer une base produit.

Avantages :

- première vraie brique produit ;
- faible impact UX ;
- sécurise la suite ;
- logique après backend minimal.

Inconvénients :

- nécessite décision technique ;
- ne traite pas encore auth/CRM.

### Option B — API demo hardening d'abord

Objectif :

- rendre le mode API plus fluide ;
- corriger CORS / ports ;
- améliorer erreurs et configuration ;
- rendre la démo API plus présentable.

Avantages :

- améliore immédiatement la crédibilité technique ;
- réduit friction locale ;
- utile avant persistance.

Inconvénients :

- reste proche de la démo ;
- ne crée pas encore une vraie base produit.

### Option C — Cadrage industrialisation complet

Objectif :

- cadrer auth, CRM, données réelles, rôles, exploitation, sécurité.

Avantages :

- vision cible complète ;
- utile pour un vrai lancement produit.

Inconvénients :

- plus long ;
- risque de redevenir très documentaire ;
- moins de résultat concret immédiat.

### Option D — Premier incrément produit vertical

Objectif :

- choisir un petit périmètre vertical produit ;
- faire évoluer backend + frontend sur une fonctionnalité réaliste.

Avantages :

- avance vite ;
- donne un résultat visible ;
- évite le tunnel documentaire.

Inconvénients :

- risqué sans persistance et identité clarifiées.

---

## 7. Recommandation

Recommandation :

> commencer par **Option A — Persistance backend d'abord**.

Raison :

La démo dispose déjà :

- d'un frontend exploitable ;
- d'un backend minimal ;
- d'un contrat API ;
- d'un workflow nominal.

La prochaine vraie marche produit est donc de rendre le backend capable de conserver un état de manière durable.

Cela permet ensuite de traiter :

- API live plus crédible ;
- reprise après redémarrage ;
- séparation seed / données produit ;
- préparation future de l'authentification ;
- préparation future du CRM.

---

## 8. Premier cycle produit recommandé

Cycle recommandé :

`architecture/interv360-backend-persistence-decision`

Objectif :

- décider le mode de persistance backend ;
- comparer JSON file, SQLite, PostgreSQL ;
- choisir une solution adaptée au passage démo → produit ;
- définir le premier incrément d'implémentation.

Décision probable à confirmer :

- JSON file si on veut rester très léger ;
- SQLite si on veut une vraie première persistance produit locale ;
- PostgreSQL plus tard pour industrialisation.

---

## 9. Premier incrément d'implémentation attendu après décision

Cycle probable après décision :

`delivery/interv360-backend-persistence`

Objectif :

- introduire une persistance backend durable ;
- conserver l'API existante ;
- conserver les données fictives de seed ;
- conserver les tests backend ;
- ne pas modifier le frontend sauf nécessité mineure.

---

## 10. Hors scope immédiat

Ne pas ouvrir immédiatement :

- authentification ;
- CRM ;
- données réelles ;
- multi-utilisateur ;
- rôles / permissions ;
- production ;
- design/Figma ;
- refonte frontend ;
- workflow complet STAT-05 / STAT-07 / STAT-08.

Ces sujets sont importants, mais doivent être traités après la première brique produit.

---

## 11. Décision SFIA

La phase démonstrateur est terminée.

La suite doit être pilotée comme une trajectoire produit.

Décision :

> sortir du mode démo et ouvrir une première brique produit centrée sur la persistance backend.

Cette décision permet d'avancer sans basculer dans une industrialisation trop large.

---

## 12. Validation du cycle

| Contrôle | Résultat |
|----------|----------|
| Cadrage produit créé | OK |
| Phase démo reconnue clôturée | OK |
| Trajectoire produit définie | OK |
| Premier cycle produit recommandé | OK — `architecture/interv360-backend-persistence-decision` |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Nouveau scope métier ajouté | Non |
| Polish démo ajouté | Non |
| Données réelles introduites | Non |
| DB SQL introduite | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 13. Prochaine étape recommandée

Cycle recommandé :

`architecture/interv360-backend-persistence-decision`

Objectif :

- choisir la stratégie de persistance backend ;
- préparer le premier vrai incrément produit ;
- sortir définitivement du mode démonstrateur sans ouvrir trop large.

Décision attendue :

- JSON file si objectif transition très légère ;
- SQLite si objectif première vraie persistance produit locale ;
- PostgreSQL plus tard si industrialisation.

---

## 14. Préparation PR intégrée

### Titre proposé

`Frame Interv360 product industrialization`

### Description proposée

```markdown
## Summary
This PR frames the transition of Interv360 from Demo MVP to product trajectory.
It documents:
- the decision to stop demo-oriented polish cycles;
- the difference between Demo MVP and product reality;
- the risks of coding product features too quickly;
- four possible product trajectories;
- the recommendation to start with backend persistence;
- the next recommended cycle: `architecture/interv360-backend-persistence-decision`.
## Key decision
Interv360 should now move out of demo mode and enter a product trajectory.
The recommended first product step is backend persistence, because the demo already has:
- a usable frontend;
- a minimal backend;
- an API contract;
- a nominal workflow.
## Validation
- Product framing created
- Demo phase recognized as closed
- Product trajectory defined
- First product cycle recommended
- No frontend code changed
- No backend code changed
- No product implementation introduced
## Guardrails
No frontend change, backend change, demo polish, SQL database, CRM integration, authentication, real data, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

### Vérifications pré-PR

| Contrôle | Résultat |
|----------|----------|
| Diff limité au document de cadrage | OK |
| Frontend modifié | Non |
| Backend modifié | Non |
| Persistance implémentée | Non |
| Polish démo ajouté | Non |
| Trajectoire produit documentée | OK |
| Premier cycle recommandé | OK — `architecture/interv360-backend-persistence-decision` |

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...architecture/interv360-product-industrialization-framing?expand=1 |
| Cible | `main` |
| Source | `architecture/interv360-product-industrialization-framing` |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | [#49](https://github.com/mcleland147/sfia-workspace/pull/49) |
| Source | `architecture/interv360-product-industrialization-framing` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `81e56b7` |
| Main synchronisée | OK |
| Sortie mode démo actée | OK |
| Trajectoire produit définie | OK |
| Recommandation persistance backend | OK |
| Premier cycle produit recommandé | OK — `architecture/interv360-backend-persistence-decision` |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Code produit introduit | Non |
| Persistance implémentée | Non |
| Polish démo ajouté | Non |
| DB SQL introduite | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **Product Industrialization Framing** est mergé dans `main`.

La branche principale acte désormais officiellement :

- la fin du mode démonstrateur opportuniste ;
- l'entrée d'Interv360 dans une trajectoire produit ;
- l'arrêt des polish démo non justifiés ;
- la recommandation de commencer par une brique de persistance backend ;
- le prochain cycle recommandé : `architecture/interv360-backend-persistence-decision`.

Aucune implémentation produit n'a été introduite dans ce cycle.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery stratégique.

### Prochaine étape recommandée

Cycle recommandé :

`architecture/interv360-backend-persistence-decision`

Objectif :

- comparer JSON file, SQLite et PostgreSQL ;
- choisir la stratégie de persistance backend adaptée au passage démo → produit ;
- préparer le premier incrément produit d'implémentation.

Décision attendue :

- éviter PostgreSQL tant que l'industrialisation complète n'est pas décidée ;
- éviter une solution trop légère si elle ne permet pas de sortir réellement du mode démo ;
- privilégier une première brique produit locale, testable et maintenable.
