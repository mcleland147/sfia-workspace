# SFIA — Realization prompt family

**Type** : Famille de prompts Cursor / ChatGPT  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Draft  
**Branche** : `method/interv360-realization-capitalization`  
**Documents associés** : [`capitalization-plan.md`](capitalization-plan.md), [`realization-method.md`](realization-method.md), [`realization-deliverables-standard.md`](realization-deliverables-standard.md), [`realization-checklists.md`](realization-checklists.md), [`realization-templates.md`](realization-templates.md)

---

## 1. Objectif

Ce document capitalise une famille de prompts réutilisables pour produire les livrables de la méthode SFIA de préparation réalisation.

Ces prompts sont destinés à être utilisés avec Cursor / ChatGPT pour guider la production documentaire.

Ils permettent de produire :

- des plans de cycle ;
- des livrables de fond ;
- des décisions ;
- des checklists ;
- des synthèses ;
- des estimations indicatives ;
- des backlogs préparatoires ;
- des scénarios QA ;
- des scénarios de refus ;
- des synthèses Go / No-go ;
- des PR documentaires ;
- des nettoyages de branche.

Ces prompts **ne constituent pas** une autorisation de coder.

---

## 2. Principes de rédaction des prompts

Les prompts doivent :

- rappeler le workspace local ;
- rappeler le repo ;
- rappeler la branche attendue ;
- rappeler le fichier à créer ;
- lister les documents sources ;
- préciser le contexte ;
- préciser le périmètre ;
- préciser le hors périmètre ;
- interdire les actions prématurées ;
- demander un contrôle secrets ;
- demander un contrôle `git status` ;
- demander un commit local ;
- interdire le push sauf prompt dédié ;
- interdire la PR sauf prompt dédié ;
- interdire le merge sauf prompt dédié ;
- préserver les exports locaux non souhaités ;
- demander un résultat attendu clair.

Chaque prompt doit référencer la méthode (`realization-method.md`), le standard (`realization-deliverables-standard.md`), les checklists (`realization-checklists.md`) et le template applicable (`realization-templates.md`) lorsque pertinent.

---

## 3. Variables communes

| Variable | Description |
|----------|-------------|
| `{workspace_path}` | Chemin local du workspace (ex. `/Users/.../sfia-workspace`) |
| `{repo_name}` | Nom du dépôt Git (ex. `mcleland147/sfia-workspace`) |
| `{branch_name}` | Branche Git de travail du cycle |
| `{base_branch}` | Branche de base (ex. `main`) |
| `{project_name}` | Nom du projet |
| `{project_reference}` | Référence projet (ex. PRJ-XXX) |
| `{phase}` | Phase documentaire (ex. `07-delivery`) |
| `{cycle_name}` | Nom du cycle (ex. Delivery preparation, Technical design) |
| `{increment_id}` | Identifiant de l'incrément (ex. `inc-01`) |
| `{increment_label}` | Libellé de l'incrément |
| `{target_file}` | Chemin du fichier à créer |
| `{source_documents}` | Liste des documents sources à relire |
| `{commit_message}` | Message de commit local attendu |
| `{next_action}` | Prochaine action recommandée |

---

## 4. Prompt générique — Ouverture de cycle

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Ouvrir un cycle documentaire de préparation réalisation |
| **Sortie attendue** | Plan de cycle + branche dédiée + commit local |
| **Template** | `realization-templates.md` §4 — Plan de cycle |

### Instructions Cursor / ChatGPT

```
Objectif :
Ouvrir le cycle {cycle_name} pour {project_name}.

Workspace local :
{workspace_path}

Repo :
{repo_name}

Branche de départ attendue :
{base_branch}

Nouvelle branche à créer :
{branch_name}

Contexte :
Décrire le contexte du cycle et l'incrément cible si applicable :
{increment_id} — {increment_label}

Livrable à créer :
{target_file}

Documents sources à relire :
{source_documents}

Méthode / standard / checklists :
- method/interv360-realization/realization-method.md
- method/interv360-realization/realization-deliverables-standard.md
- method/interv360-realization/realization-checklists.md
- method/interv360-realization/realization-templates.md

Important :
Ce cycle est documentaire. Il ne donne pas l'autorisation de coder.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier l'état Git (branche, status, log).
2. Créer la branche {branch_name} depuis {base_branch}.
3. Créer {target_file} à partir du template plan de cycle.
4. Contrôle secrets sur le fichier créé.
5. git status — ne pas ajouter les exports locaux non souhaités.
6. Commit local : {commit_message}
7. Ne pas push. Ne pas créer de PR. Ne pas merger.

Résultat attendu :
Afficher branche courante, fichier créé, garde-fous, scan secrets OK,
commit local créé, confirmation exports/ non commité, prochaine action : {next_action}
```

---

## 5. Prompt générique — Livrable de fond

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire un livrable de fond structurant |
| **Sortie attendue** | Fichier markdown complet + commit local |
| **Template** | `realization-templates.md` §5 — Livrable de fond |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer le livrable {target_file} pour {project_name} — {increment_id} {increment_label}.

Workspace local :
{workspace_path}

Repo :
{repo_name}

Branche attendue :
{branch_name}

Cycle :
{cycle_name}

Documents sources à relire :
{source_documents}

Contenu attendu :
Produire un livrable de fond générique avec les sections obligatoires :
1. Objectif
2. Sources
3. Périmètre
4. Hors périmètre
5. Analyse / contenu structurant
6. Décisions prises
7. Décisions non prises
8. Risques / points d'attention
9. Garde-fous
10. Critères de sortie
11. Prochaine action

Critères de cohérence :
- rester générique ; ne pas imposer des spécificités d'un autre projet ;
- distinguer décisions, hypothèses et garde-fous ;
- ne pas recopier les sources — extraire et structurer ;
- ne pas donner d'autorisation de code.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier branche et état Git.
2. Relire les sources listées.
3. Créer {target_file} selon le template livrable de fond.
4. Contrôle secrets.
5. git status — exclure exports locaux non souhaités.
6. Commit local : {commit_message}
7. Ne pas push. Ne pas créer de PR. Ne pas merger.

Résultat attendu :
Afficher fichier créé, sections produites, cohérence vérifiée, commit local, {next_action}
```

---

## 6. Prompt générique — Décision

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire un document de décision |
| **Sortie attendue** | Comparaison d'options + recommandation + commit local |
| **Template** | `realization-templates.md` §6 — Décision |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer le document de décision {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Sujet de décision :
Décrire la décision à prendre (stack, front/back, structure, API, data, etc.).

Options à étudier :
Lister les options à comparer (minimum 2).

Documents sources :
{source_documents}

Sections obligatoires :
- objectif ; contexte ; options étudiées ; critères de décision ;
- décision recommandée ; justification ; conditions d'application ;
- risques ; décisions non prises ; garde-fous ; critères de sortie ; prochaine action.

Important :
- formuler une recommandation indicative si la décision finale n'est pas encore prise ;
- ne pas transformer une hypothèse en arbitrage définitif sans justification ;
- ne pas donner d'autorisation implicite de code si le cycle est documentaire.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git.
2. Relire sources et décisions amont.
3. Créer {target_file}.
4. Contrôle secrets. Commit : {commit_message}
5. Ne pas push / PR / merge.

Résultat attendu :
Options comparées, recommandation formulée, décisions non prises visibles, {next_action}
```

---

## 7. Prompt générique — Checklist

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire une checklist de readiness ou avant code |
| **Sortie attendue** | Checklist + conditions bloquantes + commit local |
| **Template** | `realization-templates.md` §7 — Checklist |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer la checklist {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Cycle :
{cycle_name}

Sources :
{source_documents}

Contenu attendu :
- objectif de la checklist ;
- checklist principale (cases à cocher) ;
- conditions bloquantes ;
- décisions possibles (Go documentaire, prolongation, No-go, etc.) ;
- garde-fous ;
- critères de sortie ;
- prochaine action.

Important :
- distinguer readiness documentaire et autorisation de code ;
- une checklist satisfaite ne signifie pas Go réalisation ;
- ne pas imposer des critères métier propres à un autre projet.

Référence :
method/interv360-realization/realization-checklists.md — section de phase applicable.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git. 2. Relire sources. 3. Créer {target_file}.
4. Contrôle secrets. 5. Commit : {commit_message}
6. Ne pas push / PR / merge.

Résultat attendu :
Checklist produite, blocages listés, distinction readiness/autorisation confirmée, {next_action}
```

---

## 8. Prompt générique — Synthèse de cycle

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Clôturer un cycle documentaire |
| **Sortie attendue** | Synthèse + statut recommandé + commit local |
| **Template** | `realization-templates.md` §8 — Synthèse de cycle |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer la synthèse de cycle {target_file} pour {cycle_name} — {project_name}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Incrément :
{increment_id} — {increment_label}

Sources / livrables du cycle :
{source_documents}

Sections obligatoires :
- objectif ; décision de clôture ; statut recommandé ;
- livrables produits ; décisions prises ; décisions non prises ;
- readiness actuelle ; conditions bloquantes restantes ;
- garde-fous ; recommandation de suite ; décision PR ; critères de sortie.

Statut recommandé :
Formuler un statut générique (ex. Ready for delivery detailing, Ready for technical design,
Ready for explicit implementation go/no-go decision).

Important :
- la synthèse ne lance pas l'étape suivante automatiquement ;
- distinguer Go documentaire et Go réalisation si applicable ;
- lister explicitement ce qui n'a pas été décidé.

Checklist avant synthèse :
method/interv360-realization/realization-checklists.md — phase + garde-fous + qualité documentaire.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git et livrables du cycle.
2. Appliquer les checklists de phase.
3. Créer {target_file}.
4. Contrôle secrets. Commit : {commit_message}
5. Ne pas push / PR / merge sauf demande explicite ultérieure.

Résultat attendu :
Décision de clôture, statut recommandé, livrables listés, PR possible ou non, {next_action}
```

---

## 9. Prompt générique — Estimation indicative

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire une estimation indicative non contractuelle |
| **Sortie attendue** | Estimation par domaines/séquences + commit local |
| **Template** | `realization-templates.md` §9 — Estimation indicative |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer l'estimation indicative {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Sources :
{source_documents}

Contenu attendu :
- objectif (estimation indicative, non contractuelle) ;
- hypothèses ; domaines estimés ; séquences ou lots estimés ;
- risques d'estimation ; éléments non couverts ;
- garde-fous : pas d'engagement charge, pas d'engagement date, pas de sprint plan ferme.

Important :
- utiliser des niveaux de complexité relatifs (faible / moyenne / élevée) ;
- ne pas présenter l'estimation comme un engagement ;
- ne pas créer de planning opérationnel fermé.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git. 2. Relire sources (slicing, stories, cadrage technique).
3. Créer {target_file}. 4. Contrôle secrets. 5. Commit : {commit_message}

Résultat attendu :
Estimation indicative produite, caractère non contractuel confirmé, {next_action}
```

---

## 10. Prompt générique — Backlog préparatoire

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Structurer un backlog documentaire avant tickets réels |
| **Sortie attendue** | Backlog préparatoire + mapping QA/refus + commit local |
| **Template** | `realization-templates.md` §10 — Backlog préparatoire |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer le backlog préparatoire {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Sources :
{source_documents}

Contenu attendu :
- principes : backlog documentaire, priorités indicatives ;
- tableau backlog (ID, priorité, thème, description, dépendances) ;
- mapping avec scénarios QA / refus ;
- éléments non transformés en tickets ;
- garde-fous.

Important :
- ne pas créer de tickets Jira réels ;
- ne pas produire de sprint plan ferme ;
- le backlog prépare la réalisation, il ne la déclenche pas.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git. 2. Relire stories, slicing, QA/refus si disponibles.
3. Créer {target_file}. 4. Contrôle secrets. 5. Commit : {commit_message}

Résultat attendu :
Backlog préparatoire structuré, mapping QA/refus, pas de tickets réels, {next_action}
```

---

## 11. Prompt générique — Scénarios QA

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire des scénarios QA nominaux documentaires |
| **Sortie attendue** | Scénarios testables + couverture + commit local |
| **Template** | `realization-templates.md` §11 — Scénarios QA |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer les scénarios QA {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Sources :
{source_documents}

Contenu attendu :
- scénarios nominaux (ID, objectif, préconditions, étapes, résultat attendu) ;
- tableau de couverture ;
- données fictives si nécessaire, clairement identifiées ;
- garde-fous : pas de tests automatisés par défaut.

Important :
- résultats attendus testables au niveau métier ;
- ne pas implémenter de logique technique ;
- ne pas généraliser des parcours propres à un autre projet comme règle universelle.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git. 2. Relire user stories, critères d'acceptation, données démo.
3. Créer {target_file}. 4. Contrôle secrets. 5. Commit : {commit_message}

Résultat attendu :
Scénarios nominaux produits, couverture documentée, {next_action}
```

---

## 12. Prompt générique — Scénarios de refus

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire des scénarios de refus métier et cas limites |
| **Sortie attendue** | Refus documentés + couverture + commit local |
| **Template** | `realization-templates.md` §12 — Scénarios de refus |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer les scénarios de refus {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Sources :
{source_documents}

Contenu attendu :
- scénarios de refus (ID, refus/cas limite, préconditions, comportement attendu) ;
- préciser état inchangé ou changement attendu ;
- tableau de couverture ;
- garde-fous : pas d'implémentation technique.

Important :
- refus métier explicites, pas de code ;
- couvrir les préconditions et comportements attendus ;
- s'appuyer sur les règles métier du projet, pas sur un catalogue externe imposé.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git. 2. Relire critères d'acceptation, règles métier, QA nominale.
3. Créer {target_file}. 4. Contrôle secrets. 5. Commit : {commit_message}

Résultat attendu :
Scénarios de refus produits, couverture documentée, {next_action}
```

---

## 13. Prompt générique — Go / No-go

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire une synthèse Go / No-go réalisation |
| **Sortie attendue** | Décision explicite + autorisation ou refus de code + commit local |
| **Template** | `realization-templates.md` §13 — Go / No-go summary |

### Instructions Cursor / ChatGPT

```
Objectif :
Créer la synthèse Go / No-go {target_file} pour {project_name} — {increment_id}.

Workspace :
{workspace_path}

Branche :
{branch_name}

Sources :
{source_documents}

Sections obligatoires :
- décision finale unique (Go réalisation / No-go / Go partiel / Go documentaire prolongé) ;
- autorisation de code : donnée / refusée / partielle / non donnée — formulation EXPLICITE ;
- conditions validées ; conditions restantes / blocages ;
- limites de la décision ; garde-fous ; prochaine action.

Important :
- interdire toute formulation ambiguë du type « Go » non qualifié ;
- si autorisation refusée, le dire explicitement ;
- No-go et prolongation documentaire sont des sorties valides ;
- ne pas créer de projet applicatif dans ce prompt sauf autorisation explicite séparée.

Checklist :
method/interv360-realization/realization-checklists.md §9 et §13.

Garde-fous :
[Insérer le bloc §18 — Garde-fous communs]

Étapes :
1. Vérifier Git. 2. Relire checklist avant code et livrables amont.
3. Créer {target_file}. 4. Contrôle secrets. 5. Commit : {commit_message}

Résultat attendu :
Décision unique formulée, autorisation de code explicite ou refusée, aucune ambiguïté, {next_action}
```

---

## 14. Prompt générique — PR documentaire

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Préparer une PR documentaire de clôture de cycle |
| **Sortie attendue** | Push + PR ou URL manuelle — pas de merge auto |

### Instructions Cursor / ChatGPT

```
Objectif :
Préparer la PR documentaire de clôture du cycle {cycle_name} pour {project_name}.

Workspace :
{workspace_path}

Repo :
{repo_name}

Branche :
{branch_name}

Base :
{base_branch}

Titre PR suggéré :
[À adapter — ex. Prepare {project_name} {cycle_name} decision]

Corps PR :
Résumer : objectif du cycle, livrables ajoutés, décisions, exclusions,
garde-fous, statut recommandé, prochaine étape. Préciser que la PR
ne donne pas d'autorisation de code si cycle documentaire.

Étapes :
1. Vérifier branche courante et git status.
2. git diff --name-only {base_branch}...HEAD — uniquement fichiers attendus.
3. Contrôle secrets sur tous les fichiers du diff.
4. Vérifier absence de exports locaux, code, secrets, projet applicatif.
5. git push -u origin {branch_name} si tout est OK.
6. Créer PR avec gh si disponible, sinon afficher URL compare manuelle.
7. Ne pas merger automatiquement. Ne pas supprimer la branche.

Checklist :
method/interv360-realization/realization-checklists.md §12 — PR documentaire.

Résultat attendu :
Fichiers du cycle listés, secrets OK, push réalisé, PR créée ou URL manuelle,
confirmation aucun merge effectué.
```

---

## 15. Prompt générique — Nettoyage branche

### Métadonnées

| Élément | Contenu |
|---------|---------|
| **Objectif** | Nettoyer une branche mergée et resynchroniser main |
| **Sortie attendue** | main à jour, branche supprimée, exports locaux préservés |

### Instructions Cursor / ChatGPT

```
Objectif :
Nettoyer la branche {branch_name} maintenant mergée dans {base_branch}.

Workspace :
{workspace_path}

Repo :
{repo_name}

Contexte :
La PR de clôture du cycle {cycle_name} a été mergée manuellement.

Important :
- ne pas supprimer les fichiers locaux non suivis utiles (ex. exports design) ;
- ne pas commiter les exports non souhaités ;
- ne pas ouvrir automatiquement un nouveau cycle ;
- ne pas merger automatiquement.

Étapes :
1. Vérifier état Git actuel.
2. git checkout {base_branch}
3. git pull origin {base_branch}
4. Vérifier merge visible dans git log.
5. git branch -d {branch_name} (ne pas forcer sans confirmation si refus).
6. git push origin --delete {branch_name} (non bloquant si déjà supprimée).
7. Vérifier état final : branche courante, branches locales, status, log.

Résultat attendu :
{base_branch} synchronisée, merge visible, branche locale/dist supprimée ou statut,
working tree propre ou exports untracked uniquement, prochaine action possible indiquée
sans l'exécuter automatiquement.
```

---

## 16. Règles d'adaptation des prompts

| Règle | Application |
|-------|-------------|
| **Chemins** | Adapter `{workspace_path}`, `{target_file}` et `{source_documents}` aux conventions du repo |
| **Branches** | Nommer selon le cycle : `delivery/<projet>-<cycle>`, `method/<projet>-<cycle>` |
| **Sources** | Lister uniquement les documents réellement disponibles pour le projet |
| **Livrables** | Aligner sur `realization-deliverables-standard.md` pour la phase concernée |
| **Garde-fous** | Enrichir selon le contexte, jamais retirer les garde-fous code |
| **Cycles documentaires** | Ne jamais demander de créer du code, API, SQL, tests ou tickets réels |
| **Hypothèses** | Ne jamais transformer une hypothèse en décision dans le prompt ou le livrable |
| **Autorisation** | Ne jamais laisser une autorisation implicite — toujours explicite ou refusée |
| **Résultat** | Toujours demander un résultat attendu structuré en fin de prompt |
| **Spécificités projet** | Documenter les statuts, flux et données propres au projet sans les universaliser |

---

## 17. Anti-patterns de prompts

| Anti-pattern | Risque | Correction |
|--------------|--------|------------|
| « Continue tout seul » | Dérive de périmètre, actions non contrôlées | Décomposer en étapes numérotées avec garde-fous et résultat attendu |
| « Crée le projet » dans un cycle documentaire | Projet applicatif prématuré | Limiter à structure documentaire ; création réelle uniquement après Go explicite |
| « Génère l'API » avant décision | Implémentation prématurée | Demander stratégie API documentaire uniquement |
| « Mets les tickets Jira » avant Go | Engagement opérationnel prématuré | Backlog préparatoire documentaire uniquement |
| « Fais un sprint plan » avant autorisation | Planning fermé prématuré | Planification indicative uniquement |
| « Merge automatiquement » | Perte de contrôle revue | Merge manuel après revue explicite |
| « Ignore les exports » | Commit involontaire de fichiers locaux | Ne pas ajouter exports/ ; ne pas supprimer sans demande |
| « Go » sans qualifier | Confusion documentaire / réalisation | Toujours qualifier : Go documentaire, Go réalisation, No-go, etc. |
| « Choisis la stack » sans critères | Décision arbitraire | Exiger comparaison d'options et critères de décision |
| « Implémente pour avancer » | Code non autorisé | Rappeler que la préparation documentaire suffit pour la phase |

---

## 18. Garde-fous communs à réutiliser

Bloc réutilisable à insérer dans chaque prompt de cycle documentaire :

```
Garde-fous :
- Ne pas créer de code.
- Ne pas créer de projet applicatif.
- Ne pas créer de dossier applicatif réel.
- Ne pas initialiser de framework.
- Ne pas installer de dépendances.
- Ne pas créer d'API.
- Ne pas créer d'OpenAPI.
- Ne pas créer de payload JSON.
- Ne pas créer de SQL.
- Ne pas créer de tests automatisés.
- Ne pas créer de scripts.
- Ne pas créer de tickets Jira réels.
- Ne pas créer de sprint plan ferme.
- Ne pas modifier Figma / Penpot / exports PNG sans demande explicite.
- Ne pas commiter les exports locaux non souhaités.
- Ne pas push sauf demande explicite.
- Ne pas créer de PR sauf demande explicite.
- Ne pas merger automatiquement.
```

---

## 19. Décisions retenues

| Décision | Statut |
|----------|--------|
| Famille de prompts générique retenue | ✅ |
| Prompts par type de livrable retenus | ✅ |
| Prompts PR et nettoyage retenus | ✅ |
| Variables communes retenues | ✅ |
| Garde-fous communs retenus | ✅ |
| Anti-patterns documentés | ✅ |
| Adaptation projet obligatoire | ✅ |
| Contrôle secrets systématique | ✅ |
| Contrôle git systématique | ✅ |
| Autorisation de code jamais implicite | ✅ |

---

## 20. Critères de sortie

- [x] principes de prompts définis ;
- [x] variables communes définies ;
- [x] prompt ouverture de cycle défini ;
- [x] prompt livrable de fond défini ;
- [x] prompt décision défini ;
- [x] prompt checklist défini ;
- [x] prompt synthèse défini ;
- [x] prompt estimation défini ;
- [x] prompt backlog défini ;
- [x] prompt QA défini ;
- [x] prompt refus défini ;
- [x] prompt Go / No-go défini ;
- [x] prompt PR documentaire défini ;
- [x] prompt nettoyage branche défini ;
- [x] règles d'adaptation définies ;
- [x] anti-patterns définis ;
- [x] garde-fous communs définis ;
- [x] décisions retenues listées.

---

## 21. Prochaine action

Le prochain livrable est :

**`capitalization-summary.md`**

Objectif :
Synthétiser la capitalisation et préparer la PR de clôture.
