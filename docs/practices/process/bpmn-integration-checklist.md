# SFIA — Checklist d'intégration BPMN

**Type** : Checklist méthodologique
**Statut** : Draft
**Domaine** : Process Modeling / BPMN
**Source** : `2026-06-28-bpmn-method-integration-audit.md`
**Méthode associée** : `bpmn-process-modeling-method.md`
**Standard associé** : `bpmn-deliverables-standard.md`

---

## 1. Objectif

Cette checklist doit être **utilisée avant d'ouvrir une phase BPMN projet** (création de `<project>/03-process/` et production de diagrammes).

Elle conditionne le **Go / No-Go** d'un cycle BPMN — pas de modélisation sans prérequis validés.

---

## 2. Prérequis projet

- [ ] **Cadrage métier** disponible (vision, parcours, objets métier) ;
- [ ] **Acteurs principaux** identifiés (rôles, responsabilités) ;
- [ ] **Objets métier** principaux identifiés ;
- [ ] **Règles métier prioritaires** identifiées (ou orientées macro) ;
- [ ] **Statuts ou étapes macro** identifiés ;
- [ ] **Exceptions** connues ou listées à clarifier ;
- [ ] **Clarifications MVP** réalisées si applicable (ex. cycle clarification Interv360) ;
- [ ] BPMN **jugé utile** pour le projet (cf. `bpmn-process-modeling-method.md` §3).

---

## 3. Prérequis méthodologiques

- [ ] **Méthode BPMN** disponible — `bpmn-process-modeling-method.md` ;
- [ ] **Standard de livrables** disponible — `bpmn-deliverables-standard.md` ;
- [ ] **Templates** disponibles **ou** jugés non nécessaires pour le cycle (Phase C) ;
- [ ] **Outil BPMN** identifié — Camunda Modeler recommandé ;
- [ ] **Stratégie Git** définie — branche dédiée, commits documentaires ;
- [ ] **Branche dédiée** prévue (ex. `process/<project>-bpmn-mvp`) ;
- [ ] **PR unique** prévue en fin de cycle (pas de PR intermédiaire par diagramme).

---

## 4. Prérequis documentaires

- [ ] **Emplacement projet** validé — `<project>/03-process/` ;
- [ ] **Nommage** des fichiers défini — préfixe projet, suffixes `main-process`, `exceptions`, `integration-errors` ;
- [ ] **Sources documentaires** identifiées (cadrage, clarification, RG, statuts) ;
- [ ] **Acteurs / lanes** proposés ;
- [ ] **Diagrammes attendus** définis (1 à 3 pour un MVP) ;
- [ ] **Exports attendus** définis (SVG recommandé).

---

## 5. Garde-fous avant lancement

- [ ] pas de **backlog** attendu en sortie du cycle BPMN ;
- [ ] pas de **user stories** attendues ;
- [ ] pas de **cas de tests** attendus ;
- [ ] pas de **scénarios de tests** attendus ;
- [ ] pas de **code** attendu ;
- [ ] pas de **delivery** ouvert ;
- [ ] pas de **publication Notion automatique** ;
- [ ] pas d'**appel API Notion** ;
- [ ] pas de modification **`.env`** ;
- [ ] pas d'affichage de **secret**.

---

## 6. Go / No-Go

| Critère | Go si | No-Go si |
|---------|-------|----------|
| Règles métier | Suffisamment claires au niveau macro | Trop de « À définir » bloquants |
| Acteurs | Identifiés et mappables en lanes | Acteurs flous ou non assignables |
| Processus | Multi-étapes, multi-acteurs | Écran isolé ou CRUD simple |
| Exceptions | Au moins une à représenter ou explicitement hors scope | Besoin non clarifié |
| Statuts | Liste macro ou mapping existant | Aucun statut ni étape |
| Outil | Camunda Modeler (ou équivalent) disponible | Aucun outil BPMN |
| Repository | Branche propre, méthode validée | Méthode / standard absents |
| Méthode SFIA | Phase B validée (méthode + standard + checklist) | Audit seul sans méthode |

**Décision** : cocher **Go** uniquement si tous les prérequis §2–§5 sont satisfaits.

---

## 7. Application Interv360

### Interv360 est candidat à BPMN car

- cycle **SAV multi-acteurs** (manager, technicien, dirigeant, systèmes simulés) ;
- **statuts stabilisés** (STAT-01 à STAT-08, `status-mapping.md`) ;
- **exceptions métier** (doublon RG-C04, attente client, retard, clôture sans signature) ;
- **sync CRM simulée** (ARB-MVP-04, clôture) ;
- **erreurs d'intégration** (RG-I06, reprise manuelle) ;
- **clôture sans signature** (RG-R02, RG-R05) ;
- cycle de **clarification** terminé (`2026-06-28-clarification-cycle-closure.md`).

### Diagrammes prévus (Phase D)

| Fichier | Contenu |
|---------|---------|
| `interv360-sav-mvp.bpmn` | Cycle SAV nominal MVP |
| `interv360-sav-exceptions.bpmn` | Exceptions métier |
| `interv360-integration-errors.bpmn` | Anomalies intégration |

### Point à trancher avant Phase D

| Question | Options | Recommandation SFIA |
|----------|---------|---------------------|
| Position `03-process/` vs `03-design/` | A) `03-process/` puis `03-design/` ; B) fusion ; C) renumerotation | **A** — BPMN avant design détaillé ; mettre à jour `projects/interv360/README.md` en Phase D |

**Phase B** : ne **pas créer** `projects/interv360/03-process/` ni diagrammes.

---

## 8. Conclusion

Cette checklist **conditionne l'ouverture** d'un cycle BPMN projet.

**Ordre recommandé avant Phase D Interv360 :**

1. Valider Phase B (méthode + standard + checklist) ;
2. Compléter Phase C (templates + prompts) si souhaité ;
3. Exécuter cette checklist sur une branche dédiée ;
4. Ouvrir `projects/interv360/03-process/` et produire les diagrammes.

---

*Checklist d'intégration BPMN — SFIA — gouvernance produit.*
