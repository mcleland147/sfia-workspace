# Interv360 — Publication Notion Prompt Library — QA / Testeur

**Projet** : PRJ-INTERV360  
**Chantier** : QA / Testeur  
**Cible Notion** : SFIA Prompt Library  
**Type** : Trace publication Notion CMP-001  
**Statut** : Published via CMP-001  
**Objet** : tracer la création des entrées PROMPT-QA-001 à PROMPT-QA-010 dans la base Notion SFIA Prompt Library

---

## 1. Objectif

Cette note **trace la publication** des **10 prompts QA / Testeur** dans **SFIA Prompt Library** via **CMP-001**.

- Publication réalisée via **`create prompt`** — **une commande par prompt**.
- Le **`.env`** a été chargé depuis `sfia-notion-sync` via `source`, **sans affichage de secret**.
- Fichiers temporaires créés dans **`/tmp/sfia-qa-prompts`** — **non commités**.
- **Git** reste la **source détaillée**.
- **Notion** contient désormais **une fiche par prompt**.

---

## 2. Contexte de publication

- Payload CMP validé : `notion-sync-qa-prompt-library-cmp-payload.json`
- Schéma prompt enrichi : catégorie **QA**, champs **summary** / **content** (`page_content`)
- Revue finale réalisée : `notion-sync-qa-prompt-library-cmp-payload-review.md`
- Absence de doublons vérifiée dans `exports/notion/prompts.json` avant publication — **aucun PROMPT-QA-*** existant
- Publication **autorisée** par la revue finale

---

## 3. Commandes exécutées

Chargement environnement (sans affichage) :

```bash
cd /Users/morris/Projects/sfia-workspace/tools/cmp-001
set -a && source /Users/morris/Projects/sfia-notion-sync/.env && set +a
```

Extraction des 10 items vers `/tmp/sfia-qa-prompts/PROMPT-QA-00X.json` (script Node, hors Git).

Créations CMP-001 :

```bash
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-001.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-002.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-003.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-004.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-005.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-006.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-007.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-008.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-009.json
node src/cli.js create prompt /tmp/sfia-qa-prompts/PROMPT-QA-010.json
```

- **Aucun secret documenté** dans cette trace.
- Commandes exécutées **séquentiellement** — arrêt immédiat en cas d'échec (non déclenché — 10/10 succès).

---

## 4. Résultats de publication

| Prompt | Statut | ID Notion | URL Notion |
|--------|--------|-----------|------------|
| PROMPT-QA-001 — Analyse de testabilité d'un besoin | Succès | `38d0bc33-8074-812a-958f-caff00aff8d4` | https://app.notion.com/p/PROMPT-QA-001-Analyse-de-testabilit-d-un-besoin-38d0bc338074812a958fcaff00aff8d4 |
| PROMPT-QA-002 — Revue QA d'une maquette UX/UI | Succès | `38d0bc33-8074-8196-bf5e-df2c97de1430` | https://app.notion.com/p/PROMPT-QA-002-Revue-QA-d-une-maquette-UX-UI-38d0bc3380748196bf5edf2c97de1430 |
| PROMPT-QA-003 — Questions réflexes QA en revue transverse | Succès | `38d0bc33-8074-813b-8759-f00e25b76984` | https://app.notion.com/p/PROMPT-QA-003-Questions-r-flexes-QA-en-revue-transverse-38d0bc338074813b8759f00e25b76984 |
| PROMPT-QA-004 — Lecture happy path / non happy path | Succès | `38d0bc33-8074-8124-a341-e7b2cef0f42f` | https://app.notion.com/p/PROMPT-QA-004-Lecture-happy-path-non-happy-path-38d0bc3380748124a341e7b2cef0f42f |
| PROMPT-QA-005 — Grille de risques qualité | Succès | `38d0bc33-8074-81f1-b576-d6063080dbe1` | https://app.notion.com/p/PROMPT-QA-005-Grille-de-risques-qualit-38d0bc33807481f1b576d6063080dbe1 |
| PROMPT-QA-006 — Préparation légère d'une stratégie de test | Succès | `38d0bc33-8074-8175-bb4e-d5dc8203fd2a` | https://app.notion.com/p/PROMPT-QA-006-Pr-paration-l-g-re-d-une-strat-gie-de-test-38d0bc3380748175bb4ed5dc8203fd2a |
| PROMPT-QA-007 — Revue d'anomalie métier | Succès | `38d0bc33-8074-81f8-b71c-f174eb77dab6` | https://app.notion.com/p/PROMPT-QA-007-Revue-d-anomalie-m-tier-38d0bc33807481f8b71cf174eb77dab6 |
| PROMPT-QA-008 — Traçabilité besoin / critère / test futur / anomalie | Succès | `38d0bc33-8074-8157-aabb-db1e0eb73e3e` | https://app.notion.com/p/PROMPT-QA-008-Tra-abilit-besoin-crit-re-test-futur-anomalie-38d0bc3380748157aabbdb1e0eb73e3e |
| PROMPT-QA-009 — Revue des critères d'acceptation futurs | Succès | `38d0bc33-8074-81bc-83e9-ca263805eca3` | https://app.notion.com/p/PROMPT-QA-009-Revue-des-crit-res-d-acceptation-futurs-38d0bc33807481bc83e9ca263805eca3 |
| PROMPT-QA-010 — Vérification des garde-fous QA | Succès | `38d0bc33-8074-816b-853b-d99cebe8211e` | https://app.notion.com/p/PROMPT-QA-010-V-rification-des-garde-fous-QA-38d0bc338074816b853bd99cebe8211e |

**Bilan** : **10/10** créations réussies.

---

## 5. Contenu publié

- **10 prompts QA** créés dans SFIA Prompt Library
- **Statut** : Draft
- **Catégorie** : QA
- **Modèle** : GPT
- **Version** : v0.1
- **Contenu page riche** via `summary` + `content` (objectif, entrées, sorties, garde-fous, validation, sources)
- **Tags** : QA, Testeur, Interv360 (+ UX/UI ou Vigilance selon prompt)
- **Vigilance** portée dans le contenu page pour **PROMPT-QA-006**, **PROMPT-QA-008**, **PROMPT-QA-009**

---

## 6. Garde-fous maintenus

- [x] aucun secret affiché ;
- [x] `.env` non modifié ;
- [x] aucun doublon détecté avant publication ;
- [x] pas de delivery ouvert ;
- [x] pas de backlog ;
- [x] pas de user stories ;
- [x] pas de code applicatif ;
- [x] pas de scénarios de tests projet ;
- [x] pas de cas de tests détaillés ;
- [x] fichiers `/tmp` non commités ;
- [x] Git reste source détaillée.

---

## 7. Limites restantes

- Pas de **`update prompt`** — correction ultérieure manuelle ou évolution CMP.
- Pas de **batch** — 10 commandes distinctes exécutées.
- Prompts publiés en **Draft** — passage à Testing/Approved après usage réel.
- Toute correction de contenu nécessitera une **action manuelle** ou une évolution CMP.

---

## 8. Conclusion

Les **10 prompts QA / Testeur** sont désormais **publiés dans SFIA Prompt Library** via CMP-001.

La Prompt Library contient **une fiche par prompt**, avec catégorie **QA**, statut **Draft**, modèle **GPT**, version **v0.1** et **contenu page riche**.

**Git** reste la source détaillée. **Aucun delivery** n'est ouvert.

---

*Trace publication CMP-001 — Prompt Library QA / Testeur — gouvernance SFIA — publié dans Notion.*
