# Interv360 — UX/UI Brief

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Validated  
**Source** : `business-framing.md` + `mvp-arbitration-validation.md` + `dashboard-kpi-ux-review.md`  
**Objet** : brief UX/UI préalable à toute maquette ou travail Figma

---

## 1. Objectif du brief UX/UI

Ce document **prépare la future conception UX/UI** à partir du cadrage consolidé et des **7 arbitrages MVP validés** (`mvp-arbitration-validation.md`).

Il formalise les **écrans MVP**, **parcours critiques**, **personas**, **KPI**, **principes UX** et **critères d'entrée en maquette** — sans produire de design graphique.

Ce document **n'est pas** :

- une maquette ou wireframe ;
- un déclencheur Figma ;
- une architecture technique ;
- un backlog ou des user stories.

Il **prépare** les écrans, parcours, priorités UX, critères d'utilisabilité et points de vigilance **avant toute maquette**.

---

## 2. Règle de déclenchement Figma

Règle validée dans `business-framing.md` §14.6 :

**Figma intervient uniquement après** :

- validation du cadrage UX/UI ;
- validation des **écrans prioritaires** (noyau 8 écrans MVP) ;
- validation des **parcours utilisateurs critiques** ;
- production d'un **brief UX/UI exploitable**.

**Le présent document constitue le brief UX/UI préalable.** La **validation fictive** du brief est formalisée dans `ux-ui-brief-validation.md`. Figma ne doit être engagé qu'**après** cette validation et le traitement progressif des points ouverts §9.

---

## 3. Personas prioritaires

| Persona | Objectif principal | Besoin UX prioritaire | Écrans clés |
|---------|-------------------|----------------------|-------------|
| **Dirigeant** | Vision consolidée et décisions rapides | KPI synthétiques, alertes, tendances | Vue pilotage dirigeant avancée ; tableau de bord SAV (vue synthétique) |
| **Manager opérationnel** | Superviser charge, délais et anomalies | Anomalies visibles, pilotage opérationnel | Tableau de bord SAV ; suivi erreurs d'intégration |
| **Responsable SAV / planning** | Qualifier, planifier, ajuster | Planning lisible, qualification fluide, statuts clairs | Liste demandes ; fiche demande ; planning ; tableau de bord SAV |
| **Assistant administratif** | Créer demandes, préparer clôture | Peu de doubles saisies, accès rapide aux dossiers | Liste demandes ; fiche demande ; tableau de bord SAV |
| **Technicien terrain** | Exécuter et documenter l'intervention | Contexte complet, CR simple, mobile | Fiche intervention technicien ; compte rendu intervention |
| **Client final** | Suivre sa demande | Notifications claires (pas de portail MVP) | — (notifications simulées ; indicateur échecs sur dashboard interne) |

Le **client final** n'a **pas de portail MVP** (ARB-MVP-02) mais reste concerné par la **clarté des notifications** et la cohérence des statuts remontés.

---

## 4. Parcours critiques à couvrir

| Parcours | Persona principal | Objectif | Écrans mobilisés | Critère UX clé |
|----------|-------------------|----------|----------------|----------------|
| Création demande depuis CRM simulé | Assistant administratif | Enregistrer sans ressaisie | Liste demandes ; fiche demande | Statut et origine CRM visibles immédiatement |
| Création demande depuis email sécurisé | Assistant administratif | Traiter email authentifié / rejet | Fiche demande ; liste demandes | Rejet ou qualification explicites ; pas de création silencieuse |
| Qualification demande | Responsable SAV / planning | Prioriser et valider périmètre | Fiche demande SAV | Actions qualification accessibles en ≤ 3 clics |
| Planification intervention | Responsable SAV / planning | Affecter technicien et créneau | Fiche demande ; planning | Conflits créneau visibles en un coup d'œil |
| Notification client | Plateforme (interne) | Informer le client | Tableau de bord SAV (indicateur échecs) | Échec notification visible sans écran dédié |
| Intervention terrain | Technicien terrain | Exécuter avec contexte complet | Fiche intervention technicien | Contexte client en ≤ 3 actions |
| Compte rendu avec signature optionnelle | Technicien terrain | Documenter sans blocage clôture | Compte rendu intervention | Saisie minimale mobile ; signature optionnelle structurée |
| Suivi erreur d'intégration | Manager opérationnel | Traiter échec sync | Suivi erreurs ; tableau de bord SAV | Anomalie visible sans recherche ; reprise manuelle guidée |
| Pilotage activité SAV | Responsable SAV / Manager | Suivi opérationnel quotidien | Tableau de bord SAV complet | KPI opérationnels lisibles ; alertes hiérarchisées |
| Pilotage dirigeant | Dirigeant | Décision consolidée | Vue pilotage dirigeant avancée | Lecture synthétique ; différenciation vs dashboard SAV |

---

## 5. Noyau MVP — 8 écrans à préparer

### 5.1 Tableau de bord SAV complet

**Objectif de l'écran**  
Donner une **visibilité opérationnelle quotidienne** sur l'activité SAV : demandes, interventions, anomalies, charge.

**Utilisateurs principaux**  
Responsable SAV / planning, Manager opérationnel, Assistant administratif (consultation).

**Données principales affichées**  
KPI minimum (orientation opérationnelle, horizon court terme) :

- demandes ouvertes ;
- demandes à qualifier ;
- interventions planifiées ;
- interventions en cours ;
- interventions clôturées ;
- interventions en retard ;
- anomalies d'intégration ouvertes ;
- notifications en échec ;
- taux de clôture ;
- charge technicien ;
- demandes par priorité ;
- demandes par source (CRM, email, saisie manuelle).

**Actions principales**  
Accéder à une demande ; accéder au planning ; accéder aux anomalies ; filtrer par période / statut / priorité.

**Points UX à surveiller**  
Surcharge cognitive ; doublon avec vue dirigeant ; trop d'indicateurs ; confusion retards métier vs erreurs intégration.

**Critères d'utilisabilité**  
Statuts compréhensibles ; alertes hiérarchisées ; sobriété visuelle ; accès rapide aux dossiers actionnables.

**Questions restantes avant maquette**  
Priorité des KPI « above the fold » ; niveau de détail des alertes ; filtres simples vs avancés.

---

### 5.2 Liste des demandes

**Objectif de l'écran**  
Parcourir, filtrer et ouvrir les demandes SAV.

**Utilisateurs principaux**  
Responsable SAV / planning, Assistant administratif.

**Données principales affichées**  
Statut, client, priorité, date, source (CRM / email / saisie), technicien ou statut qualification.

**Actions principales**  
Filtrer ; trier ; ouvrir fiche demande ; créer demande manuelle (secours).

**Points UX à surveiller**  
Doubles saisies perçues ; statuts ambigus ; liste trop dense.

**Critères d'utilisabilité**  
Compréhension rapide du statut ; filtres simples ; recherche efficace.

**Questions restantes avant maquette**  
Colonnes par défaut ; tri initial ; indicateur doublon email/CRM.

---

### 5.3 Fiche demande SAV

**Objectif de l'écran**  
Détail, qualification et suivi d'une demande.

**Utilisateurs principaux**  
Responsable SAV / planning, Assistant administratif.

**Données principales affichées**  
Historique client, description, statut, priorité, source, pièces, intervention liée, journal minimal.

**Actions principales**  
Qualifier ; prioriser ; planifier ; rejeter / mettre en attente ; accéder planning.

**Points UX à surveiller**  
Niveau de détail excessif ; actions dispersées ; qualification floue.

**Critères d'utilisabilité**  
Parcours qualification en ≤ 3 actions ; statut sans ambiguïté ; réutilisation données CRM/email.

**Questions restantes avant maquette**  
Niveau de détail fiche ; checklist qualification visible ou progressive ; wording statuts.

---

### 5.4 Planning

**Objectif de l'écran**  
Visualiser et ajuster créneaux, techniciens et interventions.

**Utilisateurs principaux**  
Responsable SAV / planning.

**Données principales affichées**  
Créneaux, techniciens, interventions, conflits, statuts calendrier simulé.

**Actions principales**  
Affecter technicien ; modifier créneau ; détecter conflit ; notifier client (indirect).

**Points UX à surveiller**  
Conflits peu visibles ; vue illisible ; modification tardive complexe.

**Critères d'utilisabilité**  
Lisibilité planning en un coup d'œil ; conflits explicites ; modification rapide.

**Questions restantes avant maquette**  
Vue jour vs semaine par défaut ; représentation conflits ; mobile ou desktop only.

---

### 5.5 Fiche intervention technicien

**Objectif de l'écran**  
Préparer et exécuter l'intervention avec contexte client complet.

**Utilisateurs principaux**  
Technicien terrain.

**Données principales affichées**  
Client, site, adresse, consignes, historique, statut intervention, pièces utiles.

**Actions principales**  
Démarrer intervention ; consulter contexte ; accéder compte rendu ; mettre à jour statut.

**Points UX à surveiller**  
Contexte incomplet ; trop d'actions ; usage mobile difficile.

**Critères d'utilisabilité**  
Contexte en ≤ 3 actions ; lisibilité mobile ; sobriété champs.

**Questions restantes avant maquette**  
Comportement mobile / hors ligne (cadrage vs MVP) ; hiérarchie informations terrain.

---

### 5.6 Compte rendu intervention

**Objectif de l'écran**  
Documenter l'intervention : photos, commentaires, signature optionnelle.

**Utilisateurs principaux**  
Technicien terrain.

**Données principales affichées**  
Intervention, checklist minimale, photos, commentaires, signature client (optionnelle), statut CR.

**Actions principales**  
Ajouter photo ; commenter ; capturer signature (optionnel) ; soumettre CR ; clôturer parcours terrain.

**Points UX à surveiller**  
Saisie lourde ; signature perçue comme bloquante ; trop de champs.

**Critères d'utilisabilité**  
Simplicité saisie mobile ; champs essentiels priorisés ; signature optionnelle clairement indiquée.

**Questions restantes avant maquette**  
Format exact CR (web vs export) ; nombre max photos ; champs obligatoires minimum.

---

### 5.7 Suivi des erreurs d'intégration

**Objectif de l'écran**  
Rendre visibles les échecs de synchronisation et permettre une reprise manuelle simulée.

**Utilisateurs principaux**  
Manager opérationnel, Responsable SAV (consultation), Architecte (fictif).

**Données principales affichées**  
Type erreur, source (CRM, calendrier, notification, facturation, email), horodatage, gravité, statut reprise, détail minimal.

**Actions principales**  
Consulter détail ; lancer reprise manuelle simulée ; marquer traité ; lien vers dossier concerné.

**Points UX à surveiller**  
Erreurs noyées ; logs trop techniques ; confusion avec retards métier.

**Critères d'utilisabilité**  
Visibilité immédiate ; action corrective guidée ; langage métier compréhensible.

**Questions restantes avant maquette**  
Niveau détail logs visible ; distinction bloquant / non bloquant ; lien dashboard ↔ écran anomalies.

---

### 5.8 Vue pilotage dirigeant avancée

**Objectif de l'écran**  
Fournir une **lecture consolidée, synthétique et orientée décision** (horizon plus large que le dashboard SAV).

**Utilisateurs principaux**  
Dirigeant, Manager opérationnel (vue consolidée).

**Données principales affichées**  
KPI minimum (orientation dirigeant) :

- volume global demandes ;
- taux de clôture ;
- délai moyen de traitement ;
- retard moyen ;
- taux d'anomalies ;
- répartition par source ;
- charge globale équipe ;
- interventions non clôturées critiques ;
- tendance activité ;
- alertes principales.

**Actions principales**  
Consulter tendances ; identifier alertes ; accéder synthèse anomalies ; pas d'export décisionnel avancé au MVP.

**Points UX à surveiller**  
Doublon avec tableau de bord SAV ; surcharge KPI ; tendances trop complexes.

**Critères d'utilisabilité**  
Différenciation claire dashboard SAV vs vue dirigeant ; alertes principales limitées ; sobriété.

**Questions restantes avant maquette**  
Granularité tendances ; seuils alertes ; période par défaut (semaine / mois).

---

## 6. Écrans hors MVP / évolution ultérieure

| Écran | Raison du report | Préparation minimale à conserver |
|-------|------------------|----------------------------------|
| **Suivi détaillé des notifications** | ARB-MVP-02 : notifications MVP sans écran dédié ; ARB-MVP-07 | Indicateur « notifications en échec » sur dashboard SAV ; modèle Notification en arrière-plan |
| **Portail client** | ARB-MVP-02 : portail en évolution ultérieure | Persona client final ; parcours notification ; exigences sécurité client documentées |

---

## 7. Principes UX transverses

| Principe UX | Application dans Interv360 | Risque évité |
|-------------|---------------------------|--------------|
| Éviter la surcharge cognitive | Socle KPI limité §5.1 / §5.8 ; sobriété §14.4 | Dashboard illisible (R-M08, R-UX03) |
| Réduire les doubles saisies | Réutilisation CRM / email → demande | Perte temps ; incohérences |
| Rendre les statuts compréhensibles | Wording unique ; mapping statuts RG-I05 | Ambiguïté parcours |
| Hiérarchiser les alertes | Alertes principales limitées ; retards vs anomalies distincts | Bruit ; mauvaises priorités |
| Différencier dashboard SAV et vue dirigeant | Opérationnel court terme vs consolidé décision | Doublon écrans |
| Rendre les erreurs d'intégration visibles | Écran anomalies + indicateurs dashboard | R-UX06 ; CF9 non démontré |
| Garder un parcours technicien simple | Fiche intervention + CR minimal mobile | R-UX01, R-UX05 |
| Maintenir sobriété visuelle et fonctionnelle | Pas de BI avancée ; pas de personnalisation dashboard MVP | Dérive scope ; surcharge |

---

## 8. Critères d'entrée en Figma

Checklist — **toutes les conditions doivent être remplies avant Figma** :

- [ ] brief UX/UI relu ;
- [ ] 8 écrans MVP confirmés ;
- [ ] objectifs par écran validés ;
- [ ] personas prioritaires confirmés ;
- [ ] parcours critiques confirmés ;
- [ ] KPI dashboard validés (§5.1, §5.8) ;
- [ ] limites MVP rappelées (pas BI, pas portail, pas notifications détaillées) ;
- [ ] écrans hors MVP confirmés ;
- [ ] points SSI / email / erreurs pris en compte ;
- [ ] absence de demande de backlog ou architecture ;
- [ ] validation fictive PO / Concepteur fonctionnel / UX effectuée.

*Note : la checklist est **validée au niveau cadrage** dans `ux-ui-brief-validation.md` §3. Les points ouverts §9 restent à traiter avant ou pendant la conception Figma.*

---

## 9. Points ouverts avant maquette

| Sujet | Pourquoi c'est ouvert | Décision attendue | Rôle valideur |
|-------|----------------------|-------------------|---------------|
| Niveau de détail fiche demande | Qualification variable (RG-C07) | Checklist minimale vs détaillée | Responsable SAV (fictif) |
| Format exact du compte rendu | A-F06 non validé au niveau livrable | Web seul vs export PDF | Product Owner |
| Vue jour/semaine du planning | Non tranché en UX | Vue par défaut planning | Responsable SAV / planning |
| Niveau de détail alertes dashboard | Équilibre lisibilité / action | Nombre max alertes visibles | Product Owner / Manager |
| Wording des statuts | Mapping multi-systèmes RG-I05 | Libellés utilisateur unifiés | Business Analyst |
| Priorité KPI above the fold | 12 KPI dashboard vs espace écran | Top 5–7 KPI prioritaires | Product Owner / Dirigeant (fictif) |
| Comportement mobile technicien | CR et fiche intervention terrain | Priorité mobile vs desktop MVP | Technicien (fictif) |
| Représentation erreurs intégration | Niveau 3 ARB-MVP-05 | Détail log vs message métier | Manager opérationnel / QA |

---

## 10. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template UX/UI Brief | Structure présent document | Template |
| Template Screen Brief | Format §5.x par écran | Template |
| Checklist entrée Figma | §8 réutilisable | Checklist |
| Prompt génération brief UX/UI | Génération brief depuis cadrage | Prompt |
| Prompt revue UX avant Figma | Revue checklist §8 | Prompt |
| Critères d'utilisabilité SFIA | §7 + critères par écran | Standard |
| Template KPI-to-Screen Mapping | Lien KPI dashboard-kpi-ux-review → écrans | Template |

---

## 11. Conclusion

Le **brief UX/UI** prépare la future étape de **conception UX/UI / Figma** **sans la déclencher immédiatement**.

Il formalise :

- les **8 écrans MVP** et leurs objectifs ;
- les **parcours critiques** et personas ;
- les **KPI** tableau de bord SAV et vue dirigeant ;
- les **principes UX transverses** et **critères d'entrée Figma** ;
- les **points ouverts** à trancher avant maquette.

**Prochaine étape :** préparation maquettes / Figma — sous réserve des points ouverts §9. Le brief est **validé au niveau cadrage** (`ux-ui-brief-validation.md`) et peut servir d'**entrée à la préparation Figma**. Aucune architecture, backlog, user story, ADR finalisée, maquette ou code n'est produit par ce document.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*
