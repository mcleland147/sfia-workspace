# Interv360 — Préparation promotion standard officiel SFIA — Cycle Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Standard candidat source** : `sfia-figma-v1-standard-candidate.md`  
**Revue source** : `sfia-figma-v1-standard-candidate-review.md`  
**Statut** : Prepared — Promotion not executed  
**Type** : Préparation promotion standard officiel  
**Objet** : préparer la promotion future du standard candidat vers `docs/standards/` sans la réaliser

---

## 1. Objectif

Ce document **prépare la future promotion** du standard candidat Figma V1 en **standard officiel SFIA**.

- la **promotion n'est pas exécutée** ;
- **aucun fichier** n'est créé dans `docs/standards/` ;
- le futur standard officiel reste **à arbitrer** ;
- cette préparation sert à lister les **ajustements**, le **nom cible**, la **structure cible** et les **conditions de promotion**.

---

## 2. Décision issue de la revue

**Décision** (`sfia-figma-v1-standard-candidate-review.md`) : **Promotable avec ajustements mineurs — promotion différée.**

Le standard candidat est **robuste**, mais doit être **généralisé** avant officialisation.

---

## 3. Nom cible proposé

| Option | Chemin proposé | Commentaire |
|--------|----------------|-------------|
| **Option A** | `docs/standards/figma-v1-governance-standard.md` | Ancré sur l'outil Figma — proche du candidat actuel |
| **Option B (recommandée)** | `docs/standards/ux-ui-v1-governance-standard.md` | Plus générique — couvre d'autres outils que Figma |

**Recommandation** : préférer **`ux-ui-v1-governance-standard.md`** si l'objectif est de ne **pas dépendre uniquement de Figma**.

> **Aucun de ces fichiers ne doit être créé dans cette tâche.**

---

## 4. Ajustements nécessaires avant promotion

| Priorité | Ajustement | Action attendue |
|----------|------------|-----------------|
| P1 | Remplacer références spécifiques Interv360 par variables génériques | Introduire `{project_id}`, `{design_tool}`, etc. |
| P1 | Conserver Interv360 comme exemple d'application | Déplacer en annexe « Exemple pilote » |
| P1 | Définir les prérequis minimum | ADR consolidés, brief design, garde-fous documentés |
| P1 | Définir les livrables obligatoires | Liste normative par étape |
| P1 | Définir les critères de clôture | Statuts V1, V2, delivery, score indicatif optionnel |
| P2 | Ajouter variantes revue réelle / revue simulée | § dédié avec critères d'usage |
| P2 | Généraliser Figma vers UX/UI V1 si besoin | `{design_tool}` ; exports adaptables |
| P2 | Clarifier le lien avec prompts | Références catalogue ; pas de duplication |
| P2 | Clarifier le lien avec Notion | `{governance_tool}` ; `publish_to_notion: false` |
| P3 | Ajouter exemple de payload gouvernance | Modèle JSON générique |
| P3 | Prévoir annexe exemples | Interv360, décisions types, checklist |

---

## 5. Structure cible du futur standard officiel

**Titre proposé** : **SFIA — Standard gouvernance UX/UI V1**

| # | Section |
|---|---------|
| 1 | Objectif |
| 2 | Périmètre |
| 3 | Définitions |
| 4 | Principes directeurs |
| 5 | Pré-requis |
| 6 | Séquence standard |
| 7 | Production maquette V1 |
| 8 | Export et versionnement |
| 9 | Revue premier jet |
| 10 | Enrichissement rôles |
| 11 | Revue transverse réelle ou simulée |
| 12 | Clôture jalon |
| 13 | Gouvernance Notion / outil de pilotage |
| 14 | Décisions types |
| 15 | Garde-fous |
| 16 | Critères de passage delivery |
| 17 | Critères de promotion / amélioration continue |
| 18 | Annexes / exemples |

*Mapping depuis le candidat* : sections 1–18 du candidat se réorganisent et généralisent selon cette structure.

---

## 6. Variables génériques à introduire

| Variable | Description |
|----------|-------------|
| `{project_id}` | Identifiant projet (ex. PRJ-INTERV360) |
| `{project_name}` | Nom projet |
| `{phase}` | Phase courante (ex. 02-architecture) |
| `{milestone}` | Jalon UX/UI V1 (ex. Figma V1) |
| `{design_tool}` | Outil de design (Figma, autre) |
| `{v1_quality_score}` | Score indicatif optionnel (non normatif) |
| `{review_mode}` | `real` ou `simulated` |
| `{roles_involved}` | Liste rôles SFIA mobilisés |
| `{delivery_status}` | blocked / authorized (explicite) |
| `{governance_tool}` | Outil gouvernance (Notion, autre) |
| `{source_documents}` | Documents Git source de vérité |
| `{screens_folder}` | Dossier captures versionnées |

---

## 7. Éléments Interv360 à conserver comme exemple

*À déplacer en **exemple** ou **annexe** du standard officiel — pas dans le cœur normatif.*

- Figma V1 — maquette pilote
- 11 captures PNG versionnées
- Qualité indicative 8,3/10
- V2 différée — crédits Figma épuisés
- Revue simulée multi-rôles SFIA
- QA / Testeur candidat
- Sync Notion préparée — `publish_to_notion: false`
- Delivery bloqué à la clôture

---

## 8. Éléments à ne pas reprendre tels quels

- Chemins projet Interv360 (`projects/interv360/...`)
- Noms exacts des captures (`05-dashboard-sav.png`, etc.)
- Score 8,3/10 comme **norme** ou seuil obligatoire
- ADR spécifiques Interv360 comme **obligations universelles**
- Figma comme **outil obligatoire**
- Notion comme **outil obligatoire**
- Revue simulée comme **unique** mode de revue

---

## 9. Conditions de promotion

- [ ] Revue manuelle validée (`sfia-figma-v1-standard-candidate-review.md`)
- [ ] Nom du standard officiel choisi
- [ ] Structure cible validée (§5)
- [ ] Références Interv360 généralisées (variables §6)
- [ ] Exemples déplacés en annexe (§7)
- [ ] Garde-fous delivery conservés
- [ ] Variante revue réelle / simulée ajoutée
- [ ] Outil Figma généralisé en `{design_tool}` si nécessaire
- [ ] Notion généralisé en `{governance_tool}`
- [ ] QA / Testeur clarifié (candidat vs officiel)
- [ ] **Décision explicite** de créer le fichier dans `docs/standards/`

---

## 10. Décision recommandée

**Recommandation** : préparer un futur standard officiel sous le nom :

**`docs/standards/ux-ui-v1-governance-standard.md`**

plutôt que `figma-v1-governance-standard.md`, afin de garder le standard **indépendant de l'outil**.

**Cependant**, aucune création de fichier dans `docs/standards/` ne doit être réalisée **sans décision explicite**.

---

## 11. Impact sur la suite

*Aucune option déclenchée automatiquement par cette préparation.*

| Option | Description | Statut |
|--------|-------------|--------|
| Promouvoir le standard dans `docs/standards/` | Création fichier officiel | À décider explicitement |
| Enrichir le catalogue prompts | Retour d'usage cycle V1 | À planifier |
| Ouvrir une réflexion QA / Testeur | Formaliser rôle candidat | Candidat |
| Tester le standard sur un second projet | Validation réutilisabilité | Non réalisé |
| Ouvrir un jalon delivery séparé | Phase réalisation | **Non ouvert** |
| Publier manuellement la sync Notion | Gouvernance clôture V1 | Payload prêt — non publié |

**État inchangé** : delivery, backlog, user stories et code **bloqués**.

---

## 12. Conclusion

La **promotion du standard candidat Figma V1** est **préparée mais non exécutée**.

Le futur standard officiel devrait probablement être formulé comme un **standard de gouvernance UX/UI V1** (`ux-ui-v1-governance-standard.md`), afin de **ne pas dépendre uniquement de Figma**.

La **création dans `docs/standards/`** reste soumise à une **décision explicite**.

**Prochaine action recommandée** : décider explicitement si le standard doit être promu dans `docs/standards/` — et, si oui, exécuter les ajustements P1 avant rédaction.

---

*Préparation promotion standard officiel — projet Interv360 — gouvernance SFIA — promotion non exécutée.*
