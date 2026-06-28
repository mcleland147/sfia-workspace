# ADR-008 — Dashboard SAV et vue dirigeant séparés

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Bloc** : ADR P2 — impacts design / MVP  
**Statut** : Accepted  
**Source candidate** : ADR-CAND-008  
**ADR liées** : ADR-002, ADR-004, ADR-005, ADR-006, ADR-007  
**Rôles principaux** : Product Owner, UX/UI Designer  
**Rôles contributeurs** : Architecte, QA / Testeur, Chef de projet  
**Type** : Architecture Decision Record

---

## 1. Contexte

Le cadrage a identifié un besoin de **dashboard opérationnel SAV** et d'une **vue dirigeant** — deux écrans **inclus au noyau MVP de 8 écrans** (ARB-MVP-07, `dashboard-kpi-ux-review.md`, `ux-ui-brief.md` §5.1 / §5.8).

Le brief UX/UI a déjà distingué plusieurs écrans MVP, dont **tableau de bord SAV complet** (orientation opérationnelle, court terme) et **vue pilotage dirigeant avancée** (orientation consolidée, tendances, décision).

Les **ADR P1/P2** ont ajouté plusieurs dimensions à représenter dans les écrans de pilotage :

- **anomalies** visibles et reprise manuelle (ADR-002) ;
- **logs minimaux** et historique simplifié (ADR-004) ;
- **preuves, photos, signatures** en conservation fictive (ADR-005) ;
- **notifications échouées** en indicateur agrégé (ADR-006) ;
- **interventions non signées** en agrégat optionnel (ADR-007).

Si tout est concentré dans un **seul dashboard**, le risque est la **surcharge cognitive** (R-UX03, R-M08) — confusion rôles, doublons KPI, mélange détail opérationnel et synthèse décisionnelle.

Avant **Figma**, il faut décider si le **dashboard opérationnel** et la **vue dirigeant** sont **séparés ou fusionnés**.

---

## 2. Problème à résoudre

**Comment structurer les écrans de pilotage du MVP Interv360 pour répondre à la fois aux besoins opérationnels SAV et aux besoins de synthèse dirigeant, sans créer un dashboard unique surchargé ni multiplier les écrans hors MVP ?**

Sans clarification, Figma pourrait produire un écran unique illisible, dupliquer les mêmes KPI sur deux vues sans différenciation, ou exposer logs techniques et preuves détaillées dans la vue dirigeant.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Un seul dashboard global** | Un écran unique mêlant opérationnel et synthèse dirigeant | Un seul écran à maintenir | Surcharge cognitive ; confusion rôles ; conflit niveaux de détail | **Rejetée** |
| **B — Dashboard SAV opérationnel + vue dirigeant séparée** | Deux écrans complémentaires ; orientations distinctes | Lisibilité ; actionnabilité SAV ; synthèse dirigeant ; aligné ARB-MVP-07 | Deux écrans à concevoir ; cohérence KPI à maintenir | **Retenue** |
| **C — Plusieurs dashboards spécialisés** | Dashboards par rôle, canal ou équipe | Granularité fine | Scope élargi ; multiplication écrans ; hors noyau 8 écrans | **Reportée post-MVP** |
| **D — Aucun dashboard dirigeant au MVP** | Dashboard SAV seul ; pas de vue consolidée | Simplicité delivery | Valeur dirigeant non démontrée ; ARB-MVP-07 incomplet | **Rejetée / insuffisante** |

---

## 4. Décision

**La décision retenue est de séparer le dashboard SAV opérationnel et la vue dirigeant dans le MVP Interv360.**

Précisions :

- le **dashboard SAV** sert au **pilotage opérationnel quotidien** — horizon court terme, actions immédiates ;
- la **vue dirigeant** sert à la **synthèse décisionnelle** — horizon consolidé, tendances, alertes principales ;
- les deux vues **partagent certaines données** (demandes, interventions, anomalies) mais **pas le même niveau de détail** ;
- les **anomalies**, **notifications** et **signatures** peuvent remonter sous forme d'**indicateurs agrégés** ;
- les **preuves, photos, logs** et **détails techniques** ne doivent **pas** être exposés dans la vue dirigeant ;
- cette ADR **prépare Figma** mais **ne déclenche pas** Figma.

---

## 5. Objectifs par écran

| Écran | Objectif | Utilisateurs principaux |
|-------|----------|-------------------------|
| **Dashboard SAV opérationnel** | Visibilité quotidienne ; identifier actions immédiates ; accès rapide aux dossiers | Responsable SAV / planning, Manager opérationnel, Assistant administratif |
| **Vue dirigeant** | Lecture consolidée ; tendances ; alertes principales ; décisions rapides | Dirigeant, Manager opérationnel (vue synthétique) |
| **Écran anomalies** | Détail erreurs intégration ; reprise manuelle (ADR-002) | Manager opérationnel, Support |
| **Historique dossier** | Traces simplifiées ; événements clés (ADR-004, ADR-005) | Responsable SAV, Support |
| **Fiche intervention** | Détail intervention ; preuves ; statut signature (ADR-007) | Technicien, Responsable SAV |

---

## 6. KPI Dashboard SAV opérationnel

| KPI | Utilité opérationnelle | Source / lien ADR |
|-----|------------------------|-------------------|
| **Demandes ouvertes** | Volume activité en cours | Demande SAV — statut |
| **Demandes à qualifier** | Prioriser qualification entrante | ARB-MVP-01 ; fiche demande |
| **Interventions à planifier** | Anticiper charge planning | Planning ; fiche demande |
| **Interventions en retard** | Détecter dérives délai | Dates planifiées vs réelles |
| **Anomalies ouvertes** | Visibilité erreurs intégration | **ADR-002** — lien écran anomalies |
| **Notifications échouées** | Suivre échecs client sans écran dédié | **ADR-006** — indicateur agrégé |
| **Interventions non signées** | Identifier CR sans signature | **ADR-007** — agrégat optionnel |
| **Dossiers en attente de clôture** | Prioriser clôture administrative | Parcours SAV étape 9 |
| **Charge techniciens** | Répartir charge planning | Technicien, Intervention — vue simplifiée |
| **Taux de reprise manuelle** | Suivre résolution erreurs intégration | **ADR-002** — MANUAL_RECOVERY_* |
| **Demandes par priorité** | Prioriser traitement | Demande SAV — priorité |
| **Demandes par source** | Comparer canaux CRM / email / saisie | ARB-MVP-01 |

*Socle aligné `dashboard-kpi-ux-review.md` §4 et `ux-ui-brief.md` §5.1.*

---

## 7. KPI Vue dirigeant

| KPI | Utilité dirigeant | Niveau de détail |
|-----|-------------------|------------------|
| **Volume global demandes** | Vision macro activité | Synthétique — agrégat |
| **Délai moyen de traitement** | Mesurer réactivité SAV | Agrégé — simplifié MVP |
| **Taux de respect des délais** | Identifier dérives systémiques | Agrégé — retards vs objectifs |
| **Taux d'anomalies** | Santé intégrations | Synthétique — **ADR-002** |
| **Taux de clôture** | Efficacité globale SAV | Synthétique |
| **Satisfaction ou indicateur client** | Qualité perçue | À confirmer Figma / PO — **optionnel MVP** |
| **Tendance interventions** | Lire évolution activité | Tendance simple — pas BI avancée |
| **Alertes majeures** | Décisions rapides | Synthétique — retards, anomalies, échecs notif |
| **Performance globale SAV** | Pilotage consolidé | Synthèse multi-KPI |
| **Qualité de traitement** | Indicateur composite simplifié | Agrégé — clôture, retards, anomalies |

**Garde-fous vue dirigeant :**

- **pas de détail technique** ;
- **pas de logs** (ADR-004) ;
- **pas de preuves/photos détaillées** (ADR-005) ;
- **pas d'écran d'exploitation** ni supervision avancée.

*Socle aligné `dashboard-kpi-ux-review.md` §5 et `ux-ui-brief.md` §5.8.*

---

## 8. Règles de séparation des vues

| Sujet | Dashboard SAV | Vue dirigeant |
|-------|---------------|---------------|
| **Anomalies** | Compteur + lien écran anomalies ; liste courte actionnable | Taux agrégé ; alerte majeure ; pas liste détaillée |
| **Notifications** | Indicateur échecs ; accès dossiers concernés | Taux ou alerte synthétique ; pas détail par notification |
| **Signatures** | Agrégat interventions non signées | Indicateur qualité simplifié ; pas détail signature |
| **Preuves / photos** | Compteur ou badge ; lien fiche intervention | **Non exposé** — ADR-005 |
| **Logs** | Historique simplifié via dossier ; pas log brut | **Non exposé** — ADR-004 |
| **Retards** | Liste interventions en retard ; actionnable | Retard moyen ; alertes critiques agrégées |
| **Charge techniciens** | Vue détaillée simplifiée ; répartition | Charge globale équipe ; agrégat |
| **Demandes à qualifier** | Liste ou compteur actionnable | Volume agrégé ; pas file détaillée |
| **Indicateurs financiers éventuels** | Hors MVP ou badge minimal | Hors MVP — post-MVP |
| **Actions utilisateur** | Accès dossier, planning, anomalies | Consultation synthèse ; pas actions terrain |

---

## 9. Impacts UX/UI avant Figma

| Zone / composant | Impact design | Décision |
|------------------|---------------|----------|
| **Cartes KPI** | Dashboard SAV : cartes actionnables ; dirigeant : cartes synthétiques | Différenciation visuelle |
| **Filtres** | Filtres simples SAV — période, statut, priorité, source | Dirigeant : période semaine/mois |
| **Alertes** | SAV : alertes hiérarchisées actionnables | Dirigeant : alertes principales limitées |
| **Liste anomalies** | Dashboard SAV : extrait ou lien | Écran anomalies dédié — pas liste complète dirigeant |
| **Graphiques** | SAV : graphiques opérationnels simples | Dirigeant : tendances agrégées |
| **Drill-down** | SAV : lien vers dossier / fiche | Dirigeant : drill-down limité — pas technique |
| **Liens vers dossiers** | SAV : accès rapide actionnable | Dirigeant : accès synthèse uniquement si pertinent |
| **Badges notification** | Indicateur échecs notifications | Agrégat dirigeant — ADR-006 |
| **Indicateurs signature** | Agrégat non signées | Synthèse qualité — ADR-007 |
| **Indicateurs preuves** | Compteur preuves associées | **Hors vue dirigeant** — ADR-005 |
| **Vue mobile / desktop** | Dashboard SAV consultable desktop prioritaire | Dirigeant desktop — à confirmer Figma / PO |

**Principes Figma :**

- prévoir **deux écrans ou deux vues distinctes** ;
- le **dashboard SAV** peut être plus **actionnable** ;
- la **vue dirigeant** doit rester **synthétique** ;
- **pas de dashboard unique surchargé** ;
- **pas de drill-down technique avancé** au MVP.

---

## 10. Relation avec ADR P1/P2

| ADR | Impact dashboard / vue dirigeant |
|-----|----------------------------------|
| **ADR-002 — anomalies visibles** | Compteur anomalies SAV ; taux agrégé dirigeant ; lien écran anomalies ; reprise manuelle |
| **ADR-004 — logs minimaux** | Historique simplifié via dossier ; **pas de logs** dans dashboards |
| **ADR-005 — preuves / photos / historique** | Compteur preuves SAV ; **pas de détail** dirigeant |
| **ADR-006 — notifications échouées** | Indicateur échecs SAV ; alerte synthétique dirigeant |
| **ADR-007 — signature optionnelle** | Agrégat non signées SAV ; indicateur qualité dirigeant |
| **ADR-CAND-009 — IA légère post-MVP** | Pas de prédictif IA dashboard MVP ; BI avancée reportée |

---

## 11. Conséquences positives

- **Meilleure lisibilité UX** — deux niveaux de lecture distincts ;
- **Séparation besoin opérationnel / besoin dirigeant** — rôles clarifiés ;
- **Figma mieux cadré** — KPI, filtres, alertes par écran ;
- **Réduction surcharge cognitive** — pas d'écran unique surchargé ;
- **Meilleure actionnabilité SAV** — liens dossiers, planning, anomalies ;
- **Meilleure synthèse sponsor** — valeur dirigeant démontrable ;
- **Capitalisation SFIA** — standard dashboard différencié MVP.

---

## 12. Conséquences négatives / coûts

- **Deux écrans à concevoir** au lieu d'un — effort UX double ;
- **Besoin de cohérence** entre indicateurs partagés (taux clôture, anomalies) ;
- **Risque de redondance** — mêmes KPI affichés sans différenciation ;
- **Arbitrage à faire** sur KPI « above the fold » — ux-ui-brief §5.1 ;
- **QA supplémentaire** — cohérence KPI entre vues ;
- **Risque de dérive** vers reporting avancé ou BI — garde-fous §13.

---

## 13. Garde-fous

- [ ] ne pas créer un **dashboard unique surchargé** ;
- [ ] ne pas créer une **suite BI complète** ;
- [ ] ne pas exposer les **logs techniques** dans les dashboards ;
- [ ] ne pas exposer **photos/preuves détaillées** dans la vue dirigeant ;
- [ ] ne pas **multiplier les dashboards spécialisés** au MVP ;
- [ ] ne pas produire de **Figma** dans cette tâche ;
- [ ] ne pas produire de **backlog** ou **user stories** ;
- [ ] ne pas produire de **code** ;
- [ ] **limiter les KPI** au besoin MVP — socle §6 et §7 ;
- [ ] **distinguer** action opérationnelle et synthèse dirigeant.

---

## 14. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | ARB-MVP-07 formalisé ; 8 écrans ; 2 vues pilotage séparées |
| **UX/UI** | Dashboard SAV + vue dirigeant ; différenciation KPI et alertes |
| **QA** | Cohérence KPI ; scénarios alertes ; filtres simples |
| **Product Management** | Priorisation KPI above the fold ; arbitrage satisfaction client |
| **Exploitation** | Pas supervision avancée ; agrégations simulées MVP |
| **Architecture future** | BI avancée, personnalisation dashboards, IA prédictive — post-MVP |
| **Notion / gouvernance** | Jalon ADR P2 — sync après bloc consolidé |

---

## 15. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/methods/roles/product-owner-method.md` | Enrichissement futur — ARB-MVP-07 ; KPI prioritaires |
| `docs/methods/roles/ux-ui-designer-method.md` | Enrichissement futur — séparation dashboards ; sobriété |
| `docs/methods/roles/architect-method.md` | Agrégations ; sources données communes |
| `docs/methods/roles/project-manager-method.md` | Séquence ADR P2 avant Figma |
| `prompts/prompt-catalog.md` | PROMPT-UX-003 — pas modifié ici |
| `prompts/ux-ui/` | Dashboard Separation Matrix ; KPI above the fold |
| `prompts/architecture/` | Agrégats anomalies, notifications |
| **Futur Template Dashboard Separation Matrix** | §6 + §7 + §8 |
| **Futur Checklist KPI above the fold** | §6 priorisation SAV |
| **Futur Standard dashboard opérationnel / vue dirigeant** | Option B ARB-MVP-07 |

---

## 16. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Product Owner** | Décision structurante ; ARB-MVP-07 ; priorisation KPI |
| **UX/UI Designer** | Deux écrans distincts ; sobriété ; différenciation |
| **Architecte** | Agrégations ; cohérence données ; lien ADR P1/P2 |
| **QA / Testeur** | Cohérence KPI ; alertes ; filtres testables |
| **Chef de projet** | Traçabilité ADR P2 ; Figma post-bloc |

---

## 17. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Deux écrans pilotage ; KPI par vue |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist séparation dashboards |
| **PROMPT-UX-003** — Revue dashboard KPI UX | KPI SAV vs dirigeant ; above the fold |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Indicateurs anomalies dashboard |
| **PROMPT-GOV-001** — Sync Notion | Jalon ADR P2 post-consolidation |

*Prompts non modifiés dans cette tâche.*

---

## 18. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-008** ;
- [x] **dashboard SAV** et **vue dirigeant** sont **séparés** ;
- [x] les **KPI principaux par vue** sont documentés ;
- [x] la **surcharge cognitive** est adressée ;
- [x] les **impacts UX/UI avant Figma** sont documentés ;
- [x] les liens avec **ADR-002, ADR-004, ADR-005, ADR-006 et ADR-007** sont explicites ;
- [x] les **limites MVP / post-MVP** sont explicites ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] aucun backlog, user story, **Figma ou code** n'est produit.

---

## 19. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-008 | Template |
| Template Dashboard Separation Matrix | §6 + §7 + §8 | Template |
| Checklist KPI above the fold | §6 ; ux-ui-brief §5.1 | Checklist |
| Standard dashboard opérationnel / vue dirigeant | Option B ARB-MVP-07 | Standard |
| Checklist ADR design-impact | §9 + §20 | Checklist |
| Matrice ADR → prompts | §17 | Template |
| Matrice ADR → rôles | §16 | Template |

---

## 20. Contrôle impact design

| Élément design | Impact confirmé ? | Décision |
|----------------|-------------------|----------|
| **Dashboard SAV** | Oui | Écran opérationnel actionnable — §5.1 brief |
| **Vue dirigeant** | Oui | Écran synthétique consolidé — §5.8 brief |
| **Cartes KPI** | Oui | Différenciées par vue |
| **Graphiques** | Oui | Opérationnels SAV ; tendances dirigeant |
| **Filtres** | Oui | Simples MVP — période, statut, priorité |
| **Anomalies** | Oui | Compteur SAV ; taux dirigeant ; écran dédié |
| **Notifications** | Oui | Indicateur échecs SAV — ADR-006 |
| **Signatures** | Oui | Agrégat non signées — ADR-007 |
| **Preuves** | Partiel | Compteur SAV ; **hors dirigeant** — ADR-005 |
| **Logs** | Non | **Hors dashboards** — ADR-004 |
| **Drill-down** | Partiel | SAV vers dossier ; dirigeant limité |
| **Vue mobile** | Partiel | Technicien hors scope ; SAV desktop prioritaire |

---

## 21. Prochaines actions

- confirmer **ADR-CAND-009** — IA légère reportée post-MVP (pas d'ADR MVP) ;
- préparer une **synthèse ADR P2 design-impact** ;
- enrichir les **méthodes rôle** après consolidation P2 si nécessaire ;
- préparer l'**ouverture UX/UI/Figma** après consolidation bloc ADR P2 ;
- synchroniser **Notion** après consolidation du jalon P2 si nécessaire.

---

## 22. Conclusion

Cette ADR formalise la **séparation entre dashboard SAV opérationnel et vue dirigeant** au MVP.

Elle clarifie les **KPI**, **niveaux de détail** et **garde-fous UX** avant Figma, afin d'éviter un dashboard unique surchargé tout en conservant une **vue de synthèse utile** pour le pilotage.

**Figma non déclenché** par cette ADR.

---

*ADR-008 — projet Interv360, phase 02-architecture, bloc ADR P2 — gouvernance SFIA.*
