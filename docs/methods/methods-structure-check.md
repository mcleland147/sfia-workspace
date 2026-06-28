# SFIA — Methods Structure Check

**Statut** : Draft  
**Objet** : contrôle de cohérence post-réorganisation des méthodes SFIA  
**Date** : 2026-06-28

---

## 1. Objectif du contrôle

Ce contrôle vérifie la **cohérence de l'arborescence SFIA** après le déplacement des méthodes par rôle vers `docs/methods/roles/`.

Il confirme que :

- les dossiers cibles existent ;
- les 6 Role Methods sont présents ;
- les anciens chemins (`sfia/methods/`, `methods/` à la racine) ne sont plus des cibles actives ;
- les README et références documentaires pointent vers la cible active ;
- la séparation documentation / prompts / projets / outils est lisible.

---

## 2. Arborescence cible

```
sfia-workspace/
├── docs/                    # Documentation méthodologique SFIA
│   └── methods/             # Méthodes SFIA réutilisables
│       ├── roles/           # Méthodes SFIA par rôle
│       └── process/         # Modélisation processus / BPMN
├── prompts/                 # Prompts réutilisables
├── projects/                # Projets pilotes alimentant SFIA
├── tools/                   # Outillage SFIA
├── templates/               # Modèles de livrables (à venir à la racine)
├── standards/               # Standards communs (à venir à la racine)
├── components/              # Composants réutilisables
└── exports/                 # Exports générés
```

---

## 3. Vérification des dossiers attendus

| Dossier | Statut | Rôle attendu | Commentaire |
|---------|--------|--------------|-------------|
| **docs/** | Existe | Documentation méthodologique et gouvernance SFIA | Contient foundation, architecture, methods, adr, rex, etc. |
| **docs/methods/** | Existe | Méthodes SFIA réutilisables | README présent |
| **docs/methods/roles/** | Existe | Méthodes SFIA par rôle | 6 Role Methods + README |
| **docs/methods/process/** | Existe | Modélisation processus / BPMN | Audit, méthode, standard livrables, checklist |
| **prompts/** | Existe | Prompts réutilisables Cursor/ChatGPT | README présent ; registre officiel dans Notion |
| **projects/** | Existe | Projets pilotes (ex. Interv360) | Alimentent la capitalisation SFIA |
| **tools/** | Existe | Outillage SFIA (ex. CMP-001) | Connecteur Notion Sync embarqué |

**Dossiers connexes (hors périmètre strict du contrôle, signalés) :**

| Dossier | Statut | Commentaire |
|---------|--------|-------------|
| **templates/** (racine) | Absent | Prévu README racine — à créer ultérieurement |
| **standards/** (racine) | Absent | Prévu README racine — à créer ultérieurement |
| **components/** | Existe | Présent au workspace |
| **exports/** | Existe | Contient exports/notion/ |

---

## 4. Vérification des méthodes rôle

| Fichier | Statut | Commentaire |
|---------|--------|-------------|
| architect-method.md | Présent | Draft — source PRJ-INTERV360 |
| business-analyst-method.md | Présent | Draft — source PRJ-INTERV360 |
| product-owner-method.md | Présent | Draft — source PRJ-INTERV360 |
| project-manager-method.md | Présent | Draft — chemins internes alignés sur docs/methods/roles/ |
| rssi-method.md | Présent | Draft — source PRJ-INTERV360 |
| ux-ui-designer-method.md | Présent | Draft — source PRJ-INTERV360 |

**Résultat :** 6/6 fichiers Role Method présents dans `docs/methods/roles/`.

---

## 5. Vérification des anciens chemins

| Ancien chemin | Statut | Action |
|---------------|--------|--------|
| **sfia/methods/** | Absent | Aucune — supprimé lors de la réorganisation précédente |
| **sfia/methods/roles/** | Absent | Aucune |
| **methods/** (racine) | Absent | Aucune — vidé puis supprimé lors du déplacement vers docs/ |
| **methods/roles/** (racine) | Absent | Aucune |

**Résultat :** aucun ancien dossier actif détecté.

---

## 6. Références documentaires

Recherche workspace sur `sfia/methods/`, `methods/roles/` (racine) et `methods/` (racine hors docs/).

| Fichier contrôlé | Anciennes références trouvées | Action réalisée |
|------------------|--------------------------------|-----------------|
| README.md | Aucune référence active aux anciens chemins | Conforme — cible `docs/methods/roles/` |
| docs/README.md | Chemins relatifs `methods/`, `methods/roles/` | Conforme — relatifs à docs/ (= docs/methods/) |
| role-methods-framing.md | Aucune — déjà `docs/methods/roles/` | Conforme |
| role-methods-review.md | Aucune — déjà `docs/methods/roles/` | Conforme |
| project-manager-method.md | Aucune — déjà `docs/methods/roles/` | Conforme |
| Autres fichiers workspace | Aucune référence à `sfia/methods/` | Conforme |

**Note :** les chemins `methods/` et `methods/roles/` dans `docs/README.md` sont des **chemins relatifs sous docs/** — ils désignent correctement `docs/methods/` et `docs/methods/roles/`, pas l'ancienne racine `methods/`.

---

## 7. README contrôlés

| README | Statut | Commentaire |
|--------|--------|-------------|
| **README.md** (racine) | Conforme | Arborescence cible avec docs/methods/roles/ ; séparation prompts/projects/tools |
| **docs/README.md** | Conforme | methods/ et methods/roles/ listés comme sous-dossiers docs/ |
| **docs/methods/README.md** | Conforme | Rôle, `roles/` et `process/` (BPMN) documentés |
| **docs/methods/roles/README.md** | Conforme | Structure Role Method et templates vivants documentés |
| **prompts/README.md** | Conforme | Pas de référence aux anciens chemins ; distinction Notion/local |

**Aucune correction README nécessaire** — incohérences de chemin non détectées.

---

## 8. Contrôle capitalisation SFIA

Cette réorganisation améliore :

| Dimension | Amélioration |
|-----------|--------------|
| **Lisibilité produit SFIA** | Méthodes regroupées sous docs/ avec foundation, architecture, adr |
| **Séparation documentation / prompts / projets / outils** | docs/methods/ ≠ prompts/ ≠ projects/ ≠ tools/ |
| **Traçabilité assets méthodologiques** | Emplacement unique et stable : docs/methods/roles/ |
| **Documents vivants** | READMEs rappellent l'enrichissement continu par projets pilotes |

---

## 9. Décision

**L'arborescence active des méthodes SFIA est désormais `docs/methods/`, avec les méthodes par rôle dans `docs/methods/roles/`.**

Le contrôle est **conforme** : dossiers cibles présents, 6 Role Methods en place, anciens chemins absents, références actives alignées, README cohérents.

---

## 10. Points d'attention

- Les **futurs prompts Cursor** doivent utiliser `docs/methods/roles/` comme cible active.
- Les **futures références Notion** devront pointer vers cette cible (gouvernance, pas duplication de contenu).
- **Ne pas recréer** `sfia/methods/` ou `methods/` à la racine du workspace.
- Les dossiers **templates/** et **standards/** à la racine sont **à venir** — ne pas les confondre avec `docs/templates/` et `docs/standards/` déjà présents sous docs/.
- Les **5 rôles non encore extraits** (Concepteur fonctionnel, QA, FinOps, GreenOps, Data/IA) devront être ajoutés dans `docs/methods/roles/` après enrichissement pilote.
- Le dossier **`docs/methods/process/`** contient la capacité BPMN : méthode, standard livrables, checklist d'intégration — templates et prompts BPMN en Phase C.

---

*Document produit dans le cadre de la gouvernance SFIA — contrôle post-réorganisation.*
