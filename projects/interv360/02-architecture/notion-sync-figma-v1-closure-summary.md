# Interv360 — Préparation sync Notion — clôture Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Jalon** : Figma V1  
**Statut** : Prepared — Not published  
**Type** : Préparation synchronisation Notion  
**Source** : `figma-v1-closure-summary.md`  
**Objet** : préparer une mise à jour Notion de gouvernance pour la clôture du jalon Figma V1

---

## 1. Objectif

Ce document **prépare la synchronisation Notion de gouvernance** pour la **clôture du jalon Figma V1** Interv360.

- la sync est **préparée mais non publiée** ;
- elle est **informative uniquement** ;
- elle **ne déclenche pas** le delivery ;
- elle **ne crée pas** de backlog ;
- elle **ne crée pas** de user stories ;
- elle **ne crée pas** de code.

**Git** reste la source détaillée versionnée. **Notion** reçoit une synthèse de gouvernance uniquement, après revue manuelle.

---

## 2. Décision à synchroniser

Le **jalon Figma V1 est clôturé**.

La maquette est **validée comme présentable avec ajustements mineurs**.

- la **V1 est non définitive** ;
- la **qualité indicative** est de **8,3 / 10** ;
- la **V2 est différée** ;
- le **delivery reste bloqué** ;
- **backlog**, **user stories** et **code** restent **bloqués**.

---

## 3. Synthèse gouvernance

| Élément | Statut |
|---------|--------|
| **Figma V1** | Closed — validated with minor adjustments |
| **Qualité** | 8,3 / 10 — présentable, non définitive |
| **V2** | Différée |
| **Delivery** | Bloqué |
| **Backlog** | Bloqué |
| **User stories** | Bloquées |
| **Code** | Bloqué |
| **Notion publication** | Prepared — `publish_to_notion: false` |

---

## 4. Éléments validés

| Élément validé | Commentaire |
|----------------|-------------|
| MVP scope | 8 écrans cœur + garde-fous |
| 8 MVP screens | Captures 05–12 |
| 11 versioned Figma captures | `figma-first-draft-screens/` |
| Enterprise clean visual direction | Direction UX tenue |
| Separated SAV and executive dashboards | ADR-008 confirmé |
| Technician mobile screens | Intervention + CR terrain |
| Optional signature | ADR-007 ; clôture sans blocage |
| Business-readable anomalies | Reprise manuelle ; pas de log brut |
| ADR P1/P2 guardrails | Aucun écart bloquant |
| No AI in MVP | ADR-CAND-009 |
| No client portal | ADR-006 |
| No technical logs | ADR P1/P2 |
| No advanced BI | ADR-008 |
| No full legal e-signature | ADR-007 |
| Simulated multi-role review | 7 rôles SFIA |
| Role methods enrichment | Avant revue simulée |

---

## 5. Ajustements différés

| Priorité | Ajustement | Cible |
|----------|------------|-------|
| P1 | Clarifier ou supprimer barres verticales KPI dashboard SAV | V2 / polish |
| P1 | Vérifier wording onglets et actions secondaires | V2 / revue wording |
| P2 | Adoucir carte indice opérationnel vue dirigeant | V2 / polish |
| P2 | Améliorer lecture temporelle planning | V2 si disponible |
| P2 | Affiner hiérarchie mobile | V2 |
| P3 | Améliorer graphs dashboard / dirigeant | V2 optionnel |
| P3 | Enrichir états empty / loading / error | V2 optionnel |
| P3 | Exporter pages 01–04 si V2 | V2 optionnel |

*Ces ajustements ne bloquent pas la clôture du jalon.*

---

## 6. Hors MVP

| Élément | Statut |
|---------|--------|
| IA / scoring / recommandations | Reporté post-MVP (ADR-CAND-009) |
| Portail client | Hors MVP (ADR-006) |
| BI avancée / drill-down analytique | Hors MVP (ADR-008) |
| Signature juridique complète | Hors MVP (ADR-007) |
| Conservation réelle / archivage / purge | Hors MVP (ADR-005) |
| Logs techniques / SIEM | Hors périmètre démonstrateur (ADR P1/P2) |

---

## 7. Capitalisation SFIA

| Élément capitalisé | Valeur |
|--------------------|--------|
| Production Figma | Séquence ouverture → instructions → prompt → maquette |
| Prompt de production | `figma-production-prompt.md` |
| Revue V1 | `figma-first-draft-review.md` |
| Préparation revue | `figma-review-session-preparation.md` |
| Template CR | `figma-review-session-minutes-template.md` |
| Revue simulée | `figma-review-session-minutes.md` |
| Méthodes rôle | `role-methods-enrichment-after-figma-v1.md` + §14 |
| Distinction V1 présentable / définitive / delivery | Standard méthodologique |
| QA / Testeur candidat | Extraction future |
| Contrainte crédits outil | V2 différée documentée |

---

## 8. Payload associé

Le payload JSON associé est disponible dans :

`notion-sync-figma-v1-closure-payload.json`

**`publish_to_notion`** est positionné à **`false`**.

**`notion_publication_mode`** : `manual_review_required`.

---

## 9. Message Notion proposé

> Le jalon Figma V1 Interv360 est clôturé. La maquette est validée comme présentable avec ajustements mineurs, non définitive, avec une qualité indicative de 8,3/10. La V2 est différée et le delivery reste bloqué tant qu'un jalon dédié n'est pas explicitement ouvert. Aucun backlog, user story ou code n'est déclenché par cette clôture.

---

## 10. Contraintes

- pas de **publication automatique** ;
- pas d'**ouverture delivery** ;
- pas de **backlog** ;
- pas de **user stories** ;
- pas de **code** ;
- pas de **nouvelle maquette** ;
- publication Notion **manuelle uniquement** après revue.

---

## 11. Prochaine action

**Relire le payload et la synthèse**, puis **décider manuellement** si la mise à jour Notion doit être réalisée.

Aucun appel API Notion n'est effectué dans le cadre de cette préparation.

---

## 12. Conclusion

La **synchronisation Notion de gouvernance** pour la clôture du jalon Figma V1 est **préparée**.

Elle permet de **tracer la décision de clôture** sans déclencher de passage delivery. La **publication reste volontairement désactivée** et soumise à **revue manuelle**.

---

*Préparation sync Notion — clôture Figma V1 — projet Interv360 — gouvernance SFIA — non publié.*
