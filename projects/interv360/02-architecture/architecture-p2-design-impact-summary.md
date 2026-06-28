# Interv360 — Synthèse ADR P2 design-impact

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Jalon** : ADR P2 design-impact  
**Statut** : Done  
**Type** : Synthèse de jalon  
**Source** : ADR-005 à ADR-008 + confirmation ADR-CAND-009  
**Objet** : consolidation des décisions impactant UX/UI / Figma avant ouverture design

---

## 1. Objectif du document

Cette synthèse **consolide les décisions du bloc ADR P2 « impacts design / MVP »** prises avant ouverture **UX/UI / Figma**.

Ce document :

- **ne crée pas** de nouvelle décision ;
- **ne remplace pas** les ADR formelles (ADR-005 à ADR-008) ni la confirmation ADR-CAND-009 ;
- **ne produit pas** de Figma, maquettes ou wireframes ;
- **ne produit pas** de backlog, user stories ou code ;

… et sert à **préparer l'ouverture UX/UI / Figma** avec un **périmètre clair** et des **garde-fous explicites**.

Le bloc P2 s'appuie sur les fondations **ADR P1** (contrats simulés, erreurs visibles, email secondaire, journalisation minimale) — voir `architecture-p1-summary.md`.

---

## 2. Synthèse exécutive

Le **bloc ADR P2 design-impact est consolidé** : cinq décisions ou confirmations couvrent les sujets susceptibles de modifier les écrans, parcours, statuts, dashboards et libellés avant Figma.

Les décisions P2 portent sur la **conservation fictive limitée** (photos, signatures, logs), les **notifications client simples et simulées sans portail**, la **signature client optionnelle structurée**, la **séparation dashboard SAV opérationnel / vue dirigeant**, et le **report post-MVP de l'IA légère**.

La **conservation fictive** retient des preuves visibles sous forme de références, métadonnées ou indicateurs — sans politique réelle d'archivage, purge ou stockage industriel.

Les **notifications** informent le client via canaux simulés ; la visibilité interne se limite à statuts, badges et historique simplifié — **pas de portail client** ni centre de notifications avancé.

La **signature** reste **optionnelle et non bloquante** ; les états signé / non signé / motif d'absence sont cadrés sans valeur juridique complète.

Les **dashboards** sont **séparés** : pilotage opérationnel SAV vs synthèse dirigeant ; KPI déterministes, pas de logs techniques ni preuves détaillées côté dirigeant.

L'**IA légère est reportée post-MVP** — aucun composant, badge, scoring, prédiction ou chatbot au MVP.

**Figma peut être préparé** après cette synthèse ; il **n'est pas déclenché** automatiquement par ce document.

Les **méthodes rôle** pourront être **enrichies après consolidation P2** si jugé nécessaire.

---

## 3. Décisions P2 consolidées

| Décision | Statut | Résumé | Impact design principal |
|----------|--------|--------|-------------------------|
| **ADR-005** — Conservation fictive photos, signatures et logs | Accepted | Conservation fictive visible ; métadonnées et indicateurs ; pas stockage réel ni purge | Zones preuves, vignettes, historique simplifié ; libellés prudents |
| **ADR-006** — Notifications client sans portail client | Accepted | Notifications simulées ; statut interne ; échecs en anomalies/dashboard | Badges notification ; historique simplifié ; **pas de portail client** |
| **ADR-007** — Signature client optionnelle structurée | Accepted | Signature optionnelle ; clôture non bloquante ; pas e-signature juridique | Zone signature clôture/CR ; statuts signé/non signé ; motif absence |
| **ADR-008** — Dashboard SAV et vue dirigeant séparés | Accepted | Deux écrans complémentaires ; KPI par profil ; pas dashboard unique surchargé | Dashboard SAV actionnable ; vue dirigeant synthétique |
| **ADR-CAND-009** — IA légère reportée post-MVP | Confirmed — Post-MVP | Pas d'IA au MVP ; opportunité future documentée | **Aucun composant IA** dans Figma MVP |

---

## 4. Vue consolidée des impacts Figma

| Zone / écran | Impact P2 | Décision à respecter dans Figma |
|--------------|-----------|----------------------------------|
| **Fiche demande SAV** | Historique simplifié ; dernière notification ; pièces référencées | Pas contenu sensible complet ; trace « preuve associée » |
| **Fiche intervention** | Photos/preuves ; statut signature ; badges notification | Indicateurs « N photos » ; badge signé/non signé |
| **Écran clôture intervention** | Zone signature optionnelle ; photos CR | Clôture toujours possible sans signature |
| **Compte rendu intervention** | Statut signature ; champs essentiels mobile | « Signature enregistrée » ou « non renseignée » — pas juridique |
| **Historique dossier** | Événements clés ; notifications ; signature ; traces | Simplifié — pas timeline exhaustive ni log brut |
| **Espace preuves / pièces jointes** | Références fictives ; vignettes ou compteurs | Libellés prudents ; pas galerie illimitée |
| **Écran anomalies** | Erreurs intégration et notification significatives | Message métier ; reprise manuelle — ADR P1/P2 |
| **Dashboard SAV opérationnel** | KPI opérationnels ; anomalies ; échecs notif ; non signées | Actionnable ; liens dossiers ; pas logs techniques |
| **Vue dirigeant** | KPI synthétiques ; tendances ; alertes majeures | Pas preuves détaillées ; pas logs ; pas drill-down technique |
| **Notifications** | Statuts internes ; indicateur échecs dashboard | Simulées — pas portail ; pas centre notifications |
| **Portail client** | **Hors MVP** | **Aucun écran** |
| **Composants IA** | **Hors MVP** | **Aucun composant, badge ou placeholder IA** |

---

## 5. Règles UX/UI consolidées avant Figma

**Conservation et preuves**

- prévoir les **preuves/photos** comme éléments **fictifs ou métadonnées**, sans promesse de conservation réelle ;
- libellés prudents : « preuve associée », « trace disponible », « signature enregistrée ».

**Signature**

- prévoir la **signature comme optionnelle et non bloquante** ;
- prévoir des états **signé / non signé / motif absence** ;
- ne pas suggérer une **conformité juridique complète**.

**Notifications**

- prévoir des **notifications simples côté interne** (statut, badge, historique) ;
- **ne pas créer de portail client** ;
- **ne pas créer de centre de notifications avancé**.

**Dashboards**

- **séparer dashboard SAV et vue dirigeant** ;
- **ne pas exposer de logs techniques** dans les dashboards ;
- **ne pas exposer preuves/photos détaillées** côté dirigeant ;
- garder les dashboards **déterministes** — KPI, filtres, alertes par règles.

**IA et périmètre**

- **ne pas intégrer de composant IA** ;
- ne pas transformer des règles métier simples en « intelligence » ;
- garder les **libellés prudents** sur toute la surface MVP.

---

## 6. Ce qui est autorisé pour Figma MVP

| Élément | Autorisé ? | Commentaire |
|---------|------------|-------------|
| **Zones preuves / pièces jointes** | Oui | Références fictives ; ADR-005 |
| **Vignettes ou compteurs photos fictifs** | Oui | « N photos » ; pas DAM complet |
| **Statut signature** | Oui | Signée, refusée, non disponible, etc. — ADR-007 |
| **Motif absence signature** | Oui | Champ optionnel clôture |
| **Badges notification** | Oui | Dernier statut ; échec — ADR-006 |
| **Historique simplifié** | Oui | Événements clés dossier |
| **Écran anomalies** | Oui | Erreurs visibles ; reprise manuelle — ADR P1 |
| **Dashboard SAV** | Oui | Opérationnel ; KPI §ADR-008 |
| **Vue dirigeant** | Oui | Synthétique ; séparée du SAV |
| **KPI simples** | Oui | Socle cadrage ; pas BI avancée |
| **Filtres simples** | Oui | Période, statut, priorité, source |
| **Alertes déterministes** | Oui | Retards, anomalies, échecs — pas IA |

---

## 7. Ce qui est interdit ou hors MVP pour Figma

| Élément | Statut | Raison |
|---------|--------|--------|
| **Portail client** | Hors MVP | ADR-006 — ARB-MVP-02 |
| **Centre notifications avancé** | Hors MVP | ADR-006 — suivi détaillé post-MVP |
| **Préférences notification avancées** | Hors MVP | ADR-006 |
| **Signature électronique juridiquement complète** | Hors MVP | ADR-007 |
| **Politique réelle de conservation** | Hors MVP | ADR-005 |
| **Archivage / purge** | Hors MVP | ADR-005 |
| **Logs techniques complets** | Hors MVP | ADR-004 / ADR-005 |
| **SIEM / supervision** | Hors MVP | ADR P1 |
| **Dashboard BI avancé** | Hors MVP | ADR-008 ; dashboard-kpi-ux-review |
| **Composants IA** | Hors MVP | ADR-CAND-009 |
| **Scoring IA** | Hors MVP | ADR-CAND-009 |
| **Chatbot** | Hors MVP | ADR-CAND-009 |
| **Prédictions** | Hors MVP | ADR-CAND-009 |
| **Résumé automatique** | Hors MVP | ADR-CAND-009 |

---

## 8. Impacts par rôle

| Rôle | Impact P2 |
|------|-----------|
| **Product Owner** | Périmètre MVP design sécurisé ; portail et IA exclus ; arbitrages KPI above the fold |
| **UX/UI Designer** | Garde-fous Figma explicites ; 8 écrans + séparation dashboards ; libellés prudents |
| **RSSI** | Pas exposition données sensibles ; pas portail ; pas valeur probante signature complète |
| **Architecte** | Cohérence ADR P1/P2 ; agrégats dashboards ; intégrations simulées inchangées |
| **QA / Testeur** | Scénarios préparés §9 ; happy path et non happy path notification/signature/anomalies |
| **Chef de projet** | Jalon P2 clôturé ; préparation sync Notion ; séquence vers Figma |

---

## 9. Impacts QA avant design

| Sujet | Scénarios QA futurs |
|-------|---------------------|
| **Preuve/photo associée** | Affichage indicateur ; vignette fictive ; lien fiche intervention |
| **Absence de preuve** | Parcours sans photo ; pas blocage clôture |
| **Signature signée** | Statut « Signée » ; preuve associée ; clôture OK |
| **Signature refusée** | Motif refus ; clôture non bloquée |
| **Signature non disponible** | Client absent ; clôture avec motif |
| **Notification envoyée** | Statut « Envoyée » ; historique dossier |
| **Notification échouée** | Anomalie ou dashboard ; non bloquant par défaut |
| **Anomalie visible** | Écran anomalies ; reprise manuelle simulée |
| **Dashboard SAV** | KPI cohérents ; liens actionnables ; filtres simples |
| **Vue dirigeant** | KPI synthétiques ; pas détail preuves/logs |
| **Absence de composant IA** | Aucun badge/bouton IA sur tous les écrans MVP |

*Cette synthèse ne crée pas encore de plan de test détaillé.*

---

## 10. Impacts SFIA

| Asset SFIA | Impact ou capitalisation |
|------------|--------------------------|
| **Méthodes rôle à enrichir après P2** | Product Owner, UX/UI Designer, RSSI, Architecte, Chef de projet — §14 |
| **Futur Template Fictive Retention Matrix** | ADR-005 — objets, visibilité UI |
| **Futur Template Notification Scope Matrix** | ADR-006 — événements, canaux, statuts |
| **Futur Template Optional Signature Matrix** | ADR-007 — statuts, périmètre fonctionnel |
| **Futur Template Dashboard Separation Matrix** | ADR-008 — KPI par vue, règles séparation |
| **Futur Checklist anti-surpromesse IA** | ADR-CAND-009 — garde-fous Figma |
| **Futur Standard conservation fictive MVP** | ADR-005 |
| **Futur Standard notification simple MVP** | ADR-006 |
| **Futur Standard signature optionnelle structurée** | ADR-007 |
| **Futur Standard dashboard opérationnel / vue dirigeant** | ADR-008 |
| **Futur Standard IA post-MVP** | ADR-CAND-009 — cas reportés |

---

## 11. Prompts impactés

| Prompt | Impact P2 |
|--------|-----------|
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Garde-fous P2 ; périmètre 8 écrans ; exclusions portail/IA |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist consolidation P2 avant maquette |
| **PROMPT-UX-003** — Revue dashboard KPI UX | Séparation SAV/dirigeant ; KPI above the fold |
| **PROMPT-SEC-001** — Revue canal email sécurisé | PJ et preuves ; pas exposition sensible dashboards |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Notifications, anomalies dashboard |
| **PROMPT-GOV-001** — Synchronisation gouvernance Notion | Jalon P2 design-impact |

*Les prompts ne sont pas modifiés dans cette tâche ; un enrichissement pourra être réalisé après ouverture UX/UI ou après REX.*

---

## 12. Points ouverts après P2

| Point ouvert | Statut | Traitement prévu |
|--------------|--------|------------------|
| **Politique réelle de conservation** | Post-MVP | Instruction architecture / RSSI ultérieure |
| **Portail client** | Post-MVP | ARB-MVP-02 ; évolution produit |
| **Préférences notification** | Post-MVP | ADR-006 |
| **Signature électronique complète** | Post-MVP | ADR-007 |
| **BI avancée** | Post-MVP | ADR-008 ; dashboard-kpi-ux-review |
| **IA légère** | Post-MVP | ADR-CAND-009 ; gouvernance données |
| **Enrichissement méthodes rôle** | À planifier | Après consolidation P2 — §14 |
| **Sync Notion P2** | À préparer | Payload gouvernance post-synthèse |
| **Ouverture UX/UI / Figma** | Autorisée à préparer | Note d'ouverture ou mise à jour brief |

---

## 13. Décision de jalon

**Le jalon ADR P2 design-impact est consolidé.**

Conditions :

- **UX/UI / Figma peut maintenant être préparé** — garde-fous P2 documentés ;
- **Figma n'est pas encore produit** par cette synthèse ;
- les écrans Figma devront **respecter les garde-fous P2** (§5, §6, §7) ;
- le **delivery, backlog, user stories et code** restent **hors périmètre** ;
- **Notion** peut être synchronisé après préparation d'un **payload P2** si nécessaire.

---

## 14. Prochaines actions recommandées

1. **Enrichir les méthodes rôle** après consolidation ADR P2, si jugé nécessaire ;
2. **Préparer la synchronisation Notion** du jalon ADR P2 design-impact ;
3. **Préparer l'ouverture UX/UI / Figma** ;
4. **Mettre à jour le brief UX/UI** ou produire une **note d'ouverture Figma** ;
5. **Ne pas lancer** backlog, user stories ou code avant validation UX/UI.

---

## 15. Conclusion

Le **bloc ADR P2 design-impact est consolidé**.

Les décisions structurantes qui pouvaient impacter les écrans Figma sont clarifiées : **conservation fictive**, **notifications simples sans portail**, **signature optionnelle**, **dashboards séparés** et **IA reportée post-MVP**.

Le projet peut maintenant **préparer l'ouverture UX/UI / Figma** avec un **périmètre maîtrisé** et des **garde-fous explicites**.

**Figma non produit** par cette synthèse.

---

*Synthèse ADR P2 design-impact — projet Interv360, phase 02-architecture — gouvernance SFIA.*
