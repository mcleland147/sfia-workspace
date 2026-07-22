# 15 — Modèle d’applicabilité Studio-native (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Baseline | SFIA v2.6 |
| Gate | Complément cadrage SFIA v3.0 |

## 1. Ce que signifie « appliquer SFIA v3.0 »

**Observation :** le cadrage initial (01–14) décrivait un Project OS sans assez fermer le critère *où* la doctrine s’applique.

**Décision de cadrage candidate (≠ adoption baseline) :** SFIA v3.0 n’est applicable que lorsque **SFIA Studio pilote effectivement** le projet, le cycle, le contexte, les décisions, les actions, les exécutions, les preuves, les validations et les transitions.

Le modèle suivant **n’est pas** SFIA v3.0 :

```
Humain → ChatGPT → prompt → copier-coller Cursor → retour manuel → ChatGPT
```

Ce modèle reste **SFIA v2.6** (ou legacy assisté).

## 2. Composants indispensables (candidats)

| Composant | Pourquoi indispensable |
|-----------|------------------------|
| Project persisté | Sans projet, pas de v3 |
| CycleInstance | Routage et états |
| Canonical + project context | Doctrine exécutable |
| GuidedSession rattachée | No-free-chat |
| HumanDecision / GateInstance | Gouvernance |
| ActionCandidate + Compiler | Effets structurés |
| ExecutionContract + Attempt | Cursor borné |
| Evidence + Validation | Preuves |
| Transition tracée | Enchaînement |
| Audit trail | Non-répudiation minimale |

## 3. Capacités minimales / contrôles / preuves

**Capacités :** UI cockpit projet ; chargement digests Git ; dual-channel GPT ; persist SQL états ; gates UI ; Cursor sous contrat ; postcheck ; reinjection ; export review.

**Contrôles :** fail-closed ; allowlist ; CONTEXT_STALE ; gates fermés par défaut pour remote writes ; pas d’effet hors contrat.

**Preuves :** events corrélés ; digests sources ; contractHash ; fichiers touchés ; ValidationResult ; handoff si rapport Cursor.

## 4. Matrice des modes

| Mode | Acteurs | SoT | Projet/Cycle | Conversation | Contrats | Gates | Exécution | Claims |
|------|---------|-----|--------------|--------------|----------|-------|-----------|--------|
| **1. v2.6 manuel** | Humain, ChatGPT, Cursor | Git + chat | Hors Studio | Libre hors produit | Prompt Markdown | Humain hors UI | Copier-coller | v2.6 only |
| **2. v2.6 assisté Studio** | + Studio partiel | Git + OPS1 partiel | Session loose | Studio chat | Partiels OPS1 | UI OPS1 | Cursor OPS1 possible | **Pas de claim v3** |
| **3. Transitionnel** | Studio + GPT + Cursor | Git + SQL partiel | Projet/cycle partiels | Rattachée si dispo | Partiels | Mixtes | Sous contrat si dispo | « v3 candidate / transition » |
| **4. v3.0 Studio-native** | Tous rôles Studio | Git defs + SQL état + artefacts | Complets | Dual-channel | Complets | UI + policy | Contract→Cursor | Claim v3 **si éligible** |
| **5. v3 indisponible / fallback** | Opérateur | Mode 1 ou 2 | — | — | — | — | Legacy | **Interdit claim v3** |

## 5. Critères d’entrée / sortie v3 (candidats — non figés)

**Entrée éligibilité v3 (projet) :** checklist capacités §2 + mode 4 actif + doctrine version affichée + audit on.

**Sortie / fallback :** capacité manquante, stale non résolu, authz insuffisante, divergence Git/SQL non réparée → bascule mode 5 avec message explicite.

## 6. Comportements dégradés

- Afficher le mode courant dans l’IHM.  
- Interdire les claims v3 hors mode 4 éligible.  
- Ne jamais « simuler » un gate.  
- Conserver export Git des artefacts critiques.

## 7. Décisions humaines requises

- Valider la définition Studio-native.  
- Valider la matrice des 5 modes.  
- Trancher les critères minimaux (renforcer ou alléger).

---

## Clôture cadrage

**D1 validée :** applicabilité Studio-native exclusive. Modes 1–5 conservés. Statut plateforme cible actuelle : **V3-DOCUMENTED**.
