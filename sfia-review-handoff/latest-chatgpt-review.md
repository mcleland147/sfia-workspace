# ChatGPT Review Pack — CRM Assurance Courtage Operating Doctrine

**Niveau :** light
**Date / heure :** 2026-09-25 15:42:38 CEST (+0200)
**Cycle :** Cadrage (Cycle 1)
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Branche projet :** `docs/crm-assurance-courtage-operating-doctrine-01`
**Mono-cycle :** oui (écrasement total — pas d’append)

---

## 1. Objectif du cycle

Créer et versionner localement la doctrine opératoire propre au projet CRM Assurance Courtage :
`projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md`

Référence courte et stable : conduite avec SFIA v2.6, brief pédagogique Liora, construction no-code / low-code — sans modifier SFIA, sans choisir architecture ni stack.

---

## 2. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| Racine repo | `/Users/l/Projects/sfia-workspace` (`mcleland147/sfia-workspace`) |
| `git status --short` (pré-écriture) | Untracked seulement : `.cursor/*`, `.tmp-sfia-review/*` — **aucun** tracked modifié, **aucun** staged |
| Branche initiale | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD initial (avant sync) | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| `git fetch origin` | OK |
| `origin/main` observé | `e287f744479fc4b55c3e3082969deea7783996da` |
| Base attendue contrat | `e287f744479fc4b55c3e3082969deea7783996da` |
| Base drift | **NON** — alignée |
| Branche cible existante | **NON** |
| Sync main | `git checkout main` + `git merge --ff-only origin/main` → `e287f744…` |
| Note FF | Fichier untracked conflictuel `.tmp-sfia-review/chatgpt-review.md` déplacé temporairement hors repo pour permettre le FF (pas de reset/clean destructif du workspace) ; review pack réinitialisé ensuite |
| Branche créée | `docs/crm-assurance-courtage-operating-doctrine-01` depuis main = origin/main = base attendue |
| HEAD branche (avant commit livrable) | `e287f744479fc4b55c3e3082969deea7783996da` |
| origin/main reconfirmé | `e287f744479fc4b55c3e3082969deea7783996da` |
| Push branche projet | **NOT DONE — NOT AUTHORIZED** |

---

## 3. Notes de qualification confirmées

- cycle : **Cadrage**
- profil : **Standard**
- typologie : **DOC**
- CKC candidate consulté : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` (experimental cognitive guidance ; aucune autorité d’exécution)
- SFIA Studio Convergence Pre-check : **N/A**

---

## 4. Sources lues et rôle

| Source | Rôle |
|--------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | Contrat d’exécution v2.6, review pack, handoff |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage cycles / handoff |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` | Méthode cycles (Cadrage, profils, DOC) |
| `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` | CKC candidate guidance cadrage |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Rôles Morris / ChatGPT / Cursor / Git |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Garde-fous repository-first |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Knowledge layer ; Notion ≠ source de vérité |
| `method/sfia-fast-track/README.md` | Orientation Fast Track |
| `projects/README.md` | Convention projets |
| `projects/interv360/README.md` | Pattern `00-intake/` |
| `docs/foundation/sfia-engineering-principles.md` | Principes d’ingénierie (présent et lu) |
| `scripts/sfia/README.md` | Publisher Review Handoff |
| Brief pédagogique externe (faits fournis au contrat) | Source métier/pédagogique **non lue depuis Git** — faits de cadrage fournis par Morris/ChatGPT |

**Non modifiées.**

---

## 5. Git Review Index

| Élément | Valeur |
|---------|--------|
| Branche projet | `docs/crm-assurance-courtage-operating-doctrine-01` |
| Base main | `e287f744479fc4b55c3e3082969deea7783996da` |
| HEAD avant commit livrable | `e287f744479fc4b55c3e3082969deea7783996da` |
| HEAD après commit livrable | `f06484cd70b07e8803d605a9c210771c213d7f8a` |
| Commit local projet | `f06484cd70b07e8803d605a9c210771c213d7f8a` — `docs(crm-assurance-courtage): add project operating doctrine` |
| Push branche projet | NOT DONE — NOT AUTHORIZED |
| Review pack path | `.tmp-sfia-review/chatgpt-review.md` |
| Review pack staged | NON (interdit) |

---

## 6. Fichier créé

`projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md`

---

## 7. CONTENU COMPLET DU FICHIER CRÉÉ

```markdown
# CRM Assurance Courtage — Doctrine opératoire du projet

| Champ | Valeur |
|-------|--------|
| **Statut** | Project Working Doctrine / Doctrine opératoire projet |
| **Périmètre** | Spécifique au projet **CRM Assurance Courtage** |
| **Autorité** | Morris reste l’autorité de décision |
| **Méthode** | Conduite avec **SFIA v2.6** — ce document **ne remplace pas** SFIA v2.6 |
| **Baseline** | Ce document **ne modifie aucune** baseline SFIA |

---

## 1. Objet du document

Cette doctrine fixe comment le projet CRM Assurance Courtage est **conduit** : qui décide, qui qualifie, qui exécute le repository, comment les cycles SFIA s’articulent avec le brief pédagogique Liora, et comment le produit sera construit en no-code / low-code **après** qualification.

Elle gouverne la posture de travail du projet. Elle ne constitue ni une architecture, ni un choix de stack, ni une évolution de la méthode SFIA globale.

---

## 2. Hiérarchie des sources

Ordre de priorité pour toute exécution ou arbitrage :

1. **Git courant** — source de vérité technique et documentaire
2. **Décisions Morris** — gates, validations, autorisations d’action
3. **Brief CRM / exigences pédagogiques Liora** — ce qui doit être produit et dans quel ordre
4. **Méthode SFIA v2.6** — comment les cycles sont conduits
5. **Recherche / preuves projet** — éléments vérifiables produits dans le repo ou validés
6. **Hypothèses** — explicitement marquées comme telles ; jamais traitées comme décisions

En cas de tension : remonter à Morris. Ne pas résoudre par implication.

---

## 3. Vision du produit

CRM destiné à un **cabinet de courtage en assurance**, dans un cursus Product Builder No-code & IA.

Cycle métier général à couvrir (sans architecture) : prospect, client, contrats, devis, relances, rendez-vous, souscription, renouvellement, résiliation, pièces administratives, génération / envoi de documents, sinistres, pilotage commercial.

Principes métier : **proximité**, **personnalisation**, **transparence**.

Objectifs : réduire les tâches administratives, améliorer la traçabilité, renforcer la confiance et la rétention.

---

## 4. Séparation des trois couches

Ces trois couches ne se confondent jamais :

| Couche | Rôle |
|--------|------|
| **SFIA v2.6** | Comment les cycles sont conduits (cadrage, conception, delivery, gates, preuves, Git) |
| **Brief pédagogique Liora** | Ce qui doit être produit et dans quel ordre pédagogique (blocs, livrables amont, séquence) |
| **Stack no-code / low-code** | Comment le runtime CRM sera construit **après** qualification (hors décision actuelle) |

SFIA ne choisit pas l’outil runtime. Le brief ne remplace pas le routage SFIA. Les outils candidats ne dictent pas le cadrage.

---

## 5. Trajectoire du projet

| Phase | Contenu (synthèse) |
|-------|--------------------|
| **Phase 1 — Cadrage stratégique** | Contexte et besoins, veille, organisation, budget, vision de synthèse — **avant** choix définitif d’outil |
| **Phase 2 — Conception / développement no-code & IA** | Architecture globale, spécifications, UX/UI, données, développement fonctionnel, automatisations, sécurité, accès, protection des données, intégrations ; confirmation ou ajustement d’outil(s) en 2.1 |
| **Phase 3 — Déploiement** | Mise en service, accompagnement / support, amélioration continue |
| **Finalisation** | Consolidation des livrables et clôture pédagogique / projet |

La stack finale n’est **pas** décidée en Phase 1. Le choix initial éventuel en 2.1 reste à confirmer ou ajuster selon les spécifications.

---

## 6. Doctrine de construction produit

- **No-code / low-code first** pour le runtime CRM
- **Besoins avant outils** — comprendre le métier avant de figer une plateforme
- Réutiliser les **capacités natives** des plateformes retenues (une fois qualifiées)
- **Custom code** uniquement en extension bornée, justifiée et maintenable
- **Maintenabilité** et reprise possible par le commanditaire
- **Pas de stack forcée prématurément** — aucun outil du panel n’est adopté par défaut

Cursor exécute le travail repository et documentaire. Cursor **n’est pas** le runtime principal du CRM.

---

## 7. Écosystème d’outils candidats

Présence dans ce panel = **candidat**, **potentiel**, **à évaluer**, **à confirmer en 2.1**.
Cela ne constitue **ni** une décision d’architecture **ni** une obligation d’usage. La stack n’est **pas** décidée.

| Outil | Rôle candidat |
|-------|---------------|
| Bubble | Application / full-stack no-code potentiel |
| Softr | Frontend / portail potentiel |
| Power Apps | Application low-code potentielle |
| Airtable | Données / backend léger potentiel |
| HubSpot | CRM spécialisé potentiel |
| Make | Automatisation / intégration potentielle |
| n8n | Automatisation / orchestration potentielle |
| Power Automate | Automatisation dans écosystème Microsoft — à évaluer |
| Tally | Formulaires potentiels |
| Power BI | Reporting / BI potentiel |
| Voiceflow | Interface conversationnelle potentielle |
| Postman | Conception / test d’API et intégrations — à évaluer |
| Notion | Veille, collaboration, backlog ou documentation lorsque pertinent — **pas** source de vérité SFIA |
| Figma | Design system et maquettes **lorsque le brief l’autorise** — pas une obligation universelle |
| Miro | Modélisation et livrables amont lorsque autorisé par le brief |
| Shopify | **Aucun rôle actuellement identifié** ; seulement si un besoin e-commerce futur le justifie |

Livrables amont (analyse métier, personas, parcours) : PPTX et/ou Miro selon les cas prévus par le brief.

---

## 8. Rôles de gouvernance et d’exécution

### Morris
Intention, arbitrage, décisions, gates, validation des choix structurants.

### ChatGPT
Qualification, analyse, challenge, routage documentaire, préparation des prompts / contrats Cursor, analyse du review handoff, recommandation.
Une recommandation ChatGPT **n’est jamais** une décision.

### Cursor
Exécutant repository contrôlé : documents, rapports, matrices, diagrammes, artefacts ; scripts ou support API borné si un cycle l’autorise ; Local Git Truth Check ; validations ; review pack.
Aucune décision structurante autonome. Cursor n’est pas le runtime principal du CRM.

### Git
Source de vérité technique et documentaire ; historique et traçabilité.

### Plateformes no-code / low-code
Runtime effectif du futur produit, **selon architecture décidée ultérieurement**.

---

## 9. Gates Morris

Décisions futures **séparées** — le GO du présent cycle documentaire **ne valide aucune** de ces décisions :

- architecture structurante
- stack runtime définitive
- persistance / architecture de données structurante
- engagement financier majeur
- intégration externe sensible
- exception à la doctrine no-code / low-code-first
- push projet
- PR
- merge
- publication Notion ou autre système externe

---

## 10. Preuves et readiness

- Pas de **READY** sans preuve adaptée au cycle
- Hypothèse ≠ décision
- Candidat ≠ adopté
- Tests, captures et documents doivent soutenir les claims correspondants
- Aucune assertion runtime ne peut être dérivée d’un cycle purement documentaire

---

## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Étape active | **1.1 Analyse des besoins métiers** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Produire une compréhension métier suffisante avant user discovery **1.2** |

---

## 12. Règle d’évolution de la doctrine projet

Ce document peut évoluer avec les décisions Morris et les preuves projet. Toute évolution doit être **traçable dans Git**.

Il ne doit jamais promouvoir implicitement une hypothèse en décision, ni un candidat en stack adoptée, ni une recommandation en gate validé.

---

## Clôture

Morris décide.
ChatGPT qualifie, structure et challenge.
Cursor exécute le travail repository.
Les outils no-code / low-code implémentent le produit.
Git trace.
```

---

## 8. Validations

| Contrôle | Résultat |
|----------|----------|
| Titre / statut clairs | PASS |
| Spécifique CRM Assurance Courtage | PASS |
| Ne remplace pas SFIA v2.6 / ne modifie pas baseline | PASS |
| Distinction SFIA / Liora / runtime | PASS |
| Trajectoire Phase 1–3 + finalisation | PASS |
| Rôles Morris / ChatGPT / Cursor / Git / outils | PASS |
| Panel = candidats uniquement | PASS |
| Aucun choix de stack | PASS |
| Aucun choix d’architecture | PASS |
| Figma borné aux usages brief | PASS |
| Notion ≠ source de vérité | PASS |
| Cursor ≠ runtime CRM | PASS |
| État actuel = 1.1 | PASS |
| Règle d’évolution | PASS |
| Un seul fichier projet versionné | PASS (après stage/commit) |
| Aucun fichier protégé touché | PASS |
| `git diff --check` (working / staged) | PASS |
| Fake/Real | N/A — preuve documentaire repository uniquement |

---

## 9. Garde-fous

- Aucune modification `method/**`, `prompts/**`, `scripts/**`, `docs/foundation/**`, autres projets
- Aucun push branche projet / PR / merge
- Aucune action Notion réelle
- Aucune assertion runtime
- Review pack hors commit
- Handoff via `scripts/sfia/publish-review-handoff.sh` uniquement (path canonique)

---

## 10. Réserves

- Brief pédagogique externe non présent dans Git ; faits utilisés = ceux fournis au contrat Cursor (ne pas les présenter comme lus depuis Git).
- Doctrine projet = working doctrine ; n’ouvre pas les livrables 1.1 métier (analyse besoins, personas, etc.).
- Panel outils = univers candidat ; 2.1 confirmera ou ajustera.

---

## 11. Décisions Morris

**GO déjà utilisé :** exécution cycle documentaire, branche locale, document, commit local si conforme, review pack, handoff L3 borné.

**Encore requises (futures, hors ce cycle) :** architecture, stack runtime, données structurantes, engagement financier, intégrations sensibles, exception no-code-first, push projet, PR, merge, publication Notion/externe.

---

## 12. Verdict review pack

**complete** — contenu complet du fichier créé inclus ; mono-cycle ; niveau light ; synthesis-only = no.
