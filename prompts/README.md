# SFIA Prompts

Ce dossier contient les **prompts réutilisables** du produit SFIA.

## Rôle du dossier

Les prompts opérationnalisent les méthodes, templates, checklists et standards SFIA. Ils transforment un cadre méthodologique en instructions exécutables (Cursor, ChatGPT, automatisations) pour produire des livrables stables.

Le registre officiel des prompts SFIA reste également dans **Notion** (base Prompts). Ce dossier local est le **référentiel de travail versionné** alimenté par les projets pilotes.

## Prompts réutilisables vs prompts ponctuels

| Type | Caractéristique |
|------|-----------------|
| **Réutilisable** | Capitalisé dans `prompts/` — utilisable sur plusieurs projets, lié à une méthode SFIA, produit un livrable stable |
| **Ponctuel** | Usage unique dans un chat ou une session — non capitalisé tant qu'il n'est pas éprouvé et généralisable |

Un prompt ne doit **pas** être capitalisé simplement parce qu'il a été utilisé une fois. Il doit être :

- réutilisable sur plusieurs projets ;
- lié à une méthode, un template, une checklist ou un standard SFIA ;
- capable de produire un livrable stable ;
- aligné avec la logique SFIA produit dynamique ;
- enrichi à partir des retours d'usage.

## Liens avec le reste du workspace

| Référentiel | Lien |
|-------------|------|
| **docs/methods/** | Méthodes SFIA — source des prompts par domaine |
| **docs/methods/roles/** | Méthodes par rôle — chaque rôle peut générer des prompts candidats |
| **projects/** | Projets pilotes (ex. Interv360) — livrables validés alimentent le catalogue |
| **tools/** | Outillage SFIA (ex. CMP-001 pour prompts Notion/sync) |

## Critères pour capitaliser un prompt

Voir la checklist complète dans [`prompt-catalog.md`](prompt-catalog.md) §2.

En résumé : livrable stable, réutilisabilité multi-projets, lien méthode SFIA, entrées/sorties explicites, garde-fous, contrôle capitalisation, rôles mobilisés, amélioration possible par REX.

## Règle d'évolution continue

- Chaque prompt formalisé doit être lié à une **méthode**, un **livrable** ou un **standard**.
- Chaque utilisation doit pouvoir produire un **REX** d'amélioration.
- Les prompts **évoluent** avec les projets pilotes — statuts : Candidat → Draft → Tested → Validated.
- Un prompt **validé** peut devenir un standard d'exécution SFIA.
- Un prompt **opérationnalise** la méthode — il ne la remplace pas.

## Structure

```
prompts/
├── README.md
├── prompt-catalog.md
├── cadrage/
├── arbitrages/
├── ux-ui/
├── roles/
├── architecture/
├── security/
├── qa/
└── governance/
    └── notion/
```

Voir [`prompt-catalog.md`](prompt-catalog.md) pour le catalogue complet des prompts candidats.
