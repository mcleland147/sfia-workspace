# Interv360 — INC-01 App foundation summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : App foundation  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-app-foundation`

---

## 1. Objectif du cycle

Ce cycle a créé le **premier socle applicatif minimal** autorisé pour INC-01.

Il fait suite à l'autorisation conditionnelle formalisée dans :

[`inc-01-implementation-preparation-summary.md`](inc-01-implementation-preparation-summary.md)

Le cycle ne vise pas à implémenter le flux complet STAT-01 → STAT-06.

---

## 2. Décision de référence

Le premier commit applicatif était autorisé uniquement pour :

- initialiser le projet applicatif ;
- choisir un framework / starter minimal ;
- poser une structure de dossiers ;
- créer un point d'entrée applicatif ;
- matérialiser la séparation logique :
  - UI ;
  - orchestration métier ;
  - data locale ;
  - seed fictif ;
- ajouter un README de démarrage ;
- ajouter une configuration qualité minimale ;
- ajouter un smoke test si naturel.

---

## 3. Socle créé

**Dossier applicatif :**

`projects/interv360/app/`

**Starter choisi :**

**React + TypeScript + Vite**

**Justification :**

- mono-app web légère ;
- compatible avec une séparation logique UI / domain / data / seed ;
- pas de backend requis ;
- pas d'API requise ;
- setup rapide ;
- build et test smoke possibles ;
- cohérent avec le périmètre de fondation autorisé.

**Commit applicatif :** `9ba9a8c` — `feat: add INC-01 app foundation`

---

## 4. Structure créée

Structure applicative principale :

```text
projects/interv360/app/
  README.md
  package.json
  package-lock.json
  index.html
  vite.config.ts
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
  .gitignore
  src/
    main.tsx
    app/
    ui/
    domain/
    data/
    seed/
    tests/
```

**Rôles logiques :**

| Dossier | Rôle |
|---------|------|
| `src/app/` | Point d'entrée applicatif et composition initiale (`App.tsx`) |
| `src/ui/` | Présentation et futurs écrans (README uniquement) |
| `src/domain/` | Orchestration métier future (README uniquement) |
| `src/data/` | Persistance locale future (README uniquement) |
| `src/seed/` | Données fictives futures (README uniquement) |
| `src/tests/` | Tests smoke / QA futurs (`App.smoke.test.tsx`) |

---

## 5. Vérifications réalisées

**Commandes exécutées :**

```bash
cd projects/interv360/app
npm install
npm run build
npm run test -- --run
```

**Résultats :**

| Contrôle | Résultat |
|----------|----------|
| Installation dépendances | OK |
| Vulnérabilités npm | 0 |
| Build | OK |
| Test smoke | OK |
| Nombre de tests | 1 passé |

---

## 6. Garde-fous respectés

Le cycle n'a pas créé :

- backend serveur ;
- API externe ;
- base serveur ;
- SQL / DDL / migration ;
- CRM réel ;
- données réelles ;
- dashboard ;
- multi-utilisateur ;
- STAT-05 / STAT-07 / STAT-08 ;
- flux SAV complet STAT-06 ;
- sprint Jira ;
- tickets ;
- publication Notion.

`node_modules/` et `dist/` sont exclus du commit via `.gitignore`.

---

## 7. Décisions encore ouvertes

| Sujet | Statut | Commentaire |
|-------|--------|-------------|
| Persistance locale exacte | Ouvert | À trancher : localStorage, IndexedDB ou autre |
| Reset démo | Ouvert | À prévoir avant démo rejouable |
| Premier écran métier | Ouvert | Liste demandes à préparer ensuite |
| Orchestration STAT-01 → STAT-06 | Non démarrée | Hors cycle foundation |
| Seed SAV-DEMO-001 | Non implémenté | README `src/seed/` uniquement — cycle data suivant |

---

## 8. Décision de clôture

**Décision proposée :**

- [x] Cycle app foundation clôturé
- [ ] Cycle app foundation à compléter
- [ ] Cycle app foundation à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-app-foundation` est **clôturé avec succès**.

Le socle applicatif minimal est en place et respecte les garde-fous fixés par le cycle de préparation.

Cette clôture **n'autorise pas encore** l'implémentation complète du flux SAV INC-01.

---

## 9. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-list-skeleton`

**Objectif :**

- préparer le premier écran squelette INC-01 ;
- créer la structure UI de la liste des demandes ;
- utiliser uniquement des données fictives ;
- ne pas implémenter le flux complet STAT-06 ;
- ne pas connecter de backend ou d'API ;
- maintenir la séparation logique.

**Alternative possible avant l'écran :**

`delivery/interv360-inc-01-local-persistence-decision`

**Objectif :**

- trancher localStorage vs IndexedDB ;
- définir le reset démo ;
- préparer le seed fictif.

**Recommandation :**

Commencer par `delivery/interv360-inc-01-local-persistence-decision` si l'on veut sécuriser la couche data avant l'écran.

Sinon, ouvrir directement `delivery/interv360-inc-01-list-skeleton` avec données fictives non persistées dans un premier temps.
