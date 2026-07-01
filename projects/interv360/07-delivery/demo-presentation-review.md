# Interv360 — Demo Presentation Review

**Projet** : Interv360  
**Cycle** : Demo Presentation Review  
**Mode** : SFIA Fast Delivery documentaire  
**Statut** : Préparation de revue — feedback humain à collecter  
**Branche** : `delivery/interv360-demo-presentation-review`  
**Base** : `main` @ `7fde536`

---

## 1. Objectif

Ce cycle prépare et trace une présentation ou revue humaine du démonstrateur Interv360.

L'objectif est de recueillir un retour réel avant tout polish UX.

Ce cycle ne modifie pas le produit.

---

## 2. Point de départ

Le cycle précédent ([`demo-feedback-review.md`](./demo-feedback-review.md)) a conclu :

- aucun polish UX immédiat ;
- aucun irritant bloquant ;
- irritants gênants identifiés mais à confirmer ;
- prochaine étape recommandée : revue humaine réelle avant correction.

Les irritants à confirmer sont notamment :

- page longue / scroll ;
- cohérence readiness + script oral avec le mode API ;
- CORS limité si Vite change de port ;
- labels techniques visibles ;
- scénario guidé non synchronisé avec le workflow ;
- filtre STAT-01 masqué à 0.

Références de présentation :

- Runbook E2E : [`../08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)
- Script oral : [`../08-presentation/interv360-demo-script.md`](../08-presentation/interv360-demo-script.md)
- Package : [`../08-presentation/interv360-demo-presentation-package.md`](../08-presentation/interv360-demo-presentation-package.md)
- Synthèse : [`../08-presentation/interv360-demo-one-page-summary.md`](../08-presentation/interv360-demo-one-page-summary.md)

---

## 3. Réflexion d'optimisation SFIA

Lancer un polish UX maintenant serait prématuré.

Décision :

- présenter ou rejouer la démo ;
- collecter un feedback humain ;
- confirmer ou infirmer les irritants ;
- décider ensuite si un polish est utile ;
- ne pas corriger dans ce cycle.

---

## 4. Périmètre autorisé

Le cycle peut produire :

- une trame de présentation ;
- une grille de feedback ;
- une synthèse des retours ;
- une décision go / no-go polish ;
- une priorisation des irritants confirmés.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- modification frontend ;
- modification backend ;
- polish UX ;
- nouvelle fonctionnalité ;
- nouveau statut ;
- suppression `localStorage` ;
- backend obligatoire ;
- fallback silencieux ;
- DB SQL ;
- CRM ;
- authentification ;
- données réelles ;
- publication Notion ;
- modification Controlled Delivery ;
- modification `sfia-notion-sync`.

---

## 6. Trame de présentation recommandée

Durée indicative : 10 à 15 minutes.

1. Présenter l'objectif Interv360 (prototype local, parcours SAV structuré, données fictives).
2. Rappeler que la démo est locale et fictive par défaut.
3. Lancer `npm run dev` dans `app/` — montrer le badge **Mode local**.
4. Montrer le panneau **readiness** (`#section-readiness`).
5. Suivre le **scénario guidé** (`#section-scenario`) — navigation interne si besoin.
6. Sélectionner `SAV-DEMO-001` dans la liste.
7. Exécuter une transition nominale (**Qualifier la demande**).
8. Montrer le **journal** (`#section-journal`) pour la demande active.
9. **Réinitialiser la démo** — vérifier retour seed.
10. Mentionner le **mode API local** comme option avancée (deux terminaux, runbook §3) — ne pas l'imposer si l'interlocuteur est métier.
11. Conclure sur limites assumées (pas de CRM, pas de production) et trajectoire possible.

**Checklist présentateur** (avant la session) :

- [ ] Application lancée en mode local
- [ ] 3 demandes fictives visibles
- [ ] Reset effectué si session précédente
- [ ] Script oral ouvert à côté
- [ ] Runbook E2E accessible en secours
- [ ] Interlocuteur identifié (rôle, niveau technique)
- [ ] Grille §7 prête à compléter pendant ou après la session

---

## 7. Grille de feedback humain

| Zone | Question | Retour | Décision |
|------|----------|--------|----------|
| Compréhension globale | L'objectif est-il clair ? | À exécuter | En attente |
| Mode local/API | La différence est-elle compréhensible ? | À exécuter | En attente |
| Readiness | Le panneau aide-t-il la présentation ? | À exécuter | En attente |
| Scénario guidé | Le fil conducteur est-il utile ? | À exécuter | En attente |
| Liste demandes | La liste est-elle lisible ? | À exécuter | En attente |
| Détail demande | Les informations sont-elles suffisantes ? | À exécuter | En attente |
| Workflow | Les transitions sont-elles compréhensibles ? | À exécuter | En attente |
| Journal | La traçabilité est-elle lisible ? | À exécuter | En attente |
| Reset | La rejouabilité est-elle claire ? | À exécuter | En attente |
| Longueur page | Le scroll gêne-t-il la démo ? | À exécuter | En attente |
| Labels techniques | Les labels Batch/INC gênent-ils ? | À exécuter | En attente |
| Mode API | Doit-il être montré ou seulement mentionné ? | À exécuter | En attente |

---

## 8. Irritants à confirmer

| Irritant | Niveau issu feedback review | Confirmé ? | Décision |
|----------|-----------------------------|------------|----------|
| Page longue / scroll | Gênant | En attente | En attente |
| Readiness + script oral pas alignés API | Gênant | En attente | En attente |
| CORS limité si port Vite alternatif | Gênant | En attente | En attente |
| Labels Batch 01/02/03 | Mineur | En attente | En attente |
| Titre INC-01 | Mineur | En attente | En attente |
| Scénario guidé non synchronisé workflow | Mineur | En attente | En attente |
| Filtre STAT-01 masqué à 0 | Mineur | En attente | En attente |

---

## 9. Retours collectés

**Statut :** aucune présentation humaine réelle n'a été réalisée dans ce cycle.

Les retours ci-dessous ne doivent pas être interprétés comme un feedback interlocuteur. Ils seront complétés après une session avec un tiers (métier, technique ou mixte).

### Points compris facilement

- À compléter après présentation

### Points confus

- À compléter après présentation

### Irritants confirmés

- À compléter après présentation

### Irritants non confirmés

- À compléter après présentation

### Suggestions reçues

- À compléter après présentation

### Préparation technique validée (non humain)

| Élément | Résultat |
|---------|----------|
| Matériaux de présentation disponibles | OK — package, script, runbook, one-page |
| Trame §6 alignée sur script et package | OK |
| Frontend build | OK |
| Frontend tests | OK — 77 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Parcours local rejouable | OK — validé au cycle feedback review |

---

## 10. Décision polish

- [ ] Aucun polish nécessaire
- [ ] Polish UX mineur recommandé
- [ ] Correction prioritaire nécessaire
- [x] Nouvelle revue nécessaire

### Décision

**Pas de décision polish dans ce cycle.** Le feedback humain requis pour confirmer ou infirmer les irritants n'a pas encore été collecté. Lancer `delivery/interv360-demo-polish` ou une mise à jour documentaire ciblée serait prématuré sans retour d'interlocuteur réel.

---

## 11. Prochaine étape recommandée

**Action immédiate (hors repo) :** planifier et exécuter une session de présentation/revue avec un interlocuteur réel, en utilisant la trame §6 et la grille §7.

**Ensuite, selon retours :**

| Résultat attendu | Cycle recommandé |
|------------------|------------------|
| Irritants UX confirmés par un humain | `delivery/interv360-demo-polish` |
| Seules les docs (script, package, readiness) doivent évoluer | `delivery/interv360-demo-presentation-package-update` |
| Aucun irritant significatif confirmé | Pause temporaire — démo suffisante en l'état |

**Complément documentaire :** après la session humaine, mettre à jour ce document (§7–§10) ou ouvrir un cycle de suivi selon le mode SFIA en vigueur.

---

## 12. Validation

| Contrôle | Résultat |
|----------|----------|
| Revue humaine exécutée | Non — préparation uniquement |
| Trame de présentation produite | OK |
| Grille de feedback produite | OK |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Polish réalisé | Non |
| Frontend build | OK |
| Frontend tests | OK — 77 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Données réelles introduites | Non |
| DB SQL introduite | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |
