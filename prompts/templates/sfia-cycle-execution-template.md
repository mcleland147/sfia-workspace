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

### 2.1 Déclenchement

À partir d'une demande Morris (nouveau chat ou conversation en cours) :

1. **Qualifier** la demande — objectif, risque, impact, livrable attendu
2. **Identifier le type de cycle projet** — cartographie §4 (15 cycles)
3. **Identifier le profil SFIA** — Light / Standard / Critical / Capitalization
4. **Justifier le profil** — obligatoire si Critical ; recommandé sinon
5. **Activer les blocs pertinents** — §6 selon type, risque, transverses
6. **Identifier les gates Morris** — liste fermée ; pas de gate implicite
7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
8. **Décider review pack** — §7 : oui si consultation / modification / création documentaire
9. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite

### 2.2 Nouveau chat et sources projet

| Mode | Usage |
|------|-------|
| **Nouveau chat** | Compatible — remplir la fiche §3 puis générer le prompt §5 |
| **Source projet ChatGPT** | Si ce fichier est ajouté aux sources projet après merge Cycle 3, il sert d'aide d'instanciation rapide |
| **Hiérarchie des sources** | En cas d'écart : **Git `main` > sources projet ChatGPT** |

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
Review pack obligatoire :       [oui / non — voir §7]

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
2. Lire les sources listées
3. [Étapes spécifiques au cycle]
4. Validations (git diff, lints, tests si applicable)
5. Review pack si obligatoire (§7)
6. Rapport final (§9)
7. Ouvrir chatgpt-review.md si review pack (best effort)

Validations attendues :
- git status --short
- git diff --stat
- [Contrôles spécifiques]

Review pack obligatoire :
[oui / non — si oui, référencer §7]

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

### 6.6 UX/UI + Figma

| Élément | Contenu |
|---------|---------|
| **Activer si** | Cycle UX/UI ou delivery avec composant UI |
| **Qualification source design** | Choisir **un** des 4 cas ci-dessous |

| Cas | Comportement |
|-----|--------------|
| **Figma disponible et validé** | Référence Figma = source d'exécution ; GO source Figma si référence d'exécution |
| **Figma à produire** | Cycle design d'abord ; pas d'implémentation pixel-perfect avant validation |
| **Figma absent + fidélité visuelle attendue** | **Stop** ou GO arbitrage Morris — pas d'interprétation Cursor |
| **Figma disponible non validé** | Exploration OK ; **pas** source d'exécution tant que non validé |

| **Livrables** | Référence Figma, specs UI, écarts design/code, handoff delivery |
| **Stop** | Fidélité visuelle requise sans source design validée |

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

### 6.12 Post-merge

| Élément | Contenu |
|---------|---------|
| **Activer si** | Après merge PR |
| **Consignes** | `git checkout main` ; `git pull --ff-only` ; vérifier intégration ; log ; réserves |
| **Livrables** | Rapport post-merge ; réserves documentées |
| **Gates Morris** | Si réserve bloquante |
| **Stop** | Main non aligné ; réserve bloquante non traitée |

### 6.13 Capitalisation / REX

| Élément | Contenu |
|---------|---------|
| **Activer si** | Intention capitaliser apprentissage, REX, promotion doc/méthode |
| **Consignes** | Distinguer **observation** / **recommandation** / **décision proposée** / **décision validée** |
| **Livrables** | REX ; proposition doc ; traçabilité |
| **Gates Morris** | GO capitalisation ou promotion méthode |
| **Stop** | Promotion v2.5 ou doctrine sans gate |

---

## 7. Review pack obligatoire

### 7.1 Règle structurante

Tout prompt Cursor impliquant **consultation**, **modification** ou **création** documentaire doit créer ou mettre à jour :

`.tmp-sfia-review/chatgpt-review.md`

> Pour les cycles Light triviaux, le review pack peut être exempté uniquement si aucun document n'est **consulté**, **créé** ou **modifié** et si Morris ne demande pas de revue. Toute consultation documentaire utilisée comme base de décision, modification, création ou PR readiness reste soumise au review pack.

### 7.2 Contenu obligatoire du review pack

| Élément | Obligatoire |
|---------|-------------|
| Date et heure du rapport / de la section de revue | Oui |
| Documents consultés + rôle + sections | Oui |
| Extraits complets utilisés | Sections mobilisées pour la décision |
| Contenu complet des fichiers **créés** | Oui |
| Sections complètes des fichiers **modifiés** | Oui |
| Diff complet ou extraits utiles | Si modification |
| Propositions, garde-fous, réserves | Oui |
| Décisions Morris requises | Si applicable |
| Verdict | Oui |

### 7.3 Documents trop longs

Si un document source dépasse un seuil raisonnable :

- préciser **contenu complet inclus** ou **extrait seulement** ;
- lister les **sections exactes** utilisées ;
- **justifier** la non-reprise intégrale ;
- ne pas résumer sans traçabilité des sections sources.

### 7.4 Ouverture obligatoire dans Cursor

À la fin de l'exécution concernée :

1. Ouvrir `.tmp-sfia-review/chatgpt-review.md` dans Cursor
2. Nouvel onglet si possible ; onglet actif si possible
3. Confirmer dans le rapport Cursor — ou indiquer :  
   `best effort — ouverture demandée via CLI, onglet actif non garanti`

### 7.5 Matrice d'obligation

| Situation | Review pack |
|-----------|-------------|
| Consultation documentaire | **Oui** |
| Modification documentaire | **Oui** + sections modifiées + diff |
| Création documentaire | **Oui** + contenu complet |
| Commande Git seule sans lecture doc | Non (sauf demande Morris) |
| Cycle Light trivial sans document consulté / créé / modifié | Non (sauf demande Morris) |
| Consultation documentaire comme base de décision | **Oui** |
| PR readiness / Critical structurant | **Oui** |

### 7.6 Interdictions

- **Ne jamais** `git add` / commit / stage `.tmp-sfia-review/` sauf décision explicite Morris
- Le review pack est **hors commit** par défaut

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
16. **Absence de review pack** alors que documents consultés / modifiés / créés
17. Contenu créé/modifié **absent** du review pack
18. **Divergence** entre fichier réel et contenu présenté dans le review pack
19. Figma : fidélité visuelle requise sans source design validée

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
9. Review pack créé / mis à jour (oui/non)
10. Ouverture review pack (confirmé / best effort)
11. Réserves
12. Décisions Morris requises (oui/non + liste)
13. Verdict

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

## 10. Instruction projet recommandée (copier-coller — ne pas modifier les fichiers projet)

> Section **interne** — proposition d'instruction pour un projet ChatGPT. **Ne modifie aucun fichier d'instruction existant.**

```text
SFIA v2.5 candidate — instanciation prompts Cursor

Avant tout prompt Cursor :
1. Qualifier type de cycle projet (15 cycles — méthode Cycle 2) et profil SFIA (Light/Standard/Critical/Capitalization).
2. Utiliser le template canonique : prompts/templates/sfia-cycle-execution-template.md (Git main).
3. Si ajouté aux sources projet ChatGPT : aide d'instanciation — en cas d'écart, Git main > sources projet.
4. Critical : toujours justifier. Standard par défaut si doute.
5. Tout prompt Cursor impliquant consultation, modification ou création documentaire : review pack obligatoire dans .tmp-sfia-review/chatgpt-review.md — hors commit. Chaque section de revue doit inclure la date et l'heure.
6. v2.5 = candidate, non baseline. v2.4 reste baseline opérationnelle tant que Morris n'a pas validé v2.5.
7. Morris décide push, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas.
```

---

*SFIA v2.5 candidate — Template d'instanciation — Cycle 3 — non validé comme baseline — Morris décide.*
