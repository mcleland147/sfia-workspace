# Interv360 — Enrichissement méthodes rôle après ADR P2 design-impact

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Jalon** : ADR P2 design-impact  
**Statut** : Done  
**Type** : Synthèse de capitalisation méthodes rôle  
**Source** : ADR-005 à ADR-008 + confirmation ADR-CAND-009 + synthèse P2  
**Objet** : capitalisation des apprentissages P2 dans les méthodes rôle SFIA

---

## 1. Objectif

Ce document trace les **enrichissements réalisés dans les méthodes rôle SFIA** après **consolidation du bloc ADR P2 design-impact** en phase architecture Interv360.

La synthèse `architecture-p2-design-impact-summary.md` indiquait que les **méthodes rôle pourraient être enrichies après consolidation P2** — cette tâche réalise cette capitalisation.

Les apprentissages sont intégrés de manière **générique et réutilisable** dans `docs/methods/roles/` — sous-section **§14 — Bloc ADR P2 design-impact Interv360** — pas comme documentation Interv360 exclusive.

---

## 2. Sources utilisées

| Source | Rôle |
|--------|------|
| `architecture-p2-design-impact-summary.md` | Synthèse jalon P2 ; garde-fous Figma |
| `ADR-005` — Conservation fictive photos, signatures et logs | Preuves fictives ; libellés prudents |
| `ADR-006` — Notifications client sans portail client | Notifications simulées ; exclusions portail |
| `ADR-007` — Signature client optionnelle structurée | Signature non bloquante ; pas e-signature |
| `ADR-008` — Dashboard SAV et vue dirigeant séparés | Séparation dashboards ; KPI déterministes |
| `ADR-CAND-009-ai-light-post-mvp-confirmation.md` | IA hors MVP ; anti-surpromesse |
| `architecture-p1-summary.md` | Continuité séquence P1 → P2 |
| Méthodes rôle existantes (§14 P1) | Structure d'enrichissement réutilisée |

---

## 3. Méthodes rôle enrichies

| Méthode rôle | Enrichissement réalisé | Statut |
|--------------|------------------------|--------|
| `product-owner-method.md` | §14 — Bloc ADR P2 : MVP vs post-MVP, protection dérive, exclusions portail/IA/BI | Enrichi |
| `ux-ui-designer-method.md` | §14 — Bloc ADR P2 : Figma post-ADR P2, sobriété, dashboards séparés, libellés prudents | Enrichi |
| `rssi-method.md` | §14 — Bloc ADR P2 : preuves fictives, exposition limitée, surpromesse conformité, IA sans gouvernance | Enrichi |
| `architect-method.md` | §14 — Bloc ADR P2 : ADR design-impact, objets visibles, garde-fous portail/BI/IA/conservation | Enrichi |
| `project-manager-method.md` | §14 — Bloc ADR P2 : séquence P1→P2→synthèse→méthodes→Notion→Figma, jalon Done | Enrichi |
| `qa-tester-method.md` | — | **Non enrichi** — méthode absente ; candidate extraction future (§9) |

---

## 4. Apprentissages transverses P2

| Apprentissage | Valeur projet | Valeur SFIA |
|---------------|---------------|-------------|
| **Design-impact avant Figma** | Écrans cadrés avant maquette | Standard bloc ADR P2 ; checklist design-impact |
| **Conservation fictive** | Preuves crédibles sans archivage réel | Template Fictive Retention Matrix |
| **Notifications sans portail** | Client informé sans self-service | Standard notification simple MVP |
| **Signature optionnelle** | Clôture flexible ; preuve partielle | Standard signature optionnelle structurée |
| **Dashboards séparés** | Lisibilité opérationnel vs dirigeant | Template Dashboard Separation Matrix |
| **IA post-MVP** | Pas de surpromesse produit | Checklist anti-surpromesse IA |
| **Libellés prudents** | Pas de conformité implicite | Garde-fous UX/RSSI transverses |
| **Exclusions explicites** | Périmètre MVP protégé | Tableaux autorisé/interdit synthèse P2 |
| **Séquencement ADR → synthèse → Figma** | Moins de retouches design | Règle project-manager-method §14 P2 |

---

## 5. Savoir-faire capitalisés

- Instruire des **ADR design-impact** avant ouverture UX/UI.
- **Différencier MVP / post-MVP / hors MVP** par objet visible (preuve, notification, signature, KPI, IA).
- **Préparer Figma sans produire Figma** — synthèse et garde-fous documentés.
- **Cadrer les objets visibles** — fictifs, métadonnées, statuts.
- **Cadrer les statuts** — signature, notification, preuve, anomalie.
- **Cadrer les dashboards** — séparation SAV / dirigeant ; exclusions logs et preuves détaillées.
- **Documenter les exclusions** — portail, IA, BI, centre notifications, e-signature complète.
- **Relier ADR et prompts** — matrice prompts impactés sans modification prématurée.

---

## 6. Savoir-être capitalisés

- **Sobriété** — design et périmètre MVP.
- **Prudence** — libellés, promesses implicites, conformité.
- **Discipline de séquencement** — P1, P2, synthèse, méthodes, Notion, Figma.
- **Protection du MVP** — refus dérive fonctionnelle et technique.
- **Refus de surpromesse** — IA, portail, conservation réelle, juridique.
- **Challenger sans bloquer** — opportunités futures documentées.
- **Pédagogie métier / SSI / UX** — limites expliquées, pas imposées opaque.
- **Arbitrage clair** — visible vs reporté vs hors MVP.

---

## 7. Assets SFIA candidats

| Asset candidat | Source P2 | Type |
|----------------|-----------|------|
| Template Fictive Retention Matrix | ADR-005 | Template |
| Template Notification Scope Matrix | ADR-006 | Template |
| Template Optional Signature Matrix | ADR-007 | Template |
| Template Dashboard Separation Matrix | ADR-008 | Template |
| Checklist anti-surpromesse IA | ADR-CAND-009 | Checklist |
| Checklist ADR design-impact | Synthèse P2 §5 | Checklist |
| Standard conservation fictive MVP | ADR-005 | Standard |
| Standard notification simple MVP | ADR-006 | Standard |
| Standard signature optionnelle structurée | ADR-007 | Standard |
| Standard dashboard opérationnel / vue dirigeant | ADR-008 | Standard |
| Standard IA post-MVP | ADR-CAND-009 | Standard |

---

## 8. Prompts à enrichir plus tard

| Prompt | Enrichissement futur |
|--------|----------------------|
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Garde-fous P2 ; exclusions ; checklist design-impact |
| **PROMPT-UX-002** — Validation brief UX/UI | Validation consolidation P2 avant maquette |
| **PROMPT-UX-003** — Revue dashboard KPI UX | Séparation SAV/dirigeant ; KPI above the fold |
| **PROMPT-SEC-001** — Revue canal email sécurisé | Preuves fictives ; exposition limitée dashboards |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Notifications dashboard ; agrégats anomalies |
| **PROMPT-GOV-001** — Sync Notion | Jalon P2 design-impact |

*Les prompts ne sont pas modifiés dans cette tâche ; enrichissement à prévoir après ouverture UX/UI ou REX.*

---

## 9. Méthodes rôle candidates futures

| Rôle | Priorité | Commentaire |
|------|----------|-------------|
| **QA / Testeur** | Haute | Méthode `qa-tester-method.md` **absente** — scénarios P2 §9 synthèse P2 (signature, notification, preuve, dashboards, absence IA) candidats à extraction ou création future |
| **Concepteur fonctionnel** | Moyenne | Utile avant backlog / user stories ; pont ADR P2 → fiches écran |
| **Data / IA** | Basse (post-MVP) | Si ADR-CAND-009 réouverte — gouvernance données, cas d'usage |

---

## 10. Prochaines actions

1. **Préparer la synchronisation Notion** du jalon ADR P2 design-impact ;
2. **Préparer l'ouverture UX/UI / Figma** ;
3. **Mettre à jour le brief UX/UI** ou produire une **note d'ouverture Figma** ;
4. **Prévoir l'enrichissement des prompts UX** après utilisation ;
5. **Ne pas lancer** backlog, user stories ou code avant validation UX/UI.

---

## 11. Conclusion

Le bloc **ADR P2 design-impact** a produit des **apprentissages structurants pour SFIA**.

Les **cinq méthodes rôle** (Product Owner, UX/UI Designer, RSSI, Architecte, Chef de projet) sont enrichies afin d'intégrer la **discipline de préparation Figma**, les **garde-fous MVP**, la **sobriété UX**, la **vigilance SSI** et la **protection contre la surpromesse fonctionnelle**.

Le projet peut maintenant **préparer la synchronisation Notion P2** puis l'**ouverture UX/UI / Figma**.

---

*Enrichissement méthodes rôle post-ADR P2 — projet Interv360, phase 02-architecture — gouvernance SFIA.*
