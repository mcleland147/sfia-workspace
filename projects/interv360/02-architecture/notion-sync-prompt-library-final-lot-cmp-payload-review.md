# Interv360 — Revue finale payload CMP Prompt Library lot final

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : Final — prompts restants  
**Type** : Revue manuelle finale avant publication  
**Statut** : Reviewed — Ready for Prompt Library publication  
**Objet revu** : `notion-sync-prompt-library-final-lot-cmp-payload.json`  
**Décision** : Payload CMP lot final validé — publication des 12 prompts autorisée ensuite  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté

---

## 1. Objectif de la revue

Cette note **valide manuellement** le payload CMP **lot final** avant publication dans **SFIA Prompt Library**.

- Cette revue **ne publie rien** dans Notion.
- Elle **ne crée pas** les prompts Notion.
- Elle **n'exécute pas** CMP-001 (`create prompt`).
- Elle **ne modifie pas** `.env`.
- Elle **ne déclenche pas** delivery.

---

## 2. Documents revus

| Document | Rôle dans la revue |
|----------|-------------------|
| `cmp-prompt-schema-extension-for-final-prompt-lot.md` | Décision technique — catégories Framing, Arbitration, Role, Governance |
| `notion-sync-prompt-library-final-lot-preparation.md` | Préparation lot final — sources, qualité, arbitrages |
| `notion-sync-prompt-library-final-lot-cmp-payload.json` | **Objet principal** — 12 items CMP enrichis |
| `notion-sync-existing-prompt-library-inventory.md` / `.json` | Inventaire global — 39 catalogue, 27 publiés, 12 restants |
| `prompts/prompt-catalog.md` §4 | Catalogue — IDs, familles, sources pilote |
| `projects/interv360/01-cadrage/` | Livrables pilote (cadrage, arbitrages, UX, rôles, sync Notion) |
| `docs/methods/roles/` | Méthodes rôle liées (6 Role Methods + README) |
| `docs/methods/methods-structure-check.md` | Source PROMPT-GOV-002 |

**Vérification exclusion** : le payload ne contient **aucun** prompt déjà publié (QA-001 à 010, ARCH-001, SEC-001, UXUI-001 à 015).

---

## 3. Vérification extension schéma

Inspection de `tools/cmp-001/src/schemas/prompt.schema.json` — sans exécution CMP.

| Élément | Attendu | Constat | Statut |
|---------|---------|---------|--------|
| **Catégorie Framing supportée** | Enum `category` inclut `Framing` | Présent | **OK** |
| **Catégorie Arbitration supportée** | Enum inclut `Arbitration` | Présent | **OK** |
| **Catégorie Role supportée** | Enum inclut `Role` | Présent | **OK** |
| **Catégorie Governance supportée** | Enum inclut `Governance` | Présent | **OK** |
| **Catégorie UX/UI toujours supportée** | Enum inclut `UX/UI` | Présent | **OK** |
| **QA, Architecture, Security inchangées** | Toujours dans l'enum | Présentes | **OK** |
| **summary supporté** | `notionType: page_content` | Présent | **OK** |
| **content supporté** | `notionType: page_content` | Présent | **OK** |
| **page_content supporté** | `buildPageContentBlocks` actif | Mécanisme générique inchangé | **OK** |
| **Code CMP non modifié** | Extension schéma suffisante | `createObject.js` inchangé | **OK** |
| **create prompt disponible** | CLI active | `node src/cli.js create prompt <json-file>` | **OK** |
| **update prompt absent** | Hors périmètre | Seuls knowledge et project | **OK** |
| **batch absent** | Une commande par entrée | Pas de batch natif | **OK** |

---

## 4. Vérification payload CMP

Validation technique exécutée localement — **sans publication**.

| Contrôle | Résultat attendu | Statut |
|----------|------------------|--------|
| JSON valide | Parse sans erreur | **OK** |
| 12 items | `items.length === 12` | **OK** |
| type prompt | `"type": "prompt"` | **OK** |
| lot.publish_to_notion: false | Publication désactivée | **OK** |
| lot.manual_review_required: true | Revue manuelle requise | **OK** |
| chaque item contient title | `PROMPT-CAD-*` à `PROMPT-GOV-*` | **OK** |
| chaque item contient status: Draft | Aligné synthèse Draft v0.1 | **OK** |
| chaque item contient version: v0.1 | Version initiale | **OK** |
| chaque item contient model: GPT | Modèle cohérent | **OK** |
| chaque item contient une catégorie CMP supportée | Framing, Arbitration, UX/UI, Role, Governance | **OK** |
| chaque item contient tags | Tags pertinents par famille | **OK** |
| chaque item contient summary | Résumé court présent | **OK** |
| chaque item contient content | Objectif, Entrées, Sortie, Garde-fous, Validation, Sources, Limites | **OK** |
| validation schéma CMP | 12 items passent `validatePayload('prompt', item)` | **OK** |

**Doublons** : `exports/notion/prompts.json` — **aucun** `PROMPT-CAD-*`, `PROMPT-ARB-*`, `PROMPT-UX-*`, `PROMPT-ROLE-*`, `PROMPT-GOV-*` détecté. *Export obsolète — revérifier avant publication.*

---

## 5. Revue des 12 prompts

| Prompt | Category | Source | Content riche | Vigilance | Évaluation |
|--------|----------|--------|---------------|-----------|------------|
| PROMPT-CAD-001 — Cadrage métier projet | Framing | `business-framing.md` | Oui | Non | **Validé** |
| PROMPT-CAD-002 — Revue cohérence cadrage | Framing | `framing-review.md` | Oui | Non | **Validé** |
| PROMPT-ARB-001 — Arbitrages MVP | Arbitration | `mvp-arbitrations.md` | Oui | Non | **Validé** |
| PROMPT-ARB-002 — Validation arbitrages MVP | Arbitration | `mvp-arbitration-validation.md` | Oui | Non | **Validé** |
| PROMPT-UX-001 — Brief UX/UI avant Figma | UX/UI | `ux-ui-brief.md` | Oui | Non | **Validé** |
| PROMPT-UX-002 — Validation brief UX/UI | UX/UI | `ux-ui-brief-validation.md` | Oui | Non | **Validé** |
| PROMPT-UX-003 — Revue dashboard KPI UX | UX/UI | `dashboard-kpi-ux-review.md` | Oui | Non | **Validé** |
| PROMPT-ROLE-001 — Méthode globale par rôle | Role | `role-methods-framing.md` | Oui | Non | **Validé** |
| PROMPT-ROLE-002 — Revue méthode par rôle | Role | `role-methods-review.md` | Oui | Non | **Validé** |
| PROMPT-ROLE-003 — Extraction méthode rôle | Role | `docs/methods/roles/` | Oui | Oui — formalisation fichier recommandée | **Validé avec vigilance** |
| PROMPT-GOV-001 — Synchronisation gouvernance Notion projet | Governance | `notion-sync-summary.md` + payload | Oui | Oui — méta-sync Notion | **Validé avec vigilance** |
| PROMPT-GOV-002 — Contrôle structure méthodes | Governance | `methods-structure-check.md` | Oui | Non | **Validé** |

**Bilan** : **10 Validé** ; **2 Validé avec vigilance** (ROLE-003, GOV-001). Sections `## Limites` et garde-fous explicites dans les contenus payload.

**Note transverse** : aucun des 12 prompts n'a encore de fichier dédié sous `prompts/<famille>/` — synthèse Draft v0.1 depuis livrables projet, pas corps exécutable complet.

---

## 6. Arbitrage des deux points sensibles

### 6.1 PROMPT-GOV-001 — Synchronisation gouvernance Notion projet

**Analyse** :

- Prompt **méta-sync Notion** — proximité workflow outillage CMP-001.
- Risque : confondre **préparation de sync** et **publication automatique**.
- Le contenu payload insiste déjà sur :
  - `publish_to_notion: false` par défaut ;
  - revue manuelle obligatoire ;
  - aucune API ou CMP sans décision explicite ;
  - pas de secret affiché ;
  - Git reste source détaillée.

**Décision** : **Inclure PROMPT-GOV-001 en Draft avec vigilance explicite.**

Justification : même logique que **PROMPT-UXUI-011** (publié Lot 2 avec vigilance méta-sync). La fiche Prompt Library documente le garde-fou ; la publication en Draft v0.1 ne déclenche aucune sync.

### 6.2 PROMPT-ROLE-003 — Extraction méthode rôle

**Analyse** :

- Prompt **utile** pour capitalisation SFIA (enrichissement `docs/methods/roles/`).
- Source **partielle** — méthodes existantes, pas de fichier prompt dédié.
- Le contenu payload précise :
  - formalisation fichier sous `prompts/roles/` recommandée avant statut Tested ;
  - workflow d'extraction à formaliser explicitement ;
  - modèle d'enrichissement référencé (`role-methods-enrichment-after-adr-p1.md`).

**Décision** : **Inclure PROMPT-ROLE-003 en Draft avec vigilance explicite.**

Justification : la synthèse Draft v0.1 est suffisante pour gouvernance Prompt Library ; la formalisation complète reste une évolution Git distincte avant Tested.

---

## 7. Points de vigilance maintenus

- **Lot final multi-familles** — 4 catégories CMP nouvelles + UX/UI.
- **12 commandes** `create prompt` distinctes.
- Première publication en **Draft**.
- Pas de **`update prompt`** ; pas de **batch**.
- Vérifier l'**absence de doublons** **immédiatement avant publication**.
- **Export Notion potentiellement obsolète** — ré-exporter si possible.
- Si une création **échoue**, ne pas relancer à l'aveugle — diagnostiquer, tracer, reprendre sur les entrées manquantes.
- **Tracer précisément** les prompts créés (ID, URL).
- Ne pas faire de **push forcé** ; ne pas **merger automatiquement** dans main.

### Vigilances métier

- **PROMPT-GOV-001** : méta-sync Notion — **pas de publication automatique**.
- **PROMPT-ROLE-003** : **formalisation sous `prompts/roles/`** recommandée avant statut Tested.
- **Tous les prompts** : synthèse **Draft v0.1** — pas encore corps exécutable complet sous `prompts/<famille>/`.

---

## 8. Commandes de publication autorisées ensuite

*À exécuter dans une tâche dédiée — non exécutées dans cette revue.*

Le payload agrégé contient 12 items. Pour publication, générer 12 fichiers temporaires dans `/tmp/sfia-final-prompts`, puis :

```bash
cd /Users/morris/Projects/sfia-workspace/tools/cmp-001
set -a && source /Users/morris/Projects/sfia-notion-sync/.env && set +a
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-CAD-001.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-CAD-002.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-ARB-001.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-ARB-002.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-UX-001.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-UX-002.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-UX-003.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-ROLE-001.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-ROLE-002.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-ROLE-003.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-GOV-001.json
node src/cli.js create prompt /tmp/sfia-final-prompts/PROMPT-GOV-002.json
```

- **Ne jamais afficher** `.env` ; **ne jamais** faire `cat .env`.
- Fichiers `/tmp` **non commités**.
- Publication effective dans une **tâche dédiée** avec log Git.

---

## 9. Décision de revue

**Décision** : **payload CMP lot final validé — publication des 12 prompts autorisée ensuite en Draft v0.1, avec vigilance explicite sur PROMPT-GOV-001 et PROMPT-ROLE-003**.

### Justification

- Schéma CMP **enrichi** (Framing, Arbitration, Role, Governance) — QA, Architecture, Security, UX/UI inchangées.
- **Catégories propres** par famille — pas de mapping générique Analysis/Agent.
- Contenu page **riche** sur les 12 items (Objectif, Entrées, Sortie, Garde-fous, Sources, Limites).
- **Vigilances** portées dans les contenus (GOV-001, ROLE-003).
- **Absence de doublons** dans l'export disponible.
- **Aucun prompt déjà publié** repris dans le payload.
- **Aucune publication** exécutée dans cette revue.

---

## 10. Prochaine étape autorisée

1. Vérifier une dernière fois l'**absence de doublons** dans Notion ou l'export disponible.
2. **Publier les 12 prompts** via `create prompt` dans une tâche dédiée.
3. **Tracer la publication** dans Git (log lot final).
4. **Pousser** la branche courante.
5. Créer une **note de clôture Prompt Library** si **39/39** publiés.

---

## 11. Conclusion

Le **payload CMP lot final** est **validé**.

Les **12 prompts** peuvent être publiés dans **SFIA Prompt Library** via `create prompt`, dans une **tâche dédiée**, avec vigilance explicite sur **PROMPT-GOV-001** et **PROMPT-ROLE-003**.

La présente revue **n'a exécuté aucune publication** et **n'a ouvert aucun delivery**.

---

*Revue manuelle finale payload CMP lot final — gouvernance SFIA — non publié dans Notion.*
