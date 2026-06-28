# Interv360 — Clôture du cycle de clarification

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Synthèse de clôture de cycle  
**Statut** : Draft — cycle de clarification prêt pour PR unique  
**Branche** : `analysis/interv360-clarification-cycle`

---

## 1. Objectif

Ce document **clôture le cycle de clarification Interv360** mené après l'**analyse QA transverse** (`qa-transverse-analysis.md`) et la **préparation d'atelier** (`clarification-workshop-preparation.md`).

**Précisions :**

- le cycle a permis de **stabiliser les décisions MVP** avant conception détaillée, maquette Figma ou architecture fonctionnelle ;
- il **consolide les décisions d'atelier simulé** en livrables spécialisés successifs ;
- il **prépare une PR unique** vers `main` regroupant l'ensemble du cycle ;
- il **ne constitue pas** un backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de cas de tests ;
- il **ne lance pas** le delivery.

---

## 2. Livrables produits dans le cycle

| Livrable | Rôle | Statut |
|----------|------|--------|
| `clarification-workshop-minutes.md` | Compte rendu atelier simulé — décisions UX, RG macro, statuts, clôture, géoloc/IA | Draft — prêt revue PR unique |
| `clarification-workshop-minutes-summary.md` | Synthèse compte rendu atelier | Draft — prêt revue PR unique |
| `mvp-clarifications.md` | Consolidation décisions MVP (UX + transverse) | Draft — prêt revue PR unique |
| `mvp-clarifications-summary.md` | Synthèse clarifications MVP | Draft — prêt revue PR unique |
| `rules-rg-prioritization.md` | Formalisation 6 règles RG prioritaires | Draft — prêt revue PR unique |
| `rules-rg-prioritization-summary.md` | Synthèse priorisation RG | Draft — prêt revue PR unique |
| `status-mapping.md` | Mapping fonctionnel 8 statuts MVP (RG-I05) | Draft — prêt revue PR unique |
| `status-mapping-summary.md` | Synthèse mapping statuts | Draft — prêt revue PR unique |
| `closure-without-signature.md` | Clôture sans signature (RG-R02, RG-R05, STAT-06) | Draft — prêt revue PR unique |
| `closure-without-signature-summary.md` | Synthèse clôture sans signature | Draft — prêt revue PR unique |
| `geo-ai-arbitration.md` | Arbitrage géolocalisation et IA légère hors MVP | Draft — prêt revue PR unique |
| `geo-ai-arbitration-summary.md` | Synthèse arbitrage géoloc / IA | Draft — prêt revue PR unique |

**Total cycle** : **12 livrables** documentaires (+ présent document de clôture et sa synthèse).

*Documents amont déjà sur `main` (hors PR cycle) : `clarification-workshop-preparation.md`, templates atelier, `qa-transverse-analysis.md`.*

---

## 3. Rappel du fil de clarification

1. **Compte rendu atelier simulé** — `595cc23` — décisions fictives cohérentes, placeholders remplacés par orientations.
2. **Consolidation MVP** — `260b7c9` — 8 points UX, clarifications transverses, hors périmètre.
3. **Priorisation RG** — `4eb7790` — RG-C04, C05, I05, I06, R02, R05 au niveau macro opérationnel.
4. **Mapping statuts** — `3d60b8c` — 8 statuts STAT-01 à STAT-08, CRM, alertes, transitions macro.
5. **Clôture sans signature** — `90ac294` — RG-R02/R05, champs CR, motifs SIGN-ABS-*, sync CRM.
6. **Arbitrage géolocalisation / IA** — `f1d6349` — hors MVP, trajectoire future.
7. **Clôture du cycle** — présent document — synthèse et préparation PR unique.

**Branche longue** : `analysis/interv360-clarification-cycle` — **6 commits** de livrables + 1 commit clôture (après push).

---

## 4. Décisions principales consolidées

### UX / MVP

| Domaine | Décision consolidée | Document source |
|---------|---------------------|-----------------|
| Fiche demande | Checklist minimale MVP ; détails avancés hors MVP | `mvp-clarifications.md` |
| Compte rendu | Web seul au MVP ; export PDF extension future | `mvp-clarifications.md` |
| Planning | Vue jour par défaut ; semaine secondaire si simple | `mvp-clarifications.md` |
| Alertes dashboard | Top 5–7 visibles ; hiérarchie par criticité | `mvp-clarifications.md` |
| KPI | Top 5–7 above the fold par dashboard | `mvp-clarifications.md` |
| Mobile technicien | Mobile prioritaire ; parcours simplifié | `mvp-clarifications.md` |
| Erreurs intégration | Message métier visible ; détail technique secondaire | `mvp-clarifications.md`, `rules-rg-prioritization.md` |

### Règles RG

| Règle | Décision consolidée | Document source |
|-------|---------------------|-----------------|
| RG-C04 | Signalement doublon potentiel ; **pas de fusion automatique** | `rules-rg-prioritization.md` |
| RG-C05 | Données minimales ; statut À qualifier si incomplet | `rules-rg-prioritization.md` |
| RG-I05 | Statuts métier unifiés ; mapping détaillé | `status-mapping.md` |
| RG-I06 | Message métier + gravité (3 niveaux) + reprise manuelle | `rules-rg-prioritization.md` |
| RG-R02 | Signature **optionnelle** ; motif si absente | `closure-without-signature.md` |
| RG-R05 | Clôture avec **CR obligatoire** et trace conservée | `closure-without-signature.md` |

### Statuts

| Domaine | Décision consolidée | Document source |
|---------|---------------------|-----------------|
| Liste MVP | 8 statuts STAT-01 à STAT-08 stabilisés | `status-mapping.md` |
| Distinction | **En retard** (métier) vs **Anomalie d'intégration** (technique) | `status-mapping.md` |

### Clôture

| Domaine | Décision consolidée | Document source |
|---------|---------------------|-----------------|
| Signature | Optionnelle ; non bloquante (ARB-MVP-03) | `closure-without-signature.md` |
| Motif absence | Obligatoire (SIGN-ABS-01 à 04, 99) | `closure-without-signature.md` |
| Sync CRM | Statut clôturé + indicateur signature + résumé CR | `closure-without-signature.md` |

### Géoloc / IA

| Domaine | Décision consolidée | Document source |
|---------|---------------------|-----------------|
| Géolocalisation | **Hors MVP** — extension future | `geo-ai-arbitration.md` |
| IA légère | **Hors MVP** — extension future assistive | `geo-ai-arbitration.md` |

---

## 5. Points restant à préciser plus tard

| Sujet | Point à préciser | Document concerné |
|-------|------------------|-------------------|
| Alertes | Seuils d'alerte dashboard chiffrés | `status-mapping.md` |
| CRM simulé | Codes CRM exacts et API fictive | `status-mapping.md`, `closure-without-signature.md` |
| Cycle SAV | Transitions détaillées et droits par rôle | `status-mapping.md` |
| Clôture | Réouverture post-clôture | `closure-without-signature.md` |
| Compte rendu | Modification CR après clôture | `closure-without-signature.md` |
| Anti-doublon | Règles de fusion doublon | `rules-rg-prioritization.md` |
| Intégration | Libellés d'erreurs détaillés par flux | `rules-rg-prioritization.md` |
| Géoloc future | Cadrage conformité (RGPD, consentement) | `geo-ai-arbitration.md` |
| IA future | Gouvernance données, coûts, explicabilité | `geo-ai-arbitration.md` |
| Architecture | **ADR candidates** (voir §6) | Phase architecture ultérieure |

---

## 6. ADR candidates identifiées

| ADR candidate | Priorité | Pourquoi |
|---------------|----------|----------|
| Mapping durable des statuts | Haute | Impact CRM, dashboard, UX, sync ARB-MVP-04 |
| Gestion erreurs d'intégration | Haute | RG-I06, écran anomalies, reprise manuelle |
| Clôture sans signature | Moyenne | Cycle SAV, facturation simulée, ARB-MVP-03 |
| Synchronisation CRM simulée | Haute | Contrats API, payload clôture, mapping |
| Inclusion future géolocalisation | Basse (si besoin confirmé) | Données sensibles, RSSI, UX terrain |
| Inclusion future IA assistive | Basse (si besoin confirmé) | Gouvernance, coûts, explicabilité |

**Précision** : **aucune ADR n'est créée** dans ce cycle — identification pour une **phase architecture ultérieure**.

---

## 7. Garde-fous respectés

- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de stratégie de recette produite ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion ;
- [x] pas d'appel API Notion ;
- [x] pas de secret affiché ;
- [x] `.env` non modifié ;
- [x] **pas de PR intermédiaire** — branche longue `analysis/interv360-clarification-cycle` ;
- [x] cycle regroupé en **commits documentaires successifs** prêts pour revue unique.

---

## 8. Préparation PR unique

Le cycle est **prêt pour une PR unique** vers `main`.

| Élément | Valeur |
|---------|--------|
| **Branche source** | `analysis/interv360-clarification-cycle` |
| **Branche cible** | `main` |
| **Contenu** | Livrables de clarification (atelier simulé + 5 documents spécialisés + synthèses + clôture cycle) |
| **Type** | Documentation / cadrage / architecture amont |
| **Code applicatif** | Non |
| **Notion** | Non |
| **Delivery** | Non |

**Commits attendus dans la PR** (depuis divergence `main`) :

```
docs: close Interv360 clarification cycle
docs: add Interv360 geo AI arbitration
docs: add Interv360 closure without signature rules
docs: add Interv360 status mapping
docs: add Interv360 RG rules prioritization
docs: add Interv360 MVP clarifications
docs: add simulated Interv360 clarification workshop minutes
```

---

## 9. Recommandation après merge

1. **Revue** de la PR unique (cohérence inter-documents, garde-fous, absence de code).
2. **Merge** vers `main` (sans push forcé).
3. **Suppression** de la branche `analysis/interv360-clarification-cycle` (locale et distante) après merge confirmé.
4. **Publication Notion synthétique** — uniquement si **décision explicite** ultérieure (hors périmètre cycle).
5. **Bascule phase suivante** : architecture fonctionnelle détaillée, maquette Figma, ou instruction des **ADR candidates** identifiées §6.

---

## 10. Conclusion

Le **cycle de clarification Interv360 est complet** :

- le **MVP est mieux stabilisé** — UX, RG, statuts, clôture, exclusions géoloc/IA ;
- les **ambiguïtés principales** identifiées par l'analyse QA ont été **levées** au niveau cadrage ;
- les **documents spécialisés** prévus en sortie d'atelier sont **produits** ;
- la **PR unique** peut être **ouverte** après commit et push de la présente synthèse de clôture.

---

*Clôture cycle de clarification — Interv360 — gouvernance SFIA.*
