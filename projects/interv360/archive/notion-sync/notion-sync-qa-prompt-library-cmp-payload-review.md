# Interv360 — Revue finale payload CMP Prompt Library QA / Testeur

**Projet** : PRJ-INTERV360  
**Chantier** : QA / Testeur  
**Cible Notion** : SFIA Prompt Library  
**Type** : Revue manuelle finale avant publication  
**Statut** : Reviewed — Ready for Prompt Library publication  
**Objet revu** : `notion-sync-qa-prompt-library-cmp-payload.json`  
**Décision** : Payload CMP Prompt Library QA validé — publication des 10 prompts autorisée ensuite  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté

---

## 1. Objectif de la revue

Cette note **valide manuellement** le payload CMP enrichi avant publication dans **SFIA Prompt Library**.

- Cette revue **ne publie rien** dans Notion.
- Elle **ne crée pas** les prompts Notion.
- Elle **n'exécute pas** CMP-001 (`create prompt`).
- Elle **ne modifie pas** `.env`.
- Elle **ne déclenche pas** delivery.

---

## 2. Documents revus

| Document | Rôle dans la revue |
|----------|-------------------|
| `cmp-prompt-schema-extension-for-qa-library.md` | Décision technique — extension schéma QA + page_content |
| `notion-sync-qa-prompt-library-cmp-payload.json` | **Objet principal** — 10 items CMP enrichis |
| `notion-sync-qa-prompt-library-preparation.md` | Préparation initiale et mise à jour post-extension |
| `prompts/qa/qa-tester-prompt-family.md` | Source détaillée — objectifs, entrées, sorties, garde-fous |
| `prompts/prompt-catalog.md` | Catalogue SFIA §14 — référencement PROMPT-QA-001 à PROMPT-QA-010 |
| `docs/methods/roles/qa-tester-method.md` | Méthode officielle QA / Testeur liée |
| `projects/interv360/02-architecture/prompt-catalog-qa-tester-validation.md` | Validation famille — 7 validés, 3 avec vigilance |

---

## 3. Vérification extension schéma

Inspection de `tools/cmp-001/src/schemas/prompt.schema.json` et du flux `createObject.js` — sans exécution CMP.

| Élément | Attendu | Constat | Statut |
|---------|---------|---------|--------|
| **Catégorie QA supportée** | Enum `category` inclut `QA` | `QA` présent dans l'enum | **OK** |
| **summary supporté** | Champ optionnel déclaré | `summary` avec `notionType: page_content` | **OK** |
| **content supporté** | Champ optionnel déclaré | `content` avec `notionType: page_content` | **OK** |
| **page_content supporté** | Mécanisme aligné project/knowledge | `buildPageContentBlocks` transforme summary + content en blocs | **OK** |
| **Code CMP non modifié** | Extension schéma suffisante | `createObject.js` inchangé — appel générique à `buildPageContentBlocks` | **OK** |
| **create prompt disponible** | Commande CLI active | `node src/cli.js create prompt <json-file>` | **OK** |
| **update prompt absent** | Hors périmètre | `UPDATERS` = knowledge, project uniquement | **OK** |
| **batch absent** | Une commande par entrée | Pas de commande batch native | **OK** |

---

## 4. Vérification payload CMP

Validation technique exécutée localement (schéma CMP + contrôles structurels) — **sans publication**.

| Contrôle | Résultat attendu | Statut |
|----------|------------------|--------|
| JSON valide | Parse sans erreur | **OK** |
| 10 items | `items.length === 10` | **OK** |
| type prompt | `"type": "prompt"` | **OK** |
| publish_to_notion: false | Publication désactivée | **OK** |
| manual_review_required: true | Revue manuelle requise | **OK** |
| category_mapping.cmp_enum_used: QA | Catégorie QA mappée | **OK** |
| chaque item contient title | Format `PROMPT-QA-NNN — Nom` | **OK** |
| chaque item contient status: Draft | Première publication en Draft | **OK** |
| chaque item contient version: v0.1 | Version initiale | **OK** |
| chaque item contient model: GPT | Modèle cohérent | **OK** |
| chaque item contient category: QA | Catégorie QA propre | **OK** |
| chaque item contient tags | QA, Testeur, Interv360 (+ UX/UI ou Vigilance si applicable) | **OK** |
| chaque item contient summary | Résumé court présent | **OK** |
| chaque item contient content | Sections Objectif, Entrées, Sortie, Garde-fous, Validation, Sources | **OK** |
| validation schéma CMP | 10 items passent `validatePayload('prompt', item)` | **OK** |

**Doublons** : `exports/notion/prompts.json` (2 entrées : PRM-001, 1 test archivé) — **aucun PROMPT-QA-*** détecté.

---

## 5. Revue des 10 prompts

| Prompt | Category | Content riche | Vigilance | Évaluation |
|--------|----------|---------------|-----------|------------|
| **PROMPT-QA-001** — Analyse de testabilité d'un besoin | QA | Oui | Non | **Validé** |
| **PROMPT-QA-002** — Revue QA d'une maquette UX/UI | QA | Oui | Non | **Validé** |
| **PROMPT-QA-003** — Questions réflexes QA en revue transverse | QA | Oui | Non | **Validé** |
| **PROMPT-QA-004** — Lecture happy path / non happy path | QA | Oui | Non | **Validé** |
| **PROMPT-QA-005** — Grille de risques qualité | QA | Oui | Non | **Validé** |
| **PROMPT-QA-006** — Préparation légère d'une stratégie de test | QA | Oui | Oui — pas de stratégie de recette complète | **Validé** |
| **PROMPT-QA-007** — Revue d'anomalie métier | QA | Oui | Non | **Validé** |
| **PROMPT-QA-008** — Traçabilité besoin / critère / test futur / anomalie | QA | Oui | Oui — pas de matrice de tests détaillée | **Validé** |
| **PROMPT-QA-009** — Revue des critères d'acceptation futurs | QA | Oui | Oui — pas de user stories ni backlog | **Validé** |
| **PROMPT-QA-010** — Vérification des garde-fous QA | QA | Oui | Non | **Validé** |

**Bilan** : 10 **Validé** ; contenu aligné avec `qa-tester-prompt-family.md` et `prompt-catalog-qa-tester-validation.md`.

---

## 6. Points de vigilance maintenus

- Première publication en **Draft** — passage à Testing/Approved après usage réel.
- Pas de **`update prompt`** — mise à jour ultérieure hors périmètre CMP actuel.
- Pas de **batch** — **10 commandes** `create prompt` distinctes.
- Vérifier l'**absence de doublons PROMPT-QA-*** dans Notion ou `exports/notion/prompts.json` immédiatement avant publication.
- Si une création **échoue au milieu**, ne pas relancer à l'aveugle — diagnostiquer, tracer, reprendre sur les entrées manquantes uniquement.
- **Tracer précisément** les prompts créés (ID, URL) et ceux éventuellement en erreur.
- Ne pas faire de **push forcé**.
- Ne pas **merger automatiquement** dans main.

---

## 7. Commandes de publication autorisées ensuite

*À exécuter dans une tâche dédiée — non exécutées dans cette revue.*

Le payload agrégé contient 10 items. Pour publication, extraire chaque item en fichier JSON temporaire (ex. `/tmp/PROMPT-QA-001.json`) puis appeler :

```bash
cd /Users/morris/Projects/sfia-workspace/tools/cmp-001
set -a && source /Users/morris/Projects/sfia-notion-sync/.env && set +a
# pour chaque PROMPT-QA-001 à PROMPT-QA-010 :
node src/cli.js create prompt /tmp/PROMPT-QA-00X.json
```

Précisions :

- **Ne jamais afficher** `.env` ; **ne jamais** faire `cat .env`.
- Les fichiers `/tmp` **ne doivent pas être commités**.
- La publication effective sera faite dans une **tâche dédiée** avec log Git de traçage.

---

## 8. Décision de revue

**Décision** : **payload CMP Prompt Library QA validé — publication des 10 prompts autorisée ensuite**.

### Justification

- Schéma CMP **enrichi** (QA + page_content) et **validé** sur les 10 items.
- Catégorie **QA** propre — Testeur porté par les tags.
- Contenu page **riche** (objectif, entrées, sorties, garde-fous, validation, sources).
- **10 prompts complets** — alignés avec la famille Git et la validation manuelle.
- Points de **vigilance** portés dans les contenus (QA-006, QA-008, QA-009).
- **Aucune publication** exécutée dans cette revue.

---

## 9. Prochaine étape autorisée

1. Vérifier une dernière fois l'**absence de doublons PROMPT-QA-*** dans Notion ou `exports/notion/prompts.json`.
2. **Publier les 10 prompts** via `create prompt` dans une tâche dédiée.
3. **Tracer la publication** dans Git (log de publication Prompt Library).
4. **Pousser** la branche courante.
5. **Ouvrir ou mettre à jour** la PR vers main.

---

## 10. Conclusion

Le **payload CMP enrichi** pour la **Prompt Library QA / Testeur** est **validé**.

Les **10 prompts** peuvent être publiés dans **SFIA Prompt Library** via `create prompt`, dans une **tâche dédiée**.

La présente revue **n'a exécuté aucune publication** et **n'a ouvert aucun delivery**.

---

*Revue manuelle finale payload CMP Prompt Library — gouvernance SFIA — non publié dans Notion.*
