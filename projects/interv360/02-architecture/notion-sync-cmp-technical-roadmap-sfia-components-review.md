# Interv360 — Revue payload SFIA Components — roadmap technique CMP

**Projet** : PRJ-INTERV360  
**Type** : Revue manuelle payload Notion  
**Statut** : Reviewed — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create component** : non exécuté

---

## 1. Objectif

Valider le modèle de publication Notion de la **roadmap technique CMP** dans la catégorie **SFIA Components**.

---

## 2. Contexte

- La **Prompt Library** est complète : **39/39** prompts publiés.
- La **roadmap CMP** a été créée dans Git (`docs/roadmaps/cmp-technical-roadmap.md`).
- La première préparation ciblait une **mise à jour projet Interv360**.
- La cible a été corrigée : la documentation doit apparaître dans **SFIA Components**.
- **CMP-001** supporte le type `component`.
- **`update component`** n'est pas supporté.

---

## 3. Payload revu

| Élément | Valeur |
|---------|--------|
| **Type CMP** | `component` |
| **Base cible** | SFIA Components (`NOTION_DATABASE_COMPONENTS`) |
| **Payload** | `notion-sync-cmp-technical-roadmap-sfia-components-payload.json` |
| **Nombre d'items** | 9 |
| **Validation schéma** | 9/9 OK |
| **Publication Notion** | Non exécutée |
| **API Notion** | Non appelée |

**Contrôles effectués** :

- type CMP = `component` ;
- cible = SFIA Components ;
- 9 items valides contre `component.schema.json` ;
- composant principal **SFIA-COMP-CMP-001** intègre la roadmap complète (CMP-ROADMAP-001 à 008) dans `currentVersion` ;
- 8 évolutions cohérentes avec `docs/roadmaps/cmp-technical-roadmap.md` ;
- aucun secret présent dans le payload ;
- aucune publication Notion réalisée lors de cette revue.

---

## 4. Arbitrage modèle Notion

| Option | Description | Avantages | Risques | Décision |
|--------|-------------|-----------|---------|----------|
| **9 fiches** | 1 fiche CMP-001 + 8 fiches évolutions | Suivi détaillé | Risque d'éparpillement prématuré | **Non retenu** pour l'instant |
| **1 fiche** | 1 fiche CMP-001 avec roadmap intégrée | Simple, clair, composant centralisé | Moins granulaire | **Retenu** |

**Décision recommandée** :

> **Décision** : publier uniquement la fiche **SFIA-COMP-CMP-001 — CMP-001 Notion Connector** dans SFIA Components. Les 8 évolutions restent intégrées dans le contenu page et suivies dans Git.

---

## 5. Gestion du risque de doublon

Avant publication, **vérifier visuellement dans Notion** si une fiche **CMP-001**, **SFIA-COMP-CMP-001** ou **CMP-001 Notion Connector** existe déjà dans SFIA Components.

Comme **`update component`** n'est pas supporté :

- si une fiche existe déjà, **ne pas créer de doublon** ;
- soit **compléter manuellement** la fiche existante ;
- soit **attendre** une évolution CMP `update component` ;
- soit créer une nouvelle fiche **uniquement** si l'ancienne est clairement obsolète ou non structurée.

---

## 6. Item autorisé à publication

| Item | Décision |
|------|----------|
| **SFIA-COMP-CMP-001 — CMP-001 Notion Connector** | **Autorisé** à publication après vérification absence doublon |
| **CMP-ROADMAP-001** à **CMP-ROADMAP-008** | **Non publiés** comme fiches séparées à ce stade |

Les 8 évolutions restent documentées dans Git :

- `docs/roadmaps/cmp-technical-roadmap.md`
- contenu intégré dans la fiche composant principale (`currentVersion`)

Des fiches séparées pourront être créées plus tard si un vrai suivi technique Notion est mis en place.

---

## 7. Garde-fous

- [x] pas de publication automatique ;
- [x] pas de secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de delivery ouvert ;
- [x] pas de backlog ;
- [x] pas de user stories ;
- [x] pas de code applicatif ;
- [x] **Git** reste source détaillée ;
- [x] **Notion** porte la synthèse composant.

---

## 8. Décision finale

**Décision** : payload SFIA Components **validé partiellement** — publication autorisée **uniquement** pour **SFIA-COMP-CMP-001 — CMP-001 Notion Connector**, sous réserve d'absence de doublon dans Notion. Les 8 évolutions CMP-ROADMAP restent intégrées dans le contenu de la fiche composant et documentées dans Git.

---

## 9. Prochaine étape

1. Extraire uniquement l'item **SFIA-COMP-CMP-001** du payload.
2. Vérifier **absence de doublon** dans Notion (revue visuelle SFIA Components).
3. Publier via `create component` dans une **tâche dédiée**.
4. Tracer la publication dans Git.
5. Ouvrir ensuite une **PR vers `main`**.

---

## Script de publication future (non exécuté)

*À exécuter uniquement dans une tâche dédiée, après validation absence doublon.*

### Extraction de l'item autorisé

```bash
cd /Users/morris/Projects/sfia-workspace/tools/cmp-001
mkdir -p /tmp/sfia-components-roadmap
node - <<'NODE'
const fs = require('fs');
const payloadPath = '../../projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json';
const outPath = '/tmp/sfia-components-roadmap/SFIA-COMP-CMP-001.json';
const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));
const item = payload.items.find(i => i.title && i.title.includes('SFIA-COMP-CMP-001'));
if (!item) {
  throw new Error('SFIA-COMP-CMP-001 item not found');
}
fs.writeFileSync(outPath, JSON.stringify(item, null, 2));
console.log(`created ${outPath}`);
NODE
```

### Publication future (après validation)

```bash
set -a && source /Users/morris/Projects/sfia-notion-sync/.env && set +a
node src/cli.js create component /tmp/sfia-components-roadmap/SFIA-COMP-CMP-001.json
```

---

*Revue payload SFIA Components — roadmap technique CMP — gouvernance SFIA — non publié dans Notion.*
