# Interv360 — Préparation sync Notion ADR P2 design-impact

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Jalon** : ADR P2 design-impact  
**Statut jalon** : Done  
**Type** : préparation synchronisation Notion  
**Source détaillée** : Git  
**Mode Notion** : gouvernance uniquement  
**Publication Notion** : Non réalisée dans cette tâche

---

## 1. Objectif

Ce document **prépare la synchronisation Notion** du jalon **ADR P2 design-impact** du projet Interv360.

- **Notion** doit afficher le statut, la synthèse, les décisions clés et les prochaines actions ;
- **Git** conserve les ADR, confirmations, synthèses et méthodes rôle détaillées (`projects/interv360/02-architecture/`, `docs/methods/roles/`) ;
- **Cette tâche ne publie rien dans Notion** — elle produit une synthèse et un payload JSON prêts à l'emploi.

Source de référence : `architecture-p2-design-impact-summary.md`

---

## 2. Mise à jour projet Notion prévue

| Champ Notion | Valeur proposée |
|--------------|-----------------|
| **Statut projet** | En cours |
| **Phase actuelle** | 02-architecture |
| **Jalon courant** | ADR P2 design-impact |
| **Statut jalon** | Done |
| **Dernier jalon terminé** | ADR P2 design-impact |
| **Prochaine action** | Ouverture UX/UI / Figma |
| **Gouvernance** | Git source détaillée / Notion synthèse |
| **Risque principal** | Produire Figma sans respecter les garde-fous P2 |
| **Décision de jalon** | ADR P2 design-impact consolidé |

---

## 3. Synthèse courte à publier dans Notion

Le **bloc ADR P2 design-impact est consolidé** : **ADR-005 à ADR-008 acceptées** ; **ADR-CAND-009 confirmée post-MVP**.

Le MVP retient une **conservation fictive limitée**, des **notifications simples sans portail client**, une **signature optionnelle non bloquante**, des **dashboards SAV et vue dirigeant séparés**, et **aucune IA au MVP**.

Les **méthodes rôle** (Product Owner, UX/UI Designer, RSSI, Architecte, Chef de projet) ont été **enrichies** après consolidation P2.

**UX/UI / Figma peut maintenant être préparé** avec garde-fous explicites — Figma, backlog, user stories et code **ne sont pas déclenchés** par ce jalon.

---

## 4. Décisions clés à afficher dans Notion

| Décision | Statut | Source Git |
|----------|--------|------------|
| **ADR-005** — Conservation fictive photos, signatures et logs | Accepted | `adr/ADR-005-fictive-retention-photos-signatures-logs.md` |
| **ADR-006** — Notifications client sans portail client | Accepted | `adr/ADR-006-client-notifications-without-client-portal.md` |
| **ADR-007** — Signature client optionnelle structurée | Accepted | `adr/ADR-007-optional-structured-client-signature.md` |
| **ADR-008** — Dashboard SAV et vue dirigeant séparés | Accepted | `adr/ADR-008-separated-sav-dashboard-and-executive-view.md` |
| **ADR-CAND-009** — IA légère reportée post-MVP | Confirmed — Post-MVP | `adr/ADR-CAND-009-ai-light-post-mvp-confirmation.md` |
| **Synthèse ADR P2 design-impact** | Done | `architecture-p2-design-impact-summary.md` |
| **Enrichissement méthodes rôle post-P2** | Done | `role-methods-enrichment-after-adr-p2.md` |

*Chemins relatifs à `projects/interv360/02-architecture/` sauf méthodes rôle (`docs/methods/roles/`).*

---

## 5. Garde-fous UX/UI à afficher

- preuves et photos uniquement en mode **fictif / métadonnées** ;
- **signature optionnelle**, non bloquante ;
- **notifications simples**, simulées ;
- **pas de portail client** ;
- **pas de centre notifications avancé** ;
- **dashboard SAV et vue dirigeant séparés** ;
- **pas de logs techniques** dans les dashboards ;
- **pas de preuves détaillées** côté dirigeant ;
- **pas de composant IA** ;
- pas de scoring, prédiction, chatbot ou résumé automatique ;
- **Figma autorisé à préparer**, non encore produit par ce jalon.

---

## 6. Valeur projet à afficher

| Valeur projet | Synthèse |
|---------------|----------|
| **Figma préparé avec périmètre clair** | Garde-fous P2 documentés avant design |
| **Réduction du risque de refaire les maquettes** | Décisions design-impact avant Figma |
| **MVP protégé contre surpromesse** | Portail, IA, BI, conservation réelle exclus |
| **Meilleure lisibilité des écrans** | Dashboards séparés ; sobriété cognitive |
| **Décisions design-impact tracées** | ADR-005 à 008 + confirmation CAND-009 |
| **Meilleure cohérence UX / SSI / produit** | Libellés prudents ; exposition limitée |

---

## 7. Valeur SFIA à afficher

| Valeur SFIA | Synthèse |
|-------------|----------|
| **Méthodes rôle enrichies** | 5 rôles — apprentissages bloc ADR P2 design-impact |
| **Standards candidats** | Conservation fictive, notification simple, signature optionnelle, dashboards séparés, IA post-MVP |
| **Templates candidats** | Fictive Retention, Notification Scope, Optional Signature, Dashboard Separation |
| **Checklist anti-surpromesse IA** | ADR-CAND-009 |
| **Standard ADR design-impact avant Figma** | Bloc P2 + synthèse |
| **Discipline de séquencement** | P1 → P2 → synthèse → méthodes → Notion → Figma |
| **Savoir-faire** | ADR design-impact, MVP/post-MVP/hors MVP, garde-fous Figma |
| **Savoir-être** | Sobriété, prudence, protection MVP, refus surpromesse |

---

## 8. Méthodes rôle enrichies

| Méthode rôle | Statut | Apport principal |
|--------------|--------|------------------|
| **Product Owner** | Enrichi | MVP vs post-MVP ; protection dérive ; exclusions portail/IA/BI |
| **UX/UI Designer** | Enrichi | Figma post-ADR P2 ; sobriété ; dashboards séparés ; libellés prudents |
| **RSSI** | Enrichi | Preuves fictives ; exposition limitée ; surpromesse conformité |
| **Architecte** | Enrichi | ADR design-impact ; objets visibles ; garde-fous portail/BI/IA |
| **Chef de projet** | Enrichi | Séquence P1→P2→synthèse→Notion→Figma ; jalon Done |
| **QA / Testeur** | Candidate future | Méthode absente — extraction prioritaire post-Figma ou REX |

---

## 9. Prochaines actions à afficher dans Notion

1. **Préparer l'ouverture UX/UI / Figma.**
2. **Mettre à jour le brief UX/UI** ou produire une **note d'ouverture Figma**.
3. **Préparer les garde-fous Figma** à partir de la synthèse P2.
4. **Ne pas lancer** backlog, user stories ou code avant validation UX/UI.
5. **Prévoir extraction future** de la méthode QA / Testeur si nécessaire.

---

## 10. Contrôle non-duplication

- [x] les ADR complètes **ne sont pas** copiées dans Notion ;
- [x] la note ADR-CAND-009 complète **n'est pas** copiée dans Notion ;
- [x] les méthodes rôle complètes **ne sont pas** copiées dans Notion ;
- [x] la synthèse P2 complète **n'est pas** copiée dans Notion ;
- [x] Notion affiche uniquement les **statuts, synthèses et liens Git** ;
- [x] Git reste la **source détaillée versionnée**.

---

## 11. Payload JSON

Voir `notion-sync-architecture-p2-payload.json` pour la proposition de payload structuré (sans appel API Notion).

---

*Préparation sync Notion — projet Interv360, jalon ADR P2 design-impact — gouvernance SFIA.*
