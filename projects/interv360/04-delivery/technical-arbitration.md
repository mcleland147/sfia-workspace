# Interv360 — Technical arbitration

**Projet** : Interv360  
**Cycle** : Arbitrage technique minimal avant réalisation  
**Statut** : Arbitrage complété — autorisation conditionnelle INC-01  
**Branche** : `delivery/interv360-technical-arbitration`

---

## 1. Objectif du cycle

Ce cycle vise à lever les conditions techniques minimales avant tout démarrage de code sur INC-01.

Il fait suite à la décision go/no-go :

**Go conditionnel — réalisation INC-01 possible après arbitrage technique minimal.**

Objectif :

- arbitrer une stack minimale ;
- définir une stratégie data minimale ;
- confirmer le périmètre INC-01 ;
- identifier les décisions nécessaires avant premier commit applicatif ;
- produire une recommandation d'autorisation ou non du démarrage code.

---

## 2. Décision de référence

Décision précédente :

`projects/interv360/04-delivery/implementation-go-no-go.md`

Statut :

**Go conditionnel**

Périmètre ciblé :

`INC-01 — Flux SAV minimal démontrable`

Conditions à lever :

1. décision formelle de passage en réalisation ;
2. gel du périmètre INC-01 ;
3. arbitrage stack minimal ;
4. stratégie data minimale ;
5. confirmation des responsabilités de réalisation.

---

## 3. Non-périmètre

Ce cycle ne doit pas :

- développer l'application ;
- initialiser un projet applicatif ;
- créer une base de données ;
- implémenter une API ;
- créer un backlog Jira ;
- ouvrir un sprint ;
- produire des tickets de réalisation ;
- refaire l'UX/UI ;
- publier dans Notion.

---

## 4. Questions d'arbitrage

Le cycle doit répondre aux questions suivantes :

### 4.1 Stack minimale

- Quelle stack est suffisante pour INC-01 ?
- Quelle stack évite le surdimensionnement ?
- Quelle stack reste compatible avec une trajectoire produit plus large ?
- Quels choix doivent rester réversibles ?

### 4.2 Stratégie data minimale

- Quelles données sont nécessaires pour INC-01 ?
- Les données doivent-elles être mockées, locales, persistées ou externalisées ?
- Quel niveau de persistance est nécessaire pour démontrer INC-01 ?
- Quels risques data / confidentialité doivent être cadrés ?

### 4.3 Responsabilités

- Qui porte la décision produit ?
- Qui porte la décision technique ?
- Qui valide le périmètre INC-01 ?
- Qui autorise le premier commit applicatif ?

### 4.4 Préparation réalisation

- Quels livrables sont nécessaires avant code ?
- Quels éléments sont déjà suffisants ?
- Quelles décisions restent à formaliser ?
- Quel est le point d'arrêt avant développement ?

---

## 5. Options stack à comparer

**Sources :** `inc-01-stack-options.md`, `2026-06-29-inc-01-front-back-data-decisions.md`, `technical-design-summary.md`, `inc-01-api-strategy.md`, `realization-start-summary.md`.

Les options ci-dessous reformulent les choix documentés sous un angle **minimal pour INC-01**. Elles ne figent **aucun framework** ni langage.

| Option | Description | Avantages | Limites | Risque | Recommandation |
|--------|-------------|-----------|---------|--------|----------------|
| **Option A — Front-only / état local** | Interface web unique ; logique et état en mémoire ou state local (équivalent partiel de l'option C « prototype local » documentée). | Setup très faible ; démo rapide des écrans ; faible coût cognitif. | Persistance fragile ; règles métier difficiles à isoler ; rechargement = perte d'état ; QA du flux complet limitée. | Dette si promu produit ; logique métier dans l'UI (`2026-06-29-inc-01-front-back-data-decisions.md`). | **Non retenue** comme cible INC-01 — insuffisante pour démontrer STAT-01 → STAT-06 de façon fiable. |
| **Option B — Front + couche data locale structurée** | **Mono-app web** avec séparation **logique interne** front / orchestration métier / persistance locale (aligné sur l'option A « mono-app web simple » de `inc-01-stack-options.md`). Pas de séparation physique front/back obligatoire ; **pas d'API externe** requise (`inc-01-api-strategy.md`). | Couvre les 5 écrans INC-01 ; statuts gouvernés hors UI ; persistance locale pour démo ; setup modéré ; évite surdimensionnement ; réversible vers séparation physique ultérieure. | Nécessite de cadrer la couche data et l'orchestration ; risque de monolithe mal découpé si non structuré. | Élargissement prématuré (CRM, dashboard) si garde-fous non respectés. | **Recommandée** pour INC-01 — meilleur compromis simplicité / démontrabilité / trajectoire. |
| **Option C — Full-stack / backend + base réelle** | Front et back séparés physiquement ; persistance via base de données ; API formalisée (aligné sur l'option B « front/back séparés » documentée). | Séparation claire ; évolutivité forte ; QA structurée. | Setup plus lourd ; surdimensionnement INC-01 ; API/SQL prématurés alors que l'orchestration interne suffit (`inc-01-api-strategy.md`). | Retard et complexité avant première valeur (STAT-06). | **Non retenue** pour le démarrage INC-01 — réserver à INC-02+ ou besoin multi-utilisateur partagé documenté. |

### Recommandation stack

**Retenir l'option B — mono-app web avec couche data locale structurée et séparation logique interne** (équivalent indicatif de l'option A documentée dans `inc-01-stack-options.md`).

Cette recommandation :

- reste **indicative** — aucun framework, langage ou outil n'est imposé dans ce cycle ;
- exige une **couche d'orchestration métier** distincte de l'UI (transitions STAT-01 à STAT-06) ;
- **n'exige pas** d'API HTTP formalisée ni de backend séparé pour INC-01 ;
- reste **réversible** vers une séparation front/back physique si le produit évolue après INC-01.

**Non retenu pour l'instant :** choix concret React/Vue/Svelte, ORM, moteur de base — à trancher dans le cycle `delivery/interv360-inc-01-implementation-preparation`.

---

## 6. Stratégie data à comparer

**Sources :** `inc-01-data-model.md`, `2026-06-29-inc-01-front-back-data-decisions.md`, `inc-01-demo-data.md`, `mvp-scope.md`.

Objets minimaux à persister : Demande SAV, Qualification, Intervention, Créneau, Technicien, Compte rendu, Résultat, Statut courant, Journal fonctionnel minimal (modèle conceptuel — pas de tables imposées).

| Option | Description | Avantages | Limites | Risque | Recommandation |
|--------|-------------|-----------|---------|--------|----------------|
| **Mock statique** | Données en dur dans le code ou fichiers statiques non persistés entre sessions. | Très simple ; zéro setup data. | Ne supporte pas un parcours complet reproductible ; pas de journal minimal ; QA-NOM difficile à rejouer ; perte à chaque rechargement. | Fausse impression de flux terminé ; non aligné avec `inc-01-demo-data.md`. | **Non retenue** comme stratégie principale INC-01. |
| **Données locales persistées** | Persistance locale (fichier, stockage navigateur structuré, ou couche data embarquée) avec jeu fictif SAV-DEMO-001 / INT-DEMO-001 ; **données fictives uniquement**. | Démontre STAT-01 → STAT-06 de bout en bout ; rejouable ; aligné modèle conceptuel ; pas de backend ; pas de données personnelles réelles (`inc-01-demo-data.md`). | Pas de partage multi-poste ; pas de production ; stratégie physique exacte encore à choisir. | Choix de stockage inadapté → dette ; confusion si données réelles introduites. | **Recommandée** pour INC-01 — persistance locale structurée ou couche data simulée embarquée. |
| **Backend / base réelle** | Serveur applicatif + base de données (SQL ou autre) dès INC-01. | Partage possible ; trajectoire « produit » plus directe. | Surdimensionnement ; SQL/migrations prématurés (`inc-01-data-model.md` interdit DDL à ce stade) ; pas requis sans multi-utilisateur partagé. | Complexité avant démo STAT-06 ; dérive vers CRM/sync. | **Non retenue** pour le démarrage INC-01. |

### Recommandation data

**Retenir des données locales persistées** via une **couche data embarquée** dans la mono-app (stockage local structuré), alimentée par le **jeu de démonstration fictif** documenté (`inc-01-demo-data.md`).

Principes :

- **aucune donnée personnelle réelle** ;
- **aucun CRM réel** ;
- **aucune API externe obligatoire** ;
- modèle aligné sur `inc-01-data-model.md` (conceptuel → implémentation minimale) ;
- journal fonctionnel minimal pour traçabilité de démo.

Le **mécanisme physique exact** (IndexedDB, fichier local, SQLite embarqué, etc.) reste **à confirmer** dans le cycle d'implémentation — sans créer de base serveur à ce stade.

---

## 7. Critères de décision

Critères proposés :

| Critère | Poids | Commentaire |
|---------|------|-------------|
| Simplicité pour INC-01 | Fort | Éviter la surarchitecture |
| Rapidité de mise en œuvre | Fort | Permettre une réalisation courte |
| Réversibilité | Fort | Ne pas figer trop tôt |
| Cohérence avec MVP global | Moyen | Garder une trajectoire produit |
| Risque sécurité / data | Fort | Ne pas manipuler de données sensibles sans cadre |
| Maintenabilité | Moyen | Garder une base propre |
| Démontrabilité | Fort | INC-01 doit être montrable rapidement |

---

## 8. Décision attendue

Le cycle doit aboutir à une des décisions suivantes :

- [ ] Autorisation de démarrage code INC-01
- [x] Autorisation conditionnelle de démarrage code INC-01
- [ ] Report du démarrage code

Décision : voir §12 — **autorisation conditionnelle** après cycle d'implémentation préparatoire.

---

## 9. Livrables possibles ensuite

Si l'arbitrage est validé, créer ensuite dans un cycle séparé :

- `inc-01-implementation-plan.md`
- `inc-01-technical-scope.md`
- `inc-01-data-scope.md`
- `inc-01-start-checklist.md`

Ces livrables ne sont pas créés automatiquement dans ce premier commit.

---

## 10. Responsabilités avant premier commit applicatif

| Responsabilité | Porteur pressenti | Statut | Commentaire |
|----------------|------------------|--------|-------------|
| Décision produit INC-01 | Équipe projet Interv360 / SFIA | **À confirmer** | Go conditionnel acté dans `implementation-go-no-go.md` ; pas de nom de décideur formalisé dans les livrables. |
| Décision technique minimale | Équipe technique / delivery | **À confirmer** | Arbitrage stack/data de ce document — choix concrets encore ouverts. |
| Validation périmètre INC-01 | Product + delivery | **À confirmer** | Périmètre documenté (`mvp-scope.md`, `2026-06-29-inc-01-readiness-checklist.md`) ; gel explicite à acter. |
| Validation UX/UI suffisante | Product + UX | **Suffisant documentairement** | Figma liste demandes V2 validé ; autres écrans en specs Git — règle « non bloquant » maintenue. |
| Autorisation premier commit applicatif | Décideur projet (non nommé) | **Non donnée** | `realization-start-summary.md` : « autorisation de code non donnée » — inchangé jusqu'au cycle suivant. |

---

## 11. Décisions minimales avant code

| Décision | Statut | Niveau de blocage | Commentaire |
|----------|--------|-------------------|-------------|
| Gel INC-01 | **Documenté, à formaliser** | Bloquant | Périmètre INC-01 défini (16 MB P0-A, 5 écrans, STAT-01→STAT-06) ; acte formel de gel reste à produire. |
| Stack minimale | **Arbitrée indicativement** | Bloquant | Option B mono-app + séparation logique — **framework non choisi**. |
| Stratégie data | **Arbitrée indicativement** | Bloquant | Persistance locale structurée + données fictives — **mécanisme physique non choisi**. |
| Persistance | **Principe retenu, détail ouvert** | Bloquant | Persistance locale requise pour démo ; pas de SQL/DDL à ce stade. |
| Authentification | **Hors INC-01 documenté** | Non bloquant | `mvp-scope.md` — habilitations avancées hors périmètre ; pas d'auth requise pour démo locale fictive. |
| Hébergement / exécution locale | **Non arbitré** | Non bloquant | Exécution locale / démo suffisante pour INC-01 ; hébergement prod hors scope. |
| Qualité minimale avant commit | **Partiellement documentée** | Bloquant | Scénarios QA-NOM/REF disponibles (`inc-01-qa-scenarios.md`) ; stratégie tests automatisés non définie — à cadrer avant code. |

---

## 12. Recommandation d'arbitrage

**Décision proposée :**

- [ ] Autorisation de démarrage code INC-01
- [x] Autorisation conditionnelle de démarrage code INC-01
- [ ] Report du démarrage code

### Recommandation

**Autoriser conditionnellement** la préparation du démarrage code INC-01 sur la base :

- **stack :** mono-app web, séparation logique front / orchestration métier / data locale (option B) ;
- **data :** persistance locale structurée, données fictives uniquement, sans backend ni API externe ;
- **périmètre :** INC-01 inchangé — pas de CRM, dashboard, STAT-07/08, ni élargissement MVP.

Le code **ne doit pas démarrer immédiatement** : les choix concrets (framework, mécanisme de persistance, structure de repo applicatif) et l'**autorisation explicite** restent à produire.

### Conditions associées

1. Formaliser le **gel INC-01** (périmètre figé documentairement).
2. Confirmer la **stack indicative** sans imposer de technologie dans ce commit.
3. Confirmer le **mécanisme de persistance locale** et le seed des données de démo.
4. Produire **plan de réalisation + checklist de démarrage** (`delivery/interv360-inc-01-implementation-preparation`).
5. Obtenir une **autorisation explicite** de premier commit applicatif.
6. Maintenir les garde-fous : pas de CRM réel, pas d'API obligatoire, pas de données réelles.

### Point d'arrêt

**Arrêt avant tout `git init` applicatif, installation de dépendances, SQL ou API** — jusqu'à clôture du cycle `delivery/interv360-inc-01-implementation-preparation` avec autorisation explicite.

---

## 13. Suite proposée

Si l'arbitrage est validé, ouvrir un cycle séparé :

`delivery/interv360-inc-01-implementation-preparation`

**Objectif :**

- figer le périmètre technique INC-01 ;
- produire le plan de réalisation ;
- produire la checklist de démarrage ;
- préparer le premier commit applicatif ;
- confirmer explicitement l'autorisation de code.

Ce cycle ne doit pas élargir le périmètre au-delà d'INC-01.
