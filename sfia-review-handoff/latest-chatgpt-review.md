---
status: temporary-review-handoff
branch: sfia/review-handoff
source: .tmp-sfia-review/chatgpt-review.md
canonical: false
merge_to_main: forbidden
updated_for: PR 3 review pack completeness correction
---

# Review pack — PR 3 Figma visual contract + review pack completeness correction

**Date et heure de revue :** 2026-07-10 23:32 CEST (UTC+0200)

**Cycle :** 15 — Capitalisation / REX — PR 3 + correction règle review pack completeness  
**Branche :** `capitalization/sfia-v2.5-figma-visual-contract` @ `393a34c`  
**Base :** `main` @ `393a34c`  
**Profil :** Capitalization — Standard  
**Niveau review pack :** **full**  
**Gouvernance :** aucun commit PR 3 — review pack non stub final

---

## 1. Objectif

1. Formaliser Figma visual contract / Figma-to-code (PR 3).
2. Corriger la **règle générale** : review pack doit contenir le contenu exploitable des fichiers créés/modifiés — pas synthèse seule.

---

## 2. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| Branche | `capitalization/sfia-v2.5-figma-visual-contract` ✅ |
| HEAD | `393a34c` ✅ |
| Fichiers modifiés | 3 (périmètre autorisé) ✅ |
| Commit PR 3 | ❌ non ✅ |
| `sfia-review-handoff/` sur PR 3 | ❌ absent ✅ |

---

## 3. Git Review Index

```text
Git Review Index
- base branch : main @ 393a34c
- HEAD avant : 393a34c
- HEAD après : 393a34c
- fichiers modifiés :
  - prompts/templates/sfia-cycle-execution-template.md
  - method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
  - method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- fichiers créés : aucun
- commits PR 3 : aucun
- diff stat : 3 files, +266 / -8
- review pack : full
```

---

## 4. Sources consultées (références)

| Source | Rôle | Sections |
|--------|------|----------|
| Roadmap PR 3 §5.4, §6 | Cadrage Figma visual contract | §5.4, PR 3 |
| Template §6.6, §7 | Cibles modification | UX/Figma, review pack |
| Operating model §18.2 | Rôles + handoff | H, I, 18.2.4 |
| Routing guide §2 | Pointeurs | compléments v2.5 |
| R-UX-01 gap review | Ancrage REX | §1 bis — NO DELIVERY révoqué |
| Review pack PR 3 précédent | Constat Morris | synthèse insuffisante |

---

## 5. Synthèse des modifications (index — détail en §6)

| Fichier | Nature |
|---------|--------|
| `prompts/templates/sfia-cycle-execution-template.md` | §6.6 Figma visual contract ; §7.2.1–7.2.2 completeness ; §7.5 coverage ; §8.30–31 ; §9.1 handoff instruction |
| `sfia-chatgpt-cursor-operating-model.md` | §18.2.4 Cursor review pack ; §18.2.8.H ChatGPT handoff + Cursor exploitable |
| `sfia-cycle-routing-guide.md` | §2 pointeur review pack completeness |

---

## 6. Contenu des fichiers créés/modifiés

> **Règle appliquée :** diff utile complet pour chaque fichier modifié.

### A. prompts/templates/sfia-cycle-execution-template.md

| Champ | Valeur |
|-------|--------|
| Type | fichier modifié |
| Contenu fourni | diff utile complet |
| Couverture review | **complète** |
| Réserve | — |

### B. method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md

| Champ | Valeur |
|-------|--------|
| Type | fichier modifié |
| Contenu fourni | diff utile complet |
| Couverture review | **complète** |
| Réserve | — |

### C. method/sfia-fast-track/core/sfia-cycle-routing-guide.md

| Champ | Valeur |
|-------|--------|
| Type | fichier modifié |
| Contenu fourni | diff utile complet |
| Couverture review | **complète** |
| Réserve | — |

### Diff utile complet — 3 fichiers

diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index 138f7bf..e4b2f09 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -629,7 +629,7 @@ Cycle visant à transformer apprentissage, REX, pratique ou décision en actif m
 | Acteur | Responsabilités | Limites |
 |--------|-----------------|---------|
 | **ChatGPT** | Qualifie le profil ; distingue type cycle et profil ; cadre ; sélectionne références ; produit prompt contractuel ; identifie risques ; recommande décision ; limite sollicitations Morris aux gates listés | **Recommande — ne décide pas** ; pas push / PR / merge / actation version |
-| **Cursor** | Local Git Truth Check ; exécute périmètre ; contrôle fichiers touchés ; rapport structuré ; PR-ready si demandé ; signale écarts profil / type incohérents | **Exécute — ne change pas le scope** ; pas d'arbitrage implicite |
+| **Cursor** | Local Git Truth Check ; exécute périmètre ; contrôle fichiers touchés ; rapport structuré ; PR-ready si demandé ; signale écarts profil / type incohérents ; **review pack exploitable** — contenu complet créés, sections/diff modifiés (§7.2.1 template) | **Exécute — ne change pas le scope** ; pas d'arbitrage implicite ; **pas de synthèse-only** dans review pack si fichiers créés/modifiés |
 | **Morris** | Gates structurants ; doctrine, scope, version, PR, merge, pilote | Autorité L0 — arbitrage structurant jamais automatisé |
 
 #### 18.2.5 Stop conditions (v2.5 candidate)
@@ -764,13 +764,19 @@ Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, san
 **ChatGPT :**
 
 - **peut lire** `sfia-review-handoff/latest-chatgpt-review.md` depuis Git (branche `sfia/review-handoff`) ;
+- **doit consulter** ce handoff **avant** de répondre à Morris sur le fond d'un rapport Cursor mentionnant review pack ou handoff ;
 - **utilise** ce fichier comme **contexte de revue** — dernier handoff Cursor ;
 - **ne traite pas** ce fichier comme source de vérité canonique ;
-- **vérifie toujours** Git `main` / branche projet pour les faits durables, décisions validées et doctrine.
+- **vérifie toujours** Git `main` / branche projet pour les faits durables, décisions validées et doctrine ;
+- **vérifie** que le handoff contient : cycle ; branche projet ; base HEAD ; fichiers créés/modifiés ; contenu complet des fichiers créés ; sections complètes modifiées ou diff utile ; réserves ; décisions Morris ; verdict ;
+- **signale** `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` si le handoff ne contient qu'une synthèse sans contenus créés/modifiés exploitables.
 
 **Cursor :**
 
 - **génère** le review pack local `.tmp-sfia-review/chatgpt-review.md` ;
+- **produit** un review pack **réellement exploitable** par ChatGPT (template §7.2.1) ;
+- pour fichiers créés/modifiés : **ne se limite pas** à une synthèse — contenu complet, sections complètes modifiées ou diff utile complet ;
+- **signale explicitement** toute impossibilité de fournir ce contenu ;
 - **si mode activé** (GO Morris), copie le contenu vers `sfia-review-handoff/latest-chatgpt-review.md` ;
 - **met à jour uniquement** la branche `sfia/review-handoff` ;
 - **ne merge jamais** cette branche ;
@@ -790,6 +796,47 @@ Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, san
 
 **Automatisation :** L3 bornée — push limité à une branche dédiée, un fichier unique, sans PR, sans merge, sans impact `main`.
 
+##### I. Figma visual contract / Figma-to-code (candidate — capitalisation v2.5 PR 3)
+
+> **Référence détaillée :** template §6.6 — **candidate** ; ne valide pas v2.5 ; Morris décide.
+
+Standard transverse pour sécuriser les cycles UX/UI et Figma-to-code — ancrage REX Chantiers360 R-UX-01.
+
+**ChatGPT :**
+
+- **préqualifie** la source Figma si disponible ;
+- **exige** un contrat visuel avant prompt delivery UI ;
+- **ne valide pas** un alignement visuel sans preuve runtime ;
+- **distingue** structure présente vs fidélité visuelle ;
+- **refuse** de recommander `NO DELIVERY REQUIRED` sans capture runtime comparée à la frame.
+
+**Cursor :**
+
+- **utilise** MCP Figma si disponible ;
+- **confirme explicitement** les frames lues via MCP ;
+- **liste** les dimensions / layout observés ;
+- **extrait** un contrat visuel **avant** code (§6.6.D) ;
+- **applique** le contrat dans le code uniquement dans le périmètre autorisé ;
+- **produit** une comparaison runtime **après** modification (§6.6.H) ;
+- **ne conclut pas** « aligné » uniquement parce que les composants existent ;
+- **ne conclut pas** `READY` si un élément visible Figma manque ;
+- **ne conclut pas** `NO DELIVERY REQUIRED` sans comparaison capture Figma vs capture runtime.
+
+**Git :**
+
+- **conserve** docs, diffs, commits et PR ;
+- **ne remplace pas** les preuves visuelles ;
+- **doit référencer** captures ou observations runtime dans review pack / rapport Cursor.
+
+**Morris :**
+
+- **valide** la source Figma si nécessaire ;
+- **arbitre** les écarts visuels ;
+- **décide** si un écart est acceptable ou doit être corrigé ;
+- **reste autorité** sur tout verdict qualitatif sensible.
+
+**Règle dure :** MCP Figma ne suffit pas — contrat visuel extrait avant code ; revue runtime obligatoire après modification ; aucun verdict « aligné » sans comparaison capture Figma vs capture runtime.
+
 ## 19. Décision
 
 Le modèle ChatGPT ↔ Cursor est reconnu comme **fondation opérationnelle SFIA v1.1**.
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index 6d78c50..a80538d 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -64,6 +64,10 @@ La documentation SFIA est appliquée par le **routage des cycles**, pas uniqueme
 
 **Complément Repo-informed (candidate v2.5 — PR 2) :** avant génération d'un prompt Cursor repo-based, ChatGPT consulte Git si accessible et applique la matrice de routage documentaire. Le détail de la procédure Repo-informed pre-check et du review pack proportionné (none / light / full) est dans `prompts/templates/sfia-cycle-execution-template.md` §2.0 et §7. Les documents consultés accessibles Git **ne doivent pas** être recopiés intégralement dans le review pack — références, rôles et sections suffisent. Le mode **Review Handoff Git Branch** est optionnel et documenté dans le template §7.10 et l'operating model §18.2.8.H ; il ne remplace pas le routage documentaire ni Git `main`.
 
+**Complément Figma visual contract (candidate v2.5 — PR 3) :** pour les cycles UX/UI ou delivery UI avec fidélité Figma attendue, appliquer le standard Figma visual contract du template d'exécution §6.6 ; **aucun verdict visuel fort** sans contrat visuel extrait et sans comparaison runtime.
+
+**Complément review pack completeness :** pour tout cycle documentaire, capitalisation ou delivery avec fichiers créés/modifiés, le review pack doit contenir le **contenu exploitable** des fichiers créés/modifiés selon le template d'exécution §7.2.1. Une synthèse seule ne suffit pas pour une revue ChatGPT détaillée.
+
 ## 3. Positionnement dans SFIA
 
 Ce guide sert de **couche d'orchestration opérationnelle** pour les cycles SFIA.
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 5b502a2..0be0352 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -425,11 +425,13 @@ Activer uniquement les blocs pertinents. Injecter le texte du bloc dans le promp
 | **Gates Morris** | GO arbitrage performance/coût/délai |
 | **Stop** | SLA structurant sans gate |
 
-### 6.6 UX/UI + Figma
+### 6.6 UX/UI + Figma — Figma visual contract / Figma-to-code
+
+> **Candidate v2.5 — capitalisation PR 3.** Standard transverse pour cycles UX/UI et delivery UI avec fidélité Figma attendue. Ancrage REX : Chantiers360 R-UX-01 — verdict `NO DELIVERY REQUIRED` révoqué sans capture runtime.
 
 | Élément | Contenu |
 |---------|---------|
-| **Activer si** | Cycle UX/UI ou delivery avec composant UI |
+| **Activer si** | Cycle UX/UI ou delivery avec composant UI ; fidélité visuelle attendue ; gap review Figma-to-code ; PR readiness avec conformité visuelle ; correction UI après écart runtime |
 | **Qualification source design** | Choisir **un** des 4 cas ci-dessous |
 
 | Cas | Comportement |
@@ -439,8 +441,154 @@ Activer uniquement les blocs pertinents. Injecter le texte du bloc dans le promp
 | **Figma absent + fidélité visuelle attendue** | **Stop** ou GO arbitrage Morris — pas d'interprétation Cursor |
 | **Figma disponible non validé** | Exploration OK ; **pas** source d'exécution tant que non validé |
 
-| **Livrables** | Référence Figma, specs UI, écarts design/code, handoff delivery |
-| **Stop** | Fidélité visuelle requise sans source design validée |
+#### A. Cas d'usage
+
+Le standard s'applique **au minimum** dans les cas suivants :
+
+- cycle UX/UI avec source Figma validée ;
+- delivery UI avec fidélité visuelle attendue ;
+- gap review Figma-to-code ;
+- PR readiness impliquant conformité visuelle ;
+- correction UI après écart runtime.
+
+#### B. Gate simple Review UX/Figma
+
+Cursor applique ce gate avant tout verdict visuel fort :
+
+| Niveau | Question |
+|--------|----------|
+| **Structure** | Les bons éléments existent-ils ? |
+| **Fonctionnel** | Le comportement est-il conforme ? |
+| **Visuel** | L'écran ressemble-t-il réellement à la frame ? |
+| **Runtime** | A-t-on une capture navigateur ? |
+| **Verdict** | Peut-on conclure sans capture ? |
+
+**Règle dure :** si aucune capture runtime n'est comparée à la frame Figma, le verdict **ne peut pas** être `NO DELIVERY REQUIRED`. Le maximum autorisé est :
+
+```text
+REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED
+```
+
+#### C. Règles Cursor obligatoires
+
+Cursor doit :
+
+- utiliser **MCP Figma** si disponible ;
+- **confirmer explicitement** les frames lues via MCP ;
+- **lister** les dimensions / layout observés ;
+- produire une **comparaison visuelle runtime vs Figma** ;
+- **ne pas** conclure « aligné » uniquement parce que les composants existent ;
+- **ne pas** conclure `READY` si un élément visible Figma manque ;
+- appliquer le verdict maximum `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED` si capture runtime ou Figma absente.
+
+#### D. Design extraction contract — avant code
+
+**Avant toute modification code** Figma-to-code, Cursor produit le tableau :
+
+**Contrat visuel Figma extrait**
+
+| Élément | Observation Figma | Valeur / détail | Incertitude | Impact delivery |
+|---------|---------------------|-----------------|:-----------:|-----------------|
+| dimensions principales | | | | |
+| couleurs | | | | |
+| spacing | | | | |
+| colonnes | | | | |
+| styles badges | | | | |
+| styles statuts | | | | |
+| style CTA | | | | |
+| structure état vide | | | | |
+
+**Règle :** ne coder **qu'après** production de ce contrat. Si le contrat ne peut pas être produit :
+
+```text
+FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED
+```
+
+#### E. Contenu minimal du contrat visuel
+
+Le contrat visuel inclut **au minimum** :
+
+- lien Figma / fileKey si disponible ;
+- page / frame / node-id ;
+- statut validation Figma : validé / non validé / à produire ;
+- dimensions de frame ou viewport cible ;
+- structure principale ; grille / colonnes / layout ;
+- spacing / paddings / gaps clés ;
+- typographies observables ;
+- couleurs / tokens / états visuels ;
+- composants visibles ; badges / statuts / CTA ;
+- états nominal / vide / erreur / loading si disponibles ;
+- écarts déjà connus ; hypothèses si données manquantes.
+
+#### F. Règle MCP Figma
+
+MCP Figma peut servir à lire la **structure** et les **propriétés design**, mais **ne suffit pas** à conclure une fidélité visuelle sans comparaison runtime.
+
+Cursor liste dans le rapport / review pack :
+
+- frames lues ; node-id utilisés ;
+- dimensions / layout observés ;
+- limites de lecture MCP ;
+- éléments non vérifiables depuis MCP.
+
+#### G. Runtime screenshot obligatoire
+
+Pour conclure une **conformité visuelle**, Cursor produit ou demande une **capture runtime**.
+
+Sans capture runtime, le verdict maximum est :
+
+```text
+REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED
+```
+
+#### H. Comparaison Figma vs Runtime — après code ou gap review
+
+Après codage ou gap review, Cursor produit le tableau :
+
+**Figma vs Runtime**
+
+| Élément | Attendu Figma | Observé runtime | Statut | Preuve / réserve |
+|---------|---------------|-----------------|--------|------------------|
+
+Statuts autorisés : **Conforme** ; **Partiellement conforme** ; **Non conforme** ; **Capture/runtime requise**.
+
+**Règles :**
+
+- ne pas conclure `READY` si un élément visible Figma manque ;
+- ne pas conclure « aligné » sans comparaison capture Figma vs capture runtime ;
+- ne pas conclure `NO DELIVERY REQUIRED` si la comparaison n'a pas été faite.
+
+#### I. Verdicts autorisés
+
+| Verdict | Usage |
+|---------|-------|
+| `FIGMA CONTRACT READY — READY FOR DELIVERY` | Contrat extrait complet — code autorisé |
+| `FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED` | Contrat impossible ou incomplet |
+| `FIGMA TO RUNTIME ALIGNED — READY` | Comparaison faite — conformité visuelle |
+| `FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED` | Écarts visuels — delivery requis |
+| `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED` | Capture runtime ou comparaison absente |
+| `NO DELIVERY REQUIRED` | **Uniquement si** : source Figma validée ; frames lues explicitement ; contrat visuel produit ; runtime screenshot disponible ; comparaison Figma vs Runtime effectuée ; aucun écart visible bloquant |
+
+#### J. Règle dure à capitaliser
+
+> Pour un cycle Figma-to-code, **MCP Figma ne suffit pas**. Il faut imposer une **extraction visuelle contractuelle avant modification code**, puis une **revue runtime obligatoire après modification**. Aucun verdict « aligné » sans comparaison capture Figma vs capture runtime.
+
+#### K. Stop conditions (Figma visual contract)
+
+Cursor stoppe ou demande décision Morris si :
+
+- fidélité visuelle attendue mais Figma absent ou non validé ;
+- frame Figma introuvable ;
+- MCP Figma indisponible alors que le prompt le rend obligatoire ;
+- capture runtime impossible mais verdict fort demandé ;
+- écart visuel majeur détecté sans GO arbitrage ;
+- ambiguïté entre design exploration et source d'exécution ;
+- demande de conclure pixel-perfect sans preuve runtime ;
+- contrat visuel Figma non produit avant code ;
+- comparaison Figma vs Runtime absente après code ou gap review.
+
+| **Livrables** | Référence Figma ; contrat visuel extrait ; comparaison Figma vs Runtime ; captures ; specs UI ; écarts design/code ; handoff delivery |
+| **Stop** | Fidélité visuelle requise sans source design validée ; contrat absent ; comparaison absente ; verdict fort sans capture |
 
 ### 6.7 Sécurité / RSSI
 
@@ -570,6 +718,42 @@ Formulation attendue :
 | Fichier **modifié** | Sections complètes modifiées obligatoires **ou** diff utile complet |
 | Contenu complet non inclus (taille) | Chemin, sections concernées, raison, extrait/diff suffisant pour revue |
 
+#### 7.2.1 Contenu obligatoire des fichiers créés/modifiés
+
+> **Règle générale** — s'applique à **tout** review pack **light** ou **full** impliquant création ou modification de fichiers.
+
+Pour toute génération de `.tmp-sfia-review/chatgpt-review.md`, dès qu'un cycle **crée** ou **modifie** des fichiers, Cursor doit inclure le **contenu exploitable** des fichiers créés/modifiés — pas uniquement une synthèse.
+
+| Exigence | Application |
+|----------|-------------|
+| **Fichier créé** | Contenu complet obligatoire — sauf seuil explicite (§7.6) |
+| **Fichier modifié** | Section complète modifiée **ou** diff utile complet obligatoire |
+| **Fichier long** | Sections exactes modifiées + diff utile + justification de non-inclusion complète |
+| **Fichier volumineux généré** | Chemin, taille, rôle, extrait utile, justification |
+| **Documents consultés non modifiés** | Références, rôle, sections consultées, extraits courts **seulement** |
+| **Fichiers créés/modifiés** | **Jamais** uniquement une synthèse |
+
+Le review pack final **ne peut pas** être considéré complet si le contenu des fichiers créés/modifiés est absent.
+
+Cursor doit signaler explicitement toute impossibilité de fournir ce contenu (volume, chemin, sections, extrait/diff de repli).
+
+#### 7.2.2 Règle anti-faux-complet / anti-synthèse-only
+
+Si le review pack ne contient **que** :
+
+- une liste de fichiers ;
+- une synthèse des changements ;
+- un diff stat ;
+- ou une checklist,
+
+alors Cursor doit marquer dans le review pack et le rapport final :
+
+```text
+REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING
+```
+
+Le review pack **ne peut pas** être considéré complet dans ce cas.
+
 ### 7.3 Niveaux de review pack
 
 #### none
@@ -628,7 +812,15 @@ Le rapport final Cursor doit confirmer :
 - review pack réinitialisé au début : oui / non ;
 - review pack complété avant rapport final : oui / non ;
 - niveau appliqué : none / light / full ;
-- absence de stub final : confirmé / non.
+- absence de stub final : confirmé / non ;
+- **Review pack content coverage** (§7.2.1) :
+  - created files full content : yes / no / not applicable ;
+  - modified sections complete : yes / no / not applicable ;
+  - useful diff included : yes / no / not applicable ;
+  - synthesis only : yes / no ;
+  - review pack verdict : complete / incomplete.
+
+Si `synthesis only = yes`, le verdict Cursor **ne peut pas** être `READY` (ou variante READY FOR …).
 
 ### 7.6 Règle de taille / suppression / purge
 
@@ -788,6 +980,11 @@ Cursor doit **stopper** et demander Morris si :
 24. **Review Handoff** : push vers autre branche que `sfia/review-handoff` ou fichier autre que `sfia-review-handoff/latest-chatgpt-review.md`
 25. **Review Handoff** : mode non activé par Morris mais push handoff demandé ou tenté
 26. **Review Handoff** : merge ou PR de `sfia/review-handoff` vers `main`
+27. **Figma visual contract** : code UI modifié sans contrat visuel extrait préalable (§6.6.D)
+28. **Figma visual contract** : verdict `NO DELIVERY REQUIRED` ou « aligné Figma » sans comparaison capture Figma vs runtime (§6.6.G–H)
+29. **Figma visual contract** : verdict visuel fort sans capture runtime (§6.6.G)
+30. **Review pack** : contenu créé/modifié absent alors que light/full requis (§7.2.1)
+31. **Review pack** : synthèse seule sans contenu exploitable — `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING` (§7.2.2)
 
 ---
 
@@ -813,7 +1010,17 @@ Chaque rapport final Cursor doit indiquer la **date et l'heure du rapport** (fus
 14. Ouverture review pack (confirmé / best effort)
 15. Réserves
 16. Décisions Morris requises (oui/non + liste)
-17. Verdict
+17. **Review pack content coverage** (§7.5 — created/modified/diff/synthesis only/verdict)
+18. Verdict
+
+Si `synthesis only = yes` → verdict **ne peut pas** être READY.
+
+**Instruction handoff ChatGPT (si review pack ou handoff mentionné) :**
+
+> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :  
+> branche : `sfia/review-handoff`  
+> fichier : `sfia-review-handoff/latest-chatgpt-review.md`  
+> puis vérifier sa cohérence avec le rapport Cursor, notamment la présence du contenu des fichiers créés/modifiés.
 
 ### 9.2 Variantes par profil
 

---

## 7. Review pack content coverage

| Champ | Valeur |
|-------|--------|
| created files full content | not applicable |
| modified sections complete | yes (via diff utile complet) |
| useful diff included | **yes** |
| synthesis only | **no** |
| review pack verdict | **complete** |

---

## 8. Instruction obligatoire ChatGPT — lecture handoff avant réponse

Dès réception d'un rapport Cursor mentionnant :
- `.tmp-sfia-review/chatgpt-review.md`
- `sfia-review-handoff/latest-chatgpt-review.md`
- Review Handoff Git Branch
- handoff updated

ChatGPT doit, **avant** de répondre à Morris sur le fond :

1. Lire le fichier Git :
   - branche : `sfia/review-handoff`
   - fichier : `sfia-review-handoff/latest-chatgpt-review.md`
2. Vérifier cohérence avec le rapport Cursor : cycle ; branche ; HEAD ; volume ; verdict ; fichiers créés/modifiés ; **contenu exploitable** ; réserves ; décisions Morris.
3. Signaler si handoff incomplet ou incohérent.
4. Ne pas conclure READY si le handoff ne contient qu'une synthèse insuffisante.

Si handoff synthèse-only :

```text
REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
```

---

## 9. Garde-fous

- SFIA v2.5 candidate — pas baseline ✅
- Aucun commit/push PR 3 ✅
- main @ 393a34c inchangé ✅
- sfia-review-handoff/ absent sur branche PR 3 ✅

---

## 10. Décisions Morris requises

1. GO contenu PR 3 + règle completeness ?
2. GO commit / push / PR / merge PR 3 ?

---

## 11. Verdict

**PR 3 REVIEW PACK COMPLETENESS RULE ADDED — READY FOR CHATGPT DETAILED REVIEW**

---

> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
> branche : sfia/review-handoff
> fichier : sfia-review-handoff/latest-chatgpt-review.md
> puis vérifier sa cohérence avec le rapport Cursor, notamment la présence du contenu des fichiers créés/modifiés.
