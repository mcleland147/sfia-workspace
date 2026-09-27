# ChatGPT Review Pack — FULL

## Meta

- **Date / heure / fuseau :** 2026-09-27 23:41:27 CEST
- **Projet :** CRM Assurance Courtage
- **Cycle :** Cadrage projet — 1.2 Analyse des besoins utilisateurs / user discovery
- **Profil :** Standard
- **Typologie :** DOC
- **Baseline :** SFIA v2.6
- **Workspace :** `/Users/l/Projects/sfia-worktree-crm-assurance`
- **Branche créée :** `docs/crm-assurance-courtage-1-2-user-discovery-01`
- **HEAD initial (detached main) :** `b7fdf712073257f9fc64c294ac7e68af2cd64464`
- **HEAD final :** `bfd7fe5516971e6cd06bad549aeb5886e6b07557`
- **origin/main :** `b7fdf712073257f9fc64c294ac7e68af2cd64464`
- **Fake / Real :** N/A
- **Niveau :** FULL
- **Push projet :** NOT DONE
- **PR :** NOT CREATED

---

## Git Truth initial

- detached HEAD sur origin/main = `b7fdf712…` — PASS
- dirt : review pack temporaire uniquement (restauré avant création de branche) — PASS
- branche 1.2 absente local/remote avant création — PASS
- fichier 1.2 absent — PASS
- documents CRM 1.1 + doctrine présents sur main — PASS

---

## Sources Git lues

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
4. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` (candidate, guidance only)
5. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
7. doctrine CRM + 1.1 validé
8. `scripts/sfia/README.md`

### Contrat pédagogique appliqué

- 1.2.1 : 2–3 profils types / personas (proto-personas de cadrage)
- 1.2.2/1.2.3 : Experience Map / CJM optionnels — NOT ADOPTED
- aucun entretien / observation / verbatim réel fourni → aucune invention

---

## Décision Morris

- **1.2 OPENED** — 2026-09-27
- **1.1 reste VALIDATED** — 2026-09-27
- Personas = CANDIDATE (non VALIDATED)
- Architecture / Stack = NOT DECIDED
- 1.3 = NOT OPENED
- Miro = non modifié

---

## Doctrine §11 AVANT (complet)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
| Étape suivante | **1.2 Analyse des besoins utilisateurs — NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Attendre le **GO Morris** pour ouvrir le 1.2 |

---
```

---

## Doctrine §11 APRÈS (complet)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Produire et faire valider l’analyse 1.2 et ses proto-personas avant toute matérialisation visuelle finale ou conception produit |

---
```

---

## Contenu COMPLET du fichier 1.2

````markdown
# CRM Assurance Courtage — 1.2 Analyse des besoins utilisateurs

| Champ | Valeur |
|-------|--------|
| **Statut** | WORKING ANALYSIS — **1.2 OPENED** par décision Morris du 2026-09-27 |
| **Étape** | 1.2 |
| **Source métier principale** | Brief pédagogique CRM + 1.1 validé |
| **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
| **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
| **1.1** | VALIDATED (2026-09-27) — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
| **Evidence user discovery** | BRIEF-DERIVED PROTO-PERSONAS — NO FIELD INTERVIEWS PROVIDED |
| **Personas** | CANDIDATE — à valider Morris |
| **Experience Map** | OPTIONAL / NOT ADOPTED |
| **Customer Journey Map** | OPTIONAL / NOT ADOPTED |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |

**Décision Morris :** 1.2 — Analyse des besoins utilisateurs = **OPENED**
**Date :** 2026-09-27

Cette ouverture autorise le travail de cadrage 1.2. Elle ne signifie **pas** que le 1.2, les personas, une Experience Map ou une Customer Journey Map sont VALIDATED / ADOPTED.

---

## 1. Objectif du 1.2

Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et préparer des **proto-personas de cadrage** exploitables pour une future matérialisation (PPTX / Miro) après revue Morris.

Ce cycle doit :

- rendre explicites les hypothèses faute d’entretiens réels ;
- distinguer faits sourcés, inférences et informations non disponibles ;
- ne pas transformer l’analyse en spécification fonctionnelle, backlog ou architecture.

**Ce cycle ne constitue PAS une user research empirique.**

---

## 2. Niveau de preuve et méthode

| Catégorie | Signification |
|-----------|---------------|
| **EXPLICITE DANS LE BRIEF** | Information affirmée directement par le brief (ou reprise telle quelle du 1.1 validé) |
| **INFÉRENCE DE CADRAGE** | Déduction raisonnable à partir du brief, clairement marquée |
| **NON RENSEIGNÉ** | Information non fournie — **non inventée** |

Aucun entretien, questionnaire ou observation terrain n’est fourni.
Aucun verbatim réel n’est disponible.

Les profils produits sont donc des **PROTO-PERSONAS DE CADRAGE**. Ils devront rester présentés comme tels tant qu’aucune recherche utilisateur réelle ne les a enrichis.

---

## 3. Utilisateurs et parties prenantes

| Profil | Qualification | Preuves (sources) |
|--------|---------------|-------------------|
| **Courtier** | Utilisateur métier interne principal clairement explicite | Suit le cycle de vie client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; activités documentaires ; gestion de sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF** |
| **Prospect / futur client** | Population externe du parcours commercial. Le statut d’utilisateur direct de **toutes** les interfaces du futur CRM n’est **pas** démontré | Première prise de contact ; devis ; rendez-vous ; compréhension du besoin ; proposition ; souscription ; prise de rendez-vous directe — **EXPLICITE DANS LE BRIEF** |
| **Client** | Population externe concernée par contrats, suivi et transparence | Contrats ; historique des échanges ; historique des contrats ; transparence ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |
| **Directeur du cabinet** | Partie prenante décisionnaire / sponsor métier. **Ne pas** le transformer automatiquement en persona utilisateur final | Porte les objectifs business ; souhaite différenciation ; demande de performance commerciale / KPIs dans le scénario — **EXPLICITE DANS LE BRIEF**. L’usage personnel du dashboard par le directeur n’est **pas** explicitement démontré — **NON RENSEIGNÉ** |

---

## 4. Choix des proto-personas candidats

Trois profils candidats sont proposés pour satisfaire la plage pédagogique **2–3 profils** exigée par le brief (1.2.1). Ils ne deviennent **pas** « personas validés » dans ce cycle.

| Candidat | Profil | Statut |
|----------|--------|--------|
| **A** | Courtier | PRIMARY USER CANDIDATE |
| **B** | Client assuré | EXTERNAL USER / BENEFICIARY CANDIDATE |
| **C** | Prospect / futur client | EXTERNAL USER / BENEFICIARY CANDIDATE |

Aucun de ces profils n’est marqué ADOPTED, VALIDATED ou FINAL.

---

## 5. Proto-persona A — Courtier

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Courtier du cabinet | EXPLICITE DANS LE BRIEF |
| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE DANS LE BRIEF |
| **Objectifs supportés** | Suivre le cycle de vie client ; centraliser le suivi prospects / clients / contrats ; gérer devis, relances et rendez-vous ; accompagner la souscription ; suivre renouvellements / résiliations ; gérer pièces et documents ; suivre les sinistres ; améliorer traçabilité et réactivité | EXPLICITE DANS LE BRIEF (objectifs / capacités du scénario) |
| **Besoins déduits** | Retrouver l’information de suivi utile ; conserver une vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique nécessaire à la relation personnalisée | **INFÉRENCE DE CADRAGE À PARTIR DES OBJECTIFS DU BRIEF** |

**Non renseigné (non inventé) :** outil actuellement utilisé ; temps perdu ; nombre de dossiers ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.

**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.

---

## 6. Proto-persona B — Client assuré

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Client disposant d’un ou plusieurs contrats | EXPLICITE DANS LE BRIEF (population « clients » ; contrats) |
| **Objectifs / attentes soutenus** | Bénéficier d’une relation de proximité ; recevoir une offre personnalisée selon profil / besoin discuté ; accéder avec transparence à l’historique des échanges et contrats ; disposer d’un suivi autour du contrat ; être concerné par renouvellement, résiliation ou sinistre selon le scénario | EXPLICITE DANS LE BRIEF |
| **Besoins déduits** | Comprendre où en est son suivi ; retrouver les informations utiles liées à ses contrats et échanges ; bénéficier d’une continuité relationnelle | **INFÉRENCE DE CADRAGE** |

**Non renseigné (non inventé) :** fréquence de connexion ; appareil utilisé ; âge ; profession ; revenus ; niveau digital ; type exact de contrat détenu ; composition familiale.

**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
Le client attend une relation de proximité et une transparence sur l’historique de ses échanges et contrats.

---

## 7. Proto-persona C — Prospect / futur client

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Personne entrant dans le parcours avant souscription | EXPLICITE DANS LE BRIEF |
| **Objectifs / attentes supportés** | Prendre contact ; obtenir un devis ; prendre / participer à un rendez-vous ; exprimer ses besoins ; recevoir une proposition personnalisée ; avancer vers une souscription | EXPLICITE DANS LE BRIEF |
| **Attentes liées aux axes du brief** | Proximité ; réactivité ; personnalisation ; transparence | EXPLICITE DANS LE BRIEF (axes / intention) |

**Réserve obligatoire :** le brief ne démontre **pas** que le prospect utilise directement toutes les interfaces du futur CRM. — **NON RENSEIGNÉ** pour l’usage interface complet.

**Non renseigné (non inventé) :** comportement d’achat ; comparateurs utilisés ; budget ; canal préféré hors prise de rendez-vous directe citée ; âge ; profession ; niveau d’urgence ; nombre d’assureurs comparés.

**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
Le prospect cherche une entrée en relation simple, une proposition personnalisée et une progression claire vers la souscription.

---

## 8. Synthèse des besoins par profil

| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau de preuve |
|--------|-----------|----------|------------------|------------------|
| Courtier | Suivi cycle client ; centralisation ; devis / RDV / souscription ; documents ; sinistres ; traçabilité / réactivité | Relation personnalisée soutenue par l’historique | Vision cohérente du dossier ; charge admin. réduite | EXPLICIT BRIEF + INFERENCE |
| Client | Suivi contrats ; transparence ; continuité | Proximité ; personnalisation ; transparence | Comprendre l’état du suivi ; retrouver infos utiles | EXPLICIT BRIEF + INFERENCE |
| Prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation simple ; progression claire | EXPLICIT BRIEF + INFERENCE |
| Directeur | Objectifs business / différenciation / KPIs scénario | Performance commerciale | Non traité comme persona utilisateur final | EXPLICIT BRIEF ; usage dashboard = NOT PROVIDED |

Aucune user story. Aucun backlog fonctionnel.

---

## 9. Difficultés / pain points

Aucune observation AS-IS utilisateur n’est disponible.
Aucune affirmation du type « les courtiers se plaignent de… », « les clients rencontrent actuellement… » ou « les utilisateurs disent… » n’est formulée.

### Enjeux utilisateurs déduits du brief

**Courtier :** charge administrative à réduire ; traçabilité à améliorer ; besoin de réactivité ; continuité du suivi.
**Client :** besoin de transparence ; besoin de confiance ; continuité relationnelle.
**Prospect :** simplicité d’entrée en relation ; réactivité ; personnalisation du parcours.

**Qualification :** DÉDUITS DU BRIEF — NON OBSERVÉS SUR LE TERRAIN.

---

## 10. Inconnues et limites

Limites qui affectent réellement la lecture du 1.2 :

- aucun entretien ou questionnaire réel ;
- aucune observation terrain ;
- aucune donnée démographique ;
- aucune information fiable sur les outils actuels ;
- usage direct du futur CRM par le prospect à confirmer au stade de conception ;
- usage personnel du tableau de bord par le directeur non démontré ;
- frustrations actuelles non observées.

---

## 11. Parcours utilisateur optionnel

| Livrable pédagogique | Exigence brief | Qualification dans ce cycle |
|----------------------|----------------|-----------------------------|
| Experience Map | Facultative (1.2.2 / 1.2.3) | **CANDIDATE RECOMMENDATION — NOT ADOPTED** |
| Customer Journey Map | Facultative (1.2.2 / 1.2.3) | **OPTIONAL / NOT ADOPTED** |

**Justification analytique (recommandation méthodologique — PAS une décision Morris) :**
Le projet décrit un parcours **cible** sans produit existant observé. Une Experience Map centrée sur l’expérience du Courtier (ou sur deux profils complémentaires) paraît méthodologiquement plus cohérente qu’une Customer Journey Map centrée sur les interactions avec un produit ou service **existant**.

Aucune map n’est créée dans ce cycle.

---

## 12. Miro

Aucune matérialisation Miro n’est réalisée dans ce premier cycle 1.2.

Trajectoire proposée :

1. validation Morris du contenu des proto-personas ;
2. cycle Miro natif dédié ;
3. création de fiches personas éditables ;
4. éventuelle Experience Map seulement après décision Morris.

Miro n’est donc **pas** modifié.

---

## 13. Synthèse 1.2

| Point | État |
|-------|------|
| **1.2** | OPENED — WORKING ANALYSIS |
| Courtier | PROTO-PERSONA CANDIDATE |
| Client | PROTO-PERSONA CANDIDATE |
| Prospect | PROTO-PERSONA CANDIDATE |
| Directeur | STAKEHOLDER — NOT PERSONA BY DEFAULT |
| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
| Experience Map | CANDIDATE / NOT ADOPTED |
| Customer Journey Map | OPTIONAL / NOT ADOPTED |
| Miro | NOT MATERIALIZED |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.3** | **NOT OPENED** |

````

---

## Distinction faits / inférences / non renseigné

- Grille §2 : EXPLICITE DANS LE BRIEF / INFÉRENCE DE CADRAGE / NON RENSEIGNÉ
- Proto-personas marqués BRIEF-DERIVED — NO FIELD INTERVIEWS
- Besoins courtier/client/prospect explicitement qualifiés INFÉRENCE lorsque déduits
- Phrases de synthèse : « reformulation analytique — non issue d’un entretien »

---

## Personas candidats

1. Courtier — PRIMARY USER CANDIDATE
2. Client assuré — EXTERNAL USER / BENEFICIARY CANDIDATE
3. Prospect / futur client — EXTERNAL USER / BENEFICIARY CANDIDATE
4. Directeur — STAKEHOLDER — NOT PERSONA BY DEFAULT

Aucun ADOPTED / VALIDATED / FINAL sur personas.

---

## Limites user discovery

Aucun entretien, questionnaire, observation, démographie, outils actuels, usage interface prospect complet, usage dashboard directeur, frustrations observées.

---

## Experience Map / Customer Journey

- Experience Map : CANDIDATE RECOMMENDATION — NOT ADOPTED
- Customer Journey Map : OPTIONAL / NOT ADOPTED
- Aucune map créée

---

## Miro

NOT MATERIALIZED — aucune mutation

---

## Diff (commit)

````diff
commit bfd7fe5516971e6cd06bad549aeb5886e6b07557
Author: Ludo243 <ludo_zaya@hotmail.fr>
Date:   Sun Sep 27 23:41:09 2026 +0200

    docs(crm-assurance-courtage): open 1.2 user discovery

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 20cd5bd4..bba71f24 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -167,10 +167,10 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 |---------|------|
 | Phase actuelle | Bloc / Phase 1 — cadrage |
 | Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
-| Étape suivante | **1.2 Analyse des besoins utilisateurs — NOT OPENED** |
+| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
-| Prochain objectif | Attendre le **GO Morris** pour ouvrir le 1.2 |
+| Prochain objectif | Produire et faire valider l’analyse 1.2 et ses proto-personas avant toute matérialisation visuelle finale ou conception produit |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
new file mode 100644
index 00000000..2b98a26b
--- /dev/null
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -0,0 +1,213 @@
+# CRM Assurance Courtage — 1.2 Analyse des besoins utilisateurs
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | WORKING ANALYSIS — **1.2 OPENED** par décision Morris du 2026-09-27 |
+| **Étape** | 1.2 |
+| **Source métier principale** | Brief pédagogique CRM + 1.1 validé |
+| **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
+| **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
+| **1.1** | VALIDATED (2026-09-27) — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
+| **Evidence user discovery** | BRIEF-DERIVED PROTO-PERSONAS — NO FIELD INTERVIEWS PROVIDED |
+| **Personas** | CANDIDATE — à valider Morris |
+| **Experience Map** | OPTIONAL / NOT ADOPTED |
+| **Customer Journey Map** | OPTIONAL / NOT ADOPTED |
+| **Architecture** | NOT DECIDED |
+| **Stack** | NOT DECIDED |
+
+**Décision Morris :** 1.2 — Analyse des besoins utilisateurs = **OPENED**
+**Date :** 2026-09-27
+
+Cette ouverture autorise le travail de cadrage 1.2. Elle ne signifie **pas** que le 1.2, les personas, une Experience Map ou une Customer Journey Map sont VALIDATED / ADOPTED.
+
+---
+
+## 1. Objectif du 1.2
+
+Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et préparer des **proto-personas de cadrage** exploitables pour une future matérialisation (PPTX / Miro) après revue Morris.
+
+Ce cycle doit :
+
+- rendre explicites les hypothèses faute d’entretiens réels ;
+- distinguer faits sourcés, inférences et informations non disponibles ;
+- ne pas transformer l’analyse en spécification fonctionnelle, backlog ou architecture.
+
+**Ce cycle ne constitue PAS une user research empirique.**
+
+---
+
+## 2. Niveau de preuve et méthode
+
+| Catégorie | Signification |
+|-----------|---------------|
+| **EXPLICITE DANS LE BRIEF** | Information affirmée directement par le brief (ou reprise telle quelle du 1.1 validé) |
+| **INFÉRENCE DE CADRAGE** | Déduction raisonnable à partir du brief, clairement marquée |
+| **NON RENSEIGNÉ** | Information non fournie — **non inventée** |
+
+Aucun entretien, questionnaire ou observation terrain n’est fourni.
+Aucun verbatim réel n’est disponible.
+
+Les profils produits sont donc des **PROTO-PERSONAS DE CADRAGE**. Ils devront rester présentés comme tels tant qu’aucune recherche utilisateur réelle ne les a enrichis.
+
+---
+
+## 3. Utilisateurs et parties prenantes
+
+| Profil | Qualification | Preuves (sources) |
+|--------|---------------|-------------------|
+| **Courtier** | Utilisateur métier interne principal clairement explicite | Suit le cycle de vie client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; activités documentaires ; gestion de sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF** |
+| **Prospect / futur client** | Population externe du parcours commercial. Le statut d’utilisateur direct de **toutes** les interfaces du futur CRM n’est **pas** démontré | Première prise de contact ; devis ; rendez-vous ; compréhension du besoin ; proposition ; souscription ; prise de rendez-vous directe — **EXPLICITE DANS LE BRIEF** |
+| **Client** | Population externe concernée par contrats, suivi et transparence | Contrats ; historique des échanges ; historique des contrats ; transparence ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |
+| **Directeur du cabinet** | Partie prenante décisionnaire / sponsor métier. **Ne pas** le transformer automatiquement en persona utilisateur final | Porte les objectifs business ; souhaite différenciation ; demande de performance commerciale / KPIs dans le scénario — **EXPLICITE DANS LE BRIEF**. L’usage personnel du dashboard par le directeur n’est **pas** explicitement démontré — **NON RENSEIGNÉ** |
+
+---
+
+## 4. Choix des proto-personas candidats
+
+Trois profils candidats sont proposés pour satisfaire la plage pédagogique **2–3 profils** exigée par le brief (1.2.1). Ils ne deviennent **pas** « personas validés » dans ce cycle.
+
+| Candidat | Profil | Statut |
+|----------|--------|--------|
+| **A** | Courtier | PRIMARY USER CANDIDATE |
+| **B** | Client assuré | EXTERNAL USER / BENEFICIARY CANDIDATE |
+| **C** | Prospect / futur client | EXTERNAL USER / BENEFICIARY CANDIDATE |
+
+Aucun de ces profils n’est marqué ADOPTED, VALIDATED ou FINAL.
+
+---
+
+## 5. Proto-persona A — Courtier
+
+| Champ | Contenu | Niveau de preuve |
+|-------|---------|------------------|
+| **Rôle** | Courtier du cabinet | EXPLICITE DANS LE BRIEF |
+| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE DANS LE BRIEF |
+| **Objectifs supportés** | Suivre le cycle de vie client ; centraliser le suivi prospects / clients / contrats ; gérer devis, relances et rendez-vous ; accompagner la souscription ; suivre renouvellements / résiliations ; gérer pièces et documents ; suivre les sinistres ; améliorer traçabilité et réactivité | EXPLICITE DANS LE BRIEF (objectifs / capacités du scénario) |
+| **Besoins déduits** | Retrouver l’information de suivi utile ; conserver une vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique nécessaire à la relation personnalisée | **INFÉRENCE DE CADRAGE À PARTIR DES OBJECTIFS DU BRIEF** |
+
+**Non renseigné (non inventé) :** outil actuellement utilisé ; temps perdu ; nombre de dossiers ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.
+
+**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
+Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.
+
+---
+
+## 6. Proto-persona B — Client assuré
+
+| Champ | Contenu | Niveau de preuve |
+|-------|---------|------------------|
+| **Rôle** | Client disposant d’un ou plusieurs contrats | EXPLICITE DANS LE BRIEF (population « clients » ; contrats) |
+| **Objectifs / attentes soutenus** | Bénéficier d’une relation de proximité ; recevoir une offre personnalisée selon profil / besoin discuté ; accéder avec transparence à l’historique des échanges et contrats ; disposer d’un suivi autour du contrat ; être concerné par renouvellement, résiliation ou sinistre selon le scénario | EXPLICITE DANS LE BRIEF |
+| **Besoins déduits** | Comprendre où en est son suivi ; retrouver les informations utiles liées à ses contrats et échanges ; bénéficier d’une continuité relationnelle | **INFÉRENCE DE CADRAGE** |
+
+**Non renseigné (non inventé) :** fréquence de connexion ; appareil utilisé ; âge ; profession ; revenus ; niveau digital ; type exact de contrat détenu ; composition familiale.
+
+**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
+Le client attend une relation de proximité et une transparence sur l’historique de ses échanges et contrats.
+
+---
+
+## 7. Proto-persona C — Prospect / futur client
+
+| Champ | Contenu | Niveau de preuve |
+|-------|---------|------------------|
+| **Rôle** | Personne entrant dans le parcours avant souscription | EXPLICITE DANS LE BRIEF |
+| **Objectifs / attentes supportés** | Prendre contact ; obtenir un devis ; prendre / participer à un rendez-vous ; exprimer ses besoins ; recevoir une proposition personnalisée ; avancer vers une souscription | EXPLICITE DANS LE BRIEF |
+| **Attentes liées aux axes du brief** | Proximité ; réactivité ; personnalisation ; transparence | EXPLICITE DANS LE BRIEF (axes / intention) |
+
+**Réserve obligatoire :** le brief ne démontre **pas** que le prospect utilise directement toutes les interfaces du futur CRM. — **NON RENSEIGNÉ** pour l’usage interface complet.
+
+**Non renseigné (non inventé) :** comportement d’achat ; comparateurs utilisés ; budget ; canal préféré hors prise de rendez-vous directe citée ; âge ; profession ; niveau d’urgence ; nombre d’assureurs comparés.
+
+**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
+Le prospect cherche une entrée en relation simple, une proposition personnalisée et une progression claire vers la souscription.
+
+---
+
+## 8. Synthèse des besoins par profil
+
+| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau de preuve |
+|--------|-----------|----------|------------------|------------------|
+| Courtier | Suivi cycle client ; centralisation ; devis / RDV / souscription ; documents ; sinistres ; traçabilité / réactivité | Relation personnalisée soutenue par l’historique | Vision cohérente du dossier ; charge admin. réduite | EXPLICIT BRIEF + INFERENCE |
+| Client | Suivi contrats ; transparence ; continuité | Proximité ; personnalisation ; transparence | Comprendre l’état du suivi ; retrouver infos utiles | EXPLICIT BRIEF + INFERENCE |
+| Prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation simple ; progression claire | EXPLICIT BRIEF + INFERENCE |
+| Directeur | Objectifs business / différenciation / KPIs scénario | Performance commerciale | Non traité comme persona utilisateur final | EXPLICIT BRIEF ; usage dashboard = NOT PROVIDED |
+
+Aucune user story. Aucun backlog fonctionnel.
+
+---
+
+## 9. Difficultés / pain points
+
+Aucune observation AS-IS utilisateur n’est disponible.
+Aucune affirmation du type « les courtiers se plaignent de… », « les clients rencontrent actuellement… » ou « les utilisateurs disent… » n’est formulée.
+
+### Enjeux utilisateurs déduits du brief
+
+**Courtier :** charge administrative à réduire ; traçabilité à améliorer ; besoin de réactivité ; continuité du suivi.
+**Client :** besoin de transparence ; besoin de confiance ; continuité relationnelle.
+**Prospect :** simplicité d’entrée en relation ; réactivité ; personnalisation du parcours.
+
+**Qualification :** DÉDUITS DU BRIEF — NON OBSERVÉS SUR LE TERRAIN.
+
+---
+
+## 10. Inconnues et limites
+
+Limites qui affectent réellement la lecture du 1.2 :
+
+- aucun entretien ou questionnaire réel ;
+- aucune observation terrain ;
+- aucune donnée démographique ;
+- aucune information fiable sur les outils actuels ;
+- usage direct du futur CRM par le prospect à confirmer au stade de conception ;
+- usage personnel du tableau de bord par le directeur non démontré ;
+- frustrations actuelles non observées.
+
+---
+
+## 11. Parcours utilisateur optionnel
+
+| Livrable pédagogique | Exigence brief | Qualification dans ce cycle |
+|----------------------|----------------|-----------------------------|
+| Experience Map | Facultative (1.2.2 / 1.2.3) | **CANDIDATE RECOMMENDATION — NOT ADOPTED** |
+| Customer Journey Map | Facultative (1.2.2 / 1.2.3) | **OPTIONAL / NOT ADOPTED** |
+
+**Justification analytique (recommandation méthodologique — PAS une décision Morris) :**
+Le projet décrit un parcours **cible** sans produit existant observé. Une Experience Map centrée sur l’expérience du Courtier (ou sur deux profils complémentaires) paraît méthodologiquement plus cohérente qu’une Customer Journey Map centrée sur les interactions avec un produit ou service **existant**.
+
+Aucune map n’est créée dans ce cycle.
+
+---
+
+## 12. Miro
+
+Aucune matérialisation Miro n’est réalisée dans ce premier cycle 1.2.
+
+Trajectoire proposée :
+
+1. validation Morris du contenu des proto-personas ;
+2. cycle Miro natif dédié ;
+3. création de fiches personas éditables ;
+4. éventuelle Experience Map seulement après décision Morris.
+
+Miro n’est donc **pas** modifié.
+
+---
+
+## 13. Synthèse 1.2
+
+| Point | État |
+|-------|------|
+| **1.2** | OPENED — WORKING ANALYSIS |
+| Courtier | PROTO-PERSONA CANDIDATE |
+| Client | PROTO-PERSONA CANDIDATE |
+| Prospect | PROTO-PERSONA CANDIDATE |
+| Directeur | STAKEHOLDER — NOT PERSONA BY DEFAULT |
+| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
+| Experience Map | CANDIDATE / NOT ADOPTED |
+| Customer Journey Map | OPTIONAL / NOT ADOPTED |
+| Miro | NOT MATERIALIZED |
+| Architecture | NOT DECIDED |
+| Stack | NOT DECIDED |
+| **1.3** | **NOT OPENED** |
````

---

## Validations

| Check | Résultat |
|-------|----------|
| 1.2 OPENED tracé | PASS |
| 1.1 reste VALIDATED | PASS |
| Doctrine alignée | PASS |
| Nouveau document 1.2 | PASS |
| 2–3 profils types | PASS (3) |
| Au moins 2 proto-personas | PASS |
| Courtier / Client / Prospect explicites | PASS |
| Directeur stakeholder | PASS |
| Faits / inférences séparés | PASS |
| Aucun entretien fictif | PASS |
| Aucun verbatim fictif | PASS |
| Aucune démographie inventée | PASS |
| Aucun AS-IS inventé | PASS |
| Experience Map NOT ADOPTED | PASS |
| Miro non modifié | PASS |
| Architecture NOT DECIDED | PASS |
| Stack NOT DECIDED | PASS |
| 1.3 NOT OPENED | PASS |
| Exactement 2 fichiers projet | PASS |
| git diff --check | PASS |
| Commit local | PASS |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | PASS — HANDOFF UPDATED — REMOTE VERIFIED |

---

## Commit

- SHA : `bfd7fe5516971e6cd06bad549aeb5886e6b07557`
- Message : `docs(crm-assurance-courtage): open 1.2 user discovery`
- Branche locale uniquement (tracking origin/main, ahead 1 — non poussée)

Status :

```
(clean except expected)
```

---

## Réserves

- Proto-personas non validés Morris
- Experience Map seulement recommandation méthodologique
- Preuve empirique absente — document volontairement brief-derived

---


## Review Handoff

- Mode : publish-in-cycle
- Branche : `sfia/review-handoff`
- Path : `sfia-review-handoff/latest-chatgpt-review.md`
- Tip remote : `aef9eddb13a2d8e46a02ffc7ed167bb5acd22cfe`
- Blob : `aca882d166b5961d45b7a585c94f29ba22a94573`
- Verdict : HANDOFF UPDATED — REMOTE VERIFIED
- Push branche CRM : NOT DONE
- PR : NOT CREATED


## Verdict

**READY FOR CHATGPT REVIEW — CRM 1.2 USER DISCOVERY DRAFT CREATED**
