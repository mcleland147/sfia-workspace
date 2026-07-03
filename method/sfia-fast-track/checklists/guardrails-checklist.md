# SFIA Fast Track — Guardrails Checklist

## 1. Garde-fous globaux

- [ ] Pas de backend modifié hors scope
- [ ] Pas d'API modifiée hors scope
- [ ] Pas de CI modifiée hors scope
- [ ] Pas de scripts modifiés hors scope
- [ ] Pas d'auth ajoutée hors scope
- [ ] Pas de CRUD ajouté hors scope
- [ ] Pas de publication Notion hors plan
- [ ] Pas d'exécution `sfia-notion-sync`
- [ ] Pas de tracking exports Figma

## 2. Garde-fous UI

- [ ] Figma Design validé si UI premium
- [ ] Pas de comportement métier implicite
- [ ] Actions hors scope désactivées
- [ ] Revue visuelle prévue

## 3. Garde-fous backend/API

- [ ] Cycle backend/API dédié
- [ ] Contrat API documenté
- [ ] Tests prévus
- [ ] Impacts frontend identifiés

## 4. Garde-fous documentation

- [ ] Aucun document supprimé sans audit
- [ ] Aucun déplacement sans cible validée
- [ ] Aucun statut obsolète laissé sans note
- [ ] Notion non publié sans plan
