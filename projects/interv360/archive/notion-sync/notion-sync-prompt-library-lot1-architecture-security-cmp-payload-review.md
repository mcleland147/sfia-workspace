# Interv360 — Revue finale payload CMP Prompt Library Lot 1 — Architecture & Sécurité

**Projet** : PRJ-INTERV360
**Cible Notion** : SFIA Prompt Library
**Lot** : 1 — Architecture & Sécurité
**Type** : Revue manuelle finale avant publication
**Statut** : Reviewed — Ready for Prompt Library publication
**Objet revu** : `notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`
**Décision** : Payload CMP Lot 1 validé — publication des 2 prompts autorisée ensuite
**Publication Notion** : non exécutée
**API Notion** : non appelée
**CMP-001 create prompt** : non exécuté

---

## 1. Objectif de la revue

Cette note **valide manuellement** le payload CMP **Lot 1** avant publication dans **SFIA Prompt Library**.

- Cette revue **ne publie rien** dans Notion.
- Elle **ne crée pas** les prompts Notion.
- Elle **n'exécute pas** CMP-001 (`create prompt`).
- Elle **ne modifie pas** `.env`.
- Elle **ne déclenche pas** delivery.

---

## 2. Documents revus

| Document | Rôle dans la revue |
|----------|-------------------|
| `cmp-prompt-schema-extension-for-architecture-security.md` | Décision technique — catégories Architecture et Security |
| `notion-sync-prompt-library-lot1-architecture-security-preparation.md` | Préparation Lot 1 — sources et vigilance |
| `notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json` | **Objet principal** — 2 items CMP enrichis |
| `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` | Source détaillée Architecture — Draft formalisé |
| `prompts/security/prompt-sec-001-revue-canal-email-securise.md` | Source détaillée Sécurité / RSSI — Draft formalisé |
| `prompts/prompt-catalog.md` | Catalogue §4 et §8 — référencement et statut Draft |
| `notion-sync-existing-prompt-library-inventory.md` | Inventaire global — Lot 1 recommandé hors QA |

---

## 3. Vérification extension schéma

Inspection de `tools/cmp-001/src/schemas/prompt.schema.json` et du flux `createObject.js` — sans exécution CMP.

| Élément | Attendu | Constat | Statut |
|---------|---------|---------|--------|
| **Catégorie Architecture supportée** | Enum `category` inclut `Architecture` | Présent | **OK** |
| **Catégorie Security supportée** | Enum `category` inclut `Security` | Présent | **OK** |
| **Catégorie QA inchangée** | `QA` toujours dans l'enum | Présent | **OK** |
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
| 2 items | `items.length === 2` | **OK** |
| type prompt | `"type": "prompt"` | **OK** |
| publish_to_notion: false | `lot.publish_to_notion === false` | **OK** |
| manual_review_required: true | `lot.manual_review_required === true` | **OK** |
| chaque item contient title | Format `PROMPT-*-001 — Nom` | **OK** |
| chaque item contient status: Draft | Aligné source Git | **OK** |
| chaque item contient version: v0.1 | Version initiale | **OK** |
| chaque item contient model: GPT | Modèle cohérent | **OK** |
| PROMPT-ARCH-001 category: Architecture | Catégorie propre | **OK** |
| PROMPT-SEC-001 category: Security | Catégorie propre | **OK** |
| chaque item contient tags | ARCH : Architecture, Interv360, SFIA ; SEC : Security, Sécurité, RSSI, Interv360, SFIA | **OK** |
| chaque item contient summary | Résumé court présent | **OK** |
| chaque item contient content | Objectif, Entrées, Sortie, Garde-fous, Validation, Sources | **OK** |
| validation schéma CMP | 2 items passent `validatePayload('prompt', item)` | **OK** |

**Doublons** : `exports/notion/prompts.json` — **aucun** PROMPT-ARCH-001 ni PROMPT-SEC-001 détecté. *Export obsolète (2 entrées hors catalogue SFIA) — revérifier avant publication.*

---

## 5. Revue des 2 prompts

| Prompt | Category | Content riche | Évaluation |
|--------|----------|---------------|------------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Architecture | Oui | **Validé** |
| **PROMPT-SEC-001** — Revue canal email sécurisé | Security | Oui | **Validé** |

Contenu aligné avec les fichiers source Git — synthèse gouvernance sans surinterprétation du corps exécutable complet.

---

## 6. Points de vigilance maintenus

- Première publication en **Draft** — aligné sur statut source.
- Pas de **`update prompt`** — correction post-publication manuelle ou évolution CMP.
- Pas de **batch** — **2 commandes** `create prompt` distinctes.
- Vérifier l'**absence de doublons** PROMPT-ARCH-001 / PROMPT-SEC-001 **immédiatement avant publication** (export ou Notion live).
- **Export Notion potentiellement obsolète** — ré-exporter si possible (`node src/cli.js export prompts`).
- Si une création **échoue**, ne pas relancer à l'aveugle — diagnostiquer et tracer.
- **Tracer précisément** les prompts créés (ID, URL).
- Ne pas faire de **push forcé**.
- Ne pas **merger automatiquement** dans main.

---

## 7. Commandes de publication autorisées ensuite

*À exécuter dans une tâche dédiée — non exécutées dans cette revue.*

Extraire chaque item vers `/tmp/sfia-lot1-prompts/PROMPT-ARCH-001.json` et `PROMPT-SEC-001.json`, puis :

```bash
cd /Users/morris/Projects/sfia-workspace/tools/cmp-001
set -a && source /Users/morris/Projects/sfia-notion-sync/.env && set +a
node src/cli.js create prompt /tmp/sfia-lot1-prompts/PROMPT-ARCH-001.json
node src/cli.js create prompt /tmp/sfia-lot1-prompts/PROMPT-SEC-001.json
```

Précisions :

- **Ne jamais afficher** `.env` ; **ne jamais** faire `cat .env`.
- Les fichiers `/tmp` **ne doivent pas être commités**.
- La publication effective sera faite dans une **tâche dédiée** avec log Git de traçage.

---

## 8. Décision de revue

**Décision** : **payload CMP Lot 1 Architecture & Sécurité validé — publication des 2 prompts autorisée ensuite**.

### Justification

- Schéma CMP **enrichi** (Architecture, Security) — QA inchangée.
- **Catégories propres** — pas de repli Analysis.
- Contenu page **riche** (objectif, entrées, sorties, garde-fous, validation, sources).
- **2 prompts complets** — alignés avec fichiers Draft sous `prompts/`.
- **Absence de doublons** dans l'export disponible.
- **Aucune publication** exécutée dans cette revue.

---

## 9. Prochaine étape autorisée

1. Vérifier une dernière fois l'**absence de doublons** dans Notion ou l'export disponible.
2. **Publier les 2 prompts** via `create prompt` dans une tâche dédiée.
3. **Tracer la publication** dans Git (log Lot 1).
4. **Pousser** la branche courante.
5. **Passer au Lot 2** (UX/UI V1 Governance) après vérification visuelle Notion.

---

## 10. Conclusion

Le **payload CMP Lot 1 Architecture & Sécurité** est **validé**.

Les **2 prompts** peuvent être publiés dans **SFIA Prompt Library** via `create prompt`, dans une **tâche dédiée**.

La présente revue **n'a exécuté aucune publication** et **n'a ouvert aucun delivery**.

---

*Revue manuelle finale payload CMP Lot 1 — gouvernance SFIA — non publié dans Notion.*
