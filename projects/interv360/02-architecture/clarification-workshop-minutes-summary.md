# Interv360 — Synthèse compte rendu atelier clarification

**Projet** : PRJ-INTERV360  
**Document source** : `clarification-workshop-minutes.md`  
**Type** : Synthèse gouvernance  
**Branche** : `analysis/interv360-clarification-cycle`

---

## Statut

**Atelier simulé** — décisions de cadrage fictives mais cohérentes avec les sources (`qa-transverse-analysis.md`, `ux-ui-brief-validation.md`, `mvp-arbitration-validation.md`, `clarification-workshop-preparation.md`).

---

## Décisions principales

### 8 points UX tranchés

1. **Fiche demande** — checklist minimale MVP ; détails avancés hors MVP.
2. **Compte rendu** — web seul au MVP ; export PDF extension future.
3. **Planning** — vue jour par défaut ; vue semaine secondaire si simple.
4. **Alertes dashboard** — top 5 à 7 alertes visibles, hiérarchisées par criticité.
5. **Wording statuts** — liste métier unifiée MVP.
6. **KPI above the fold** — top 5 à 7 KPI maximum par dashboard.
7. **Mobile technicien** — mobile prioritaire, parcours simplifié.
8. **Erreurs intégration** — message métier visible ; détail technique secondaire.

### 6 règles RG clarifiées (macro)

| Règle | Orientation simulée |
|-------|---------------------|
| RG-C04 | Détection doublon cross-canal ; signalement manager, pas de blocage auto |
| RG-C05 | Données minimales : client, contact, canal, motif, priorité, adresse, créneau si dispo |
| RG-I05 | Table MVP unique Interv360 / CRM simulé / libellés |
| RG-I06 | Trois niveaux gravité : information, bloquant métier, bloquant sync |
| RG-R02 | Signature optionnelle, structurée, non bloquante |
| RG-R05 | CR obligatoire, statut finalisé, motif si pas de signature, trace conservée |

### Première table statuts MVP

8 statuts retenus : À qualifier, Qualifiée, Planifiée, En cours, En attente client, Clôturée, En retard, Anomalie d'intégration — à formaliser dans `status-mapping.md`.

### Clôture sans signature

Signature optionnelle ; clôture possible sans signature ; CR et motif obligatoires ; trace historique ; sync CRM avec indicateur signature absente ; aucun blocage lié seul à l'absence de signature.

### Géoloc / IA

**Hors MVP** — extension future documentée ; justification : complexité, données sensibles, gouvernance, coûts.

### ADR candidates identifiées

Mapping statuts, gestion erreurs intégration, clôture sans signature, synchronisation CRM simulé, exclusion géoloc/IA du MVP — **ADR non rédigées** dans cette tâche.

---

## Documents de sortie à produire

| Document | Objet |
|----------|-------|
| `mvp-clarifications.md` | Consolidation décisions UX et clarifications transverses |
| `rules-rg-prioritization.md` | Détail macro → opérationnel des 6 règles RG prioritaires |
| `status-mapping.md` | Table formelle statuts, visibilités, alertes, correspondances CRM |
| `closure-without-signature.md` | Conditions clôture, champs CR, traces, sync |
| `geo-ai-arbitration.md` | Arbitrage hors MVP et trajectoire future |

---

## Garde-fous

- Pas de **backlog**
- Pas de **user stories**
- Pas de **cas de tests** ni **scénarios de tests**
- Pas de **delivery** ouvert
- Pas de **publication Notion**
- Pas de **code applicatif**
- Pas de **PR** créée à ce stade — branche longue `analysis/interv360-clarification-cycle`

---

*Synthèse compte rendu atelier clarification — Interv360 — SFIA.*
