# ACTE VI.2 — Chef de projet / PO

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A — persona VI.2 |
| **Acte** | VI — Se projeter |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2 |
| **Durée cible** | 5–6 minutes |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je vois comment structurer sans noyer l'équipe dans des documents. » |

---

## 1. Question initiale

> **Comment structurer le projet sans créer une bureaucratie documentaire ?**

---

## 2. Problèmes reconnus

| Irritant | Manifestation |
|----------|---------------|
| **Scope fluctuant** | Le backlog grossit sans lien avec le cadrage |
| **Coordination IA / équipe** | Chacun travaille dans un outil différent |
| **Backlog déconnecté** | Stories sans trace des décisions de scope |
| **Rework** | Reprises liées à un périmètre ambigu |
| **Validations tardives** | Décisions sponsor après des semaines de delivery |
| **Contexte perdu** | Impossible de reprendre après une absence |

---

## 3. Ce que SFIA change pour vous

| Changement | Mécanisme |
|------------|-----------|
| **Cycles bornés** | Intention · périmètre · livrable · stop conditions |
| **Backlog relié au cadrage** | Epics et stories traçables vers le framing |
| **Gates explicites** | Points de décision — pas de dérive silencieuse |
| **Review packs** | Synthèse vérifiable avant merge |
| **Réserves tracées** | Écarts documentés — pas cachés |
| **Reprise facilitée** | Git conserve l'historique des décisions |

La documentation est **proportionnée au risque** — pas systématiquement exhaustive.

---

## 4. Valeur attendue — sans chiffre inventé

- **Moins de rework** lié à un périmètre flou — si le cadrage est tenu ;
- **Meilleure coordination** entre qualification, exécution et validation ;
- **Décisions sponsor** aux bons moments — pas en fin de sprint ;
- **Visibilité** sur ce qui est prêt à merger — et ce qui ne l'est pas.

Valeur **conditionnelle** à l'application du cadre — pas une garantie de vélocité.

---

## 5. Votre rôle dans le dispositif

| Vous… | Vous ne… |
|-------|----------|
| Maintenez **intention et périmètre** | Décidez seul de l'architecture structurante |
| Préparez les **arbitrages** pour les gates | Déléguez le métier à l'IA |
| Vérifiez les **livrables** par cycle | Contournez les stop conditions |
| **Routez** les cycles (cadrage · delivery · QA · PR) | Signez seul un merge critique |
| Consolidez les **review packs** | Remplacez l'expertise sécurité si requise |

---

## 6. Livrables que vous consultez ou validez

| Livrable | Usage PO / CP |
|----------|---------------|
| **Note de cadrage · in/out** | Référence scope |
| **Backlog · epics · stories** | Planification incrémentale |
| **Registre de décisions** | Mémoire des arbitrages |
| **Review pack** | Contrôle avant GO merge |
| **Rapports QA** | Réserves et corrections bornées |
| **Roadmap Discovery / gates** | Alignement cycles produit |

---

## 7. Ce que SFIA ne fait pas à votre place

- **Prioriser** seul au nom du sponsor sans validation ;
- **Corriger** un métier mal défini par plus de process ;
- **Garantir** l'absence de bug ou de retard ;
- **Remplacer** la facilitation humaine avec les parties prenantes ;
- **Automatiser** la discipline — le cadre exige application.

---

## 8. Prérequis et limites

| Prérequis | Limite |
|-----------|--------|
| Cadrage initial **accepté** par le sponsor | Un mauvais cadrage produit des cycles cohérents mais inutiles |
| Accès au **repository** Git | SFIA suppose une source de vérité versionnée |
| Temps pour **lire** les review packs | Pas de merge « au feeling » |

---

## 9. Parcours recommandé dans Discovery

```text
Acte I → Acte II → Acte III (hub + III.1–III.4) → Acte IV → Acte V → VI.2
                                                      ↘ Acte VII (setup)
```

Durée indicative **30–45 minutes** pour une projection crédible.

---

## 10. Prochaine action pédagogique

1. Relire [Acte II](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) — cycles et gates ;
2. Suivre [NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) — chaîne complète ;
3. Consulter [Acte IV](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) — galerie livrables ;
4. Pour démarrer un repo → [Acte VII — Mettre SFIA en place](sfia-discovery-act-07-explore-the-method-editorial-draft.md).

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « Trop de process » vs « plus de chaos sans cadre ». |
| **Résolution** | Cycles bornés · validation proportionnée · review packs ciblés. |
| **Preuve** | Acte III NovaBuild · cinq familles Acte IV · mécanismes Acte V · persona PD-04 §1.2. |

---

## 12. Navigation

**← Précédent :** [VI.1 — Dirigeant PME](sfia-discovery-act-06-1-sme-leader-editorial-draft.md)

**Hub :** [Acte VI](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Suivant → :** [VI.3 — Équipe technique](sfia-discovery-act-06-3-technical-team-editorial-draft.md)

---

## 13. Sources Git (gouvernance)

| Élément | Source |
|---------|--------|
| Persona CP / PO | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` §1.2 |
| Cycles · gates | Acte II · operating model (référence gouvernance) |
| Livrables | Acte IV · Acte III.3 delivery/QA |

*Prompt catalog · routage exhaustif — non exposés lecteur.*

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–12 ci-dessus.*
