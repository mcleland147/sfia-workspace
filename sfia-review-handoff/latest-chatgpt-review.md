# SFIA Review Pack — Discovery Editorial PD-05A (Actes IV–V)

**Horodatage :** 2026-07-15 00:30 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-05A — Préparation éditoriale Git (Actes IV–V)
**Type de cycle :** Product Design — couche éditoriale lecteur
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Statut livrables :** Candidate — brouillons éditoriaux non commités
**Branche projet :** `documentation/sfia-discovery-acts-04-05-editorial`
**HEAD / base / origin/main :** `7932fcb45d82ceacca2faa745764743b7c6f2806`
**Implémentation Notion :** PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B futur
**Capitalisation méthode :** Non
**Niveau review pack :** full (2 NEW + 2 MOD + contenu intégral)
**Handoff avant :** `origin/sfia/review-handoff` @ `ff52ac56edd9f34bfe22637ef7309a9b9e8f8164`
**Verdict :** **ACTS IV-V EDITORIAL PREPARED — READY FOR CHATGPT REVIEW**

---

## Décision Morris — GO PD-05A

| Élément | Décision |
|---------|----------|
| **Périmètre** | Acte IV (galerie livrables) · Acte V (garanties et limites) — sources éditoriales Git complètes |
| **Hors périmètre** | Notion PD-05B · commit · push projet · PR · merge · capitalisation |
| **Prérequis** | PD-04A/B ✓ (Acte III mergé + Notion finalisé) |
| **Gates** | M1–M6 contenu · M7 commit ultérieur · M8 Notion ultérieur |
| **Commit projet** | **Non** — branche projet reste non commitée |
| **Handoff** | Publication `sfia/review-handoff` autorisée |

---

## Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-discovery-acts-04-05-editorial` |
| HEAD | `7932fcb45d82ceacca2faa745764743b7c6f2806` ✓ |
| origin/main | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| Commits ahead of main (projet) | **0** — aucun commit sur branche projet |
| staged (scope projet) | **aucun** |
| **Verdict** | **PASS** |

### git status --porcelain (périmètre projet)

```
M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md
?? sfia-review-handoff/
```

**Périmètre PD-05A :** 2 NEW Act IV–V + 2 MOD (README editorial · roadmap 07).

---

## Fichiers livrables — line counts

| Fichier | Lignes |
|---------|--------|
| `sfia-discovery-act-04-what-sfia-produces-editorial-draft.md` | 229 |
| `sfia-discovery-act-05-why-it-works-editorial-draft.md` | 213 |
| `README.md` | 129 |
| `07-sfia-discovery-transformation-roadmap.md` | 175 |

---

## git diff --stat (tracked)

```
.../07-sfia-discovery-transformation-roadmap.md    | 37 ++++++------
 .../notion/discovery/editorial/README.md           | 69 ++++++++++++----------
 2 files changed, 57 insertions(+), 49 deletions(-)
```

**NEW (untracked) :**

```
 method/.../sfia-discovery-act-04-what-sfia-produces-editorial-draft.md | 229 ++
 method/.../sfia-discovery-act-05-why-it-works-editorial-draft.md       | 213 ++
```

---

## Matrice evidence — 5 familles + 5 mécanismes

| ID | Type | Libellé lecteur | Inspiration Git vérifiée | Niveau | Masqué lecteur |
|----|------|-----------------|--------------------------|--------|----------------|
| F1 | Famille | Cadrer | `00-framing/` · scope · `03-backlog/` | L1–L2 | Scoring pilote · SHAs bootstrap |
| F2 | Famille | Concevoir | `01-functional-architecture/` · `02-ux-ui/` · `04-design/` | L1–L2 | Figma raw · Penpot · pixel diffs |
| F3 | Famille | Livrer | `07-delivery-inc-0N/` · PR · closure reports | L2 | Branches · diffs code · CI |
| F4 | Famille | Vérifier | `08-qa-test/` · E2E · review handoff | L2 | Scripts complets · `.env.test` |
| F5 | Famille | Exploiter et apprendre | Readiness pré-delivery · `09-capitalization/` | L1 | RUN prod · observabilité complète |
| M1 | Mécanisme | Git prime | sfia-rules-and-guardrails · publication governance | L2 | Protected paths · prompt catalog |
| M2 | Mécanisme | Cycles bornés | operating model · cycle execution template · INC | L2 | Routing interne complet |
| M3 | Mécanisme | Décision humaine | cycle routing · pr-readiness · review handoff | L2 | Détails prompts Morris |
| M4 | Mécanisme | Validation proportionnée | QA standard v2 · validation checklist · profils | L2 | Règles internes exhaustives |
| M5 | Mécanisme | Capitalisation contrôlée | knowledge layer · INC closure · PD-09 roadmap | L1–L2 | Promotion method/core sans GO |

**Source explore :** catégories inspirées pilotes SFIA documentés — **sans** attribution client unique.

---

## QA — 32 contrôles

| # | Contrôle | Résultat |
|---|----------|----------|
| Q1 | Branche = `documentation/sfia-discovery-acts-04-05-editorial` | **PASS** |
| Q2 | HEAD = `7932fcb45d82ceacca2faa745764743b7c6f2806` (aligné `origin/main`) | **PASS** |
| Q3 | Aucun commit sur branche projet (0 ahead of main) | **PASS** |
| Q4 | Aucun fichier staged (scope projet) | **PASS** |
| Q5 | 2 fichiers Act IV–V NEW untracked + README + roadmap MOD | **PASS** |
| Q6 | Acte III source mergée sur main (PR #198) | **PASS** |
| Q7 | Handoff avant = `ff52ac56edd9f34bfe22637ef7309a9b9e8f8164` | **PASS** |
| Q8 | Pattern `Morris tranchera` absent (2 drafts) | **PASS** |
| Q9 | Pattern `à valider` absent | **PASS** |
| Q10 | `BatiNova` absent | **PASS** |
| Q11 | TODO / TBD / FIXME / PLACEHOLDER / WIP / Lorem absent | **PASS** |
| Q12 | `équipe IA qui accélère` absent | **PASS** |
| Q13 | Cinq familles visibles Acte IV (A1) | **PASS** |
| Q14 | Distinction activité / livrable / preuve / décision (A2) | **PASS** |
| Q15 | Aucune attribution abusive NovaBuild Acte IV (A3) | **PASS** |
| Q16 | Réserve absences release prod / BPMN (A4) | **PASS** |
| Q17 | Transition Acte IV → V (A5) | **PASS** |
| Q18 | Cinq mécanismes maximum Acte V (A1) | **PASS** |
| Q19 | Tableau garanties / non-garanties (A2) | **PASS** |
| Q20 | Formulations conditionnelles Acte V (A3) | **PASS** |
| Q21 | Aucune promesse absolue (A4) | **PASS** |
| Q22 | Transition Acte VI sans rédiger VI (A5) | **PASS** |
| Q23 | Cycle README = PD-05A · slots Actes I–V cohérents | **PASS** |
| Q24 | Roadmap PD-04A/B ✓ · PD-05A cycle courant | **PASS** |
| Q25 | Continuité narrative III → IV → V → VI (teasers) | **PASS** |
| Q26 | Chemins `projects/` non exposés en corps lecteur | **PASS** |
| Q27 | Matrice evidence 5 familles + 5 mécanismes présente | **PASS** |
| Q28 | PD-04B ✓ · PD-05B futur cohérent README/roadmap | **PASS** |
| Q29 | Pas de duplication contenu Acte VI–VII | **PASS** |
| Q30 | Gates M1–M8 documentées README §9 | **PASS** |
| Q31 | Décision Morris **GO PD-05A** documentée | **PASS** |
| Q32 | Verdict pack = ACTS IV-V EDITORIAL PREPARED | **PASS** |

**Verdict QA :** **PASS** (32/32) — soumis à revue ChatGPT + gates Morris M1–M6.

---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md`

**Rôle :** Acte IV — galerie livrables

```markdown
# ACTE IV — Ce que SFIA produit

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-05A (préparation éditoriale Git — Acte IV) |
| **Acte** | IV — Ce que SFIA produit |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-04-05-editorial` |
| **HEAD / base** | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
| **Niveau lecture** | L2 |
| **Durée cible** | 8–10 minutes |
| **Implémentation Notion** | Non — gate PD-05B futur |
| **Réaction recherchée** | « C'est tangible. » |

---

## 1. Transition depuis l'Acte III

Vous avez **suivi** NovaBuild — intention, cadrage, conception, delivery, QA, release, capitalisation.

L'**Acte III** montre le **mouvement**. L'**Acte IV** répond à la question suivante :

> **Quels livrables et résultats concrets obtient-on avec SFIA ?**

> **Nous avons suivi le projet. Regardons maintenant ce qu'il a produit.**

---

## 2. Qu'est-ce qu'un livrable SFIA ?

Un **livrable SFIA** est un **artefact identifiable** — document, décision tracée, incrément, rapport — produit à la fin d'un **cycle borné**.

Ce n'est pas :

- une activité (« on a réfléchi ») ;
- une conversation IA ;
- une promesse de résultat.

C'est :

- quelque chose qu'on peut **relire** ;
- quelque chose qu'on peut **valider** ;
- quelque chose qui **survit** au cycle suivant.

---

## 3. Activité · livrable · preuve · décision

| Notion | Ce que le lecteur retient |
|--------|---------------------------|
| **Activité** | Travail en cours — non figé |
| **Livrable** | Artefact attendu en fin de cycle |
| **Preuve** | Élément vérifiable — test, capture, historique Git |
| **Décision** | Tranché par un humain aux gates — pas par l'IA seule |

SFIA relie les quatre : l'activité **vise** un livrable · la preuve **soutient** le livrable · la décision **arbitre** avant la suite.

---

## 4. Galerie — cinq familles de valeur

Cinq familles visibles — chacune répond à une question métier. Les exemples ci-dessous sont des **catégories observées** dans des projets SFIA documentés — **pas** une attribution unique à NovaBuild.

### Famille 1 — Cadrer

| Champ | Contenu |
|-------|---------|
| **Question** | Sur quoi travaille-t-on vraiment ? |
| **Artefacts** | Note de cadrage · périmètre in/out · backlog initial · incréments planifiés |
| **Valeur métier** | Alignement sponsor · scope explicite · moins de rework flou |
| **Trace Git** | Documents de framing · limites MVP · epics et user stories |
| **Réserve** | Le cadrage ne remplace pas l'expertise métier terrain |

### Famille 2 — Concevoir

| Champ | Contenu |
|-------|---------|
| **Question** | Comment le produit fonctionne-t-il avant le code ? |
| **Artefacts** | Architecture fonctionnelle · modèle d'états · décisions structurantes · parcours UX · brief design |
| **Valeur métier** | Règles métier visibles · écrans alignés sur le besoin |
| **Trace Git** | Dossiers architecture fonctionnelle · UX · design · registres de décisions |
| **Réserve** | BPMN ou diagrammes formels **peuvent** exister — **pas** systématiques dans chaque pilote |

### Famille 3 — Livrer

| Champ | Contenu |
|-------|---------|
| **Question** | Qu'est-ce qui change concrètement dans le produit ? |
| **Artefacts** | Incrément delivery · rapport d'implémentation · PR · documentation de changement · clôture d'incrément |
| **Valeur métier** | Progrès mesurable · historique de merge · reprise par un autre intervenant |
| **Trace Git** | Pull requests · rapports delivery · closure reports |
| **Réserve** | Livrer ≠ mettre en production sans cycle release dédié |

### Famille 4 — Vérifier

| Champ | Contenu |
|-------|---------|
| **Question** | Comment sait-on que l'incrément tient la route ? |
| **Artefacts** | Stratégie QA · scénarios de test · rapport d'exécution · review pack · preuve runtime |
| **Valeur métier** | Critères reliés au métier · réserves visibles · pas de « ça marche chez moi » seul |
| **Trace Git** | Dossiers QA · specs E2E · review handoff |
| **Réserve** | Un build vert ne suffit pas — validation humaine reste requise |

### Famille 5 — Exploiter et apprendre

| Champ | Contenu |
|-------|---------|
| **Question** | Comment le projet survit-il à la livraison et s'améliore-t-il ? |
| **Artefacts** | Release readiness · runbook · REX · rapport de capitalisation |
| **Valeur métier** | Reprise · leçons exploitables · amélioration méthode **candidate** |
| **Trace Git** | Rapports capitalization · REX pilote · readiness pré-delivery |
| **Réserve** | Release production complète et observabilité RUN **ne sont pas** démontrées dans tous les pilotes — catégories parfois **cadrées en post-MVP** |

---

## 5. Cycles et artefacts

Chaque **cycle SFIA** vise un ou plusieurs artefacts des familles ci-dessus :

```text
Cadrage     → Famille 1
Conception  → Famille 2
Delivery    → Famille 3
QA          → Famille 4
Release/RUN → Famille 5
Capitalisation → Famille 5
```

Un cycle **sans livrable nommé** est un signal d'alerte — pas une fin de travail.

---

## 6. Exemples de traces Git

Le lecteur Discovery **n'a pas besoin** d'ouvrir le repository. Il doit comprendre que les livrables **existent** quelque part de façon vérifiable :

| Type de trace | Ce que cela prouve |
|---------------|-------------------|
| Commit + PR mergée | Un incrément a été intégré |
| Registre de décisions | Un arbitrage structurant est documenté |
| Rapport QA | Des critères ont été testés |
| Review pack / handoff | Une relecture structurée a eu lieu |
| Rapport de capitalisation | Des leçons ont été formalisées |

Les chemins détaillés sont réservés aux **sections gouvernance** et au review pack — pas au corps lecteur.

---

## 7. Livrables et reprise du projet

Les artefacts SFIA servent à **reprendre** un projet :

- un nouveau chef de projet lit le cadrage et le backlog ;
- un développeur retrouve les décisions dans Git ;
- Morris ou le sponsor vérifie les gates passées ;
- l'équipe QA reprend les scénarios et réserves ouvertes.

Sans livrables versionnés, la reprise repose sur la mémoire — fragile.

---

## 8. Limites de la galerie

Cette page **ne** :

- liste pas tous les fichiers du repository ;
- n'expose pas les templates complets ;
- n'attribue pas tous les artefacts à NovaBuild ;
- ne promet pas que chaque famille est **pleinement** documentée dans chaque projet ;
- ne remplace pas l'**Acte VII** pour approfondir la méthode.

C'est une **carte de valeur** — pas un inventaire technique.

---

## 9. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Sans artefacts nommés, le projet semble avancer — mais personne ne sait ce qui fait foi. |
| **Résolution** | SFIA impose des **livrables par cycle** — identifiables et traçables dans Git. |
| **Preuve** | Cinq familles couvrent le parcours cadrage → capitalisation · catégories vérifiées dans des pilotes documentés. |

---

## 10. Transition vers l'Acte V

Vous voyez **ce que** SFIA produit. La question suivante est **pourquoi** cette chaîne reste cohérente — et **où** sont ses limites.

> **Ces artefacts existent. Qu'est-ce qui garantit leur cohérence et leurs limites ?**

**→ Continuer : [ACTE V — Pourquoi cela fonctionne](sfia-discovery-act-05-why-it-works-editorial-draft.md)**

**← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**

---

## 11. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Framing · scope · backlog | Pilote documentaire SFIA — dossiers 00-framing · 03-backlog |
| Architecture · UX · design | 01-functional-architecture · 02-ux-ui · 04-design |
| Delivery · PR | 07-delivery-inc-0N · pr-readiness reports |
| QA · review pack | 08-qa-test · sfia-review-handoff · cycle execution template |
| Capitalisation · REX | 09-capitalization · standards sfia-v2 |
| Absences honnêtes | BPMN pilote · release prod · runbook prod — non systématiques |

---

## 12. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | Cinq familles visibles maximum | ✓ |
| A2 | Distinction activité / livrable / preuve / décision | ✓ |
| A3 | Aucune attribution abusive NovaBuild | ✓ |
| A4 | Réserve sur absences (release prod, BPMN) | ✓ |
| A5 | Transition Acte V | ✓ |

---

## Contenu lecteur — corps principal (PD-05B)

*Sections 1–10 ci-dessus.*
```


---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md`

**Rôle :** Acte V — garanties et limites

```markdown
# ACTE V — Pourquoi cela fonctionne

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-05A (préparation éditoriale Git — Acte V) |
| **Acte** | V — Pourquoi cela fonctionne |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-04-05-editorial` |
| **HEAD / base** | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
| **Niveau lecture** | L2 |
| **Durée cible** | 7–8 minutes |
| **Implémentation Notion** | Non — gate PD-05B futur |
| **Réaction recherchée** | « Je comprends les garanties et les limites. » |

---

## 1. Transition depuis l'Acte IV

Dans l'**Acte IV**, vous avez vu **les livrables** — cadrage, conception, delivery, QA, exploitation, capitalisation.

L'**Acte V** répond à :

> **Pourquoi cette chaîne reste-t-elle cohérente et contrôlable ?**

> **Ces artefacts existent. Qu'est-ce qui garantit leur cohérence et leurs limites ?**

---

## 2. Ce que « fonctionne » signifie

SFIA **fonctionne** lorsque le cadre est **appliqué** — pas lorsqu'on espère que l'IA « fera le reste ».

« Fonctionner » signifie ici :

- une **source de vérité** identifiée ;
- des **cycles** avec livrables et stop conditions ;
- des **décisions humaines** aux points structurants ;
- des **validations** proportionnées au risque ;
- des **réserves** visibles plutôt que masquées.

Ce n'est **pas** une garantie de succès commercial ou technique absolu.

---

## 3. Cinq mécanismes visibles

### Mécanisme 1 — Git prime

| Élément | Contenu |
|---------|---------|
| **Principe** | Le repository est la **version de référence** — pas le chat, pas Notion, pas un dossier local |
| **Ce que cela apporte** | Historique · reprise · preuve de merge · traçabilité des décisions documentées |
| **Limite** | Git ne valide pas le **métier** — il conserve ce qui a été écrit et mergé |

### Mécanisme 2 — Cycles bornés

| Élément | Contenu |
|---------|---------|
| **Principe** | Chaque cycle a une **intention** · un **périmètre** · un **livrable** · des **stop conditions** |
| **Ce que cela apporte** | Moins de dérive · objectifs vérifiables · fin de cycle explicite |
| **Limite** | Un mauvais cadrage initial produit des cycles **cohérents mais inutiles** |

### Mécanisme 3 — Décision humaine

| Élément | Contenu |
|---------|---------|
| **Principe** | Morris ou le décideur désigné tranche aux **gates** — scope, architecture, merge, release, capitalisation |
| **Ce que cela apporte** | Aucune promotion automatique · responsabilité claire |
| **Limite** | La qualité de la décision dépend de la **lecture** des livrables — pas de l'outil |

### Mécanisme 4 — Validation proportionnée

| Élément | Contenu |
|---------|---------|
| **Principe** | Contrôles automatisés · QA · review pack · preuves visuelles **selon le profil et le risque** |
| **Ce que cela apporte** | Pas de sur-documentation systématique · pas de sous-validation sur l'essentiel |
| **Limite** | Un review pack ne remplace pas l'**expertise** métier ou sécurité si requise |

### Mécanisme 5 — Capitalisation contrôlée

| Élément | Contenu |
|---------|---------|
| **Principe** | Observation · recommandation · **décision Morris** avant promotion method/core |
| **Ce que cela apporte** | Amélioration progressive · baseline v2.4 **inchangée** sans GO explicite |
| **Limite** | Capitaliser ≠ tout exporter dans la méthode canonique |

---

## 4. Garanties et limites

### SFIA aide à garantir — lorsque le cadre est appliqué

| Garantie de méthode | Formulation |
|---------------------|-------------|
| Source de vérité identifiée | Git prime sur les conversations |
| Périmètre explicite | Cycles et stop conditions documentés |
| Décisions structurantes humaines | Gates Morris ou sponsor désigné |
| Traçabilité des livrables | Artefacts par cycle · historique PR |
| Réserves visibles | QA · review pack · pas de masquage implicite |
| Reprise possible | Nouvel intervenant peut relire Git |

### SFIA ne garantit pas

| Non-garantie | Précision |
|--------------|-----------|
| Succès commercial | Dépend du marché et de l'exécution |
| Absence de bug | Le cadre réduit le flou — pas la complexité |
| Coût ou délai fixe | Dépend du périmètre et de l'engagement |
| Conformité automatique | Validation dédiée si exigence réglementaire |
| Qualité d'un besoin mal défini | SFIA structure — ne corrige pas un mauvais métier |
| Autonomie totale de l'IA | L'IA assiste · l'humain décide |
| Remplacement des experts | Architecture · sécurité · QA restent nécessaires |
| Discipline sans effort humain | Le cadre exige application rigoureuse |

---

## 5. Responsabilité humaine

SFIA **ne déplace pas** la responsabilité vers l'outil.

- **Vous** portez le métier et l'usage final.
- **Morris** (ou le sponsor) arbitre aux gates structurants.
- **L'IA** propose et exécute dans un périmètre — elle ne signe pas seule.

Lorsque le cadre est respecté, les responsabilités sont **lisibles**. Lorsqu'il est contourné, les mêmes risques qu'en projet classique ou IA libre **reviennent**.

---

## 6. Écarts et réserves

SFIA traite les écarts comme **normaux** — pas comme des échecs à cacher :

| Situation | Réponse attendue |
|-----------|------------------|
| QA révèle un écart | Réserve documentée · correction bornée · re-test |
| Review pack incomplet | Pas de GO merge tant que le pack est insuffisant |
| Preuve runtime absente | Décision explicite — pas de merge silencieux |
| Capitalisation partielle | REX honnête · pas de promotion baseline automatique |

Les réserves **visibles** sont une force — pas une faiblesse marketing.

---

## 7. Amélioration continue

Les retours d'expérience alimentent la méthode **candidate** — pas la baseline v2.4 sans décision :

1. **Observer** ce qui a fonctionné ou fragilisé un cycle ;
2. **Recommander** une amélioration documentée ;
3. **Décider** — Morris — si la leçon mérite une capitalisation ;
4. **Promouvoir** — uniquement avec GO — vers method/core.

Discovery reste **Candidate** : vous comprenez la valeur avant d'entrer dans Git.

---

## 8. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Des livrables existent — mais sans garde-fous, leur cohérence se dégrade entre cycles. |
| **Résolution** | Cinq mécanismes — Git · cycles · gates · validation · capitalisation contrôlée — maintiennent l'alignement. |
| **Preuve** | Review handoff · rapports QA · registres de décisions · standards v2 observables dans Git — **sans** exposer les règles internes complètes. |

---

## 9. Transition vers l'Acte VI

Le cadre est **crédible** — avec des garanties raisonnées et des limites explicites.

La question suivante est **personnelle** :

> **Le cadre est crédible. Reste à comprendre ce qu'il change dans votre contexte.**

**→ Continuer : ACTE VI — Se projeter avec SFIA** *(futur PD-06A)*

**← Retour : [ACTE IV — Ce que SFIA produit](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md)**

---

## 10. Sources Git (gouvernance)

| Mécanisme | Inspiration vérifiée |
|-----------|---------------------|
| Git prime | sfia-rules-and-guardrails · publication governance |
| Cycles bornés | operating model · cycle execution template · INC chain pilote |
| Gates Morris | cycle routing guide · pr-readiness · review handoff |
| Validation proportionnée | QA standard v2 · validation checklist · profils Light/Standard |
| Capitalisation | knowledge layer · INC closure standard · PD-09 gate roadmap |

*Règles internes complètes · protected paths · prompt catalog — masqués lecteur.*

---

## 11. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | Cinq mécanismes maximum | ✓ |
| A2 | Tableau garanties / non-garanties | ✓ |
| A3 | Formulations conditionnelles | ✓ |
| A4 | Aucune promesse absolue | ✓ |
| A5 | Transition Acte VI sans rédiger VI | ✓ |

---

## Contenu lecteur — corps principal (PD-05B)

*Sections 1–9 ci-dessus.*
```


---

## FULL CONTENT — `discovery/editorial/README.md` (MOD)

```markdown
# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-05A — Actes IV et V (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-acts-04-05-editorial` |
| **HEAD / base** | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV–V (en cours) → VI–VII
```

**Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | ✓ mergé (PD-04A) |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | ✓ mergé (PD-04A) |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | ✓ mergé (PD-04A) |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | ✓ mergé (PD-04A) |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | ✓ mergé (PD-04A) |
| 9 | [sfia-discovery-act-04-what-sfia-produces-editorial-draft.md](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) | IV | **PD-05A — revue** |
| 10 | [sfia-discovery-act-05-why-it-works-editorial-draft.md](sfia-discovery-act-05-why-it-works-editorial-draft.md) | V | **PD-05A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)
5. **Acte IV** — ce que SFIA produit
6. **Acte V** — pourquoi cela fonctionne

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
| Actes IV–V | **PD-05A** (présent — revue) | PD-05B — futur |
| Actes VI–VII | PD-06A — futur | PD-06B |

**NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (L2)
- Preuve avant promesse · cinq familles / cinq mécanismes max
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A · PD-03A · PD-04A mergés ✓
- PD-02B · PD-03B · PD-04B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓

---

## 9. Gates Acte IV–V (PD-05A)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte IV | En attente |
| **M2** | Preuves Acte IV | En attente |
| **M3** | Structure Acte V | En attente |
| **M4** | Garanties / limites | En attente |
| **M5** | Continuité III → IV → V → VI | En attente |
| **M6** | Contenu complet | En attente |
| **M7** | GO commit / push / PR | En attente |
| **M8** | GO PD-05B Notion | Hors cycle — futur |

---

## 10. Critères d'entrée PD-05B

- Actes IV et V validés Morris · merge Git recommandé · GO implémentation Notion L0
- Dépendance : PD-04A/B ✓

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)
```


---

## FULL CONTENT — `discovery-product-design/07-sfia-discovery-transformation-roadmap.md` (MOD)

```markdown
# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-acts-04-05-editorial` |
| **HEAD** | `7932fcb45d82ceacca2faa745764743b7c6f2806` |
| **Décision Morris** | Acte II avant Acte III — séquence narrative I → II → III |

---

## 1. Positionnement

| Phase | Contenu |
|-------|---------|
| **PD-01** | Product Design Candidate — mergé ✓ |
| **PD-nA** | Préparation éditoriale Git |
| **PD-nB** | Implémentation Notion L0 |
| **PD-08** | QA narrative et métier |
| **PD-09** | Décision capitalisation — GO Morris |

**Ordre narratif obligatoire :** Hub + Acte I → **Acte II** → Acte III (NovaBuild) → Actes IV–V → Actes VI–VII → migration → QA → capitalisation.

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants.

---

## 2. Modèle A / B

| Cycle | Périmètre | Gate |
|-------|-----------|------|
| **A — Git** | Brouillons Markdown complets | GO Morris commit/PR/merge |
| **B — Notion** | Matérialisation L0 manuelle | GO Morris implémentation |

---

## 3. Incréments

### PD-01 — Product Design Candidate ✓

Corpus PD-01 — mergé (PR #195).

### PD-02A — Hub + Acte I — préparation Git ✓

Brouillons Hub + Acte I — mergé (PR #196).

### PD-02B — Hub + Acte I — implémentation Notion ✓

| Prérequis | PD-02A mergé (PR #196) ✓ |
| Notion | Hub Discovery créé · Acte I créé |
| Source Git | Corpus PD-02A mergé via PR #196 |
| Statut | **Finalisé** |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

Git reste la **source de vérité** — Notion = couche métier et pédagogique.

### PD-03A — Acte II — préparation Git ✓

Brouillon Acte II — mergé (PR #197).

### PD-03B — Acte II — implémentation Notion ✓

| Prérequis | PD-03A mergé ✓ |
| Notion | Acte II créé |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git ✓

Brouillons Acte III + III.1–III.4 — mergé (PR #198).

### PD-04B — Acte III — implémentation Notion ✓

| Prérequis | PD-04A mergé (PR #198) ✓ |
| Notion | Pages fil rouge NovaBuild |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05A — Actes IV et V — préparation Git

| Objectif | Brouillons Acte IV (galerie livrables) · Acte V (garanties et limites) |
| Prérequis | PD-04A/B ✓ |
| Gate | M1–M6 Morris · qualification preuves · frontière promesse |

*Cycle présent — brouillons en revue.*

### PD-05B — Actes IV et V — implémentation Notion

Matérialisation L0 — gate M8 Morris futur.

### PD-06A — Actes VI et VII — préparation Git

Personas · annexes méthode simplifiées.

### PD-06B — Actes VI et VII — implémentation Notion

Pages persona + portail annexes.

### PD-07A — Migration legacy — préparation Git

Plan redirections §00–11 → architecture Discovery.

### PD-07B — Migration legacy — Notion

Redirections · archivage — gate Morris GO migration.

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A ✓ → PD-03B ✓  ← Acte II
├── PD-04A ✓ → PD-04B ✓  ← NovaBuild
├── PD-05A → PD-05B     ← Actes IV–V (cycle courant)
├── PD-06A → PD-06B
├── PD-07A → PD-07B
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence éditoriale Git recommandée :** 03A → 04A → 05A → 06A → 07A (parallélisme A possible avec gates par incrément).

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B)
    → Acte II (03A ✓ / 03B ✓)
      → Acte III NovaBuild (04A ✓ / 04B ✓)
        → Actes IV–V (05A en cours / 05B)
          → QA (08) → Capitalisation? (09)
```

---

## 6. Mapping renumérotation (référence)

| Ancien ID | Nouveau ID | Contenu |
|-----------|------------|---------|
| PD-03A/B | **PD-04A/B** | Acte III NovaBuild |
| PD-04A/B | **PD-05A/B** | Actes IV et V |
| PD-05A/B | **PD-06A/B** | Actes VI et VII |
| PD-06A/B | **PD-07A/B** | Migration legacy |
| PD-07 | **PD-08** | QA |
| PD-08 | **PD-09** | Capitalisation |
| — | **PD-03A/B** | **Acte II** (nouveau slot) |

---

## 7. Critères capitalisation (PD-09)

Itérations réelles · usage amélioré · gabarits réutilisables · dette acceptable · **GO Morris**

---

## Liens

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md)
```


---

## Fin du review pack PD-05A

**Verdict :** **ACTS IV-V EDITORIAL PREPARED — READY FOR CHATGPT REVIEW**
