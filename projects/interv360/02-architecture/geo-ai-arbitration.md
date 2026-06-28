# Interv360 — Arbitrage géolocalisation et IA légère

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Arbitrage MVP — géolocalisation / IA  
**Statut** : Draft — arbitrage issu du cycle de clarification  
**Source principale** : `mvp-clarifications.md`

---

## 1. Objectif

Ce document **formalise l'arbitrage MVP** concernant la **géolocalisation** et l'**IA légère** pour le projet Interv360.

**Précisions :**

- ces deux sujets étaient **identifiés comme ouverts / sensibles** dans le cadrage (`business-framing.md`, `qa-transverse-analysis.md`) ;
- l'objectif est d'**éviter des critères flottants** dans le MVP ;
- le document **fixe une décision de cadrage** — hors MVP pour les deux ;
- il **conserve une trajectoire future** documentée sans engagement delivery ;
- il **ne constitue pas** un backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de cas de tests ;
- il **ne lance pas** le delivery.

---

## 2. Sources utilisées

| Source | Apport |
|--------|--------|
| `mvp-clarifications.md` | Décision hors MVP §5.6, liste hors périmètre §7 |
| `mvp-clarifications-summary.md` | Synthèse géoloc / IA hors MVP |
| `clarification-workshop-minutes.md` | Décisions atelier simulé §8, ADR candidates |
| `qa-transverse-analysis.md` | Recommandation prudente hors MVP ; testabilité géoloc/IA |
| `business-framing.md` | RG-T04 géolocalisation, Q7/Q15 IA, arbitrages A-FG06, A-IA01 |
| `mvp-arbitration-validation.md` | Limites MVP validées — pas BI, pas prédictif IA |
| `mvp-arbitrations.md` | Recommandations arbitrages et impacts |
| `ux-ui-brief.md` | Limites MVP §7 — sobriété, pas personnalisation avancée |
| `ux-ui-brief-validation.md` | Limites MVP — pas prédictif IA, pas BI |
| `status-mapping.md` | Pas de statut géoloc/IA au MVP |
| `rules-rg-prioritization.md` | 6 règles RG sans dépendance géoloc/IA |
| `closure-without-signature.md` | Clôture sans critère géolocalisé |

---

## 3. Synthèse de l'arbitrage

| Sujet | Décision MVP | Statut | Trajectoire future |
|-------|--------------|--------|-------------------|
| **Géolocalisation** | **Hors MVP** | Extension future | Géoloc simulée ou déclarative ; optimisation planning ; preuve terrain — après cadrage RSSI |
| **IA légère** | **Hors MVP** | Extension future | Assistance non bloquante (synthèse CR, catégorie, doublons) — après gouvernance données / coûts |

---

## 4. Arbitrage géolocalisation

### 4.1 Décision MVP

> **Géolocalisation — décision MVP**
>
> La **géolocalisation est exclue du MVP** Interv360.
> Elle **ne doit pas** être utilisée comme **critère de validation** du MVP, ni comme **dépendance** du parcours technicien.

Références cadrage : mention RG-T04, arbitrage A-FG06 (`business-framing.md`) — **non validé MVP** ; aligné atelier simulé et `qa-transverse-analysis.md`.

### 4.2 Justification

| Facteur | Explication |
|---------|-------------|
| **Données sensibles** | Position terrain = donnée personnelle / géolocalisable — consentement et base légale à cadrer |
| **Complexité UX terrain** | Permissions mobile, précision, mode hors ligne, messages d'erreur |
| **Risques sécurité / conformité** | RSSI, durée conservation, accès — non arbitrés au MVP |
| **Besoin non indispensable** | Le cycle SAV MVP se démontre sans preuve de position : demande → qualification → planification → intervention → clôture → dashboard |
| **Périmètre centré** | MVP centré sur **demande, planification, intervention, clôture, dashboard** — pas optimisation tournée ni preuve de présence |

### 4.3 Impacts sur le MVP

- **pas de statut** spécifique lié à la géolocalisation (cf. `status-mapping.md` — 8 statuts sans géoloc) ;
- **pas de KPI** géolocalisation sur dashboard SAV ou dirigeant ;
- **pas de critère de clôture** géolocalisé (`closure-without-signature.md`) ;
- **pas d'obligation** de position terrain au démarrage ou à la clôture ;
- **pas d'impact** sur STAT-03 (Planifiée), STAT-04 (En cours) ou STAT-06 (Clôturée) ;
- **parcours technicien mobile simplifié** — actions métier sans capture GPS.

### 4.4 Trajectoire future

Trajectoire **prudente** — sans engagement delivery :

1. **Géolocalisation simulée ou déclarative** en extension (saisie manuelle zone, pas tracking temps réel au premier stade).
2. **Usage possible** : optimisation planning, preuve terrain optionnelle, réduction retards — **si besoin réel confirmé**.
3. **Cadrage RSSI / conformité obligatoire** avant toute inclusion (consentement, finalité, durée).
4. **Étude d'impact données** à prévoir si le besoin métier est confirmé post-MVP.

---

## 5. Arbitrage IA légère

### 5.1 Décision MVP

> **IA légère — décision MVP**
>
> L'**IA légère est exclue du MVP** Interv360.
> Elle **ne doit pas** être utilisée pour :
>
> - qualifier automatiquement une demande ;
> - résumer un compte rendu ;
> - prioriser une demande ;
> - générer une décision métier au MVP.

Références : Q7, Q15, A-IA01 (`business-framing.md`) — **non validés MVP** ; limites brief UX (pas prédictif IA).

### 5.2 Justification

| Facteur | Explication |
|---------|-------------|
| **Complexité et dérive** | Fonctionnalités « intelligentes » floues — critères d'acceptation instables |
| **Coût / FinOps** | Appels modèle, volume CR, monitoring — non maîtrisés au pilote MVP |
| **Gouvernance des données** | Données client, CR, emails — envoi vers service IA à cadrer |
| **Explicabilité** | Décisions SAV doivent rester traçables et compréhensibles |
| **Non-nécessité cycle SAV** | Démonstration MVP possible avec règles explicites (RG-*, statuts) |
| **Stabilisation préalable** | Règles, statuts, clôture et dashboard doivent être **stabilisés d'abord** |

### 5.3 Impacts sur le MVP

- **pas de suggestion IA** dans la fiche demande ou qualification ;
- **pas de résumé automatique** du compte rendu ;
- **pas de priorisation automatique IA** des demandes ;
- **pas de génération de réponse client** (notifications simulées sans IA) ;
- **pas d'alerte IA** sur dashboard ;
- les **décisions métier restent explicites et humaines** — manager SAV, technicien.

### 5.4 Trajectoire future

Trajectoire **prudente** — assistance non bloquante :

1. **Aide à la synthèse du CR** en extension future (brouillon suggéré, validation humaine obligatoire).
2. **Suggestion de catégorie ou priorité** en assistance **non bloquante**.
3. **Détection d'anomalies ou doublons** en assistance future — complément possible à RG-C04 (signalement manuel au MVP).
4. **Expérimentation encadrée** après stabilisation MVP et documents du cycle de clarification.
5. **Validation gouvernance / données / coûts** avant toute inclusion.

---

## 6. Impacts transverses

| Domaine | Impact de l'exclusion MVP |
|---------|---------------------------|
| **UX/UI** | Parcours simplifiés ; pas de permissions géoloc ; pas d'UI « suggestion IA » ; mobile technicien centré actions métier |
| **QA / testabilité future** | Pas de critères flottants géoloc/IA ; focus testabilité sur RG-*, statuts, clôture — `qa-transverse-analysis.md` |
| **Sécurité / conformité** | Surface données réduite ; pas de collecte position ; pas de transfert données vers service IA |
| **Architecture** | Pas de composant géoloc ni pipeline IA au MVP ; sync CRM simulée inchangée |
| **GreenOps / FinOps** | Pas de coût inférence IA ; pas de tracking continu GPS (batterie, données) |
| **Pilotage projet** | Périmètre MVP borné ; risque dérive scope réduit (R-UX, surproduction) |
| **Dashboard / KPI** | 12 + 10 KPI documentés sans indicateur géoloc ni score IA ; alertes métier uniquement |

---

## 7. Points hors MVP confirmés

Liste consolidée — **exclusions explicites** :

- géolocalisation **temps réel** ;
- **preuve de présence** géolocalisée ;
- **optimisation automatique** de tournée ;
- **suggestion IA** de priorité ;
- **résumé automatique IA** du compte rendu ;
- **génération automatique** de message client ;
- **scoring IA** (demande, client, intervention) ;
- **automatisation décisionnelle IA** (qualification, clôture, planification).

*Aligné `mvp-clarifications.md` §7 et limites `ux-ui-brief-validation.md`.*

---

## 8. Points à préciser plus tard

- **besoin réel** de géolocalisation (cas d'usage terrain validés métier) ;
- **base légale / conformité** (RGPD, consentement, information) ;
- **données collectées** (précision, fréquence, rétention) ;
- **durée de conservation** position et logs ;
- **coût IA** (modèle, volume, plafonds FinOps) ;
- **modèle ou service IA** envisagé (hors périmètre choix technique ici) ;
- **explicabilité** des suggestions IA ;
- **gouvernance** (qui valide, qui peut désactiver) ;
- **métriques de valeur** (gain temps, qualité CR) ;
- **limites éthiques / sécurité** (données sensibles, hallucinations).

---

## 9. Documents liés

| Document | Lien |
|----------|------|
| `mvp-clarifications.md` | Décision hors MVP §5.6, liste §7 |
| `rules-rg-prioritization.md` | Règles MVP sans dépendance géoloc/IA |
| `status-mapping.md` | Aucun statut géoloc/IA |
| `closure-without-signature.md` | Clôture sans critère géolocalisé |
| `qa-transverse-analysis.md` | Recommandation hors MVP par défaut |
| ADR futures (candidates §10) | Si arbitrage devient structurant architecture cible |

---

## 10. ADR candidates

| Sujet | ADR candidate ? | Pourquoi |
|-------|-----------------|----------|
| Exclusion géolocalisation du MVP | Possible — faible priorité | Décision périmètre ; peut rester dans ce document au MVP |
| Exclusion IA légère du MVP | Possible — faible priorité | Idem — cadrage suffisant pour pilote |
| Inclusion future géolocalisation | **Oui** — si retenue | Impact données, sécurité, UX terrain, architecture |
| Inclusion future IA assistive | **Oui** — si retenue | Gouvernance données, coûts, explicabilité, architecture |

**Précision** : les **exclusions** peuvent rester documentées **dans ce document** pour le cycle de clarification. Une **ADR** sera pertinente uniquement si l'arbitrage devient **durable** ou **structurant** pour l'architecture cible Interv360.

---

## 11. Points hors périmètre

- choix d'**outil IA** ou de **modèle** ;
- **architecture IA** ou **architecture géolocalisation** détaillée ;
- **tracking temps réel** ;
- **consentement** détaillé (textes juridiques) ;
- **DPIA** complète ;
- backlog, user stories ;
- cas de tests, scénarios de tests, stratégie de recette ;
- delivery ;
- publication Notion.

---

## 12. Garde-fous

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
- [x] pas de PR créée — branche longue `analysis/interv360-clarification-cycle`.

---

## 13. Conclusion

L'arbitrage MVP Interv360 est **fixé** :

- **géolocalisation hors MVP** — extension future après cadrage conformité ;
- **IA légère hors MVP** — extension future en assistance non bloquante ;
- **périmètre MVP clarifié** — cycle SAV démontrable sans ces capacités ;
- **critères flottants évités** — pas de dépendance implicite géoloc/IA dans règles, statuts ou clôture ;
- **trajectoire future conservée** — §4.4 et §5.4 sans engagement delivery.

**Prochaine étape recommandée** : produire une **synthèse de clôture du cycle de clarification** sur la branche `analysis/interv360-clarification-cycle`, puis préparer la **PR unique** vers `main` en fin de cycle.

---

*Arbitrage géolocalisation et IA légère — Interv360 — gouvernance SFIA.*
