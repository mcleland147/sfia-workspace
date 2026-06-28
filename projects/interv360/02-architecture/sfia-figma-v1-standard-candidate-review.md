# Interv360 — Revue manuelle du standard candidat SFIA — Cycle Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Objet revu** : `sfia-figma-v1-standard-candidate.md`  
**Statut** : Reviewed — Candidate standard  
**Type** : Revue manuelle standard candidat  
**Décision** : Promotable with minor adjustments — promotion deferred  
**Objet** : évaluer la robustesse du standard candidat avant promotion éventuelle dans `docs/standards/`

---

## 1. Objectif de la revue

Cette revue vise à déterminer si le **standard candidat Figma V1** est suffisamment **robuste** pour être promu plus tard comme **standard officiel SFIA**.

**Cette revue ne**

- ne crée pas de standard officiel ;
- ne crée rien dans `docs/standards/` ;
- ne lance pas de delivery ;
- ne produit pas de backlog ;
- ne produit pas de user stories ;
- ne produit pas de code.

---

## 2. Standard candidat revu

**Fichier revu** : `projects/interv360/02-architecture/sfia-figma-v1-standard-candidate.md`

| Attribut | Valeur |
|----------|--------|
| Statut | Standard candidat — non officiel |
| Base | Cycle complet Figma V1 Interv360 |
| Séquence | 14 étapes documentées |
| Garde-fous delivery | Explicites — backlog / stories / code bloqués |
| Gouvernance Notion | Préparée — non publiée |
| Promotion officielle | Non réalisée |

---

## 3. Critères de revue

| Critère | Évaluation | Commentaire |
|---------|------------|-------------|
| Clarté de l'objectif | Fort | Distinction candidat / officiel explicite dès l'entête |
| Problème adressé | Fort | Confusion maquette / spec / backlog / delivery bien cadrée |
| Principes directeurs | Fort | 10 principes actionnables ; Git / Notion / ADR |
| Séquence standard candidate | Fort | Tableau 14 étapes avec objectif, livrable, sortie |
| Production Figma V1 | Fort | Prérequis, garde-fous, critères qualité documentés |
| Revue premier jet | Fort | Distinction bloquant / polish ; pas de validation delivery |
| Enrichissement rôles | Fort | 6 rôles + QA candidat ; avant revue simulée |
| Revue simulée multi-rôles | Fort | Conditions d'acceptabilité ; pas de participants fictifs |
| Clôture jalon | Fort | Contenu obligatoire listé ; pas d'ouverture auto phase suivante |
| Gouvernance Notion | Fort | `publish_to_notion: false` ; manuel ; sans API auto |
| Décisions types | Moyen | Tableau présent ; pourrait gagner en exemples génériques |
| Garde-fous | Fort | Checklist 14 points ; alignée ADR P1/P2 |
| Critères de promotion | Fort | Tableau critères vs statut Interv360 ; décision future explicite |
| Limites | Fort | 7 limites honnêtes (1 projet, crédits, revue simulée, QA candidat) |
| Valeur SFIA | Fort | 9 valeurs identifiées |
| Options futures | Fort | 7 options sans déclenchement automatique |

---

## 4. Points forts

- **Séquence complète et reproductible** — 14 étapes de l'ouverture UX/UI à la capitalisation standard candidat.
- **Distinction claire** entre V1 présentable, V1 définitive et delivery.
- **Garde-fous forts** contre backlog, user stories et code automatiques.
- **Revue simulée multi-rôles** adaptée aux projets fictifs / pilotes sans acteurs réels.
- **Enrichissement des méthodes rôle** avant validation simulée — cohérence des décisions par rôle.
- **Séparation Git détaillé / Notion gouvernance** — source de vérité et synthèse distinctes.
- **Contrainte crédits Figma documentée** — V2 différée sans masquer la limite outil.
- **Promotion officielle volontairement différée** — pas de glissement vers `docs/standards/` implicite.

---

## 5. Points à ajuster avant promotion officielle

| Priorité | Ajustement | Motif |
|----------|------------|-------|
| P1 | Généraliser certaines références Interv360 pour un futur standard officiel | Éviter dépendance au pilote unique |
| P1 | Définir clairement les entrées minimales obligatoires | Reproductibilité sur autre projet |
| P1 | Préciser les critères de sortie d'un jalon Figma V1 / UX/UI V1 | Clôture objectivable |
| P2 | Formaliser une nomenclature générique des livrables | Remplacer noms fichiers Interv360 |
| P2 | Prévoir une variante revue réelle et une variante revue simulée | Couvrir projets réels et fictifs |
| P2 | Préciser comment gérer les captures lorsque Figma n'est pas utilisé | Généraliser l'outil design |
| P3 | Ajouter exemples de décisions types | Faciliter adoption |
| P3 | Prévoir lien futur avec catalogue prompts | Intégration écosystème SFIA |

---

## 6. Robustesse méthodologique

| Dimension | Niveau | Commentaire |
|-----------|--------|-------------|
| Reproductibilité | Fort | Séquence et livrables types nommés |
| Traçabilité | Fort | Git ; captures ; chaîne documentaire complète |
| Gouvernance | Fort | Clôture + Notion préparée non publiée |
| Sécurité méthodologique | Fort | Garde-fous delivery et ADR |
| Prévention du glissement delivery | Fort | Répété à chaque étape clé |
| Compatibilité projet fictif | Fort | Revue simulée par rôles |
| Compatibilité projet réel | À renforcer | Variante revue réelle à formaliser |
| Capitalisation rôle | Fort | Enrichissement avant revue simulée |
| Intégration Notion | Moyen | Notion nommé explicitement — à généraliser |
| Maturité standard | Moyen | 1 projet testé ; promotion criteria partiellement remplis |

---

## 7. Risques si promotion trop rapide

- Standard **trop marqué Interv360** — chemins, captures, score 8,3/10 perçus comme norme.
- **QA / Testeur encore candidat** — trou méthodologique en revue transverse.
- **Absence de test sur un second projet** — réutilisabilité non confirmée.
- **Revue simulée uniquement** — risque de sous-estimer l'écart avec revue réelle.
- Risque d'être perçu comme **standard Figma** plutôt que **standard de gouvernance UX/UI V1**.
- Risque de **figer trop tôt** la structure des livrables (noms fichiers, 11 captures, etc.).

---

## 8. Décision de revue

**Décision** : **Promotable avec ajustements mineurs — promotion différée.**

**Justification**

Le standard candidat est **robuste**, **complet** et **cohérent** avec la gouvernance SFIA observée sur le cycle Figma V1 Interv360. Il peut servir de **base à un standard officiel**, mais doit être **généralisé** et **relu** avant création dans `docs/standards/`.

Les ajustements P1 identifiés (généralisation, entrées minimales, critères de sortie) sont **non bloquants** pour la préparation de promotion — ils conditionnent la **création effective** du fichier officiel.

---

## 9. Conditions de promotion future

- [ ] Généraliser les références Interv360 (variables `{project_id}`, `{design_tool}`, etc.)
- [ ] Conserver Interv360 comme **exemple**, pas comme dépendance
- [ ] Préciser les **entrées minimales** obligatoires
- [ ] Préciser les **sorties attendues** par étape
- [ ] Distinguer **revue simulée** et **revue réelle**
- [ ] Clarifier le lien avec **Notion** (ou outil de gouvernance générique)
- [ ] Clarifier le lien avec **catalogue prompts**
- [ ] Décider du statut **QA / Testeur** (candidat vs méthode officielle)
- [ ] Valider le **nom** du futur standard officiel
- [ ] Créer le fichier dans `docs/standards/` **seulement après décision explicite**

---

## 10. Décision delivery

Cette revue du standard candidat **ne modifie pas** la décision delivery du jalon Figma V1.

| Transition | Statut |
|------------|--------|
| Delivery | Bloqué |
| Backlog | Bloqué |
| User stories | Bloquées |
| Code | Bloqué |

---

## 11. Conclusion

Le **standard candidat SFIA Figma V1** est jugé **suffisamment robuste** pour être **préparé à une promotion future**, mais il **ne doit pas encore être promu automatiquement**.

La décision retenue est **« promotable avec ajustements mineurs — promotion différée »**.

La **prochaine étape** consiste à préparer un **dossier de promotion** (`sfia-figma-v1-standard-promotion-preparation.md`) **sans créer** le standard officiel.

---

*Revue manuelle standard candidat — projet Interv360 — gouvernance SFIA — promotion non exécutée.*
