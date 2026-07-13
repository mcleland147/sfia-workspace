# SFIA — Accueil

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 00 — Accueil |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Préparation Notion — Cycle 2 |
| **Profil** | Standard |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Éléments v2.5** | Candidate — non baseline |
| **Audience principale** | Tous |
| **Niveau de lecture** | L0–L1 |
| **Propriétaire éditorial** | Morris |
| **Sources Git** | `README.md` ; `method/sfia-fast-track/README.md` ; `method/sfia-fast-track/core/sfia-knowledge-layer.md` |
| **Commit source** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Orienter tout visiteur en moins de 30 secondes : comprendre ce qu'est SFIA, où se trouve la vérité documentaire, et choisir un parcours de lecture adapté.

## 2. À retenir en 30 secondes

- **SFIA** structure la livraison de produits numériques avec assistance IA, sous gouvernance humaine.
- **Git** (`mcleland147/sfia-workspace`) est la **source de vérité** — méthode, prompts, décisions, historique.
- **Notion** (futur espace) sera un **guide de compréhension** — pas un miroir du repository.
- Trois parcours : **5 min** (découvrir), **30 min** (comprendre), **mise en œuvre** (démarrer un projet).
- La baseline opérationnelle est **SFIA v2.4** ; certains contenus méthode v2.5 sont **Candidate — non baseline**.

## 3. Contenu éditorial principal

### Bienvenue dans SFIA

SFIA (Software Factory Intelligence Approach) est une méthode de livraison **rapide, contrôlée et capitalisable** pour créer des applications avec l'aide de l'IA — sans perdre la traçabilité, la qualité ni la décision humaine.

Ce guide Notion (en préparation) vous aide à **comprendre** et **naviguer** la méthode. Pour **exécuter** un cycle — modifier la méthode, lancer Cursor, ouvrir une PR — vous travaillez toujours dans le **repository Git**.

### Schéma Git ↔ Notion

```text
┌─────────────────────────────────────────────────────────┐
│  GIT — source de vérité                                  │
│  méthode · prompts · templates · décisions · rapports      │
└───────────────────────────┬─────────────────────────────┘
                            │ synthèse éditoriale validée
                            ▼
┌─────────────────────────────────────────────────────────┐
│  NOTION — guide de compréhension (futur)                 │
│  navigation · pédagogie · onboarding · démonstration     │
└─────────────────────────────────────────────────────────┘

Règle : en cas de divergence → Git prime.
```

## 4. Fonctionnement ou parcours

### Parcours 1 — Découvrir en 5 minutes

`Accueil` → [02 Proposition de valeur](sfia-notion-02-value-proposition-editorial-draft.md) → [03 Comment fonctionne un cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) (schéma) → [11 Glossaire](sfia-notion-11-glossary-editorial-draft.md) (5 termes clés)

### Parcours 2 — Comprendre en 30 minutes

`Accueil` → [01 Comprendre SFIA](sfia-notion-01-understand-sfia-editorial-draft.md) → [03 Cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) → [04 Cycles et profils](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) → [07 Gouvernance](sfia-notion-07-governance-guardrails-editorial-draft.md) (résumé)

### Parcours 3 — Mettre SFIA en œuvre

`Accueil` → [08 Mise en place](sfia-notion-08-setup-sfia-editorial-draft.md) → [05 Routage](sfia-notion-05-request-routing-editorial-draft.md) → [06 Templates et prompts](sfia-notion-06-templates-prompts-deliverables-editorial-draft.md)

## 5. Exemple pédagogique

> Un chef de projet reçoit une demande « préparer la release ». Il ne parcourt pas 900 fichiers Markdown : il consulte la page **Routage**, identifie le cycle **Déploiement / release** (profil probable Critical), puis retourne dans Git pour l'exécution Cursor avec le bon contrat.

## 6. Points de vigilance

- Notion **ne remplace pas** Git pour les décisions structurantes.
- Les contenus **Candidate** (dont le catalogue v2.5 cycles) ne sont pas la baseline tant que Morris ne les a pas validés.
- Aucune **synchronisation automatique** Git → Notion n'est prévue au MVP.

## 7. Liens vers les autres pages

| Page | Lien draft |
|------|------------|
| 01 Comprendre SFIA | `sfia-notion-01-understand-sfia-editorial-draft.md` |
| 02 Proposition de valeur | `sfia-notion-02-value-proposition-editorial-draft.md` |
| 03 Comment fonctionne un cycle | `sfia-notion-03-how-a-cycle-works-editorial-draft.md` |
| 08 Mettre SFIA en place | `sfia-notion-08-setup-sfia-editorial-draft.md` |
| 11 Glossaire | `sfia-notion-11-glossary-editorial-draft.md` |

## 8. Sources canoniques Git

| Source | Rôle |
|--------|------|
| `README.md` | Vision workspace |
| `method/sfia-fast-track/README.md` | Entrée méthode Fast Track |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Doctrine Git / Notion |

## 9. Métadonnées de publication futures

| Champ Notion | Valeur prévue |
|--------------|---------------|
| Type contenu | synthèse éditoriale |
| Statut page | brouillon → publié (cycle 3) |
| Visibilité | contributeur / public (à trancher Morris) |
| Dernière sync Git | à renseigner au cycle 3 |

## 10. Réserves et décisions Morris

| Élément | Statut |
|---------|--------|
| Propriétaire éditorial | **Morris** |
| Visibilité externe espace Notion | **Décision cycle 3** |
| Cas d'usage §09 | **P1 — hors cycle 2** |
