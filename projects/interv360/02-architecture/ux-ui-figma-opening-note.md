# Interv360 — Note d'ouverture UX/UI / Figma

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Phase cible** : UX/UI / Figma  
**Statut** : Draft  
**Type** : Note d'ouverture de phase  
**Source** : UX/UI brief validé + Architecture P1 + ADR P2 design-impact  
**Objet** : cadrer l'ouverture Figma sans produire Figma

---

## 1. Objectif du document

Cette note **prépare l'ouverture UX/UI / Figma** du projet Interv360, après consolidation du jalon **Architecture P1** (ADR-001 à ADR-004) et du jalon **ADR P2 design-impact** (ADR-005 à ADR-008 + confirmation ADR-CAND-009).

Ce document :

- **ne produit pas** de maquette, wireframe ou fichier Figma ;
- **ne produit pas** de backlog, user stories ou code ;
- **sert à cadrer** ce que Figma **a le droit de représenter** — et ce qu'il **ne doit pas** représenter.

Sources de référence : `ux-ui-brief.md` (validé), `architecture-p1-summary.md`, `architecture-p2-design-impact-summary.md`, ADR P1/P2.

---

## 2. Conditions d'ouverture Figma

- [x] **UX/UI brief existant validé** — `ux-ui-brief.md`, `ux-ui-brief-validation.md`
- [x] **Architecture P1 consolidée** — ADR-001 à ADR-004 Accepted
- [x] **ADR P2 design-impact consolidé** — ADR-005 à ADR-008 + ADR-CAND-009
- [x] **Méthodes rôle enrichies après P2** — `role-methods-enrichment-after-adr-p2.md`
- [x] **Garde-fous UX/UI documentés** — synthèse P2 §5–§7
- [x] **Exclusions MVP explicites** — portail, IA, BI, conservation réelle, e-signature complète
- [x] **Notion P2 préparé en gouvernance** — `notion-sync-architecture-p2-payload.json` (non publié)
- [x] **Backlog, user stories et code non déclenchés**

---

## 3. Synthèse de passage vers UX/UI / Figma

Le projet peut **désormais préparer Figma** car les décisions structurantes qui impactent les écrans sont **consolidées**.

Les maquettes devront respecter les **arbitrages MVP** (ARB-MVP-01 à 07), les **ADR P1/P2**, les **exclusions post-MVP** et les **garde-fous UX/SSI**.

Figma doit représenter un **démonstrateur crédible, lisible et sobre**, sans promettre de **portail client**, **IA**, **BI avancée**, **conservation réelle** ou **signature juridique complète**.

---

## 4. Écrans MVP autorisés à préparer dans Figma

| Écran | Objectif | Garde-fous principaux |
|-------|----------|----------------------|
| **Tableau de bord SAV complet** (§5.1) | Visibilité opérationnelle quotidienne ; actions immédiates | KPI socle ; séparé de la vue dirigeant ; pas logs techniques ; indicateur échecs notif |
| **Liste des demandes** (§5.2) | Parcourir, filtrer, ouvrir ; création manuelle secours | Pas portail client ; statuts clairs ; source CRM/email/saisie |
| **Fiche demande SAV** (§5.3) | Détail, qualification, suivi | Historique simplifié ; badge notification ; pièces référencées fictives |
| **Planning** (§5.4) | Visualiser et ajuster créneaux, techniciens | Calendrier simulé ; conflits visibles ; notification indirecte |
| **Fiche intervention technicien** (§5.5) | Préparer et exécuter intervention terrain | Mobile sobre ; preuves/compteurs ; statut signature |
| **Compte rendu intervention** (§5.6) | Documenter : photos, commentaires, signature optionnelle | Signature **non bloquante** ; zone capture simulée ; clôture possible sans signature |
| **Suivi des erreurs d'intégration** (§5.7) | Anomalies visibles ; reprise manuelle simulée | Message métier ; pas log brut ; pas supervision complète |
| **Vue pilotage dirigeant avancée** (§5.8) | Lecture consolidée, tendances, alertes | Synthétique ; **pas** preuves détaillées ; **pas** logs ; pas drill-down technique |

*Création et qualification : couvertes par **Liste des demandes** (création secours) et **Fiche demande SAV** (qualification) — ux-ui-brief §5.2–5.3.*

---

## 5. Éléments UX/UI à représenter

| Élément | Représentation autorisée | Source |
|---------|--------------------------|--------|
| **Preuves / photos** | Vignettes, compteurs « N photos », « preuve associée » | ADR-005 |
| **Pièces jointes** | Références ; indicateur intake email | ADR-003, ADR-005 |
| **Signature** | Zone optionnelle ; statuts signé / non signé / refusé | ADR-007 |
| **Motif absence signature** | Champ optionnel clôture | ADR-007 |
| **Badges notification** | Dernier statut ; échec si pertinent | ADR-006 |
| **Historique simplifié** | Événements clés dossier | ADR-004, ADR-005 |
| **Anomalies** | Liste ou extrait ; gravité ; statut reprise | ADR-002 |
| **Reprise manuelle simulée** | Action utilisateur depuis anomalies | ADR-002 |
| **Dashboard SAV** | KPI opérationnels ; liens actionnables | ADR-008 |
| **Vue dirigeant** | KPI synthétiques ; tendances simples | ADR-008 |
| **KPI simples** | Socle cadrage ; filtres période/statut/priorité | dashboard-kpi-ux-review |
| **Filtres simples** | Période, statut, priorité, source | ux-ui-brief §5.1 |
| **Alertes déterministes** | Retards, anomalies, échecs notification | ADR-002, ADR-006, ADR-008 |

---

## 6. Éléments interdits ou hors MVP dans Figma

| Élément | Statut | Raison |
|---------|--------|--------|
| **Portail client** | Hors MVP | ADR-006 — ARB-MVP-02 |
| **Centre de notifications avancé** | Hors MVP | ADR-006 |
| **Préférences notification avancées** | Hors MVP | ADR-006 |
| **Signature électronique juridiquement complète** | Hors MVP | ADR-007 |
| **Politique réelle de conservation** | Hors MVP | ADR-005 |
| **Archivage / purge** | Hors MVP | ADR-005 |
| **Logs techniques complets** | Hors MVP | ADR-004 |
| **SIEM / supervision** | Hors MVP | ADR P1 |
| **Dashboard BI avancé** | Hors MVP | ADR-008 |
| **Composant IA** | Hors MVP | ADR-CAND-009 |
| **Badge IA** | Hors MVP | ADR-CAND-009 |
| **Scoring IA** | Hors MVP | ADR-CAND-009 |
| **Chatbot** | Hors MVP | ADR-CAND-009 |
| **Prédictions** | Hors MVP | ADR-CAND-009 |
| **Résumé automatique** | Hors MVP | ADR-CAND-009 |
| **Backlog ou user stories** | Hors périmètre | Phase architecture / design |

---

## 7. Garde-fous de wording

| Sujet | Wording recommandé | Wording à éviter |
|-------|-------------------|----------------|
| **Preuve** | « preuve associée », « pièce jointe référencée » | « preuve légale », « preuve certifiée » |
| **Photo** | « photo associée », « N photos » | « archive photo conforme », « stockage sécurisé certifié » |
| **Signature** | « signature enregistrée », « signature non renseignée » | « signature certifiée », « signature électronique qualifiée » |
| **Trace** | « trace disponible », « événement enregistré » | « journal d'audit complet », « log SIEM » |
| **Notification** | « notification envoyée », « échec d'envoi » | « notification certifiée », « accusé légal » |
| **Anomalie** | « anomalie à traiter », « reprise disponible » | « erreur système [code] », dump technique |
| **Dashboard** | « indicateur », « alerte », « tendance » | « prédiction », « recommandation IA » |
| **IA** | *(aucun libellé IA au MVP)* | « IA recommande », « scoring intelligent », « analyse automatique » |
| **Conservation** | « preuve associée (démo) » si nécessaire | « archivé légalement », « conservation conforme RGPD » |

---

## 8. Garde-fous par écran

| Écran | À faire | À éviter |
|-------|---------|----------|
| **Tableau de bord SAV** | KPI actionnables ; liens dossier/planning/anomalies ; alertes hiérarchisées | Doublon vue dirigeant ; logs ; BI ; IA |
| **Vue dirigeant** | KPI synthétiques ; tendances ; alertes majeures limitées | Preuves détaillées ; logs ; liste anomalies complète ; drill-down technique |
| **Suivi erreurs intégration** | Message métier ; statuts reprise ; action reprise simulée | Log brut ; codes techniques exposés ; supervision SIEM |
| **Compte rendu intervention** | Photos ; commentaires ; signature optionnelle ; clôturer sans signature | Signature obligatoire ; e-signature ; galerie illimitée |
| **Fiche intervention technicien** | Contexte client ; statuts ; lien CR ; badges | Surcharge champs ; preuve biométrique complète |
| **Fiche demande SAV** | Qualification ; historique simplifié ; badge notification | Portail client ; centre notifications ; timeline exhaustive |
| **Planning** | Créneaux ; techniciens ; conflits visibles | Optimisation IA affectation ; prédiction retard |
| **Liste des demandes** | Filtres ; tri ; création secours ; sources canaux | Scoring priorité IA ; classification automatique |

---

## 9. Impacts des ADR sur Figma

| ADR / décision | Impact Figma |
|----------------|--------------|
| **ADR-001** — Contrats API simulés | Intégrations représentées comme simulées ; statuts cohérents contrats |
| **ADR-002** — Erreurs visibles + reprise manuelle | Écran anomalies §5.7 ; indicateurs dashboard ; pas retry auto en UX |
| **ADR-003** — Email sécurisé secondaire | Indicateur intake ; rejet visible ; pas aperçu PJ sensible |
| **ADR-004** — Journalisation minimale | Historique simplifié ; pas log technique en UI |
| **ADR-005** — Conservation fictive | Vignettes, compteurs, métadonnées ; libellés prudents |
| **ADR-006** — Notifications sans portail | Badges ; historique ; indicateur échecs ; **pas portail** |
| **ADR-007** — Signature optionnelle | Zone signature ; états signé/non signé ; motif ; clôture non bloquante |
| **ADR-008** — Dashboards séparés | Deux écrans distincts ; niveaux de détail différents |
| **ADR-CAND-009** — IA post-MVP | **Aucun** composant, badge ou placeholder IA |

---

## 10. Critères de qualité Figma

- [ ] les écrans respectent le **périmètre MVP** (8 écrans §4) ;
- [ ] les **deux dashboards sont séparés** (SAV vs dirigeant) ;
- [ ] **aucun portail client** n'est représenté ;
- [ ] **aucune IA** n'est représentée ;
- [ ] la **signature reste optionnelle** ;
- [ ] l'**absence de signature ne bloque pas** le parcours ;
- [ ] les **preuves restent fictives / métadonnées** ;
- [ ] les **logs techniques ne sont pas exposés** ;
- [ ] les **anomalies sont compréhensibles** côté métier ;
- [ ] les **dashboards sont lisibles** et non surchargés ;
- [ ] les **libellés ne promettent pas** de conformité réelle ;
- [ ] **aucune user story ou backlog** n'est produit dans le livrable Figma.

---

## 11. Rôles à mobiliser pour validation Figma

| Rôle | Validation attendue |
|------|---------------------|
| **UX/UI Designer** | Périmètre 8 écrans ; sobriété ; garde-fous wording ; séparation dashboards |
| **Product Owner** | Alignement MVP ; exclusions portail/IA/BI ; valeur démo sans dérive |
| **RSSI** | Pas exposition sensible ; libellés prudents ; pas promesse conformité |
| **Architecte** | Cohérence statuts/intégrations simulées ; pas architecture implicite portail/IA |
| **QA / Testeur** | Scénarios testables visibles (signé/non signé, notif échec, anomalie) — *méthode candidate future* |
| **Chef de projet** | Validation jalon ; pas delivery/backlog déclenché prématurément |

*QA / Testeur : méthode `qa-tester-method.md` absente — point de vue utile dès validation écrans ; extraction future recommandée.*

---

## 12. Valeur projet attendue

| Valeur projet | Description |
|---------------|-------------|
| **Maquettes plus stables** | Décisions avant design ; moins de refonte |
| **Moins de retours arrière** | Garde-fous P2 explicites |
| **MVP plus lisible** | Dashboards séparés ; sobriété cognitive |
| **Démonstrateur plus crédible** | Intégrations simulées + preuves fictives cohérentes |
| **Meilleure cohérence UX / architecture / SSI** | ADR P1/P2 traduits en écrans |
| **Meilleure préparation QA** | Parcours et statuts visibles et testables |

---

## 13. Valeur SFIA attendue

| Valeur SFIA | Capitalisation possible |
|-------------|-------------------------|
| **Standard ouverture Figma post-ADR** | Cette note + séquence P1 → P2 → Figma |
| **Checklist Figma readiness** | §2 + §10 |
| **Template note d'ouverture UX/UI** | Structure présente document |
| **Checklist anti-surpromesse** | §6 + ADR-CAND-009 |
| **Checklist wording prudent** | §7 |
| **Méthode UX/UI enrichie** | ux-ui-designer-method §14 P2 |
| **Prompts UX à enrichir plus tard** | PROMPT-UX-001/002/003 post-REX |

---

## 14. Prompts à enrichir ou créer plus tard

| Prompt | Action future |
|--------|---------------|
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Intégrer garde-fous P2 et checklist ouverture |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist validation post-maquette |
| **PROMPT-UX-003** — Revue dashboard KPI UX | Revue séparation SAV/dirigeant en Figma |
| **PROMPT-GOV-001** — Sync Notion | Jalon ouverture Figma en gouvernance |

*Les prompts ne sont **pas modifiés** dans cette tâche ; enrichissements après première utilisation Figma ou REX.*

---

## 15. Décision d'ouverture

**L'ouverture UX/UI / Figma est autorisée à être préparée.**

Conditions :

- produire **Figma dans une tâche dédiée séparée** ;
- respecter **tous les garde-fous P2** (§5–§9) ;
- **ne pas produire** backlog, user stories ou code ;
- **ne pas créer** d'écran hors MVP (§4) ;
- **prévoir validation** PO / UX / RSSI / Architecte avant passage delivery.

---

## 16. Prochaines actions recommandées

1. **Préparer le prompt Figma** ou les **instructions de design** (tâche dédiée).
2. **Définir la structure du fichier Figma** (pages, écrans, composants de base).
3. **Préparer les 8 écrans MVP** (§4).
4. **Préparer une checklist de validation Figma** (§10).
5. **Ne pas lancer** backlog, user stories ou code avant validation Figma.

---

## 17. Conclusion

Le projet **Interv360 peut désormais préparer l'ouverture UX/UI / Figma**.

Les décisions **architecture** et **design-impact** sont consolidées ; les **garde-fous** sont explicites ; les **exclusions MVP** sont documentées.

Figma devra représenter un **MVP crédible, sobre et cohérent**, sans surpromesse **fonctionnelle, juridique, SSI ou IA**.

**Aucun fichier Figma n'est produit par cette note.**

---

*Note d'ouverture UX/UI / Figma — projet Interv360 — gouvernance SFIA.*
