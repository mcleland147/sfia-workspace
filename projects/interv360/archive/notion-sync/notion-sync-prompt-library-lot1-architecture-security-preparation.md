# Interv360 — Préparation Prompt Library Lot 1 — Architecture & Sécurité

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : 1 — Architecture & Sécurité  
**Type** : Préparation sync Prompt Library  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté  
**Objet** : préparer la publication de PROMPT-ARCH-001 et PROMPT-SEC-001 dans la Prompt Library

---

## 1. Objectif

Cette note **prépare le Lot 1** (Architecture & Sécurité) pour publication dans **SFIA Prompt Library**, sur le modèle QA / Testeur — **sans publication** dans cette tâche.

- Valider des **catégories CMP propres** (Architecture, Security) avant les lots volumineux (UX/UI V1 Governance).
- Éviter les **doublons** et préparer un **payload CMP enrichi** (summary + content).

---

## 2. Sources analysées

| Source | Rôle |
|--------|------|
| `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Prompt Architecture — fichier Draft formalisé |
| `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Prompt Sécurité / RSSI — fichier Draft formalisé |
| `prompts/prompt-catalog.md` | Référencement §4 et §8 — statut Draft |
| `notion-sync-existing-prompt-library-inventory.md` | Inventaire — Lot 1 recommandé |
| `tools/cmp-001/src/schemas/prompt.schema.json` | Schéma CMP — catégories étendues |
| `exports/notion/prompts.json` | Export Notion *(obsolète — 2 entrées ; aucun ARCH/SEC/QA)* |

*Note : `tools/cmp-001/exports/notion/prompts.json` n'existe pas — export actif à la racine workspace.*

---

## 3. Prompts du lot

| ID | Nom | Catégorie CMP | Statut | Source | Action |
|----|-----|---------------|--------|--------|--------|
| PROMPT-ARCH-001 | Revue intégrations et erreurs | **Architecture** | Draft | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | Publier après revue payload |
| PROMPT-SEC-001 | Revue canal email sécurisé | **Security** | Draft | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | Publier après revue payload |

**Doublons** : aucun PROMPT-ARCH-001 ni PROMPT-SEC-001 dans `exports/notion/prompts.json` au moment de la préparation.

---

## 4. Catégories CMP

| Catégorie | Usage | Statut |
|-----------|-------|--------|
| **Architecture** | PROMPT-ARCH-001 — revue intégrations, erreurs, Error Matrix, ADR | Ajoutée au schéma — `cmp-prompt-schema-extension-for-architecture-security.md` |
| **Security** | PROMPT-SEC-001 — canal email / intake externe, SSI, rejets | Ajoutée au schéma ; tags **Sécurité**, **RSSI** pour nuances françaises |
| **QA** | Famille déjà publiée (Lot 0) | Inchangée |

---

## 5. Payload CMP

| Élément | Valeur |
|---------|--------|
| **Fichier** | `notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json` |
| **Items** | 2 |
| **summary / content** | Présents pour chaque item — contenu dérivé des fichiers source Git |
| **publish_to_notion** | `false` |
| **manual_review_required** | `true` |

---

## 6. Points de vigilance

- Vérifier **absence de doublons** PROMPT-ARCH-001 / PROMPT-SEC-001 dans Notion ou export rafraîchi avant publication.
- Export Notion Git **obsolète** — ré-exporter via `node src/cli.js export prompts` si possible avant exécution.
- Pas de **`update prompt`** — en cas de doublon, arbitrage requis (pas de mise à jour CMP).
- Pas de **batch** — 2 commandes `create prompt` distinctes.
- Publication en **Draft** — aligné sur statut source.
- Ne **pas surinterpréter** les prompts sources : contenu page = synthèse gouvernance, corps exécutable complet reste dans Git.

---

## 7. Décision proposée

**Décision proposée** : **Lot 1 Architecture & Sécurité prêt pour revue manuelle avant publication**.

---

## 8. Prochaine étape

1. **Revue manuelle** du payload Lot 1 (`notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`).
2. **Publication dédiée** des 2 prompts via `create prompt` si validé.
3. **Trace Git** de publication (log dédié Lot 1).
4. **Passage au Lot 2** (UX/UI V1 Governance — 15 prompts) après vérification visuelle Notion.

---

*Préparation Prompt Library Lot 1 — gouvernance SFIA — non publié dans Notion.*
