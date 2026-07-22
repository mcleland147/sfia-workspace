# 01 — Problème produit et rationale du rework

## Décision Morris consommée

**D1-I1 TECHNICAL FOUNDATION IMPLEMENTED — PRODUCT EXPERIENCE REWORK REQUIRED**

Les acquis techniques D1-I1 (Project SQLite, audit, shell fluide, routes, tests) sont **conservés**.
La cible produit « formulaire Nouveau projet + MethodMode utilisateur » est **remise en cause**.

## Symptômes observés (runtime I1 + captures)

1. Entrée principale = formulaire administratif (identité, objectif, contexte, MethodMode).
2. L’utilisateur doit connaître Project / MethodMode pour démarrer.
3. Cockpit expose IDs / événements techniques au centre de l’attention.
4. Placeholders I2–I5 visibles comme « zones futures » sans accompagnement.
5. Visibilité IA faible : pas de conversation de qualification avant mutation.
6. Pas de routage explicite nouveau projet / nouveau cycle / reprise / poursuite / analyse.
7. Continuité avec la vision framing (GuidedSession, intent-first, dual-channel) **rompue** par I1 form-first.

## Écart vs vision SFIA Studio

| Attendu (framing 05/11/16) | Livré I1 |
|----------------------------|----------|
| Intention → clarification → routage | Formulaire → create Project |
| GPT propose, humain confirme | Humain remplit et crée |
| MethodMode gouvernance | MethodMode choix UX |
| Audit métier lisible | Audit technique centré |
| « Nouvelle demande » conversationnelle | Legacy OPS1 + New Project CRUD |

## Pourquoi corriger avant code

- D1/D2/D3 dépendent de la qualification initiale.
- Rework UX + modèle + routes + orchestration si on poursuit form-first.
- Figma et contrats doivent être recalés **avant** GuidedSession / CycleInstance.

## Ce qui n’est PAS remis en cause

Persistance Project · SQLite · audit append-only · idempotence · D1AppShell · Cockpit technique · tests · legacy `/nouvelle-demande`.
