---
status: candidate
version: v2.5-candidate
type: prompt-instantiation-template
family: SFIA v2.5 cycle execution
updated_after: SFIA v2.5 Cycle 3 — méthode cycles projet (PR #146)
scope: instantiate Cursor execution prompts from ChatGPT
---

# SFIA Cycle Execution — Template d'instanciation v2.5 candidate

**Fichier :** `prompts/templates/sfia-cycle-execution-template.md`  
**Statut :** SFIA v2.5 **candidate** — non validé comme baseline  
**Baseline opérationnelle :** SFIA v2.4 — tant que Morris n'a pas validé explicitement v2.5  
**Références :** `sfia-v2.5-project-cycles-method-candidate.md` ; operating model §18.2 ; routing guide §4.4 ; PGE §7

> **Ce document est un template d'instanciation pour ChatGPT.** Il sert à **générer** des prompts Cursor SFIA adaptés au contexte. **Ce n'est pas un prompt Cursor à envoyer tel quel.**

---

## 1. Rôle du template

| Élément | Description |
|---------|-------------|
| **Pour qui** | ChatGPT — qualification et génération de prompts Cursor |
| **Pas pour** | Envoi direct à Cursor sans instanciation |
| **Objectif** | Produire un **contrat d'exécution** borné : type de cycle + profil SFIA + périmètre + garde-fous |
| **Repo-first** | Git est la source canonique ; le prompt déclare branche, HEAD, périmètre fichiers |
| **Statut** | v2.5 **candidate** — ne valide pas SFIA v2.5 ; ne remplace pas v2.4 |
| **Morris** | Autorité de décision — gates structurants, push, PR, merge, validation de baseline |
| **Cursor** | Exécuteur contrôlé — ne décide pas, n'élargit pas le scope, n'arbitre pas |

**Couverture :** 15 cycles projet cœur + profils Light / Standard / Critical / Capitalization + blocs activables (transverses et spécialisés) — **sans** créer 15 templates séparés.

---

## 2. Protocole d'utilisation par ChatGPT

### 2.0 Repo-informed pre-check ChatGPT

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

### 2.1 Déclenchement

À partir d'une demande Morris (nouveau chat ou conversation en cours) :

0. **Repo-informed pre-check** — §2.0 si trigger actif
1. **Qualifier** la demande — objectif, risque, impact, livrable attendu
2. **Identifier le type de cycle projet** — cartographie §4 (15 cycles)
3. **Identifier le profil SFIA** — Light / Standard / Critical / Capitalization
4. **Justifier le profil** — obligatoire si Critical ; recommandé sinon
5. **Activer les blocs pertinents** — §6 selon type, risque, transverses
6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite
7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
8. **Décider review pack** — §7 : niveau none / light / full
9. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite

### 2.2 Nouveau chat et sources projet

| Mode | Usage |
|------|-------|
| **Nouveau chat** | **Recommandé** — les instructions projet ChatGPT (§10) déclenchent la règle Repo-informed ; évite la dépendance à la mémoire conversationnelle |
| **Source projet ChatGPT** | Aide d'instanciation rapide — **ne remplace jamais** Git `main` |
| **Hiérarchie des sources** | En cas d'écart : **Git `main` > sources projet ChatGPT** |
| **Repo-informed** | ChatGPT consulte Git avant génération du prompt si Git est accessible — §2.0 |

### 2.3 Anti-patterns ChatGPT

- Envoyer ce template tel quel à Cursor
- Omettre type de cycle ou profil SFIA
- Critical sans justification
- Prompt sans périmètre / hors périmètre
- Oublier review pack sur cycle documentaire
- Présenter v2.5 comme baseline validée

---

## 3. Fiche d'instanciation ChatGPT

Remplir **avant** de générer le prompt Cursor :

```text
Objectif du cycle :
Type de cycle projet :          [1–15 — voir §4]
Profil SFIA :                   [Light / Standard / Critical / Capitalization]
Profondeur si Capitalization :  [Light / Standard / Critical selon portée]
Justification du profil :       [obligatoire si Critical]
Typologie v2.4 si utile :       [INC / EVOL / RUN / CAPA / DOC — optionnel]

Branche attendue :
Base / HEAD attendu :
Working tree attendu :          [propre / fichiers non trackés listés]

Documents à lire :
Fichiers à créer :
Fichiers à modifier :
Fichiers interdits / protégés :

Périmètre autorisé :
Hors périmètre :

Blocs activés :                 [liste §6]
Blocs désactivés :

Gates Morris :                  [liste explicite ou « aucun sauf merge si demandé »]
Review pack :                   [none / light / full — voir §7]

Stop conditions spécifiques :
Rapport Cursor attendu :        [Light / Standard / Critical / Capitalization — §9]
Verdict attendu :               [ex. READY FOR PR READINESS / READY FOR COMMIT / STOP …]
```

---

## 4. Règles de qualification cycle / profil

### 4.1 Les 15 cycles projet SFIA v2.5

| # | Cycle projet | Catégorie |
|---|--------------|-----------|
| 1 | Cadrage | A — quasi systématique |
| 2 | Conception fonctionnelle | A |
| 3 | Architecture fonctionnelle | B — activable |
| 4 | UX/UI | B |
| 5 | Backlog / user stories | A |
| 6 | Architecture technique | B |
| 7 | Intégration / DevOps | B |
| 8 | Delivery / implémentation | A |
| 9 | QA / validation | A |
| 10 | Sécurité / RSSI | B |
| 11 | Déploiement / release | B |
| 12 | Observabilité / RUN readiness | B |
| 13 | PR readiness | A |
| 14 | Post-merge | A |
| 15 | Capitalisation / REX | A — proportionné |

Référence détaillée : `sfia-v2.5-project-cycles-method-candidate.md` §3–§4.

### 4.2 Profils SFIA

| Profil | Rôle |
|--------|------|
| **Light** | Faible risque, faible impact, périmètre étroit |
| **Standard** | Cycle courant — **défaut** si doute sans risque structurant |
| **Critical** | Risque structurant — **jamais implicite** |
| **Capitalization** | Intention de capitaliser — **pas** risque Critical automatique |

### 4.3 Règles de qualification

| Règle | Application |
|-------|-------------|
| Critical jamais implicite | Justification par facteur(s) de criticité obligatoire |
| Critical toujours justifié | Champ `Justification du profil` rempli |
| Standard par défaut | Si doute sans risque structurant — pas Light par confort |
| Light proportionné | Mono-fichier / ≤3 fichiers / pas doctrine / pas chemin protégé |
| Capitalization ≠ CAPA | Profil SFIA ≠ type cycle v2.4 ; Capitalization ≠ Critical auto |
| Capitalization avec profondeur | Capitalization exprime l'intention de capitaliser ; la profondeur de contrôle reste Light / Standard / Critical selon la portée et le risque |
| Une readiness | **Une seule** readiness par cycle (operating §18.2.6) |

### 4.4 Matrice d'aide — demande → cycle / profil

| Type de demande Morris | Cycle probable | Profil probable |
|------------------------|----------------|-----------------|
| Corriger un doc mono-fichier | Cadrage ou delivery doc | Light |
| Préparer une PR | PR readiness | Standard (Light si ≤3 fichiers doc-only) |
| Nouveau parcours UI | UX/UI | Standard ou Critical |
| Arbitrage architecture | Architecture fonctionnelle ou technique | Critical |
| Clôture après merge | Post-merge | Light ou Standard |
| REX / capitaliser une leçon | Capitalisation / REX | Capitalization + profondeur selon portée |
| Implémentation feature bornée | Delivery | Standard |
| Go-live / sécurité / prod | QA, RSSI, release | Critical |

---

## 5. Structure du prompt Cursor généré

ChatGPT produit un prompt Cursor en **remplissant** ce squelette (texte prêt à coller) :

```text
Objectif :
[Un résultat utile identifiable]

Contexte :
[Cycle, intention Morris, références]

Type de cycle projet :
[Cycle 1–15 — libellé exact]

Profil SFIA :
[Light / Standard / Critical / Capitalization]

Justification du profil :
[Obligatoire si Critical — facteurs de criticité]

Typologie v2.4 si applicable :
[INC / EVOL / RUN / CAPA / DOC — ou N/A]

---

Local Git Truth Check (obligatoire en tête d'exécution) :
- workspace :
- branche active attendue :
- HEAD attendu :
- origin/main :
- git status --short attendu :
- fichiers staged : aucun sauf indication contraire
STOP si anomalie.

---

Sources à lire :
[Liste explicite — selon profil et type de cycle]

Périmètre autorisé :
[Actions et chemins autorisés]

Hors périmètre :
[Exclusions explicites]

Fichiers à créer :
[Liste ou « aucun »]

Fichiers à modifier :
[Liste ou « aucun »]

Fichiers interdits :
[Prompt catalog, .sfia/, automation, chemins protégés, etc.]

Garde-fous :
- Ne pas push / PR / merge sans GO Morris
- Ne pas élargir le périmètre
- Ne pas valider SFIA v2.5 comme baseline
- Ne pas relancer SFIA 3.0
- Git = source de vérité
- [Garde-fous spécifiques au cycle]

Stop conditions :
[Liste — inclure §8 + spécifiques au cycle]

---

[BLOCS ACTIVABLES — injecter depuis §6]

---

Étapes d'exécution :
1. Local Git Truth Check
2. Réinitialiser `.tmp-sfia-review/chatgpt-review.md` si review pack obligatoire (§7.1) — créer le dossier si absent ; **écraser entièrement** le fichier existant ; aucun append historique
3. Lire les sources listées
4. [Étapes spécifiques au cycle]
5. Validations (git diff, lints, tests si applicable)
6. Review pack si obligatoire (§7) — contenu **mono-cycle uniquement**
7. Rapport final (§9)
8. Ouvrir chatgpt-review.md si review pack (best effort)

Validations attendues :
- git status --short
- git diff --stat
- [Contrôles spécifiques]

Review pack :
[none / light / full — si light ou full, référencer §7 — réinitialiser le fichier en début de cycle (étape 2) avant toute écriture ; mono-cycle uniquement ; anti-stub final obligatoire]

Rapport final attendu :
[Format selon profil §9 — inclure date et heure du rapport]

Verdict attendu :
[Ex. READY FOR PR READINESS / READY FOR COMMIT / STOP — MORRIS DECISION REQUIRED]

Actions interdites sans GO Morris :
- git push
- gh pr create
- merge
- git push origin --delete (suppression branche)
```

**Complément v2.4 (PGE §7.1)** — inclure si cycle post-v2.4 :

```text
Niveau QA attendu :
Gate Morris requis :
Statut attendu : READY FOR REVIEW / READY WITH RESERVES / NOT READY
```

Si élément structurant manquant → Cursor répond : `INCOMPLETE PROMPT — missing required input.`

---

## 6. Blocs activables

Activer uniquement les blocs pertinents. Injecter le texte du bloc dans le prompt Cursor généré.

### 6.1 FinOps

| Élément | Contenu |
|---------|---------|
| **Activer si** | Cloud, services managés, consommation variable, coût significatif |
| **Cycles** | Cadrage, architecture technique, DevOps, delivery, observabilité |
| **Consignes** | Estimer coût ; hypothèses consommation ; leviers optimisation ; documenter réserves |
| **Livrables** | Estimation, hypothèses, réserves coût/performance |
| **Gates Morris** | GO budget ou arbitrage coût/performance |
| **Stop** | Impact financier structurant sans gate |

### 6.2 GreenOps

| Élément | Contenu |
|---------|---------|
| **Activer si** | Exigence sobriété, politique entreprise, volume important |
| **Cycles** | Cadrage, architecture technique, delivery, observabilité |
| **Consignes** | Hypothèses sobriété ; leviers réduction ; arbitrages performance/sobriété |
| **Livrables** | Hypothèses, leviers, arbitrages documentés |
| **Gates Morris** | GO arbitrage sobriété/performance si structurant |
| **Stop** | Engagement contractuel sans gate |

### 6.3 RGPD / conformité

| Élément | Contenu |
|---------|---------|
| **Activer si** | Données personnelles, sensibles, conservation, transfert |
| **Cycles** | Cadrage, conception, RSSI, QA, delivery |
| **Consignes** | Identifier données concernées ; points conformité ; risques ; actions/réserves |
| **Livrables** | Points conformité, risques, réserves juridiques si besoin |
| **Gates Morris** | GO arbitrage conformité ou acceptation réserve |
| **Stop** | Données sensibles ou risque légal sans gate |

### 6.4 Accessibilité

| Élément | Contenu |
|---------|---------|
| **Activer si** | UI impactée, exigence légale, produit public |
| **Cycles** | UX/UI, conception, QA |
| **Consignes** | Critères accessibilité ; écarts ; recommandations ; preuves QA |
| **Livrables** | Critères, écarts, recommandations |
| **Gates Morris** | GO niveau accessibilité cible si arbitrage |
| **Stop** | Obligation réglementaire forte sans gate |

### 6.5 Performance

| Élément | Contenu |
|---------|---------|
| **Activer si** | SLA, charge, latence, go-live, prod critique |
| **Cycles** | Architecture technique, delivery, QA, observabilité |
| **Consignes** | Hypothèses charge ; tests ; métriques ; réserves |
| **Livrables** | Hypothèses, tests, métriques, réserves |
| **Gates Morris** | GO arbitrage performance/coût/délai |
| **Stop** | SLA structurant sans gate |

### 6.6 UX/UI + Figma — Figma visual contract / Figma-to-code

> **Candidate v2.5 — capitalisation PR 3.** Standard transverse pour cycles UX/UI et delivery UI avec fidélité Figma attendue. Ancrage REX : Chantiers360 R-UX-01 — verdict `NO DELIVERY REQUIRED` révoqué sans capture runtime.

| Élément | Contenu |
|---------|---------|
| **Activer si** | Cycle UX/UI ou delivery avec composant UI ; fidélité visuelle attendue ; gap review Figma-to-code ; PR readiness avec conformité visuelle ; correction UI après écart runtime |
| **Qualification source design** | Choisir **un** des 4 cas ci-dessous |

| Cas | Comportement |
|-----|--------------|
| **Figma disponible et validé** | Référence Figma = source d'exécution ; GO source Figma si référence d'exécution |
| **Figma à produire** | Cycle design d'abord ; pas d'implémentation pixel-perfect avant validation |
| **Figma absent + fidélité visuelle attendue** | **Stop** ou GO arbitrage Morris — pas d'interprétation Cursor |
| **Figma disponible non validé** | Exploration OK ; **pas** source d'exécution tant que non validé |

#### A. Cas d'usage

Le standard s'applique **au minimum** dans les cas suivants :

- cycle UX/UI avec source Figma validée ;
- delivery UI avec fidélité visuelle attendue ;
- gap review Figma-to-code ;
- PR readiness impliquant conformité visuelle ;
- correction UI après écart runtime.

#### B. Gate simple Review UX/Figma

Cursor applique ce gate avant tout verdict visuel fort :

| Niveau | Question |
|--------|----------|
| **Structure** | Les bons éléments existent-ils ? |
| **Fonctionnel** | Le comportement est-il conforme ? |
| **Visuel** | L'écran ressemble-t-il réellement à la frame ? |
| **Runtime** | A-t-on une capture navigateur ? |
| **Verdict** | Peut-on conclure sans capture ? |

**Règle dure :** si aucune capture runtime n'est comparée à la frame Figma, le verdict **ne peut pas** être `NO DELIVERY REQUIRED`. Le maximum autorisé est :

```text
REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED
```

#### C. Règles Cursor obligatoires

Cursor doit :

- utiliser **MCP Figma** si disponible ;
- **confirmer explicitement** les frames lues via MCP ;
- **lister** les dimensions / layout observés ;
- produire une **comparaison visuelle runtime vs Figma** ;
- **ne pas** conclure « aligné » uniquement parce que les composants existent ;
- **ne pas** conclure `READY` si un élément visible Figma manque ;
- appliquer le verdict maximum `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED` si capture runtime ou Figma absente.

#### D. Design extraction contract — avant code

**Avant toute modification code** Figma-to-code, Cursor produit le tableau :

**Contrat visuel Figma extrait**

| Élément | Observation Figma | Valeur / détail | Incertitude | Impact delivery |
|---------|---------------------|-----------------|:-----------:|-----------------|
| dimensions principales | | | | |
| couleurs | | | | |
| spacing | | | | |
| colonnes | | | | |
| styles badges | | | | |
| styles statuts | | | | |
| style CTA | | | | |
| structure état vide | | | | |

**Règle :** ne coder **qu'après** production de ce contrat. Si le contrat ne peut pas être produit :

```text
FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED
```

#### E. Contenu minimal du contrat visuel

Le contrat visuel inclut **au minimum** :

- lien Figma / fileKey si disponible ;
- page / frame / node-id ;
- statut validation Figma : validé / non validé / à produire ;
- dimensions de frame ou viewport cible ;
- structure principale ; grille / colonnes / layout ;
- spacing / paddings / gaps clés ;
- typographies observables ;
- couleurs / tokens / états visuels ;
- composants visibles ; badges / statuts / CTA ;
- états nominal / vide / erreur / loading si disponibles ;
- écarts déjà connus ; hypothèses si données manquantes.

#### F. Règle MCP Figma

MCP Figma peut servir à lire la **structure** et les **propriétés design**, mais **ne suffit pas** à conclure une fidélité visuelle sans comparaison runtime.

Cursor liste dans le rapport / review pack :

- frames lues ; node-id utilisés ;
- dimensions / layout observés ;
- limites de lecture MCP ;
- éléments non vérifiables depuis MCP.

#### G. Runtime screenshot obligatoire

Pour conclure une **conformité visuelle**, Cursor produit ou demande une **capture runtime**.

Sans capture runtime, le verdict maximum est :

```text
REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED
```

#### H. Comparaison Figma vs Runtime — après code ou gap review

Après codage ou gap review, Cursor produit le tableau :

**Figma vs Runtime**

| Élément | Attendu Figma | Observé runtime | Statut | Preuve / réserve |
|---------|---------------|-----------------|--------|------------------|

Statuts autorisés : **Conforme** ; **Partiellement conforme** ; **Non conforme** ; **Capture/runtime requise**.

**Règles :**

- ne pas conclure `READY` si un élément visible Figma manque ;
- ne pas conclure « aligné » sans comparaison capture Figma vs capture runtime ;
- ne pas conclure `NO DELIVERY REQUIRED` si la comparaison n'a pas été faite.

#### I. Verdicts autorisés

| Verdict | Usage |
|---------|-------|
| `FIGMA CONTRACT READY — READY FOR DELIVERY` | Contrat extrait complet — code autorisé |
| `FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED` | Contrat impossible ou incomplet |
| `FIGMA TO RUNTIME ALIGNED — READY` | Comparaison faite — conformité visuelle |
| `FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED` | Écarts visuels — delivery requis |
| `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED` | Capture runtime ou comparaison absente |
| `NO DELIVERY REQUIRED` | **Uniquement si** : source Figma validée ; frames lues explicitement ; contrat visuel produit ; runtime screenshot disponible ; comparaison Figma vs Runtime effectuée ; aucun écart visible bloquant |

#### J. Règle dure à capitaliser

> Pour un cycle Figma-to-code, **MCP Figma ne suffit pas**. Il faut imposer une **extraction visuelle contractuelle avant modification code**, puis une **revue runtime obligatoire après modification**. Aucun verdict « aligné » sans comparaison capture Figma vs capture runtime.

#### K. Stop conditions (Figma visual contract)

Cursor stoppe ou demande décision Morris si :

- fidélité visuelle attendue mais Figma absent ou non validé ;
- frame Figma introuvable ;
- MCP Figma indisponible alors que le prompt le rend obligatoire ;
- capture runtime impossible mais verdict fort demandé ;
- écart visuel majeur détecté sans GO arbitrage ;
- ambiguïté entre design exploration et source d'exécution ;
- demande de conclure pixel-perfect sans preuve runtime ;
- contrat visuel Figma non produit avant code ;
- comparaison Figma vs Runtime absente après code ou gap review.

| **Livrables** | Référence Figma ; contrat visuel extrait ; comparaison Figma vs Runtime ; captures ; specs UI ; écarts design/code ; handoff delivery |
| **Stop** | Fidélité visuelle requise sans source design validée ; contrat absent ; comparaison absente ; verdict fort sans capture |

### 6.7 Sécurité / RSSI

| Élément | Contenu |
|---------|---------|
| **Activer si** | Données sensibles, surface exposée, conformité sécurité |
| **Cycles** | Architecture technique, delivery, QA |
| **Consignes** | Menaces ; durcissement ; conformité ; jamais implicite |
| **Gates Morris** | GO arbitrage sécurité |
| **Stop** | Surface sensible sans gate |

### 6.8 DevOps / intégration

| Élément | Contenu |
|---------|---------|
| **Activer si** | Pipeline, envs, infra, CI/CD modifié |
| **Cycles** | Intégration/DevOps, delivery |
| **Consignes** | Config CI/CD ; runbooks ; preuves exécution ; pas de secrets |
| **Gates Morris** | GO déploiement infra si impact prod |
| **Stop** | Modification prod ou secrets sans gate |

### 6.9 Déploiement / release

| Élément | Contenu |
|---------|---------|
| **Activer si** | Mise en production, fenêtre release |
| **Cycles** | Déploiement/release, post-QA |
| **Consignes** | Release notes ; rollback plan ; preuve déploiement |
| **Gates Morris** | GO release |
| **Stop** | Release sans QA PASS ou réserve bloquante |

### 6.10 Observabilité / RUN readiness

| Élément | Contenu |
|---------|---------|
| **Activer si** | Exploitation, prod, SLO, alerting |
| **Cycles** | Observabilité, delivery prod |
| **Consignes** | Logs, métriques, alerting, runbooks |
| **Gates Morris** | GO RUN readiness si prod critique |
| **Stop** | Prod critique sans observabilité minimale |

### 6.11 PR readiness

| Élément | Contenu |
|---------|---------|
| **Activer si** | Avant ouverture PR |
| **Consignes** | `git diff --stat` ; `git diff --name-status` ; body PR ; fichiers interdits absents ; aucun staged inattendu ; branche ahead |
| **Livrables** | Rapport readiness ; draft PR body si demandé |
| **Gates Morris** | GO PR si demandé |
| **Stop** | Fichier interdit dans diff ; staged inattendu |

### 6.12 Post-merge — check intégration + cleanup branche PR

> **Candidate v2.5 — capitalisation PR 4.** Post-merge check = vérification intégration **+** cleanup branche PR si toutes les conditions de sécurité sont remplies. Le cleanup devient **automatique** dans le cadre du GO post-merge Morris, sauf stop condition.

| Élément | Contenu |
|---------|---------|
| **Activer si** | Après merge PR — post-merge check explicitement demandé par Morris |
| **Consignes** | `git checkout main` ; `git pull --ff-only` ; vérifier merge commit + commit PR sur main ; log ; réserves ; **cleanup branche PR si conditions OK** (§6.12.1) |
| **Livrables** | Rapport post-merge ; réserves documentées ; rapport cleanup branche (done / skipped / blocked) |
| **Gates Morris** | GO post-merge inclut cleanup branche **si conditions OK** ; escalade si réserve bloquante |
| **Stop** | Main non aligné ; réserve bloquante non traitée ; cleanup ambigu (§6.12.1) |

#### 6.12.1 Post-merge branch cleanup (intégré)

Lorsqu'un **post-merge check** est demandé par Morris après une PR mergée, le nettoyage de la branche associée fait partie du **même cycle post-merge** — pas de second GO Morris, sous conditions.

**Conditions obligatoires (toutes) :**

| # | Condition |
|---|-----------|
| 1 | PR confirmée **merged** |
| 2 | `main` local et `origin/main` alignés |
| 3 | Merge commit présent sur `main` |
| 4 | Commit de la PR présent sur `main` |
| 5 | Working tree tracked propre |
| 6 | Branche à supprimer = branche de la PR mergée (identifiée explicitement) |
| 7 | Branche locale et/ou distante non protégée |
| 8 | Aucune divergence non mergée détectée |
| 9 | Branche **≠** `main`, **≠** `sfia/review-handoff`, **≠** branche spéciale/handoff |

**Actions autorisées automatiquement (post-merge) :**

- `git branch -d <branche-pr>` si merge confirmé ;
- `git push origin --delete <branche-pr>` si branche distante présente ;
- `git fetch origin --prune` ;
- rapport final incluant post-merge **+** cleanup.

**Actions interdites sans GO Morris distinct :**

- supprimer `main` ;
- supprimer `sfia/review-handoff` ;
- supprimer une branche non liée à la PR ;
- `git branch -D` si `git branch -d` refuse ;
- supprimer branche avec commits non mergés ;
- supprimer branche protégée ou ambiguë.

**Stop conditions cleanup :**

- PR non mergée ; main non aligné ; merge commit absent ; branche PR ambiguë ; branche non mergée ; `git branch -d` refuse ; fichiers tracked modifiés ; doute sur la branche cible.

**Séquence Cursor (post-merge + cleanup) :**

```text
1. Local Git Truth Check sur main
2. Vérifier merge commit + commit PR sur main
3. Rapport post-merge (intégration, réserves, suite)
4. Si conditions §6.12.1 OK → git branch -d <branche-pr>
5. Si branche distante présente → git push origin --delete <branche-pr>
6. fetch/prune + rapport cleanup (done / skipped / blocked)
```

### 6.13 Capitalisation / REX

| Élément | Contenu |
|---------|---------|
| **Activer si** | Intention capitaliser apprentissage, REX, promotion doc/méthode |
| **Consignes** | Distinguer **observation** / **recommandation** / **décision proposée** / **décision validée** |
| **Livrables** | REX ; proposition doc ; traçabilité |
| **Gates Morris** | GO capitalisation ou promotion méthode |
| **Stop** | Promotion v2.5 ou doctrine sans gate |

### 6.14 Git granularity / commit strategy

> **Candidate v2.5 — capitalisation PR 4.** Réduire la fatigue de gouvernance — regrouper les opérations Git quand le périmètre est stable.

| Règle | Application |
|-------|-------------|
| **Gates Morris** | Fréquents sur **arbitrages structurants** — pas sur chaque micro-alignement |
| **Commits / PR** | Regroupés par **livrable cohérent** quand périmètre stable |
| **Éviter** | Une PR par micro-ajustement si risque faible, périmètre stable, validation locale suffisante |
| **Micro-commit autorisé** | Correction isolée ; risque régression ; traçabilité requise ; séparation fonctionnelle claire |
| **PR séparée obligatoire** | Changement de scope ; risque accru ; fichiers protégés ; décision structurante ; dette potentielle ; changement baseline |
| **Post-merge checks simples** | Ne génèrent **pas** de nouvelle PR sauf anomalie détectée |

**ChatGPT** recommande le regroupement ; **Cursor** ne multiplie pas commits/PR sans contrat explicite ; **Morris** tranche scope et gates structurants.

### 6.15 Post-MVP stop rules

> **Candidate v2.5 — capitalisation PR 4.** Un cycle post-MVP peut s'arrêter sans traiter toutes les réserves si conditions remplies et Morris valide.

**Conditions d'arrêt post-MVP (candidate) :**

| # | Condition |
|---|-----------|
| 1 | Réserves **structurantes ciblées** traitées |
| 2 | Réserves restantes **explicitement** acceptées, reportées ou classées non bloquantes |
| 3 | Options d'évolution produit (ex. Option B/C) **non lancées** sans GO Morris distinct |
| 4 | Matière REX **suffisante** pour capitalisation |
| 5 | Risques restants **documentés** |
| 6 | **Morris valide** l'arrêt |

**Exemple Chantiers360 post-MVP (REX validé) :**

| Élément | Statut |
|---------|--------|
| R-QA-04 | CLOSED |
| R-UX-01 | CLOSED |
| R-QA-03 / R-QA-05 | Ouvertes — **acceptées** / reportées |
| Option B / C | Non lancées |
| Arrêt | Décision Morris — capitalisation méthode |

> **Capitalization ≠ poursuivre toutes les réserves.** Le profil Capitalization qualifie l'intention de capitaliser — pas l'obligation de clore chaque réserve ouverte.

---

## 7. Review pack proportionné

### 7.1 Règle structurante — artefact temporaire mono-cycle

Le review pack `.tmp-sfia-review/chatgpt-review.md` est un **artefact temporaire mono-cycle** de revue — **pas** un miroir intégral de tous les documents consultés lorsque Git est accessible à ChatGPT.

Tout prompt Cursor impliquant **consultation**, **modification** ou **création** documentaire structurante doit déclarer un niveau review pack — **none**, **light** ou **full** (§7.3).

> **none** : pas de fichier `chatgpt-review.md` requis — rapport chat ou rapport Cursor court suffit.  
> **light** / **full** : fichier obligatoire, complété avant le rapport final — jamais un stub final (§7.5).

**Au démarrage de chaque cycle Cursor (avant toute écriture du review pack) :**

1. Créer le dossier `.tmp-sfia-review/` si absent.
2. Si `.tmp-sfia-review/chatgpt-review.md` existe, **l'écraser entièrement**.
3. **Ne pas** conserver les sections des cycles précédents.
4. **Ne pas** append l'historique — sauf instruction explicite Morris.
5. Le fichier doit contenir **uniquement** la revue du cycle courant.
6. Inclure la **date et l'heure** du rapport ou de la section de revue.
7. Le fichier reste **hors commit** par défaut.
8. `.tmp-sfia-review/` ne doit **jamais** être staged ni commit sans GO Morris explicite.

**Après validation ChatGPT / Morris :** le fichier peut être **supprimé ou purgé** si son volume dépasse le seuil défini (§7.6) ou s'il n'est plus utile au cycle suivant. Tout apprentissage durable doit être capitalisé dans un **document versionné dédié**, jamais conservé dans `.tmp-sfia-review/`.

Formulation attendue :

> Après validation ChatGPT/Morris, `.tmp-sfia-review/chatgpt-review.md` peut être supprimé ou purgé si son volume dépasse le seuil défini ou s'il n'est plus utile au cycle suivant. Les apprentissages durables doivent être capitalisés dans un document versionné dédié, jamais conservés dans `.tmp-sfia-review/`.

### 7.2 Nouvelle méthode de contenu — proportionné vs traçable

**Objectif :** le review pack devient un artefact temporaire de revue, proportionné, centré sur :

- ce que Cursor a **réellement créé ou modifié** ;
- les **décisions Morris** ;
- les **réserves** ;
- les **preuves non visibles dans Git** ;
- les **écarts** ;
- le **verdict** ;
- le **Git Review Index** (§7.4).

**Documents consultés (accessibles dans Git) :**

| Règle | Application |
|-------|-------------|
| Lister avec rôle, sections utilisées, références précises | Oui |
| Recopier le contenu complet par défaut | **Non** — Git reste source de vérité |
| Extraits courts | Uniquement s'ils justifient une décision, une réserve ou un arbitrage |

**Fichiers créés ou modifiés par Cursor :**

| Cas | Contenu attendu dans le review pack |
|-----|--------------------------------------|
| Fichier **créé** | Contenu complet obligatoire — sauf si le fichier dépasse un seuil de taille défini (§7.6) |
| Fichier **modifié** | Sections complètes modifiées obligatoires **ou** diff utile complet |
| Contenu complet non inclus (taille) | Chemin, sections concernées, raison, extrait/diff suffisant pour revue |

#### 7.2.1 Contenu obligatoire des fichiers créés/modifiés

> **Règle générale** — s'applique à **tout** review pack **light** ou **full** impliquant création ou modification de fichiers.

Pour toute génération de `.tmp-sfia-review/chatgpt-review.md`, dès qu'un cycle **crée** ou **modifie** des fichiers, Cursor doit inclure le **contenu exploitable** des fichiers créés/modifiés — pas uniquement une synthèse.

| Exigence | Application |
|----------|-------------|
| **Fichier créé** | Contenu complet obligatoire — sauf seuil explicite (§7.6) |
| **Fichier modifié** | Section complète modifiée **ou** diff utile complet obligatoire |
| **Fichier long** | Sections exactes modifiées + diff utile + justification de non-inclusion complète |
| **Fichier volumineux généré** | Chemin, taille, rôle, extrait utile, justification |
| **Documents consultés non modifiés** | Références, rôle, sections consultées, extraits courts **seulement** |
| **Fichiers créés/modifiés** | **Jamais** uniquement une synthèse |

Le review pack final **ne peut pas** être considéré complet si le contenu des fichiers créés/modifiés est absent.

Cursor doit signaler explicitement toute impossibilité de fournir ce contenu (volume, chemin, sections, extrait/diff de repli).

#### 7.2.2 Règle anti-faux-complet / anti-synthèse-only

Si le review pack ne contient **que** :

- une liste de fichiers ;
- une synthèse des changements ;
- un diff stat ;
- ou une checklist,

alors Cursor doit marquer dans le review pack et le rapport final :

```text
REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING
```

Le review pack **ne peut pas** être considéré complet dans ce cas.

### 7.3 Niveaux de review pack

#### none

| Champ | Contenu |
|-------|---------|
| **Usage** | Checks Git simples ; post-merge simple ; cleanup branche ; micro-cycle sans document consulté/modifié/créé ; vérification technique sans décision structurante |
| **Contenu** | Pas de fichier `chatgpt-review.md` requis — rapport chat ou rapport Cursor court suffit |
| **Interdit si** | Création/modification documentaire structurante ; consultation documentaire comme base de décision ; PR readiness ; capitalisation ; modification méthode/template/règle |

#### light

| Champ | Contenu |
|-------|---------|
| **Usage** | Cycle standard borné ; Git accessible ; peu de fichiers ; diff suffisant |
| **Contenu attendu** | Date/heure ; objectif ; Git Review Index (§7.4) ; fichiers consultés avec rôle et sections **sans copie intégrale** ; fichiers créés/modifiés avec contenu complet ou sections/diff utiles ; validations ; réserves ; décisions Morris ; verdict |

#### full

| Champ | Contenu |
|-------|---------|
| **Usage** | Capitalisation ; modification méthode/template/règle ; décision structurante ; sources non accessibles Git ; auditabilité forte |
| **Contenu attendu** | Date/heure ; objectif ; Local Git Truth Check ; Git Review Index (§7.4) ; sources consultées avec rôle, sections et extraits courts utiles ; contenu complet des fichiers créés ; sections complètes modifiées ou diff utile complet pour fichiers modifiés ; proposition d'instruction projet ChatGPT si concernée ; garde-fous ; réserves ; décisions Morris requises ; verdict |

### 7.4 Git Review Index

Bloc modèle à inclure dans le review pack **light** et **full** :

```text
Git Review Index
- base branch :
- HEAD avant :
- HEAD après :
- fichiers modifiés :
- fichiers créés :
- commits créés :
- tests / validations :
- diff stat :
- diff name-status :
- décisions Morris requises :
- review pack : none / light / full
- réserves :
```

### 7.5 Règle anti-stub final

Le review pack **ne doit jamais** rester un stub final si un niveau **light** ou **full** est requis.

| Moment | Comportement |
|--------|--------------|
| **Démarrage cycle** | Stub minimal ou fichier vide acceptable **uniquement** après réinitialisation (§7.1) |
| **Avant rapport final Cursor** | Review pack complété selon le niveau demandé |

Le rapport final Cursor doit confirmer :

- review pack réinitialisé au début : oui / non ;
- review pack complété avant rapport final : oui / non ;
- niveau appliqué : none / light / full ;
- absence de stub final : confirmé / non ;
- **Review pack content coverage** (§7.2.1) :
  - created files full content : yes / no / not applicable ;
  - modified sections complete : yes / no / not applicable ;
  - useful diff included : yes / no / not applicable ;
  - synthesis only : yes / no ;
  - review pack verdict : complete / incomplete.

Si `synthesis only = yes`, le verdict Cursor **ne peut pas** être `READY` (ou variante READY FOR …).

### 7.6 Règle de taille / suppression / purge

Le review pack reste un artefact temporaire **hors commit**.

| Seuil indicatif | Niveau | Action si dépassement |
|-----------------|--------|------------------------|
| ~500 lignes | light | Signaler le dépassement ; éviter copies intégrales de documents Git-accessibles ; privilégier références, sections, diff utile, Git Review Index |
| ~1200 lignes | full | Idem ; proposer suppression ou purge après validation Morris/ChatGPT |

Cursor doit :

- signaler le dépassement de seuil ;
- éviter d'ajouter des copies intégrales de documents consultés accessibles dans Git ;
- privilégier références, sections, diff utile, Git Review Index ;
- proposer à Morris/ChatGPT une suppression ou purge du fichier après validation du cycle ;
- **ne jamais** committer le review pack sans GO Morris explicite.

### 7.7 Matrice d'obligation par niveau

| Situation | Niveau recommandé |
|-----------|-------------------|
| Consultation documentaire comme base de décision | **light** minimum |
| Modification documentaire | **light** minimum + sections modifiées + diff |
| Création documentaire | **light** minimum + contenu complet créé |
| Capitalisation / modification méthode / template / règle | **full** |
| Commande Git seule sans lecture doc | **none** (sauf demande Morris) |
| Cycle Light trivial sans document consulté / créé / modifié | **none** (sauf demande Morris) |
| PR readiness / Critical structurant | **light** minimum — **full** si auditabilité forte |
| Sources non accessibles Git | **full** |

### 7.8 Ouverture obligatoire dans Cursor

À la fin de l'exécution concernée (si niveau light ou full) :

1. Ouvrir `.tmp-sfia-review/chatgpt-review.md` dans Cursor
2. Nouvel onglet si possible ; onglet actif si possible
3. Confirmer dans le rapport Cursor — ou indiquer :  
   `best effort — ouverture demandée via CLI, onglet actif non garanti`

### 7.9 Interdictions

- **Ne jamais** `git add` / commit / stage `.tmp-sfia-review/` sauf décision explicite Morris
- Le review pack est **hors commit** par défaut
- **Ne jamais** append un nouveau cycle à un `chatgpt-review.md` existant **sans l'écraser** — sauf instruction explicite Morris
- **Ne jamais** laisser le review pack **mélanger plusieurs cycles** sans instruction explicite Morris
- **Ne jamais** utiliser `.tmp-sfia-review/` comme journal cumulatif ou doctrine permanente
- **Ne jamais** recopier intégralement des documents consultés accessibles dans Git — sauf extrait court justifiant une décision
- **Ne jamais** laisser un stub final si light ou full est requis (§7.5)

### 7.10 Review Handoff Git Branch optionnel

> **Mode optionnel** — activable uniquement après **GO Morris** ou règle explicitement validée. Ne remplace pas `.tmp-sfia-review/chatgpt-review.md` ni Git `main`.

#### Objectif

Permettre à ChatGPT de **lire directement** le dernier rapport Cursor via Git, **sans extension** ni copier-coller.

#### Principe

1. Cursor produit d'abord `.tmp-sfia-review/chatgpt-review.md` **localement** (artefact temporaire mono-cycle — §7.1).
2. Si le mode est **activé par GO Morris**, Cursor copie ensuite ce contenu vers :

   `sfia-review-handoff/latest-chatgpt-review.md`

   sur la branche dédiée :

   `sfia/review-handoff`

> **Important :** ne **pas** versionner `.tmp-sfia-review/chatgpt-review.md` tel quel.  
> `.tmp-sfia-review/chatgpt-review.md` = artefact local temporaire Cursor.  
> `sfia-review-handoff/latest-chatgpt-review.md` = copie Git de handoff, destinée à être lue par ChatGPT.

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
- usage activable uniquement après GO Morris ou règle explicitement validée ;
- **push autorisé** uniquement vers `sfia/review-handoff` et uniquement pour `sfia-review-handoff/latest-chatgpt-review.md` ;
- toute autre action Git distante reste **interdite** sans GO explicite.

#### Règle pérenne — commit + push + vérification remote obligatoire (PR 4 candidate)

> Quand le mode Review Handoff Git Branch est **activé**, le handoff n'est **pas complet** sans publication remote.

| Étape | Obligation |
|-------|------------|
| 1. Review pack local | `.tmp-sfia-review/chatgpt-review.md` complété (niveau light/full) |
| 2. Copie handoff | Overwrite `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
| 3. Commit | Commit local sur `sfia/review-handoff` — **fichier handoff uniquement** |
| 4. Push | **`git push origin sfia/review-handoff`** — autorisé dans le cycle même si push branche projet interdit |
| 5. Vérification remote | `git ls-remote origin refs/heads/sfia/review-handoff` — SHA remote = SHA local attendu |

**Push strictement limité à :**

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- aucun autre fichier ; aucune PR ; aucun merge ; aucun impact `main`

**Verdicts handoff :**

| Situation | Verdict obligatoire |
|-----------|---------------------|
| Commit local + push OK + remote vérifié | `HANDOFF UPDATED` (ou variante explicite push + remote verified) |
| Commit local **sans** push | **`HANDOFF LOCAL ONLY — PUSH MISSING`** — **pas** `HANDOFF UPDATED` |
| Rapport demande lecture handoff Git mais remote non à jour | **Cycle incomplet** — stop condition |

**Rapport final Cursor — champs obligatoires si handoff activé :**

- handoff local commit : SHA / none
- handoff remote commit before : SHA / none
- handoff remote commit after : SHA / none
- push handoff : done / not done
- remote verification : yes / no

**Stop condition :** si le rapport Cursor demande à ChatGPT de lire le handoff Git, mais que le handoff n'a **pas** été pushé sur `origin/sfia/review-handoff`, le cycle est **incomplet**.

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

#### Séquence Cursor (si mode activé)

```text
1. Compléter .tmp-sfia-review/chatgpt-review.md (niveau light/full)
2. Vérifier absence de secrets / données sensibles
3. Copier (overwrite) vers sfia-review-handoff/latest-chatgpt-review.md
4. Commit sur sfia/review-handoff — fichier handoff uniquement
5. git push origin sfia/review-handoff — push obligatoire, pas d'autre push
6. git ls-remote origin refs/heads/sfia/review-handoff — vérifier SHA remote = commit local
7. Confirmer dans le rapport Cursor : handoff local SHA ; remote before/after ; push done ; remote verification yes/no
```

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
12. Promotion v2.5 implicite
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
35. **Review Handoff** : handoff commité localement mais **non pushé** sur `origin/sfia/review-handoff` — verdict `HANDOFF LOCAL ONLY — PUSH MISSING` ; cycle incomplet si ChatGPT doit lire handoff distant
36. **Review Handoff** : rapport demande lecture handoff Git sans vérification remote (`git ls-remote`) — SHA remote ≠ SHA local attendu

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
18. Verdict

Si `synthesis only = yes` → verdict **ne peut pas** être READY.

**Instruction handoff ChatGPT (si review pack ou handoff mentionné) :**

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

---

## 10. Instruction projet ChatGPT recommandée (copier-coller — ne pas modifier les fichiers projet)

> Section **interne** — proposition d'instruction pour un projet ChatGPT. **Ne modifie aucun fichier d'instruction existant.**

```text
SFIA v2.5 candidate — instanciation prompts Cursor — Repo-informed

Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent renforçant la découverte locale par Cursor. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push, PR, merge et promotions de baseline. Le review pack est proportionné : les documents consultés accessibles Git sont référencés sans duplication intégrale ; les fichiers créés ou modifiés doivent rester traçables par contenu complet, sections complètes modifiées ou diff utile ; le fichier .tmp-sfia-review/chatgpt-review.md reste temporaire, hors commit, et peut être supprimé ou purgé après validation.

Procédure détaillée :
1. Qualifier type de cycle projet (15 cycles — méthode Cycle 2) et profil SFIA (Light/Standard/Critical/Capitalization).
2. Appliquer la matrice de routage : routing guide → méthode cycles v2.5 → template d'exécution → operating model → guardrails → contexte projet → prompt Cursor.
3. Utiliser le template canonique : prompts/templates/sfia-cycle-execution-template.md (Git main).
4. Si ajouté aux sources projet ChatGPT : aide d'instanciation — en cas d'écart, Git main > sources projet.
5. Critical : toujours justifier. Standard par défaut si doute.
6. Review pack proportionné : none / light / full — voir template §7. Jamais de stub final si light ou full requis.
7. v2.5 = candidate, non baseline. v2.4 reste baseline opérationnelle tant que Morris n'a pas validé v2.5.
8. Morris décide push, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas.
```

---

*SFIA v2.5 candidate — Template d'instanciation — Cycle 3 — non validé comme baseline — Morris décide.*
