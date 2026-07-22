# 06 — Routage des cycles et modèle de transitions (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Source v2.6 | `sfia-cycle-routing-guide.md` (non modifié) |

## 1. Principe hérité (à conserver)

```
type de cycle → documents à lire → template → validation → décision
```

SFIA ne repose pas sur la mémoire implicite du modèle. Le routage est **explicite** et **explicable**.

## 2. Cycles existants — traitement candidat

### Conserver (pertinence haute)
Cadrage, conception fonctionnelle, architecture fonctionnelle/technique, UX/UI, backlog, delivery, QA/validation, sécurité, DevOps/intégration, capitalisation/REX, post-merge, PR readiness (process).

### Adapter (Studio-native)
- Qualification **dans** Studio (pas seulement ChatGPT externe).  
- Review pack / handoff déclenchés depuis Validation Engine.  
- Template Cursor **instancié** (pas collé manuellement).

### Fusionner (candidats à analyser)
- Certains micro-cycles documentaires redondants avec « GuidedSession de qualification ».  
- Monitoring isolé → vues du cockpit (pas un cycle séparé obligatoire).

### Scinder (candidats)
- « Delivery » : préparation contrat vs exécution vs validation (déjà partiellement OPS1 I3–I6).  
- « Cadrage » : vision produit vs méthode vs gap analysis (ce pack v3.0 en est l’illustration).

### Manquants Studio-specific (candidats)
- Project bootstrap / import.  
- Role & permission setup (multi-user).  
- Transition governance pack (enchaînement cycles).  
- Evidence review cycle dédié si volume élevé.

### Transverses
Sécurité, observabilité, FinOps, GreenOps, accessibilité, RGPD : **blocs** activables dans un cycle plutôt que cycles isolés systématiques (héritage profils/blocs v2.6).

## 3. Conditions d’entrée / sortie (patron)

Pour chaque CycleInstance :

| Élément | Contenu |
|---------|---------|
| Entrée | ProjectState compatible, intention, sources mini, profil proposé |
| Infos requises | Objectif, périmètre, risques, gates ouverts/fermés |
| Conversation guidée | Dual-channel (doc 05) |
| Livrables | Docs / code / preuves selon type |
| Actions possibles | READ / propose / compile / execute-after-GO |
| Gates | Selon criticité + type d’effet |
| Validation | Critères explicites + ValidationResult |
| Transition | TransitionProposal → TransitionDecision |

## 4. Modèle de transition candidat

Chaque transition déclare :

1. **Déclencheur** (humain, validation OK, timer stale…)  
2. **Préconditions** (états, preuves, digests)  
3. **Acteurs** (décideur / moteur / GPT)  
4. **Gate** (oui/non + kind)  
5. **Objets d’entrée / sortie**  
6. **Contrôles** (policy, allowlist, stale)  
7. **Événements** audit  
8. **Erreurs / reprise**  
9. **Audit** corrélation ids  

Exemple :

`ACTIVE + ValidationResult=PASS → TransitionProposal(cycle suivant) → DECISION_REQUIRED → TransitionDecision=GO → nouvel CycleInstance READY`

## 5. Profils et typologie

Conserver la distinction v2.6 :

- **Type de cycle** = nature du travail.  
- **Profil** Light / Standard / Critical / Capitalization = profondeur / contrôles.  
- **Typologie** INC / EVOL / RUN / CAPA / DOC = cadre consolidation.

Ne pas « Critical par défaut ».

## 6. Template Cursor — rôle futur

Le template Git `prompts/templates/sfia-cycle-execution-template.md` reste la **structure de référence**.  
Studio **instancie** les sections applicables (acquis 74) ; ne réinvente pas la structure en constante TS.

## 7. Décisions humaines requises

- Valider la cartographie conserver/adapter/fusionner/scinder.  
- Valider les états de cycle retenus.  
- Décider quels cycles Studio-specific créer en premier.
