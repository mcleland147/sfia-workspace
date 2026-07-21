---
status: baseline
version: v2.6
type: prompt-instantiation-template
family: SFIA v2.6 cycle execution
updated_after: SFIA v2.6 baseline officialization post-merge (PR #204) — consolidation v2.4 + v2.5 absorbed
scope: instantiate Cursor execution prompts from ChatGPT
---

# SFIA Cycle Execution — Template d'instanciation v2.6

**Fichier :** `prompts/templates/sfia-cycle-execution-template.md`
**Statut :** SFIA v2.6 **baseline opérationnelle officielle** (active sur `main`)
**Baseline opérationnelle :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5
**Références :** operating model §18.2 ; routing guide §4.3–§4.4 ; manifest `2026-07-16-sfia-v2.6-baseline-release-manifest.md`

> **Ce document est un template d'instanciation pour ChatGPT.** Il sert à **générer** des prompts Cursor SFIA adaptés au contexte. **Ce n'est pas un prompt Cursor à envoyer tel quel.**

---

## 1. Rôle du template

| Élément | Description |
|---------|-------------|
| **Pour qui** | ChatGPT — qualification et génération de prompts Cursor |
| **Pas pour** | Envoi direct à Cursor sans instanciation |
| **Objectif** | Produire un **contrat d'exécution** borné : type de cycle + profil SFIA + périmètre + garde-fous |
| **Repo-first** | Git est la source canonique ; le prompt déclare branche, HEAD, périmètre fichiers |
| **Statut** | v2.6 **baseline opérationnelle officielle** — consolidation v2.4 + acquis v2.5 |
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
- niveau review pack recommandé : light / full (obligatoire si rapport Cursor ; hors contrat si opération read-only sans rapport)
- review handoff Git : required (obligatoire si rapport Cursor) — exception technique local-only documentée uniquement
- justification handoff :
- mode handoff : publish-in-cycle (défaut) / local-only (exception technique uniquement)
- motif local-only : [obligatoire si local-only — exception technique conforme §7.10.3]
- push handoff autorisé : oui — L3 borné (automatique si rapport Cursor, sauf exception technique)
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
8. **Décider review pack** — §7 : pour tout cycle Cursor **produisant un rapport** → **light** ou **full** obligatoire (jamais `none`) ; opération read-only sans rapport Cursor → hors contrat review pack
9. **Décider Review Handoff Git** — §7.10–§7.11 : pour tout cycle Cursor **produisant un rapport** → **required** + Mode **`publish-in-cycle`** + `Push handoff autorisé = oui — L3 borné` **automatiques** ; `local-only` = exception technique documentée uniquement (§7.10.3) — jamais `not required` pour un rapport Cursor ; combinaison invalide (rapport + none / not required / local-only non conforme) → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` ; mode contradictoire → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite

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
- Produire un rapport Cursor sans review pack (light/full)
- Utiliser `review pack = none` pour un cycle Cursor produisant un rapport
- Déclarer le handoff `not required` alors qu'un rapport Cursor est produit
- Confondre interdiction de push projet et interdiction de push handoff
- Utiliser `local-only` parce que le cycle est Light, par prudence générique, ou pour reporter la publication
- Créer systématiquement un second cycle uniquement pour republier le rapport
- Conclure READY alors que le handoff distant est obsolète
- Demander à ChatGPT de valider un rapport inaccessible depuis Git
- Déclarer handoff `required` + push L3 autorisé puis s'arrêter après une préparation **locale** sans publication distante (`publish-in-cycle`)
- Combiner `required` + `Push handoff autorisé = oui` avec `Mode handoff = local-only` sans exception technique conforme
- Présenter le fichier racine `latest-chatgpt-review.md` comme chemin canonique (le canonique unique est `sfia-review-handoff/latest-chatgpt-review.md`)
- Présenter une candidate non mergée comme baseline validée
- Présenter une version non mergée comme baseline officielle
- Relancer SFIA v3.0 sans GO Morris

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
Review pack :                   [light / full — OBLIGATOIRE si rapport Cursor — jamais none — voir §7]
                                  [hors contrat si opération read-only sans rapport Cursor]

Review Handoff Git :            [required — OBLIGATOIRE si rapport Cursor — jamais not required pour un rapport]
Justification handoff :         [obligatoire]
Mode handoff :                  [publish-in-cycle (défaut automatique) / local-only (exception technique uniquement)]
Motif local-only :              [obligatoire si local-only — exception technique §7.10.3 — sinon N/A]
Branche handoff :               sfia/review-handoff
Fichier handoff :               sfia-review-handoff/latest-chatgpt-review.md
Push handoff autorisé :         [oui — L3 borné — automatique si rapport Cursor, sauf exception technique]
Commit handoff attendu :        [message ou convention — ex. docs(review-handoff): publish …]
Retour branche initiale :       [obligatoire si publish-in-cycle]
Vérification remote :           [obligatoire si publish-in-cycle]
Verdict distant attendu :       [ex. HANDOFF UPDATED — REMOTE VERIFIED / HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED]
Instruction ChatGPT finale :  [bloc §9.1 — obligatoire si rapport Cursor + publish-in-cycle]

Règles mode handoff (ChatGPT — avant génération) :
Règle centrale : RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE
- rapport Cursor attendu → Review pack light/full + Handoff required + Mode publish-in-cycle + Push oui — L3 borné (automatiques)
- local-only                                              → Motif exception technique obligatoire (§7.10.3) + verdict HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED
- rapport + none / not required / local-only non conforme → INVALIDE → PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING
- required + push oui + local-only sans exception         → INVALIDE → PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
- Chemin canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
  (le fichier racine latest-chatgpt-review.md n'est JAMAIS le canonique)

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
- Ne pas déclarer une candidate non mergée comme baseline officielle
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
[light / full — OBLIGATOIRE si rapport Cursor — jamais none — référencer §7 — réinitialiser le fichier en début de cycle (étape 2) ; mono-cycle ; anti-stub final obligatoire]
[hors contrat si opération read-only sans rapport Cursor]

Review Handoff Git :
- décision : [required — OBLIGATOIRE si rapport Cursor — jamais not required pour un rapport]
- justification : [obligatoire]
- mode handoff : [publish-in-cycle (défaut) / local-only (exception technique uniquement)]
- motif local-only : [obligatoire si local-only — exception technique §7.10.3 / N/A]
- branche : sfia/review-handoff
- fichier canonique UNIQUE : sfia-review-handoff/latest-chatgpt-review.md
  (interdit : traiter latest-chatgpt-review.md à la racine comme canonique)
- review pack source : .tmp-sfia-review/chatgpt-review.md
- push handoff autorisé : [oui — L3 borné — automatique si rapport Cursor, sauf exception technique]
- commit handoff attendu : [message]
- retour branche initiale : obligatoire si publish-in-cycle
- vérification remote : obligatoire si publish-in-cycle (SHA + relecture fichier distant)
- règle atomique : RAPPORT CURSOR ⇒ review pack light/full + required + publish-in-cycle + push L3 dans le MÊME cycle (pas de second GO Morris)
- verdicts handoff :
  - HANDOFF UPDATED — REMOTE VERIFIED
  - HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED (local-only exception technique)
  - HANDOFF LOCAL ONLY — PUSH MISSING (alias legacy — préférer HANDOFF PUBLICATION BLOCKED)
  - REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED
  - REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING
  - REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
  - REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED
  - STOP — REVIEW HANDOFF SCOPE MISMATCH
  - STOP — REVIEW HANDOFF REMOTE DIVERGENCE
  - PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING
  - PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT
- instruction ChatGPT finale : inclure bloc §9.1 si rapport Cursor
- Actions interdites par le push handoff L3 : commit projet · push projet · PR · merge · modification main · suppression de branche

Rapport final attendu :
[Format selon profil §9 — inclure date et heure du rapport]

Verdict attendu :
[Ex. READY FOR PR READINESS / READY FOR COMMIT / STOP — MORRIS DECISION REQUIRED]

Actions interdites sans GO Morris :
- git push **branche projet** / `main` (le push handoff L3 borné n'autorise JAMAIS le push projet)
- gh pr create
- merge
- git push origin --delete (suppression branche)
- force push (toute branche)
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

### 7.0 Règle centrale — rapport Cursor = review pack = handoff

> **RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE**

Pour **tout cycle Cursor SFIA qui produit un rapport** :

1. un review pack est **obligatoire** ;
2. le niveau est exclusivement **Light** ou **Full** selon la qualification existante (§7.3) — **la granularité Light / Full n'est pas modifiée** ;
3. `publish-in-cycle` est le mode **normal et automatique** ;
4. le push du handoff est une action **L3 bornée** automatiquement incluse dans le cycle ;
5. la branche autorisée est exclusivement `sfia/review-handoff` ;
6. le fichier canonique unique est `sfia-review-handoff/latest-chatgpt-review.md` ;
7. la vérification distante est **obligatoire** ;
8. le retour au worktree / branche initiale est **obligatoire** ;
9. les changements projet doivent rester **intacts**.

**Hors contrat :** une opération **read-only sans rapport Cursor** n'exige ni review pack ni handoff.

**Valeurs interdites** pour un cycle Cursor produisant un rapport :

- `review pack = none` ;
- `Review Handoff Git = not required` ;
- `Mode handoff = local-only` **sans** exception technique conforme (§7.10.3).

**Contrôle bloquant** (ChatGPT avant génération / Cursor avant exécution) — si un prompt contient un rapport Cursor attendu **et** (review pack absent / `none` **ou** handoff `not required` **ou** `local-only` non conforme) :

```text
PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING
```

Le push L3 borné du handoff **ne constitue pas** une autorisation de push du travail projet.

### 7.1 Règle structurante — artefact temporaire mono-cycle

Le review pack `.tmp-sfia-review/chatgpt-review.md` est un **artefact temporaire mono-cycle** de revue — **pas** un miroir intégral de tous les documents consultés lorsque Git est accessible à ChatGPT.

Tout cycle Cursor **produisant un rapport** doit déclarer un niveau review pack — exclusivement **light** ou **full** (§7.3). La granularité Light / Full existante est **conservée**.

> **light** / **full** : fichier obligatoire, complété avant le rapport final — jamais un stub final (§7.5).
> **`none` n'est plus une valeur valide** pour un cycle Cursor produisant un rapport (§7.0).
> Opération **read-only sans rapport Cursor** : hors contrat review pack / handoff.

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

#### Hors contrat (pas un niveau review pack Cursor)

| Champ | Contenu |
|-------|---------|
| **Usage** | Opération **read-only sans rapport Cursor** (hors contrat §7.0) |
| **Contenu** | Aucun review pack / aucun handoff exigés par ce contrat |
| **Interdit** | Proposer `review pack = none` pour un cycle Cursor **produisant un rapport** — utiliser **light** ou **full** |

> Ancienne valeur `none` : **retirée** de la fiche d'instanciation des cycles Cursor avec rapport. Ne pas la réintroduire.

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
- review pack : light / full (obligatoire si rapport Cursor)
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
- niveau appliqué : light / full ;
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

### 7.10 Review Handoff Git Branch — obligatoire pour tout rapport Cursor

> **Règle centrale (§7.0) :** `RAPPORT CURSOR = REVIEW PACK OBLIGATOIRE = PUBLICATION HANDOFF DANS LE MÊME CYCLE`.
> Pour tout cycle Cursor produisant un rapport : Review Handoff Git = **required** ; Mode = **`publish-in-cycle`** ; Push = **oui — L3 borné**. Aucune valeur `not required` pour un rapport Cursor. `local-only` = **exception technique documentée uniquement**.

#### Décision obligatoire (fiche d'instanciation §3 et squelette §5)

| Champ | Règle |
|-------|-------|
| **Review Handoff Git** | **required** pour tout cycle Cursor produisant un rapport |
| **Justification** | Obligatoire |
| **Valeur `not required`** | **Interdite** si un rapport Cursor est produit → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |
| **Valeur vide / implicite** | Interdite — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` |

#### Mode handoff

| Mode | Quand | Effet |
|------|-------|-------|
| **`publish-in-cycle`** | **Défaut automatique** pour tout rapport Cursor | Publication distante **obligatoire dans le même cycle** avant tout verdict métier/documentaire |
| **`local-only`** | **Exception technique uniquement** (§7.10.3) | Préparation locale + régularisation obligatoire — cycle **non complètement clôturé** |
| **`not-required`** | **Hors contrat** pour un rapport Cursor | Réservé aux opérations read-only **sans** rapport Cursor |

**Règles de cohérence :**

- rapport Cursor → review pack light/full + `required` + push oui → mode **`publish-in-cycle` automatique** ;
- `local-only` → **motif d'exception technique obligatoire** + verdict `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` ;
- rapport + `none` / `not required` / `local-only` non conforme → **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** ;
- `required` + push oui + `local-only` sans exception technique → **`PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`** ;
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
- **décision handoff = required** obligatoire pour tout prompt produisant un rapport Cursor (§3, §5, §7.0) ;
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

#### 7.10.3 Cas `local-only` — exception technique uniquement

Le mode `local-only` reste possible **uniquement** si la publication est **techniquement bloquée** par :

- Git distant indisponible ;
- réseau ou authentification indisponible ;
- secret détecté ou risque de secret non résolu ;
- impossibilité de préserver le worktree ;
- **interdiction explicite de Morris**.

`local-only` **ne doit jamais** être utilisé :

- par prudence générique ;
- pour éviter un push handoff ;
- parce que le cycle est Light ;
- parce qu'aucun push projet n'est autorisé ;
- pour reporter automatiquement la publication dans un second cycle.

Un cycle en `local-only` doit **obligatoirement** documenter :

- le motif ;
- l'impact ;
- l'action de régularisation ;
- le gate Morris éventuel ;
- le fait que le cycle **n'est pas complètement clôturé**.

Verdict obligatoire :

```text
HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED
```

(Alias legacy acceptable dans les rapports : `HANDOFF LOCAL ONLY — PUSH MISSING` — préciser « revue Git distante non disponible ».)

Autres arrêts (sans assimilation à une exception `local-only` « choisie ») :

- divergence incompatible → `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` ;
- force push requis ;
- contenu incomplet → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` ;
- mauvais chemin / multi-fichiers → `STOP — REVIEW HANDOFF SCOPE MISMATCH`.

> **`not required` pour un rapport Cursor :** interdit (§7.0). Hors contrat uniquement pour opération read-only **sans** rapport Cursor.

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
| Mode `local-only` exception technique | `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` (alias legacy `HANDOFF LOCAL ONLY — PUSH MISSING`) |
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

#### Séquence Cursor (si Mode = `local-only` — exception technique)

```text
1. Compléter le review pack (light/full)
2. Documenter motif / impact / action de régularisation / gate Morris éventuel
3. Écrire le handoff local (.tmp-sfia-review/handoff-local/… ou équivalent) si utile
4. NE PAS push / NE PAS commit la branche handoff sauf instruction contraire explicite
5. Rapport : HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED + « revue Git distante non disponible »
6. Ne pas présenter un verdict de readiness comme si ChatGPT pouvait lire le handoff Git
7. Le cycle n'est PAS complètement clôturé
```

### 7.11 Matrice Review Handoff Git × review pack

> **Règle non ambiguë (§7.0).** Tout cycle Cursor produisant un rapport → review pack **Light** ou **Full** + handoff **required** + **`publish-in-cycle`**.

| Situation | Review pack | Handoff |
|-----------|-------------|---------|
| Cycle Cursor produisant un rapport simple | Light | Required + publish-in-cycle |
| Cycle Cursor substantiel | Full | Required + publish-in-cycle |
| Cycle documentaire / méthode / template / règle | Light ou Full selon portée | Required + publish-in-cycle |
| PR readiness / post-merge / capitalisation | Light ou Full selon portée | Required + publish-in-cycle |
| Publication techniquement bloquée | Light ou Full | Local-only exceptionnel + régularisation |
| Opération read-only sans rapport Cursor | Hors contrat | Aucun rapport / aucun handoff |

**Verdicts handoff (Cursor) :**

| Verdict | Condition |
|---------|-----------|
| `HANDOFF UPDATED — REMOTE VERIFIED` | Commit + push + SHA OK + relecture distante OK |
| `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` | Exception technique `local-only` — cycle non complètement clôturé |
| `HANDOFF LOCAL ONLY — PUSH MISSING` | Alias legacy de l'exception `local-only` |
| `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | `publish-in-cycle` requis mais non poussé |
| `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Poussé mais relecture / SHA distant manquant |
| `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff synthesis-only ou contenu manquant |
| `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote ancien/absent/incomplet |
| `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Autre fichier / mauvais chemin |
| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible / force push requis |

**Verdicts prompt (ChatGPT) :**

| Verdict | Condition |
|---------|-----------|
| `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` | Rapport Cursor attendu avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme |
| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Combinaison mode/push contradictoire (ex. required + push oui + local-only sans exception) |

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
16. **Absence de review pack** alors qu'un rapport Cursor est produit — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` / niveau **light** ou **full** requis
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
35. **Review Handoff** : Mode `local-only` exception technique — `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` ; cycle non complètement clôturé ; **ne pas** présenter comme publication réussie
36. **Review Handoff** : Mode `publish-in-cycle` mais **non poussé** — `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` ; **interdit** readiness métier/documentaire
37. **Review Handoff** : poussé sans relecture / SHA distant — `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING`
38. **Review Handoff** : rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme — `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`
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
11. Niveau review pack appliqué : light / full (obligatoire si rapport Cursor)
12. Review pack complété avant rapport final — absence de stub final (confirmé / non)
13. Review pack ne contient que le cycle courant (confirmé / non)
14. Ouverture review pack (confirmé / best effort)
15. Réserves
16. Décisions Morris requises (oui/non + liste)
17. **Review pack content coverage** (§7.5 — created/modified/diff/synthesis only/verdict)
18. **Review Handoff Git** (§7.10–§7.11) :
    - handoff decision : required (obligatoire si rapport Cursor)
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

Si opération **read-only sans rapport Cursor** (hors contrat) : indiquer clairement « hors contrat review pack / handoff » — **ne pas** afficher le bloc ci-dessus.
Si exception `local-only` : indiquer `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` + motif — **ne pas** présenter le handoff Git comme disponible.
`not required` pour un rapport Cursor : **interdit** → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`.

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
| `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` | Rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme |
| `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT` | Mode/push contradictoires (ex. required + push oui + local-only) |
| `HANDOFF UPDATED — REMOTE VERIFIED` | Handoff publié, SHA vérifié, fichier distant relu |
| `HANDOFF LOCAL ONLY — PUSH MISSING` | Mode local-only justifié — revue Git distante non disponible |
| `REVIEW HANDOFF INCOMPLETE — REMOTE PUBLICATION NOT PERFORMED` | publish-in-cycle requis mais non poussé |
| `REVIEW HANDOFF INCOMPLETE — REMOTE VERIFICATION MISSING` | Publication sans vérification/relecture distante |
| `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` | Handoff absent, obsolète ou synthesis-only |
| `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED` | Annonce publiée mais remote non à jour |
| `STOP — REVIEW HANDOFF SCOPE MISMATCH` | Périmètre handoff multi-fichier / mauvais chemin |
| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Divergence incompatible ou force push requis |
| `HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED` | Exception technique local-only — régularisation requise |

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
6. Review pack : light / full obligatoire pour tout cycle Cursor produisant un rapport (§7.0). Jamais `none` pour un rapport. Jamais de stub final.
7. Review Handoff Git : required + publish-in-cycle + Push oui — L3 borné automatiques pour tout rapport Cursor (template §3, §5, §7.0, §7.10–§7.11). Publication dans le MÊME cycle. local-only = exception technique uniquement → HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED. Rapport + none/not required/local-only non conforme → PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING. Chemin canonique unique : sfia-review-handoff/latest-chatgpt-review.md.
8. v2.6 = baseline opérationnelle officielle (active sur `main`). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff publish-in-cycle = L3 borné sans micro-GO Morris — n'autorise jamais push projet, PR, merge, force push ni L5.
```

---

*SFIA v2.6 baseline opérationnelle officielle — Template d'instanciation — consolidation v2.4 + acquis v2.5 — Morris décide.*
