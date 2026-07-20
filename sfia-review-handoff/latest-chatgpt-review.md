# Review pack — Correctif template Review Handoff publish-in-cycle

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-20 19:30:00 CEST |
| **Repository** | `mcleland147/sfia-workspace` |
| **Branche** | `docs/sfia-template-handoff-publication-fix` |
| **HEAD** | `ac2bcbf52e6170668e1a5cc0071c572026938635` |
| **Base / origin/main** | `ac2bcbf52e6170668e1a5cc0071c572026938635` |
| **Merge-base** | `ac2bcbf52e6170668e1a5cc0071c572026938635` |
| **Cycle** | 15 — Capitalisation / correction méthode ciblée |
| **Profil** | Light |
| **Gate Morris distant** | Aucun |
| **Mode handoff de CE cycle** | `local-only` (cycle documentaire) |
| **Statut validation ChatGPT** | **ACCEPTED** — 2026-07-20 19:49:00 CEST |
| **Motif local-only** | Correctif du mécanisme de publication — revue avant toute publication distante / PR |
| **Commit / push / PR / merge** | **AUCUN** |

## Problème corrigé

Le template imposait déjà `required` / `not required` et un champ `Push handoff autorisé`, et §7.10 disait que le handoff required n'est pas complet sans remote.
En pratique, Cursor pouvait s'arrêter après une préparation **locale** du handoff, forçant un **second GO Morris** et un second cycle de publication sans valeur métier.

## Correctif

Rendre canonique :

`Review Handoff Git = required` + `Push handoff autorisé = oui — L3 borné`
→ Mode **`publish-in-cycle`** → publication distante **obligatoire dans le même cycle** avant verdict final.

## Fichier modifié (unique)

- `prompts/templates/sfia-cycle-execution-template.md`

## Sections modifiées

- §2.0 mini-fiche Repo-informed
- §2.1 protocole (étape 9)
- §2.3 anti-patterns ChatGPT
- §3 fiche d'instanciation
- §5 squelette prompt Cursor (étapes, ordre de fin, bloc handoff, actions interdites)
- §7.10 (modes, règle atomique 7.10.1, L3 7.10.2, local-only 7.10.3, séquence/verdicts 7.10.4, séquences Cursor)
- §7.11 verdicts
- §8 stop conditions 35–42
- §9.1 champs rapport + Instruction ChatGPT
- §9.3 table des verdicts
- §10 instruction projet ChatGPT (items 7–9)

## Règles ajoutées

1. Mode handoff : `publish-in-cycle` / `local-only` / `not-required`
2. Règle atomique de publication (§7.10.1) — 11 étapes obligatoires
3. Absence de second GO Morris lorsque required + push L3 + périmètre mono-fichier
4. Cas local-only / publication interdite explicites
5. Verdicts : REMOTE PUBLICATION NOT PERFORMED · REMOTE VERIFICATION MISSING · CANONICAL REMOTE NOT UPDATED · MODE INCONSISTENT · SCOPE MISMATCH · REMOTE DIVERGENCE
6. Ordre de fin de cycle pour publish-in-cycle
7. Garde-fous FF-only, mono-fichier, relecture distante, retour branche
8. Chemin canonique unique ; racine historique non canonique
9. Interdiction de readiness métier avant publication/vérification si publish-in-cycle

## Règles conservées

- Décision required / not required obligatoire
- Review pack none/light/full proportionné
- Handoff non mergé dans main ; non PR vers main
- L3 borné ≠ push projet / PR / merge / L5
- Complétude review pack (§7.2.x) inchangée dans sa logique
- 15 cycles / profils inchangés
- Autorité Morris L0 sur gates structurants
- Pas de second template créé

## Anti-régressions vérifiées

| Contrôle | Résultat |
|----------|----------|
| Handoff obligatoire pour tous les cycles ? | Non — `not-required` / `local-only` conservés |
| Push projet autorisé ? | Non — explicité comme interdit par L3 handoff |
| Autorité Morris affaiblie ? | Non — second GO évité seulement pour push handoff L3 déjà déclaré |
| L3 → L5 ? | Non — L5 toujours hors cible |
| Force push ? | Interdit explicitement |
| Complétude review pack modifiée ? | Non (références conservées) |
| 15 cycles / profils modifiés ? | Non |
| Chemin canonique unique ? | Oui — `sfia-review-handoff/latest-chatgpt-review.md` |
| Racine historique présentée comme canonique ? | Non — anti-pattern + règles négatives |
| Second template ? | Non |

## Anomalies structurelles

Aucune refonte structurelle nécessaire. Les sous-sections §7.10.1–§7.10.4 réorganisent le contenu déjà présent (autorisation L3 + règle pérenne PR4) sans changer la numérotation des sections majeures §1–§10.

## Contrôles

```text
git status --short
 M prompts/templates/sfia-cycle-execution-template.md

git diff --name-status
M	prompts/templates/sfia-cycle-execution-template.md

git diff --stat
 prompts/templates/sfia-cycle-execution-template.md | 323 ++++++++++++++++-----
 1 file changed, 247 insertions(+), 76 deletions(-)

git diff --check
(clean)
```

| Contrôle | Résultat |
|----------|----------|
| Un seul fichier modifié | OK |
| Occurrences publish-in-cycle / local-only / verdicts | Présentes |
| Staged | **vide** |
| Commit / push / PR / merge | **Aucun** |

## Diff complet

```diff
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index fd2b5e9..c5d8dbb 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -9,7 +9,7 @@ scope: instantiate Cursor execution prompts from ChatGPT

 # SFIA Cycle Execution — Template d'instanciation v2.6

-**Fichier :** `prompts/templates/sfia-cycle-execution-template.md`
+**Fichier :** `prompts/templates/sfia-cycle-execution-template.md`
 **Statut :** SFIA v2.6 **baseline opérationnelle officielle** (active sur `main`)
 **Baseline opérationnelle :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5
 **Références :** operating model §18.2 ; routing guide §4.3–§4.4 ; manifest `2026-07-16-sfia-v2.6-baseline-release-manifest.md`
@@ -96,6 +96,9 @@ Repo-informed pre-check ChatGPT
 - niveau review pack recommandé : none / light / full
 - review handoff Git : required / not required — obligatoire
 - justification handoff :
+- mode handoff : publish-in-cycle / local-only / not-required
+- motif local-only : [obligatoire si local-only]
+- push handoff autorisé : oui — L3 borné / non
 - limites / incertitudes :
 - verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION
 ```
@@ -135,7 +138,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
 8. **Décider review pack** — §7 : niveau none / light / full
-9. **Décider Review Handoff Git** — §7.10–§7.11 : **required** ou **not required** — **obligatoire, pas de valeur vide** ; verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si absent
+9. **Décider Review Handoff Git** — §7.10–§7.11 : **required** ou **not required** — **obligatoire, pas de valeur vide** ; décider aussi le **mode** `publish-in-cycle` / `local-only` / `not-required` ; `required` + `Push handoff autorisé = oui — L3 borné` implique **automatiquement** `publish-in-cycle` (publication distante **dans le même cycle**) ; combinaison `required` + push oui + `local-only` = invalide → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` ; verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si décision absente
 10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite

 ### 2.2 Nouveau chat et sources projet
@@ -155,6 +158,9 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 - Prompt sans périmètre / hors périmètre
 - Oublier review pack sur cycle documentaire
 - Omettre la décision Review Handoff Git (required / not required)
+- Déclarer handoff `required` + push L3 autorisé puis s'arrêter après une préparation **locale** sans publication distante (`publish-in-cycle`)
+- Combiner `required` + `Push handoff autorisé = oui` avec `Mode handoff = local-only`
+- Présenter le fichier racine `latest-chatgpt-review.md` comme chemin canonique (le canonique unique est `sfia-review-handoff/latest-chatgpt-review.md`)
 - Présenter une candidate non mergée comme baseline validée
 - Présenter une version non mergée comme baseline officielle
 - Relancer SFIA v3.0 sans GO Morris
@@ -193,12 +199,25 @@ Review pack :                   [none / light / full — voir §7]

 Review Handoff Git :            [required / not required — OBLIGATOIRE — pas de valeur vide]
 Justification handoff :         [obligatoire dans les deux cas]
-Branche handoff (si required) : sfia/review-handoff
-Fichier handoff (si required) : sfia-review-handoff/latest-chatgpt-review.md
-Push handoff autorisé :         [oui — L3 borné si required / non si not required]
-Vérification remote :           [obligatoire si required]
+Mode handoff :                  [publish-in-cycle / local-only / not-required]
+Motif local-only :              [obligatoire si local-only — sinon N/A]
+Branche handoff :               sfia/review-handoff
+Fichier handoff :               sfia-review-handoff/latest-chatgpt-review.md
+Push handoff autorisé :         [oui — L3 borné / non]
+Commit handoff attendu :        [message ou convention — ex. docs(review-handoff): publish …]
+Retour branche initiale :       [obligatoire si publish-in-cycle]
+Vérification remote :           [obligatoire si publish-in-cycle]
+Verdict distant attendu :       [ex. HANDOFF UPDATED — REMOTE VERIFIED / N/A]
 Instruction ChatGPT finale :  [bloc §9.1 si required / N/A si not required]

+Règles mode handoff (ChatGPT — avant génération) :
+- required + Push handoff autorisé = oui — L3 borné  →  Mode = publish-in-cycle (automatique)
+- required + local-only                              →  Motif local-only obligatoire
+- required + push oui + local-only                   →  INVALIDE → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
+- not required                                       →  Mode = not-required
+- Chemin canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
+  (le fichier racine latest-chatgpt-review.md n'est JAMAIS le canonique)
+
 Stop conditions spécifiques :
 Rapport Cursor attendu :        [Light / Standard / Critical / Capitalization — §9]
 Verdict attendu :               [ex. READY FOR PR READINESS / READY FOR COMMIT / STOP …]
@@ -342,12 +361,19 @@ Stop conditions :
 2. Réinitialiser `.tmp-sfia-review/chatgpt-review.md` si review pack obligatoire (§7.1) — créer le dossier si absent ; **écraser entièrement** le fichier existant ; aucun append historique
 3. Lire les sources listées
 4. [Étapes spécifiques au cycle]
-5. Validations (git diff, lints, tests si applicable)
+5. Validations / contrôles du contenu projet (git diff, lints, tests si applicable)
 6. Review pack si obligatoire (§7) — contenu **mono-cycle uniquement**
-7. Review Handoff Git si **required** (§7.10–§7.11) — copie, commit, push, vérification remote
-8. Rapport final (§9) — inclure champs handoff si required + bloc Instruction ChatGPT obligatoire
+7. Review Handoff Git selon **Mode handoff** (§7.10–§7.11) :
+   - `publish-in-cycle` : publication distante **obligatoire dans ce cycle** (copie → commit mono-fichier → push `sfia/review-handoff` → vérification SHA + relecture distante → retour branche initiale) — **ne pas s'arrêter après la préparation locale**
+   - `local-only` : préparation locale uniquement + motif explicite ; **pas** de verdict métier de readiness tant que la revue Git distante est requise par Morris sans être disponible
+   - `not-required` : pas de handoff
+8. Rapport final (§9) — champs handoff + bloc Instruction ChatGPT si required
 9. Ouvrir chatgpt-review.md si review pack (best effort)

+Ordre de fin obligatoire si Mode = publish-in-cycle (cycle documentaire avec création/modification) :
+contrôles projet → review pack complet → publication handoff → vérification distante → retour branche projet → contrôle état final → rapport Cursor → verdict
+Cursor **ne doit pas** s'arrêter entre review pack et vérification distante.
+
 Validations attendues :
 - git status --short
 - git diff --stat
@@ -359,19 +385,30 @@ Review pack :
 Review Handoff Git :
 - décision : [required / not required — obligatoire]
 - justification : [obligatoire]
+- mode handoff : [publish-in-cycle / local-only / not-required]
+- motif local-only : [obligatoire si local-only / N/A]
 - branche : sfia/review-handoff
-- fichier : sfia-review-handoff/latest-chatgpt-review.md
+- fichier canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
+  (interdit : traiter latest-chatgpt-review.md à la racine comme canonique)
 - review pack source : .tmp-sfia-review/chatgpt-review.md
-- overwrite : obligatoire si required
-- commit : obligatoire si required
-- push : obligatoire si required (origin/sfia/review-handoff — seul push distant autorisé dans le cycle)
-- remote verification : obligatoire si required (git ls-remote)
+- push handoff autorisé : [oui — L3 borné / non]
+- commit handoff attendu : [message]
+- retour branche initiale : obligatoire si publish-in-cycle
+- vérification remote : obligatoire si publish-in-cycle (SHA + relecture fichier distant)
+- règle atomique : required + push oui — L3 borné ⇒ publish-in-cycle dans le MÊME cycle (pas de second GO Morris)
 - verdicts handoff :
   - HANDOFF UPDATED — REMOTE VERIFIED
-  - HANDOFF LOCAL ONLY — PUSH MISSING
+  - HANDOFF LOCAL ONLY — PUSH MISSING (uniquement si mode local-only justifié)
+  - REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED
+  - REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING
   - REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
+  - REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED
+  - STOP — REVIEW HANDOFF SCOPE MISMATCH
+  - STOP — REVIEW HANDOFF REMOTE DIVERGENCE
+  - PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
   - HANDOFF NOT REQUIRED — JUSTIFIED
 - instruction ChatGPT finale : inclure bloc §9.1 si required
+- Actions interdites par le push handoff L3 : commit projet · push projet · PR · merge · modification main · suppression de branche

 Rapport final attendu :
 [Format selon profil §9 — inclure date et heure du rapport]
@@ -380,10 +417,11 @@ Verdict attendu :
 [Ex. READY FOR PR READINESS / READY FOR COMMIT / STOP — MORRIS DECISION REQUIRED]

 Actions interdites sans GO Morris :
-- git push
+- git push **branche projet** / `main` (le push handoff L3 borné n'autorise JAMAIS le push projet)
 - gh pr create
 - merge
 - git push origin --delete (suppression branche)
+- force push (toute branche)
 ```

 **Complément v2.4 (PGE §7.1)** — inclure si cycle post-v2.4 :
@@ -795,7 +833,7 @@ Le review pack `.tmp-sfia-review/chatgpt-review.md` est un **artefact temporaire

 Tout prompt Cursor impliquant **consultation**, **modification** ou **création** documentaire structurante doit déclarer un niveau review pack — **none**, **light** ou **full** (§7.3).

-> **none** : pas de fichier `chatgpt-review.md` requis — rapport chat ou rapport Cursor court suffit.
+> **none** : pas de fichier `chatgpt-review.md` requis — rapport chat ou rapport Cursor court suffit.
 > **light** / **full** : fichier obligatoire, complété avant le rapport final — jamais un stub final (§7.5).

 **Au démarrage de chaque cycle Cursor (avant toute écriture du review pack) :**
@@ -983,7 +1021,7 @@ Cursor doit :

 1. Ouvrir `.tmp-sfia-review/chatgpt-review.md` dans Cursor
 2. Nouvel onglet si possible ; onglet actif si possible
-3. Confirmer dans le rapport Cursor — ou indiquer :
+3. Confirmer dans le rapport Cursor — ou indiquer :
    `best effort — ouverture demandée via CLI, onglet actif non garanti`

 ### 7.9 Interdictions
@@ -1008,6 +1046,22 @@ Cursor doit :
 | **Justification** | Obligatoire dans les deux cas |
 | **Valeur vide / implicite** | Interdite — verdict ChatGPT : **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** |

+#### Mode handoff (obligatoire dès que la décision est prise)
+
+| Mode | Quand | Effet |
+|------|-------|-------|
+| **`publish-in-cycle`** | `required` + `Push handoff autorisé = oui — L3 borné` | Publication distante **obligatoire dans le même cycle** avant tout verdict métier/documentaire |
+| **`local-only`** | `required` + push **non**, ou motif explicite (interdit distant, divergence, contenu incomplet, etc.) | Préparation locale uniquement — **revue Git distante non disponible** |
+| **`not-required`** | `Review Handoff Git = not required` | Aucun handoff |
+
+**Règles de cohérence :**
+
+- `required` + push oui → mode **`publish-in-cycle` automatique** ;
+- `required` + `local-only` → **motif local-only obligatoire** ;
+- `required` + push oui + `local-only` → **invalide** → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` ;
+- chemin canonique **unique** : `sfia-review-handoff/latest-chatgpt-review.md` ;
+- le fichier racine `latest-chatgpt-review.md` **n'est jamais** le canonique.
+
 #### Objectif

 Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git, **sans extension** ni copier-coller.
@@ -1015,7 +1069,9 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,
 #### Principe

 1. Cursor produit d'abord `.tmp-sfia-review/chatgpt-review.md` **localement** (artefact temporaire mono-cycle — §7.1).
-2. Si **required** (§7.11), Cursor copie ensuite ce contenu vers :
+2. Si mode = **`publish-in-cycle`**, Cursor **doit** ensuite publier ce contenu sur Git dans le **même cycle** (voir règle atomique ci-dessous) — la seule préparation locale est **insuffisante**.
+3. Si mode = **`local-only`**, Cursor prépare le handoff local (et éventuellement `.tmp-sfia-review/handoff-local/…`) **sans** push ; le rapport doit indiquer clairement que la revue Git distante n'est **pas** disponible.
+4. Destination Git canonique (si publication) :

    `sfia-review-handoff/latest-chatgpt-review.md`

@@ -1023,9 +1079,10 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,

    `sfia/review-handoff`

-> **Important :** ne **pas** versionner `.tmp-sfia-review/chatgpt-review.md` tel quel.
-> `.tmp-sfia-review/chatgpt-review.md` = artefact local temporaire Cursor.
+> **Important :** ne **pas** versionner `.tmp-sfia-review/chatgpt-review.md` tel quel.
+> `.tmp-sfia-review/chatgpt-review.md` = artefact local temporaire Cursor.
 > `sfia-review-handoff/latest-chatgpt-review.md` = copie Git de handoff, destinée à être lue par ChatGPT.
+> `latest-chatgpt-review.md` à la **racine** de la branche handoff = fichier historique **non canonique** — ne pas le cibler, ne pas le présenter comme source ChatGPT.

 #### Statut

@@ -1046,60 +1103,119 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,
 - **aucune** décision Morris déduite automatiquement du contenu ;
 - `main` reste source de vérité ;
 - **décision required / not required obligatoire** dans chaque prompt (§3, §5) ;
-- lorsque **required** : exécution L3 bornée **sans micro-GO Morris supplémentaire** (§7.10.1) ;
+- lorsque Mode = **`publish-in-cycle`** : exécution L3 bornée **sans micro-GO Morris supplémentaire** (§7.10.1–§7.10.2) — publication distante **dans le même cycle** ;
 - **push autorisé** uniquement vers `sfia/review-handoff` et uniquement pour `sfia-review-handoff/latest-chatgpt-review.md` ;
-- toute autre action Git distante reste **interdite** sans GO explicite.
+- toute autre action Git distante reste **interdite** sans GO explicite ;
+- Mode `local-only` : pas de publication distante ; motif obligatoire ; revue Git distante non disponible.
+
+#### 7.10.1 Règle atomique de publication — `publish-in-cycle`
+
+> **Correctif v2.6 — anti second cycle de publication.** Lorsqu'un prompt instancié déclare **à la fois** :
+>
+> - `Review Handoff Git : required`
+> - `Push handoff autorisé : oui — L3 borné`
+>
+> alors le **Mode handoff** est **`publish-in-cycle`** et Cursor doit **obligatoirement**, dans le **même cycle**, avant le verdict final :
+
+1. produire le review pack complet ;
+2. générer le contenu du handoff ;
+3. basculer de manière contrôlée sur `sfia/review-handoff` (worktree ou checkout contrôlé) ;
+4. remplacer **uniquement** `sfia-review-handoff/latest-chatgpt-review.md` ;
+5. créer un **commit mono-fichier** ;
+6. pousser **uniquement** `origin/sfia/review-handoff` (**fast-forward only** — **aucun force push**) ;
+7. vérifier le SHA distant (`git ls-remote` / `git fetch` + comparaison) ;
+8. **relire** le fichier canonique depuis Git distant ;
+9. revenir sur la branche projet initiale ;
+10. confirmer que l'état projet (working tree / staged) est **inchangé** ;
+11. terminer **seulement** après cette vérification distante.
+
+La simple préparation locale du handoff (`.tmp-sfia-review/…`) est **insuffisante** lorsque `publish-in-cycle` est requis.
+
+**Absence de GO Morris supplémentaire :** cette publication **ne nécessite pas** un second GO Morris lorsque les trois conditions sont déjà dans le prompt initial :
+
+- `Review Handoff Git : required` ;
+- `Push handoff autorisé : oui — L3 borné` ;
+- périmètre distant strictement limité à la branche `sfia/review-handoff` et au fichier `sfia-review-handoff/latest-chatgpt-review.md`.

-#### 7.10.1 Autorisation permanente bornée (L3) — lorsque required
+Ce push est une exécution **répétable, bornée et réversible** de niveau **L3**. Il **ne vaut jamais** autorisation de : commit projet · push projet · PR · merge · modification de `main` · suppression de branche.

-> **Règle candidate v2.5 — correctif routing.** Lorsqu'un prompt Cursor SFIA conforme qualifie le handoff **required**, les actions suivantes sont **autorisées dans le cycle** sans nouveau micro-GO Morris :
+#### 7.10.2 Autorisation permanente bornée (L3) — lorsque `publish-in-cycle`

 | Action | Condition |
 |--------|-----------|
 | Copie review pack → handoff | Contenu mono-cycle, exploitable (§7.2.1) |
 | Commit sur `sfia/review-handoff` | Fichier `sfia-review-handoff/latest-chatgpt-review.md` **uniquement** |
 | Push `origin/sfia/review-handoff` | Même si push branche projet interdit |
-| Vérification remote | `git ls-remote` — SHA remote = commit local |
+| Vérification remote | SHA remote = commit local **et** relecture du fichier distant |

-**Garde-fous L3 :** branche unique ; fichier unique ; aucun secret ; aucune PR ; aucun merge ; aucun impact `main` ; aucun autre push distant.
+**Garde-fous L3 / publication :**

-**Exceptions not required** (justification obligatoire) : review pack **none** ; revue locale sans analyse ChatGPT ; absence d'action documentaire ; **GO Morris explicite** de ne pas utiliser le handoff.
+- synchronisation **fast-forward uniquement** ;
+- **aucun** force push ;
+- remplacement d'**un seul** fichier ;
+- staging d'**un seul** fichier — `git diff --cached --name-status` et `git diff --cached --check` **obligatoires** ;
+- commit mono-fichier ;
+- push de `sfia/review-handoff` **uniquement** ;
+- vérification SHA distant + relecture distante ;
+- retour branche initiale ;
+- **aucune** altération des changements projet ;
+- **aucune** inclusion de `.tmp-sfia-review/**` dans Git ;
+- aucun secret ; aucune PR ; aucun merge ; aucun impact `main`.

-#### Règle pérenne — commit + push + vérification remote obligatoire (PR 4 candidate)
+#### 7.10.3 Cas `local-only` / publication interdite

-> Quand le mode Review Handoff Git Branch est **activé**, le handoff n'est **pas complet** sans publication remote.
+La publication distante reste **interdite** (mode `local-only` ou arrêt) si **l'une** des situations suivantes est explicite :

-| Étape | Obligation |
-|-------|------------|
-| 1. Review pack local | `.tmp-sfia-review/chatgpt-review.md` complété (niveau light/full) |
-| 2. Copie handoff | Overwrite `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
-| 3. Commit | Commit local sur `sfia/review-handoff` — **fichier handoff uniquement** |
-| 4. Push | **`git push origin sfia/review-handoff`** — autorisé dans le cycle même si push branche projet interdit |
-| 5. Vérification remote | `git ls-remote origin refs/heads/sfia/review-handoff` — SHA remote = SHA local attendu |
+- `Review Handoff Git : not required` ;
+- `Push handoff autorisé : non` ;
+- Morris interdit explicitement toute action distante ;
+- divergence incompatible de la branche handoff → `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` ;
+- force push requis ;
+- contenu incomplet → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` ;
+- mauvais chemin canonique / multi-fichiers → `STOP — REVIEW HANDOFF SCOPE MISMATCH`.
+
+Dans ces cas, le verdict / rapport doit indiquer clairement que la **revue Git distante n'est pas disponible**.
+
+**Exceptions `not required`** (justification obligatoire) : review pack **none** ; revue locale sans analyse ChatGPT ; absence d'action documentaire ; **GO Morris explicite** de ne pas utiliser le handoff.

-**Push strictement limité à :**
+#### 7.10.4 Séquence et verdicts — `publish-in-cycle`

-- branche : `sfia/review-handoff`
-- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
-- aucun autre fichier ; aucune PR ; aucun merge ; aucun impact `main`
+| Étape | Obligation |
+|-------|------------|
+| 1. Contrôles contenu projet | Validations locales du cycle |
+| 2. Review pack local | `.tmp-sfia-review/chatgpt-review.md` complet |
+| 3. Copie handoff | Overwrite `sfia-review-handoff/latest-chatgpt-review.md` |
+| 4. Commit | Mono-fichier sur `sfia/review-handoff` |
+| 5. Push | `git push origin sfia/review-handoff` (FF only) |
+| 6. Vérification remote | SHA distant = local **+** relecture fichier distant |
+| 7. Retour branche projet | État projet inchangé |
+| 8. Rapport + verdict | Seulement après 6–7 |

 **Verdicts handoff :**

 | Situation | Verdict obligatoire |
 |-----------|---------------------|
-| Commit local + push OK + remote vérifié | `HANDOFF UPDATED` (ou variante explicite push + remote verified) |
-| Commit local **sans** push | **`HANDOFF LOCAL ONLY — PUSH MISSING`** — **pas** `HANDOFF UPDATED` |
-| Rapport demande lecture handoff Git mais remote non à jour | **Cycle incomplet** — stop condition |
-
-**Rapport final Cursor — champs obligatoires si handoff activé :**
-
+| Push OK + SHA OK + relecture OK | `HANDOFF UPDATED — REMOTE VERIFIED` |
+| `publish-in-cycle` requis mais non poussé | **`REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED`** — **interdit** d'émettre un verdict de readiness métier/documentaire |
+| Poussé mais fichier distant non relu | **`REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`** |
+| Contenu synthétique / manquant | **`REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`** |
+| Cursor annonce publié mais remote ancien/absent/incomplet | **`REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`** |
+| Mode `local-only` justifié (push non) | `HANDOFF LOCAL ONLY — PUSH MISSING` — préciser « revue Git distante non disponible » |
+| Autre fichier inclus / mauvais chemin | `STOP — REVIEW HANDOFF SCOPE MISMATCH` |
+| Divergence remote incompatible | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` |
+
+**Rapport final Cursor — champs obligatoires si handoff required :**
+
+- mode handoff ; motif local-only (si applicable)
 - handoff local commit : SHA / none
 - handoff remote commit before : SHA / none
 - handoff remote commit after : SHA / none
-- push handoff : done / not done
-- remote verification : yes / no
+- push handoff : done / not done / N/A
+- remote verification : yes / no / N/A
+- remote file re-read : yes / no / N/A
+- retour branche initiale : yes / no / N/A

-**Stop condition :** si le rapport Cursor demande à ChatGPT de lire le handoff Git, mais que le handoff n'a **pas** été pushé sur `origin/sfia/review-handoff`, le cycle est **incomplet**.
+**Stop condition :** si Mode = `publish-in-cycle` et que la publication ou la vérification distante manque, le cycle est **incomplet** — **aucun** verdict `READY FOR …` documentaire/métier avant correction.

 #### Niveau d'automatisation

@@ -1122,17 +1238,35 @@ Cursor doit **stopper** si :
 5. le fichier dépasse un seuil excessif sans synthèse (cf. §7.6 — privilégier Git Review Index et références) ;
 6. le mode n'a **pas** été activé par Morris.

-#### Séquence Cursor (si mode activé)
+#### Séquence Cursor (si Mode = `publish-in-cycle`)

 ```text
-1. Compléter .tmp-sfia-review/chatgpt-review.md (niveau light/full)
+1. Compléter .tmp-sfia-review/chatgpt-review.md (niveau light/full) — mono-cycle, contenu complet
 2. Vérifier absence de secrets / données sensibles
-3. Copier (overwrite) vers sfia-review-handoff/latest-chatgpt-review.md
-4. Commit sur sfia/review-handoff — fichier handoff uniquement
-5. git push origin sfia/review-handoff — push obligatoire, pas d'autre push
-6. git ls-remote origin refs/heads/sfia/review-handoff — vérifier SHA remote = commit local
-7. Confirmer dans le rapport Cursor : handoff local SHA ; remote before/after ; push done ; remote verification yes/no
-8. Afficher le bloc **Instruction ChatGPT obligatoire** (§9.1) si required
+3. Basculer de manière contrôlée sur sfia/review-handoff (worktree recommandé)
+4. Fast-forward only — aucun force push
+5. Copier (overwrite) UNIQUEMENT vers sfia-review-handoff/latest-chatgpt-review.md
+6. git add -f (si besoin) + staged = ce fichier seul
+7. git diff --cached --name-status  (doit être M sfia-review-handoff/latest-chatgpt-review.md)
+8. git diff --cached --check
+9. Commit mono-fichier
+10. git push origin sfia/review-handoff
+11. Vérifier SHA distant = SHA local
+12. Relire le fichier canonique depuis Git distant
+13. Revenir sur la branche projet initiale
+14. Confirmer working tree / staged projet inchangés
+15. Rapport Cursor + bloc Instruction ChatGPT (§9.1)
+16. Verdict — seulement après 11–14
+```
+
+#### Séquence Cursor (si Mode = `local-only`)
+
+```text
+1. Compléter le review pack
+2. Écrire le handoff local (.tmp-sfia-review/handoff-local/… ou équivalent)
+3. NE PAS push / NE PAS commit la branche handoff sauf instruction contraire explicite
+4. Rapport : HANDOFF LOCAL ONLY — PUSH MISSING + « revue Git distante non disponible » + motif
+5. Ne pas présenter un verdict de readiness comme si ChatGPT pouvait lire le handoff Git
 ```

 ### 7.11 Matrice d'activation Review Handoff Git
@@ -1157,12 +1291,24 @@ Cursor doit **stopper** si :

 | Verdict | Condition |
 |---------|-----------|
-| `HANDOFF UPDATED — REMOTE VERIFIED` | Commit + push + remote OK |
-| `HANDOFF LOCAL ONLY — PUSH MISSING` | Commit local sans push |
+| `HANDOFF UPDATED — REMOTE VERIFIED` | Commit + push + SHA OK + relecture distante OK |
+| `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode `local-only` justifié — revue Git distante non disponible |
+| `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | `publish-in-cycle` requis mais non poussé |
+| `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Poussé mais relecture / SHA distant manquant |
 | `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff synthesis-only ou contenu manquant |
+| `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote ancien/absent/incomplet |
+| `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Autre fichier / mauvais chemin |
+| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible / force push requis |
 | `HANDOFF NOT REQUIRED — JUSTIFIED` | not required avec justification |

-**Verdict prompt (ChatGPT) :** `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si décision absente.
+**Verdicts prompt (ChatGPT) :**
+
+| Verdict | Condition |
+|---------|-----------|
+| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Décision required/not required absente |
+| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Combinaison mode/push contradictoire (ex. required + push oui + local-only) |
+
+**Règle :** un verdict de readiness métier ou documentaire **ne peut pas** être émis avant publication + vérification lorsque `publish-in-cycle` est requis.

 ---

@@ -1204,10 +1350,14 @@ Cursor doit **stopper** et demander Morris si :
 32. **Git granularity** : micro-PR non justifiée ; commit/PR dispersé sans livrable cohérent
 33. **Post-MVP stop** : arrêt post-MVP sans décision Morris ; réserve ouverte non qualifiée ; Option B/C lancée sans GO Morris
 34. **Post-merge cleanup** : branche ambiguë ; branche non mergée ; `git branch -d` refuse ; branche spéciale/handoff ciblée ; cleanup sans GO post-merge
-35. **Review Handoff** : handoff commité localement mais **non pushé** sur `origin/sfia/review-handoff` — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` ; cycle incomplet si ChatGPT doit lire handoff distant
-36. **Review Handoff** : rapport demande lecture handoff Git sans vérification remote (`git ls-remote`) — SHA remote ≠ SHA local attendu
-37. **Review Handoff** : décision required / not required **absente** du prompt — `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
-38. **Review Handoff** : handoff **required** mais non publié (commit/push/remote) — cycle incomplet
+35. **Review Handoff** : Mode `local-only` justifié — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` + « revue Git distante non disponible » ; **ne pas** présenter comme publication réussie
+36. **Review Handoff** : Mode `publish-in-cycle` mais **non poussé** — `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` ; **interdit** readiness métier/documentaire
+37. **Review Handoff** : poussé sans relecture / SHA distant — `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`
+38. **Review Handoff** : décision required / not required **absente** — `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
+39. **Review Handoff** : mode incohérent (required + push oui + local-only) — `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
+40. **Review Handoff** : Cursor annonce publié mais remote ancien/absent/incomplet — `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`
+41. **Review Handoff** : force push requis ou divergence incompatible — `STOP — REVIEW HANDOFF REMOTE DIVERGENCE`
+42. **Review Handoff** : s'arrêter après review pack / handoff local alors que `publish-in-cycle` est requis — cycle incomplet
 39. **Review Handoff** : rapport final sans bloc **Instruction ChatGPT obligatoire** alors que handoff required
 40. **Review Handoff** : handoff distant **obsolète** (cycle / branche / HEAD incohérents avec rapport Cursor)

@@ -1239,19 +1389,24 @@ Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fus
 18. **Review Handoff Git** (§7.10–§7.11) :
     - handoff decision : required / not required
     - handoff justification
+    - mode handoff : publish-in-cycle / local-only / not-required
+    - motif local-only : … / N/A
+    - push handoff autorisé : oui — L3 borné / non
     - source review pack : `.tmp-sfia-review/chatgpt-review.md`
     - handoff branch : `sfia/review-handoff` (si required)
-    - handoff file : `sfia-review-handoff/latest-chatgpt-review.md` (si required)
+    - handoff file : `sfia-review-handoff/latest-chatgpt-review.md` (si required) — **jamais** le fichier racine
     - handoff local commit : SHA / none
     - handoff remote commit before : SHA / none
     - handoff remote commit after : SHA / none
     - push handoff : done / not done / N/A
     - remote verification : yes / no / N/A
+    - remote file re-read : yes / no / N/A
+    - retour branche initiale : yes / no / N/A
     - cohérence cycle / branche projet / HEAD : yes / no
     - contenu créé couvert : yes / no / N/A
     - contenu modifié couvert : yes / no / N/A
-    - verdict handoff : HANDOFF UPDATED — REMOTE VERIFIED / HANDOFF LOCAL ONLY — PUSH MISSING / REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING / HANDOFF NOT REQUIRED — JUSTIFIED
-19. Verdict
+    - verdict handoff : (voir §7.11 — inclure REMOTE PUBLICATION NOT PERFORMED / REMOTE VERIFICATION MISSING / CANONICAL REMOTE NOT UPDATED si applicable)
+19. Verdict — **interdit** d'émettre un READY métier/documentaire si `publish-in-cycle` non achevé

 Si `synthesis only = yes` → verdict **ne peut pas** être READY.

@@ -1261,7 +1416,7 @@ Si `synthesis only = yes` → verdict **ne peut pas** être READY.
 >
 > Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
 >
-> branche : `sfia/review-handoff`
+> branche : `sfia/review-handoff`
 > fichier : `sfia-review-handoff/latest-chatgpt-review.md`
 >
 > ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
@@ -1297,14 +1452,24 @@ Si `synthesis only = yes` → verdict **ne peut pas** être READY.
 > Si le handoff est absent, obsolète, incohérent, incomplet ou synthesis-only, ChatGPT doit répondre :
 >
 > **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
+>
+> Si Cursor annonce un handoff publié mais que le fichier distant reste ancien, absent ou incomplet, ChatGPT doit répondre :
+>
+> **REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED**
+>
+> **Le rapport Cursor seul ne remplace pas le handoff Git.** ChatGPT doit lire depuis Git :
+> branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
+> (jamais le fichier racine historique comme canonique).

 Si handoff = **not required** : indiquer `HANDOFF NOT REQUIRED — JUSTIFIED` + justification — **ne pas** afficher le bloc ci-dessus.

+Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'est pas disponible** ; ne pas traiter le rapport Cursor comme substitut du handoff distant.
+
 **Instruction handoff ChatGPT (legacy — si review pack mentionné sans qualification explicite) :**

-> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
-> branche : `sfia/review-handoff`
-> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
+> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
+> branche : `sfia/review-handoff`
+> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
 > puis vérifier sa cohérence avec le rapport Cursor, notamment la présence du contenu des fichiers créés/modifiés.

 ### 9.2 Variantes par profil
@@ -1326,9 +1491,15 @@ Si handoff = **not required** : indiquer `HANDOFF NOT REQUIRED — JUSTIFIED` +
 | `STOP — MORRIS DECISION REQUIRED` | Gate ou arbitrage requis |
 | `NOT READY` | Écart bloquant documenté |
 | `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Prompt sans décision handoff required/not required |
-| `HANDOFF UPDATED — REMOTE VERIFIED` | Handoff publié et vérifié |
-| `HANDOFF LOCAL ONLY — PUSH MISSING` | Handoff commité non pushé |
+| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Mode/push contradictoires (ex. required + push oui + local-only) |
+| `HANDOFF UPDATED — REMOTE VERIFIED` | Handoff publié, SHA vérifié, fichier distant relu |
+| `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode local-only justifié — revue Git distante non disponible |
+| `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | publish-in-cycle requis mais non poussé |
+| `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Publication sans vérification/relecture distante |
 | `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff absent, obsolète ou synthesis-only |
+| `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote non à jour |
+| `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Périmètre handoff multi-fichier / mauvais chemin |
+| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible ou force push requis |
 | `HANDOFF NOT REQUIRED — JUSTIFIED` | Handoff not required avec justification |

 ---
@@ -1349,9 +1520,9 @@ Procédure détaillée :
 4. Si ajouté aux sources projet ChatGPT : aide d'instanciation — en cas d'écart, Git main > sources projet.
 5. Critical : toujours justifier. Standard par défaut si doute.
 6. Review pack proportionné : none / light / full — voir template §7. Jamais de stub final si light ou full requis.
-7. Review Handoff Git : décision required / not required obligatoire dans chaque prompt (template §3, §5, §7.10–§7.11). Lorsque required : copie, commit, push origin/sfia/review-handoff, vérification remote, instruction ChatGPT §9.1 dans le rapport final. Verdict PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING si absent.
+7. Review Handoff Git : décision required / not required + mode publish-in-cycle / local-only / not-required (template §3, §5, §7.10–§7.11). required + Push handoff autorisé = oui — L3 borné ⇒ publish-in-cycle dans le MÊME cycle (copie, commit mono-fichier, push origin/sfia/review-handoff, vérification SHA + relecture distante, retour branche) — pas de second GO Morris. local-only exige un motif. Combinaison contradictoire → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT. Décision absente → PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING. Chemin canonique unique : sfia-review-handoff/latest-chatgpt-review.md.
 8. v2.6 = baseline opérationnelle officielle (active sur `main`). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
-9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff required = L3 borné sans micro-GO Morris.
+9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff publish-in-cycle = L3 borné sans micro-GO Morris — n'autorise jamais push projet, PR, merge, force push ni L5.
 ```

 ---

```

## Sections modifiées — contenu actuel

### §2.0 mini-fiche (extrait)

<!-- BEGIN SECTION -->
Repo-informed pre-check ChatGPT

> **Candidate v2.5 — capitalisation PR 2.** Avant tout prompt Cursor SFIA repo-based, ChatGPT effectue ce pre-check lorsque Git est accessible. Git `main` prime sur les sources projet ChatGPT.

#### A. Trigger

Avant tout prompt Cursor SFIA repo-based, ChatGPT **doit** déclencher un Repo-informed pre-check si **au moins une** condition est vraie :

- la demande Morris mentionne prompt Cursor, Cursor, cycle SFIA, PR, commit, branche, merge, post-merge ;
- la demande implique consultation, création ou modification d'un fichier versionné ;
- la demande concerne méthode, template, règle, roadmap ou capitalisation ;
- la demande dépend d'un état existant du repo : réserve, rapport, décision, baseline, documentation projet ;
- le prompt attendu pourrait produire une action locale Cursor sur le repository.

#### B. Séquence

ChatGPT doit :

1. **Identifier** le repo / périmètre ;
2. **Lire** le template canonique depuis Git `main` ;
3. **Lire** les fichiers méthode utiles ;
4. **Lire** les fichiers projet concernés ;
5. **Vérifier** roadmap / décisions déjà validées ;
6. **Produire** une mini-fiche « Repo-informed pre-check » (modèle §2.0.D) ;
7. **Générer seulement ensuite** le prompt Cursor.

#### C. Matrice de routage documentaire

Formaliser la chaîne de sélection avant génération du prompt :

```text
routing guide (sfia-cycle-routing-guide.md)
→ méthode cycles v2.5 (sfia-v2.5-project-cycles-method-candidate.md)
→ template d'exécution (prompts/templates/sfia-cycle-execution-template.md)
→ operating model (sfia-chatgpt-cursor-operating-model.md)
→ guardrails (sfia-rules-and-guardrails.md)
→ contexte projet (documents projet concernés)
→ prompt Cursor généré (contrat d'exécution)
```

Chaque étape alimente la suivante. Le routage ne doit **pas** reposer sur la mémoire conversationnelle implicite.

#### D. Mini-fiche visible avant prompt

ChatGPT affiche cette mini-fiche **avant** de produire le prompt Cursor :

```text
Repo-informed pre-check ChatGPT
- repo :
- ref :
- fichiers lus :
- éléments structurants retenus :
- décisions déjà validées :
- décisions candidates :
- fichiers autorisés :
- fichiers interdits :
- gates Morris :
- niveau review pack recommandé : none / light / full
- review handoff Git : required / not required — obligatoire
- justification handoff :
- mode handoff : publish-in-cycle / local-only / not-required
- motif local-only : [obligatoire si local-only]
- push handoff autorisé : oui — L3 borné / non
- limites / incertitudes :
- verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION
```

#### E. Cas Git inaccessible

Si Git n'est **pas** accessible, ChatGPT doit :

1. le **signaler explicitement** dans la mini-fiche et dans le prompt généré ;
2. générer un prompt **prudent** renforçant la découverte locale par Cursor.

Formulation attendue dans le prompt Cursor :

```text
Git non consulté — prompt généré en mode prudent à partir du contexte conversationnel.
Cursor devra renforcer la découverte locale et stopper si divergence.
```

#### F. Trois niveaux persistants

| Niveau | Rôle | Source |
|--------|------|--------|
| **1. Instructions projet ChatGPT** | Déclencheur dans un **nouveau chat** — évite la dépendance à la mémoire conversationnelle | Projet ChatGPT (hors Git) — voir §10 |
| **2. Template Git** | Source canonique versionnée — procédure Repo-informed pre-check | Ce fichier sur Git `main` |
| **3. Prompt Cursor généré** | Contrat d'exécution — vérifié localement par Local Git Truth Check | Prompt instancié par ChatGPT |

<!-- END SECTION -->

### §2.1 étape 9

<!-- BEGIN SECTION -->
9. **Décider Review Handoff Git** — §7.10–§7.11 : **required** ou **not required** — **obligatoire, pas de valeur vide** ; décider aussi le **mode** `publish-in-cycle` / `local-only` / `not-required` ; `required` + `Push handoff autorisé = oui — L3 borné` implique **automatiquement** `publish-in-cycle` (publication distante **dans le même cycle**) ; combinaison `required` + push oui + `local-only` = invalide → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` ; verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si décision absente
<!-- END SECTION -->

### §2.3 Anti-patterns

<!-- BEGIN SECTION -->
### 2.3 Anti-patterns ChatGPT

- Envoyer ce template tel quel à Cursor
- Omettre type de cycle ou profil SFIA
- Critical sans justification
- Prompt sans périmètre / hors périmètre
- Oublier review pack sur cycle documentaire
- Omettre la décision Review Handoff Git (required / not required)
- Déclarer handoff `required` + push L3 autorisé puis s'arrêter après une préparation **locale** sans publication distante (`publish-in-cycle`)
- Combiner `required` + `Push handoff autorisé = oui` avec `Mode handoff = local-only`
- Présenter le fichier racine `latest-chatgpt-review.md` comme chemin canonique (le canonique unique est `sfia-review-handoff/latest-chatgpt-review.md`)
- Présenter une candidate non mergée comme baseline validée
- Présenter une version non mergée comme baseline officielle
- Relancer SFIA v3.0 sans GO Morris

<!-- END SECTION -->

### §3 Fiche instanciation (handoff)

<!-- BEGIN SECTION -->
Review Handoff Git :            [required / not required — OBLIGATOIRE — pas de valeur vide]
Justification handoff :         [obligatoire dans les deux cas]
Mode handoff :                  [publish-in-cycle / local-only / not-required]
Motif local-only :              [obligatoire si local-only — sinon N/A]
Branche handoff :               sfia/review-handoff
Fichier handoff :               sfia-review-handoff/latest-chatgpt-review.md
Push handoff autorisé :         [oui — L3 borné / non]
Commit handoff attendu :        [message ou convention — ex. docs(review-handoff): publish …]
Retour branche initiale :       [obligatoire si publish-in-cycle]
Vérification remote :           [obligatoire si publish-in-cycle]
Verdict distant attendu :       [ex. HANDOFF UPDATED — REMOTE VERIFIED / N/A]
Instruction ChatGPT finale :  [bloc §9.1 si required / N/A si not required]

Règles mode handoff (ChatGPT — avant génération) :
- required + Push handoff autorisé = oui — L3 borné  →  Mode = publish-in-cycle (automatique)
- required + local-only                              →  Motif local-only obligatoire
- required + push oui + local-only                   →  INVALIDE → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
- not required                                       →  Mode = not-required
- Chemin canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
  (le fichier racine latest-chatgpt-review.md n'est JAMAIS le canonique)

<!-- END SECTION -->

### §5 Étapes + Review Handoff block

<!-- BEGIN SECTION -->
Étapes d'exécution :
1. Local Git Truth Check
2. Réinitialiser `.tmp-sfia-review/chatgpt-review.md` si review pack obligatoire (§7.1) — créer le dossier si absent ; **écraser entièrement** le fichier existant ; aucun append historique
3. Lire les sources listées
4. [Étapes spécifiques au cycle]
5. Validations / contrôles du contenu projet (git diff, lints, tests si applicable)
6. Review pack si obligatoire (§7) — contenu **mono-cycle uniquement**
7. Review Handoff Git selon **Mode handoff** (§7.10–§7.11) :
   - `publish-in-cycle` : publication distante **obligatoire dans ce cycle** (copie → commit mono-fichier → push `sfia/review-handoff` → vérification SHA + relecture distante → retour branche initiale) — **ne pas s'arrêter après la préparation locale**
   - `local-only` : préparation locale uniquement + motif explicite ; **pas** de verdict métier de readiness tant que la revue Git distante est requise par Morris sans être disponible
   - `not-required` : pas de handoff
8. Rapport final (§9) — champs handoff + bloc Instruction ChatGPT si required
9. Ouvrir chatgpt-review.md si review pack (best effort)

Ordre de fin obligatoire si Mode = publish-in-cycle (cycle documentaire avec création/modification) :
contrôles projet → review pack complet → publication handoff → vérification distante → retour branche projet → contrôle état final → rapport Cursor → verdict
Cursor **ne doit pas** s'arrêter entre review pack et vérification distante.

Validations attendues :
- git status --short
- git diff --stat
- [Contrôles spécifiques]

Review pack :
[none / light / full — si light ou full, référencer §7 — réinitialiser le fichier en début de cycle (étape 2) avant toute écriture ; mono-cycle uniquement ; anti-stub final obligatoire]

Review Handoff Git :
- décision : [required / not required — obligatoire]
- justification : [obligatoire]
- mode handoff : [publish-in-cycle / local-only / not-required]
- motif local-only : [obligatoire si local-only / N/A]
- branche : sfia/review-handoff
- fichier canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
  (interdit : traiter latest-chatgpt-review.md à la racine comme canonique)
- review pack source : .tmp-sfia-review/chatgpt-review.md
- push handoff autorisé : [oui — L3 borné / non]
- commit handoff attendu : [message]
- retour branche initiale : obligatoire si publish-in-cycle
- vérification remote : obligatoire si publish-in-cycle (SHA + relecture fichier distant)
- règle atomique : required + push oui — L3 borné ⇒ publish-in-cycle dans le MÊME cycle (pas de second GO Morris)
- verdicts handoff :
  - HANDOFF UPDATED — REMOTE VERIFIED
  - HANDOFF LOCAL ONLY — PUSH MISSING (uniquement si mode local-only justifié)
  - REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED
  - REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING
  - REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
  - REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED
  - STOP — REVIEW HANDOFF SCOPE MISMATCH
  - STOP — REVIEW HANDOFF REMOTE DIVERGENCE
  - PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
  - HANDOFF NOT REQUIRED — JUSTIFIED
- instruction ChatGPT finale : inclure bloc §9.1 si required
- Actions interdites par le push handoff L3 : commit projet · push projet · PR · merge · modification main · suppression de branche

<!-- END SECTION -->

### §7.10–7.11 (complet)

<!-- BEGIN SECTION -->
### 7.10 Review Handoff Git Branch — décision required / not required

> **Candidate v2.5 — correctif routing PR handoff.** Tout prompt Cursor SFIA doit **qualifier explicitement** le Review Handoff Git : **required** ou **not required**. Aucune omission silencieuse. Le handoff n'est plus « optionnel par défaut » lorsque review pack light/full est destiné à ChatGPT.

#### Décision obligatoire (fiche d'instanciation §3 et squelette §5)

| Champ | Règle |
|-------|-------|
| **Review Handoff Git** | **required** ou **not required** — valeur **obligatoire** |
| **Justification** | Obligatoire dans les deux cas |
| **Valeur vide / implicite** | Interdite — verdict ChatGPT : **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** |

#### Mode handoff (obligatoire dès que la décision est prise)

| Mode | Quand | Effet |
|------|-------|-------|
| **`publish-in-cycle`** | `required` + `Push handoff autorisé = oui — L3 borné` | Publication distante **obligatoire dans le même cycle** avant tout verdict métier/documentaire |
| **`local-only`** | `required` + push **non**, ou motif explicite (interdit distant, divergence, contenu incomplet, etc.) | Préparation locale uniquement — **revue Git distante non disponible** |
| **`not-required`** | `Review Handoff Git = not required` | Aucun handoff |

**Règles de cohérence :**

- `required` + push oui → mode **`publish-in-cycle` automatique** ;
- `required` + `local-only` → **motif local-only obligatoire** ;
- `required` + push oui + `local-only` → **invalide** → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` ;
- chemin canonique **unique** : `sfia-review-handoff/latest-chatgpt-review.md` ;
- le fichier racine `latest-chatgpt-review.md` **n'est jamais** le canonique.

#### Objectif

Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git, **sans extension** ni copier-coller.

#### Principe

1. Cursor produit d'abord `.tmp-sfia-review/chatgpt-review.md` **localement** (artefact temporaire mono-cycle — §7.1).
2. Si mode = **`publish-in-cycle`**, Cursor **doit** ensuite publier ce contenu sur Git dans le **même cycle** (voir règle atomique ci-dessous) — la seule préparation locale est **insuffisante**.
3. Si mode = **`local-only`**, Cursor prépare le handoff local (et éventuellement `.tmp-sfia-review/handoff-local/…`) **sans** push ; le rapport doit indiquer clairement que la revue Git distante n'est **pas** disponible.
4. Destination Git canonique (si publication) :

   `sfia-review-handoff/latest-chatgpt-review.md`

   sur la branche dédiée :

   `sfia/review-handoff`

> **Important :** ne **pas** versionner `.tmp-sfia-review/chatgpt-review.md` tel quel.
> `.tmp-sfia-review/chatgpt-review.md` = artefact local temporaire Cursor.
> `sfia-review-handoff/latest-chatgpt-review.md` = copie Git de handoff, destinée à être lue par ChatGPT.
> `latest-chatgpt-review.md` à la **racine** de la branche handoff = fichier historique **non canonique** — ne pas le cibler, ne pas le présenter comme source ChatGPT.

#### Statut

| Élément | Statut |
|---------|--------|
| Branche `sfia/review-handoff` | **Non canonique** — non mergée — ne remplace **jamais** `main` |
| Fichier `latest-chatgpt-review.md` | Handoff temporaire — **aucune décision validée** portée par le fichier |
| Usage ChatGPT | Contexte de revue uniquement — pas source de vérité canonique |
| Git `main` | Reste source de vérité pour faits durables, méthode, templates, doctrine |

#### Règles

- **jamais** merge dans `main` ;
- **jamais** PR vers `main` ;
- **overwrite** du fichier à chaque cycle — pas d'append infini ;
- **aucun** fichier projet dans cette branche ;
- **aucun** secret ;
- **aucune** décision Morris déduite automatiquement du contenu ;
- `main` reste source de vérité ;
- **décision required / not required obligatoire** dans chaque prompt (§3, §5) ;
- lorsque Mode = **`publish-in-cycle`** : exécution L3 bornée **sans micro-GO Morris supplémentaire** (§7.10.1–§7.10.2) — publication distante **dans le même cycle** ;
- **push autorisé** uniquement vers `sfia/review-handoff` et uniquement pour `sfia-review-handoff/latest-chatgpt-review.md` ;
- toute autre action Git distante reste **interdite** sans GO explicite ;
- Mode `local-only` : pas de publication distante ; motif obligatoire ; revue Git distante non disponible.

#### 7.10.1 Règle atomique de publication — `publish-in-cycle`

> **Correctif v2.6 — anti second cycle de publication.** Lorsqu'un prompt instancié déclare **à la fois** :
>
> - `Review Handoff Git : required`
> - `Push handoff autorisé : oui — L3 borné`
>
> alors le **Mode handoff** est **`publish-in-cycle`** et Cursor doit **obligatoirement**, dans le **même cycle**, avant le verdict final :

1. produire le review pack complet ;
2. générer le contenu du handoff ;
3. basculer de manière contrôlée sur `sfia/review-handoff` (worktree ou checkout contrôlé) ;
4. remplacer **uniquement** `sfia-review-handoff/latest-chatgpt-review.md` ;
5. créer un **commit mono-fichier** ;
6. pousser **uniquement** `origin/sfia/review-handoff` (**fast-forward only** — **aucun force push**) ;
7. vérifier le SHA distant (`git ls-remote` / `git fetch` + comparaison) ;
8. **relire** le fichier canonique depuis Git distant ;
9. revenir sur la branche projet initiale ;
10. confirmer que l'état projet (working tree / staged) est **inchangé** ;
11. terminer **seulement** après cette vérification distante.

La simple préparation locale du handoff (`.tmp-sfia-review/…`) est **insuffisante** lorsque `publish-in-cycle` est requis.

**Absence de GO Morris supplémentaire :** cette publication **ne nécessite pas** un second GO Morris lorsque les trois conditions sont déjà dans le prompt initial :

- `Review Handoff Git : required` ;
- `Push handoff autorisé : oui — L3 borné` ;
- périmètre distant strictement limité à la branche `sfia/review-handoff` et au fichier `sfia-review-handoff/latest-chatgpt-review.md`.

Ce push est une exécution **répétable, bornée et réversible** de niveau **L3**. Il **ne vaut jamais** autorisation de : commit projet · push projet · PR · merge · modification de `main` · suppression de branche.

#### 7.10.2 Autorisation permanente bornée (L3) — lorsque `publish-in-cycle`

| Action | Condition |
|--------|-----------|
| Copie review pack → handoff | Contenu mono-cycle, exploitable (§7.2.1) |
| Commit sur `sfia/review-handoff` | Fichier `sfia-review-handoff/latest-chatgpt-review.md` **uniquement** |
| Push `origin/sfia/review-handoff` | Même si push branche projet interdit |
| Vérification remote | SHA remote = commit local **et** relecture du fichier distant |

**Garde-fous L3 / publication :**

- synchronisation **fast-forward uniquement** ;
- **aucun** force push ;
- remplacement d'**un seul** fichier ;
- staging d'**un seul** fichier — `git diff --cached --name-status` et `git diff --cached --check` **obligatoires** ;
- commit mono-fichier ;
- push de `sfia/review-handoff` **uniquement** ;
- vérification SHA distant + relecture distante ;
- retour branche initiale ;
- **aucune** altération des changements projet ;
- **aucune** inclusion de `.tmp-sfia-review/**` dans Git ;
- aucun secret ; aucune PR ; aucun merge ; aucun impact `main`.

#### 7.10.3 Cas `local-only` / publication interdite

La publication distante reste **interdite** (mode `local-only` ou arrêt) si **l'une** des situations suivantes est explicite :

- `Review Handoff Git : not required` ;
- `Push handoff autorisé : non` ;
- Morris interdit explicitement toute action distante ;
- divergence incompatible de la branche handoff → `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` ;
- force push requis ;
- contenu incomplet → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` ;
- mauvais chemin canonique / multi-fichiers → `STOP — REVIEW HANDOFF SCOPE MISMATCH`.

Dans ces cas, le verdict / rapport doit indiquer clairement que la **revue Git distante n'est pas disponible**.

**Exceptions `not required`** (justification obligatoire) : review pack **none** ; revue locale sans analyse ChatGPT ; absence d'action documentaire ; **GO Morris explicite** de ne pas utiliser le handoff.

#### 7.10.4 Séquence et verdicts — `publish-in-cycle`

| Étape | Obligation |
|-------|------------|
| 1. Contrôles contenu projet | Validations locales du cycle |
| 2. Review pack local | `.tmp-sfia-review/chatgpt-review.md` complet |
| 3. Copie handoff | Overwrite `sfia-review-handoff/latest-chatgpt-review.md` |
| 4. Commit | Mono-fichier sur `sfia/review-handoff` |
| 5. Push | `git push origin sfia/review-handoff` (FF only) |
| 6. Vérification remote | SHA distant = local **+** relecture fichier distant |
| 7. Retour branche projet | État projet inchangé |
| 8. Rapport + verdict | Seulement après 6–7 |

**Verdicts handoff :**

| Situation | Verdict obligatoire |
|-----------|---------------------|
| Push OK + SHA OK + relecture OK | `HANDOFF UPDATED — REMOTE VERIFIED` |
| `publish-in-cycle` requis mais non poussé | **`REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED`** — **interdit** d'émettre un verdict de readiness métier/documentaire |
| Poussé mais fichier distant non relu | **`REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`** |
| Contenu synthétique / manquant | **`REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`** |
| Cursor annonce publié mais remote ancien/absent/incomplet | **`REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`** |
| Mode `local-only` justifié (push non) | `HANDOFF LOCAL ONLY — PUSH MISSING` — préciser « revue Git distante non disponible » |
| Autre fichier inclus / mauvais chemin | `STOP — REVIEW HANDOFF SCOPE MISMATCH` |
| Divergence remote incompatible | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` |

**Rapport final Cursor — champs obligatoires si handoff required :**

- mode handoff ; motif local-only (si applicable)
- handoff local commit : SHA / none
- handoff remote commit before : SHA / none
- handoff remote commit after : SHA / none
- push handoff : done / not done / N/A
- remote verification : yes / no / N/A
- remote file re-read : yes / no / N/A
- retour branche initiale : yes / no / N/A

**Stop condition :** si Mode = `publish-in-cycle` et que la publication ou la vérification distante manque, le cycle est **incomplet** — **aucun** verdict `READY FOR …` documentaire/métier avant correction.

#### Niveau d'automatisation

**L3 — exécution bornée.**

| Justification | Détail |
|---------------|--------|
| Push automatique limité | Une branche dédiée, un fichier unique |
| Sans impact structurant | Pas de PR, pas de merge, pas d'impact `main` |
| Sans arbitrage | Aucune décision Morris automatisée |

#### Stop conditions (mode handoff)

Cursor doit **stopper** si :

1. la branche `sfia/review-handoff` contient d'autres fichiers non autorisés ;
2. le fichier contient secrets, tokens ou données sensibles ;
3. le push viserait `main` ou une branche projet ;
4. le handoff inclut une décision présentée comme validée sans GO Morris ;
5. le fichier dépasse un seuil excessif sans synthèse (cf. §7.6 — privilégier Git Review Index et références) ;
6. le mode n'a **pas** été activé par Morris.

#### Séquence Cursor (si Mode = `publish-in-cycle`)

```text
1. Compléter .tmp-sfia-review/chatgpt-review.md (niveau light/full) — mono-cycle, contenu complet
2. Vérifier absence de secrets / données sensibles
3. Basculer de manière contrôlée sur sfia/review-handoff (worktree recommandé)
4. Fast-forward only — aucun force push
5. Copier (overwrite) UNIQUEMENT vers sfia-review-handoff/latest-chatgpt-review.md
6. git add -f (si besoin) + staged = ce fichier seul
7. git diff --cached --name-status  (doit être M sfia-review-handoff/latest-chatgpt-review.md)
8. git diff --cached --check
9. Commit mono-fichier
10. git push origin sfia/review-handoff
11. Vérifier SHA distant = SHA local
12. Relire le fichier canonique depuis Git distant
13. Revenir sur la branche projet initiale
14. Confirmer working tree / staged projet inchangés
15. Rapport Cursor + bloc Instruction ChatGPT (§9.1)
16. Verdict — seulement après 11–14
```

#### Séquence Cursor (si Mode = `local-only`)

```text
1. Compléter le review pack
2. Écrire le handoff local (.tmp-sfia-review/handoff-local/… ou équivalent)
3. NE PAS push / NE PAS commit la branche handoff sauf instruction contraire explicite
4. Rapport : HANDOFF LOCAL ONLY — PUSH MISSING + « revue Git distante non disponible » + motif
5. Ne pas présenter un verdict de readiness comme si ChatGPT pouvait lire le handoff Git
```

### 7.11 Matrice d'activation Review Handoff Git

> **Règle non ambiguë.** Le Review Handoff Git est **required** lorsqu'un review pack **light** ou **full** doit être utilisé par ChatGPT pour analyser, valider ou décider à partir du rapport Cursor et que Git est le canal de transmission disponible.

| Situation | Handoff | Justification type |
|-----------|---------|-------------------|
| Review pack **none** | **not required** | Pas de matière review pack à transmettre |
| Review pack light/full **sans** analyse ChatGPT ultérieure | **not required** | Revue locale uniquement — justification explicite |
| Review pack light/full **destiné à ChatGPT** | **required** | Canal Git — publication remote obligatoire |
| PR readiness documentaire analysée par ChatGPT | **required** | Contrôle contenu avant GO PR |
| Capitalisation / REX | **required** | Contrôle contenu et diff |
| Modification méthode / template / règle / garde-fou | **required** | Contrôle sections modifiées |
| Audit documentaire | **required** | Contrôle livrables |
| Décision structurante | **required** | Traçabilité Morris |
| Fichier créé ou modifié — ChatGPT doit contrôler contenu complet ou diff | **required** | Review pack completeness |
| Rapport final demande lecture handoff / review pack par ChatGPT | **required** | Cohérence cycle courant |
| Décision Morris contraire | **not required** | GO Morris explicite + traçabilité |

**Verdicts handoff (Cursor) :**

| Verdict | Condition |
|---------|-----------|
| `HANDOFF UPDATED — REMOTE VERIFIED` | Commit + push + SHA OK + relecture distante OK |
| `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode `local-only` justifié — revue Git distante non disponible |
| `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | `publish-in-cycle` requis mais non poussé |
| `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Poussé mais relecture / SHA distant manquant |
| `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff synthesis-only ou contenu manquant |
| `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote ancien/absent/incomplet |
| `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Autre fichier / mauvais chemin |
| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible / force push requis |
| `HANDOFF NOT REQUIRED — JUSTIFIED` | not required avec justification |

**Verdicts prompt (ChatGPT) :**

| Verdict | Condition |
|---------|-----------|
| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Décision required/not required absente |
| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Combinaison mode/push contradictoire (ex. required + push oui + local-only) |

**Règle :** un verdict de readiness métier ou documentaire **ne peut pas** être émis avant publication + vérification lorsque `publish-in-cycle` est requis.

---

<!-- END SECTION -->

### §8 items handoff (35–42)

<!-- BEGIN SECTION -->
35. **Review Handoff** : Mode `local-only` justifié — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` + « revue Git distante non disponible » ; **ne pas** présenter comme publication réussie
36. **Review Handoff** : Mode `publish-in-cycle` mais **non poussé** — `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` ; **interdit** readiness métier/documentaire
37. **Review Handoff** : poussé sans relecture / SHA distant — `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`
38. **Review Handoff** : décision required / not required **absente** — `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
39. **Review Handoff** : mode incohérent (required + push oui + local-only) — `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
40. **Review Handoff** : Cursor annonce publié mais remote ancien/absent/incomplet — `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`
41. **Review Handoff** : force push requis ou divergence incompatible — `STOP — REVIEW HANDOFF REMOTE DIVERGENCE`
42. **Review Handoff** : s'arrêter après review pack / handoff local alors que `publish-in-cycle` est requis — cycle incomplet
39. **Review Handoff** : rapport final sans bloc **Instruction ChatGPT obligatoire** alors que handoff required
40. **Review Handoff** : handoff distant **obsolète** (cycle / branche / HEAD incohérents avec rapport Cursor)

---

## 9. Formats de rapport Cursor attendus

Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fuseau local ou UTC explicite).

<!-- END SECTION -->

### §9.1 champs handoff + instruction

<!-- BEGIN SECTION -->
18. **Review Handoff Git** (§7.10–§7.11) :
    - handoff decision : required / not required
    - handoff justification
    - mode handoff : publish-in-cycle / local-only / not-required
    - motif local-only : … / N/A
    - push handoff autorisé : oui — L3 borné / non
    - source review pack : `.tmp-sfia-review/chatgpt-review.md`
    - handoff branch : `sfia/review-handoff` (si required)
    - handoff file : `sfia-review-handoff/latest-chatgpt-review.md` (si required) — **jamais** le fichier racine
    - handoff local commit : SHA / none
    - handoff remote commit before : SHA / none
    - handoff remote commit after : SHA / none
    - push handoff : done / not done / N/A
    - remote verification : yes / no / N/A
    - remote file re-read : yes / no / N/A
    - retour branche initiale : yes / no / N/A
    - cohérence cycle / branche projet / HEAD : yes / no
    - contenu créé couvert : yes / no / N/A
    - contenu modifié couvert : yes / no / N/A
    - verdict handoff : (voir §7.11 — inclure REMOTE PUBLICATION NOT PERFORMED / REMOTE VERIFICATION MISSING / CANONICAL REMOTE NOT UPDATED si applicable)
19. Verdict — **interdit** d'émettre un READY métier/documentaire si `publish-in-cycle` non achevé

Si `synthesis only = yes` → verdict **ne peut pas** être READY.

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
>
> Si Cursor annonce un handoff publié mais que le fichier distant reste ancien, absent ou incomplet, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED**
>
> **Le rapport Cursor seul ne remplace pas le handoff Git.** ChatGPT doit lire depuis Git :
> branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
> (jamais le fichier racine historique comme canonique).

Si handoff = **not required** : indiquer `HANDOFF NOT REQUIRED — JUSTIFIED` + justification — **ne pas** afficher le bloc ci-dessus.

Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'est pas disponible** ; ne pas traiter le rapport Cursor comme substitut du handoff distant.

**Instruction handoff ChatGPT (legacy — si review pack mentionné sans qualification explicite) :**

> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
> puis vérifier sa cohérence avec le rapport Cursor, notamment la présence du contenu des fichiers créés/modifiés.

<!-- END SECTION -->

### §9.3 verdicts handoff

<!-- BEGIN SECTION -->
| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Décision required/not required absente |
| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Combinaison mode/push contradictoire (ex. required + push oui + local-only) |

**Règle :** un verdict de readiness métier ou documentaire **ne peut pas** être émis avant publication + vérification lorsque `publish-in-cycle` est requis.

---

## 8. Stop conditions communes

Cursor doit **stopper** et demander Morris si :

1. Branche incorrecte
2. HEAD / base incohérente avec le prompt
3. `main` non aligné quand alignement requis
4. Fichier versionné modifié inattendu
5. Fichier staged inattendu
6. Fichier hors périmètre touché ou prêt à être touché
7. Chemin protégé sans scope explicite
8. `git push` / PR / merge demandés sans GO Morris
9. Suppression de branche sans GO Morris
10. Décision structurante non validée
11. Profil Critical sans justification
12. Promotion implicite d'une baseline / candidate hors GO Morris
13. Relance SFIA 3.0 implicite
14. Modification Prompt Catalog sans GO Morris
15. Tentative d'automatiser un arbitrage humain
16. **Absence de review pack** alors que niveau **light** ou **full** requis
17. Contenu créé/modifié **absent** du review pack (niveau light/full)
18. **Divergence** entre fichier réel et contenu présenté dans le review pack
19. **Stub final** du review pack alors que light ou full requis (§7.5)
20. Figma : fidélité visuelle requise sans source design validée
21. **Append** d'un nouveau cycle à un `chatgpt-review.md` existant **sans écrasement** préalable
22. Review pack **mélangeant plusieurs cycles** sans instruction explicite Morris
23. **Duplication intégrale** de documents Git-accessibles dans le review pack sans justification
24. **Review Handoff** : push vers autre branche que `sfia/review-handoff` ou fichier autre que `sfia-review-handoff/latest-chatgpt-review.md`
25. **Review Handoff** : mode non activé par Morris mais push handoff demandé ou tenté
26. **Review Handoff** : merge ou PR de `sfia/review-handoff` vers `main`
27. **Figma visual contract** : code UI modifié sans contrat visuel extrait préalable (§6.6.D)
28. **Figma visual contract** : verdict `NO DELIVERY REQUIRED` ou « aligné Figma » sans comparaison capture Figma vs runtime (§6.6.G–H)
29. **Figma visual contract** : verdict visuel fort sans capture runtime (§6.6.G)
30. **Review pack** : contenu créé/modifié absent alors que light/full requis (§7.2.1)
31. **Review pack** : synthèse seule sans contenu exploitable — `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING` (§7.2.2)
32. **Git granularity** : micro-PR non justifiée ; commit/PR dispersé sans livrable cohérent
33. **Post-MVP stop** : arrêt post-MVP sans décision Morris ; réserve ouverte non qualifiée ; Option B/C lancée sans GO Morris
34. **Post-merge cleanup** : branche ambiguë ; branche non mergée ; `git branch -d` refuse ; branche spéciale/handoff ciblée ; cleanup sans GO post-merge
35. **Review Handoff** : Mode `local-only` justifié — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` + « revue Git distante non disponible » ; **ne pas** présenter comme publication réussie
36. **Review Handoff** : Mode `publish-in-cycle` mais **non poussé** — `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` ; **interdit** readiness métier/documentaire
37. **Review Handoff** : poussé sans relecture / SHA distant — `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`
38. **Review Handoff** : décision required / not required **absente** — `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
39. **Review Handoff** : mode incohérent (required + push oui + local-only) — `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
40. **Review Handoff** : Cursor annonce publié mais remote ancien/absent/incomplet — `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`
41. **Review Handoff** : force push requis ou divergence incompatible — `STOP — REVIEW HANDOFF REMOTE DIVERGENCE`
42. **Review Handoff** : s'arrêter après review pack / handoff local alors que `publish-in-cycle` est requis — cycle incomplet
39. **Review Handoff** : rapport final sans bloc **Instruction ChatGPT obligatoire** alors que handoff required
40. **Review Handoff** : handoff distant **obsolète** (cycle / branche / HEAD incohérents avec rapport Cursor)

---

## 9. Formats de rapport Cursor attendus

Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fuseau local ou UTC explicite).

### 9.1 Champs communs obligatoires (tous profils)

1. Date et heure du rapport
2. Local Git Truth Check
3. Fichiers lus
4. Actions réalisées
5. Fichiers créés / modifiés
6. Diff stat (si applicable)
7. Validations exécutées
8. Garde-fous confirmés
9. Review pack réinitialisé au début du cycle (oui/non)
10. Review pack créé / mis à jour (oui/non) — **mono-cycle uniquement**
11. Niveau review pack appliqué : none / light / full
12. Review pack complété avant rapport final — absence de stub final (confirmé / non)
13. Review pack ne contient que le cycle courant (confirmé / non)
14. Ouverture review pack (confirmé / best effort)
15. Réserves
16. Décisions Morris requises (oui/non + liste)
17. **Review pack content coverage** (§7.5 — created/modified/diff/synthesis only/verdict)
18. **Review Handoff Git** (§7.10–§7.11) :
    - handoff decision : required / not required
    - handoff justification
    - mode handoff : publish-in-cycle / local-only / not-required
    - motif local-only : … / N/A
    - push handoff autorisé : oui — L3 borné / non
    - source review pack : `.tmp-sfia-review/chatgpt-review.md`
    - handoff branch : `sfia/review-handoff` (si required)
    - handoff file : `sfia-review-handoff/latest-chatgpt-review.md` (si required) — **jamais** le fichier racine
    - handoff local commit : SHA / none
    - handoff remote commit before : SHA / none
    - handoff remote commit after : SHA / none
    - push handoff : done / not done / N/A
    - remote verification : yes / no / N/A
    - remote file re-read : yes / no / N/A
    - retour branche initiale : yes / no / N/A
    - cohérence cycle / branche projet / HEAD : yes / no
    - contenu créé couvert : yes / no / N/A
    - contenu modifié couvert : yes / no / N/A
    - verdict handoff : (voir §7.11 — inclure REMOTE PUBLICATION NOT PERFORMED / REMOTE VERIFICATION MISSING / CANONICAL REMOTE NOT UPDATED si applicable)
19. Verdict — **interdit** d'émettre un READY métier/documentaire si `publish-in-cycle` non achevé

Si `synthesis only = yes` → verdict **ne peut pas** être READY.

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
>
> Si Cursor annonce un handoff publié mais que le fichier distant reste ancien, absent ou incomplet, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED**
>
> **Le rapport Cursor seul ne remplace pas le handoff Git.** ChatGPT doit lire depuis Git :
> branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
> (jamais le fichier racine historique comme canonique).

Si handoff = **not required** : indiquer `HANDOFF NOT REQUIRED — JUSTIFIED` + justification — **ne pas** afficher le bloc ci-dessus.

Si Mode = **`local-only`** : indiquer clairement que la revue Git distante **n'est pas disponible** ; ne pas traiter le rapport Cursor comme substitut du handoff distant.

**Instruction handoff ChatGPT (legacy — si review pack mentionné sans qualification explicite) :**

> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
> puis vérifier sa cohérence avec le rapport Cursor, notamment la présence du contenu des fichiers créés/modifiés.

### 9.2 Variantes par profil

| Profil | Format rapport |
|--------|----------------|
| **Light** | Court — 1 page max ; Git check + actions + diff court + verdict |
| **Standard** | Structuré — sections §9.1 complètes ; readiness unique |
| **Critical** | Renforcé — risques, gates, réserves classées ; review pack recommandé |
| **Capitalization** | + sections distinctes : Observation / Recommandation / Décision proposée / Décision validée |

### 9.3 Verdicts types

| Verdict | Usage |
|---------|-------|
| `READY FOR COMMIT` | Commit local autorisé par prompt |
| `READY FOR PR READINESS` | Prêt pour étape PR readiness |
| `READY FOR MORRIS GO PUSH / PR` | À utiliser uniquement si le prompt mentionne explicitement qu'un GO Morris préalable ou attendu couvre cette étape. Sinon utiliser READY FOR PR READINESS. |
| `STOP — MORRIS DECISION REQUIRED` | Gate ou arbitrage requis |
| `NOT READY` | Écart bloquant documenté |
| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Prompt sans décision handoff required/not required |
| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Mode/push contradictoires (ex. required + push oui + local-only) |
| `HANDOFF UPDATED — REMOTE VERIFIED` | Handoff publié, SHA vérifié, fichier distant relu |
| `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode local-only justifié — revue Git distante non disponible |
| `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | publish-in-cycle requis mais non poussé |
| `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Publication sans vérification/relecture distante |
| `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff absent, obsolète ou synthesis-only |
| `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote non à jour |
| `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Périmètre handoff multi-fichier / mauvais chemin |
| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible ou force push requis |
| `HANDOFF NOT REQUIRED — JUSTIFIED` | Handoff not required avec justification |

<!-- END SECTION -->

### §10 items 7–9

<!-- BEGIN SECTION -->
7. Review Handoff Git : décision required / not required + mode publish-in-cycle / local-only / not-required (template §3, §5, §7.10–§7.11). required + Push handoff autorisé = oui — L3 borné ⇒ publish-in-cycle dans le MÊME cycle (copie, commit mono-fichier, push origin/sfia/review-handoff, vérification SHA + relecture distante, retour branche) — pas de second GO Morris. local-only exige un motif. Combinaison contradictoire → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT. Décision absente → PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING. Chemin canonique unique : sfia-review-handoff/latest-chatgpt-review.md.
8. v2.6 = baseline opérationnelle officielle (active sur `main`). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff publish-in-cycle = L3 borné sans micro-GO Morris — n'autorise jamais push projet, PR, merge, force push ni L5.

<!-- END SECTION -->

## Absence de commit / push / PR / merge

Ce cycle documentaire d’origine était **local-only** pour le handoff. Aucune publication distante du correctif projet. Aucun commit projet à cette étape.

## Décision ChatGPT finale

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-20 19:49:00 CEST |
| **Rôle** | ChatGPT reviewer |
| **Observation** | Correctif vérifié depuis le diff Git complet du handoff |
| **Décision** | Correctif **accepté** |
| **Portée** | Autorisation de passer au cycle PR readiness (`GO COMMIT PUSH PR DRAFT — SFIA TEMPLATE HANDOFF FIX`) |
| **Limites** | Aucun merge automatique · aucune modification complémentaire implicite |

**Verdict courant :**

`SFIA TEMPLATE REVIEW HANDOFF PUBLICATION FIX ACCEPTED — READY FOR COMMIT AND PR READINESS`

## Historique de verdict (cycle documentaire)

Verdict antérieur du cycle local (conservé pour traçabilité, **non courant**) :

`SFIA TEMPLATE REVIEW HANDOFF PUBLICATION FIX DOCUMENTED — READY FOR MORRIS REVIEW`

## Prochaine décision Morris

Exécuter le cycle :

`GO COMMIT PUSH PR DRAFT — SFIA TEMPLATE HANDOFF FIX`

(commit + push branche corrective + PR Draft — **aucun merge** dans ce cycle).

## Verdict

`SFIA TEMPLATE REVIEW HANDOFF PUBLICATION FIX ACCEPTED — READY FOR COMMIT AND PR READINESS`
