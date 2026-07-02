# Interv360 — Product Industrialization

**Projet** : Interv360  
**Cycle** : Product Industrialization  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 6  
**Branche** : `delivery/interv360-product-industrialization`

---

## 1. Objectif

Ce lot industrialise le MVP Interv360 afin de le rendre plus facilement livrable, installable, testable et exploitable en local.

L'objectif est de consolider le packaging documentaire et opérationnel du produit, sans élargir le périmètre fonctionnel.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `./request-model-finalization.md`
- `./api-product-hardening.md`
- `./product-ux-finalization.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`
- `../app/README.md`
- `../backend/README.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 Request Model Finalization est clôturé ;
- le Lot 4 API Product Hardening est clôturé ;
- le Lot 5 Product UX Finalization est clôturé ;
- le Lot 6 prioritaire est l'industrialisation MVP.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend Node.js / TypeScript ;
- d'une persistance SQLite locale ;
- d'une API `/api/v1` durcie ;
- d'un frontend Vite connecté ;
- d'un mode local ;
- d'un mode API ;
- d'un modèle `Request` enrichi ;
- d'un audit trail enrichi ;
- d'une simulation utilisateur structurée ;
- d'une matrice de permissions ;
- d'une UX MVP finalisée ;
- d'un reset admin ;
- de tests backend/frontend stables ;
- d'un runbook de démonstration ;
- de README frontend/backend.

Limite actuelle :

> le produit fonctionne et se démontre, mais son installation, son exploitation locale, ses variables d'environnement, ses scripts et ses limites doivent être consolidés pour rendre le MVP proprement livrable.

---

## 4. Problème à résoudre

Le MVP ne peut pas être considéré comme livrable proprement tant que les éléments suivants ne sont pas suffisamment clairs :

- comment installer le projet ;
- comment lancer le frontend seul ;
- comment lancer le backend ;
- comment lancer le mode API ;
- comment réinitialiser la démo ;
- quelles variables `.env` sont utiles ;
- quels scripts sont disponibles ;
- comment exécuter les tests ;
- où se trouve la base SQLite ;
- quelles limites sont assumées ;
- quelle stratégie de déploiement simple est envisageable ;
- si une CI minimale est utile ou non.

---

## 5. Périmètre du lot

À livrer :

- cadrage industrialisation cible MVP ;
- audit de l'existant installation / scripts / env ;
- README global ou index projet si nécessaire ;
- consolidation README frontend ;
- consolidation README backend ;
- guide installation locale ;
- guide exploitation locale ;
- documentation variables `.env` ;
- documentation scripts build/test/run ;
- documentation SQLite / reset ;
- documentation limites connues ;
- stratégie de déploiement simple ;
- décision CI éventuelle ;
- validations backend/frontend ;
- PR unique en fin de lot.

---

## 6. Hors scope

Ce lot n'introduit pas :

- déploiement cloud complet ;
- infrastructure cloud ;
- Kubernetes ;
- Terraform ;
- Helm ;
- Docker obligatoire ;
- CI/CD complète ;
- observabilité avancée ;
- supervision ;
- SLA ;
- multi-tenant ;
- authentification réelle ;
- login réel ;
- logout réel ;
- mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- nouveau workflow ;
- nouvelle action métier ;
- CRUD complet ;
- formulaire création demande ;
- refonte UX ;
- design system ;
- arc Figma ;
- export Figma.

---

## 7. Industrialisation cible MVP

À clarifier :

| Zone | Objectif |
|------|----------|
| README global | Point d'entrée clair pour installer et lancer Interv360 |
| Frontend | Installation, mode local, mode API, variables Vite |
| Backend | Installation, API locale, SQLite, CORS, reset |
| Scripts | Build, test, dev, commandes essentielles |
| Environnement | `.env.example` ou documentation équivalente |
| Données | SQLite locale, seed, reset, limites données fictives |
| Tests | Commandes frontend/backend et compteurs attendus |
| Déploiement simple | Stratégie cible non-cloud ou pré-cloud |
| CI | Décision minimaliste : utile maintenant ou reportée |

---

## 8. Principes d'industrialisation

Décisions initiales :

- privilégier la clarté documentaire avant l'outillage lourd ;
- conserver l'installation locale simple ;
- ne pas rendre Docker obligatoire ;
- ne pas créer de pipeline CI complexe si non nécessaire ;
- ne pas introduire de dépendance inutile ;
- documenter les limites plutôt que les masquer ;
- préserver les scripts existants autant que possible ;
- créer des exemples `.env` uniquement si utiles ;
- rester compatible avec le mode local et le mode API.

---

## 9. Cible technique à préserver

À préserver :

- backend Node.js / TypeScript ;
- frontend Vite ;
- SQLite locale ;
- API `/api/v1` ;
- format erreurs API ;
- mode local ;
- mode API ;
- user switcher ;
- permissions ;
- actions workflow existantes ;
- audit trail enrichi ;
- request model enrichi ;
- reset admin ;
- UX MVP finalisée ;
- tests frontend/backend.

À modifier seulement si nécessaire :

- documentation ;
- README ;
- exemples d'environnement ;
- scripts npm simples ;
- éventuel `.env.example` ;
- éventuel README racine Interv360 ;
- éventuelle CI minimale si la décision est positive.

---

## 10. Décision initiale

Décision proposée pour rester Fast Track :

- commencer par auditer l'existant installation/scripts/env ;
- formaliser la cible industrialisation MVP ;
- documenter avant d'ajouter de l'outillage ;
- ne pas imposer Docker ;
- ne pas créer de CI/CD lourde ;
- ne pas modifier le comportement produit ;
- ne pas modifier le backend API ;
- ne pas modifier le frontend UX ;
- ne pas ouvrir de sujet auth/CRM/données réelles ;
- PR unique en fin de lot.

---

## 11. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| IND-01 | Cadrage opérationnel industrialisation MVP | Réalisé |
| IND-02 | Audit installation / scripts / env / docs | Réalisé |
| IND-03 | README global et guides locaux | Réalisé |
| IND-04 | Variables `.env`, scripts et exploitation locale | Réalisé |
| IND-05 | Tests, non-régression et CI éventuelle | Réalisé |
| IND-06 | Documentation finale runbook/README | Réalisé |
| IND-07 | Préparation PR unique | Réalisé |

---

## 12. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Industrialisation cible cadrée | OK |
| Audit installation/scripts/env réalisé | OK |
| README global / index projet clarifié | OK |
| README frontend consolidé | OK |
| README backend consolidé | OK |
| Variables `.env` documentées | OK |
| Scripts build/test/run documentés | OK |
| SQLite / reset documentés | OK |
| Limites connues documentées | OK |
| Déploiement simple cadré | OK |
| Décision CI prise | OK — CI minimale ajoutée |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Audit trail conservé | OK |
| Request model conservé | OK |
| Permissions conservées | OK |
| UX MVP conservée | OK |
| Backend inchangé | OK |
| Frontend tests | OK — 191 tests |
| Backend tests | OK — 125 tests |
| Frontend build | OK |
| Backend build | OK |
| Runbook mis à jour | OK |
| README racine finalisé | OK |
| README frontend finalisé | OK |
| README backend finalisé | OK |
| CI minimale documentée | OK |
| Auth réelle exclue | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| CRUD complet exclu | OK |

---

## 13. Garde-fous

Le lot doit préserver :

- backend ;
- API ;
- SQLite ;
- request model enrichi ;
- audit trail enrichi ;
- workflow existant ;
- statuts techniques existants ;
- actions existantes ;
- transitions métier existantes ;
- permissions existantes ;
- mode local ;
- mode API ;
- reset admin ;
- UX MVP finalisée.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- CRUD complet non cadré ;
- formulaire création demande non cadré ;
- déploiement cloud complet ;
- CI/CD lourde ;
- refonte UI ;
- arc Figma ;
- export Figma.

---

## 14. Décision IND-01

IND-01 valide le cadrage opérationnel du Lot 6.

Décisions :

- industrialiser le MVP sans élargir le périmètre fonctionnel ;
- clarifier installation, exécution locale, mode API, tests et limites ;
- documenter les variables d'environnement utiles ;
- vérifier les scripts build/test/run existants ;
- consolider README et runbook ;
- cadrer une stratégie de déploiement simple ;
- décider si une CI minimale est utile ;
- ne pas imposer Docker ;
- ne pas créer de CI/CD lourde ;
- ne pas modifier le comportement produit ;
- ne pas modifier le backend API ;
- ne pas modifier l'UX MVP ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles ;
- ne pas introduire de nouveau statut ;
- ne pas ouvrir d'arc Figma ;
- ne pas ajouter d'export Figma.

---

## 14.1. Audit IND-02 — installation, scripts, env et docs

IND-02 audite l'existant d'industrialisation avant consolidation.

### 14.1.1. Synthèse d'audit

| Zone | État actuel | Écart / risque | Décision |
|------|-------------|----------------|----------|
| README racine | Orienté phases SFIA (intake, cadrage, BPMN, UX documentaire) ; pas de point d'entrée produit pour installer/lancer | Un nouveau contributeur ne trouve pas `app/` et `backend/` depuis la racine Interv360 | IND-03 : ajouter section MVP runnable ou README produit dédié |
| README frontend | Très détaillé (~500 lignes) : structure, modes, workflow, users, UX MVP ; commandes `npm install/dev/build/test` | Historique INC/Batch volumineux ; variables env en prose ; pas de `.env.example` | IND-03/IND-04 : index rapide + consolidation ; IND-04 : tableau env |
| README backend | Clair : commandes, endpoints, env (`PORT`, `SQLITE_PATH`, `DEMO_MODE`, CORS), connexion frontend | Pas de parcours « démarrer backend seul puis frontend API » en une page | IND-03 : guide local unifié ; IND-04 : compléter si besoin |
| Runbook E2E | Complet : parcours local/API, contrôles lots 1–5, curl, dépannage ; compteurs **191 / 125** | Long ; chevauche README app/backend ; pas de « quick start » 5 minutes | IND-06 : harmonisation finale ; IND-03 : lien depuis README racine |
| Installation frontend | `cd projects/interv360/app && npm install && npm run dev` documenté dans `app/README.md` | Non répété au niveau racine Interv360 | IND-03 |
| Installation backend | `cd projects/interv360/backend && npm install && npm run dev` documenté dans `backend/README.md` | Prérequis Node non centralisé ; SQLite créée au premier run | IND-03 / IND-04 |
| Mode local | Défaut (`VITE_INTERV360_DATA_SOURCE` absent ou ≠ `api`) ; `localStorage` ; pas de backend requis | Bien documenté dans app README et runbook | Conserver ; IND-03 : rappel ordre de lancement |
| Mode API | `VITE_INTERV360_DATA_SOURCE=api` + backend sur 3001 ; pas de fallback silencieux | Documenté ; message erreur produit (Lot 5) | Conserver ; IND-04 : tableau env + troubleshooting |
| Variables frontend | 2 variables Vite auditées (voir §14.1.3) | Absence de `.env.example` ; valeurs par défaut implicites dans le code | IND-04 : documenter + `.env.example` si utile |
| Variables backend | 5 variables auditées (voir §14.1.3) | Table partielle dans README backend ; `CORS_ORIGIN` legacy peu visible | IND-04 : tableau consolidé |
| Scripts frontend | `dev`, `build`, `test`, `preview` — suffisants pour MVP | Pas de script racine monorepo | Conserver scripts ; IND-03 documente l'ordre ; pas de script global en IND-04 sauf besoin simple |
| Scripts backend | `dev`, `build` (tsc --noEmit), `test` — suffisants | `build` = typecheck uniquement, pas d'emit dist | Documenter en IND-04 ; pas de nouveau script |
| SQLite / data | Fichier `backend/data/interv360.sqlite` (gitignored) ; seed auto ; `:memory:` en tests | Chemin changeable via `SQLITE_PATH` ; état persiste entre redémarrages | IND-04 : doc SQLite + procédure reset fichier |
| Reset démo | UI admin + `POST /api/v1/demo/reset` ; mode local purge `localStorage` | Procédure fichier SQLite (supprimer DB) peu explicite hors README backend | IND-04 |
| Tests | 191 frontend, 125 backend (validés sur `main` post-Lot 5) | Commandes dispersées dans README et runbook | IND-05 : revalidation + centralisation compteurs |
| CI | Aucun workflow GitHub pour `projects/interv360` | Pas de garde-fou automatique sur PR | IND-05 : décider CI minimale (build+test) ou report |
| Docker | Aucun Dockerfile / compose pour Interv360 | Cohérent avec principe installation locale simple | Exclu du lot ; report optionnel hors MVP |
| Déploiement simple | Non documenté centralement ; Vite `build` → `dist/` ; backend `tsx` dev | Stratégie pré-cloud absente (static + API locale) | IND-04 / IND-06 : cadrage documentaire simple |

### 14.1.2. Constats principaux

Constats :

- l'installation fonctionne déjà en deux dossiers (`app/`, `backend/`) avec des scripts npm minimaux et stables ;
- la documentation technique est riche mais fragmentée entre README racine (phases SFIA), README spécialisés et runbook ;
- les variables d'environnement sont implémentées et partiellement documentées, sans fichier `.env.example` ;
- SQLite locale, seed et reset démo sont opérationnels ; la persistance entre sessions est un atout mais rarement expliquée pour la remise à zéro ;
- aucune CI ni Docker n'existe pour Interv360 — cohérent avec le périmètre MVP local ;
- les compteurs de tests (**191 / 125**) sont à jour dans le runbook et les deliveries récents.

Points déjà solides :

- frontend Vite déjà installable ;
- backend Node.js / TypeScript déjà installable ;
- mode local disponible sans backend ;
- mode API disponible avec backend local ;
- tests frontend et backend stables ;
- runbook E2E existant ;
- README frontend/backend existants.

Écarts à traiter :

- README racine non orienté « lancer le MVP » ;
- absence de guide d'installation unifié (ordre frontend seul / backend + frontend API) ;
- variables `.env` non centralisées dans un tableau unique ni exemplifiées ;
- limites connues et stratégie de déploiement simple non regroupées ;
- décision CI minimale encore ouverte.

### 14.1.3. Variables d'environnement auditées

| Variable | Côté | Défaut | Usage | Décision |
|----------|------|--------|-------|----------|
| `VITE_INTERV360_DATA_SOURCE` | Frontend | `local` (implicite si absent ou ≠ `api`) | Sélectionne le repository local (`localStorage`) ou API (`api`) | IND-04 : documenter ; `.env.example` optionnel |
| `VITE_INTERV360_API_BASE_URL` | Frontend | `http://localhost:3001/api/v1` | URL de base API en mode `api` | IND-04 : documenter ; aligner avec port backend |
| `PORT` | Backend | `3001` | Port HTTP du serveur Express | IND-04 : documenter |
| `SQLITE_PATH` | Backend | `data/interv360.sqlite` (sous `backend/`) | Chemin fichier SQLite ; `:memory:` supporté (tests) | IND-04 : documenter chemin, gitignore, reset fichier |
| `DEMO_MODE` | Backend | `true` (si variable absente) | Autorise `POST /api/v1/demo/reset` ; `false` désactive le reset | IND-04 : documenter |
| `INTERV360_CORS_ORIGINS` | Backend | Origines Vite locales 5173–5175 (`localhost` et `127.0.0.1`) | Liste CORS comma-separated pour mode API | IND-04 : documenter ; mentionner fallback `CORS_ORIGIN` legacy |

Risques identifiés :

- mode API sans backend démarré → erreur explicite (pas de fallback) — comportement voulu, à maintenir en doc ;
- port Vite alternatif (5174/5175) → CORS backend couvre déjà ces ports par défaut ;
- `DEMO_MODE=false` → reset API refusé — à documenter pour éviter confusion en démo.

### 14.1.4. Scripts audités

| Script | Côté | Usage | Décision |
|--------|------|-------|----------|
| `npm run dev` | Frontend | Serveur Vite dev (port 5173 par défaut) | Conserver ; IND-03/IND-04 |
| `npm run build` | Frontend | `tsc -b && vite build` → `dist/` | Conserver ; IND-04 |
| `npm run test -- --run` | Frontend | Vitest (191 tests) | Conserver ; IND-05 revalidation |
| `npm run preview` | Frontend | Preview build production locale | Conserver ; IND-04 mention optionnelle |
| `npm run dev` | Backend | `tsx watch src/index.ts` — API sur PORT | Conserver ; IND-03/IND-04 |
| `npm run build` | Backend | `tsc --noEmit` — vérification types uniquement | Conserver ; IND-04 préciser « pas d'emit » |
| `npm run test` | Backend | Vitest (125 tests) | Conserver ; IND-05 revalidation |

Décision scripts : les scripts actuels suffisent pour le MVP ; pas de script racine monorepo en IND-02 ; évaluer en IND-04 un helper documentaire simple (ex. section Makefile ou npm à la racine `projects/interv360/`) uniquement si la lecture reste confuse après IND-03.

### 14.1.5. Décision CI / Docker

| Sujet | Décision |
|-------|----------|
| Docker obligatoire | Non |
| Dockerfile dans ce lot | Reporté |
| CI/CD complète | Non |
| CI minimale | À décider en IND-05 (build + test frontend/backend sur PR) |
| Déploiement cloud complet | Non |
| Déploiement simple documenté | Oui — IND-04 / IND-06 |

### 14.1.6. Priorités à traiter

| Priorité | Sujet | Pourquoi | Incrément cible |
|----------|-------|----------|-----------------|
| Haute | README racine orienté produit MVP | Point d'entrée manquant pour installation | IND-03 |
| Haute | Guide installation locale unifié | Parcours fragmenté entre 3 documents | IND-03 |
| Haute | Tableau variables `.env` + exemples | Réduction erreurs mode API / CORS / SQLite | IND-04 |
| Moyenne | SQLite, reset et limites données | Exploitation locale et dépannage | IND-04 |
| Moyenne | Stratégie déploiement simple | Clôture industrialisation sans cloud | IND-04 / IND-06 |
| Moyenne | CI minimale (build+test) | Garde-fou qualité sans sur-ingénierie | IND-05 |

---

## 14.2. Décision IND-02 — consolidation retenue

IND-02 fixe les décisions à implémenter en IND-03, IND-04 et IND-05.

### Décisions générales

- consolider le README racine Interv360 comme point d'entrée produit ;
- conserver les README frontend/backend comme références spécialisées ;
- harmoniser README et runbook ;
- documenter les variables d'environnement plutôt que changer leur comportement ;
- créer des exemples `.env` uniquement si utiles (décision IND-04) ;
- conserver les scripts npm existants sauf besoin simple identifié ;
- ne pas imposer Docker ;
- ne pas créer de CI/CD complète ;
- décider une CI minimale en IND-05 ;
- ne pas modifier le comportement produit ;
- ne pas modifier le backend API ;
- ne pas modifier l'UX MVP.

### IND-03 — README global et guides locaux

À traiter en IND-03 :

- clarifier le README racine Interv360 ;
- ajouter un parcours d'installation local ;
- documenter le lancement en mode local ;
- documenter le lancement en mode API ;
- documenter les commandes essentielles ;
- clarifier l'ordre recommandé frontend/backend ;
- pointer vers les README spécialisés et le runbook.

### IND-04 — Variables `.env`, scripts et exploitation locale

À traiter en IND-04 :

- documenter les variables frontend ;
- documenter les variables backend ;
- décider si `.env.example` est utile (`app/` et/ou `backend/`) ;
- documenter SQLite ;
- documenter reset demo ;
- documenter les scripts build/test/run ;
- documenter les limites d'exploitation locale ;
- documenter une stratégie de déploiement simple (static frontend + API Node locale).

### IND-05 — Tests, non-régression et CI éventuelle

À traiter en IND-05 :

- relancer validations frontend/backend ;
- confirmer les compteurs tests ;
- confirmer mode local/API ;
- confirmer absence de changement fonctionnel ;
- décider définitivement la CI minimale :
  - soit reportée ;
  - soit ajoutée si simple et utile (workflow GitHub : install + build + test sur `projects/interv360/app` et `backend`) ;
- ne pas créer de pipeline lourd.

### Hors scope confirmé

IND-02 confirme que le lot ne crée pas :

- déploiement cloud complet ;
- infrastructure cloud ;
- Kubernetes ;
- Terraform ;
- Helm ;
- Docker obligatoire ;
- CI/CD complète ;
- observabilité avancée ;
- supervision ;
- SLA ;
- multi-tenant ;
- authentification réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- CRUD complet ;
- formulaire création demande ;
- refonte UX ;
- arc Figma ;
- export Figma.

---

## 14.3. Changements IND-03

IND-03 transforme le README racine Interv360 en point d'entrée MVP produit.

Changements réalisés :

- README racine réorienté produit ;
- état MVP clarifié ;
- structure du projet documentée ;
- prérequis documentés ;
- installation rapide documentée ;
- lancement mode local documenté ;
- lancement mode API local documenté ;
- commandes essentielles frontend/backend documentées ;
- validation rapide frontend/backend documentée ;
- données SQLite et reset présentés ;
- variables d'environnement principales listées ;
- liens vers README spécialisés et runbook ajoutés ;
- limites assumées du MVP rappelées ;
- mode de livraison SFIA Fast Track rappelé ;
- renvoi court ajouté en tête des README `app/` et `backend/`.

Préservé :

- scripts existants ;
- frontend ;
- backend ;
- API ;
- SQLite ;
- workflow ;
- statuts ;
- audit trail ;
- request model ;
- permissions ;
- mode local ;
- mode API ;
- UX MVP finalisée.

Validations :

| Cible | Résultat |
|-------|----------|
| README racine | OK |
| Code frontend | Inchangé |
| Code backend | Inchangé |
| Scripts npm | Inchangés |
| API | Inchangée |
| SQLite | Inchangée |

---

## 14.4. Changements IND-04

IND-04 consolide les variables d'environnement, les scripts et l'exploitation locale.

Changements réalisés :

- variables frontend documentées ;
- variables backend documentées ;
- fichiers `.env.example` ajoutés (`app/` et `backend/`) ;
- scripts frontend documentés ;
- scripts backend documentés ;
- comportement SQLite documenté ;
- reset démo documenté ;
- procédure de remise à zéro SQLite documentée ;
- CORS local documenté ;
- limites d'exploitation locale précisées ;
- stratégie de déploiement simple cadrée.

Décisions :

- les scripts npm existants sont conservés ;
- aucun script racine monorepo n'est ajouté dans IND-04 ;
- Docker reste reporté ;
- CI/CD complète reste exclue ;
- CI minimale reste à décider en IND-05 ;
- les fichiers `.env.example` ne contiennent aucun secret ;
- les fichiers `.env` réels restent locaux et non commités.

Synthèse variables :

| Variable | Côté | Défaut | Décision |
|----------|------|--------|----------|
| `VITE_INTERV360_DATA_SOURCE` | Frontend | `local` implicite | Documentée |
| `VITE_INTERV360_API_BASE_URL` | Frontend | `http://localhost:3001/api/v1` | Documentée |
| `PORT` | Backend | `3001` | Documentée |
| `SQLITE_PATH` | Backend | `data/interv360.sqlite` | Documentée |
| `DEMO_MODE` | Backend | `true` si absent | Documentée |
| `INTERV360_CORS_ORIGINS` | Backend | origins Vite locales 5173–5175 | Documentée |
| `CORS_ORIGIN` | Backend | legacy si supporté | Documentée |

Préservé :

- frontend ;
- backend ;
- API ;
- SQLite ;
- workflow ;
- statuts ;
- audit trail ;
- request model ;
- permissions ;
- mode local ;
- mode API ;
- UX MVP finalisée.

Validations :

| Cible | Résultat |
|-------|----------|
| README racine | OK |
| README frontend | OK |
| README backend | OK |
| `.env.example` frontend | OK |
| `.env.example` backend | OK |
| Code frontend | Inchangé |
| Code backend | Inchangé |
| Scripts npm | Inchangés |
| API | Inchangée |
| SQLite | Inchangée |

---

## 14.5. Changements IND-05

IND-05 stabilise le lot Product Industrialization par les tests, la non-régression et la décision CI minimale.

Changements réalisés :

- frontend build relancé ;
- tests frontend relancés ;
- backend build relancé ;
- tests backend relancés ;
- `.env.example` vérifiés ;
- mode local conservé ;
- mode API conservé ;
- absence de changement fonctionnel confirmée ;
- absence de modification backend fonctionnelle confirmée ;
- absence de modification frontend fonctionnelle confirmée ;
- décision CI minimale prise ;
- CI minimale ajoutée.

Décision CI :

| Sujet | Décision |
|-------|----------|
| CI/CD complète | Non |
| Déploiement automatique | Non |
| Docker | Non |
| CI minimale build+test | Ajoutée |
| Workflow | `.github/workflows/interv360-ci.yml` |
| Déclenchement | PR / push `main` sur `projects/interv360/**` |
| Node.js | 20 |

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |
| `.env.example` frontend | OK |
| `.env.example` backend | OK |
| Code frontend | Inchangé |
| Code backend | Inchangé |
| Scripts npm | Inchangés |
| API | Inchangée |
| SQLite | Inchangée |

Préservé :

- frontend ;
- backend ;
- API ;
- SQLite ;
- workflow ;
- statuts ;
- audit trail ;
- request model ;
- permissions ;
- mode local ;
- mode API ;
- UX MVP finalisée.

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas de Docker obligatoire ;
- pas de CI/CD lourde ;
- pas de déploiement cloud ;
- pas d'arc Figma ;
- pas d'export Figma.

---

## 14.6. Changements IND-06

IND-06 finalise la documentation du lot Product Industrialization.

Changements réalisés :

- runbook E2E harmonisé avec l'industrialisation MVP ;
- contrôle Product Industrialization ajouté au runbook ;
- README racine vérifié et finalisé ;
- README frontend vérifié et finalisé ;
- README backend vérifié et finalisé ;
- documentation `.env.example` consolidée ;
- documentation SQLite / reset consolidée ;
- documentation scripts build/test/run consolidée ;
- documentation stratégie de déploiement simple consolidée ;
- documentation CI minimale consolidée ;
- limites MVP harmonisées.

Synthèse documentaire :

| Élément | Résultat |
|---------|----------|
| README racine | Finalisé |
| README frontend | Finalisé |
| README backend | Finalisé |
| Runbook E2E | Finalisé |
| `.env.example` frontend | Documenté |
| `.env.example` backend | Documenté |
| Scripts frontend | Documentés |
| Scripts backend | Documentés |
| SQLite | Documenté |
| Reset demo | Documenté |
| Mode local | Documenté |
| Mode API | Documenté |
| CI minimale | Documentée |
| Déploiement simple | Documenté |
| Limites MVP | Documentées |

Validations reprises :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |
| CI minimale | Ajoutée |

Préservé :

- frontend ;
- backend ;
- API ;
- SQLite ;
- workflow ;
- statuts ;
- audit trail ;
- request model ;
- permissions ;
- mode local ;
- mode API ;
- UX MVP finalisée.

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas de Docker obligatoire ;
- pas de CI/CD lourde ;
- pas de déploiement cloud complet ;
- pas d'arc Figma ;
- pas d'export Figma.

---

## 15. Prochaine étape

Exécuter **IND-07** :

Préparation PR unique

---

## 16. Synthèse avant PR

Le lot **Product Industrialization** est fonctionnellement prêt.

Capacités ajoutées :

- README racine orienté MVP produit ;
- guide installation locale ;
- guide mode local ;
- guide mode API ;
- documentation `.env.example` frontend/backend ;
- documentation scripts build/test/run ;
- documentation SQLite et reset ;
- documentation exploitation locale ;
- stratégie de déploiement simple ;
- CI minimale build+test ;
- runbook E2E harmonisé.

Le lot préserve :

- frontend fonctionnel ;
- backend fonctionnel ;
- API ;
- SQLite ;
- request model enrichi ;
- audit trail enrichi ;
- workflow existant ;
- statuts techniques existants ;
- transitions métier existantes ;
- permissions existantes ;
- mode local ;
- mode API ;
- UX MVP finalisée ;
- reset admin.

Le lot ne met pas en place :

- déploiement cloud complet ;
- Docker obligatoire ;
- Kubernetes ;
- Terraform ;
- Helm ;
- CI/CD complète ;
- observabilité avancée ;
- supervision ;
- authentification réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- CRUD complet ;
- formulaire création demande ;
- nouveau statut ;
- `STAT-08` ;
- arc Figma ;
- export Figma.

La prochaine étape est IND-07 : préparation de la PR unique du lot.

---

## 17. Validations finales IND-07

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |
| Diff global vs main | OK |
| README racine point d'entrée MVP | OK |
| README frontend consolidé | OK |
| README backend consolidé | OK |
| Runbook E2E harmonisé | OK |
| `.env.example` frontend | OK |
| `.env.example` backend | OK |
| Scripts frontend documentés | OK |
| Scripts backend documentés | OK |
| SQLite / reset documentés | OK |
| Mode local documenté | OK |
| Mode API documenté | OK |
| Déploiement simple documenté | OK |
| CI minimale ajoutée | OK |
| Workflow CI sans secrets | OK |
| Workflow CI sans Docker | OK |
| Workflow CI sans déploiement | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Request model conservé | OK |
| Audit trail conservé | OK |
| Workflow métier conservé | OK |
| Statuts techniques conservés | OK |
| Transitions métier conservées | OK |
| Permissions conservées | OK |
| UX MVP conservée | OK |
| Backend fonctionnel inchangé | OK |
| API inchangée | OK |
| Scripts npm inchangés | OK |
| CRUD complet exclu | OK |
| Formulaire création exclu | OK |
| Auth réelle exclue | OK |
| Session backend réelle exclue | OK |
| Login/password exclus | OK |
| Token exclu | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| `STAT-08` exclu | OK |
| Docker obligatoire exclu | OK |
| CI/CD lourde exclue | OK |
| Déploiement cloud complet exclu | OK |
| Arc Figma exclu | OK |
| Exports Figma exclus | OK |
| sfia-notion-sync exclu | OK |

---

## 18. Préparation PR intégrée

### Titre proposé

`Industrialize Interv360 MVP delivery`

### Description proposée

```markdown
## Summary
This PR delivers Lot 6 of the Interv360 MVP Final Roadmap: Product Industrialization.
It makes the Interv360 MVP easier to install, run, test and operate locally without expanding the product scope. The lot consolidates the root README, local setup, local/API mode instructions, environment examples, SQLite/reset documentation, simple deployment guidance, the E2E runbook and a minimal CI workflow.
This is not a cloud deployment, not a Dockerization effort, not a CI/CD platform implementation and does not introduce authentication, CRM, real data, CRUD expansion or new workflow statuses.
## What changed
### Product documentation
- turns `projects/interv360/README.md` into the MVP entry point;
- documents quick installation for `app/` and `backend/`;
- documents local mode without backend;
- documents API mode with backend + SQLite;
- documents build/test/run commands;
- documents validation counters;
- keeps links to specialized frontend/backend README files and the E2E runbook.
### Environment and local operations
- adds `projects/interv360/app/.env.example`;
- adds `projects/interv360/backend/.env.example`;
- documents frontend environment variables:
  - `VITE_INTERV360_DATA_SOURCE`
  - `VITE_INTERV360_API_BASE_URL`
- documents backend environment variables:
  - `PORT`
  - `SQLITE_PATH`
  - `DEMO_MODE`
  - `INTERV360_CORS_ORIGINS`
  - `CORS_ORIGIN` legacy fallback if supported;
- documents SQLite persistence and reset;
- documents local demo reset through UI and API;
- documents a simple pre-cloud deployment strategy.
### CI
- adds a minimal GitHub Actions workflow:
  - `.github/workflows/interv360-ci.yml`
- runs on pull requests and pushes to `main` affecting `projects/interv360/**`;
- installs, builds and tests the frontend;
- installs, builds and tests the backend;
- uses Node.js 20;
- does not deploy;
- does not use secrets;
- does not build Docker images.
### Runbook
- adds a Product Industrialization control section to the E2E runbook;
- documents installation, mode local/API, `.env.example`, SQLite/reset, CI and technical evidence.
## Validation
- Frontend build: OK
- Frontend tests: 191 passed
- Backend build: OK
- Backend tests: 125 passed
## Guardrails
No product behavior, frontend feature, backend API, SQLite schema, workflow, technical status, transition, permission model, request model or audit trail behavior was changed.
No full CRUD API, request creation form, real authentication, login, logout, password, token, OAuth, JWT, SSO, Entra ID, CRM integration, real data, new workflow status, `STAT-08`, Docker requirement, full CI/CD pipeline, cloud deployment, observability stack, supervision, Notion publication, Controlled Delivery change, sfia-notion-sync update, Figma arc or Figma export was introduced.
Existing local mode, API mode, SQLite persistence, demo reset, request model, audit trail, workflow, permissions and Product UX MVP behavior are preserved.
```

---

## 19. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | KO — PAT sans scope `workflow` (`.github/workflows/interv360-ci.yml`) |
| PR créée automatiquement | Non — `gh` indisponible ; push requis avant création |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-product-industrialization?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-product-industrialization` |
| Merge automatique | Non |

Action manuelle : pousser la branche avec un token disposant du scope `workflow`, puis créer la PR avec le titre `Industrialize Interv360 MVP delivery` et le corps documenté en §18.
