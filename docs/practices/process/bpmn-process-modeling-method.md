# SFIA — Méthode de modélisation BPMN

**Type** : Méthode  
**Statut** : Draft  
**Domaine** : Process Modeling / BPMN  
**Phase** : Phase B — Intégration méthodologique BPMN  
**Source** : `2026-06-28-bpmn-method-integration-audit.md`

---

## 1. Objectif

Cette méthode décrit **quand, pourquoi et comment** utiliser **BPMN** dans le cadre SFIA.

**Précisions :**

- BPMN est une **capacité méthodologique réutilisable** — pas un livrable ponctuel projet ;
- BPMN sert à **représenter les processus métier** et les flux entre acteurs et systèmes ;
- BPMN fait le lien entre **cadrage**, **clarification**, **règles**, **statuts**, **ADR candidates** et **architecture fonctionnelle** ;
- BPMN **ne produit pas** directement de backlog, de tests ou de code applicatif.

---

## 2. Positionnement dans la trajectoire SFIA

### Séquence cible

```
01-cadrage
  → 02-architecture / clarification
    → 03-process / BPMN
      → ADR structurantes
        → architecture fonctionnelle détaillée
          → UX / écrans / parcours
```

### Règles de positionnement

| Règle | Explication |
|-------|-------------|
| BPMN **après** clarification / QA | Ambiguïtés macro levées ; règles et statuts orientés |
| BPMN **avant** architecture fonctionnelle détaillée | Les flux guident les spécifications sans les remplacer |
| BPMN **prépare** les ADR candidates | Décisions structurantes révélées par les flux |
| BPMN **prépare** écrans et parcours | Alignement processus ↔ UX |
| BPMN **ne remplace pas** les ADR | Instruction ADR reste une étape distincte |
| BPMN **ne remplace pas** les spécifications fonctionnelles détaillées | Complément visuel et structurant |

---

## 3. Quand utiliser BPMN

| Situation | BPMN recommandé ? | Pourquoi |
|-----------|-------------------|----------|
| Processus métier **multi-acteurs** | Oui | Lanes, responsabilités, handoffs |
| **Statuts** nombreux ou transitions complexes | Oui | Alignement avec mapping statuts (ex. RG-I05) |
| **Exceptions métier** à clarifier | Oui | Gateways, branches, événements |
| **Intégrations externes** (CRM, email, etc.) | Oui | Message flows, tâches de sync |
| **Synchronisation** avec un SI tiers | Oui | Points de sync, reprise manuelle |
| Besoin de clarifier des **responsabilités** | Oui | Pools / lanes par rôle |
| **Préparation ADR** | Oui | Flux révèle décisions structurantes |
| **Préparation architecture fonctionnelle** | Oui | Pont vers écrans et parcours |
| Écran **isolé** sans processus | Non | Spécification écran suffit |
| Simple **CRUD** sans cycle métier | Non | Surcharge méthodologique |
| Note de cadrage **très amont** | Non | Trop tôt — attendre clarification minimale |
| Sujet **purement technique** sans processus métier | Non | ADR ou doc technique plus adapté |

---

## 4. Ce que BPMN doit représenter

- **acteurs / lanes** (manager SAV, technicien, systèmes simulés, etc.) ;
- **événements** de début et de fin ;
- **tâches métier** (qualifier, planifier, clôturer, etc.) ;
- **décisions / gateways** (signature présente ?, données complètes ?, etc.) ;
- **exceptions** (doublon, attente client, erreur intégration) ;
- **messages** entre systèmes (sync CRM, email entrant) ;
- **statuts métier** (en lien avec le mapping statuts documenté) ;
- **points de synchronisation** (clôture → CRM) ;
- **points de reprise manuelle** (anomalie d'intégration, RG-I06).

---

## 5. Ce que BPMN ne doit pas représenter

- backlog produit ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code applicatif ;
- architecture technique détaillée (composants, stack) ;
- schéma base de données ;
- paramétrage outil (Camunda, etc.) ;
- delivery plan ;
- publication Notion ;
- stratégie de recette.

---

## 6. Niveaux de BPMN recommandés

| Niveau | Usage | Exemple |
|--------|-------|---------|
| **Niveau 1 — Processus principal** | Cycle métier nominal MVP | Cycle SAV : demande → qualification → planification → intervention → clôture |
| **Niveau 2 — Exceptions métier** | Branches hors happy path | Doublon cross-canal, attente client, retard, clôture sans signature |
| **Niveau 3 — Intégrations / anomalies** | Flux techniques visibles métier | Erreurs sync CRM, reprise manuelle, gravité RG-I06 |
| **Niveau 4 — Exécutable Camunda** | Modèle déployable sur moteur | **Hors périmètre actuel** sauf décision explicite projet |

**Principe SFIA** : privilégier les **niveaux 1 à 3** pour la modélisation **fonctionnelle**. Le niveau 4 relève de l'exécution — hors périmètre méthode actuelle.

---

## 7. Rôles contributeurs

| Rôle | Contribution |
|------|--------------|
| **Business Analyst** | Processus métier, règles RG, statuts, exceptions, analyse Markdown |
| **Architecte** | Intégrations, sync, ADR candidates, cohérence archi fonctionnelle |
| **Product Owner** | Périmètre MVP, priorisation diagrammes, validation métier |
| **QA / Testeur** | Testabilité amont, ambiguïtés, garde-fous (sans produire de tests) |
| **UX/UI** | Alignement parcours ↔ écrans, lanes utilisateur |
| **RSSI** | Données sensibles, flux email, conformité si applicable |
| **Chef de projet** | Planification cycle BPMN, branche, jalons, clôture cycle |

---

## 8. Lien avec ADR

| Principe | Détail |
|----------|--------|
| BPMN **révèle** les décisions structurantes | Gateways, messages, statuts de clôture |
| BPMN **alimente** les ADR candidates | Liste à instruire dans `docs/adr/` |
| BPMN **ne crée pas** automatiquement une ADR | Instruction ADR = étape distincte |
| ADR **nécessaire** si décision durable, engageante ou structurante | Aligné gouvernance SFIA |

### Exemples (Interv360 et projets similaires)

- mapping durable des statuts ;
- synchronisation CRM simulée ;
- gestion erreurs d'intégration ;
- clôture sans signature ;
- géolocalisation future (hors MVP — sous-processus futur) ;
- IA assistive future (hors MVP — extension documentée).

---

## 9. Outillage

| Outil | Usage |
|-------|-------|
| **Camunda Modeler** (Desktop) | Création et édition des fichiers `.bpmn` — **outil recommandé** |
| **Git** | Versionnement — `.bpmn` = source de vérité |
| **Export SVG / PNG** | Lecture, revue, documentation |
| **Markdown** | Analyse (`process-analysis.md`), traçabilité, clôture cycle |

**Précisions :**

- la **stack Camunda complète** (Docker, Zeebe, etc.) **n'est pas nécessaire** pour modéliser ;
- elle devient pertinente pour **exécution / supervision** — hors périmètre méthode actuelle ;
- voir `bpmn-deliverables-standard.md` pour la structure projet.

---

## 10. Garde-fous

- [ ] BPMN ne produit pas de **backlog** ;
- [ ] BPMN ne produit pas de **user stories** ;
- [ ] BPMN ne produit pas de **cas de tests** ;
- [ ] BPMN ne produit pas de **scénarios de tests** ;
- [ ] BPMN ne produit pas de **stratégie de recette** ;
- [ ] BPMN ne produit pas de **code applicatif** ;
- [ ] BPMN ne lance pas de **delivery** ;
- [ ] BPMN ne **remplace pas** les ADR ;
- [ ] BPMN ne **remplace pas** l'architecture fonctionnelle détaillée ;
- [ ] BPMN ne déclenche pas de **publication Notion automatique** ;
- [ ] **Git** reste la source de vérité.

---

## 11. Application à Interv360

Interv360 sera le **premier projet d'application** de cette méthode — **uniquement après** validation de la méthode, des standards et des templates (Phase C).

**Précisions Phase B :**

- ne **pas créer** `projects/interv360/03-process/` dans cette phase ;
- la future phase projet (Phase D) devra **trancher** l'ordre **`03-process/`** vs **`03-design/`** (actuellement `03-design/` existe comme placeholder dans le README Interv360).

**Recommandation documentée** : `03-process/` (BPMN) **avant** design détaillé / maquettes — le processus alimente l'architecture fonctionnelle et les parcours UX.

---

## 12. Conclusion

BPMN devient une **capacité SFIA** formalisée :

- cette méthode cadre **quand et comment** modéliser ;
- les livrables attendus sont définis dans **`bpmn-deliverables-standard.md`** ;
- la checklist de lancement est dans **`bpmn-integration-checklist.md`** ;
- les **templates** et **prompts** BPMN seront créés en **Phase C**.

---

*Méthode de modélisation BPMN — SFIA — gouvernance produit.*
