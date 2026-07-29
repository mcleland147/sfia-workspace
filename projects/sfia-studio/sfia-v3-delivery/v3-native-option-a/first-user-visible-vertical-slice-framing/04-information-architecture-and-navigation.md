# 04 — Information architecture and navigation

## 1. IA cible (premier slice)

```text
Home (disclosure + CTA)
 ├─ Create project
 ├─ Project overview
 │   ├─ Cycle recommendation
 │   ├─ Morris decision
 │   └─ Readiness dashboard
 └─ Bounded history (panel or section)
```

Demo/fixture entry (séparé) :
`Demo fixture mode` → VsDemoChrome (existant) — **non default**.

## 2. Navigation proposée

Réutiliser `StudioShell` flush :

| Onglet / rail | Route candidate | Remarque |
|---------------|-----------------|----------|
| Accueil | `/` ou `/studio` | disclosure |
| Créer | `/studio/projects/new` **ou** adapt `/projects/new` | D-VS-01 |
| Projet | `/studio/projects/[id]` | overview |
| Recommandation | section ou `/studio/projects/[id]/recommendation` | |
| Décision | `/studio/projects/[id]/decision` **ou** adapt `/decision` | |
| Readiness | `/studio/projects/[id]/readiness` **ou** adapt `/synthese` | |
| Cycle actif POC | `/cycle-actif` | secondary / later |

**Recommandation Cursor (D-VS-01)** : **Option hybride** —
- conserver StudioShell + tokens ;
- introduire namespace `/studio/*` pour le parcours OA afin d’éviter collision D1 `/nouvelle-demande` et VS fixtures ;
- garder `/decision` `/synthese` `/cycle-actif` comme alias/demo jusqu’à migration.

Ce n’est **pas** une décision Morris.

## 3. Hiérarchie visuelle

1. Disclosure mode local (toujours visible en bandeau)
2. Titre projet / étape
3. Action primaire unique
4. Statuts / blockers
5. Détail épistémique / technique (secondaire)

## 4. Densité

Standard — éviter dashboard « tout T-A7 » en premier viewport. Première vue = une job.

## 5. Copilot Nora

Conservé comme aide contextuelle **non autoritaire**. Messages anti-claim pré-écrits.
