# SFIA Studio V2-A2 — PR Readiness — Review Pack FULL

| Champ | Valeur |
|---|---|
| Date / heure / fuseau | 2026-07-30 00:37:06 CEST (+0200) |
| Repository | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Cycle | 13 — PR readiness |
| Profil | Standard |
| Profondeur | Standard renforcé |
| Typologie | EVOL |
| Gate consommé | `GO PR READINESS SFIA STUDIO V2-A2 CREATE PROJECT UI` |
| Review pack | FULL, mono-cycle |
| Modification projet par ce cycle | aucune |
| Verdict unique | **NOT READY FOR PR** |

## 1. Objectif et résultat

Le cycle a audité la branche locale
`delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` avant tout push
ou création de pull request vers `main`.

Le code, les tests, le build, les frontières client/server et le parcours
runtime sont conformes au lot annoncé. Le diff contient exactement les douze
fichiers et les trois commits attendus. Une erreur architecturale matérielle
dans le README tracké bloque néanmoins la readiness :

```text
README ligne 58 :
T-A0 Project + T-A1 initial LPS

Architecture exacte :
T-A0 = résolution du package de doctrine
T-A1 = création atomique Project + Living Project State initial
```

Cette condition est explicitement bloquante dans le contrat du cycle. Aucune
correction n'a été appliquée, conformément au périmètre read-only.

Verdict unique :

`NOT READY FOR PR`

## 2. Local Git Truth Check

État initial vérifié avant la revue :

```text
pwd
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge

remote
origin https://github.com/mcleland147/sfia-workspace.git

branch
delivery/sfia-studio-visible-slice-v2-a2-create-project-ui

HEAD
d7126be51365c9687939dc021ed9ce3a1ebacc77

status
?? .tmp-sfia-review/

staged
[vide]
```

- tracked working tree : propre ;
- stage : vide ;
- seuls artefacts non trackés : `.tmp-sfia-review/**` ;
- trois preuves sous `.tmp-sfia-review/evidence/v2-a2/` conservées ;
- `git fetch origin --prune` : succès ;
- `origin/main` :
  `169e1a71fcd8625ff87565c1b7112d63d9044492` ;
- merge-base :
  `169e1a71fcd8625ff87565c1b7112d63d9044492` ;
- ahead/behind : `0 3` ;
- upstream projet : aucun ;
- branche distante projet : absente ;
- PR existante avec cette head : aucune ;
- aucune opération destructive, aucun checkout de `main`, aucun push projet,
  aucune création de PR.

## 3. Git Review Index

| Champ | Valeur |
|---|---|
| Base branch | `origin/main` |
| Base SHA | `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| Branche | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| HEAD avant | `d7126be51365c9687939dc021ed9ce3a1ebacc77` |
| HEAD après revue | `d7126be51365c9687939dc021ed9ce3a1ebacc77` |
| Commits audités | `8ce9391`, `58141b2`, `d7126be` |
| Fichiers audités | 12/12 |
| Diff stat | 12 fichiers, 1798 insertions, 36 suppressions |
| Stage initial / final | vide / vide |
| Tracked initial / final | propre / propre |
| Validations | ciblées, suite complète, typecheck, lint, build, diff check, runtime |
| Captures | 3 PNG, 1440×1024 |
| Réserves bloquantes | README T-A0/T-A1 incorrect |
| Décision Morris requise | autorisation d'un cycle correctif avant nouveau PR readiness |
| Review pack | full |
| Verdict | **NOT READY FOR PR** |

### Diff stat

```text
.../sfia-studio/app/__tests__/increment-a.test.tsx |   7 +-
.../sfia-studio/app/__tests__/increment-b.test.tsx |   7 +-
.../importBoundaries.test.ts                       |  43 +-
.../vertical-slice-ui/createProjectUi.test.tsx     | 461 +++++++++++++++
.../app/app/studio/projects/new/page.tsx           |  43 ++
.../app/components/shell/StudioShell.tsx           |  33 +-
.../sfia-studio/app/components/shell/Topbar.tsx    |  62 ++-
.../vertical-slice-ui/CreateProjectForm.tsx        | 619 +++++++++++++++++++++
.../vertical-slice-ui/RuntimeDisclosureBanner.tsx  |  58 ++
.../vertical-slice-ui/create-project.module.css    | 290 ++++++++++
projects/sfia-studio/app/lib/navigation.ts         |  21 +-
.../README.md                                      | 190 +++++++
12 files changed, 1798 insertions(+), 36 deletions(-)
```

### Diff name-status

```text
M projects/sfia-studio/app/__tests__/increment-a.test.tsx
M projects/sfia-studio/app/__tests__/increment-b.test.tsx
M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
A projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
A projects/sfia-studio/app/app/studio/projects/new/page.tsx
M projects/sfia-studio/app/components/shell/StudioShell.tsx
M projects/sfia-studio/app/components/shell/Topbar.tsx
A projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
A projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
A projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
M projects/sfia-studio/app/lib/navigation.ts
A projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md
```

## 4. Historique et granularité des commits

### Trajectoire amont

Les PR #287 à #293 sont `MERGED` dans `main`. Les merge commits suivants sont
des ancêtres de `origin/main` :

```text
#287 770605bcfa4cc3e403ee2c4615c1a115ccd38458
#288 a10543143f88ac3bd886c717d49e2d6163c6b360
#289 bddfc6ac821b5684cd4b611d397596aa8e310802
#290 1068ddb37dd8eb9e94c2fca9963fe32ad79a801f
#291 7916066310777abce4fd5a64ff0c87759c375fd6
#292 634a7fb0cc2e202e7530eda940fb421f1c17eade
#293 169e1a71fcd8625ff87565c1b7112d63d9044492
```

### Commit 1 — feature

`8ce93917543fab5b4b4ab7ace020ff72266b5ec3`

`feat(sfia-studio): add V2-A2 create project UI`

- sept fichiers ;
- route, formulaire, disclosures, CSS, navigation, StudioShell et Topbar ;
- responsabilité cohérente ;
- aucun test, document projet ou fichier protégé mélangé.

### Commit 2 — tests

`58141b2c1697f51f61618229d5d670dced549cb3`

`test(sfia-studio): validate V2-A2 create project UI`

- quatre fichiers ;
- tests UI, accessibilité, frontières et deux assertions historiques ;
- responsabilité cohérente ;
- aucun changement de production mélangé.

### Commit 3 — documentation

`d7126be51365c9687939dc021ed9ce3a1ebacc77`

`docs(sfia-studio): document V2-A2 create project UI`

- un README créé ;
- responsabilité documentaire cohérente ;
- ce commit contient cependant l'erreur architecturale bloquante.

### Conclusion de granularité

- trois commits présents et ordonnés comme attendu ;
- messages cohérents ;
- aucun fixup, squash temporaire ou commit parasite ;
- séparation feature / tests / documentation réelle ;
- aucun squash ou découpage supplémentaire recommandé par défaut ;
- une correction documentaire est requise avant PR, sans réécriture
  automatique dans ce cycle.

## 5. Sources consultées

### Méthode

- `prompts/templates/sfia-cycle-execution-template.md` :
  truth check, cycle 13, review pack FULL, handoff L3 ;
- `prompts/templates/2026-07-04-05-validate-pr-readiness.md` :
  décision unique de readiness et interdiction de créer la PR ;
- `prompts/templates/README.md` :
  index des templates ;
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` :
  §5.9 PR readiness et références obligatoires ;
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` :
  séparation recommandation / exécution / décision humaine ;
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` :
  push, PR, protected paths et handoff ;
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` :
  §12 et §12.5 ;
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` :
  §4.13 ;
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` :
  fallback CKC cycle 13, guidance candidate sans autorité ;
- `docs/architecture/sfia-delivery-pipeline.md` et
  `docs/architecture/2026-06-27-sfia-decision-engine.md` :
  preuves, réserves et décision humaine ;
- `scripts/sfia/README.md` :
  publisher canonique.

Observation méthode non bloquante : `prompts/templates/README.md` référence
encore `05-validate-pr-readiness.md`, tandis que le routing guide pointe vers
le fichier existant
`prompts/templates/2026-07-04-05-validate-pr-readiness.md`. Aucun fichier
méthode n'a été modifié.

### Handoff delivery précédent

- branche : `sfia/review-handoff` ;
- fichier :
  `sfia-review-handoff/latest-chatgpt-review.md` ;
- commit vérifié :
  `3f5b1aa13b7884d038b0de949a6a925f3392c362`.

L'ancien handoff répétait lui aussi l'attribution inexacte
`T-A0 Project + T-A1 LPS`. L'erreur est bloquante ici parce qu'elle est aussi
présente dans le README tracké de la branche.

### Projet

- README V2-A2 ;
- README V2-A1 runtime bridge ;
- composition V1 locale ;
- diff global et patch complet des trois commits ;
- douze fichiers modifiés/créés et leurs call sites ;
- contrats V1 et V2-A1 en lecture seule ;
- trois captures temporaires.

## 6. Revue des douze fichiers

### 1. `app/__tests__/increment-a.test.tsx`

- rôle : non-régression mapping/fixtures et écrans POC ;
- changement : rail partagé attendu à cinq routes, fixture-only à quatre ;
- justification : accepte `/studio/projects/new` sans élargir le set POC ;
- périmètre : autorisé explicitement par Morris ;
- risque : faible ;
- tests : 8/8 ciblés et suite complète ;
- réserve : aucune.

### 2. `app/__tests__/increment-b.test.tsx`

- rôle : non-régression adapter/harness et routes POC ;
- changement : même régularisation du rail à cinq routes ;
- justification : distingue route réelle V2-A2 et routes fixture ;
- périmètre : autorisé explicitement ;
- risque : faible ;
- tests : 6/6 ciblés et suite complète ;
- réserve : aucune.

### 3. `app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

- rôle : garde-fou des frontières runtime/UI/core ;
- changement : autorise exactement `actions` pour le client et
  `disclosures` pour le composant serveur ; interdit les internes ;
- justification : wiring V2-A2 borné ;
- périmètre : seul fichier runtime autorisé dans le diff ;
- risque : faible ; inspection du patch confirme que les correspondances
  `fetch`/storage vues au grep appartiennent au test de frontière ;
- tests : 5/5 ciblés ;
- réserve : aucune.

### 4. `app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`

- rôle : couverture fonctionnelle, shell, ARIA et axe ;
- changement : onze tests ;
- justification : validation, DTO, idempotence, pending, erreurs, succès,
  rétrocompatibilité shell et accessibilité ;
- périmètre : conforme ;
- risque : faible ;
- tests : 11/11 ;
- réserve : le test axe désactive `color-contrast` sous jsdom ; revue visuelle
  complémentaire effectuée.

### 5. `app/app/studio/projects/new/page.tsx`

- rôle : route App Router V2-A2 ;
- changement : compose shell flush, disclosures et formulaire ;
- justification : première UI réelle Project/LPS ;
- périmètre : conforme au namespace `/studio/projects/*` ;
- risque : faible ;
- tests : build route + UI + runtime frais ;
- réserve : aucune.

### 6. `app/components/shell/StudioShell.tsx`

- rôle : shell partagé ;
- changement : `StudioShellRoute`, `showTabs`, `primaryAction` ;
- justification : masquer tabs/CTA uniquement pour V2-A2 ;
- rétrocompatibilité : defaults historiques conservés ;
- risque : faible ; les casts vers `StudioRoute` sont techniquement
  évitables mais le rail compare les valeurs runtime correctement ;
- tests : test shell dédié + suite POC ;
- réserve : dette de typage mineure non bloquante, sans défaut runtime observé.

### 7. `app/components/shell/Topbar.tsx`

- rôle : H1, statuts, tabs et CTA ;
- changement : options de visibilité et action configurable/null ;
- justification : topbar V2-A2 sans détour D1 ;
- rétrocompatibilité : `undefined` conserve « Nouvelle demande » et
  `showTabs=true` conserve les tabs ;
- risque : faible ;
- tests : shell compatibility + suite complète ;
- réserve : aucune.

### 8. `app/features/vertical-slice-ui/CreateProjectForm.tsx`

- rôle : formulaire client, validation UX, Server Action et projection ;
- changement : champs, clé idempotente, erreurs, pending, succès inline ;
- justification : expose le runtime réel sans cache UI ni D1 ;
- frontières : seul import runtime de valeur =
  `vertical-slice-runtime/actions` ;
- fonctionnel : maxima 200/64/500, criticité, lignes vides filtrées, retry
  stable, reset renouvelant la clé ;
- accessibilité : labels, required/invalid/describedby, focus, live regions,
  busy et disabled ;
- tests : onze tests UI + runtime frais ;
- réserve mineure : `key={constraint}` n'est pas unique si l'utilisateur
  saisit deux contraintes identiques, cas autorisé par V1. Cela peut produire
  un warning React et fragiliser la réconciliation de la liste.

### 9. `app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx`

- rôle : composant serveur des disclosures ;
- changement : affiche runtime, persistance, agent, readiness et anti-claims ;
- justification : contrat V2-A1 visible avant et après création ;
- frontières : seul import runtime =
  `vertical-slice-runtime/disclosures` ;
- risque : faible ;
- tests : rendu UI, axe et runtime ;
- réserve : aucune.

### 10. `app/features/vertical-slice-ui/create-project.module.css`

- rôle : styles bornés de la route ;
- changement : formulaires, erreurs, focus, résultats et disclosures ;
- justification : réemploi des tokens `--sfia-*` ;
- périmètre : aucun token ou shell global modifié ;
- risque : faible ;
- tests : build, lint, captures 1440×1024 ;
- réserve : responsive 390 px hors lot, dette préexistante du shell fixe.

### 11. `app/lib/navigation.ts`

- rôle : routes shell, rail et tabs ;
- changement : `StudioShellRoute` ajoute `/studio/projects/new` sans modifier
  `StudioRoute` legacy ;
- justification : préserve l'exhaustivité de `vertical-slice/mapping.ts` ;
- risque : faible ;
- tests : increment A/B et shell ;
- réserve : aucune.

### 12. README V2-A2

Chemin :
`projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md`

- rôle : trace de delivery, architecture, limites, preuves et prochain gate ;
- changement : document de 190 lignes ;
- justification : documentation du lot ;
- périmètre : conforme ;
- risque : **bloquant** ;
- tests associés : cohérence documentaire manuelle contre V1/V2-A1 ;
- réserve : ligne 58 attribue Project à T-A0 et LPS à T-A1. La composition
  réelle résout la doctrine en T-A0 puis crée Project + LPS en T-A1.

## 7. Findings defect-first

### [P1] Corriger l'attribution T-A0/T-A1 — README.md:58

Le diagramme tracké affirme `T-A0 Project + T-A1 initial LPS`. V1 montre que
T-A0 résout le package de doctrine et que T-A1 crée Project et son LPS initial.
Le document de branche déforme donc une frontière d'architecture centrale.
La stop condition Morris impose `NOT READY FOR PR` tant que cette formulation
matérielle n'est pas corrigée.

### [P3] Utiliser une clé unique pour les contraintes — CreateProjectForm.tsx:174-176

V1 autorise deux contraintes textuellement identiques, mais le rendu utilise
le texte seul comme clé React. Deux lignes identiques produisent des clés
dupliquées et un warning React ; une clé composite avec l'index éviterait
cette ambiguïté. Ce défaut est mineur mais actionnable.

## 8. Chemins protégés et architecture

Absence de modification confirmée dans :

- `app/lib/vertical-slice-core/**` ;
- tous les contrats et implémentations V2-A1, y compris `actions.ts`,
  `disclosures.ts`, `types.ts`, `mapping.ts`, `service.ts`, `singleton.ts`,
  `paths.ts`, `serverGuard.ts`, `index.ts` ;
- OA, D1, platform, harness, OPS1 et agents ;
- `app/app/projects/**` ;
- tokens et shell CSS ;
- package manifests et lockfiles ;
- `.github/**`, prompts, méthode, foundation, architecture ;
- migrations, schemas, Figma, environnement et secrets.

Architecture vérifiée :

```text
UI
→ createProjectRuntimeAction
→ RuntimeApplicationService V2-A1
→ LocalProjectFacade V1
→ T-A0 résolution doctrine
→ T-A1 création Project + LPS
→ projection sérialisable locale inline
```

- aucune API route ;
- aucun `fetch` ;
- aucun browser storage ;
- aucun wiring D1 ;
- aucun import UI du core ou des internes runtime ;
- aucune fixture, harness, OPS1 ou agent dans V2-A2 ;
- V1 et V2-A1 inchangés.

## 9. Fonctionnel, accessibilité et anti-claims

### Fonctionnel

- champs requis : name, objective, context ;
- maxima cohérents : name 200, short reference 64, contraintes 500 par ligne ;
- criticité LOW/STANDARD/HIGH présentée comme qualification ;
- lignes vides de contraintes filtrées ;
- clé idempotente stable au retry et renouvelée après reset post-succès ;
- erreurs `INPUT_INVALID` et `DOCTRINE_UNRESOLVED` mappées sans fuite de
  chemin local ;
- succès inline sans redirection D1 ;
- `REAL_LOCAL_CORE`, `fixture=false`, doctrine et LPS affichés.

### Accessibilité

- H1 shell puis H2/H3 ;
- labels explicites ;
- required et `aria-required` ;
- `aria-invalid` et `aria-describedby` ;
- `role=status`, `aria-live`, `role=alert` ;
- `aria-busy` et bouton disabled pendant submit ;
- focus transféré au premier champ invalide ;
- focus visible dans la capture erreur ;
- statuts textuels, pas uniquement colorés ;
- navigation clavier native ;
- axe : aucune violation serious/critical, contraste automatisé non disponible
  sous jsdom et revu visuellement.

### Anti-claims

Aucun claim :

- HARD CLOSED ;
- T-A6 COMPLETE ;
- RUN READY ;
- PRODUCT READY ;
- identité Morris authentifiée ;
- persistance durable ;
- agent actif ;
- delivery ou cutover autorisé ;
- alignement Figma pixel-perfect.

## 10. QA fraîche

La première commande littérale demandée,
`npm run test -- app/__tests__/vertical-slice-ui`, a été lancée depuis
`projects/sfia-studio/app`. Ce préfixe dupliqué ne correspond à aucun test
pour la configuration Vitest `__tests__/**/*.test.{ts,tsx}` ; Vitest a répondu
`No test files found`. Aucun test n'a été exécuté ni échoué.

Les commandes ont immédiatement été relancées avec les chemins relatifs
corrects depuis le même répertoire :

| Validation | Résultat |
|---|---|
| `npm run test -- __tests__/vertical-slice-ui` | PASS — 1 fichier, 11 tests |
| `npm run test -- __tests__/vertical-slice-runtime` | PASS — 2 fichiers, 13 tests |
| `npm run test -- __tests__/vertical-slice-core` | PASS — 2 fichiers, 16 tests |
| increment A + B | PASS — 2 fichiers, 14 tests |
| suite complète | PASS — 88 fichiers, 776 tests |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS — aucune erreur ou warning ESLint |
| `npm run build` | PASS |
| route `/studio/projects/new` | générée, 7.77 kB / 114 kB first load |
| `git diff --check origin/main...HEAD` | PASS |
| tracked après QA | propre |
| stage après QA | vide |

Warnings non bloquants :

- dépréciation future de `next lint` ;
- avertissement dev `allowedDevOrigins` pour `127.0.0.1`, futur major Next.

## 11. Runtime et preuves visuelles

### Preuves temporaires existantes

| Capture | Dimensions | SHA-256 |
|---|---|---|
| `01-initial.png` | 1440×1024 | `1b874e0362c4bfe6458c5c91f58c4cc20ffa0c81253917e36faaf5a8ca6a9f45` |
| `02-validation-errors.png` | 1440×1024 | `7950e1d81c65e5436f94c8a87f8bf7698e9c88249f056c21c41a4b52ae82d0ad` |
| `03-success-real-runtime.png` | 1440×1024 | `66e5eead55f3062467115d11f50f30c6cb886cba15a74ac962d2f8906ee61a1c` |

Initial :

- shell flush ;
- route rail active ;
- disclosures ;
- formulaire ;
- Nora read-only.

Erreurs :

- name/objective/context invalides ;
- messages et contours visibles ;
- focus sur name ;
- valeurs et structure conservées ;
- erreur non fondée uniquement sur la couleur.

Succès :

- Project visible ;
- section Doctrine et Living Project State visible ;
- doctrine `resolved` ;
- `REAL_LOCAL_CORE` ;
- `fixture=false` ;
- `NOT_READY` ;
- disclosures conservées ;
- aucune redirection D1.

La capture succès ne montre pas toute la grille LPS sous la ligne de flottaison.
Une vérification runtime fraîche au même HEAD a confirmé le contenu complet du
DOM et l'absence de divergence avec la capture.

### Runtime frais

Serveur Next local démarré puis arrêté après contrôle :

```text
GET /studio/projects/new 200
POST /studio/projects/new 200
```

Valeurs vérifiées :

- Project `prj:699c2eb9-d211-46a8-961e-b02809cfacb0` ;
- LPS `lps:bc3c4ea2-627d-4d40-bd2c-af3ca94ede9f`, version 1 ;
- doctrine `pkg:studio-v3-oa` 1.0.0 `resolved` ;
- source `REAL_LOCAL_CORE` ;
- fixture `false` ;
- audit `DISABLED` ;
- readiness `NOT_READY` ;
- disclosures `LOCAL_PROCESS`, `NOT_GUARANTEED`, `DISABLED`,
  `NOT_SELECTED`, `NOT_AUTHORIZED`.

Ces identifiants sont aléatoires, process-locaux et ne sont pas des données
personnelles.

### Qualification Figma

- FileKey connu : `lrjA1WEyRpL05vKR8k29LO` ;
- aucune frame V2-A2 dédiée validée ;
- D-VS-05 non décidée ;
- aucune écriture Figma ;
- contrat Git et tokens existants utilisés ;
- aucune conclusion `FIGMA TO RUNTIME ALIGNED` ;
- aucune promesse pixel-perfect.

## 12. Sécurité et hygiène

Le diff complet et chaque patch ont été inspectés.

- aucun secret, token, mot de passe ou clé privée ;
- aucune donnée personnelle ni adresse email produit ;
- aucun chemin absolu local ajouté aux fichiers trackés ;
- aucune dépendance ;
- package.json et lockfiles inchangés ;
- `.github/**` inchangé ;
- aucune variable d'environnement ;
- aucune API route ;
- aucun debug log ajouté ;
- aucun `it.only`, `describe.only`, test désactivé ou skip ;
- aucun `@ts-ignore` ou eslint-disable large ;
- aucun TODO/FIXME bloquant ;
- aucune capture ou artefact temporaire tracké.

Le match d'hygiène contenant `fetch`, storage et modules interdits provenait
de l'expression régulière du test de frontière et non du code V2-A2.

## 13. Réserves classées

### Bloquantes

1. README tracké : attribution architecturale T-A0/T-A1 erronée.

### Majeures

Aucune autre.

### Mineures

1. Clé React non unique si deux contraintes sont identiques.
2. Cast `StudioShellRoute` vers `StudioRoute` dans `StudioShell`, dette de
   typage sans défaut runtime observé.

### Environnementales

1. Chemins de test fournis préfixés par `app/` alors que le cwd est déjà
   `projects/sfia-studio/app`; relance corrigée entièrement verte.
2. `next lint` déprécié pour Next 16.
3. `allowedDevOrigins` annoncé pour un futur major Next en dev.

### Design

1. Aucune frame Figma V2-A2 dédiée ; revue contre le contrat visuel Git.
2. La capture succès garde les détails LPS sous la ligne de flottaison ;
   contenu complet revérifié au DOM frais.

### Dette hors lot

1. Responsive 390 px du shell fixe.
2. État singleton process-local volatil.
3. Migration future de `next lint`.

## 14. Titre de PR proposé

`feat(sfia-studio): add V2-A2 create project UI`

Ce titre est prêt, mais la PR ne doit pas être créée avant correction et
nouveau verdict de readiness.

## 15. Body complet de PR proposé

```markdown
## Summary

- Add the first real user interface for creating a local SFIA Studio Project.
- Expose `/studio/projects/new` through the shared StudioShell.
- Render the real Project, doctrine, and Living Project State projection inline.

## Architecture

The bounded path is:

`UI → createProjectRuntimeAction → RuntimeApplicationService V2-A1 → LocalProjectFacade V1 → T-A0 doctrine-package resolution → T-A1 Project + initial LPS creation → serializable local UI projection`

- The runtime remains server-only.
- The client imports only the V2-A1 Server Action entrypoint.
- The disclosure banner is server-rendered from the V2-A1 disclosure contract.
- No D1 business-state dependency, API route, `fetch`, browser storage, fixture, harness, OPS1, or agent is introduced.

## Scope

- Add `/studio/projects/new`.
- Add the Create Project form, runtime disclosure banner, inline success projection, and bounded CSS module.
- Extend navigation with the Studio project route while preserving the four legacy POC routes.
- Add backward-compatible `showTabs` and `primaryAction` options to StudioShell/Topbar.
- Add UI, import-boundary, accessibility, shell, and route-regression tests.
- Add the V2-A2 implementation README.

## Validation

- V2-A2 UI: 1 file / 11 tests passed.
- V2-A1 runtime: 2 files / 13 tests passed.
- V1 core: 2 files / 16 tests passed.
- Increment A/B route regressions: 2 files / 14 tests passed.
- Full suite: 88 files / 776 tests passed.
- Typecheck: passed.
- Lint: passed with no ESLint errors or warnings; `next lint` emits its deprecation notice.
- Production build: passed; `/studio/projects/new` generated.
- `git diff --check`: passed.
- Automated accessibility: no serious or critical axe violations; color contrast reviewed visually because jsdom does not implement canvas.
- Fresh runtime verification: GET 200 and Server Action POST 200.

## Visual evidence

Three temporary, untracked states were reviewed at 1440×1024:

1. initial shell, disclosures, form, and read-only Nora panel;
2. required-field validation with visible focus, messages, and preserved structure;
3. real local success with Project, doctrine/LPS surface, `REAL_LOCAL_CORE`, `fixture=false`, and `NOT_READY`.

The evidence files are temporary and are not committed. This PR makes no pixel-perfect or Figma-alignment claim because no dedicated V2-A2 frame has been validated.

## Runtime disclosures

The route keeps the following states visible:

- `LOCAL_PROCESS`;
- `NOT_GUARANTEED`;
- agent execution `DISABLED`;
- readiness `NOT_READY`;
- IAM `NOT_SELECTED`;
- product persistence `NOT_SELECTED`;
- delivery `NOT_AUTHORIZED`;
- cutover `NOT_AUTHORIZED`.

## Known limitations

- No dedicated validated V2-A2 Figma frame; the bounded Git visual contract and existing tokens are the reference.
- Responsive behavior at 390 px is outside this lot.
- A future Next.js major may require `allowedDevOrigins` for the local dev origin.
- Project and LPS state are process-local and volatile across restart or hot reload.
- Duplicate constraint labels should use a composite React key in a follow-up.

## Out of scope

- IAM or authenticated Morris identity;
- product persistence;
- real agent execution;
- recommendation engine;
- dashboard;
- product delivery;
- cutover.

## Checklist

- [x] V1 core implementation unchanged.
- [x] V2-A1 contracts and implementation unchanged.
- [x] No dependency or lockfile change.
- [x] No API route.
- [x] No personal data or secret.
- [x] Targeted and full test suites pass.
- [x] Typecheck, lint, build, and diff check pass.
- [x] Human validation remains required before project-branch push or PR creation.
- [ ] Correct the tracked README architecture wording so T-A0 resolves doctrine and T-A1 creates Project + LPS.
- [ ] Rerun PR readiness after the documentation correction.
```

## 16. Conditions avant push et création de PR

Obligatoires :

1. Morris autorise un cycle correctif borné.
2. Corriger le README tracké pour attribuer :
   - résolution doctrine à T-A0 ;
   - création Project + LPS à T-A1.
3. Traiter ou accepter explicitement la clé React dupliquée.
4. Rejouer au minimum le contrôle documentaire, les tests ciblés, typecheck,
   lint, build et Git truth check.
5. Produire un nouveau verdict unique de PR readiness.
6. Obtenir ensuite seulement un GO Morris distinct pour push projet et
   création de PR.

Interdits dans le présent cycle :

- push de la branche projet ;
- création ou mise à jour de PR ;
- merge ;
- rebase, amend ou force push ;
- modification de `main`.

## 17. Review pack content coverage

| Champ | Valeur |
|---|---|
| réinitialisé au début | oui |
| complété avant rapport final | oui |
| niveau | full |
| mono-cycle | oui |
| absence de stub final | oui |
| created files full content | not applicable — aucun fichier projet créé par le cycle readiness |
| modified sections complete | not applicable — aucun fichier projet modifié par le cycle readiness |
| useful branch diff included | yes |
| per-file review included | yes, 12/12 |
| PR body complete | yes |
| synthesis only | no |
| review pack verdict | complete |

Le pack contient les constats defect-first, le Git Review Index, les résultats
réels, la revue par fichier, les preuves non Git, les réserves et le body
complet. Le patch de 1798 lignes n'est pas dupliqué intégralement car il est
accessible dans Git et a été lu entièrement.

## 18. Review Handoff Git

| Champ | Valeur au gel de la source |
|---|---|
| décision | required |
| justification | rapport PR readiness substantiel sur branche projet locale |
| mode | publish-in-cycle |
| motif local-only | N/A |
| source | `.tmp-sfia-review/chatgpt-review.md` |
| branche | `sfia/review-handoff` |
| fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| remote before | `3f5b1aa13b7884d038b0de949a6a925f3392c362` |
| worktree before | propre, local = remote |
| commit attendu | `docs(review-handoff): publish SFIA Studio V2-A2 PR readiness review` |
| push autorisé | oui, L3 borné vers la branche handoff uniquement |
| statut source | complet, prêt pour publication canonique |

Le SHA créé, le remote after, l'identité de blob et la relecture distante sont
nécessairement produits après le gel de cette source. Ils doivent être
rapportés dans le résultat Cursor final. Le contenu canonique distant doit être
identique octet pour octet à ce review pack.

## 19. Décision Morris suivante

Décision requise, non automatique :

`GO CORRECT SFIA STUDIO V2-A2 README ARCHITECTURE — T-A0 DOCTRINE RESOLUTION — T-A1 PROJECT AND LPS — THEN RERUN PR READINESS`

Le gate candidat `GO PUSH AND CREATE PR SFIA STUDIO V2-A2 CREATE PROJECT UI`
n'est pas disponible tant que le blocage documentaire n'est pas corrigé et
qu'un nouveau cycle ne conclut pas READY.

## 20. Instruction ChatGPT obligatoire

Avant de répondre à Morris sur ce rapport, ChatGPT doit lire depuis Git :

- branche : `sfia/review-handoff` ;
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`.

ChatGPT doit vérifier :

- cycle 13 PR readiness ;
- profil Standard ;
- branche projet ;
- base et HEAD ;
- trois commits ;
- douze fichiers ;
- résultats de validation ;
- revue visuelle et runtime ;
- réserves ;
- titre et body proposés ;
- absence de changement projet ;
- statut du handoff ;
- verdict unique.

Si le handoff est absent, ancien, incohérent, incomplet ou synthesis-only :

`REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`

Si le fichier distant n'a pas été mis à jour :

`REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`

## 21. Verdict unique

`NOT READY FOR PR`

Motif : correction documentaire trackée indispensable avant push projet et
création de PR.
