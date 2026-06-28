# SFIA — Standard des livrables BPMN

**Type** : Standard méthodologique  
**Statut** : Draft  
**Domaine** : Process Modeling / BPMN  
**Source** : `bpmn-method-integration-audit.md`  
**Méthode associée** : `bpmn-process-modeling-method.md`

---

## 1. Objectif

Ce standard définit la **structure**, les **formats** et les **règles de nommage** attendus pour un **cycle BPMN projet** dans SFIA.

Il s'applique à tout projet utilisant la capacité BPMN — premier cas d'usage prévu : **Interv360** (Phase D).

---

## 2. Structure projet standard

```
<project>/03-process/
├── README.md
├── process-scope.md
├── bpmn/
│   ├── <project>-main-process.bpmn
│   ├── <project>-exceptions.bpmn
│   └── <project>-integration-errors.bpmn
├── exports/
│   ├── <project>-main-process.svg
│   ├── <project>-exceptions.svg
│   └── <project>-integration-errors.svg
├── process-analysis.md
└── process-cycle-closure.md
```

**Note** : le dossier projet est `<project>/03-process/` — à créer en Phase D uniquement. Ne pas confondre avec `03-design/` (UX / maquettes) sur les projets existants.

---

## 3. Rôle des fichiers

| Fichier / dossier | Rôle | Obligatoire ? |
|-------------------|------|---------------|
| `README.md` | Index phase processus, liens diagrammes, garde-fous | Oui |
| `process-scope.md` | Périmètre BPMN : acteurs, diagrammes prévus, hypothèses, hors périmètre | Oui |
| `bpmn/` | Sources BPMN versionnées (`.bpmn`) | Oui |
| `exports/` | Exports SVG/PNG de lecture | Oui (SVG recommandé) |
| `process-analysis.md` | Traçabilité : règles RG, statuts, ADR candidates, écrans, limites | Oui |
| `process-cycle-closure.md` | Synthèse fin de cycle, suites recommandées | Oui (fin de cycle) |

---

## 4. Formats

| Format | Rôle | Versionné dans Git ? |
|--------|------|----------------------|
| `.bpmn` | **Source de vérité** — modèle éditable Camunda Modeler | **Oui** — obligatoire |
| `.svg` | Export vectoriel pour revue et documentation | Oui — recommandé |
| `.png` | Export raster pour supports ponctuels | Oui — acceptable |
| `.md` | Analyse, scope, clôture, traçabilité | **Oui** — obligatoire |

**Règle** : ne jamais remplacer le `.bpmn` par une image seule — l'export est un **complément de lecture**.

---

## 5. Nommage recommandé

### Règles générales

- **kebab-case** pour tous les fichiers ;
- **préfixe projet** en début de nom (ex. `interv360-`) ;
- **suffixes explicites** : `main-process`, `exceptions`, `integration-errors` ;
- un diagramme = un fichier `.bpmn` dédié (niveaux 1 à 3).

### Exemples Interv360 (Phase D — non créés en Phase B)

| Fichier | Niveau |
|---------|--------|
| `interv360-sav-mvp.bpmn` | Processus principal SAV MVP |
| `interv360-sav-exceptions.bpmn` | Exceptions métier |
| `interv360-integration-errors.bpmn` | Anomalies d'intégration |

Exports correspondants : `interv360-sav-mvp.svg`, etc., dans `exports/`.

---

## 6. Diagrammes recommandés

| Diagramme | Usage | Priorité |
|-----------|-------|----------|
| **Processus principal** | Cycle nominal MVP — happy path structuré | Haute — obligatoire |
| **Exceptions métier** | Doublons, attente client, retard, clôture sans signature | Haute — obligatoire si exceptions identifiées |
| **Anomalies d'intégration** | Erreurs sync, reprise manuelle, gravité | Haute — si intégrations simulées |
| **Sous-processus futur** | Géoloc, IA, extensions hors MVP | Basse — uniquement si besoin documenté |

**Principe** : ne pas sur-produire de diagrammes — **3 diagrammes maximum** pour un MVP typique (aligné audit Phase A).

---

## 7. Lien avec les documents Markdown

| Document | Contenu attendu |
|----------|-----------------|
| `process-scope.md` | Périmètre, acteurs, diagrammes listés, sources amont, hors périmètre |
| `process-analysis.md` | Pour chaque diagramme : éléments BPMN ↔ règles RG ↔ statuts ↔ écrans ; hypothèses ; limites ; ADR candidates identifiées |
| `process-cycle-closure.md` | Synthèse cycle, décisions, suites (ADR, archi fonctionnelle, design) |

**Règle** : un fichier `.bpmn` **doit** être accompagné d'une section d'analyse dans `process-analysis.md`.

---

## 8. Exports

| Règle | Détail |
|-------|--------|
| Format **recommandé** | **SVG** — lisible, versionnable, scalable |
| Format **acceptable** | PNG — présentations, revues rapides |
| Moment d'export | **Après validation** du diagramme (revue interne ou checklist) |
| Emplacement | `exports/` — jamais à la racine du projet |
| Cohérence | Nom d'export = nom du `.bpmn` avec extension `.svg` ou `.png` |

---

## 9. Garde-fous

- [ ] `.bpmn` **versionné** dans Git ;
- [ ] export **séparé** dans `exports/` ;
- [ ] **analyse Markdown** associée ;
- [ ] pas de **backlog** dans les livrables BPMN ;
- [ ] pas de **tests** produits via BPMN ;
- [ ] pas de **code** dans `03-process/` ;
- [ ] pas de **publication Notion automatique** ;
- [ ] structure conforme à ce standard pour toute PR cycle BPMN.

---

## 10. Conclusion

Ce standard doit être **appliqué à tout projet SFIA** utilisant BPMN.

**Documents associés :**

- `bpmn-process-modeling-method.md` — quand et comment modéliser ;
- `bpmn-integration-checklist.md` — prérequis avant ouverture cycle ;
- `bpmn-method-integration-audit.md` — audit Phase A.

**Phase suivante** : Phase C — templates (`docs/templates/process/`) et prompts (`prompts/bpmn/`).

---

*Standard des livrables BPMN — SFIA — gouvernance produit.*
