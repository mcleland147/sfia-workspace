# Interv360 — One-page Demo Summary

**Projet** : Interv360 — démonstrateur SAV local  
**Statut** : Prêt à présenter (Batch 03 + package Batch 04)

---

## Objectif

Présenter un **démonstrateur local** de parcours SAV structuré, avant toute intégration backend, CRM ou production.

---

## Message clé

Interv360 rend visible un **flux SAV nominal** (STAT-01 → STAT-06) de façon lisible, pilotable et rejouable — avec des limites explicites.

---

## Capacités visibles

- Multi-demandes fictives (3 demandes seed)
- Workflow nominal contrôlé (une action à la fois)
- Journal local filtré par demande
- Filtres et recherche en mémoire
- Priorité / criticité fictives
- Scénario guidé de présentation (6 étapes)
- Panneau readiness (checklist, capacités, limites)
- Parcours readonly (qualification, planification, intervention, compte rendu)

---

## Limites assumées

| Limite | Détail |
|--------|--------|
| Local uniquement | `localStorage`, pas de serveur |
| Données fictives | Aucune donnée réelle |
| Pas de backend / API | Hors périmètre volontaire |
| Pas de CRM | Aucune intégration externe |
| Pas d'authentification | Pas de multi-utilisateur |
| Pas de production | Prototype de démonstration |

---

## Valeur

Le démonstrateur permet de :

- discuter d'un **parcours cible** ;
- valider des **principes fonctionnels** ;
- préparer les **prochaines décisions** sans engager trop tôt une architecture complexe.

**Valeur SFIA** : illustration du passage micro-cycles → Fast Delivery → Batch Delivery, avec garde-fous conservés.

---

## Prochaine trajectoire possible

- Enrichir les scénarios métier fictifs
- Cadrer une architecture backend
- Définir un modèle de données cible
- Préparer une intégration CRM future
- Envisager gestion des rôles et prototype connecté

---

## Lancement rapide

```bash
cd projects/interv360/app
npm install && npm run dev
```

**Documents** : `08-presentation/interv360-demo-presentation-package.md` · `interv360-demo-script.md`
