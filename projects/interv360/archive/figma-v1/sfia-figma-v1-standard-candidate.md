# Interv360 — Standard candidat SFIA — Cycle Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Jalon source** : Figma V1  
**Statut** : Candidate standard  
**Type** : Capitalisation SFIA  
**Source** : clôture Figma V1 + revue simulée + enrichissement rôles + sync Notion préparée  
**Objet** : formaliser un standard candidat pour produire, revoir, clôturer et gouverner une maquette Figma V1 dans SFIA

> **Ce document n'est pas un standard officiel SFIA.** Il reste dans le périmètre projet Interv360 et pourra être promu ultérieurement dans `docs/standards/` après revue manuelle.

---

## 1. Objectif du standard candidat

Ce document **formalise un standard candidat SFIA** issu du **cycle Figma V1** mené sur le projet pilote Interv360.

- il **n'est pas encore** un standard officiel ;
- il **reste dans le projet** Interv360 (`projects/interv360/02-architecture/`) ;
- il **capitalise une séquence éprouvée** — production → revue → enrichissement rôles → revue simulée → clôture → gouvernance ;
- il **pourra être promu** plus tard dans `docs/standards/` après revue et validation manuelle ;
- il **ne déclenche pas** delivery, backlog, user stories ou code.

**Référence de clôture** : `2026-06-28-figma-v1-closure-summary.md` — V1 validée présentable avec ajustements mineurs (8,3/10), V2 différée, delivery bloqué.

---

## 2. Problème adressé

Dans un **projet fictif ou pilote SFIA**, une maquette Figma générée ou produite rapidement peut facilement être confondue avec :

- une **validation produit complète** ;
- une **spécification fonctionnelle** ;
- un **backlog** ;
- un **feu vert delivery** ;
- une **preuve d'architecture** ;
- une **validation sécurité réelle**.

Le standard candidat vise à **éviter cette confusion** en définissant une **séquence claire** :

> **production → revue → enrichissement rôles → revue simulée → clôture → gouvernance → décision de suite**

Chaque étape produit des **livrables traçables Git** et des **décisions explicites** — sans glissement implicite vers la réalisation.

---

## 3. Principes directeurs

- Une **V1 présentable** n'est **pas** une V1 définitive.
- Une **maquette** ne déclenche **pas automatiquement** backlog, user stories ou code.
- Une **revue simulée** peut être valide dans un projet fictif si elle est **portée par des rôles SFIA définis** — sans inventer de personnes.
- Les **rôles doivent être enrichis** avant la revue simulée si le cycle a produit de nouveaux apprentissages.
- **Git** reste la source détaillée versionnée.
- **Notion** ne reçoit qu'une **synthèse de gouvernance**.
- Toute **publication Notion** doit rester **manuelle** (`publish_to_notion: false` par défaut).
- Les **garde-fous ADR** restent prioritaires sur toute décision design.
- Les **contraintes outil** (ex. crédits Figma épuisés) doivent être **documentées**.
- La **V2** doit être **arbitrée**, pas implicite.

---

## 4. Séquence standard candidate

| # | Étape | Objectif | Livrable type | Sortie attendue |
|---|-------|----------|---------------|-----------------|
| 1 | Ouverture UX/UI / Figma | Cadrer le jalon design post-ADR | Note d'ouverture | Figma autorisé en préparation, pas en production aveugle |
| 2 | Recherche design et benchmark | Ancrer la direction visuelle | Document recherche | Références et contraintes documentées |
| 3 | Instructions Figma | Traduire ADR et MVP en garde-fous design | Instructions design | Périmètre écrans, exclusions, direction visuelle |
| 4 | Prompt de production | Formaliser la production maquette | Prompt structuré | Entrée reproductible pour outil génératif |
| 5 | Production Figma | Produire la maquette V1 | Fichier Figma (hors repo) | V1 exploitable pour revue |
| 6 | Export et versionnement captures | Traçabilité visuelle Git | Dossier PNG versionné | Preuve visuelle immuable pour revue |
| 7 | Revue premier jet | Qualifier la V1 | Document revue | Note indicative ; P1/P2/P3 ; présentable ou non |
| 8 | Préparation revue transverse | Cadrer la revue multi-rôles | Document préparation | Checklist, questions, grille par rôle |
| 9 | Template compte rendu | Préparer la documentation des retours | Template CR | Structure vide — pas de retours fictifs |
| 10 | Enrichissement méthodes rôle | Capitaliser avant revue simulée | Note + §14 méthodes rôle | Rôles à jour pour validations cohérentes |
| 11 | Revue simulée multi-rôles | Valider au nom des rôles SFIA | Compte rendu revue simulée | Décision globale ; garde-fous ; delivery bloqué |
| 12 | Clôture jalon | Acter la fin du jalon Figma V1 | Synthèse clôture | Statut closed ; V2 ; options suite |
| 13 | Préparation sync Notion gouvernance | Tracer la clôture en gouvernance | Payload JSON + synthèse | Prepared — not published |
| 14 | Standard candidat | Capitaliser le cycle complet | Ce document | Base pour promotion future |

---

## 5. Standard candidat — production Figma V1

### Prérequis

- Bloc **ADR P1** consolidé (`architecture-p1-summary.md`).
- Bloc **ADR P2 design-impact** consolidé (`architecture-p2-design-impact-summary.md`).
- Brief / note d'ouverture UX/UI validée.
- Instructions et prompt de production alignés sur les garde-fous ADR.

### Entrées nécessaires

- Synthèses architecture P1/P2.
- Instructions Figma et prompt de production.
- Recherche design (direction visuelle).
- Liste écrans MVP et exclusions explicites.

### Garde-fous

| Domaine | Règle |
|---------|-------|
| Direction visuelle | Enterprise clean (ou direction documentée) |
| Périmètre MVP | 8 écrans cœur + cover / checklist / archive |
| Écrans autorisés | Dashboard SAV, liste, fiche, planning, mobile, CR, anomalies, dirigeant |
| Exclusions | Portail client, IA, BI avancée, logs techniques, signature juridique complète |
| IA | Absente si ADR-CAND-009 (post-MVP) |
| Signature | Optionnelle, non bloquante (ADR-007) |
| Dashboards | SAV et dirigeant séparés (ADR-008) |
| Preuves | Fictives / métadonnées (ADR-005) |
| Notifications | Simples, sans portail (ADR-006) |

### Sortie attendue

- Maquette V1 produite (outil Figma ou génératif).
- **Captures PNG versionnées Git** — preuve visuelle de référence.
- Aucun backlog, user story ou code.

### Critères de qualité

- 8 écrans MVP présents et crédibles métier.
- Garde-fous ADR visuellement respectés.
- Direction visuelle cohérente.
- Qualité indicative documentée (ex. 8,3/10) — **indicative**, non contractuelle.

---

## 6. Standard candidat — revue premier jet

### Objectif

Qualifier la V1 comme **exploitable**, **présentable**, **à corriger** ou **à rejeter** — sans valider le delivery.

### Contenu de la revue

- **Analyse par écran** — points validés, ajustements, risques.
- **Note indicative** globale (ex. 8,3/10).
- **Distinction** défaut bloquant vs polish UI.
- **Ajustements P1 / P2 / P3** — priorisés et documentés.
- **Conservation des captures** comme preuve visuelle immuable.

### Règle clé

> La revue premier jet **ne valide pas le delivery**. Elle permet de qualifier la V1 pour la suite du cycle (préparation revue transverse, enrichissement rôles, revue simulée).

### Livrable type

`figma-first-draft-review.md`

---

## 7. Standard candidat — enrichissement rôles avant revue simulée

### Principe

Avant une **revue simulée**, les méthodes rôle doivent être **vérifiées et enrichies** si le cycle a produit des apprentissages nouveaux (production, revue premier jet, contraintes outil).

### Rôles concernés

| Rôle | Enrichissement attendu |
|------|------------------------|
| Product Owner | V1 présentable vs définitif vs delivery ; dérives MVP |
| UX/UI Designer | Maquette générée ; polish vs bloquant ; surpromesse visuelle |
| RSSI | Revue sécurité maquette ; preuves, signature, logs |
| Architecte | Cohérence ADR ; architecture implicite |
| Chef de projet | Jalon ; traçabilité ; blocage delivery |
| Business Analyst | Lecture métier ; workflows implicites ; sans backlog |
| QA / Testeur candidat | Testabilité ; happy / non happy path (si pertinent) |

### Éléments à intégrer par rôle

- **savoir-faire** — critères de validation Figma V1 ;
- **savoir-être** — ne pas confondre maquette et spécification ;
- **garde-fous** — ADR, delivery, backlog ;
- **questions réflexes** — réutilisables sur autre projet ;
- **capacité à distinguer** V1 présentable, V1 définitive, V2, delivery.

### Livrable type

`role-methods-enrichment-after-figma-v1.md` + bloc §14 dans `docs/methods/roles/`

---

## 8. Standard candidat — revue simulée multi-rôles

### Conditions d'acceptabilité

Une revue simulée est acceptable dans un **projet pilote ou fictif** à condition de :

- **ne pas inventer de personnes** ni de participants fictifs nommés ;
- **déclarer explicitement** que la revue est simulée ;
- **valider au nom des rôles SFIA**, pas d'individus ;
- **s'appuyer sur les méthodes rôle** enrichies ;
- **documenter les décisions** dans un compte rendu structuré ;
- **bloquer delivery** sauf décision explicite documentée.

### Validations par rôle

| Rôle | Validation principale |
|------|----------------------|
| **Product Owner** | MVP ; valeur métier ; dérives fonctionnelles implicites |
| **UX/UI Designer** | Cohérence UI ; lisibilité ; polish vs bloquant |
| **RSSI** | Garde-fous sécurité ; surpromesse conformité ; preuves / signature |
| **Architecte** | Cohérence ADR P1/P2 ; architecture implicite ; intégrations simulées |
| **Chef de projet** | Maîtrise jalon ; traçabilité ; delivery bloqué |
| **Business Analyst** | Cohérence métier ; statuts / SLA ; workflows implicites |
| **QA / Testeur candidat** | Testabilité ; happy path ; non happy path ; états visibles |

### Livrables types

- `figma-review-session-preparation.md`
- `figma-review-session-minutes-template.md` (vide)
- `figma-review-session-minutes.md` (rempli après simulation)

### Décision type Interv360

**Validé avec ajustements mineurs** — V1 présentable, non définitive ; delivery bloqué.

---

## 9. Standard candidat — clôture jalon Figma V1

### Contenu obligatoire de la clôture

La clôture doit **acter** :

| Élément | Exemple Interv360 |
|---------|-------------------|
| Statut V1 | Closed — validated with minor adjustments |
| Score indicatif | 8,3 / 10 |
| Éléments validés | MVP, 8 écrans, garde-fous ADR, revue simulée |
| Ajustements différés | P1–P3 documentés |
| Hors MVP | IA, portail, BI, signature complète, conservation réelle, SIEM |
| Décision V2 | Différée |
| Décision delivery | Non autorisé |
| Valeur projet | Support visuel, compréhension MVP |
| Valeur SFIA | Séquence, templates, enrichissement rôles |
| Prochaines options | Sync Notion, promotion standard, jalon delivery (non ouvert) |

### Règle clé

> La clôture **ne doit pas ouvrir automatiquement** la phase suivante (delivery, backlog, V2).

### Livrable type

`2026-06-28-figma-v1-closure-summary.md`

---

## 10. Standard candidat — gouvernance Notion

### Principes

La synchronisation Notion doit être :

| Propriété | Valeur |
|-----------|--------|
| Préparée | Payload JSON + synthèse markdown |
| Non publiée par défaut | `publish_to_notion: false` |
| Informative | Synthèse décisions, pas contenu ADR complet |
| Gouvernance uniquement | Pas de backlog, stories, code |
| Validée manuellement | `manual_review_required` |
| Sans API automatique | Aucun appel API Notion dans la préparation |
| Sans delivery implicite | Contraintes explicites dans payload |

### Contenu type du payload

- `decision` — summary, quality_score, statuts V1/V2/delivery/backlog/code ;
- `governance_message.fr` — message court ;
- `validated_items`, `deferred_adjustments`, `out_of_mvp` ;
- `sfia_capitalization`, `source_documents` ;
- `constraints` — no_delivery_opening, no_backlog, no_user_stories, no_code, no_new_figma.

### Livrables types

- `notion-sync-figma-v1-closure-payload.json`
- `2026-06-28-notion-sync-2026-06-28-figma-v1-closure-summary.md`

---

## 11. Décisions types

| Décision | Signification | Effet |
|----------|---------------|-------|
| **V1 présentable** | Maquette suffisante pour revue projet / démo | Jalon peut avancer vers revue simulée et clôture |
| **V1 non définitive** | Polish et ajustements restants acceptables | V2 optionnelle ; pas de feu vert implémentation |
| **Validé avec ajustements mineurs** | Décision revue simulée type | Clôture possible ; ajustements documentés |
| **V2 différée** | Polish reporté ; contrainte outil possible | Pas de production V2 automatique |
| **Delivery bloqué** | Pas de passage réalisation | Backlog, stories, code interdits |
| **Backlog bloqué** | Pas de création backlog | Décision jalon delivery requise |
| **User stories bloquées** | Pas de rédaction stories | Idem |
| **Code bloqué** | Pas de développement | Idem |
| **Sync Notion préparée non publiée** | Gouvernance prête, publication manuelle | `publish_to_notion: false` |
| **Standard candidat non promu** | Reste dans projet Interv360 | Pas de fichier dans `docs/standards/` |

---

## 12. Garde-fous obligatoires

- [ ] pas de confusion entre **maquette** et **spécification**
- [ ] pas de **backlog** automatique
- [ ] pas de **user stories** automatiques
- [ ] pas de **code** automatique
- [ ] pas de **delivery** sans jalon explicite
- [ ] pas de **participants fictifs** en revue simulée (rôles uniquement)
- [ ] pas de **publication Notion** automatique
- [ ] pas d'**API Notion** appelée sans décision manuelle
- [ ] pas de **V2** implicite
- [ ] pas d'**IA** si post-MVP (ADR-CAND-009)
- [ ] pas de **portail client** hors MVP
- [ ] pas de **BI avancée** hors MVP
- [ ] pas de **logs techniques** exposés en UI
- [ ] pas de **signature juridique complète** non arbitrée

---

## 13. Critères de promotion vers standard officiel

| Critère | Statut attendu | Interv360 |
|---------|----------------|-----------|
| Séquence éprouvée sur au moins un projet pilote | Oui | Oui — cycle complet documenté |
| Livrables complets | Oui | Oui — 14 étapes livrées |
| Décisions traçables | Oui | Oui — Git + CR simulé + clôture |
| Rôles enrichis | Oui | Oui — 6 rôles + QA candidat |
| Garde-fous validés | Oui | Oui — revue simulée |
| Limites identifiées | Oui | Oui — §14 ci-dessous |
| Réutilisabilité confirmée | À confirmer | Un seul projet testé |
| Validation manuelle | Requise | Non encore réalisée |
| Absence de dette méthodologique majeure | Requise | QA / Testeur candidat ; revue simulée uniquement |

> **Ce document ne promeut pas encore le standard.** Il prépare une **décision future** sur création éventuelle de `docs/standards/figma-v1-governance-standard.md`.

---

## 14. Limites du standard candidat

- Testé **uniquement sur Interv360** — projet pilote / fictif.
- Maquette produite avec **crédits Figma limités** — V2 différée pour contrainte outil.
- **Revue simulée**, pas revue avec acteurs réels.
- **QA / Testeur** encore **candidat** — pas de méthode officielle.
- **Pas encore validé** sur un autre projet SFIA.
- **Pas encore promu** dans `docs/standards/`.
- Pages Figma 01–04 (principes, tokens, composants, flux) **non exportées** individuellement.

---

## 15. Valeur SFIA

| Valeur | Description |
|--------|-------------|
| **Reproductibilité** | Séquence 14 étapes avec livrables types nommés |
| **Gouvernance** | Clôture + sync Notion préparée sans publication auto |
| **Garde-fous** | ADR P1/P2 intégrés à chaque étape |
| **Revue simulée** | Modèle valide pour projet fictif sans participants réels |
| **Capitalisation rôles** | Enrichissement méthodes avant revue simulée |
| **Traçabilité Git** | Captures, revues, CR, clôture versionnés |
| **Séparation projet / Notion** | Git détaillé ; Notion synthèse manuelle |
| **Distinction design / delivery** | V1 présentable ≠ prêt delivery |
| **Préparation standardisation** | Base pour promotion future dans `docs/standards/` |

---

## 16. Prochaines options

*Aucune option déclenchée automatiquement par ce document.*

| Option | Description | Statut |
|--------|-------------|--------|
| Promouvoir en standard officiel | Créer fichier dans `docs/standards/` | À arbitrer — revue manuelle requise |
| Créer `docs/standards/figma-v1-governance-standard.md` | Standard officiel générique | Non réalisé |
| Enrichir catalogue prompts | Retour d'usage Figma V1 | À planifier |
| Extraire méthode QA / Testeur | Formaliser rôle candidat | Candidat — futur |
| Préparer un jalon delivery | Ouverture phase suivante | **Non ouvert** |
| Publier manuellement dans Notion | Sync gouvernance clôture V1 | Payload prêt — `publish_to_notion: false` |
| Tester le standard candidat sur un autre projet | Validation réutilisabilité | Non réalisé |

---

## 17. Décision recommandée

**Recommandation** : conserver ce standard au statut **candidat** jusqu'à **revue manuelle**.

La prochaine décision doit porter sur :

1. la **promotion éventuelle** dans `docs/standards/` ;
2. l'**enrichissement du catalogue prompts** ;
3. l'**ouverture d'un nouveau jalon** (delivery, V2 Figma, QA) — **aucun non ouvert par défaut**.

---

## 18. Conclusion

Le **cycle Figma V1 Interv360** fournit une **base robuste** pour un **standard SFIA candidat**.

La séquence **production, revue, enrichissement rôles, revue simulée, clôture et gouvernance Notion** permet de **sécuriser une maquette V1** sans déclencher prématurément le delivery.

Ce **standard candidat** doit maintenant être **revu manuellement** avant toute **promotion officielle** dans SFIA.

**Prochaine action recommandée** : revue manuelle du standard candidat — décision promotion `docs/standards/` ou enrichissement prompts / QA.

---

*Standard candidat SFIA — Cycle Figma V1 — projet pilote Interv360 — non officiel — gouvernance SFIA.*
