# 07 — Automatisation et décisions humaines (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Source | Grille L0–L5 v2.6 / operating model — à étendre, non remplacer silencieusement |

## 1. Principe candidat cardinal

> L’automatisation peut être élevée sur les opérations **répétables, bornées, contrôlables et réversibles**.  
> La **décision structurante** ne doit **jamais** être déléguée automatiquement à un agent.

## 2. Redécoupage candidat (au-delà d’un seul axe L0–L5)

| Domaine | Exemple | Niveau candidat max sans GO structurant | Gate humain ? |
|---------|---------|------------------------------------------|---------------|
| Collecte | lire Git/GitHub, digests | Élevé | Non (policy read) |
| Qualification | proposer cycle/profil | Moyen | Clarification si doute |
| Raisonnement | analyse GPT | Élevé (prose) | Non pour prose seule |
| Préparation | ActionProposal, review pack draft | Moyen-élevé | Non jusqu’à effet |
| Exécution | Cursor sous contrat | Moyen | **Oui** GO action |
| Contrôle | allowlist, postcheck, stale | Élevé | Non (déterministe) |
| Transition | proposer cycle suivant | Moyen | **Oui** si structurant |
| Décision | adopter baseline, merge doctrine, remote write large | **Nul (agent)** | **Toujours** |

## 3. Grille risque / réversibilité

| Classe d’effet | Risque | Réversibilité | Automatisation candidate |
|----------------|-------|---------------|--------------------------|
| Lecture locale | Bas | N/A | Auto |
| CREATE markdown allowlisté | Moyen | Haute (revert Git) | Préparer auto ; exécuter après GO |
| MODIFY code allowlisté | Moyen-haut | Moyenne | GO + contrat |
| commit local | Haut | Moyenne | GO dédié |
| push / PR / merge | Très haut | Basse | GO dédiés séparés |
| modifier `method/` / `prompts/` | Critique | Basse | GO méthode + cycle dédié |
| L5 décisionnel | Interdit | — | Bloqué |

## 4. Conditions de supervision

Toute automatisation doit :

1. produire des **traces** (events) ;  
2. pouvoir être **arrêtée** ;  
3. être **bornée** (timeout, paths, ops) ;  
4. échouer **fermé** ;  
5. exposer le **pourquoi** (explainable).

## 5. Stop conditions candidats (automatisation)

- Autorité ambiguë.  
- Contexte stale.  
- Effet hors allowlist.  
- Gate fermé.  
- Divergence digest sources.  
- Multi-écriture non déclarée.  
- Demande de décision structurante détectée dans un flux « auto ».

## 6. Cartographie décisions humaines (non déléguables)

| Décision | Pourquoi humaine |
|----------|------------------|
| Adoption baseline méthode | Changement de doctrine |
| GO validation cadrage | Orientation produit |
| GO action Cursor | Effet workspace |
| GO commit / push / PR / merge | Effets Git/GitHub |
| Promotion option → décision | Gouvernance |
| Clôture projet / archivage | Responsabilité |
| Exception chemin protégé | Sécurité |

## 7. Lien Control Tower / OPS1

Déjà automatisable / prouvé partiellement : collecte read, compilation ActionCandidate, contrôles allowlist, exécution après GO, rapport, reinjection.  
Toujours humain : gates, adoption v3.0, writes distants.

## 8. Décisions humaines requises

- Valider le redécoupage par domaine.  
- Confirmer l’interdiction L5 décisionnel.  
- Trancher le niveau d’auto pour transitions non structurantes (ex. purement documentaires).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Enforcement (D4)

Les écarts doctrinaux / d’effet sont classés **E0–E4** (doc 25). La décision structurante reste humaine ; E4 non dérogeable.
