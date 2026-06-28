# Interv360 — Revue finale payload CMP Prompt Library Lot 2 — UX/UI V1 Governance

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : 2 — UX/UI V1 Governance  
**Type** : Revue manuelle finale avant publication  
**Statut** : Reviewed — Ready for Prompt Library publication  
**Objet revu** : `notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json`  
**Décision** : Payload CMP Lot 2 validé — publication des 15 prompts autorisée ensuite  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté

---

## 1. Objectif de la revue

Cette note **valide manuellement** le payload CMP **Lot 2** avant publication dans **SFIA Prompt Library**.

- Cette revue **ne publie rien** dans Notion.
- Elle **ne crée pas** les prompts Notion.
- Elle **n'exécute pas** CMP-001 (`create prompt`).
- Elle **ne modifie pas** `.env`.
- Elle **ne déclenche pas** delivery.

---

## 2. Documents revus

| Document | Rôle dans la revue |
|----------|-------------------|
| `cmp-prompt-schema-extension-for-uxui.md` | Décision technique — catégorie UX/UI |
| `notion-sync-prompt-library-lot2-uxui-v1-governance-preparation.md` | Préparation Lot 2 — sources et qualité |
| `notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json` | **Objet principal** — 15 items CMP enrichis |
| `prompts/prompt-catalog.md` §13 | Catalogue — objectifs, sources, garde-fous communs |
| `docs/standards/ux-ui-v1-governance-standard.md` | Standard officiel lié v1.0 |
| `prompt-catalog-ux-ui-v1-validation.md` | Validation manuelle — 15 prompts OK |
| `notion-sync-existing-prompt-library-inventory.md` | Inventaire global — Lot 2 recommandé |

---

## 3. Vérification extension schéma

Inspection de `tools/cmp-001/src/schemas/prompt.schema.json` — sans exécution CMP.

| Élément | Attendu | Constat | Statut |
|---------|---------|---------|--------|
| **Catégorie UX/UI supportée** | Enum `category` inclut `UX/UI` | Présent | **OK** |
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
| 15 items | `items.length === 15` | **OK** |
| type prompt | `"type": "prompt"` | **OK** |
| lot.publish_to_notion: false | Publication désactivée | **OK** |
| lot.manual_review_required: true | Revue manuelle requise | **OK** |
| chaque item contient title | `PROMPT-UXUI-001` à `015` | **OK** |
| chaque item contient status: Draft | Aligné catalogue Candidat → Draft CMP | **OK** |
| chaque item contient version: v0.1 | Version initiale | **OK** |
| chaque item contient model: GPT | Modèle cohérent | **OK** |
| chaque item contient category: UX/UI | Catégorie propre | **OK** |
| chaque item contient tags | UX/UI, UXUI, Governance, Interv360, SFIA (+ spécifiques) | **OK** |
| chaque item contient summary | Résumé court présent | **OK** |
| chaque item contient content | Objectif, Entrées, Sortie, Garde-fous, Validation, Sources | **OK** |
| validation schéma CMP | 15 items passent `validatePayload('prompt', item)` | **OK** |

**Doublons** : `exports/notion/prompts.json` — **aucun** PROMPT-UXUI-* détecté. *Export obsolète — revérifier avant publication.*

---

## 5. Revue des 15 prompts

| Prompt | Category | Content riche | Vigilance | Évaluation |
|--------|----------|---------------|-----------|------------|
| PROMPT-UXUI-001 — Ouverture jalon UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-002 — Recherche design / benchmark UX/UI | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-003 — Instructions UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-004 — Production maquette UX/UI V1 | UX/UI | Oui | Oui — maquette ≠ delivery | **Validé** |
| PROMPT-UXUI-005 — Revue premier jet UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-006 — Préparation revue transverse UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-007 — Template compte rendu revue UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-008 — Enrichissement méthodes rôle après UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-009 — Compte rendu revue simulée UX/UI V1 | UX/UI | Oui | Oui — pas de participants fictifs | **Validé** |
| PROMPT-UXUI-010 — Clôture jalon UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-011 — Sync gouvernance UX/UI V1 | UX/UI | Oui | Oui — méta-sync Notion | **Validé** |
| PROMPT-UXUI-012 — Standard candidat UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-013 — Revue standard candidat UX/UI V1 | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-014 — Préparation promotion standard officiel | UX/UI | Oui | Non | **Validé** |
| PROMPT-UXUI-015 — Promotion standard officiel UX/UI V1 | UX/UI | Oui | Non | **Validé** |

**Bilan** : 15 **Validé** ; sections `## Point de vigilance` présentes pour UXUI-004, 009, 011.

---

## 6. Points de vigilance maintenus

- **Lot volumineux** : 15 commandes `create prompt` distinctes.
- Première publication en **Draft**.
- Pas de **`update prompt`** ; pas de **batch**.
- Vérifier l'**absence de doublons** PROMPT-UXUI-* **immédiatement avant publication**.
- **Export Notion potentiellement obsolète** — ré-exporter si possible.
- Si une création **échoue**, ne pas relancer à l'aveugle — diagnostiquer, tracer, reprendre sur les entrées manquantes.
- **Tracer précisément** les prompts créés (ID, URL).
- Ne pas faire de **push forcé** ; ne pas **merger automatiquement** dans main.

### Vigilances métier

- **PROMPT-UXUI-004** : ne pas assimiler production de maquette à delivery.
- **PROMPT-UXUI-009** : ne pas inventer de participants réels en revue simulée.
- **PROMPT-UXUI-011** : ne pas déclencher de publication Notion automatique (méta-sync).

---

## 7. Commandes de publication autorisées ensuite

*À exécuter dans une tâche dédiée — non exécutées dans cette revue.*

Extraire chaque item vers `/tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-00X.json`, puis :

```bash
cd /Users/morris/Projects/sfia-workspace/tools/cmp-001
set -a && source /Users/morris/Projects/sfia-notion-sync/.env && set +a
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-001.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-002.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-003.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-004.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-005.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-006.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-007.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-008.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-009.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-010.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-011.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-012.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-013.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-014.json
node src/cli.js create prompt /tmp/sfia-lot2-uxui-prompts/PROMPT-UXUI-015.json
```

- **Ne jamais afficher** `.env` ; **ne jamais** faire `cat .env`.
- Fichiers `/tmp` **non commités**.
- Publication effective dans une **tâche dédiée** avec log Git.

---

## 8. Décision de revue

**Décision** : **payload CMP Lot 2 UX/UI V1 Governance validé — publication des 15 prompts autorisée ensuite**.

### Justification

- Schéma CMP **enrichi** (UX/UI) — QA, Architecture, Security inchangées.
- **Catégorie UX/UI** propre — nuance V1 Governance via tags.
- Contenu page **riche** sur les 15 items.
- **Vigilances** portées dans les contenus (004, 009, 011).
- **Absence de doublons** dans l'export disponible.
- **Aucune publication** exécutée dans cette revue.

---

## 9. Prochaine étape autorisée

1. Vérifier une dernière fois l'**absence de doublons** dans Notion ou l'export disponible.
2. **Publier les 15 prompts** via `create prompt` dans une tâche dédiée.
3. **Tracer la publication** dans Git (log Lot 2).
4. **Pousser** la branche courante.
5. **Passer au Lot 3** après vérification visuelle Notion.

---

## 10. Conclusion

Le **payload CMP Lot 2 UX/UI V1 Governance** est **validé**.

Les **15 prompts** peuvent être publiés dans **SFIA Prompt Library** via `create prompt`, dans une **tâche dédiée**.

La présente revue **n'a exécuté aucune publication** et **n'a ouvert aucun delivery**.

---

*Revue manuelle finale payload CMP Lot 2 — gouvernance SFIA — non publié dans Notion.*
