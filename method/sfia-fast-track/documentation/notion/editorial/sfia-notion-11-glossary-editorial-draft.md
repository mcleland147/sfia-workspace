# 11 — Glossaire SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 11 — Glossaire |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Cycle 2 |
| **Baseline** | SFIA v2.4 |
| **Audience** | Tous |
| **Niveau** | L1–L4 |
| **Propriétaire** | Morris |
| **Sources Git** | operating-model ; routing-guide ; engineering-principles ; cycle-execution-template (Candidate) |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Centraliser le vocabulaire SFIA — définitions courtes, liens vers pages détaillées, signalement des termes **Candidate**.

## 2. À retenir en 30 secondes

Le glossaire évite de parcourir le repository pour comprendre un terme. En cas de conflit avec Git → **Git prime**.

## 3. Contenu éditorial principal — termes (≥20)

| Terme | Définition | Lien / note |
|-------|------------|-------------|
| **SFIA** | Méthode de livraison contrôlée avec IA (ChatGPT, Cursor) et gouvernance humaine. | [01](sfia-notion-01-understand-sfia-editorial-draft.md) |
| **Baseline** | Référence opérationnelle validée — **SFIA v2.4** actuellement. | [01](sfia-notion-01-understand-sfia-editorial-draft.md) |
| **Candidate** | Statut « en test » — **non baseline** tant que Morris n'a pas validé. | [01](sfia-notion-01-understand-sfia-editorial-draft.md) |
| **Validated** | Document ou règle stable pour l'exécution courante. | [07](sfia-notion-07-governance-guardrails-editorial-draft.md) |
| **Cycle** | Séquence de travail à **objectif unique** (cadrage, delivery, capitalisation…). | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Profil SFIA** | Niveau de rigueur : Light, Standard, Critical, Capitalization. | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Gate Morris** | Point de décision humaine obligatoire (merge, publication, doctrine…). | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Light** | Profil faible risque, périmètre étroit. | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Standard** | Profil par défaut si doute sans risque structurant. | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Critical** | Profil risque structurant — **justification obligatoire**. | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Capitalization** | Profil exprimant l'intention de capitaliser — ≠ Critical. | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Readiness** | Verdict unique de fin de cycle (ex. READY FOR REVIEW). | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Review pack** | Artefact temporaire de revue (none / light / full). | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Review handoff** | Copie Git du review pack sur branche `sfia/review-handoff` pour ChatGPT. | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Local Git Truth Check** | Vérification branche, HEAD, working tree avant exécution. | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Source de vérité** | Git `main` — contenu canonique et historique. | [07](sfia-notion-07-governance-guardrails-editorial-draft.md) |
| **Cursor** | Exécuteur repository — applique le prompt contrat. | [01](sfia-notion-01-understand-sfia-editorial-draft.md) |
| **Prompt** | Contrat d'exécution instancié pour Cursor. | [06](sfia-notion-06-templates-prompts-deliverables-editorial-draft.md) |
| **Template** | Squelette réutilisable pour documents ou prompts. | [06](sfia-notion-06-templates-prompts-deliverables-editorial-draft.md) |
| **PR** | Pull Request — revue avant intégration à `main`. | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Post-merge** | Vérifications après merge (intégration, suite). | [03](sfia-notion-03-how-a-cycle-works-editorial-draft.md) |
| **Capitalisation** | Promotion d'un apprentissage stable en actif méthode. | [02](sfia-notion-02-value-proposition-editorial-draft.md) |
| **CMP** | Content Management Platform — outillage `tools/cmp-001/` — **hors périmètre publication Notion MVP**. | [07](sfia-notion-07-governance-guardrails-editorial-draft.md) |
| **Raw sync** | Copie brute repo → Notion — **interdit**. | [07](sfia-notion-07-governance-guardrails-editorial-draft.md) |
| **15 cycles v2.5** | Référentiel cycles projet — **Candidate — non baseline**. | [04](sfia-notion-04-cycles-profiles-gates-editorial-draft.md) |
| **Routing guide** | Document Git de routage des demandes vers cycles. | [05](sfia-notion-05-request-routing-editorial-draft.md) |
| **L0–L4** | Niveaux de lecture (flash → référence profonde). | Accueil |

## 4. Fonctionnement ou parcours

Utiliser en complément de toute page — lien retour [Accueil](sfia-notion-00-home-editorial-draft.md).

## 5. Exemple pédagogique

Un développeur rencontre « handoff required » : il consulte le glossaire, lit la page Cycle, puis le template d'exécution dans Git.

## 6. Points de vigilance

- Termes **Candidate** : ne pas enseigner comme norme sans badge.
- CMP et raw sync : rappel d'**interdiction**, pas de procédure.

## 7. Liens croisés

Toutes les pages P0 du pack `editorial/`.

## 8. Sources Git

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `docs/foundation/sfia-engineering-principles.md`

## 9. Métadonnées publication

Peut devenir base « Glossaire » Notion — entrées liées aux pages P0.

## 10. Réserves

Enrichissement continu — revue Morris si nouveaux termes v2.5 promus.
