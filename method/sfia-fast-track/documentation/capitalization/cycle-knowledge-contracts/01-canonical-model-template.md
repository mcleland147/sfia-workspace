# Template candidat — Cycle Knowledge Contract

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `01-canonical-model-template.md` |
| **Statut** | `method-candidate` — **non baseline** |
| **Usage** | Structure commune pour tout CKC ; les pilotes l’instancient |
| **Règle** | Court · utile · dimensions stables · questions adaptatives |

---

## 0. Métadonnées d’instance (obligatoire)

| Champ | Contenu |
|-------|---------|
| cycle_id | 1–15 |
| cycle_name | Nom canonique |
| status | `candidate` |
| version | semver candidat (ex. `0.1.0`) |
| inherits_from | Lien méthode cycles §4.x (REUSE) |
| profile_notes | Light / Standard / Critical / Capitalization — effets sur **profondeur**, pas sur structure |
| last_updated | ISO date |

---

## Qualification des sections

| Tag | Sens |
|-----|------|
| **OBL** | Obligatoire dans tout CKC |
| **COND** | Présent si pertinent au cycle |
| **EX** | Exemples illustratifs (non exhaustifs) |
| **INH** | Hérité / renvoyé à une source existante (ne pas dupliquer) |

---

## Structure minimale recommandée

> Les 25 blocs listés dans le gate sont **challengés**. Structure **retenue candidate** = 12 blocs OBL + COND ciblés. Le reste devient COND ou INH.

### 1. Identité — OBL

cycle_id, nom, catégorie A/B, lien `inherits_from`.

### 2. Finalité — OBL

Une phrase : ce que le cycle doit **clarifier ou produire comme compréhension**, pas le livrable Cursor.

### 3. Problèmes que le cycle cherche à résoudre — OBL

3–7 problèmes cognitifs / métier (pas une backlog technique).

### 4. Quand utiliser / ne pas utiliser — OBL

Déclencheurs + anti-cas (évite mauvais routage).

### 5. Objets manipulés — COND

Concepts métier du cycle (besoin, ADR, preuve, …). INH livrables fichiers → méthode §4.

### 6. Posture GPT — OBL

Responsabilités cognitives · type de challenge · profondeur · vigilance.
**Interdit :** « tu es le meilleur expert mondial ».

### 7. Responsabilités humaines — OBL

Décide · arbitre · override tracé · refuse trajectoire.

### 8. Dimensions d’analyse — OBL

Liste **stable** (5–10). GPT choisit lesquelles activer selon contexte.

### 9. Signaux & questions adaptatives — OBL

Pour chaque dimension : **signaux** d’immaturité / maturité + **exemples** de questions (EX), jamais script obligatoire.

### 10. Sources utiles — INH / COND

Renvoyer routing guide + DRM. Ajouter seulement sources **spécifiques** non couvertes.

### 11. Livrables & résultats attendus — INH / COND

Renvoyer méthode §4. Ajouter résultat **cognitif** attendu (ex. « intention démêlée de solution »).

### 12. Critères de maturité — OBL

Bandes qualitatives partagées (candidates) :

| Bande | Sens |
|-------|------|
| `exploratoire` | Trop d’inconnues critiques |
| `partielle` | Socle présent, trous structurants |
| `suffisante_pour_decider` | Humain peut orienter la suite |
| `prete_a_borner` | Préparation d’exécution raisonnable |

Dimensions de maturité = sous-ensemble des dimensions d’analyse + « décisions ouvertes » + « preuves disponibles ».

**Pas de score % unique.**

### 13. Critères de fiabilité — OBL

Quand l’appréciation GPT est fragile : sources absentes, contradictions, spéculation, bias détecté.

### 14. Preuves attendues — INH / COND

Renvoyer validation checklist / template. Ajouter preuves **cognitives** (hypothèses validées, alternatives écartées).

### 15. Risques, biais, anti-patterns — OBL

Biais fréquents du cycle + effets checklist à éviter.

### 16. Anti-claims — OBL

Claims interdits typiques (« cycle validé », « architecture choisie », « prêt prod »…) hors preuve/gate.

### 17. Gates humains possibles — INH / COND

Renvoyer méthode §4 ; lister seulement gates **spécifiques** additionnels.

### 18. Blocs transverses — INH

Renvoyer template §6 (FinOps, RGPD, …).

### 19. Transitions candidates — OBL

Amont/aval **conditionnels** (si maturité X → cycle Y plausible). Jamais auto-exécution.

### 20. Conditions de sortie / pause / arrêt — OBL

Sortie cognitive vs sortie d’exécution. Pause sans mutation. Arrêt si doctrine/chemin protégé.

### 21. Exemples contextualisés — EX / COND

1 clair + 1 ambigu (pilotes obligés).

### 22. Limites du contrat — OBL

Ce que le CKC ne couvre pas.

### 23. Articulation routing / template / UX — OBL

3 phrases max : charge CKC → raisonne ; routing → références ; template → Cursor ; UX → surface.

---

## Règles d’écriture

1. **Ne pas recopier** les tableaux méthode §4 / routing / template.
2. Préférer puces courtes aux dissertations.
3. Toute question listée = **exemple** sauf mention contraire.
4. Toute transition = **candidate**, pas ordre.
5. Statut toujours `candidate` dans l’en-tête.

---

## Skeleton copy-paste

```markdown
# CKC — <Nom cycle> (candidate)

| cycle_id | |
| status | candidate |
| inherits_from | … §4.x |

## Finalité
## Problèmes ciblés
## Quand / quand ne pas
## Posture GPT
## Responsabilités humaines
## Dimensions d’analyse
## Signaux et questions adaptatives
## Maturité
## Fiabilité
## Risques / biais / anti-patterns
## Anti-claims
## Transitions candidates
## Sortie / pause / arrêt
## Exemples
## Limites
## Articulation
```
