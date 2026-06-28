# SFIA — Audit d'intégration BPMN dans la méthodologie

**Type** : Audit méthodologique  
**Statut** : Draft  
**Phase** : Phase A — Audit BPMN  
**Objectif** : Identifier les impacts de l'introduction de BPMN dans le processus SFIA  
**Périmètre** : Méthode, standards, templates, prompts, gouvernance, projets  
**Branche** : `method/bpmn-integration-audit`

---

## 1. Objectif de l'audit

Cet audit vise à intégrer **BPMN** comme une **capacité méthodologique SFIA réutilisable**, et non comme un simple livrable isolé pour le projet Interv360.

**Précisions :**

- BPMN doit être **positionné** dans le processus SFIA (trajectoire, garde-fous, livrables) ;
- les livrables BPMN doivent être **standardisés** (structure, formats, outillage) ;
- les **garde-fous** doivent être définis avant toute modélisation projet ;
- l'application Interv360 ne doit intervenir **qu'après validation** de la méthode (Phase D) ;
- cet audit **ne produit pas** de diagramme BPMN, de template BPMN ni de prompt BPMN.

---

## 2. Pourquoi intégrer BPMN dans SFIA

BPMN permet de faire le pont entre les livrables déjà produits ou prévus dans le cycle SFIA :

| Domaine amont | Apport BPMN |
|---------------|-------------|
| Cadrage métier | Parcours, acteurs, objets, règles RG-* |
| Clarification MVP | Décisions UX, statuts, clôture, exclusions |
| Règles métier | RG-C04, RG-C05, RG-I05, RG-I06, RG-R02, RG-R05 |
| Statuts | STAT-01 à STAT-08, transitions macro |
| Exceptions | Doublons, attente client, anomalies intégration |
| ADR candidates | Décisions structurantes révélées par les flux |
| Architecture fonctionnelle | Préparation des écrans, parcours, intégrations |
| UX / écrans | Alignement parcours utilisateur ↔ processus métier |

BPMN sert à **représenter les processus métier et les flux** — pas à produire du backlog, des user stories, des tests ou du code applicatif.

**Contexte Interv360** : le cycle de clarification (`02-architecture/`) a stabilisé le MVP ; BPMN peut formaliser visuellement le cycle SAV avant l'architecture fonctionnelle détaillée et les maquettes.

---

## 3. Positionnement recommandé dans la trajectoire SFIA

### Trajectoire cible

```
01-cadrage
  → 02-architecture / clarification
    → 03-process / BPMN
      → ADR structurantes
        → architecture fonctionnelle détaillée
          → UX / écrans / parcours (03-design)
            → delivery (04-delivery) — hors périmètre BPMN
```

### Règles de positionnement

| Règle | Explication |
|-------|-------------|
| BPMN **après** clarification / QA | Les ambiguïtés macro doivent être levées (`qa-transverse-analysis.md`, cycle clarification) |
| BPMN **avant** architecture fonctionnelle détaillée | Les flux guident les écrans et intégrations sans les remplacer |
| BPMN **peut alimenter** des ADR candidates | Ex. mapping statuts, sync CRM, erreurs intégration — sans créer l'ADR automatiquement |
| BPMN **ne remplace pas** les ADR | Une ADR reste nécessaire pour une décision durable et structurante |
| BPMN **ne remplace pas** le brief UX | Les parcours UX et les processus BPMN se croisent mais ne se substituent pas |

### Point d'attention — numérotation Interv360

Le projet Interv360 utilise actuellement `03-design/` pour la phase design (`projects/interv360/README.md`). La trajectoire BPMN recommande `03-process/` pour la modélisation processus.

**Recommandation** : soit renommer / scinder (`03-process/` puis `03-design/` ou `04-design/`), soit documenter explicitement que `03-process/` est une **sous-phase** de la trajectoire avant design — à trancher en Phase B.

---

## 4. Zones du référentiel à intégrer ou vérifier

| Zone | Chemin potentiel | Action recommandée | Priorité |
|------|------------------|-------------------|----------|
| **Documentation méthode** | `docs/methods/process/` | Créer méthode BPMN (`bpmn-process-modeling-method.md`) | Haute |
| **Standards de livrables** | `docs/methods/process/bpmn-deliverables-standard.md` | Définir livrables standard d'un cycle BPMN | Haute |
| **Checklist d'intégration** | `docs/methods/process/bpmn-integration-checklist.md` | Checklist avant lancement BPMN projet | Haute |
| **Templates** | `docs/templates/process/` | Créer templates BPMN (scope, analyse, clôture cycle) — `docs/templates/` existe, vide hors README | Haute |
| **Templates racine** | `templates/` (racine) | Non présent — **ne pas dupliquer** ; utiliser `docs/templates/` (cohérent avec `methods-structure-check.md`) | — |
| **Prompt Library** | `prompts/process/` ou `prompts/bpmn/` | Créer famille de prompts BPMN (`bpmn-prompt-family.md`) | Moyenne |
| **Gouvernance / ADR** | `docs/adr/`, `projects/*/02-architecture/` | Documenter lien BPMN → ADR candidates ; enrichir `architect-method.md` | Haute |
| **Standards SFIA** | `docs/standards/` | Éventuel standard BPMN transverse si besoin (après méthode) | Moyenne |
| **Index racine** | `README.md` | Mentionner capacité BPMN dans structure / trajectoire | Moyenne |
| **Index documentation** | `docs/README.md` | Ajouter `methods/process/` dans sous-dossiers | Moyenne |
| **Index méthodes** | `docs/methods/README.md` | Ajouter ligne `process/` dans tableau sous-dossiers | Haute |
| **Index templates** | `docs/templates/README.md` | Référencer sous-dossier `process/` | Moyenne |
| **Index prompts** | `prompts/README.md` | Ajouter `process/` ou `bpmn/` dans structure | Moyenne |
| **Méthodes rôle** | `docs/methods/roles/` | Enrichir BA, architecte, PO selon usage BPMN | Moyenne |
| **Catalogue prompts** | `prompts/prompt-catalog.md` | Enregistrer famille PROMPT-BPMN-* | Moyenne |
| **Application Interv360** | `projects/interv360/03-process/` | À créer **uniquement après** validation méthode (Phase D) | Future |
| **Phase architecture Interv360** | `projects/interv360/02-architecture/README.md` | Référencer BPMN comme étape post-clarification | Moyenne |

---

## 5. Livrables méthodologiques recommandés

*Ces fichiers ne sont **pas créés** en Phase A — phases B / C.*

| Livrable | Chemin recommandé | Rôle | Phase |
|----------|-------------------|------|-------|
| Méthode de modélisation BPMN | `docs/methods/process/bpmn-process-modeling-method.md` | Quand, comment, qui, garde-fous, outillage | B |
| Standard des livrables BPMN | `docs/methods/process/bpmn-deliverables-standard.md` | Formats, nommage, structure projet | B |
| Checklist d'intégration BPMN | `docs/methods/process/bpmn-integration-checklist.md` | Prérequis avant cycle BPMN projet | B |
| Template scope processus | `docs/templates/process/bpmn-process-scope-template.md` | Périmètre diagrammes, acteurs, hypothèses | C |
| Template analyse processus | `docs/templates/process/bpmn-process-analysis-template.md` | Traçabilité RG, statuts, exceptions | C |
| Template clôture cycle BPMN | `docs/templates/process/bpmn-cycle-closure-template.md` | Synthèse cycle, suites ADR / archi fonctionnelle | C |
| Famille de prompts BPMN | `prompts/bpmn/bpmn-prompt-family.md` | Prompts réutilisables modélisation / revue | C |
| Audit intégration (présent) | `docs/methods/process/bpmn-method-integration-audit.md` | Phase A — identification impacts | **A** |

---

## 6. Standards de livrables BPMN recommandés

### Structure cible par projet

```
<project>/03-process/
├── README.md
├── process-scope.md
├── bpmn/
│   ├── <project>-main-process.bpmn
│   ├── <project>-exceptions.bpmn
│   └── <project>-integration-errors.bpmn
├── exports/
│   ├── <project>-main-process.svg
│   ├── <project>-exceptions.svg
│   └── <project>-integration-errors.svg
├── process-analysis.md
└── process-cycle-closure.md
```

### Règles de format

| Format | Rôle |
|--------|------|
| `.bpmn` | **Source de vérité** versionnée dans Git |
| `.svg` / `.png` | Export de lecture (revue, documentation) |
| `.md` | Analyse, traçabilité, liens RG / statuts / ADR |

### Outillage

| Outil | Usage |
|-------|-------|
| **Camunda Modeler** (Desktop) | Édition BPMN recommandée — suffisant pour modéliser |
| **Stack Camunda complète** | Non nécessaire pour la Phase D de modélisation seule ; utile pour exécution / test plus tard (hors périmètre Phase A–C) |

---

## 7. Garde-fous méthodologiques

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
- [ ] **Git** reste la source de vérité (`.bpmn` + `.md` versionnés).

---

## 8. Lien BPMN / ADR

| Principe | Détail |
|----------|--------|
| BPMN peut **révéler** des décisions structurantes | Flux de clôture, sync, gestion erreurs, statuts |
| BPMN peut **alimenter** une liste d'ADR candidates | Liste issue du cycle clarification Interv360 |
| BPMN **ne crée pas** automatiquement une ADR | Instruction ADR reste une étape distincte (`docs/adr/`) |
| ADR nécessaire si décision **durable, structurante ou engageante** | Aligné `02-architecture/README.md` Interv360 |

### Exemples ADR candidates (Interv360 — post-clarification)

| Sujet | Lien BPMN potentiel |
|-------|---------------------|
| Mapping durable des statuts | Pools / lanes, événements de changement d'état |
| Synchronisation CRM simulée | Message flows, tâches de sync post-clôture |
| Gestion erreurs d'intégration | Branches d'exception, événements d'erreur |
| Clôture sans signature | Gateway décisionnel signature / motif |
| Future géolocalisation | Extension hors MVP — sous-processus futur |
| Future IA assistive | Extension hors MVP — tâches assistées futures |

---

## 9. Impacts spécifiques pour Interv360

Une fois la méthode validée (fin Phase B / C), Interv360 pourra intégrer :

```
projects/interv360/03-process/
```

### Diagrammes prévus (Phase D — non créés en Phase A)

| Fichier BPMN | Contenu attendu |
|--------------|-----------------|
| `interv360-sav-mvp.bpmn` | Cycle SAV MVP principal (qualification → clôture) |
| `interv360-sav-exceptions.bpmn` | Exceptions métier (attente client, doublon, retard) |
| `interv360-integration-errors.bpmn` | Flux erreurs intégration, reprise manuelle (RG-I06) |

### Sources documentaires pour Phase D

| Source | Apport |
|--------|--------|
| `02-architecture/clarification-workshop-minutes.md` | Décisions atelier simulé |
| `02-architecture/mvp-clarifications.md` | Consolidation MVP |
| `02-architecture/rules-rg-prioritization.md` | Règles RG prioritaires |
| `02-architecture/status-mapping.md` | Statuts et transitions |
| `02-architecture/closure-without-signature.md` | Clôture, signature optionnelle |
| `02-architecture/geo-ai-arbitration.md` | Hors périmètre diagrammes MVP |
| `02-architecture/clarification-cycle-closure.md` | Clôture cycle clarification |
| `01-cadrage/business-framing.md` | Parcours SAV §6, objets métier |

**Précisions :**

- ne **pas créer** `03-process/` ni fichiers BPMN dans cette Phase A ;
- Interv360 sera le **premier projet d'application** de la capacité BPMN SFIA ;
- la Phase D Interv360 devra être réalisée sur une **branche dédiée** (ex. `process/interv360-bpmn-mvp`).

---

## 10. Fichiers à modifier plus tard

*Existence vérifiée dans le dépôt au 2026-06-28.*

| Fichier | Existe ? | Action future | Priorité |
|---------|----------|---------------|----------|
| `README.md` | Oui | Mentionner `docs/methods/process/` et trajectoire BPMN dans structure | Moyenne |
| `docs/README.md` | Oui | Ajouter `methods/process/` dans tableau sous-dossiers | Moyenne |
| `docs/methods/README.md` | Oui | Ajouter ligne **process/** — méthodes BPMN | Haute |
| `docs/templates/README.md` | Oui (seul README, pas de templates fichiers) | Référencer `process/` et templates BPMN Phase C | Moyenne |
| `prompts/README.md` | Oui | Ajouter `bpmn/` ou `process/` dans structure | Moyenne |
| `prompts/prompt-catalog.md` | Oui | Enregistrer famille PROMPT-BPMN-* | Moyenne |
| `projects/interv360/README.md` | Oui | Mettre à jour phases (02-architecture avancée, 03-process à venir) | Haute |
| `projects/interv360/02-architecture/README.md` | Oui | Référencer BPMN post-clarification, lien ADR | Moyenne |
| `projects/README.md` | Oui | Mettre à jour phase Interv360 si nécessaire | Basse |
| `docs/adr/README.md` | Oui | Mentionner alimentation par analyse BPMN | Moyenne |
| `docs/standards/README.md` | Oui | Éventuel standard BPMN si créé | Basse |
| `docs/methods/roles/README.md` | Oui | Référencer méthode process / BPMN | Moyenne |
| `docs/methods/roles/business-analyst-method.md` | Oui | Enrichir posture BPMN / process | Moyenne |
| `docs/methods/roles/architect-method.md` | Oui | Lien BPMN → ADR, archi fonctionnelle | Moyenne |
| `docs/methods/methods-structure-check.md` | Oui | Ajouter `methods/process/` dans arborescence cible | Moyenne |
| `templates/` (racine) | **Non** | Ne pas créer en doublon — utiliser `docs/templates/` | — |
| `standards/` (racine) | **Non** | Idem — utiliser `docs/standards/` | — |
| `projects/interv360/03-process/` | **Non** | Créer en Phase D uniquement | Future |
| `projects/interv360/03-design/` | Oui (README seul) | Clarifier ordre vs `03-process/` | Haute |

### État actuel du référentiel (audit structure)

**Méthodes** (`docs/methods/`) :

- `README.md`, `methods-structure-check.md`
- `roles/` — 6 Role Methods (PO, BA, architecte, PM, RSSI, UX/UI, QA)

**Prompts** (`prompts/`) :

- `README.md`, `prompt-catalog.md`
- `architecture/`, `security/`, `qa/` — pas encore de dossier `bpmn/` ni `process/`

**Templates** (`docs/templates/`) :

- `README.md` uniquement — aucun fichier template BPMN

**Projets Interv360** :

- `00-intake/`, `01-cadrage/`, `02-architecture/` — riches (clarification cycle mergé)
- `03-design/` — placeholder
- Pas de `03-process/`

---

## 11. Recommandation de phasage

| Phase | Intitulé | Contenu | Statut |
|-------|----------|---------|--------|
| **A** | Audit méthodologique BPMN | Identification impacts, garde-fous, trajectoire — **présent document** | En cours |
| **B** | Intégration méthodologique BPMN | `bpmn-process-modeling-method.md`, `bpmn-deliverables-standard.md`, `bpmn-integration-checklist.md` ; mises à jour README méthodes | À venir |
| **C** | Standards / templates / prompts BPMN | Templates `docs/templates/process/`, `prompts/bpmn/` | À venir |
| **D** | Application Interv360 BPMN | `projects/interv360/03-process/`, diagrammes `.bpmn` | À venir |
| **E** | PR / validation | Revue, merge méthode + éventuellement projet | À venir |

**Règle** : aucune Phase D avant validation explicite des livrables Phase B (et C si templates/prompts requis).

---

## 12. Conclusion

- BPMN doit être intégré comme **capacité SFIA réutilisable**, pas comme un livrable ponctuel Interv360.
- L'intégration doit être faite **avant** les travaux de modélisation projet (Phases B → C → validation → D).
- Le référentiel doit être mis à jour **proprement** : `docs/methods/process/` comme point d'entrée méthode, puis templates, prompts, index.
- Les phases suivantes créeront la **méthode**, les **standards** et les **prompts** avant toute création de `projects/interv360/03-process/`.

**Prochaine action recommandée** : valider cet audit, puis passer à la **Phase B — intégration méthodologique BPMN** sur la branche `method/bpmn-integration-audit` (ou branche dédiée Phase B).

---

*Audit d'intégration BPMN — SFIA — Phase A — gouvernance produit.*
