# SFIA Review Pack — Global summary after review handoff

**Date/heure :** 2026-07-11 05:38 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** 15 — Capitalisation / REX
**Profil :** Capitalization — Light
**Review pack level :** full
**Branche :** method/sfia-chatgpt-handoff-global-summary
**HEAD initial :** 2d393dfc239bf7fcb770b673f7fa1eaf4051907c
**HEAD final : 439a3a8f52c32b4a85707e6ba14e5fff9a4ad0c5
**origin/main :** 2d393dfc239bf7fcb770b673f7fa1eaf4051907c

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Workspace | /Users/morris/Projects/sfia-workspace |
| Remote | mcleland147/sfia-workspace |
| main | 2d393df = origin/main |
| Tracked modifiés avant cycle | aucun |
| Untracked | présents — non stagés |

---

## Challenge obligatoire

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | **Oui** — handoff vérifié mais restitution parfois trop technique pour Morris |
| Dette / duplication ? | **Faible** — ajout ciblé dans template canonique §9.1 |
| Formulation plus simple ? | **Oui** — extension de l'instruction existante suffit |
| Autres documents ? | **Non** — pas d'incohérence bloquante démontrée |

---

## Justification micro-évolution

Après vérification du handoff Git, ChatGPT doit produire une synthèse globale du cycle (7 éléments minimum) compréhensible sans relire le rapport Cursor intégral.

---

## Sources consultées

| Source | Rôle |
|--------|------|
| prompts/templates/sfia-cycle-execution-template.md §9.1 | Section modifiée |
| sfia-chatgpt-cursor-operating-model.md | Responsabilités ChatGPT (lecture) |
| sfia-cycle-routing-guide.md | Matrice handoff (lecture) |
| sfia-rules-and-guardrails.md §13.1 | Règle transverse (lecture) |
| REX handoff routing fix v2.5 | Contexte handoff |
| Cadrage v2.6 | Contexte candidate (lecture) |

---

## Fichier modifié

- `prompts/templates/sfia-cycle-execution-template.md` — §9.1 Instruction ChatGPT obligatoire

---

## Section complète AVANT

```
**Instruction ChatGPT obligatoire** — **afficher ce bloc visiblement** lorsque handoff = **required** :

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`  
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
> - le cycle ;
> - le profil ;
> - la branche projet ;
> - le HEAD et la base ;
> - les fichiers créés ou modifiés ;
> - le contenu complet des fichiers créés ;
> - les sections complètes modifiées ou le diff utile ;
> - les réserves ;
> - les décisions Morris ;
> - le verdict du review pack ;
> - le commit et la vérification distante du handoff.
>
> Si le handoff est absent, obsolète, incohérent ou synthesis-only, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
```

---

## Section complète APRÈS

```
**Instruction ChatGPT obligatoire** — **afficher ce bloc visiblement** lorsque handoff = **required** :

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`  
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
> - le cycle et le profil ;
> - la branche projet ;
> - le HEAD initial et final ;
> - la base main ;
> - les sources consultées ;
> - les fichiers créés ou modifiés ;
> - le contenu complet des fichiers créés ;
> - les sections complètes modifiées ou le diff utile ;
> - l'identité du contenu avant et après synchronisation, si applicable ;
> - les validations réalisées ;
> - la mergeabilité ou le statut Git attendu ;
> - les risques, réserves et écarts ;
> - les décisions Morris ;
> - le verdict du review pack ;
> - le commit et la vérification distante du handoff.
>
> **Après cette vérification**, ChatGPT doit produire une **synthèse globale du cycle** à destination de Morris comprenant **au minimum** :
> 1. l'objectif et le périmètre du cycle ;
> 2. les actions et changements réellement réalisés ;
> 3. les principaux résultats et validations ;
> 4. les risques, réserves, écarts ou éléments non couverts ;
> 5. la distinction entre observations, recommandations et décisions déjà validées ;
> 6. le verdict ChatGPT ;
> 7. la prochaine décision ou action attendue de Morris.
>
> La synthèse doit être compréhensible sans devoir relire l'intégralité du rapport Cursor ou du review pack, tout en restant fidèle au contenu du handoff Git.
>
> Elle ne doit **pas** transformer une recommandation, une hypothèse ou un résultat technique en décision validée sans GO Morris.
>
> Si le handoff est absent, obsolète, incohérent, incomplet ou synthesis-only, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
```

---

## Diff utile complet

```diff
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 2b93b9b..742549d 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -1263,19 +1263,36 @@ Si `synthesis only = yes` → verdict **ne peut pas** être READY.
 > fichier : `sfia-review-handoff/latest-chatgpt-review.md`
 >
 > ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
-> - le cycle ;
-> - le profil ;
+> - le cycle et le profil ;
 > - la branche projet ;
-> - le HEAD et la base ;
+> - le HEAD initial et final ;
+> - la base main ;
+> - les sources consultées ;
 > - les fichiers créés ou modifiés ;
 > - le contenu complet des fichiers créés ;
 > - les sections complètes modifiées ou le diff utile ;
-> - les réserves ;
+> - l'identité du contenu avant et après synchronisation, si applicable ;
+> - les validations réalisées ;
+> - la mergeabilité ou le statut Git attendu ;
+> - les risques, réserves et écarts ;
 > - les décisions Morris ;
 > - le verdict du review pack ;
 > - le commit et la vérification distante du handoff.
 >
-> Si le handoff est absent, obsolète, incohérent ou synthesis-only, ChatGPT doit répondre :
+> **Après cette vérification**, ChatGPT doit produire une **synthèse globale du cycle** à destination de Morris comprenant **au minimum** :
+> 1. l'objectif et le périmètre du cycle ;
+> 2. les actions et changements réellement réalisés ;
+> 3. les principaux résultats et validations ;
+> 4. les risques, réserves, écarts ou éléments non couverts ;
+> 5. la distinction entre observations, recommandations et décisions déjà validées ;
+> 6. le verdict ChatGPT ;
+> 7. la prochaine décision ou action attendue de Morris.
+>
+> La synthèse doit être compréhensible sans devoir relire l'intégralité du rapport Cursor ou du review pack, tout en restant fidèle au contenu du handoff Git.
+>
+> Elle ne doit **pas** transformer une recommandation, une hypothèse ou un résultat technique en décision validée sans GO Morris.
+>
+> Si le handoff est absent, obsolète, incohérent, incomplet ou synthesis-only, ChatGPT doit répondre :
 >
 > **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
 

```

---

## Couverture obligations existantes

| Obligation | Préservée |
|------------|-----------|
| Lecture handoff sfia/review-handoff | **yes** |
| Chemin latest-chatgpt-review.md | **yes** |
| Contrôles cohérence rapport/handoff | **yes** (+ enrichis) |
| Verdict REVIEW HANDOFF INCOMPLETE | **yes** |
| Distinction observation/recommandation/décision | **yes** (§5 synthèse) |
| Pas de décision sans GO Morris | **yes** |

---

## Sept éléments synthèse — présents

1. objectif et périmètre — **yes**
2. actions réalisées — **yes**
3. résultats et validations — **yes**
4. risques, réserves, écarts — **yes**
5. observations / recommandations / décisions validées — **yes**
6. verdict ChatGPT — **yes**
7. prochaine décision Morris — **yes**

Synthèse globale : **obligatoire** (non optionnelle).

---

## Garde-fous

- Un seul fichier modifié
- Pas de changement mécanisme handoff
- Pas audit v2.6
- v2.4 baseline ; v2.5/v2.6 candidate
- PR non mergée

---

## Review pack coverage

| Critère | Valeur |
|---------|--------|
| modified sections complete | **yes** |
| useful diff included | **yes** |
| synthesis only | **no** |
| **verdict** | **complete** |

