# Méthode des cycles projet SFIA v2.5 candidate

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
**Cycle :** SFIA v2.5 candidate — Cycle 2 — méthodologie des cycles projet
**Version SFIA :** v2.5 **candidate** — non validée comme baseline
**Baseline :** SFIA v2.4 — Consolidation & Operating Efficiency
**Références :** `sfia-v2.5-project-plan.md` ; operating model §18.2 ; routing guide §4.4
**Date :** 2026-07-08

---

## 1. Statut du document

| Élément | Valeur |
|---------|--------|
| **Nature** | Méthode candidate des cycles projet SFIA |
| **Statut** | **Candidate** — hypothèse méthodologique, non validée |
| **Valide SFIA v2.5 ?** | **Non** — complément à v2.4 ; preuve attendue Cycle 4 ; décision Morris Cycle 5 |
| **Remplace v2.4 ?** | **Non** — ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` |
| **Standard final ?** | **Non** — niveau socle exploitable, pas encyclopédique |
| **Autorité** | Morris (L0) — gates, merge, actation version |

Ce document complète le Cycle 1 (profils transverses, distinction type/profil). Il prépare le Cycle 3 (templates/prompts opérationnels).

**Qualification du Cycle 2 (exécution présente) :** profil **Capitalization / Critical** — Capitalization car ce cycle produit une méthode réutilisable ; Critical car il touche la méthode cœur SFIA, la roadmap v2.5 candidate et les gates projet. Cette qualification concerne **le Cycle 2 lui-même** ; elle n'impose pas Critical par défaut aux autres cycles projet — Critical reste toujours justifié explicitement.

---

## 2. Principe structurant

| Dimension | Rôle |
|-----------|------|
| **Type de cycle projet** | Nature du travail : cadrage, conception, architecture, UX/UI, delivery, QA, post-merge, capitalisation, etc. |
| **Profil SFIA** | Niveau de contrôle / profondeur / validation : Light, Standard, Critical, Capitalization |
| **Typologie v2.4** | Nature consolidation projet : `INC / EVOL / RUN / CAPA / DOC` — **orthogonale** au type de cycle et au profil |
| **Morris (L0)** | Autorité de décision — gates structurants, push, PR, merge, actation version, pilote |
| **ChatGPT** | Cadrage, qualification type + profil, routage références, prompt contractuel, challenge, validation recommandée |
| **Cursor** | Exécuteur contrôlé — Local Git Truth Check, périmètre borné, rapport, signalement écarts |
| **Git** | Source de vérité opérationnelle — versionnement, traçabilité, PR |

**Règle centrale :** un cycle SFIA = **un type de cycle projet** + **un profil SFIA** + périmètre fermé + une readiness unique.

> Les profils Light / Standard / Critical / Capitalization sont **transverses** — ils s'appliquent à chaque type de cycle projet selon risque et impact.

### 2.1 Complément — Cycle Knowledge Contracts (candidate routing)

> **Statut de ce document :** candidate historique absorbée dans l'usage opérationnel des 15 types sous baseline **SFIA v2.6** — **ne constitue pas** une nouvelle baseline.
> **CKC :** `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` — **candidate** · experimental cognitive guidance · **non baseline**.

| Couverture | Contenu |
|------------|---------|
| Template CKC | `…/01-canonical-model-template.md` |
| Pilotes détaillés | Cadrage · Conception fonctionnelle · Architecture technique · QA/validation |
| Onze autres cycles | Carte synthétique `…/02-fifteen-cycles-synthetic-map.md` seulement — **pas** de contrat détaillé inventé |
| Consommation | Via routing guide §4.4.5 **avant** prompt Cursor |
| Autorité | Aucune autorité d'exécution |

Ce document §3–§4 reste la référence méthodologique des 15 types ; les CKC **complètent** la posture cognitive sans remplacer ces tableaux.

---

## 3. Cartographie des cycles projet SFIA

### 3.1 Vue d'ensemble

| # | Cycle projet | Catégorie | Description courte |
|---|--------------|-----------|------------------|
| 1 | Cadrage | A — quasi systématique | Clarifier intention, périmètre, contraintes, gates |
| 2 | Conception fonctionnelle | A | Besoins, parcours, règles métier, périmètre fonctionnel |
| 3 | Architecture fonctionnelle | B — activable | Structure fonctionnelle, flux, découpage, arbitrages |
| 4 | UX/UI | B | Design, parcours, composants, accessibilité si activée |
| 5 | Backlog / user stories | A | Découpage livrable, critères d'acceptation, priorisation |
| 6 | Architecture technique | B | Stack, patterns, ADR techniques, dette |
| 7 | Intégration / DevOps | B | CI/CD, environnements, pipelines, infra as code |
| 8 | Delivery / implémentation | A | Code, config, intégration incrémentale |
| 9 | QA / validation | A | Tests, recette, non-régression, preuves |
| 10 | Sécurité / RSSI | B | Menaces, conformité sécurité, durcissement |
| 11 | Déploiement / release | B | Release, rollback, communication, fenêtre |
| 12 | Observabilité / RUN readiness | B | Logs, métriques, alerting, exploitation |
| 13 | PR readiness | A | Vérification pré-PR, body, checklist |
| 14 | Post-merge | A | Clôture cycle, sync, réserves, suite |
| 15 | Capitalisation / REX | A | Apprentissage réutilisable — proportionné au cycle |

### 3.2 Cycles transverses activables

| Cycle transverse | Déclencheur typique | Interaction |
|------------------|---------------------|-------------|
| **FinOps** | Coût cloud, budget, optimisation ressources | Section activable dans cycles architecture, DevOps, delivery |
| **GreenOps** | Empreinte carbone, sobriété numérique | Section activable dans architecture, delivery, observabilité |
| **RGPD / conformité** | Données personnelles, traitement, registre | Section activable dans cadrage, conception, sécurité |
| **Accessibilité** | Exigence légale ou produit | Section activable dans UX/UI, QA |
| **Performance** | SLA, charge, latence | Section activable dans architecture, delivery, QA, observabilité |

Les transverses **ne sont pas des types de cycle projet autonomes par défaut** — ils s'activent comme **sections ou contrôles additionnels** dans les cycles concernés. Méthodologie courte : voir **§4.16**.

---

## 4. Méthodologie par cycle projet cœur

Chaque cycle est documenté au niveau **méthodologique exploitable** — pas de guide encyclopédique.

### 4.1 Cadrage

| Champ | Contenu |
|-------|---------|
| **Objectif** | Clarifier intention Morris, périmètre, contraintes, profil SFIA, gates et livrables du cycle à venir |
| **Déclenchement** | Nouveau chantier, nouveau cycle projet, évolution structurante, besoin de re-cadrage |
| **Entrée** | Intention Morris ; contexte projet ; contraintes connues ; références existantes |
| **Déroulé** | 1) Qualifier type cycle + profil ; 2) Lister hors périmètre ; 3) Identifier gates Morris ; 4) Sélectionner références ; 5) Produire prompt contractuel ou brief cycle |
| **Livrables** | Brief cycle ; prompt contractuel ; liste gates ; matrice références |
| **Critères sortie** | Périmètre fermé ; profil justifié ; gates listés ; GO Morris cadrage si structurant |
| **Profils possibles** | Standard (défaut) ; Critical si arbitrage structurant ; Light rare (re-cadrage doc minimal) |
| **Gates Morris** | GO cadrage ; GO scope ; GO profil Critical |
| **ChatGPT** | Qualifie ; cadre ; produit prompt ; limite sollicitations |
| **Cursor** | Exécute cadrage doc si demandé ; rapport ; pas d'élargissement scope |
| **Validations** | Cohérence type/profil ; hors périmètre explicite ; single readiness |
| **Risques** | Scope flou ; Critical implicite ; double readiness |
| **Stop conditions** | Doctrine ; chemin protégé ; promotion v2.5 implicite |
| **Amont / aval** | Amont : intention Morris — Aval : conception, architecture, backlog |
| **Impact Cycle 3** | Template : section cadrage obligatoire ; champs type + profil + gates |

### 4.2 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| **Objectif** | Formaliser besoins, parcours, règles métier et périmètre fonctionnel |
| **Déclenchement** | Post-cadrage ; évolution produit ; nouveau module |
| **Entrée** | Brief cadrage ; contraintes ; personas / use cases si existants |
| **Déroulé** | Analyse besoins → parcours → règles → périmètre fonctionnel → validation interne |
| **Livrables** | Spec fonctionnelle ; parcours ; règles ; questions ouvertes tracées |
| **Critères sortie** | Périmètre fonctionnel borné ; arbitrages listés ; réserves documentées |
| **Profils possibles** | Standard ; Critical si impact produit structurant |
| **Gates Morris** | GO conception ; GO arbitrage métier structurant |
| **ChatGPT** | Structure spec ; challenge cohérence ; prompt Cursor si livrable doc |
| **Cursor** | Rédaction / mise à jour docs ; contrôle périmètre fichiers |
| **Validations** | Traçabilité besoin → livrable ; pas de scope creep |
| **Risques** | Spec incomplète ; mélange technique trop tôt |
| **Stop conditions** | Décision produit structurante sans gate |
| **Amont / aval** | Amont : cadrage — Aval : UX/UI, architecture fonctionnelle, backlog |
| **Impact Cycle 3** | Sections spec, parcours, critères acceptation dans template |

### 4.3 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| **Objectif** | Définir structure fonctionnelle, flux, découpage et arbitrages d'architecture métier |
| **Déclenchement** | Complexité fonctionnelle ; intégrations ; découpage module |
| **Entrée** | Spec fonctionnelle ; contraintes ; existant technique |
| **Déroulé** | Cartographie flux → modules → interfaces → arbitrages → ADR fonctionnels si besoin |
| **Livrables** | Schémas ; décisions ; register arbitrages ; ADR/DAA si déclenchés |
| **Critères sortie** | Arbitrages tracés ; impact delivery évalué |
| **Profils possibles** | Standard ; **Critical** si structurant ou difficilement réversible |
| **Gates Morris** | GO architecture structurante |
| **ChatGPT** | Challenge cohérence ; qualification Critical explicite |
| **Cursor** | Docs architecture ; diagrammes si périmètre |
| **Validations** | Pas d'ADR projet complet si cycle standard v2.4 (cf. routing §6) |
| **Risques** | Sur-architecture ; Critical par confort |
| **Stop conditions** | Décision irréversible sans gate |
| **Amont / aval** | Amont : conception — Aval : architecture technique, backlog |
| **Impact Cycle 3** | Section architecture + gate GO structurant |

### 4.4 UX/UI

| Champ | Contenu |
|-------|---------|
| **Objectif** | Concevoir ou mettre à jour l'expérience utilisateur et l'interface |
| **Déclenchement** | Nouveau parcours ; refonte ; correction design ; besoin de partir d'une source design **Figma** validée ; besoin d'alignement pixel-perfect ou fidélité visuelle |
| **Entrée** | Spec fonctionnelle ; **maquette Figma** ; lien ou export Figma ; design system ; intention UX/UI si aucune maquette validée n'existe encore ; contraintes accessibilité si activées |
| **Déroulé** | Qualification source design : **Figma validé** / Figma à produire / absence de Figma → wireframes / maquettes → composants → états → identification écarts design/code → revue → **handoff delivery** |
| **Livrables** | **Référence Figma** ; maquettes ou exports Figma ; specs UI ; états composants ; écarts design/code tracés |
| **Critères sortie** | Parcours couvert ; critères acceptation UI ; accessibilité si scope ; source design qualifiée |
| **Profils possibles** | **Light** (correction mineure) ; **Standard** (parcours courant) ; **Critical** (nouveau parcours structurant) |
| **Gates Morris** | GO UX/UI cible ; **GO source Figma** si la maquette devient référence d'exécution ; GO arbitrage si absence de Figma mais besoin de fidélité visuelle |
| **ChatGPT** | Qualification impact ; prompt borné ; qualification source design |
| **Cursor** | Implémentation UI si cycle delivery couplé — sinon docs/design exports ; pas d'interprétation visuelle non validée si fidélité requise |
| **Validations** | Cohérence design system ; pas de polish hors scope |
| **Risques** | Extrapolation design = cycle séparé (routing §6.14) ; **implémenter une UI depuis interprétation Cursor sans source Figma validée lorsque le cycle exige une fidélité visuelle** ; **confondre exploration UX/UI et décision design cible** |
| **Stop conditions** | Décision produit UI structurante ; fidélité visuelle requise sans source design validée |
| **Amont / aval** | Amont : conception — Aval : delivery, QA |
| **Impact Cycle 3** | Variantes profondeur Light/Standard/Critical ; section accessibilité activable ; **section Figma / source design / handoff** dans futurs templates UX/UI ou delivery avec UI |

> **Figma** = source de vérité design **lorsque disponible ou explicitement validée** — pas obligation systématique pour tout cycle UX/UI.

### 4.5 Backlog / user stories

| Champ | Contenu |
|-------|---------|
| **Objectif** | Découper le livrable en stories priorisées avec critères d'acceptation |
| **Déclenchement** | Post-conception / architecture ; préparation INC ou sprint |
| **Entrée** | Spec ; architecture ; capacité équipe |
| **Déroulé** | Épics → stories → critères → priorisation → dépendances |
| **Livrables** | Backlog priorisé ; stories INVEST ; critères acceptation |
| **Critères sortie** | Stories testables ; priorité Morris si arbitrage |
| **Profils possibles** | Standard (défaut) ; Light si mise à jour backlog doc-only |
| **Gates Morris** | GO priorisation si conflit scope |
| **ChatGPT** | Découpage ; challenge taille stories |
| **Cursor** | Mise à jour fichiers backlog si périmètre |
| **Validations** | Une story = un résultat vérifiable |
| **Risques** | Stories trop larges ; mélange cycles |
| **Stop conditions** | Scope structurant non arbitré |
| **Amont / aval** | Amont : conception, archi — Aval : delivery |
| **Impact Cycle 3** | Section backlog + critères acceptation |

### 4.6 Architecture technique

| Champ | Contenu |
|-------|---------|
| **Objectif** | Définir stack, patterns techniques, ADR et contraintes d'implémentation |
| **Déclenchement** | Nouveau module ; dette ; changement stack |
| **Entrée** | Architecture fonctionnelle ; contraintes infra ; standards plateforme |
| **Déroulé** | Options → décision → ADR → guidelines implémentation |
| **Livrables** | ADR techniques ; diagrammes ; guidelines |
| **Critères sortie** | Décisions tracées ; impact sécurité/DevOps évalué |
| **Profils possibles** | Standard ; **Critical** si structurant, sécurité, ou irréversible |
| **Gates Morris** | GO architecture structurante ; GO stack si impact doctrine |
| **ChatGPT** | Challenge ; qualification Critical |
| **Cursor** | Docs ; pas d'implémentation hors cycle delivery sauf scope explicite |
| **Validations** | Alignement `docs/standards/` ; chemins protégés |
| **Risques** | Décision technique implicite ; dette non tracée |
| **Stop conditions** | Changement doctrine ; chemin protégé |
| **Amont / aval** | Amont : archi fonctionnelle — Aval : DevOps, delivery |
| **Impact Cycle 3** | Section ADR + gates ; transverses performance/FinOps activables |

### 4.7 Intégration / DevOps

| Champ | Contenu |
|-------|---------|
| **Objectif** | Mettre en place ou adapter CI/CD, environnements, pipelines |
| **Déclenchement** | Nouveau projet ; changement pipeline ; besoin déploiement |
| **Entrée** | Architecture technique ; contraintes infra ; secrets policy |
| **Déroulé** | Pipeline → envs → tests auto → documentation runbook |
| **Livrables** | Config CI/CD ; runbooks ; preuves exécution |
| **Critères sortie** | Pipeline vert ; rollback documenté |
| **Profils possibles** | Standard ; Critical si prod ou sécurité |
| **Gates Morris** | GO déploiement infra si impact prod |
| **ChatGPT** | Cadrage ; périmètre fichiers config |
| **Cursor** | Modification configs dans périmètre ; pas de secrets |
| **Validations** | Pas de push sans GO ; tests pipeline |
| **Risques** | Modification prod implicite ; secrets exposés |
| **Stop conditions** | Chemin protégé ; push sans GO |
| **Amont / aval** | Amont : archi technique — Aval : delivery, déploiement |
| **Impact Cycle 3** | Section DevOps activable ; checklist env |

### 4.8 Delivery / implémentation

| Champ | Contenu |
|-------|---------|
| **Objectif** | Implémenter le livrable (code, config, intégration) dans le périmètre défini |
| **Déclenchement** | Story prête ; INC planifié ; correctif |
| **Entrée** | Backlog ; spec ; archi ; branche dédiée |
| **Déroulé** | Implémentation → tests locaux → diff contrôlé → rapport |
| **Livrables** | Code / config ; tests ; rapport Cursor |
| **Critères sortie** | Diff borné ; tests passants ; hors périmètre respecté |
| **Profils possibles** | Standard ; Critical si impact fort produit/sécurité |
| **Gates Morris** | GO delivery si scope élargi |
| **ChatGPT** | Prompt contractuel strict ; fichiers listés |
| **Cursor** | Exécution bornée ; Git Truth Check |
| **Validations** | `git diff` ; lint/tests ; scope |
| **Risques** | Scope creep ; régression |
| **Stop conditions** | Fichier hors liste ; chemin protégé |
| **Amont / aval** | Amont : backlog, archi — Aval : QA, PR readiness |
| **Impact Cycle 3** | Cœur du template — périmètre fichiers, livrables, tests |

### 4.9 QA / validation

| Champ | Contenu |
|-------|---------|
| **Objectif** | Vérifier conformité, non-régression et critères d'acceptation |
| **Déclenchement** | Post-delivery ; pré-release ; audit qualité |
| **Entrée** | Livrable delivery ; critères acceptation ; plan de test |
| **Déroulé** | Tests → recette → écarts → rapport → réserves |
| **Livrables** | Rapport QA ; preuves ; liste réserves |
| **Critères sortie** | Critères PASS ou réserves classées ; pas de GO implicite |
| **Profils possibles** | Standard ; Critical si go-live ou sécurité |
| **Gates Morris** | GO validation ; GO go-live |
| **ChatGPT** | Plan de test ; qualification profil |
| **Cursor** | Exécution tests ; captures ; rapport |
| **Validations** | Evidence-based ; réserves bloquantes escaladées |
| **Risques** | QA symbolique ; Critical par confort |
| **Stop conditions** | Réserve bloquante non résolvable |
| **Amont / aval** | Amont : delivery — Aval : PR readiness, déploiement |
| **Impact Cycle 3** | Section validations + format preuves |

### 4.10 Sécurité / RSSI

| Champ | Contenu |
|-------|---------|
| **Objectif** | Identifier menaces, appliquer contrôles sécurité et conformité |
| **Déclenchement** | Données sensibles ; surface exposée ; audit ; incident |
| **Entrée** | Architecture ; données ; menaces connues |
| **Déroulé** | Analyse menace → contrôles → durcissement → revue |
| **Livrables** | Analyse risque ; mesures ; checklist sécurité |
| **Critères sortie** | Menaces traitées ou acceptées par Morris |
| **Profils possibles** | Standard ; **Critical** quasi systématique si sensible |
| **Gates Morris** | GO sécurité ; acceptation risque |
| **ChatGPT** | Qualification Critical explicite |
| **Cursor** | Implémentation contrôles si périmètre |
| **Validations** | Pas de secret en clair ; chemins protégés |
| **Risques** | Contournement contrôles ; conformité partielle |
| **Stop conditions** | Chemin protégé ; décision risque non arbitrée |
| **Amont / aval** | Transverse — activable dans cadrage, archi, delivery, QA |
| **Impact Cycle 3** | Section RSSI activable ; jamais implicite |

### 4.11 Déploiement / release

| Champ | Contenu |
|-------|---------|
| **Objectif** | Produire release déployable avec plan rollback et communication |
| **Déclenchement** | Validation QA PASS ; fenêtre release |
| **Entrée** | Artefacts validés ; runbook ; fenêtre |
| **Déroulé** | Pré-check → déploiement → smoke → communication → surveillance |
| **Livrables** | Release notes ; preuve déploiement ; rollback plan |
| **Critères sortie** | Déploiement réussi ou rollback exécuté |
| **Profils possibles** | Standard ; Critical si production |
| **Gates Morris** | GO release ; GO rollback si incident |
| **ChatGPT** | Checklist release |
| **Cursor** | Support doc ; pas de deploy sans GO |
| **Validations** | Smoke tests ; observabilité post-deploy |
| **Risques** | Release sans rollback ; prod non surveillée |
| **Stop conditions** | Deploy prod sans GO |
| **Amont / aval** | Amont : QA — Aval : observabilité, post-merge |
| **Impact Cycle 3** | Section release + gates explicites |

### 4.12 Observabilité / RUN readiness

| Champ | Contenu |
|-------|---------|
| **Objectif** | Garantir exploitabilité : logs, métriques, alerting, runbooks |
| **Déclenchement** | Go-live ; nouveau service ; incident récurrent |
| **Entrée** | Architecture ; SLO ; incidents passés |
| **Déroulé** | Instrumentation → dashboards → alertes → runbooks |
| **Livrables** | Config observabilité ; runbooks ; SLO documentés |
| **Critères sortie** | Service observable ; alerting testé |
| **Profils possibles** | Standard ; Critical si prod critique |
| **Gates Morris** | GO go-live RUN |
| **ChatGPT** | Cadrage SLO |
| **Cursor** | Config dans périmètre |
| **Validations** | Alertes non bruitées ; runbook à jour |
| **Risques** | Angle mort monitoring ; dette ops |
| **Stop conditions** | Prod sans observabilité si policy l'exige |
| **Amont / aval** | Amont : delivery, DevOps — Aval : post-merge, capitalisation |
| **Impact Cycle 3** | Section observabilité activable ; transverse performance |

### 4.13 PR readiness

| Champ | Contenu |
|-------|---------|
| **Objectif** | Vérifier qu'une branche est prête pour PR : diff, garde-fous, body, checklist |
| **Déclenchement** | Fin cycle delivery/doc ; avant demande GO PR |
| **Entrée** | Branche dédiée ; prompt cycle clos ; diff local |
| **Déroulé** | Git Truth Check → diff review → garde-fous → body draft → verdict readiness |
| **Livrables** | Rapport readiness ; PR body draft ; réserves |
| **Critères sortie** | Verdict READY / READY WITH RESERVES / NOT READY |
| **Profils possibles** | **Light** (doc-only, ≤3 fichiers) ; **Standard** (cycle courant) |
| **Gates Morris** | GO PR si demandé — pas d'ouverture PR sans GO |
| **ChatGPT** | Revue readiness ; challenge réserves |
| **Cursor** | Exécute checks ; ne push pas ; ne ouvre pas PR sans GO |
| **Validations** | Budget fichiers ; fichiers interdits ; single readiness ; **granularité Git proportionnée** (template §6.14 — livrable cohérent, pas micro-PR non justifiée) |
| **Risques** | PR prématurée ; scope caché |
| **Stop conditions** | Push/PR sans GO |
| **Amont / aval** | Amont : delivery/QA — Aval : merge (gate Morris) |
| **Impact Cycle 3** | Template `05-validate-pr-readiness` enrichi candidate |

### 4.14 Post-merge

| Champ | Contenu |
|-------|---------|
| **Objectif** | Clôturer le cycle après merge : sync, réserves, suite, capitalisation si besoin ; **cleanup branche PR** si post-merge check OK (PR 4 candidate §6.12.1) |
| **Déclenchement** | Merge effectué par Morris ; post-merge check demandé |
| **Entrée** | PR mergée ; commit merge ; branche source identifiée ; réserves éventuelles |
| **Déroulé** | Sync main → vérif merge commit + commit PR → rapport post-merge → **cleanup branche PR si conditions OK** → suite recommandée |
| **Livrables** | Rapport post-merge ; rapport cleanup (done/skipped/blocked) ; réserves tracées |
| **Critères sortie** | Main aligné ; réserves classées ; branche PR nettoyée ou blocage documenté ; suite identifiée |
| **Profils possibles** | **Light** (trivial, skip cleanup possible) ; Standard ; Critical (complet) |
| **Gates Morris** | GO post-merge inclut cleanup si conditions OK ; escalade si réserve bloquante |
| **ChatGPT** | Recommandation suite ; signale si cleanup requis ou bloqué |
| **Cursor** | Sync ; vérif ; rapport ; **cleanup branche PR dans le même cycle** si §6.12.1 OK — pas de `-D` sans GO |
| **Validations** | HEAD = origin/main ; merge commit + commit PR présents ; branche ≠ main/handoff |
| **Risques** | Oublier réserves ; cleanup branche ambigu ; micro-cycle cleanup séparé inutile |
| **Stop conditions** | Main désaligné ; branche non mergée ; `git branch -d` refuse ; branche handoff ciblée |
| **Amont / aval** | Amont : merge — Aval : capitalisation, cycle suivant |
| **Impact Cycle 3** | Template §6.12 — post-merge + cleanup intégré |

### 4.15 Capitalisation / REX

| Champ | Contenu |
|-------|---------|
| **Objectif** | Transformer apprentissage, REX ou décision en actif méthodologique réutilisable |
| **Déclenchement** | Fin cycle **significatif** ; incident ; promotion pattern ; clôture chantier — **optionnel / allégé / skippable** sur cycle Light trivial |
| **Entrée** | Rapports ; décisions ; écarts ; métriques |
| **Déroulé** | Collecte → synthèse → distinction observation/recommandation/décision → proposition promotion |
| **Livrables** | REX ; proposition doc ; mise à jour méthode si GO |
| **Critères sortie** | Traçabilité ; distinction faits/recommandations ; gate Morris si promotion méthode |
| **Profils possibles** | **Capitalization** + Light / Standard / Critical selon portée |
| **Gates Morris** | GO capitalisation ; GO promotion méthode |
| **ChatGPT** | Structure REX ; qualification Capitalization |
| **Cursor** | Rédaction doc si périmètre ; pas d'actation version |
| **Validations** | Ne pas confondre Capitalization (profil) et CAPA (type v2.4) |
| **Risques** | Promotion prématurée ; brouillage candidate/validé |
| **Stop conditions** | Promotion v2.5 implicite ; modification doctrine sans gate ; **confondre Capitalization avec obligation de clore toutes les réserves** (voir §4.15 bis) |
| **Amont / aval** | Amont : post-merge, épreuves — Aval : cycles méthode futurs |
| **Impact Cycle 3** | Section Capitalization activable ; template `08-capitalize-method-asset` |

### 4.15 bis Post-MVP stop rules (candidate — PR 4)

> **Référence :** template §6.15 ; roadmap REX Chantiers360 — **candidate** ; Morris décide l'arrêt.

| Champ | Contenu |
|-------|---------|
| **Objectif** | Permettre l'arrêt d'une phase post-MVP sans clore toutes les réserves |
| **Déclenchement** | Phase post-MVP ; réserves structurantes ciblées traitées ou report explicite |
| **Conditions** | Réserves ciblées closed ; restantes acceptées/reportées ; Option B/C non lancées ; REX suffisant ; risques documentés ; GO Morris arrêt |
| **Exemple** | Chantiers360 : R-QA-04/R-UX-01 closed ; R-QA-03/R-QA-05 acceptées ; Option B/C non lancées |
| **Profil Capitalization** | Capitaliser l'apprentissage — **ne pas** confondre avec obligation de traiter chaque réserve ouverte |
| **SFIA v2.5** | Reste **candidate** — cette règle ne promeut pas la baseline |

### 4.16 Méthodologie des transverses activables

> Sections activables par contexte, risque ou profil — **pas des cycles cœur obligatoires**. Voir aussi §3.2 et §5.C.

#### FinOps

| Champ | Contenu |
|-------|---------|
| **Objectif** | Maîtriser coûts, ressources, budget cloud ou infra |
| **Déclenchement** | Cloud, services managés, consommation variable, coût significatif |
| **Cycles concernés** | Cadrage, architecture technique, DevOps, delivery, observabilité |
| **Livrables** | Estimation coût, hypothèses consommation, leviers optimisation, réserves |
| **Gates Morris** | GO budget ou arbitrage coût/performance |
| **Profil probable** | Standard ; Critical si impact financier structurant |
| **Impact Cycle 3** | Section activable coût / budget / optimisation |

#### GreenOps

| Champ | Contenu |
|-------|---------|
| **Objectif** | Intégrer sobriété numérique et empreinte environnementale quand pertinent |
| **Déclenchement** | Exigence client, politique entreprise, volume important, architecture énergivore |
| **Cycles concernés** | Cadrage, architecture technique, delivery, observabilité |
| **Livrables** | Hypothèses sobriété, leviers réduction, arbitrages performance/sobriété |
| **Gates Morris** | GO arbitrage sobriété / performance si structurant |
| **Profil probable** | Standard ; Critical si engagement contractuel ou réglementaire |
| **Impact Cycle 3** | Section activable sobriété / impact environnemental |

#### RGPD / conformité

| Champ | Contenu |
|-------|---------|
| **Objectif** | Cadrer données personnelles, obligations, risques de conformité |
| **Déclenchement** | Données personnelles, données sensibles, conservation, transfert, consentement |
| **Cycles concernés** | Cadrage, conception fonctionnelle, sécurité/RSSI, QA |
| **Livrables** | Points de conformité, données concernées, risques, actions / réserves |
| **Gates Morris** | GO arbitrage conformité ou acceptation réserve |
| **Profil probable** | Standard ; Critical si données sensibles ou risque légal |
| **Impact Cycle 3** | Section activable données / conformité / réserve juridique |

#### Accessibilité

| Champ | Contenu |
|-------|---------|
| **Objectif** | Garantir ou évaluer l'accessibilité des parcours et interfaces |
| **Déclenchement** | Interface utilisateur, exigence légale, produit public, demande Morris/client |
| **Cycles concernés** | UX/UI, conception fonctionnelle, QA |
| **Livrables** | Critères accessibilité, écarts, recommandations, preuves QA si applicable |
| **Gates Morris** | GO niveau accessibilité cible si arbitrage coût/scope |
| **Profil probable** | Standard ; Critical si obligation réglementaire forte |
| **Impact Cycle 3** | Section activable accessibilité UX/UI + QA |

#### Performance

| Champ | Contenu |
|-------|---------|
| **Objectif** | Traiter latence, charge, volume, SLA et expérience utilisateur |
| **Déclenchement** | SLA, charge attendue, lenteur constatée, go-live, risque UX ou RUN |
| **Cycles concernés** | Architecture technique, delivery, QA, observabilité/RUN readiness |
| **Livrables** | Hypothèses charge, tests, métriques, réserves, recommandations |
| **Gates Morris** | GO arbitrage performance / coût / délai |
| **Profil probable** | Standard ; Critical si SLA structurant ou prod critique |
| **Impact Cycle 3** | Section activable performance / tests / observabilité |

---

## 5. Cycles obligatoires / activables / transverses

### A. Cycles quasi systématiques

Présents dans **tout projet SFIA significatif** — profondeur variable selon profil :

| Cycle | Justification |
|-------|---------------|
| Cadrage | Sans cadrage, pas d'exécution autonome |
| Conception fonctionnelle | Sans spec, delivery aveugle |
| Backlog / user stories | Découpage livrable |
| Delivery / implémentation | Résultat utile |
| QA / validation | Preuve conformité |
| PR readiness | Contrôle pré-PR |
| Post-merge | Clôture traçable |
| Capitalisation / REX | Quasi systématique sur **cycles significatifs** ; allégée ou skippable sur cycles triviaux |

### B. Cycles activables selon projet

| Cycle | Critère d'activation |
|-------|---------------------|
| UX/UI | Interface utilisateur impactée |
| Architecture fonctionnelle | Complexité fonctionnelle / intégrations |
| Architecture technique | Choix technique / dette |
| Intégration / DevOps | Pipeline, envs, infra |
| Sécurité / RSSI | Données sensibles, surface exposée, conformité |
| Déploiement / release | Mise en production |
| Observabilité / RUN readiness | Exploitation, prod, SLO |

### C. Transverses activables

Méthodologie détaillée : **§4.16**.

| Transverse | Activation |
|------------|------------|
| FinOps | Coût significatif ; optimisation requise |
| GreenOps | Exigence sobriété ; politique entreprise |
| RGPD / conformité | Données personnelles |
| Accessibilité | Exigence légale ou produit |
| Performance | SLA, charge, latence critique |

**Règle :** ne pas rendre tous les cycles obligatoires — activer selon contexte et profil.

---

## 6. Matrice type de cycle projet × profil SFIA

| Type de cycle projet | Light | Standard | Critical | Capitalization |
|----------------------|-------|----------|----------|----------------|
| Cadrage | Rare | **Défaut** | Si arbitrage structurant | Si clôture chantier méthode |
| Conception fonctionnelle | — | **Défaut** | Impact produit structurant | — |
| Architecture fonctionnelle | — | Courant | Structurant, irréversible | — |
| UX/UI | Correction mineure | Parcours courant | Nouveau parcours structurant | — |
| Backlog / user stories | Mise à jour doc | **Défaut** | Priorisation structurante | — |
| Architecture technique | — | Courant | Stack, sécurité, doctrine | — |
| Intégration / DevOps | — | Courant | Prod, sécurité | — |
| Delivery / implémentation | — | **Défaut** | Impact fort, protégé | — |
| QA / validation | Smoke minimal | **Défaut** | Go-live, sécurité | — |
| Sécurité / RSSI | — | Audit léger | **Quasi systématique** si sensible | — |
| Déploiement / release | — | Courant | Production | — |
| Observabilité / RUN | — | Courant | Prod critique | — |
| PR readiness | Doc-only ≤3 fichiers | **Défaut** | Gros diff, protégé | — |
| Post-merge | Trivial (skip OK) | **Défaut** | Complet | — |
| Capitalisation / REX | REX léger | REX standard | Promotion structurante | **Intention** + profondeur selon portée |
| Correction documentaire | **Typique** | Si multi-fichiers | Si doctrine | Si promotion doc |

**Règles de lecture :**

- **Critical ne doit jamais être implicite** — justification par risque, impact, décision structurante ou irréversibilité.
- En cas de doute sans risque structurant : **Standard** (pas Light sauf critères Light évidents).
- **Capitalization** décrit l'intention de capitaliser — combinable avec Light / Standard / Critical selon portée.
- Distinction **Capitalization** (profil) vs **CAPA** (type cycle v2.4) maintenue.

---

## 7. Gates Morris

### 7.1 Gates typiques par phase

| Gate | Moment | Déclencheur |
|------|--------|-------------|
| GO cadrage | Début chantier | Nouveau cycle, périmètre à valider |
| GO conception | Spec fonctionnelle | Arbitrage métier structurant |
| GO architecture structurante | Archi fonc. / tech | Décision difficilement réversible |
| GO UX/UI cible | Design | Parcours structurant |
| GO delivery | Implémentation | Scope élargi, chemins protégés |
| GO validation | QA / recette | Go-live, réserve bloquante |
| GO commit / push / PR | Git | Action Git L0 |
| GO merge | PR | Intégration main |
| GO post-merge | Clôture | Réserve bloquante post-intégration |
| GO capitalisation | REX | Promotion méthode ou doc structurante |
| GO validation baseline | Actation version | v2.5 validable — Cycle 5 uniquement |

### 7.2 Actions nécessitant validation Morris explicite

- `git push`
- Ouverture PR
- Merge
- Suppression de branche (si policy)
- Modification chemins protégés (`.git/`, secrets, `.sfia/` non autorisé, etc.)
- Changement de baseline / actation version
- Relance SFIA 3.0 (Bridge, Runner, Git Reader)
- Automatisation L5 globale
- Promotion Prompt Catalog Validated
- Actation SFIA v2.5 validée

**Morris n'est pas sollicité pour :** wording non structurant ; post-merge Light trivial ; qualification Light évidente.

---

## 8. Articulation avec Cycle 3 (templates / prompts)

Le Cycle 3 produira les **contrats d'exécution Cursor** fondés sur ce document. Exigences de conception :

### 8.1 Structure générique d'un prompt Cursor candidate

| Section | Obligatoire | Détail |
|---------|-------------|--------|
| Objectif | Oui | Un résultat utile identifiable |
| Type de cycle projet | Oui | Valeur de la cartographie §3 |
| Profil SFIA | Oui | Light / Standard / Critical / Capitalization |
| Contexte | Oui | Références, branche, base Git |
| Périmètre | Oui | Fichiers / actions autorisés |
| Hors périmètre | Oui | Fichiers interdits, actions interdites |
| Documents à lire | Selon profil | Matrice profil → lecture (routing §4.4.4) |
| Garde-fous | Oui | Alignés rules & guardrails |
| Stop conditions | Oui | Continue / hypothèse conservatrice / stop Morris |
| Readiness | Oui | **Unique** — proportionnée au profil |
| Rapport Cursor | Oui | Format selon profil |
| Verdict attendu | Oui | READY FOR … |

### 8.2 Stratégie template recommandée (à challenger Cycle 3)

| Option | Description | Avantage | Risque |
|--------|-------------|----------|--------|
| **A — 1 template paramétrable** | Base unique + sections profondeur Light/Standard/Critical | Faible dette doc | Fichier long |
| **B — 3 templates profil** | Light, Standard, Critical séparés | Clarté profil | Redondance |
| **C — Hybride** | 1 base + annexes profil | Compromis | 2–4 fichiers |

**Recommandation candidate :** Option A ou C — **éviter 1 template par type de cycle** (15+ fichiers).

### 8.3 Sections activables (Cycle 3)

À prévoir comme blocs optionnels dans le template (détail transverses : **§4.16**) :

- RSSI / sécurité
- DevOps / intégration
- FinOps
- GreenOps
- RGPD / conformité
- Accessibilité
- Performance
- Capitalization (intention — pas 4e template systématique)

### 8.4 Ce que le Cycle 3 ne doit pas faire sans Cycle 4

- Prouver la proportionnalité (épreuves)
- Promouvoir Prompt Catalog Validated
- Acter v2.5 validée

---

## 9. Anti-patterns

| Anti-pattern | Mitigation |
|--------------|------------|
| Créer un template par cycle trop tôt | Cycle 2 = méthode ; Cycle 3 = templates |
| Confondre cycle projet et profil SFIA | Toujours déclarer les deux dimensions |
| Rendre tous les cycles obligatoires | Classification A / B / C |
| Critical par défaut | Justification explicite ; défaut Standard |
| Automatiser un arbitrage humain | Morris L0 sur gates listés |
| Acter une hypothèse comme décision | Statut candidate explicite |
| Modifier Prompt Catalog avant preuve | Candidate jusqu'à Cycle 4 réussi |
| Valider v2.5 sans épreuves | Cycle 4 obligatoire |
| Relancer SFIA 3.0 implicitement | Gel passif ; stop condition |
| Confondre Capitalization et CAPA | Profil vs type v2.4 |
| Double readiness | Une seule par cycle |
| PR / merge sans GO Morris | Gate L0 |

---

## 10. Critères de sortie du Cycle 2

Le Cycle 2 est réussi si :

| # | Critère | Statut attendu |
|---|---------|----------------|
| 1 | Plan projet réaligné (roadmap Cycles 2–5) | Mergé avec ce document |
| 2 | Méthode des cycles projet créée | Ce document |
| 3 | Cycles cœur couverts | §4.1–4.15 |
| 4 | Transverses activables identifiés + méthodologie courte | §3.2, §4.16, §5.C |
| 5 | Matrice type × profil exploitable | §6 |
| 6 | Gates Morris explicites | §7 |
| 7 | Besoins Cycle 3 définis | §8 |
| 8 | SFIA v2.5 reste candidate | §1 |

---

## Références

| Document | Rôle |
|----------|------|
| `sfia-v2.5-project-plan.md` | Roadmap globale Cycles 0–5 |
| `sfia-chatgpt-cursor-operating-model.md` | §18.2 profils transverses |
| `sfia-cycle-routing-guide.md` | §4.4 routage ; §4.3 v2.4 |
| `sfia-rules-and-guardrails.md` | Garde-fous canoniques |
| `sfia-prompt-generation-engine.md` | Contrat d'exécution |
| `sfia-validation-engine.md` | Validation, readiness |
| `sfia-repository-execution-engine.md` | Git Truth, exécution |
| `prompts/templates/README.md` | Templates existants v1.1 |

---

*SFIA v2.5 — Méthode des cycles projet — candidate — Cycle 2 — non validée comme baseline.*
