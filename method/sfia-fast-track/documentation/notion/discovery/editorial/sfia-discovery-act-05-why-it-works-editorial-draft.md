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
| **Ce que cela apporte** | Une profondeur de documentation et de validation adaptée au profil et au risque |
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
