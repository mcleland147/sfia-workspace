# 05 — Routage des demandes

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 05 — Routage des demandes |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Cycle 2 |
| **Baseline** | SFIA v2.4 |
| **Audience** | PO, chef de projet, architecte |
| **Niveau** | L2 |
| **Propriétaire** | Morris |
| **Sources Git** | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` ; `prompts/templates/sfia-cycle-execution-template.md` §4.4 (Candidate) |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Aider à mapper une **demande Morris** vers un **type de cycle**, un **profil** probable et les **gates** éventuels — sans automatiser l'arbitrage.

## 2. À retenir en 30 secondes

- Le **routing guide Git** est la référence — pas la mémoire conversationnelle.
- ChatGPT qualifie **avant** de générer le prompt Cursor.
- **Standard** par défaut si doute sans risque structurant.
- **Critical** exige justification explicite.
- Notion **n'automatise pas** les décisions.

## 3. Contenu éditorial principal

### Matrice — demandes types *(aide — Candidate v2.5 pour cycles 1–15)*

| Demande type | Cycle recommandé | Profil probable | Risque | Gate Morris |
|--------------|------------------|-----------------|--------|-------------|
| Corriger un document mono-fichier | 1 Cadrage ou 8 Delivery doc | Light | Faible | Rare |
| Préparer une PR | 13 PR readiness | Standard (Light si ≤3 fichiers doc) | Moyen | GO PR si demandé |
| Nouveau parcours UI / écran | 4 UX/UI | Standard ou Critical | Moyen–élevé | GO design / Figma si fidélité |
| Arbitrage architecture | 3 Archi fonctionnelle ou 6 Archi technique | **Critical** | Élevé | **Oui** |
| Clôture après merge | 14 Post-merge | Light ou Standard | Faible | GO post-merge |
| Capitaliser une leçon / REX | 15 Capitalisation | Capitalization | Variable | GO capitalisation |
| Implémenter une feature bornée | 8 Delivery | Standard | Moyen | Selon périmètre |
| Go-live / sécurité / production | 9 QA, 10 RSSI, 11 Release | **Critical** | Élevé | **Oui** |

> Les numéros de cycles 1–15 renvoient au référentiel **v2.5 Candidate**. En baseline v2.4, s'appuyer sur le **routing guide** et le **prompt catalog** pour l'exécution effective.

### Chaîne de routage documentaire

```text
routing guide → méthode cycles v2.5 (candidate) → template d'exécution (candidate)
→ operating model → guardrails → contexte projet → prompt Cursor
```

## 4. Fonctionnement ou parcours

1. Formuler la demande en un objectif identifiable.
2. Consulter cette matrice (aide) puis le **routing guide Git**.
3. Choisir profil et review pack (none / light / full).
4. Décider handoff Git (required / not required) dans le prompt.
5. Exécuter dans Git — pas dans Notion.

## 5. Exemple pédagogique

« Préparer la conception Notion » → cycle **2 Conception fonctionnelle**, profil **Standard**, review pack **full**, handoff **required** — comme le cycle 1 qui a produit la PR #191.

## 6. Points de vigilance

- Une matrice Notion **ne remplace pas** la lecture du routing guide à jour sur `main`.
- Ne pas déduire un **GO merge** ou **GO publication** du seul routage.

## 7. Liens

→ [04 Cycles](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) · [06 Templates](sfia-notion-06-templates-prompts-deliverables-editorial-draft.md) · [08 Mise en place](sfia-notion-08-setup-sfia-editorial-draft.md)

## 8. Sources Git

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md` §4.4 (Candidate)

## 9. Métadonnées publication

Future **vue filtrée Base Cycles**. Mise à jour manuelle si routing guide évolue.

## 10. Réserves

Matrice à resynchroniser si promotion v2.5 baseline — **non acquise**.
