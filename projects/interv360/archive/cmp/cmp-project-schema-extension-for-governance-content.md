# Interv360 — Vérification compatibilité CMP Project — publication Figma V1

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Jalon** : Figma V1  
**Type** : Vérification compatibilité schéma CMP Project  
**Statut** : Compatible — schéma étendu  
**Date** : 2026-06-27

---

## 1. Objectif

Sécuriser la **compatibilité réelle** du JSON de publication Figma V1 avec **CMP-001** avant exécution de `update project`, sans appel API Notion ni publication.

---

## 2. JSON testé

**Fichier** : `notion-sync-figma-v1-cmp-project-update.json`

| Champ | Présent | Rôle |
|-------|---------|------|
| `title` | oui | Propriété Notion — titre projet |
| `status` | oui | Propriété Notion — statut |
| `priority` | oui | Propriété Notion — priorité |
| `health` | oui | Propriété Notion — santé |
| `startDate` | oui | Propriété Notion — date de début |
| `summary` | oui | Contenu de page — résumé gouvernance |
| `content` | oui | Contenu de page — corps markdown |

---

## 3. Schéma Project analysé

**Fichier** : `tools/cmp-001/src/schemas/project.schema.json`

**État initial (v1.1.2)** : propriétés database uniquement (`title`, `status`, `priority`, `health`, `budget`, `startDate`, `endDate`). Pas de `summary` ni `content`.

**Validateur** (`validate.js`) : rejette tout champ absent du schéma (`Champs non reconnus`).

**Implémentation runtime** :

- `updateObject.js` : valide le payload, met à jour les propriétés Notion, puis appelle `buildPageContentBlocks` et `replacePageBlocks` si des blocs sont produits.
- `buildPageContentBlocks` (`notionClient.js`) : lit `payload.summary` (titre « Résumé » + paragraphe + séparateur) et `payload.content` (conversion markdown → blocs Notion).
- `buildNotionProperties` : ignore les champs `notionType: page_content` — ils ne sont pas mappés sur des colonnes database.

**Référence cohérente** : `knowledge.schema.json` définit déjà `summary` et `content` avec `notionType: page_content`.

---

## 4. Résultat de compatibilité

| Test | Avant extension | Après extension |
|------|-----------------|-----------------|
| Propriétés database | OK | OK |
| `summary` / `content` | **Échec validation** | **OK** |
| `buildPageContentBlocks` | Fonctionnel si validation contournée | Fonctionnel |
| `replacePageBlocks` sur `update project` | Prévu par `updateObject.js` | Prévu par `updateObject.js` |

**Validation CLI (post-extension)** :

```bash
cd tools/cmp-001
node -e "import { validatePayload } from './src/validate.js'; import fs from 'fs';
const p = JSON.parse(fs.readFileSync('../../projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json','utf8'));
validatePayload('project', p);
console.log('validation: OK');"
```

Résultat attendu : `validation: OK`.

---

## 5. Décision technique

**Approche A retenue** — extension du schéma Project.

Justification :

1. `update project` consomme déjà `summary` et `content` via `buildPageContentBlocks` / `replacePageBlocks`.
2. Le modèle Knowledge prouve le pattern `page_content` dans CMP-001.
3. Aucun impact sur les payloads Project sans contenu de page (champs optionnels).
4. `buildNotionProperties` exclut `page_content` — pas de collision avec les colonnes Projects.
5. Le JSON Figma V1 et le modèle cadrage (`01-cadrage/notion-sync-payload.json`) restent utilisables sans reformatage.

L’approche B (JSON strict sans contenu de page) aurait validé la CLI mais **aurait empêché** la publication du corps gouvernance sur la page projet.

---

## 6. Modification réalisée ou non réalisée

**Modification réalisée** : `tools/cmp-001/src/schemas/project.schema.json`

Ajout de :

```json
"summary": {
  "type": "string",
  "notionType": "page_content"
},
"content": {
  "type": "string",
  "notionType": "page_content"
}
```

**Non modifié** :

- `notion-sync-figma-v1-cmp-project-update.json` (déjà conforme après extension)
- payload initial Figma V1
- synthèse initiale Figma V1
- `.env`

---

## 7. Risques résiduels

| Risque | Niveau | Mitigation |
|--------|--------|------------|
| `replacePageBlocks` efface le contenu existant de la page | moyen | Relecture du JSON avant exécution ; sauvegarde export si besoin |
| Page ID obsolète | faible | Vérifier via `exports/notion/projects.json` ou `export projects` |
| Token / intégration Notion | opérationnel | `.env` et droits sur la base Projects avant exécution |
| Contenu markdown mal rendu | faible | Relecture post-publication manuelle |

---

## 8. Commande CMP à exécuter ensuite

**À exécuter manuellement** — non lancée dans cette tâche :

```bash
cd tools/cmp-001
node src/cli.js update project 38c0bc33-8074-8182-881a-c284f2cf789b ../../projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json
```

Pré-requis : `.env` configuré, page ID vérifié, décision explicite de publication.

---

## 9. Conclusion

La compatibilité CMP Project pour la publication Figma V1 est **sécurisée**.

Le schéma Project accepte désormais `summary` et `content` comme contenu de page (`page_content`), aligné sur Knowledge et sur l’implémentation existante de `update project`.

Le JSON préparé **passe la validation** et peut être utilisé pour une exécution manuelle contrôlée de `update project`.

**Aucune API Notion n’a été appelée** dans cette vérification.

---

*Vérification compatibilité CMP Project — clôture Figma V1 — gouvernance SFIA.*
