# Interv360 — MVP Final Roadmap

**Projet** : Interv360  
**Cycle** : MVP Final Roadmap  
**Mode** : SFIA Fast Track — Product Roadmap structurante  
**Statut** : Roadmap produit cible  
**Branche** : `product/interv360-mvp-final-roadmap`

---

## 1. Objectif

Ce document définit la roadmap de finalisation produit d'Interv360.

La phase de démonstration est considérée comme validée.

L'objectif est désormais de faire évoluer Interv360 vers un **MVP produit structuré, finalisable et exploitable**, sans se limiter à l'amélioration de la démo.

---

## 2. Point de départ

Interv360 dispose aujourd'hui :

- d'un backend SQLite persistant ;
- d'une API `/api/v1` stabilisée ;
- d'un frontend connecté ;
- d'un mode local et d'un mode API ;
- d'un workflow métier enrichi ;
- d'une mise en attente ;
- d'une reprise ;
- d'une annulation ;
- d'une requalification légère ;
- d'une matrice de permissions ;
- d'un user switcher frontend ;
- de 5 utilisateurs fictifs ;
- d'une session locale frontend ;
- d'un runbook de démonstration ;
- de tests backend et frontend.

La démo n'est plus le sujet principal.

Le sujet devient :

> finaliser un produit MVP cohérent, robuste et livrable.

---

## 3. État d'avancement actuel

Estimation produit :

| Axe | État | Avancement estimé |
|-----|------|-------------------|
| Démo produit | Validée | 90% |
| Workflow métier | Solide MVP | 80% |
| Permissions / rôles | Cohérent en simulation | 75% |
| Utilisateurs / session | Fondation frontend | 40% |
| Backend / API | Stable mais incomplet produit | 65% |
| Audit trail | Partiel | 45% |
| Modèle métier demande | Correct mais à finaliser | 60% |
| UX produit | Correcte mais encore démonstrative | 60% |
| Industrialisation | Partielle | 50% |

Estimation globale :

> Interv360 est à environ **65% d'un MVP produit finalisable**.

---

## 4. Changement de posture produit

Avant :

> construire une démonstration crédible.

Maintenant :

> finaliser un MVP produit structuré.

Conséquences :

- ne plus créer de cycles uniquement orientés démo ;
- privilégier les capacités produit réelles ;
- réduire les incréments cosmétiques ;
- conserver le Fast Track ;
- regrouper les décisions utiles dans des lots cohérents ;
- éviter les PR documentaires intermédiaires sans valeur produit directe.

---

## 5. Définition du MVP final Interv360

Le MVP final doit permettre :

1. de gérer une demande d'intervention ;
2. de suivre son cycle de vie ;
3. d'identifier un utilisateur courant ;
4. d'appliquer des permissions cohérentes ;
5. de tracer les actions ;
6. de consulter un historique exploitable ;
7. de disposer d'une API claire ;
8. de persister les données ;
9. de démontrer un usage produit crédible ;
10. de documenter installation, usage, limites et évolutions.

---

## 6. Critères de sortie du MVP final

Le MVP final sera considéré atteint lorsque :

| Critère | Attendu |
|---------|---------|
| Users backend | Présents |
| Session applicative minimale | Présente |
| Rôle porté par utilisateur | Oui |
| Permissions appliquées | Oui |
| Audit trail enrichi | Oui |
| Historique lisible UI | Oui |
| Modèle demande finalisé | Oui |
| API documentée | Oui |
| Tests backend/frontend stables | Oui |
| Runbook produit final | Oui |
| README installation/usage | Oui |
| Auth réelle externe | Non obligatoire |
| CRM / données réelles | Non obligatoire |
| SSO / Entra ID | Non obligatoire |

---

## 7. Roadmap de finalisation

### Lot 1 — Backend users & session

Objectif :

- sortir du user switcher uniquement frontend ;
- créer une fondation utilisateur côté backend ;
- préparer l'audit trail.

À livrer :

- modèle utilisateur backend ;
- seed utilisateurs fictifs backend ;
- endpoint users ;
- session applicative minimale ;
- rôle porté par l'utilisateur backend ;
- frontend branché sur cette source ;
- conservation des permissions existantes.

Branche recommandée :

`delivery/interv360-backend-users-session`

Priorité :

**Très haute**

---

### Lot 2 — Audit trail produit

Objectif :

- tracer proprement les actions métier.

À livrer :

- acteur dans chaque événement ;
- ancien statut ;
- nouveau statut ;
- action ;
- date ;
- affichage historique UI ;
- tests persistence/API/UI.

Branche recommandée :

`delivery/interv360-audit-trail`

Priorité :

**Très haute**

---

### Lot 3 — Modèle métier demande final

Objectif :

- stabiliser le modèle métier `Request`.

À livrer :

- demandeur ;
- site ;
- équipement ;
- catégorie ;
- priorité ;
- criticité ;
- impact métier ;
- affectation éventuelle ;
- statut ;
- historique ;
- validations métier.

Branche recommandée :

`delivery/interv360-request-model-finalization`

Priorité :

**Haute**

---

### Lot 4 — API product hardening

Objectif :

- rendre l'API plus propre et exploitable.

À livrer :

- endpoints clarifiés ;
- erreurs homogènes ;
- validations API renforcées ;
- documentation API ;
- tests API élargis ;
- compatibilité frontend conservée.

Branche recommandée :

`delivery/interv360-api-product-hardening`

Priorité :

**Haute**

---

### Lot 5 — UX produit final MVP

Objectif :

- sortir de l'interface orientée démonstration.

À livrer :

- parcours utilisateur plus produit ;
- fiche demande plus lisible ;
- historique clair ;
- actions mieux structurées ;
- messages améliorés ;
- états vides / erreurs ;
- vue utilisateur courant clarifiée.

Branche recommandée :

`delivery/interv360-product-ux-finalization`

Priorité :

**Moyenne à haute**

---

### Lot 6 — Industrialisation MVP

Objectif :

- rendre le produit livrable proprement.

À livrer :

- README global ;
- guide installation ;
- guide exploitation locale ;
- variables `.env` propres ;
- scripts build/test/run ;
- limites connues ;
- stratégie de déploiement ;
- éventuellement CI.

Branche recommandée :

`delivery/interv360-product-industrialization`

Priorité :

**Moyenne**

---

## 8. Hors scope du MVP final

Le MVP final n'exige pas encore :

- SSO ;
- Entra ID ;
- OAuth complet ;
- CRM réel ;
- données réelles ;
- multi-tenant ;
- SLA avancés ;
- moteur BPMN ;
- moteur workflow externe ;
- reporting avancé ;
- notifications ;
- supervision ;
- déploiement cloud complet.

Ces sujets restent possibles plus tard, mais ne doivent pas bloquer la finalisation du MVP.

---

## 9. Méthodologie SFIA adaptée

La méthode SFIA doit rester accélérée, mais plus orientée produit.

Règles à appliquer :

1. un lot = une capacité produit exploitable ;
2. pas de PR documentaire isolée sauf décision structurante ;
3. cadrage intégré au delivery quand possible ;
4. PR unique par lot ;
5. post-merge léger ;
6. tests obligatoires à chaque lot ;
7. garde-fous explicites dans chaque delivery doc ;
8. pas de scope creep ;
9. pas de Notion tant que non demandé ;
10. pas de modification `sfia-notion-sync`.

---

## 10. Découpage recommandé des prochains cycles

| Ordre | Cycle | Type | Résultat attendu |
|------|-------|------|------------------|
| 1 | `delivery/interv360-backend-users-session` | Delivery | Users backend + session minimale |
| 2 | `delivery/interv360-audit-trail` | Delivery | Historique fiable avec acteur |
| 3 | `delivery/interv360-request-model-finalization` | Delivery | Modèle demande stabilisé |
| 4 | `delivery/interv360-api-product-hardening` | Delivery | API renforcée/documentée |
| 5 | `delivery/interv360-product-ux-finalization` | Delivery | UX MVP final |
| 6 | `delivery/interv360-product-industrialization` | Delivery | Livrable installable/documenté |

---

## 11. Estimation cible

| Jalons | Estimation |
|--------|------------|
| État actuel | 65% |
| Après Lot 1 users/session | 72% |
| Après Lot 2 audit trail | 80% |
| Après Lot 3 modèle demande | 86% |
| Après Lot 4 API hardening | 90% |
| Après Lot 5 UX finalisation | 94% |
| Après Lot 6 industrialisation | 96–98% |

Objectif réaliste :

> atteindre **90–95% MVP produit structuré** avant d'ouvrir les sujets enterprise lourds.

---

## 12. Premier lot recommandé

Le premier lot à ouvrir est :

`delivery/interv360-backend-users-session`

Objectif :

- matérialiser les utilisateurs côté backend ;
- sortir d'une session purement frontend ;
- préparer l'audit trail ;
- conserver une approche simple sans OAuth/JWT/SSO.

Ce lot ne doit pas introduire :

- login réel ;
- mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles.

---

## 13. Décision finale

| Élément | Décision |
|--------|----------|
| Phase démo | Clôturée |
| Nouvelle cible | MVP produit structuré |
| Avancement actuel | 65% |
| Cible intermédiaire | 90–95% |
| Méthode | SFIA Fast Track produit |
| Prochain lot | Backend users & session |
| Prochaine branche recommandée | `delivery/interv360-backend-users-session` |

---

## 14. Préparation PR

### Titre proposé

`Define Interv360 MVP final roadmap`

### Description proposée

```markdown
## Summary
This PR defines the final MVP roadmap for Interv360.
It marks the end of the demo-oriented phase and shifts the project toward a structured, finalizable product MVP.

## What changed
- defines the current product maturity at approximately 65%;
- defines the target as 90–95% MVP product maturity;
- clarifies that the demo phase is now considered validated;
- defines the MVP final criteria;
- introduces the SFIA Fast Track product-oriented method;
- defines the 6 delivery lots required to finalize the MVP:
  1. Backend users & session
  2. Audit trail
  3. Request model finalization
  4. API product hardening
  5. Product UX finalization
  6. Product industrialization

## Next recommended lot
`delivery/interv360-backend-users-session`
This lot will introduce backend users and a minimal application session, while keeping the approach simple and excluding OAuth/JWT/SSO at this stage.

## Validation
Documentation-only PR.
No code, frontend, backend, SQLite, API, authentication, OAuth/JWT/SSO, CRM, real data, workflow status, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
```

---

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...product/interv360-mvp-final-roadmap?expand=1 |
| Cible | `main` |
| Source | `product/interv360-mvp-final-roadmap` |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #64 — https://github.com/mcleland147/sfia-workspace/pull/64 |
| Source | `product/interv360-mvp-final-roadmap` |
| Cible | `main` |
| Méthode | `Merge commit (GitHub PR merge)` |
| Commit merge | `93c28b0` |
| Main synchronisée | OK |
| Type de PR | Décision structurante |
| Code modifié | Non |
| Frontend modifié | Non |
| Backend modifié | Non |
| SQLite modifiée | Non |
| API modifiée | Non |
| Auth réelle introduite | Non |
| OAuth / JWT / SSO introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveau statut introduit | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

La roadmap **Interv360 MVP Final Roadmap** est mergée dans `main`.

Elle acte la bascule suivante :

> phase démo validée → finalisation MVP produit structuré.

Décisions confirmées :

- avancement actuel estimé : **65%** ;
- cible intermédiaire : **90–95% MVP produit structuré** ;
- méthode : **SFIA Fast Track produit** ;
- découpage en 6 lots ;
- premier lot à ouvrir : `delivery/interv360-backend-users-session`.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Track.

### Prochaine étape

Ouvrir le Lot 1 :

`delivery/interv360-backend-users-session`

Objectif :

- matérialiser les utilisateurs côté backend ;
- introduire une session applicative minimale ;
- conserver une approche simple sans OAuth/JWT/SSO ;
- préparer l'audit trail.

---

## 17. Ouverture du Lot 1

Le Lot 1 de la roadmap est ouvert dans la branche :

`delivery/interv360-backend-users-session`

Objectif :

- matérialiser les utilisateurs côté backend ;
- introduire une session applicative minimale ;
- conserver une approche simple sans OAuth/JWT/SSO ;
- préparer le Lot 2 Audit Trail.

Document delivery associé :

`../07-delivery/backend-users-session.md`

Décision :

- pas de PR documentaire intermédiaire pour BUS-01 ;
- le cadrage opérationnel est intégré directement au lot delivery ;
- PR unique prévue en fin de lot.
