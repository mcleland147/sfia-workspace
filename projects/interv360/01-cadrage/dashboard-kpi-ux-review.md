# Interv360 — Dashboard, KPI & UX Review

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : `business-framing.md` + `mvp-arbitrations.md` + `framing-review.md`  
**Objet** : clarification ARB-MVP-07 — dashboard, KPI, vue dirigeant et impacts UX

---

## 1. Objectif du document

Ce document **clarifie le périmètre** du **tableau de bord SAV complet**, de la **vue pilotage dirigeant avancée** et des **impacts UX du noyau MVP étendu à 8 écrans**, afin de **stabiliser ARB-MVP-07** avant validation finale des arbitrages MVP.

Il formalise le positionnement des écrans de pilotage, les **KPI minimum**, les **limites MVP**, les **garde-fous UX** et une **recommandation candidate**, sans trancher définitivement la décision.

Ce document **ne produit pas** :

- de maquettes, wireframes ou travail **Figma** ;
- de backlog, user stories ou ADR finalisées ;
- d'architecture technique ;
- de définition MVP final ;
- de code applicatif.

---

## 2. Positionnement des écrans de pilotage dans le MVP

- Le **tableau de bord SAV** doit être **inclus au MVP**.
- Il **ne doit pas être minimaliste** — il doit apporter une vraie valeur opérationnelle, pas un simple compteur.
- Il doit donner une **visibilité opérationnelle** sur l'activité SAV au quotidien.
- La **vue pilotage dirigeant avancée** est **également incluse au MVP** (évolution par rapport à la proposition initiale à 7 écrans).
- Les **deux écrans doivent être complémentaires**, pas redondants.
- Le **tableau de bord SAV** est orienté **opération / suivi quotidien** (responsable SAV, planning, admin).
- La **vue dirigeant** est orientée **pilotage consolidé / tendances / alertes** (dirigeant, manager opérationnel).

**Écrans en évolution ultérieure** (hors noyau MVP clarifié) :

- suivi détaillé des notifications ;
- portail client.

---

## 3. Différence entre tableau de bord SAV et vue dirigeant

| Écran | Public cible | Objectif | Horizon de lecture | Niveau de détail |
|-------|--------------|----------|--------------------|------------------|
| **Tableau de bord SAV** | Responsable SAV, Assistant administratif, Manager opérationnel | Suivre l'activité SAV au quotidien ; identifier actions immédiates | **Court terme** (jour, semaine) | **Détail opérationnel** — listes, statuts, alertes actionnables |
| **Vue pilotage dirigeant avancée** | Dirigeant, Manager opérationnel | Piloter l'activité ; anticiper ; prendre des décisions | **Consolidé** (semaine, mois, tendance) | **Indicateurs synthétiques et alertes** — KPI agrégés, tendances, points d'attention |

---

## 4. KPI minimum du tableau de bord SAV

| KPI | Objectif métier | Source de données | Fréquence / horizon | MVP ? |
|-----|-----------------|-------------------|---------------------|-------|
| **Demandes ouvertes** | Voir le volume de demandes actives | Demande SAV, Statut | Temps réel / jour | Oui |
| **Demandes à qualifier** | Prioriser la qualification | Demande SAV (statut initial, A_QUALIFIER) | Temps réel / jour | Oui |
| **Interventions planifiées** | Anticiper la charge planning | Intervention, Planning | Jour / semaine | Oui |
| **Interventions en cours** | Suivre l'exécution terrain | Intervention, Statut | Temps réel | Oui |
| **Interventions clôturées** | Mesurer l'activité réalisée | Intervention (statut clôturé) | Jour / semaine | Oui |
| **Interventions en retard** | Détecter les dérives de délai | Intervention, dates planifiées vs réelles | Temps réel / jour | Oui |
| **Anomalies d'intégration ouvertes** | Visibilité erreurs sync (lien CF9) | Erreur d'intégration | Temps réel | Oui |
| **Notifications en échec** | Suivre les échecs client (sans écran dédié) | Notification (statut ECHEC) | Temps réel / jour | Oui — indicateur agrégé |
| **Taux de clôture** | Mesurer l'efficacité opérationnelle | Interventions clôturées / total | Semaine | Oui — simplifié |
| **Charge technicien** | Répartir la charge planning | Technicien, Intervention, Planning | Semaine | Oui — vue simplifiée |
| **Demandes par priorité** | Prioriser le traitement | Demande SAV (priorité) | Temps réel | Oui |
| **Demandes par source** | Comparer canaux CRM, email, saisie | Demande SAV (origine) | Semaine | Oui — lien ARB-MVP-01 |

---

## 5. KPI minimum de la vue pilotage dirigeant avancée

| KPI / indicateur | Objectif dirigeant | Source | Niveau de détail | MVP ? |
|------------------|-------------------|--------|------------------|-------|
| **Volume global demandes** | Vision macro activité | Demande SAV (agrégat) | Synthétique | Oui |
| **Taux de clôture** | Efficacité globale SAV | Interventions clôturées / total | Synthétique | Oui |
| **Délai moyen de traitement** | Mesurer la réactivité | Demande → clôture (durées) | Agrégé | Oui — simplifié |
| **Retard moyen** | Identifier dérives systémiques | Interventions en retard (agrégat) | Agrégé | Oui |
| **Taux d'anomalies** | Santé intégrations | Erreurs d'intégration / flux | Synthétique | Oui |
| **Répartition par source** | Comprendre les canaux d'entrée | Demande SAV (origine) | Synthétique | Oui |
| **Charge globale équipe** | Anticiper surcharge | Techniciens, interventions | Agrégé | Oui — simplifié |
| **Interventions non clôturées critiques** | Points d'attention prioritaires | Intervention (priorité, retard) | Alertes | Oui |
| **Tendance activité** | Lire l'évolution (hausse / baisse) | Historique demandes / interventions | Tendance simple | Oui — sans BI avancée |
| **Alertes principales** | Décisions rapides | Anomalies, retards, échecs notif | Synthétique | Oui |

---

## 6. Limites MVP à poser

| Élément | Inclus MVP | Exclu MVP / évolution ultérieure |
|---------|------------|----------------------------------|
| **KPI opérationnels** | Oui — socle §4 et §5 | Non |
| **Filtres simples** | Oui — période, statut, priorité, source | Filtres avancés multi-critères |
| **Alertes principales** | Oui — retards, anomalies, échecs notif | Escalade automatique, SLA complexes |
| **Anomalies visibles** | Oui — lien écran erreurs intégration | Supervision avancée (niveau 6 ARB-MVP-05) |
| **Tendances simples** | Oui — évolution sur période courte | Analytique avancée, drill-down profond |
| **Analytique avancée** | Non | Oui — post-MVP |
| **Prédictif IA** | Non | Oui — post-MVP (ARB-MVP IA) |
| **BI complexe** | Non | Oui — post-MVP |
| **Export décisionnel avancé** | Non | Oui — export simple éventuel en cible ultérieure |
| **Personnalisation dashboard par utilisateur** | Non | Oui — post-MVP |

---

## 7. Impacts UX du noyau étendu à 8 écrans

| Impact UX | Risque | Garde-fou |
|-----------|--------|-----------|
| **Surcharge cognitive** | Trop d'informations sur 8 écrans ; fatigue utilisateur | Limiter KPI au socle MVP §4–§5 ; sobriété §14.4 |
| **Doublon dashboard SAV / vue dirigeant** | Même indicateurs affichés deux fois ; confusion | Différenciation explicite §3 (opérationnel vs consolidé) |
| **Navigation trop complexe** | Perte entre 8 écrans ; parcours fragmenté | Hiérarchie claire ; accès rapide depuis dashboard |
| **Trop d'indicateurs** | Dashboard illisible (R-M08) | Limites MVP §6 ; priorisation PO |
| **Incohérence terminologique** | Statuts / libellés différents entre écrans | Alignement mapping statuts RG-I05 ; critère §14.4 |
| **Difficulté à prioriser les alertes** | Alertes noyées dans le bruit | Alertes principales limitées ; hiérarchie visuelle |
| **Confusion erreurs intégration / retards métier** | Mauvaise interprétation dirigeant | Séparation visuelle anomalies vs retards opérationnels |
| **Besoin brief UX/UI avant Figma** | Maquettes prématurées ; règle §14.6 non respectée | **Brief UX/UI obligatoire** avant Figma ; checklist entrée Figma |

---

## 8. Recommandation candidate

**Recommandation candidate — à valider.**

Inclure au MVP un **noyau de 8 écrans**, avec **tableau de bord SAV complet** et **vue pilotage dirigeant avancée**.

- Le **tableau de bord SAV** doit rester orienté **suivi opérationnel quotidien**.
- La **vue dirigeant** doit fournir une **lecture consolidée, synthétique et orientée décision**.
- Les **indicateurs** doivent rester limités à un **socle MVP maîtrisé**, sans BI avancée, prédictif IA ou personnalisation complexe.

**Noyau MVP (8 écrans) :**

1. tableau de bord SAV complet ;
2. liste des demandes ;
3. fiche demande SAV ;
4. planning ;
5. fiche intervention technicien ;
6. compte rendu intervention ;
7. suivi des erreurs d'intégration ;
8. vue pilotage dirigeant avancée.

**Cible ultérieure :** suivi détaillé des notifications ; portail client.

**Décision finale : Non tranchée à ce stade.**

---

## 9. Impacts sur les arbitrages et documents

| Document / arbitrage | Impact |
|----------------------|--------|
| `mvp-arbitrations.md` — **ARB-MVP-07** | Stabilisation noyau 8 écrans ; KPI minimum ; statut évolutif « Validable après clarification dashboard/KPI/UX » |
| `business-framing.md` — **§14.3** | Précision tableau de bord SAV complet vs vue dirigeant ; différenciation écrans |
| `business-framing.md` — **§14.4** | Critères utilisabilité : lisibilité, sobriété, alertes, cohérence terminologique |
| `business-framing.md` — **§14.6** | Règle Figma : brief UX/UI avant maquette dashboard/dirigeant |
| `business-framing.md` — **§17** | Critères sortie : écrans candidats, KPI, critères utilisabilité |
| **Brief UX/UI futur** | Document préalable obligatoire pour dashboard + vue dirigeant |
| **Checklist entrée Figma** | Validation KPI, différenciation écrans, garde-fous §7 avant Figma |
| **Critères QA dashboard** | KPI §4–§5 testables ; alertes ; filtres simples |

*Impacts à répercuter dans `mvp-arbitrations.md` lors de la prochaine mise à jour — **aucune modification automatique** à ce stade.*

---

## 10. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template Dashboard KPI Matrix | Grille KPI §4 réutilisable par projet | Template |
| Template Executive View Framing | Grille KPI dirigeant §5 | Template |
| Checklist Dashboard MVP | Limites §6 ; garde-fous §7 | Checklist |
| Checklist UX surcharge cognitive | Risques §7 par écran pilotage | Checklist |
| Prompt génération KPI dashboard | Génération socle KPI depuis cadrage métier | Prompt |
| Prompt revue UX dashboard | Revue différenciation SAV vs dirigeant | Prompt |
| Critères QA dashboard | KPI, alertes, filtres testables | Standard / Checklist |

---

## 11. Conclusion

- **ARB-MVP-07** peut évoluer vers **« noyau MVP 8 écrans »**.
- **Tableau de bord SAV complet** inclus au MVP — orienté opérationnel, non minimaliste.
- **Vue pilotage dirigeant avancée** incluse au MVP — orientée consolidé et décision.
- **Suivi détaillé des notifications** et **portail client** restent en **évolution ultérieure**.
- **Figma ne doit pas être déclenché** avant production et validation d'un **brief UX/UI** (§14.6).
- **Aucune maquette, architecture ni backlog** n'a été produit dans ce document.
- La recommandation devra être **répercutée dans `mvp-arbitrations.md`** avant validation finale des arbitrages MVP.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
