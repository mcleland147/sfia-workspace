# 11 — UX / architecture d’information (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Hors scope | Maquettes HF, Figma |

## 0. Enforcement doctrinal (complément)

L’utilisateur ne choisit pas un workflow hors méthode en mode v3.  
Studio propose les parcours pertinents selon ProjectState/CycleState (doc 16).  
Badge de **mode** (v2.6 / transition / v3 / fallback) toujours visible.

## 1. Principes UX candidats

1. **Cockpit avant chat** — conversation = panneau du cycle.  
2. **État toujours visible** — projet, cycle, mode, gates, contexte.  
3. **Décision explicite** — gates UI ; jamais « GO » chat seul.  
4. **Preuves à portée** — diffs, digests, artefacts, restitutions.  
5. **Progressive disclosure** — canal de contrôle compact.  
6. **Fail-closed perceptible** — blocked/stale/denied + fallback mode.  
7. **Parcours conditionnés** — actions disponibles = doctrine × état.  
8. **Pas de dashboard fourre-tout**.

## 2. Architecture d’information

```
Accueil
├── Créer projet
├── Reprendre projet
└── Consulter / importer finalisé
Projet (cockpit)
├── Trajectoire
├── Cycles (liste)
├── Cycle actif
│   ├── Contexte SFIA
│   ├── Conversation guidée
│   ├── Décisions
│   ├── Actions
│   ├── Exécutions
│   ├── Preuves
│   └── Validation / transition
├── Risques / réserves
├── Capitalisation
└── Admin / rôles (futur)
```

## 3. Points d’entrée

| Entrée | Destination | Précondition |
|--------|-------------|--------------|
| Nouveau projet | Wizard léger + GuidedSession FRAMING | Auth |
| Reprendre projet | Cockpit projet | Project existant |
| Initier cycle | Cycle Router + qualification | Project ACTIVE/FRAMING |
| Poursuivre cycle | Cycle actif | CycleInstance ouverte |
| Traiter décision | Panneau DecisionRequest | DECISION_REQUIRED |
| Analyser résultat | Preuves + reinjection | Evidence disponible |
| Valider | Validation panel | VALIDATING |
| Clôturer | Transition CLOSE | Critères + gate |
| Capitaliser | CapitalizationRecord | COMPLETED |

## 4. Écrans candidats (responsabilité)

| Vue | Une job |
|-----|---------|
| Accueil | Choisir créer/reprendre |
| Création projet | Identité + baseline + intention |
| Cockpit projet | Santé + prochaines décisions |
| Trajectoire | Jalons candidats vs validés |
| Cycles | Historique + états |
| Cycle actif | Conduire le travail (chat + contrôle) |
| Décisions | Gates et DecisionRequests |
| Actions | ActionCandidates |
| Exécutions | Attempts + statut |
| Preuves | Evidence browser |
| Validation | ValidationResult |
| Réserves | Classification + suivi |
| Capitalisation | REX / assets |
| Admin | Rôles / permissions (futur) |

## 5. Conversation dans le cycle

- Panneau latéral ou inférieur, **jamais** page blanche type ChatGPT seul.  
- Afficher : `contextId`, profil, gates fermés, ops interdites.  
- Après proposal : panneau compilation + ActionCandidate.  
- Boutons fixture **hors** parcours live produit.

## 6. Accessibilité / i18n (cadrage)

- Contrastes, focus gates, labels explicites.  
- FR d’abord ; i18n plus tard.  
- Pas de dépendance au seul code couleur pour blocked/GO.

## 7. Écart vs UI OPS1 actuelle

OPS1 = excellent **banc d’essai**.  
v3.0 UX = **produit projet** ; l’écran session unique devient insuffisant.

## 8. Décisions humaines requises

- Valider IA et points d’entrée.  
- Trancher densité du canal de contrôle.  
- Prioriser vues du vertical slice (doc 13).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.
