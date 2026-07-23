# Cycle Knowledge Contracts — Cadrage & architecture (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `00-framing-and-architecture.md` |
| **Statut** | `method-candidate` — **non baseline** · **non adopted** · **non validated** |
| **Cycle** | Cadrage méthode / Création foundation |
| **Profil** | Critical |
| **Gate consommé** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
| **Branche** | `method/sfia-cycle-knowledge-contracts` |
| **Base** | `origin/main` @ `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| **Baseline méthode** | SFIA **v2.6** |
| **Source cycles** | Template v2.6 §4 + `sfia-v2.5-project-cycles-method-candidate.md` (candidate absorbée, référence opérationnelle des 15 types) |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.
> Aucune claim « METHOD BASELINE UPDATED », « CONTRACTS ADOPTED », « SFIA V2.6 UPDATED ».

---

## 1. Problème

**Observation.** La méthode fournit déjà cartographie, routage, profils, blocs, gates, template d’exécution et validation.

**Observation.** Le **nom** d’un cycle (ex. « Cadrage ») ne suffit pas toujours à donner à GPT une **posture cognitive complète** : dimensions à examiner, signaux de maturité/immaturité, biais, anti-claims, transitions raisonnables.

**Problème.** Sans cadre cognitif, GPT peut :

- conclure trop tôt ;
- poser un questionnaire mécanique ;
- confondre exécution et raisonnement ;
- proposer des transitions inadaptées ;
- masquer l’incertitude.

---

## 2. Hypothèse challengée

### Hypothèse

Un **Cycle Knowledge Contract (CKC)** est un cadre cognitif et méthodologique qui indique à GPT ce qu’une réflexion sérieuse sur un cycle ne doit pas oublier, **sans** dicter les réponses ni imposer des questions fixes.

### Chaîne candidate

Intention → convergence conversationnelle → cycle candidat → **chargement CKC** → raisonnement contextualisé → maturité → décision humaine → contrat d’exécution → Cursor → preuves → validation.

### Challenge

| Question | Verdict candidat |
|----------|------------------|
| Nouvel objet nécessaire ? | **Oui, partiellement** — lacune cognitive réelle ; pas un remplacement de la méthode §4 |
| Consolidation seule ? | Insuffisante : §4 donne objectifs/livrables/gates, **pas** dimensions de maturité ni signaux adaptatifs |
| Concurrence routing guide ? | **Évitable** si CKC ne sélectionne pas les références |
| Concurrence template ? | **Évitable** si CKC ne borne pas fichiers/actions Cursor |
| Document / section / données ? | **Markdown repo-first** + index ; JSON/YAML **non requis** maintenant |
| Quatre pilotes suffisent ? | **Oui pour valider le modèle** ; pas pour généraliser |
| Terme « Cycle Knowledge Contract » ? | **Pertinent candidat** ; alternatives : « Cycle Cognitive Frame », « Cycle Reasoning Guide » — **Décision Morris** |

**Recommandation.** CREATE un actif **complémentaire** (EXTEND la méthode cycles), statut **candidate** uniquement.

---

## 3. Audit préalable — matrice des actifs

Sources principales lues :

- `prompts/templates/sfia-cycle-execution-template.md` (protégé)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (protégé)
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` (protégé)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` (protégé)
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- UX 87/88 depuis worktree UX (absents de `main`)

| Besoin | Document existant | Couverture | Lacune | Duplication | Verdict |
|--------|-------------------|------------|--------|--------------|---------|
| Finalité du cycle | Méthode cycles §4 | Forte | — | Faible si CKC renvoie | **REUSE** |
| Cas d’usage / quand | Méthode §4 déclenchement | Moyenne | Peu d’anti-cas | Faible | **EXTEND** |
| Posture GPT | Operating model (rôles) | Faible–moyenne | Posture **par cycle** absente | Moyenne si redondant | **CREATE** (par cycle) |
| Dimensions d’analyse | Méthode §4 déroulé | Partielle | Pas de dimensions cognitives stables | Faible | **CREATE** |
| Maturité | UX 87 (candidat) ; confidence C2 | Faible méthode | Bandes/dimensions cycle | Faible | **CREATE** |
| Fiabilité | Validation checklist | Preuves cycle | Critères **pendant** raisonnement | Faible | **CREATE** |
| Livrables | Méthode §4 ; Knowledge Layer DRM | Forte | — | Éviter | **REUSE** |
| Preuves | Template ; Validation checklist | Forte | — | Éviter | **REUSE** |
| Anti-claims | Rules ; template anti-patterns | Partielle | Anti-claims **métier cycle** | Faible | **EXTEND** |
| Gates | Méthode §4 ; Decision Engine | Forte | — | Éviter | **REUSE** |
| Transitions | Méthode amont/aval | Moyenne | Transitions **conditionnelles** | Faible | **EXTEND** |
| Blocs | Template §6 | Forte | — | Éviter | **REUSE** |
| Sources / routage | Routing guide ; DRM | Forte | — | Interdit de dupliquer | **REUSE** |
| Validation | Validation checklist | Forte | — | Éviter | **REUSE** |
| Arrêt / pause | Méthode stop ; UX 87 | Partielle | Pause conversationnelle | Faible | **EXTEND** |
| Reprise | Operating / post-merge | Partielle | Reprise cognitive | Faible | **EXTEND** |
| Capitalisation | Méthode §4.15 ; Knowledge Layer | Forte | — | Éviter | **REUSE** |

### Synthèse audit

| Verdict global | CREATE (complément cognitif) + EXTEND ciblé + REUSE strict des objets d’exécution |
| Stop « assets suffisants » ? | **Non** — lacune posture/maturité/fiabilité cognitive démontrée |
| Stop « duplication massive » ? | **Non** si discipline de non-répétition des tables §4 / routing / template |

---

## 4. Séparation des responsabilités (obligatoire)

| Objet | Rôle | CKC ne doit pas |
|-------|------|-----------------|
| **Cycle Knowledge Contract** | Guider le **raisonnement** GPT | Lister fichiers, forcer questions, ouvrir PR |
| **Routing guide** | Sélectionner références et contrôles | Devenir encyclopédie métier |
| **Template d’exécution** | Borner Cursor | Définir la profondeur cognitive |
| **Validation checklist** | Contrôler preuves / verdict | Remplacer maturité conversationnelle |
| **Doctrine / rules** | Principes et autorité | Être réécrite ici |
| **UX 87/88** | Convergence conversationnelle Studio | Être modifiée dans ce cycle |

---

## 5. Principes de conception retenus (candidats)

1. **Dimensions stables, questions adaptatives** — jamais questionnaire exhaustif.
2. **Posture professionnelle** — pas de persona théâtral.
3. **Maturité qualitative** — bandes + dimensions, pas % magique.
4. **Séparation** routing / template / validation / CKC.
5. **Statut candidate** jusqu’à GO validation Morris.
6. **Court et utile** — sections obligatoires minimales ; le reste conditionnel.
7. **Compatibilité UX** — alimente challenge/maturité en arrière-plan ; pas 25 champs UI.

---

## 6. Comparaison de formats

### Option A — Un Markdown par cycle

| | |
|--|--|
| Avantages | Navigable ; diff Git clair ; charge GPT sélective |
| Limites | 15 fichiers ; risque de dérive de structure |
| Maintenabilité | Bonne avec template strict |
| Reco | Adapté aux **pilotes** et généralisation future |

### Option B — Un document unique à 15 sections

| | |
|--|--|
| Avantages | Une seule source |
| Limites | Contexte GPT trop large ; diffs bruyants |
| Reco | **Déconseillé** pour le détail |

### Option C — Modèle commun + contrats séparés + index

| | |
|--|--|
| Avantages | Cohérence + sélectivité + index Studio/GPT |
| Limites | Légère complexité d’arborescence |
| Reco | **Recommandation candidate** |

### JSON/YAML

**Non retenu** pour l’instant — pas de schéma exécutable démontré. Machine format = gate futur si Studio doit charger des enums.

**Recommandation format :** Option **C**, Markdown repo-first.

---

## 7. Emplacement documentaire (candidat)

```
method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/
```

Justification : actif **candidate** sous capitalization ; **hors** `core/` protégé ; n’entre pas dans `cycles/` (capitalisations projet historiques).

Modification routing/template : **documentée comme besoin futur**, **non exécutée**.

---

## 8. Relation future avec routing / template (non exécutée)

| Modification candidate | Fichier protégé | Gate futur |
|------------------------|-----------------|------------|
| Référence optionnelle « charger CKC du cycle » | routing guide § | GO doctrine / consolidation |
| Champ fiche ChatGPT « CKC path » | template §2–§5 | GO template |
| Index Knowledge Layer DRM | knowledge-layer | GO consolidation |

---

## 9. Relation avec UX 87/88 (lecture seule)

87/88 absents de `main` ; lus depuis `ux/sfia-studio-d1-conversational-convergence` @ `2888b7e…` **sans modification**.

| Alimentation CKC → UX | Visible UI | Interne GPT |
|-----------------------|------------|-------------|
| Dimensions maturité | Bandes + dimensions non couvertes | Instructions posture |
| Signaux / questions adaptatives | 1–3 questions critiques | Catalogue de signaux |
| Anti-claims cycle | Mentions courtes | Liste complète |
| Transitions | Trajectoires candidates | Matrice complète |
| Fiabilité | « Limites de cette appréciation » | Critères détaillés |

**Interdit UI :** formulaire des 25 sections du template CKC.

---

## 10. Décisions Morris préparées

Voir rapport final / § décisions (nécessité, nom, structure, emplacement, format, profondeur, pilotes, généralisation, routage, Studio, UX, doctrine, template, validation, reprise UX).

---

## 11. Gate suivant candidat

`GO VALIDATION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS`
(ou consolidation si Morris exige réduction du modèle)

Non consommé ici.
