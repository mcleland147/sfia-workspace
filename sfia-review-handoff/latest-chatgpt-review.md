# SFIA Review Pack — Review Handoff routing fix

**Date/heure :** 2026-07-11 04:52 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Branche projet :** method/sfia-review-handoff-routing-fix
**HEAD départ :** fed2e2c
**origin/main départ :** fed2e2c
**HEAD final (commit) :** 92d0553
**merge-base :** fed2e2c
**Type de cycle :** 15 — Capitalisation / REX
**Profil :** Capitalization — Standard
**Review pack level :** full

---

## Local Git Truth Check

| Élément | Résultat |
|---------|----------|
| Workspace | /Users/morris/Projects/sfia-workspace |
| Remote | mcleland147/sfia-workspace |
| Branche départ | main @ fed2e2c = origin/main |
| Tracked modifiés avant cycle | aucun |
| Staged avant cycle | aucun |
| Untracked locaux | présents — non staged, non commités |
| Branche créée | method/sfia-review-handoff-routing-fix |

---

## Cause racine confirmée

| Observation | Cause |
|-------------|-------|
| PR #159 : review pack full sans handoff | Handoff « optionnel » dans template §7.10 et routing guide |
| Pas de décision required/not required | Fiche §3 et squelette §5 incomplets |
| Rapport sans instruction ChatGPT | §9.1 conditionnel « si mentionné » |
| Handoff distant obsolète | Pas de trigger dur light/full → publication |

**Cause racine :** documentation traitant le handoff comme optionnel sans décision explicite obligatoire dans la chaîne prompt → exécution → rapport.

---

## Sources consultées

| Source | Sections | Rôle |
|--------|----------|------|
| prompts/templates/sfia-cycle-execution-template.md | §2.0, §3, §5, §7.10, §9 | Cause racine + correctif |
| sfia-chatgpt-cursor-operating-model.md | §18.2.8.H, §18.2.8.G | Rôles |
| sfia-cycle-routing-guide.md | §2 compléments | Routing |
| sfia-rules-and-guardrails.md | §13 anti-patterns | Règle transverse |
| 2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md | §5 E4-E5 | Acquis handoff |
| PR #159 branch (consultation) | framing doc | Incident — non modifié |

---

## Fichiers modifiés / créés

| Fichier | Action |
|---------|--------|
| prompts/templates/sfia-cycle-execution-template.md | modifié |
| method/.../sfia-chatgpt-cursor-operating-model.md | modifié |
| method/.../sfia-cycle-routing-guide.md | modifié |
| method/.../sfia-rules-and-guardrails.md | modifié |
| method/.../2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md | **créé** |

**Diff stat :** 5 files, +257/-47

---

## Contenu complet — fichier créé (REX)

# SFIA v2.5 — REX — Review Handoff routing fix

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md`  
**Date :** 2026-07-11 04:52 Europe/Paris  
**Statut :** **Candidate** — traçabilité correctif  
**Baseline :** SFIA v2.4 opérationnelle — v2.5 candidate non promue

---

## 1. Incident observé

Lors de la génération du prompt Cursor pour la PR #159 (cadrage v2.6) :

- review pack **full** demandé ;
- Review Handoff Git **non activé** dans le prompt ;
- rapport Cursor **sans** bloc Instruction ChatGPT obligatoire ;
- handoff distant resté sur le **cycle précédent** (PR #158 clôture capitalisation).

## 2. Cause racine confirmée

| Cause | Source |
|-------|--------|
| Handoff décrit comme **optionnel** | Template §7.10 titre « optionnel » ; routing guide « optionnel » |
| Fiche d'instanciation **sans** décision required/not required | Template §3 |
| Squelette prompt **sans** section handoff obligatoire | Template §5 |
| Pas de trigger dur review pack light/full → handoff | Absence §7.11 |
| Rapport final **conditionnel** (« si mentionné ») vs **obligatoire** si required | Template §9.1 |

## 3. Correctif (candidate v2.5)

- Décision **required / not required** obligatoire (§3, §5, §7.10)
- Matrice d'activation §7.11 + routing guide §2.1
- L3 borné push handoff lorsque required (§7.10.1)
- Champs handoff + Instruction ChatGPT obligatoire §9.1
- Operating model §18.2.8.H + rules §13.1
- Verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`

## 4. Fichiers impactés

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- présent document REX

## 5. Reprise PR #159

Après merge du correctif : régénérer le prompt v2.6 avec handoff **required** ; republier handoff ; revue ChatGPT sur cycle v2.6 courant.

## 6. Statut

**SFIA v2.5 remains candidate.** No baseline promotion. Morris decides merge correctif.

---

*REX candidate — Morris décide.*


---

## Diff complet — fichiers modifiés

diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index c7dba19..b3fe296 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -751,56 +751,40 @@ Morris :
 
 Proposition d'instruction (à ajouter aux projets ChatGPT — hors modification directe Git) :
 
-> Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push, PR, merge et promotions de baseline. Le review pack est proportionné : les documents consultés accessibles Git sont référencés sans duplication intégrale ; les fichiers créés ou modifiés doivent rester traçables par contenu complet, sections complètes modifiées ou diff utile ; le fichier `.tmp-sfia-review/chatgpt-review.md` reste temporaire, hors commit, et peut être supprimé ou purgé après validation.
+> Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push branche projet, PR, merge et promotions de baseline. Le review pack est proportionné. **Tout prompt nécessitant review pack light/full et analyse ChatGPT doit inclure une décision Review Handoff Git required / not required (template §7.10–§7.11). Lorsque required : copie, commit, push et vérification remote du handoff, plus instruction ChatGPT §9.1 dans le rapport final.**
 
 Détail opérationnel : template §10.
 
-##### H. Review Handoff Git Branch (optionnel)
+##### H. Review Handoff Git Branch — décision required / not required
 
-> **Référence détaillée :** template §7.10 — **candidate** ; mode optionnel ; GO Morris requis pour activation.
+> **Référence détaillée :** template §7.10–§7.11 — **candidate** ; décision **obligatoire** ; plus « optionnel par omission ».
 
 Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, sans extension ni copier-coller.
 
 **ChatGPT :**
 
-- **peut lire** `sfia-review-handoff/latest-chatgpt-review.md` depuis Git (branche `sfia/review-handoff`) ;
-- **doit consulter** ce handoff **avant** de répondre à Morris sur le fond d'un rapport Cursor mentionnant review pack ou handoff ;
-- **lit** le handoff depuis **`origin/sfia/review-handoff`** (remote) — pas uniquement un commit local non pushé ;
-- **signale** si le rapport Cursor indique `HANDOFF UPDATED` mais remote verification = no ou push handoff = not done ;
-- **utilise** ce fichier comme **contexte de revue** — dernier handoff Cursor ;
-- **ne traite pas** ce fichier comme source de vérité canonique ;
-- **vérifie toujours** Git `main` / branche projet pour les faits durables, décisions validées et doctrine ;
-- **vérifie** que le handoff contient : cycle ; branche projet ; base HEAD ; fichiers créés/modifiés ; contenu complet des fichiers créés ; sections complètes modifiées ou diff utile ; réserves ; décisions Morris ; verdict ;
-- **signale** `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` si le handoff ne contient qu'une synthèse sans contenus créés/modifiés exploitables.
+- **qualifie explicitement** required / not required dans chaque prompt ;
+- **injecte** la section Review Handoff Git complète (template §5) ;
+- **refuse** un prompt sans décision — **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** ;
+- **doit consulter** le handoff remote **avant** de répondre lorsque handoff = required ;
+- **refuse** un verdict READY si handoff required absent, obsolète ou synthesis-only ;
+- **signale** `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` si incohérent.
 
 **Cursor :**
 
-- **génère** le review pack local `.tmp-sfia-review/chatgpt-review.md` ;
-- **produit** un review pack **réellement exploitable** par ChatGPT (template §7.2.1) ;
-- pour fichiers créés/modifiés : **ne se limite pas** à une synthèse — contenu complet, sections complètes modifiées ou diff utile complet ;
-- **signale explicitement** toute impossibilité de fournir ce contenu ;
-- **si mode activé** (GO Morris), copie le contenu vers `sfia-review-handoff/latest-chatgpt-review.md` ;
-- **met à jour uniquement** la branche `sfia/review-handoff` ;
-- **commit + push obligatoires** vers `origin/sfia/review-handoff` — push autorisé dans le cycle même si push branche projet interdit (template §7.10) ;
-- **vérifie remote** après push : `git ls-remote origin refs/heads/sfia/review-handoff` — SHA remote = commit local ;
-- **ne déclare pas** `HANDOFF UPDATED` si push absent — verdict **`HANDOFF LOCAL ONLY — PUSH MISSING`** ;
-- **rapporte** : handoff local SHA ; remote before/after ; push done/not done ; remote verification yes/no ;
-- **ne merge jamais** cette branche ;
-- **ne push rien d'autre** sans GO Morris.
-
-**Git :**
-
-- **`main`** reste source de vérité ;
-- **`sfia/review-handoff`** = branche de transport temporaire — non canonique, non mergée ;
-- **`latest-chatgpt-review.md`** = overwrite-only — pas d'append infini.
+- **publie le handoff** lorsque prompt qualifie **required** — ne désactive pas un handoff required ;
+- **copie, commit, push, vérifie remote** — L3 borné (template §7.10.1) ;
+- **affiche** le bloc Instruction ChatGPT obligatoire (template §9.1) si required ;
+- **rapporte** tous les champs handoff §9.1 ;
+- **ne merge jamais** `sfia/review-handoff`.
 
 **Morris :**
 
-- **valide** l'activation du mode ;
-- **conserve** l'autorité sur push / PR / merge structurants ;
-- **peut demander** purge ou désactivation du handoff.
+- **valide** la règle candidate ;
+- **décide** des exceptions not required ;
+- **n'a pas** à répéter un micro-GO handoff lorsque required est conforme à §7.11.
 
-**Automatisation :** L3 bornée — push limité à une branche dédiée, un fichier unique, sans PR, sans merge, sans impact `main`.
+**Automatisation :** L3 bornée lorsque handoff = required.
 
 ##### I. Figma visual contract / Figma-to-code (candidate — capitalisation v2.5 PR 3)
 
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index bafcda8..4ee9235 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -62,7 +62,7 @@ Chaque cycle doit déclarer explicitement les références qu'il utilise.
 
 La documentation SFIA est appliquée par le **routage des cycles**, pas uniquement par la mémoire du modèle.
 
-**Complément Repo-informed (candidate v2.5 — PR 2) :** avant génération d'un prompt Cursor repo-based, ChatGPT consulte Git si accessible et applique la matrice de routage documentaire. Le détail de la procédure Repo-informed pre-check et du review pack proportionné (none / light / full) est dans `prompts/templates/sfia-cycle-execution-template.md` §2.0 et §7. Les documents consultés accessibles Git **ne doivent pas** être recopiés intégralement dans le review pack — références, rôles et sections suffisent. Le mode **Review Handoff Git Branch** est optionnel et documenté dans le template §7.10 et l'operating model §18.2.8.H ; il ne remplace pas le routage documentaire ni Git `main`.
+**Complément Repo-informed (candidate v2.5 — PR 2) :** avant génération d'un prompt Cursor repo-based, ChatGPT consulte Git si accessible et applique la matrice de routage documentaire. Le détail de la procédure Repo-informed pre-check et du review pack proportionné (none / light / full) est dans `prompts/templates/sfia-cycle-execution-template.md` §2.0 et §7. Le **Review Handoff Git Branch** exige une décision **required / not required** explicite (template §7.10–§7.11) ; il ne remplace pas le routage documentaire ni Git `main`.
 
 **Complément Figma visual contract (candidate v2.5 — PR 3) :** pour les cycles UX/UI ou delivery UI avec fidélité Figma attendue, appliquer le standard Figma visual contract du template d'exécution §6.6 ; **aucun verdict visuel fort** sans contrat visuel extrait et sans comparaison runtime.
 
@@ -70,7 +70,25 @@ La documentation SFIA est appliquée par le **routage des cycles**, pas uniqueme
 
 **Complément Git granularity + post-MVP stop rules + post-merge cleanup (candidate v2.5 — PR 4) :** granularité Git proportionnée, règles d'arrêt post-MVP avec réserves acceptées, cleanup branche PR intégré au post-merge — template §6.12.1, §6.14, §6.15 ; operating model §18.2.8.J.
 
-**Complément Review Handoff commit + push + remote verification (candidate v2.5 — PR 4) :** mode handoff activé = commit + push `origin/sfia/review-handoff` + vérification remote obligatoires — template §7.10 ; operating model §18.2.8.H. Verdict `HANDOFF LOCAL ONLY — PUSH MISSING` si push absent.
+**Complément Review Handoff commit + push + remote verification (candidate v2.5 — PR 4) :** handoff required = commit + push `origin/sfia/review-handoff` + vérification remote obligatoires — template §7.10 ; operating model §18.2.8.H.
+
+**Complément Review Handoff routing fix (candidate v2.5 — correctif) :** matrice d'obligation — template §7.11 ; routing §2.1 ci-dessous.
+
+### 2.1 Matrice Review Handoff Git × review pack
+
+| Review pack | Analyse ChatGPT | Handoff | Notes |
+|-------------|-----------------|---------|-------|
+| **none** | — | **not required** | |
+| **light / full** | oui | **required** | Publication remote obligatoire |
+| **light / full** | non | **not required** | Justification obligatoire |
+| PR readiness documentaire | oui | **required** | |
+| Capitalisation / méthode / template / règle | oui | **required** | |
+| Audit documentaire | oui | **required** | |
+| Contrôle contenu créé/modifié | oui | **required** | |
+| Cycle local sans ChatGPT | non | **not required** | Justification |
+| Décision Morris contraire | — | **not required** | Traçabilité |
+
+> Verdict prompt incomplet : `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`.
 
 ## 3. Positionnement dans SFIA
 
diff --git a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
index 7fa16ac..13b251a 100644
--- a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
+++ b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
@@ -213,6 +213,21 @@ SFIA utilise les décisions suivantes :
 | Document créé sans source | Connaissance non traçable |
 | UI avant maquette stable | Écart visuel et rework |
 | Mélange UI + backend + auth | Dérive de périmètre |
+| Prompt sans décision Review Handoff Git | Handoff omis — ChatGPT lit un cycle obsolète |
+| Review pack light/full pour ChatGPT sans handoff required | Cycle incomplet — pas de publication remote |
+
+## 13.1 Review Handoff Git — règle transverse (candidate v2.5 — correctif routing)
+
+> **Référence :** template §7.10–§7.11 ; operating model §18.2.8.H ; routing guide §2.1.
+
+| Règle | Application |
+|-------|-------------|
+| **Décision obligatoire** | Tout prompt Cursor SFIA doit qualifier Review Handoff Git : **required** ou **not required** |
+| **Prompt incomplet** | Review pack light/full destiné à ChatGPT sans décision handoff → **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** |
+| **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné |
+| **Rapport incomplet** | Rapport demandant lecture handoff sans push/remote confirmés → cycle incomplet |
+| **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor lorsque handoff required |
+| **Baseline** | Règle candidate v2.5 — ne promeut pas v2.5 ni v2.6 en baseline |
 
 ## 14. Documents associés
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md
new file mode 100644
index 0000000..e26a9f7
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md
@@ -0,0 +1,56 @@
+# SFIA v2.5 — REX — Review Handoff routing fix
+
+**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md`  
+**Date :** 2026-07-11 04:52 Europe/Paris  
+**Statut :** **Candidate** — traçabilité correctif  
+**Baseline :** SFIA v2.4 opérationnelle — v2.5 candidate non promue
+
+---
+
+## 1. Incident observé
+
+Lors de la génération du prompt Cursor pour la PR #159 (cadrage v2.6) :
+
+- review pack **full** demandé ;
+- Review Handoff Git **non activé** dans le prompt ;
+- rapport Cursor **sans** bloc Instruction ChatGPT obligatoire ;
+- handoff distant resté sur le **cycle précédent** (PR #158 clôture capitalisation).
+
+## 2. Cause racine confirmée
+
+| Cause | Source |
+|-------|--------|
+| Handoff décrit comme **optionnel** | Template §7.10 titre « optionnel » ; routing guide « optionnel » |
+| Fiche d'instanciation **sans** décision required/not required | Template §3 |
+| Squelette prompt **sans** section handoff obligatoire | Template §5 |
+| Pas de trigger dur review pack light/full → handoff | Absence §7.11 |
+| Rapport final **conditionnel** (« si mentionné ») vs **obligatoire** si required | Template §9.1 |
+
+## 3. Correctif (candidate v2.5)
+
+- Décision **required / not required** obligatoire (§3, §5, §7.10)
+- Matrice d'activation §7.11 + routing guide §2.1
+- L3 borné push handoff lorsque required (§7.10.1)
+- Champs handoff + Instruction ChatGPT obligatoire §9.1
+- Operating model §18.2.8.H + rules §13.1
+- Verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
+
+## 4. Fichiers impactés
+
+- `prompts/templates/sfia-cycle-execution-template.md`
+- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
+- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
+- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
+- présent document REX
+
+## 5. Reprise PR #159
+
+Après merge du correctif : régénérer le prompt v2.6 avec handoff **required** ; republier handoff ; revue ChatGPT sur cycle v2.6 courant.
+
+## 6. Statut
+
+**SFIA v2.5 remains candidate.** No baseline promotion. Morris decides merge correctif.
+
+---
+
+*REX candidate — Morris décide.*
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index cea92a7..2b93b9b 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -94,6 +94,8 @@ Repo-informed pre-check ChatGPT
 - fichiers interdits :
 - gates Morris :
 - niveau review pack recommandé : none / light / full
+- review handoff Git : required / not required — obligatoire
+- justification handoff :
 - limites / incertitudes :
 - verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION
 ```
@@ -133,7 +135,8 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
 8. **Décider review pack** — §7 : niveau none / light / full
-9. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite
+9. **Décider Review Handoff Git** — §7.10–§7.11 : **required** ou **not required** — **obligatoire, pas de valeur vide** ; verdict `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si absent
+10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite
 
 ### 2.2 Nouveau chat et sources projet
 
@@ -151,6 +154,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 - Critical sans justification
 - Prompt sans périmètre / hors périmètre
 - Oublier review pack sur cycle documentaire
+- Omettre la décision Review Handoff Git (required / not required)
 - Présenter v2.5 comme baseline validée
 
 ---
@@ -185,6 +189,14 @@ Blocs désactivés :
 Gates Morris :                  [liste explicite ou « aucun sauf merge si demandé »]
 Review pack :                   [none / light / full — voir §7]
 
+Review Handoff Git :            [required / not required — OBLIGATOIRE — pas de valeur vide]
+Justification handoff :         [obligatoire dans les deux cas]
+Branche handoff (si required) : sfia/review-handoff
+Fichier handoff (si required) : sfia-review-handoff/latest-chatgpt-review.md
+Push handoff autorisé :         [oui — L3 borné si required / non si not required]
+Vérification remote :           [obligatoire si required]
+Instruction ChatGPT finale :  [bloc §9.1 si required / N/A si not required]
+
 Stop conditions spécifiques :
 Rapport Cursor attendu :        [Light / Standard / Critical / Capitalization — §9]
 Verdict attendu :               [ex. READY FOR PR READINESS / READY FOR COMMIT / STOP …]
@@ -330,8 +342,9 @@ Stop conditions :
 4. [Étapes spécifiques au cycle]
 5. Validations (git diff, lints, tests si applicable)
 6. Review pack si obligatoire (§7) — contenu **mono-cycle uniquement**
-7. Rapport final (§9)
-8. Ouvrir chatgpt-review.md si review pack (best effort)
+7. Review Handoff Git si **required** (§7.10–§7.11) — copie, commit, push, vérification remote
+8. Rapport final (§9) — inclure champs handoff si required + bloc Instruction ChatGPT obligatoire
+9. Ouvrir chatgpt-review.md si review pack (best effort)
 
 Validations attendues :
 - git status --short
@@ -341,6 +354,23 @@ Validations attendues :
 Review pack :
 [none / light / full — si light ou full, référencer §7 — réinitialiser le fichier en début de cycle (étape 2) avant toute écriture ; mono-cycle uniquement ; anti-stub final obligatoire]
 
+Review Handoff Git :
+- décision : [required / not required — obligatoire]
+- justification : [obligatoire]
+- branche : sfia/review-handoff
+- fichier : sfia-review-handoff/latest-chatgpt-review.md
+- review pack source : .tmp-sfia-review/chatgpt-review.md
+- overwrite : obligatoire si required
+- commit : obligatoire si required
+- push : obligatoire si required (origin/sfia/review-handoff — seul push distant autorisé dans le cycle)
+- remote verification : obligatoire si required (git ls-remote)
+- verdicts handoff :
+  - HANDOFF UPDATED — REMOTE VERIFIED
+  - HANDOFF LOCAL ONLY — PUSH MISSING
+  - REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
+  - HANDOFF NOT REQUIRED — JUSTIFIED
+- instruction ChatGPT finale : inclure bloc §9.1 si required
+
 Rapport final attendu :
 [Format selon profil §9 — inclure date et heure du rapport]
 
@@ -964,9 +994,17 @@ Cursor doit :
 - **Ne jamais** recopier intégralement des documents consultés accessibles dans Git — sauf extrait court justifiant une décision
 - **Ne jamais** laisser un stub final si light ou full est requis (§7.5)
 
-### 7.10 Review Handoff Git Branch optionnel
+### 7.10 Review Handoff Git Branch — décision required / not required
+
+> **Candidate v2.5 — correctif routing PR handoff.** Tout prompt Cursor SFIA doit **qualifier explicitement** le Review Handoff Git : **required** ou **not required**. Aucune omission silencieuse. Le handoff n'est plus « optionnel par défaut » lorsque review pack light/full est destiné à ChatGPT.
 
-> **Mode optionnel** — activable uniquement après **GO Morris** ou règle explicitement validée. Ne remplace pas `.tmp-sfia-review/chatgpt-review.md` ni Git `main`.
+#### Décision obligatoire (fiche d'instanciation §3 et squelette §5)
+
+| Champ | Règle |
+|-------|-------|
+| **Review Handoff Git** | **required** ou **not required** — valeur **obligatoire** |
+| **Justification** | Obligatoire dans les deux cas |
+| **Valeur vide / implicite** | Interdite — verdict ChatGPT : **`PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`** |
 
 #### Objectif
 
@@ -975,7 +1013,7 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,
 #### Principe
 
 1. Cursor produit d'abord `.tmp-sfia-review/chatgpt-review.md` **localement** (artefact temporaire mono-cycle — §7.1).
-2. Si le mode est **activé par GO Morris**, Cursor copie ensuite ce contenu vers :
+2. Si **required** (§7.11), Cursor copie ensuite ce contenu vers :
 
    `sfia-review-handoff/latest-chatgpt-review.md`
 
@@ -1005,10 +1043,26 @@ Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git,
 - **aucun** secret ;
 - **aucune** décision Morris déduite automatiquement du contenu ;
 - `main` reste source de vérité ;
-- usage activable uniquement après GO Morris ou règle explicitement validée ;
+- **décision required / not required obligatoire** dans chaque prompt (§3, §5) ;
+- lorsque **required** : exécution L3 bornée **sans micro-GO Morris supplémentaire** (§7.10.1) ;
 - **push autorisé** uniquement vers `sfia/review-handoff` et uniquement pour `sfia-review-handoff/latest-chatgpt-review.md` ;
 - toute autre action Git distante reste **interdite** sans GO explicite.
 
+#### 7.10.1 Autorisation permanente bornée (L3) — lorsque required
+
+> **Règle candidate v2.5 — correctif routing.** Lorsqu'un prompt Cursor SFIA conforme qualifie le handoff **required**, les actions suivantes sont **autorisées dans le cycle** sans nouveau micro-GO Morris :
+
+| Action | Condition |
+|--------|-----------|
+| Copie review pack → handoff | Contenu mono-cycle, exploitable (§7.2.1) |
+| Commit sur `sfia/review-handoff` | Fichier `sfia-review-handoff/latest-chatgpt-review.md` **uniquement** |
+| Push `origin/sfia/review-handoff` | Même si push branche projet interdit |
+| Vérification remote | `git ls-remote` — SHA remote = commit local |
+
+**Garde-fous L3 :** branche unique ; fichier unique ; aucun secret ; aucune PR ; aucun merge ; aucun impact `main` ; aucun autre push distant.
+
+**Exceptions not required** (justification obligatoire) : review pack **none** ; revue locale sans analyse ChatGPT ; absence d'action documentaire ; **GO Morris explicite** de ne pas utiliser le handoff.
+
 #### Règle pérenne — commit + push + vérification remote obligatoire (PR 4 candidate)
 
 > Quand le mode Review Handoff Git Branch est **activé**, le handoff n'est **pas complet** sans publication remote.
@@ -1076,8 +1130,38 @@ Cursor doit **stopper** si :
 5. git push origin sfia/review-handoff — push obligatoire, pas d'autre push
 6. git ls-remote origin refs/heads/sfia/review-handoff — vérifier SHA remote = commit local
 7. Confirmer dans le rapport Cursor : handoff local SHA ; remote before/after ; push done ; remote verification yes/no
+8. Afficher le bloc **Instruction ChatGPT obligatoire** (§9.1) si required
 ```
 
+### 7.11 Matrice d'activation Review Handoff Git
+
+> **Règle non ambiguë.** Le Review Handoff Git est **required** lorsqu'un review pack **light** ou **full** doit être utilisé par ChatGPT pour analyser, valider ou décider à partir du rapport Cursor et que Git est le canal de transmission disponible.
+
+| Situation | Handoff | Justification type |
+|-----------|---------|-------------------|
+| Review pack **none** | **not required** | Pas de matière review pack à transmettre |
+| Review pack light/full **sans** analyse ChatGPT ultérieure | **not required** | Revue locale uniquement — justification explicite |
+| Review pack light/full **destiné à ChatGPT** | **required** | Canal Git — publication remote obligatoire |
+| PR readiness documentaire analysée par ChatGPT | **required** | Contrôle contenu avant GO PR |
+| Capitalisation / REX | **required** | Contrôle contenu et diff |
+| Modification méthode / template / règle / garde-fou | **required** | Contrôle sections modifiées |
+| Audit documentaire | **required** | Contrôle livrables |
+| Décision structurante | **required** | Traçabilité Morris |
+| Fichier créé ou modifié — ChatGPT doit contrôler contenu complet ou diff | **required** | Review pack completeness |
+| Rapport final demande lecture handoff / review pack par ChatGPT | **required** | Cohérence cycle courant |
+| Décision Morris contraire | **not required** | GO Morris explicite + traçabilité |
+
+**Verdicts handoff (Cursor) :**
+
+| Verdict | Condition |
+|---------|-----------|
+| `HANDOFF UPDATED — REMOTE VERIFIED` | Commit + push + remote OK |
+| `HANDOFF LOCAL ONLY — PUSH MISSING` | Commit local sans push |
+| `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff synthesis-only ou contenu manquant |
+| `HANDOFF NOT REQUIRED — JUSTIFIED` | not required avec justification |
+
+**Verdict prompt (ChatGPT) :** `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` si décision absente.
+
 ---
 
 ## 8. Stop conditions communes
@@ -1120,6 +1204,10 @@ Cursor doit **stopper** et demander Morris si :
 34. **Post-merge cleanup** : branche ambiguë ; branche non mergée ; `git branch -d` refuse ; branche spéciale/handoff ciblée ; cleanup sans GO post-merge
 35. **Review Handoff** : handoff commité localement mais **non pushé** sur `origin/sfia/review-handoff` — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` ; cycle incomplet si ChatGPT doit lire handoff distant
 36. **Review Handoff** : rapport demande lecture handoff Git sans vérification remote (`git ls-remote`) — SHA remote ≠ SHA local attendu
+37. **Review Handoff** : décision required / not required **absente** du prompt — `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING`
+38. **Review Handoff** : handoff **required** mais non publié (commit/push/remote) — cycle incomplet
+39. **Review Handoff** : rapport final sans bloc **Instruction ChatGPT obligatoire** alors que handoff required
+40. **Review Handoff** : handoff distant **obsolète** (cycle / branche / HEAD incohérents avec rapport Cursor)
 
 ---
 
@@ -1146,11 +1234,54 @@ Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fus
 15. Réserves
 16. Décisions Morris requises (oui/non + liste)
 17. **Review pack content coverage** (§7.5 — created/modified/diff/synthesis only/verdict)
-18. Verdict
+18. **Review Handoff Git** (§7.10–§7.11) :
+    - handoff decision : required / not required
+    - handoff justification
+    - source review pack : `.tmp-sfia-review/chatgpt-review.md`
+    - handoff branch : `sfia/review-handoff` (si required)
+    - handoff file : `sfia-review-handoff/latest-chatgpt-review.md` (si required)
+    - handoff local commit : SHA / none
+    - handoff remote commit before : SHA / none
+    - handoff remote commit after : SHA / none
+    - push handoff : done / not done / N/A
+    - remote verification : yes / no / N/A
+    - cohérence cycle / branche projet / HEAD : yes / no
+    - contenu créé couvert : yes / no / N/A
+    - contenu modifié couvert : yes / no / N/A
+    - verdict handoff : HANDOFF UPDATED — REMOTE VERIFIED / HANDOFF LOCAL ONLY — PUSH MISSING / REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING / HANDOFF NOT REQUIRED — JUSTIFIED
+19. Verdict
 
 Si `synthesis only = yes` → verdict **ne peut pas** être READY.
 
-**Instruction handoff ChatGPT (si review pack ou handoff mentionné) :**
+**Instruction ChatGPT obligatoire** — **afficher ce bloc visiblement** lorsque handoff = **required** :
+
+> **Instruction ChatGPT obligatoire :**
+>
+> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
+>
+> branche : `sfia/review-handoff`  
+> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
+>
+> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
+> - le cycle ;
+> - le profil ;
+> - la branche projet ;
+> - le HEAD et la base ;
+> - les fichiers créés ou modifiés ;
+> - le contenu complet des fichiers créés ;
+> - les sections complètes modifiées ou le diff utile ;
+> - les réserves ;
+> - les décisions Morris ;
+> - le verdict du review pack ;
+> - le commit et la vérification distante du handoff.
+>
+> Si le handoff est absent, obsolète, incohérent ou synthesis-only, ChatGPT doit répondre :
+>
+> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
+
+Si handoff = **not required** : indiquer `HANDOFF NOT REQUIRED — JUSTIFIED` + justification — **ne pas** afficher le bloc ci-dessus.
+
+**Instruction handoff ChatGPT (legacy — si review pack mentionné sans qualification explicite) :**
 
 > Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :  
 > branche : `sfia/review-handoff`  
@@ -1175,6 +1306,11 @@ Si `synthesis only = yes` → verdict **ne peut pas** être READY.
 | `READY FOR MORRIS GO PUSH / PR` | À utiliser uniquement si le prompt mentionne explicitement qu'un GO Morris préalable ou attendu couvre cette étape. Sinon utiliser READY FOR PR READINESS. |
 | `STOP — MORRIS DECISION REQUIRED` | Gate ou arbitrage requis |
 | `NOT READY` | Écart bloquant documenté |
+| `PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING` | Prompt sans décision handoff required/not required |
+| `HANDOFF UPDATED — REMOTE VERIFIED` | Handoff publié et vérifié |
+| `HANDOFF LOCAL ONLY — PUSH MISSING` | Handoff commité non pushé |
+| `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff absent, obsolète ou synthesis-only |
+| `HANDOFF NOT REQUIRED — JUSTIFIED` | Handoff not required avec justification |
 
 ---
 
@@ -1194,8 +1330,9 @@ Procédure détaillée :
 4. Si ajouté aux sources projet ChatGPT : aide d'instanciation — en cas d'écart, Git main > sources projet.
 5. Critical : toujours justifier. Standard par défaut si doute.
 6. Review pack proportionné : none / light / full — voir template §7. Jamais de stub final si light ou full requis.
-7. v2.5 = candidate, non baseline. v2.4 reste baseline opérationnelle tant que Morris n'a pas validé v2.5.
-8. Morris décide push, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas.
+7. Review Handoff Git : décision required / not required obligatoire dans chaque prompt (template §3, §5, §7.10–§7.11). Lorsque required : copie, commit, push origin/sfia/review-handoff, vérification remote, instruction ChatGPT §9.1 dans le rapport final. Verdict PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING si absent.
+8. v2.5 = candidate, non baseline. v2.4 reste baseline opérationnelle tant que Morris n'a pas validé v2.5.
+9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff required = L3 borné sans micro-GO Morris.
 ```
 
 ---


---

## Règles avant / après

| Aspect | Avant | Après |
|--------|-------|-------|
| Handoff | Optionnel par défaut | Décision required/not required **obligatoire** |
| Trigger | GO Morris ou règle vague | Matrice §7.11 — light/full + ChatGPT → required |
| Prompt | Pas de section handoff | Section §5 obligatoire |
| Rapport | Instruction si mentionné | Instruction **obligatoire** si required |
| Push handoff | GO Morris implicite | L3 borné si required |
| Verdict prompt | — | PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING |

---

## Handoff decision (cycle courant)

- **decision :** required
- **justification :** modification méthode/template/routing — ChatGPT doit contrôler le correctif depuis Git

---

## Review pack coverage

| Critère | Valeur |
|---------|--------|
| created files full content | **yes** |
| modified sections complete | **yes** — diff complet |
| useful diff included | **yes** |
| synthesis only | **no** |
| review pack verdict | **complete** |

---

## Garde-fous

- PR #159 non modifiée
- v2.4 baseline ; v2.5/v2.6 candidate
- Pas v3/MCP/.sfia
- Merge interdit

