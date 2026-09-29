# ChatGPT Review Pack — CRM 1.3.2 pedagogical watch simplification

## 0. Identité

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 02:18:09 CEST |
| **Cycle** | Simplification pédagogique du 1.3.2 |
| **Typologie** | DOC / pedagogical consolidation |
| **Profil** | **Standard** |
| **Critical** | **NON** |
| **CKC** | Cadrage pilot candidate |
| **Nature** | PEDAGOGICAL SYNTHESIS — AWAITING REVIEW (pas de validation globale du 1.3) |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | /Users/l/Projects/sfia-worktree-crm-assurance |
| Branche | docs/crm-assurance-courtage-1-3-watch-01 |
| HEAD initial | 43b89a9e7690fb53c38b3afe4cf281e2327df692 |
| HEAD final | 91659feeface45fb45bbd78fec0556c76fec877a |
| origin/main | 6f47f74dc9b515c4c79624b21772223ba02c76cd |
| Dirt | .tmp-sfia-review/** only |
| Drift CRM | NONE |
| Git Truth | **PASS** |

## 2. Sources SFIA / projet

Template ; routing ; sfia-v2.5 ; CKC 01-cadrage ; OM ; guardrails ; checklist ; scripts README ; doctrine ; 01-01 ; 01-02 ; 01-03 (base A→E REVIEW PASS).

## 3. État entrée → sortie

| Élément | Entrée | Sortie |
|---------|--------|--------|
| Base A→E | REVIEW PASS | REVIEW PASS (historique Git) |
| 1.3.2 présentation | Consolidation encyclopédique | **PEDAGOGICAL SYNTHESIS — AWAITING REVIEW** |
| 1.3 | OPENED — AWAITING FINAL REVIEW | **OPENED — AWAITING FINAL REVIEW** |
| 1.4 | NOT OPENED | **NOT OPENED** |
| Architecture / Stack | NOT DECIDED | **NOT DECIDED** |

**Décision Morris :** autorise la simplification pédagogique — sans valider le 1.3, sans ouvrir 1.4.

## 4. Règle éditoriale

GARDER ce qui aide à comprendre et préparer la suite.
RÉDUIRE ce qui sert surtout à prouver l’exhaustivité.
Détail A→E = historique Git.

**Document collègue :** référence **éditoriale uniquement** (forme : essentiel / réglementation / techno / marché / suite).
**NON importé :** Baserow, Xano, Supabase, Glide, Zapier, Cal.com, Calendly, PDFMonkey, Documint, Brevo, Mailjet, Looker Studio, Metabase, Mistral/Claude comme stack, DocuSign, Yousign, HDS, LCB-FT, démarchage téléphonique central, signature électronique comme exigence, ORIAS/RC comme feature CRM, historique non modifiable comme décision, sprints, design system, hébergement UE décidé, shortlist adoptée.

## 5. Architecture contenu avant / après

| Avant (~21 500 mots / ~1 590 lignes) | Après (~2196 mots / ~262 lignes) |
|--------------------------------------|------------------------------------------|
| §14–18 deep-dives A–E + matrices C-A/C-B/C-C/C-D + Capability Matrix + registre S01–S87 | Méta courte + 1.3.1 rappel + §1.3.2 A–H pédagogique |
| Synthèses répétées | Une lecture 10–15 min |

**Volume §1.3.2 corps (section 4) :** ~1710 mots (cible 1 800–2 500 — **JUSTIFIED** légèrement sous le bas de fourchette, lisibilité prioritaire ; document complet ~2196 mots).

**Suppressions / condensations :** matrices exhaustives ; R-Bxx ; sous-matrices a11y ; Capability Evidence Matrix outil×outil ; corrections R-Dxx ; registre exhaustif comme lecture principale ; articles réglementaires détaillés ; calendrier AI Act détaillé ; répétitions de limites.

**Conservation :** enseignements structurants ; TO VERIFY clés (HEALTH, AIPD, DORA, a11y legal, AI Act use-case) ; critères suite ; panel candidats sans sélection ; Git pour la preuve.

## 6. Doctrine §11 complète

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED** |
| 1.3 | **OPENED — AWAITING FINAL REVIEW** |
| 1.3.1 | **REVIEW PASS** |
| Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
| Étape actuelle | **1.3.2 simplification pédagogique — AWAITING REVIEW** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revue ChatGPT de la version pédagogique, puis décision Morris séparée sur validation globale du 1.3 |

---
```

## 7. CONTENU COMPLET FINAL 01-03

```markdown
# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire

| Champ | Valeur |
|-------|--------|
| **Statut 1.3** | **OPENED — AWAITING FINAL REVIEW** |
| **1.3.1 Système de veille** | **REVIEW PASS** (établi) |
| **1.3.2 Rapport de veille** | **PEDAGOGICAL SYNTHESIS — AWAITING REVIEW** |
| **Base détaillée A→E** | **REVIEW PASS** (historique Git) |
| **1.1 / 1.2** | VALIDATED |
| **1.4** | **NOT OPENED** |
| **Architecture** | NOT DECIDED |
| **Stack** | CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED |

Ce document est une **synthèse pédagogique**. La recherche détaillée (deep-dives A→E, matrices, registre exhaustif) reste traçable dans l’**historique Git** du chantier 1.3.2.
Ce n’est **pas** une validation globale du 1.3, ni un avis juridique, ni un choix d’outil ou d’architecture.

---

## 1. Objectif du 1.3

Identifier, pour le CRM Assurance Courtage :

- les tendances marché et technologiques utiles ;
- les contraintes réglementaires, données, sécurité, accessibilité et sobriété à prendre en compte ;
- les impacts pour la conception et le futur choix d’outils —

**sans** décider ici la stack, l’architecture, ni un cas d’usage IA.

**Règle :** la veille **informe** ; elle **ne choisit pas**.

---

## 2. Périmètre (issu de 1.1 / 1.2)

Prospects et clients (TPE/PME, particuliers) ; prospection, devis, relances, RDV, conseil, souscription, renouvellement, résiliation ; documents et espace documentaire ; espace client ; historique ; sinistres (niveau brief) ; dashboard commercial ; multicanal (physique, Visio, téléphone, email, espace client).

**Non inventé comme besoin validé :** paiement, signature électronique obligatoire, API assureurs, scoring, underwriting auto, app mobile native.

---

## 3. 1.3.1 — Système de veille (rappel)

| Élément | Choix simple |
|---------|----------------|
| **Thèmes** | Marché ; réglementation assurance ; données ; sécurité ; no-code/low-code ; IA ; accessibilité ; numérique responsable |
| **Sources** | Officielles en priorité (ACPR, EIOPA, CNIL, EUR-Lex, ANSSI, RGAA, RGESN, Commission UE) ; puis études sectorielles ; docs éditeurs pour les capacités outils |
| **Méthode** | Ouvrir la source, dater, distinguer fait / hypothèse / à vérifier ; besoin avant outil |
| **Rythme** | Actualisation ciblée avant les décisions structurantes (outils, conception, conformité) |
| **Support** | Git (présent document) |

---

## 4. 1.3.2 — Rapport de veille (synthèse pédagogique)

Cette section répond à trois questions : **qu’avons-nous appris ?** **qu’est-ce que cela implique pour le CRM ?** **qu’est-ce qui reste à décider plus tard ?**
Elle consolide les enseignements des recherches A→E sans les matrices ni le détail réglementaire article par article.

### A. L’essentiel à retenir

1. **Marché** — La distribution d’assurance se digitalise, mais souvent de façon progressive.
   → Le CRM doit soutenir le digital **et** le conseil humain, pas un modèle 100 % en ligne.

2. **Relation** — Les clients attendent fluidité (devis, espace, documents) tout en valorisant un interlocuteur.
   → Différenciation du cabinet : proximité, personnalisation, transparence, RDV simple.

3. **Conseil & traçabilité** — Le devoir de conseil et l’intérêt du client orientent la distribution.
   → Garder la trace des besoins, échanges et recommandations dans le futur CRM.

4. **Données** — RGPD : finalité, minimisation, conservation, droits, privacy by design, sous-traitants.
   → Concevoir dès le départ avec ces principes. Les **données de santé** et l’**AIPD** restent **à vérifier**.

5. **Sécurité** — Authentification, droits, documents, logs, sauvegarde, restauration, réversibilité.
   → À prévoir en conception ; MFA / SSO = **candidats** selon le contexte, pas des décisions ici. **DORA** = **à vérifier**.

6. **Accessibilité & sobriété** — Interfaces claires, formulaires, clavier, contraste, documents, multicanal ; fonctionnalités utiles seulement.
   → Repères : RGAA / WCAG / RGESN. Applicabilité légale accessibilité = **à vérifier** (taille / statut du cabinet).

7. **No-code / low-code** — Un panel d’outils a été étudié comme **candidats** (HubSpot, Airtable, Bubble, Softr, Power Apps, Make, n8n, Power Automate, Tally, Power BI…).
   → Capacités documentées ; gaps connus (RDV, docs générés, portail « dossier »). **Aucune stack sélectionnée.**

8. **IA** — Des aides (résumé, rédaction, documents, recherche, FAQ, KPI) restent en **veille**.
   → Pas d’adoption. Les usages de décision (scoring, tarification, underwriting, reco automatique) sont plus sensibles. **AI Act** = à vérifier **selon le cas d’usage** retenu plus tard.

---

### B. Marché et relation client

**À retenir**

| Enseignement | Conséquence pour le projet |
|--------------|----------------------------|
| Digitalisation progressive (ventes en ligne souvent limitées sur beaucoup de marchés) | Ne pas concevoir un CRM « pure digital-only » |
| Self-service et parcours simples visibles chez les acteurs digitaux | Espace client / devis / documents utiles |
| Accompagnement humain souvent revendiqué | Préserver le conseil et le contact |
| Multicanal | Physique, Visio, téléphone, email + digital |
| Consolidation / mobilité des intermédiaires (contexte UE) | Outiller la relation et la différenciation |

**Patterns concurrence (observations, pas classement)** : devis en ligne ; espace client ; self-service ; accompagnement humain ; parcours simples.
Relier au scénario projet : **proximité + personnalisation + transparence + RDV simple**.
Ce n’est **pas** un benchmarking : aucun acteur n’est désigné comme modèle à recopier, et aucune architecture concurrente n’est déduite.

L’IA générative apparaît de plus en plus dans les canaux digitaux (chatbots, aides à la vente) : pour un cabinet de courtage, cela confirme l’intérêt d’une **veille IA**, pas d’une automatisation du conseil.

---

### C. Réglementation et données personnelles

| Sujet | Ce qu’on retient | Impact pour le CRM | À vérifier ? |
|-------|------------------|--------------------|--------------|
| Besoins client / devoir de conseil | Recueillir et actualiser les besoins ; conseil adapté | Formulaires, historique, comptes rendus | Application fine selon processus |
| Traçabilité | Pouvoir retracer échanges et recommandations | Historique des échanges et contrats | Modalités exactes |
| Minimisation / finalité | Ne collecter que le nécessaire | Champs et traitements utiles | Bases légales détaillées |
| Conservation | Durées selon finalités (guidance CNIL assurance) | Règles de rétention | Calendrier final par type de donnée |
| Droits des personnes | Accès, rectification, effacement, etc. | Parcours droits / export | Modalités via espace client |
| Privacy by design | Intégrer la protection dès la conception | Choix de conception futurs | — |
| Sous-traitants | DPA / garanties si SaaS | Critère de sélection d’outils | Éditeurs finalistes |
| Données de santé | Régime renforcé **si** présentes | Impacts fort si confirmé | **HEALTH DATA = TO VERIFY** |
| AIPD | Si risque élevé | Analyse avant mise en œuvre | **AIPD = TO VERIFY** |

Pas d’avis juridique. Pas de certification « conforme RGPD » pour un outil.

---

### D. Sécurité, accessibilité et numérique responsable

**Sécurité — à prendre en compte**

- Authentification des utilisateurs (courtier, directeur, client).
- Droits et moindre privilège (séparer les profils).
- Espace client et documents : accès limité, traçabilité.
- Logs utiles ; gestion d’incident à prévoir plus tard.
- Sauvegarde et restauration ; export / réversibilité fournisseur.

MFA et SSO = **candidats** selon risque et population — **non décidés**.
**DORA = TO VERIFY** (applicabilité au cabinet fictif non établie).
Les scénarios de menace étudiés en recherche **ne sont pas** un registre de risques mesuré.

**Accessibilité — à prendre en compte**

Navigation claire ; formulaires compréhensibles ; clavier / focus ; contraste ; documents lisibles ; authentification accessible ; ne pas exclure les clients non 100 % digitaux (multicanal).

| Repère | Statut pédagogique |
|--------|--------------------|
| RGAA | Référence de conception |
| WCAG | Standard / guidance |
| Obligation légale FR | **ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY** |

**Numérique responsable — à prendre en compte**

Fonctionnalités vraiment utiles ; limiter données et traitements inutiles ; éviter interfaces lourdes ; garder maintenabilité et réversibilité.
**RGESN** = référence d’écoconception (pas « obligatoire » sans preuve).

En pratique : viser des écrans compréhensibles, des documents exploitables, des parcours qui n’excluent pas le téléphone ou le RDV physique, et éviter d’empiler des modules « parce que l’outil les propose ».

---

### E. Technologies no-code / low-code et IA

**OUTILS CANDIDATS — AUCUNE STACK SÉLECTIONNÉE.**

Panel doctrine (présence = candidat à évaluer, pas adopté) : HubSpot, Airtable, Bubble, Softr, Power Apps, Make, n8n, Power Automate, Tally, Power BI, Voiceflow, Postman, Notion, Figma, Miro ; Shopify hors besoin e-commerce validé.

| Besoin | Familles / candidats déjà étudiés | Point d’attention |
|--------|-----------------------------------|-------------------|
| CRM / relation client | HubSpot ; apps data (Airtable, Bubble, Power Apps) | Couverture métier, licences, export |
| Portail / espace client | Softr ; Bubble ; Power Apps / Pages ; portail HubSpot (partiel) | Rôles, sécurité, accessibilité |
| Formulaires / collecte | Tally ; forms natifs | Consentement, accessibilité |
| Automatisation | Make, n8n, Power Automate ; workflows CRM | Gouvernance des flux, logs |
| Reporting / KPI | Power BI ; reporting CRM | Sobriété des tableaux de bord |
| Documents | Capacités natives / extensions selon outils | Génération accessible souvent à compléter |
| RDV | Peu de natif unifié dans le panel | **Discovery future éventuelle** (sans ajouter d’outil ici) |
| Intégrations / API | Docs éditeurs | Quotas, maintenance, DPA |
| Collaboration / design | Notion, Figma, Miro, Postman | Hors cœur CRM runtime |

**IA — pistes en veille (non adoptées)**

Résumé d’historique ; aide à la rédaction ; classement / extraction documentaire ; recherche d’information ; FAQ / assistant ; synthèse KPI.
Statut : **à étudier / veille**.

Usages plus sensibles (scoring, tarification, éligibilité, underwriting, recommandation automatique) : **étude spécifique requise** avant toute idée d’adoption.
**AI Act :** à vérifier selon le cas d’usage IA réellement retenu.

---

### F. Ce que la veille implique pour la suite

| Enseignement | À prendre en compte ensuite | Étape concernée |
|--------------|-----------------------------|-----------------|
| Traçabilité du conseil | Historique, comptes rendus, règles métier | Conception fonctionnelle |
| Documents / données sensibles | Droits, sécurité, accès | Architecture / sécurité (futurs) |
| Accessibilité | Parcours, composants, tests | UX/UI + QA |
| Multicanal | Parcours adaptés (pas digital-only) | Conception / UX |
| Réversibilité / export | Critère de sélection d’outils | Choix des outils |
| Dépendances licences (SSO, audit…) | Coût et faisabilité | Budget |
| IA assistive | Cas d’usage à cadrer, oversight humain | Conception / IA |
| Sobriété | Éviter fonctionnalités inutiles | Conception |
| Gaps RDV / docs générés | Discovery si besoin confirmé | Conception / outils |
| Conformité conditionnelle (santé, DORA, a11y légale) | Trancher avec données cabinet | Conformité / Morris |

Cette table **prépare** organisation, budget et vision (étapes ultérieures du cadrage) : elle ne les ouvre pas et ne produit ni backlog, ni sprints, ni architecture cible.

---

### G. Points à vérifier et veille à poursuivre

| Question | Moment utile pour trancher |
|----------|----------------------------|
| Données de santé réellement traitées ? | Avant modèle de données / conformité |
| AIPD nécessaire ? | Avant mise en œuvre à risque |
| DORA applicable au cabinet ? | Conformité / résilience |
| Accessibilité juridiquement applicable (CA / statut) ? | Conformité / UX |
| Conservation finale par type de donnée ? | Conception / RUN |
| Fournisseurs, DPA, localisation, transferts ? | Avant choix d’outils |
| Objectifs de restauration (RPO / RTO) ? | Architecture / exploitation |
| Outil RDV / calendrier nécessaire hors panel ? | Discovery / outils |
| Génération documentaire spécialisée + accessibilité ? | Conception / QA |
| Cas d’usage IA réellement retenu ? | Avant toute adoption IA |
| Niveaux de licence des finalistes (SSO, audit…) ? | Budget + choix outils |
| Budget global acceptable ? | Budget |

---

### H. Sources prioritaires

Groupes utiles (détail exhaustif = historique Git) :

1. **EIOPA** — rapports / structure marché distribution (IDD)
2. **ACPR** — recommandations devoir de conseil / distribution
3. **CNIL** — assurance, conservation, minimisation, sécurité des données
4. **EUR-Lex** — RGPD ; IDD ; AI Act
5. **ANSSI** — bonnes pratiques sécurité / MFA / sauvegarde
6. **DINUM / RGAA** — accessibilité numérique
7. **W3C WCAG** — standard d’accessibilité
8. **RGESN / MiNumEco–Arcep** — écoconception
9. **Commission européenne** — cadre AI Act (applicabilité selon cas d’usage)
10. **Docs éditeurs** du panel (HubSpot, Microsoft Power Platform, Airtable, Bubble, Softr, Make, n8n, Tally…) — capacités **candidats** uniquement

La recherche détaillée et le registre exhaustif restent traçables dans l’historique Git du chantier 1.3.2.

---

## 5. Limites

- Cabinet pédagogique / fictif ; pas de terrain utilisateur au-delà de 1.1 / 1.2.
- Pas d’avis juridique, d’audit sécurité, d’audit RGAA, ni de bilan environnemental.
- Capacités outils = documentation éditeur ; plans et configs réels restent à confirmer.
- **Aucune stack, architecture, ni cas IA adoptés.**
- **1.3 non validé** ; **1.4 non ouvert.**

---

## 6. État de clôture du document

| Point | État |
|-------|------|
| **1.3** | OPENED — AWAITING FINAL REVIEW |
| **1.3.1** | REVIEW PASS |
| **1.3.2** | PEDAGOGICAL SYNTHESIS — AWAITING REVIEW |
| **Base A→E** | REVIEW PASS (Git) |
| **Architecture / Stack** | NOT DECIDED |
| **1.4** | NOT OPENED |
```

## 8. Diff Git

```
 .../crm-assurance-courtage-operating-doctrine.md   |    9 +-
 .../01-03-veille-technologique-reglementaire.md    | 1671 ++------------------
 2 files changed, 174 insertions(+), 1506 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index f3304b42..127134fb 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -173,15 +173,12 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.2 | **VALIDATED** |
 | 1.3 | **OPENED — AWAITING FINAL REVIEW** |
 | 1.3.1 | **REVIEW PASS** |
-| 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
-| 1.3.2-B | **REVIEW PASS — SECURITY & RESILIENCE** |
-| 1.3.2-C | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
-| 1.3.2-D | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
-| Étape actuelle | **1.3.2-E Consolidation finale — AWAITING REVIEW** |
+| Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
+| Étape actuelle | **1.3.2 simplification pédagogique — AWAITING REVIEW** |
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revue ChatGPT finale du 1.3.2 puis décision Morris séparée sur validation globale du 1.3 et éventuelle ouverture du 1.4 |
+| Prochain objectif | Revue ChatGPT de la version pédagogique, puis décision Morris séparée sur validation globale du 1.3 |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
index 6fe7197c..6cffb75a 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
@@ -3,1588 +3,259 @@
 | Champ | Valeur |
 |-------|--------|
 | **Statut 1.3** | **OPENED — AWAITING FINAL REVIEW** |
-| **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
-| **1.3.2 Rapport de veille** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
-| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
-| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
-| **1.3.2-C** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
-| **1.3.2-D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
-| **1.3.2-E** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
-| **1.1** | VALIDATED |
-| **1.2** | VALIDATED (2026-09-28) |
+| **1.3.1 Système de veille** | **REVIEW PASS** (établi) |
+| **1.3.2 Rapport de veille** | **PEDAGOGICAL SYNTHESIS — AWAITING REVIEW** |
+| **Base détaillée A→E** | **REVIEW PASS** (historique Git) |
+| **1.1 / 1.2** | VALIDATED |
 | **1.4** | **NOT OPENED** |
 | **Architecture** | NOT DECIDED |
-| **Stack** | NOT DECIDED |
-| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
-| **Notion** | Aucune action dans ce cycle |
-| **Miro** | Hors scope — non modifié |
+| **Stack** | CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED |

-**Décision Morris :** 1.3 OPENED ; 1.3.1 établi ; trajectoire 1.3.2 découpée en deep-dives A→E.
-Le présent document **n’est pas** une validation globale du 1.3 ni un avis juridique / conformité certifiée.
+Ce document est une **synthèse pédagogique**. La recherche détaillée (deep-dives A→E, matrices, registre exhaustif) reste traçable dans l’**historique Git** du chantier 1.3.2.
+Ce n’est **pas** une validation globale du 1.3, ni un avis juridique, ni un choix d’outil ou d’architecture.

 ---

 ## 1. Objectif du 1.3

-La veille technologique et réglementaire vise à identifier, pour le CRM Assurance Courtage :
+Identifier, pour le CRM Assurance Courtage :

-- les évolutions technologiques pertinentes (no-code / low-code, IA, nouvelles technologies) ;
-- les contraintes réglementaires et de conformité à examiner ;
-- les opportunités et risques pour le cabinet et ses utilisateurs ;
-- les impacts possibles sur les **choix futurs** (architecture, stack, conception) — **sans** les décider ici.
+- les tendances marché et technologiques utiles ;
+- les contraintes réglementaires, données, sécurité, accessibilité et sobriété à prendre en compte ;
+- les impacts pour la conception et le futur choix d’outils —

-**Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.
+**sans** décider ici la stack, l’architecture, ni un cas d’usage IA.

-Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
-Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A / B / C** (REVIEW PASS), **1.3.2-D** (REVIEW PASS — réserves résolues dans E) et **1.3.2-E** (FINAL CONSOLIDATION — AWAITING REVIEW). **1.4** reste **NOT OPENED**. Le **1.3** n’est **pas** VALIDATED.
+**Règle :** la veille **informe** ; elle **ne choisit pas**.

 ---

-## 2. Périmètre issu de 1.1 / 1.2
+## 2. Périmètre (issu de 1.1 / 1.2)

-Capacités et éléments utiles pour **orienter** la veille (sans redécrire 1.1 / 1.2) :
+Prospects et clients (TPE/PME, particuliers) ; prospection, devis, relances, RDV, conseil, souscription, renouvellement, résiliation ; documents et espace documentaire ; espace client ; historique ; sinistres (niveau brief) ; dashboard commercial ; multicanal (physique, Visio, téléphone, email, espace client).

-| Domaine | Éléments retenus |
-|---------|------------------|
-| Relation / cycle | Prospects / clients / contrats ; prospection ; devis ; relances / rendez-vous ; souscription ; renouvellement / résiliation |
-| Documents | Gestion documentaire ; espace sécurisé documentaire ; historique des échanges et contrats |
-| Canaux / accès | Espace client ; canaux physiques et numériques (RDV physique, Visio, téléphone, email) |
-| Opérations | Sinistres ; accompagnement personnalisé sur le cycle de vie du contrat |
-| Pilotage | Tableau de bord / KPI (conversion, panier moyen, satisfaction) |
-| Segments BMC groupe | TPE/PME ; clients particuliers (famille/étudiant) |
-
-**Non décidé :** architecture, stack, UI détaillée, permissions, intégrations techniques.
+**Non inventé comme besoin validé :** paiement, signature électronique obligatoire, API assureurs, scoring, underwriting auto, app mobile native.

 ---

-## 3. Axes de veille
-
-| Axe | Sujets à surveiller |
-|-----|---------------------|
-| **A. Marché et concurrence** | Digitalisation de la distribution d’assurance ; évolution des usages clients ; combinaison relation humaine / parcours numérique ; évolution du rôle des courtiers ; nouveaux modèles de distribution |
-| **B. Réglementation métier assurance** | Statut / obligations des intermédiaires et courtiers ; distribution d’assurance ; devoir de conseil / recommandation personnalisée ; information et protection du client ; impacts potentiels de la digitalisation sur la distribution |
-| **C. Données personnelles / confidentialité** | Prospects et clients ; contrats ; documents ; données potentiellement sensibles selon les contrats ; historique des échanges ; accès client ; gestion des droits ; sécurité ; durées / finalités **uniquement lorsque sourcées** |
-| **D. Cybersécurité / résilience** | Authentification ; contrôle des accès ; stockage documentaire ; protection des données ; fournisseurs SaaS ; résilience opérationnelle ; **DORA** à examiner selon le champ d’application réel du cabinet — **APPLICABILITY TO VERIFY** (ne pas affirmer DORA applicable au cabinet fictif sans preuve suffisante sur taille / catégorie) |
-| **E. No-code / low-code** | Capacités : CRM ; base structurée ; workflows ; automatisations ; documents ; formulaires ; rendez-vous ; espace client / portail ; reporting ; intégrations ; sécurité / rôles ; maintenabilité ; réversibilité — **aucun outil sélectionné** |
-| **F. IA / nouvelles technologies** | IA générative ; assistants ; classification / extraction documentaire ; aide au traitement ; personnalisation ; analyse / synthèse ; risques d’automatisation ; gouvernance IA ; protection des données ; transparence — **aucun cas d’usage IA ADOPTED** |
-| **G. Accessibilité / inclusion** | Accessibilité des interfaces ; formulaires ; navigation ; contraste ; clavier ; technologies d’assistance ; inclusion numérique ; risque d’exclusion lié à une relation uniquement digitale — **ne pas affirmer une obligation juridique précise sans vérifier son champ d’application** |
-| **H. Numérique responsable / écoconception** | Sobriété ; utilité des fonctionnalités ; limitation des traitements inutiles ; poids / complexité des interfaces ; consommation de ressources ; durée de vie / maintenabilité du service |
-
----
-
-## 4. Hiérarchie des sources
-
-### Niveau 1 — sources primaires / officielles
-
-Prioritaires pour les affirmations juridiques ou réglementaires :
-
-- EUR-Lex ;
-- Commission européenne ;
-- CNIL ;
-- ACPR / Banque de France ;
-- EIOPA ;
-- ORIAS ;
-- ANSSI ;
-- DINUM / références d’accessibilité (RGAA) ;
-- MiNumEco / RGESN ;
-- ADEME / ARCEP lorsque directement pertinent ;
-- textes législatifs / réglementaires officiels (ex. Légifrance — accès à confirmer selon disponibilité technique).
-
-### Niveau 2 — sources institutionnelles / professionnelles solides
-
-- France Assureurs ;
-- organismes publics ;
-- publications sectorielles reconnues ;
-- études professionnelles identifiées et datées.
-
-Toujours distinguer **analyse sectorielle** et **règle juridique**.
-
-### Niveau 3 — sources éditeurs
-
-Uniquement pour : fonctionnalités produits ; limites ; sécurité déclarée ; intégrations ; tarifs ; roadmap / release notes — via documentations et pages **officielles** des éditeurs.
+## 3. 1.3.1 — Système de veille (rappel)

-**Interdit :** utiliser une page marketing éditeur pour démontrer une obligation légale, une tendance de marché générale, ou une supériorité comparative.
+| Élément | Choix simple |
+|---------|----------------|
+| **Thèmes** | Marché ; réglementation assurance ; données ; sécurité ; no-code/low-code ; IA ; accessibilité ; numérique responsable |
+| **Sources** | Officielles en priorité (ACPR, EIOPA, CNIL, EUR-Lex, ANSSI, RGAA, RGESN, Commission UE) ; puis études sectorielles ; docs éditeurs pour les capacités outils |
+| **Méthode** | Ouvrir la source, dater, distinguer fait / hypothèse / à vérifier ; besoin avant outil |
+| **Rythme** | Actualisation ciblée avant les décisions structurantes (outils, conception, conformité) |
+| **Support** | Git (présent document) |

 ---

-## 5. Règles de qualité des sources
+## 4. 1.3.2 — Rapport de veille (synthèse pédagogique)

-Chaque information future du rapport **1.3.2** devra porter :
+Cette section répond à trois questions : **qu’avons-nous appris ?** **qu’est-ce que cela implique pour le CRM ?** **qu’est-ce qui reste à décider plus tard ?**
+Elle consolide les enseignements des recherches A→E sans les matrices ni le détail réglementaire article par article.

-| Métadonnée | Contenu attendu |
-|------------|-----------------|
-| Organisme / auteur | Obligatoire |
-| Titre | Obligatoire |
-| URL | Obligatoire — non inventée |
-| Date publication / mise à jour | Si disponible |
-| Date de consultation | Obligatoire |
-| Zone géographique | UE / FR / autre |
-| Type de source | Niveau 1 / 2 / 3 |
-| Thème | Axe(s) de veille |
-| Synthèse courte | Factuelle |
-| Impact potentiel projet | Orienté CRM Courtage |
-| Niveau de confiance | Haut / moyen / à confirmer |
-| Applicability | **CONFIRMED** / **LIKELY** / **TO VERIFY** / **NOT APPLICABLE** |
-| Statut | **WATCH** / **PROJECT CONSTRAINT** / **PROJECT OPPORTUNITY** / **INFORMATION ONLY** |
+### A. L’essentiel à retenir

-Une absence de preuve ne doit **jamais** être transformée en règle.
+1. **Marché** — La distribution d’assurance se digitalise, mais souvent de façon progressive.
+   → Le CRM doit soutenir le digital **et** le conseil humain, pas un modèle 100 % en ligne.

----
-
-## 6. Registre initial des sources
-
-**Date de consultation initiale :** 2026-09-29
-**Méthode :** ouverture réelle des pages (WebFetch / HTTP) — URLs non inventées.
-**Portée :** identification et vérification de pertinence — **pas** de conclusions détaillées (réservées au 1.3.2).
-
-| ID | Thème | Organisme | Source / page | Type | Zone | Pourquoi cette source | Fréquence | Statut | Dernière vérification |
-|----|-------|-----------|---------------|------|------|----------------------|-----------|--------|----------------------|
-| S01 | C — Données | CNIL | [Site CNIL](https://www.cnil.fr/) | N1 | FR | Autorité FR protection des données — point d’entrée veille RGPD / droits | Hebdo + événementiel | ACTIVE | 2026-09-29 |
-| S02 | C — Données | CNIL | [RGPD — page CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) | N1 | FR/UE | Cadre RGPD expliqué par l’autorité compétente | Mensuel | ACTIVE | 2026-09-29 |
-| S03 | C — Sécurité données | CNIL | [Guide sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles) | N1 | FR | Précautions sécurité pour organismes traitant des données personnelles | Mensuel | ACTIVE | 2026-09-29 |
-| S04 | F — IA | CNIL | [Intelligence artificielle](https://www.cnil.fr/fr/intelligence-artificielle) | N1 | FR | Positions / outils CNIL sur IA et données personnelles | Hebdo | ACTIVE | 2026-09-29 |
-| S05 | B — Assurance | ACPR | [ACPR — Banque de France](https://acpr.banque-france.fr/) | N1 | FR | Superviseur banque / assurance FR — distribution, intermédiaires, résilience | Hebdo | ACTIVE | 2026-09-29 |
-| S06 | B / D | Banque de France | [Banque de France](https://www.banque-france.fr/) | N1 | FR | Contexte institutionnel ACPR / stabilité financière | Mensuel | ACTIVE | 2026-09-29 |
-| S07 | B — Distribution | EIOPA | [EIOPA](https://www.eiopa.europa.eu/) | N1 | UE | Autorité européenne assurance / pensions | Hebdo | ACTIVE | 2026-09-29 |
-| S08 | B — IDD | EIOPA | [Insurance Distribution Directive (IDD)](https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en) | N1 | UE | Cadre UE distribution d’assurance ; devoirs d’information / conduite | Mensuel | ACTIVE | 2026-09-29 |
-| S09 | A / B — Consommateur | EIOPA | [Consumer protection](https://www.eiopa.europa.eu/browse/consumer-protection_en) | N1 | UE | Tendances consommateurs, protection, innovation | Mensuel | ACTIVE | 2026-09-29 |
-| S10 | B / C / D | EUR-Lex | [EUR-Lex homepage](https://eur-lex.europa.eu/homepage.html) | N1 | UE | Portail droit UE — textes primaires | À la demande | ACTIVE | 2026-09-29 |
-| S11 | C — RGPD | EUR-Lex | [Règlement (UE) 2016/679 — GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679) | N1 | UE | Texte officiel RGPD | À la demande | ACTIVE | 2026-09-29 |
-| S12 | B — IDD | EUR-Lex | [Directive (UE) 2016/97 — IDD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016L0097) | N1 | UE | Texte officiel distribution d’assurance | À la demande | ACTIVE | 2026-09-29 |
-| S13 | D — DORA | EUR-Lex | [Règlement (UE) 2022/2554 — DORA](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554) | N1 | UE | Résilience opérationnelle numérique — **applicability cabinet fictif : TO VERIFY** | À la demande | ACTIVE — APPLICABILITY TO VERIFY | 2026-09-29 |
-| S14 | B — Intermédiaires | ORIAS | [ORIAS](https://www.orias.fr/) | N1 | FR | Registre unique intermédiaires assurance / banque / finance | Mensuel | ACTIVE | 2026-09-29 |
-| S15 | D — Cybersécurité | ANSSI | [cyber.gouv.fr](https://cyber.gouv.fr/) | N1 | FR | Autorité nationale cybersécurité — guides et actualités | Hebdo | ACTIVE | 2026-09-29 |
-| S16 | G — Accessibilité | DINUM | [Accessibilité numérique — RGAA](https://accessibilite.numerique.gouv.fr/) | N1 | FR | Référentiel accessibilité services numériques | Mensuel | ACTIVE | 2026-09-29 |
-| S17 | G — Accessibilité | DINUM | [RGAA — critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/) | N1 | FR | Critères opérationnels accessibilité | Mensuel | ACTIVE | 2026-09-29 |
-| S18 | H — Écoconception | MiNumEco | [Numérique écoresponsable](https://ecoresponsable.numerique.gouv.fr/) | N1 | FR | Mission interministérielle numérique écoresponsable | Mensuel | ACTIVE | 2026-09-29 |
-| S19 | H — RGESN | MiNumEco | [Référentiel général d’écoconception (RGESN)](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/) | N1 | FR | Référentiel écoconception services numériques | Mensuel | ACTIVE | 2026-09-29 |
-| S20 | A — Marché | France Assureurs | [France Assureurs](https://www.franceassureurs.fr/) | N2 | FR | Fédération professionnelle — tendances / données secteur (≠ règle juridique) | Mensuel | ACTIVE | 2026-09-29 |
-
-**Sources candidates non retenues dans ce registre initial faute de vérification stable :** pages ACPR profondes (HTTP 403/404 selon chemins) ; ADEME (challenge bot) ; Légifrance (challenge Cloudflare au moment de la consultation). Elles restent **à reprendre** en 1.3.2 avec accès navigateur interactif si nécessaire.
-
-
-**Enrichissement 1.3.2-A :** sources S21–S31 ajoutées en §14.11 (CNIL assurance profond, ACPR 2024-R-03, EUR-Lex IDD/RGPD). Les entrées S01–S20 du registre 1.3.1 restent valides.
-
-**Niveau 3 (éditeurs) :** non peuplé dans 1.3.1 — à ouvrir lors de la veille technologique détaillée des outils candidats, sans sélection.
+2. **Relation** — Les clients attendent fluidité (devis, espace, documents) tout en valorisant un interlocuteur.
+   → Différenciation du cabinet : proximité, personnalisation, transparence, RDV simple.

----
+3. **Conseil & traçabilité** — Le devoir de conseil et l’intérêt du client orientent la distribution.
+   → Garder la trace des besoins, échanges et recommandations dans le futur CRM.

-## 7. Dispositif de veille
+4. **Données** — RGPD : finalité, minimisation, conservation, droits, privacy by design, sous-traitants.
+   → Concevoir dès le départ avec ces principes. Les **données de santé** et l’**AIPD** restent **à vérifier**.

-| Élément | Choix |
-|---------|-------|
-| **Support canonique** | Git — le présent document |
-| **Notion** | OPTIONNEL pédagogiquement — **aucune action** dans ce cycle |
-| **Canaux** | Moteurs de recherche → **ouverture de la source** ; pages institutionnelles ; newsletters officielles ; alertes ; flux RSS si disponibles ; release notes / docs éditeurs (niveau 3) |
-| **Outils / moyens** | Navigateur ; WebFetch / HTTP pour vérification d’URL ; alertes email institutionnelles lorsque pertinentes ; abonnements newsletters officielles |
+5. **Sécurité** — Authentification, droits, documents, logs, sauvegarde, restauration, réversibilité.
+   → À prévoir en conception ; MFA / SSO = **candidats** selon le contexte, pas des décisions ici. **DORA** = **à vérifier**.

-### Cadence proposée
+6. **Accessibilité & sobriété** — Interfaces claires, formulaires, clavier, contraste, documents, multicanal ; fonctionnalités utiles seulement.
+   → Repères : RGAA / WCAG / RGESN. Applicabilité légale accessibilité = **à vérifier** (taille / statut du cabinet).

-| Cadence | Usage |
-|---------|-------|
-| Revue courte **hebdomadaire** | Pendant la phase active du projet |
-| Vérification **ponctuelle** | Avant toute décision technique structurante |
-| Vérification **avant** rédaction finale du rapport Bloc 1 | Consolidation |
-| Suivi **événementiel** | Changements réglementaires majeurs |
+7. **No-code / low-code** — Un panel d’outils a été étudié comme **candidats** (HubSpot, Airtable, Bubble, Softr, Power Apps, Make, n8n, Power Automate, Tally, Power BI…).
+   → Capacités documentées ; gaps connus (RDV, docs générés, portail « dossier »). **Aucune stack sélectionnée.**

-**Qualification :** WORKING CADENCE — **TO BE CONFIRMED BY GROUP**
-Cette cadence n’est **pas** présentée comme décision groupe validée.
+8. **IA** — Des aides (résumé, rédaction, documents, recherche, FAQ, KPI) restent en **veille**.
+   → Pas d’adoption. Les usages de décision (scoring, tarification, underwriting, reco automatique) sont plus sensibles. **AI Act** = à vérifier **selon le cas d’usage** retenu plus tard.

 ---

-## 8. Workflow de qualification d’une information
+### B. Marché et relation client

-```text
-Découverte
-  → ouverture de la source
-  → vérification organisme / date / périmètre
-  → synthèse factuelle
-  → qualification de pertinence CRM Courtage
-  → impact potentiel
-  → WATCH / RETAIN / DISCARD
-  → éventuelle intégration au rapport 1.3.2
-```
+**À retenir**

-**Interdit :**
+| Enseignement | Conséquence pour le projet |
+|--------------|----------------------------|
+| Digitalisation progressive (ventes en ligne souvent limitées sur beaucoup de marchés) | Ne pas concevoir un CRM « pure digital-only » |
+| Self-service et parcours simples visibles chez les acteurs digitaux | Espace client / devis / documents utiles |
+| Accompagnement humain souvent revendiqué | Préserver le conseil et le contact |
+| Multicanal | Physique, Visio, téléphone, email + digital |
+| Consolidation / mobilité des intermédiaires (contexte UE) | Outiller la relation et la différenciation |

-```text
-moteur de recherche → conclusion directe
-```
+**Patterns concurrence (observations, pas classement)** : devis en ligne ; espace client ; self-service ; accompagnement humain ; parcours simples.
+Relier au scénario projet : **proximité + personnalisation + transparence + RDV simple**.
+Ce n’est **pas** un benchmarking : aucun acteur n’est désigné comme modèle à recopier, et aucune architecture concurrente n’est déduite.

----
-
-## 9. Matrice de veille
-
-| Sujet | Question projet | Sources prioritaires | Information recherchée | Décision future potentiellement éclairée | Statut |
-|-------|-----------------|----------------------|------------------------|------------------------------------------|--------|
-| RGPD / données clients | Quelles contraintes doivent encadrer données, documents et accès ? | S01–S03, S11 | Bases légales, droits, sécurité, sous-traitance | Conception données / accès / DPA futurs | WATCH |
-| Distribution assurance / IDD | Quelles règles doivent être respectées dans un parcours digital ? | S05, S08, S12, S14 | Information client, conseil, transparence distribution | Parcours commercial digital futur | WATCH |
-| DORA / résilience | Le cabinet fictif est-il dans le champ ? Quelles exigences si oui ? | S05, S13, S15 | Champ d’application, ICT risk | Hébergement / SaaS / continuité — **si applicable** | WATCH — APPLICABILITY TO VERIFY |
-| No-code / low-code | Quelles capacités et limites vérifier avant sélection future ? | Docs éditeurs N3 (à peupler) + critères E | Capacités CRM/workflows/docs/portail/sécurité | Sélection stack future (hors 1.3.1) | WATCH |
-| IA | Quels usages sont pertinents et quelles contraintes les encadrent ? | S04, S03, S11 | Gouvernance IA, données, transparence | Cas d’usage IA futurs — aucun ADOPTED | WATCH |
-| Accessibilité | Quels principes doivent guider le futur espace client ? | S16, S17 | RGAA / bonnes pratiques ; champ d’obligation TO VERIFY | UX espace client futur | WATCH |
-| Écoconception | Quelles bonnes pratiques intégrer dès la conception ? | S18, S19 | RGESN / sobriété | Priorisation fonctionnalités / perf | WATCH |
-| Marché / concurrence | Comment évoluent digitalisation et rôle des courtiers ? | S09, S20 | Tendances usages / distribution | Positionnement produit (sans architecture) | WATCH |
+L’IA générative apparaît de plus en plus dans les canaux digitaux (chatbots, aides à la vente) : pour un cabinet de courtage, cela confirme l’intérêt d’une **veille IA**, pas d’une automatisation du conseil.

 ---

-## 10. Questions de veille ouvertes
+### C. Réglementation et données personnelles

-Toutes marquées **TO VERIFY** — aucune réponse inventée.
+| Sujet | Ce qu’on retient | Impact pour le CRM | À vérifier ? |
+|-------|------------------|--------------------|--------------|
+| Besoins client / devoir de conseil | Recueillir et actualiser les besoins ; conseil adapté | Formulaires, historique, comptes rendus | Application fine selon processus |
+| Traçabilité | Pouvoir retracer échanges et recommandations | Historique des échanges et contrats | Modalités exactes |
+| Minimisation / finalité | Ne collecter que le nécessaire | Champs et traitements utiles | Bases légales détaillées |
+| Conservation | Durées selon finalités (guidance CNIL assurance) | Règles de rétention | Calendrier final par type de donnée |
+| Droits des personnes | Accès, rectification, effacement, etc. | Parcours droits / export | Modalités via espace client |
+| Privacy by design | Intégrer la protection dès la conception | Choix de conception futurs | — |
+| Sous-traitants | DPA / garanties si SaaS | Critère de sélection d’outils | Éditeurs finalistes |
+| Données de santé | Régime renforcé **si** présentes | Impacts fort si confirmé | **HEALTH DATA = TO VERIFY** |
+| AIPD | Si risque élevé | Analyse avant mise en œuvre | **AIPD = TO VERIFY** |

-1. Nature exacte des données manipulées selon les types de contrats (auto, habitation, santé, prévoyance, etc.).
-2. Présence éventuelle de **données de santé** et conséquences associées.
-3. Taille / catégorie juridique du cabinet fictif lorsque nécessaire à l’applicabilité de certains textes (**ex. DORA**).
-4. Rôle exact des **compagnies d’assurance partenaires** (BMC) vs intégrations techniques futures.
-5. Niveau futur d’accès de l’**espace client** (canal validé — conception NON DÉCIDÉE).
-6. Besoins futurs d’**intégration** (compagnies, paiement, signature, etc.).
-7. Cas d’usage **IA** réellement retenus (aucun ADOPTED à ce stade).
-8. Contraintes de **sécurité** des plateformes candidates (niveau 3 à peupler).
-9. Exigences d’**accessibilité** juridiquement applicables vs bonnes pratiques retenues.
-10. Exigences de **conservation documentaire**.
+Pas d’avis juridique. Pas de certification « conforme RGPD » pour un outil.

 ---

-## 11. Squelette 1.3.2 — Rapport de veille
+### D. Sécurité, accessibilité et numérique responsable

-**Statut :** NOT STARTED — STRUCTURE ONLY
+**Sécurité — à prendre en compte**

-Sections prévues (à remplir uniquement après recherche sourcée) :
+- Authentification des utilisateurs (courtier, directeur, client).
+- Droits et moindre privilège (séparer les profils).
+- Espace client et documents : accès limité, traçabilité.
+- Logs utiles ; gestion d’incident à prévoir plus tard.
+- Sauvegarde et restauration ; export / réversibilité fournisseur.

-1. Synthèse exécutive
-2. Tendances marché / concurrence
-3. Réglementation assurance
-4. RGPD / données
-5. Cybersécurité / résilience
-6. No-code / low-code
-7. IA / nouvelles technologies
-8. Accessibilité / inclusion
-9. Numérique responsable
-10. Impacts concrets pour le CRM
-11. Contraintes à transmettre aux étapes suivantes
-12. Opportunités
-13. Questions encore ouvertes
-14. Sources
+MFA et SSO = **candidats** selon risque et population — **non décidés**.
+**DORA = TO VERIFY** (applicabilité au cabinet fictif non établie).
+Les scénarios de menace étudiés en recherche **ne sont pas** un registre de risques mesuré.

-**Ne pas** remplir ces sections avec des conclusions non recherchées.
+**Accessibilité — à prendre en compte**

----
+Navigation claire ; formulaires compréhensibles ; clavier / focus ; contraste ; documents lisibles ; authentification accessible ; ne pas exclure les clients non 100 % digitaux (multicanal).

-## 12. Préparation future de la soutenance
+| Repère | Statut pédagogique |
+|--------|--------------------|
+| RGAA | Référence de conception |
+| WCAG | Standard / guidance |
+| Obligation légale FR | **ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY** |

-Règle pédagogique tracée uniquement :
+**Numérique responsable — à prendre en compte**

-- la soutenance devra retenir les **éléments essentiels** pour le client ;
-- le système et le rapport complet seront plus détaillés dans le rapport de cadrage ;
-- un **focus** pourra être choisi ultérieurement selon pertinence (ex. RGPD, sécurité, accessibilité ou écoconception).
+Fonctionnalités vraiment utiles ; limiter données et traitements inutiles ; éviter interfaces lourdes ; garder maintenabilité et réversibilité.
+**RGESN** = référence d’écoconception (pas « obligatoire » sans preuve).

-**Aucun focus final décidé dans ce cycle.**
+En pratique : viser des écrans compréhensibles, des documents exploitables, des parcours qui n’excluent pas le téléphone ou le RDV physique, et éviter d’empiler des modules « parce que l’outil les propose ».

 ---

+### E. Technologies no-code / low-code et IA

----
-
-## 14. 1.3.2-A — Réglementation assurance & données personnelles
-
-| Champ | Valeur |
-|-------|--------|
-| **Statut** | **REVIEW PASS — REGULATION & DATA** (ChatGPT ; preuve postérieure au handoff Git historique AWAITING REVIEW) |
-| **Date de recherche** | 2026-09-29 |
-| **Transverse** | RGPD / conformité (activé) |
-| **Sécurité / RSSI autonome** | **NON** — deep-dive 1.3.2-B ouvert séparément |
-| **Nature** | Veille / analyse de cadrage sourcée — **pas** avis juridique ; **pas** conformité certifiée |
-
-### 14.1 Périmètre et méthode
-
-**Périmètre fonctionnel utilisé (1.1 / 1.2 uniquement) :** prospects ; clients ; contrats ; TPE/PME ; particuliers ; prospection ; devis ; relances ; RDV ; compréhension du besoin ; conseil / recommandation personnalisée ; souscription ; renouvellement / résiliation ; documents ; espace sécurisé documentaire ; historique ; espace client ; sinistres ; dashboard / KPI ; canaux RDV physique / Visio / téléphone / email / espace client.
-
-**Non inventé :** paiement ; signature électronique ; enregistrement d’appels ; API compagnies ; données bancaires ; données médicales stockées ; scoring / profilage automatisé ; antifraude — sauf mention **TO VERIFY** si une source montre une pertinence potentielle.
-
-**Méthode :** ouverture réelle de sources N1 (CNIL, ACPR, EIOPA, EUR-Lex) ; distinction fait réglementaire / implication projet / applicability ; interdiction moteur → conclusion.
-
-### 14.2 Synthèse exécutive bornée
-
-1. **IDD art. 20 (EUR-Lex)** : avant conclusion, le distributeur doit spécifier exigences et besoins du client, fournir une information compréhensible, et proposer un contrat **cohérent** avec ces besoins ; si conseil, une **recommandation personnalisée** motivée est requise → le CRM doit pouvoir **soutenir** (pas « décider ») le recueil / la traçabilité du parcours de conseil — **LIKELY** pour un parcours courtage digitalisé.
-2. **IDD art. 17 (EUR-Lex)** : agir honnêtement, loyalement et professionnellement dans l’intérêt du client → principe de conduite à transmettre à la conception du parcours — **LIKELY**.
-3. **ACPR reco. 2024-R-03** (+ article ACPR 2025) : formaliser le recueil d’informations pour devoir de conseil / recommandation personnalisée ; étendre le conseil dans la durée (dont dommages / prévoyance) ; entrée en application **31/12/2025** → le CRM a un intérêt fort à conserver l’historique besoins / conseils / échanges — **LIKELY** (applicabilité exacte au cabinet fictif **TO VERIFY** selon statut distributeur).
-4. **CNIL assurance — finalités** : distinguer (i) passation / gestion / exécution des contrats et (ii) prospection ; chaque finalité exige une base légale propre — bases finales du projet = **TO VERIFY**.
-5. **CNIL — minimisation** : ne traiter que données pertinentes / nécessaires ; exemple : localisation du bien non nécessaire pour une complémentaire santé — le modèle de données futur doit rester **minimal** — **CONFIRMED** (principe) / champs exacts **TO VERIFY**.
-6. **CNIL — conservation assurance** : prospect sans contrat ≈ **3 ans** depuis collecte / dernier contact prospect ; données utiles à défense de droits ≈ **5 ans** ; contrat conclu → délais de prescription sectoriels (ex. vie 30 ans dans certains cas) → guidance, **pas** politique finale — **LIKELY** / calibrage contrat par contrat **TO VERIFY**.
-7. **Contrat « santé » ≠ donnée de santé** : le brief cite des **catégories de contrats** (auto, habitation, santé, prévoyance) sans prouver le stockage de données concernant la santé → **HEALTH DATA PROCESSING = TO VERIFY** (voir §14.7).
-8. **RGPD art. 9 / CNIL** : données de santé = catégorie particulière ; traitement en principe interdit hors dérogations (protection sociale / consentement explicite selon cas) → si le CRM devait en traiter un jour, contraintes renforcées — **NON confirmé** dans le périmètre actuel.
-9. **Transparence / droits (CNIL + RGPD ch. III)** : information concise et accessible ; droits d’accès, rectification, opposition, etc. → à prévoir pour espace client / parcours — **LIKELY** sans UI décidée.
-10. **AIPD** : obligatoire si risque élevé (liste CNIL ou ≥2 critères G29) ; traitements réels non encore définis → **AIPD = TO VERIFY** — **ne pas** écrire REQUIRED.
-
-### 14.3 Distribution / devoir de conseil
-
-| Point | Fait réglementaire | Source | Applicability projet | Impact potentiel CRM | Statut |
-|-------|-------------------|--------|----------------------|----------------------|--------|
-| Exigences et besoins | Avant conclusion, spécifier demands & needs sur la base d’informations obtenues du client | IDD art. 20 §1 — EUR-Lex CELEX:32016L0097 | Parcours devis → RDV → proposition → souscription | Soutenir saisie / conservation des informations de besoin | LIKELY |
-| Cohérence produit | Tout contrat proposé doit être cohérent avec demands & needs | IDD art. 20 §1 | Conseil personnalisé BMC / 1.2 | Traçabilité du lien besoin → proposition | LIKELY |
-| Recommandation personnalisée | Si conseil fourni : recommandation personnalisée expliquant pourquoi le produit convient | IDD art. 20 §1 | « Conseil personnalisé » BMC | Enregistrer motivation / justification de conseil (niveau métier) | LIKELY |
-| Gradation | Détails modulés selon complexité produit et type de client | IDD art. 20 §2 | Segments TPE/PME / particuliers | Parcours / questionnaires différenciés possibles — **non conçus ici** | TO VERIFY |
-| Conduite générale | Agir honestly, fairly, professionally ; best interests of customers | IDD art. 17 | Tous canaux validés | Gouvernance du parcours digital / humain | LIKELY |
-| Information précontractuelle | Information claire avant signature ; IPID pour non-vie (cadre IDD / EIOPA) | EIOPA IDD page ; IDD | Souscription | Mettre à disposition / tracer remise d’informations — modalités **TO VERIFY** | LIKELY |
-| Recueil formalisé (FR) | Recommandation ACPR sur recueil d’informations client pour devoir de conseil / reco. personnalisée | ACPR 2024-R-03 (21/11/2024) ; article ACPR 22/09/2025 | Distributeurs FR | Formaliser questionnaires / historique / preuves de conseil | LIKELY |
-| Conseil dans la durée | ACPR recommande conseil périodique aussi pour dommages / prévoyance ; entrée en application 31/12/2025 | ACPR article 2025 | Renouvellement / vie du contrat | Rappels / revue besoins / historique | LIKELY / calendrier exact TO VERIFY |
-| Traçabilité documentaire | Nécessaire pour démontrer le parcours de conseil (principe issu des obligations d’information / reco.) | IDD + ACPR (lecture combinée) | Documents + historique + espace sécurisé | Conserver échanges / pièces / besoins | LIKELY |
-| Digitalisation | ACPR : quel que soit le canal de vente (ex. préférences durabilité assurance-vie) | ACPR article 2025 | Canaux Visio / email / espace client | Même exigence de qualité de conseil en digital | LIKELY |
-| Support durable / com. | Non approfondi ici hors besoins sourcés IDD/ACPR | — | — | Hors scope détaillé 1.3.2-A | **OUT OF SCOPE / NOT ASSESSED IN THIS DEEP-DIVE** |
-
-**Limite :** ACPR 2024-R-03 est une **recommandation** de superviseur (bonnes pratiques / attentes de Place), distincte du texte IDD. Le statut juridique exact pour le cabinet fictif reste **TO VERIFY** (ORIAS / catégorie d’intermédiaire).
-
-### 14.4 Cartographie des catégories de données (pas un modèle de données)
-
-| Domaine | Donnée / catégorie identifiable | Source projet | Donnée personnelle ? | Catégorie particulière potentielle ? | Finalité probable issue du besoin | Statut | Question restante |
-|---------|--------------------------------|---------------|----------------------|--------------------------------------|-----------------------------------|--------|-------------------|
-| Prospect | Identité / coordonnées de contact | 1.1 / 1.2 (prise de contact, devis, RDV) | Oui (si personne physique) | Non a priori | Entrée en relation / devis / RDV | LIKELY | Champs exacts NON DÉCIDÉS |
-| Prospect | Contenu devis / besoin initial | 1.1 / 1.2 | Oui si rattaché à une personne | Possible selon produit (santé) — **TO VERIFY** | Préparation devis / conseil | LIKELY | Contenu devis santé ? |
-| Prospect | Historique d’échanges | 1.1 / 1.2 / BMC transparence | Oui | Non a priori | Continuité / traçabilité relation | LIKELY | Canaux de capture |
-| Client | Identité / coordonnées | 1.1 / 1.2 | Oui | Non a priori | Gestion relation / contrat | LIKELY | — |
-| Client | Données de contrat (type, garanties, échéances) | 1.1 / 1.2 / BMC | Oui si personne physique | Le **type** « santé » ≠ donnée de santé | Gestion / renouvellement / conseil | LIKELY | Périmètre champs contrat |
-| Client | Documents administratifs | 1.1 / 1.2 / espace sécurisé | Oui souvent | Possible (Pièces) — **TO VERIFY** | Gestion documentaire | LIKELY | Types de pièces |
-| Client | Historique échanges / contrats | BMC | Oui | Non a priori | Transparence / confiance | LIKELY | Accès espace client |
-| Sinistre | Infos déclaration / suivi | 1.1 / 1.2 (niveau brief) | Oui | Possible selon sinistre — **TO VERIFY** | Suivi sinistre | LIKELY | Granularité non définie |
-| Pilotage | KPI (conversion, panier, satisfaction) | 1.1 / 1.2 | Agrégats : pas nécessairement ; individuels : oui | Non a priori | Pilotage commercial | TO VERIFY | Agrégation vs individuel |
-| Segments | TPE/PME / particulier | BMC groupe | Particulier : oui ; TPE/PME : selon personnes | Non a priori | Segmentation relationnelle | LIKELY | Statut PME vs personne |
-
-### 14.5 Principes RGPD pertinents à transmettre
-
-| Principe | Source officielle | Applicability | Impact futur | Décision encore nécessaire |
-|----------|-------------------|---------------|--------------|----------------------------|
-| Licéité / loyauté / transparence | RGPD art. 5 ; CNIL information | LIKELY | Mentions d’information ; UX transparence | Rédaction mentions ; responsable de traitement |
-| Finalités déterminées | RGPD art. 5 ; CNIL bases légales assurance | LIKELY | Séparer finalités contrat vs prospection | Cartographie traitements réelle |
-| Minimisation | RGPD art. 5 ; CNIL minimisation assurance | CONFIRMED (principe) | Limiter champs CRM | Liste de champs |
-| Exactitude | RGPD art. 5 | LIKELY | Mise à jour coordonnées / besoin | Processus de mise à jour |
-| Limitation de conservation | RGPD art. 5 ; CNIL durées assurance | LIKELY | Politique rétention différenciée | Calibrage par finalité / contrat |
-| Intégrité / confidentialité (sécurité appropriée) | RGPD art. 5 + art. 32 | LIKELY (principe) | Exigence de sécurité — **détails → 1.3.2-B** | Mesures techniques |
-| Privacy by design / by default | RGPD art. 25 | LIKELY | Intégrer minimisation dès conception | Architecture future |
-| Sous-traitance | RGPD art. 28 | LIKELY si SaaS / no-code | Contrats / garanties processeur | Choix plateforme (NOT DECIDED) |
-| Droits des personnes | RGPD art. 12–22 ; CNIL droits assurance | LIKELY | Accès / rectification / opposition via process ou espace client | Modalités |
-| Bases légales | RGPD art. 6 ; CNIL grands traitements | **TO VERIFY** | Ne pas figer une base par traitement fictif | Analyse traitement par traitement |
-| Catégories particulières | RGPD art. 9 ; CNIL données de santé assurance | **TO VERIFY** | Si santé : régime renforcé | Preuve projet de traitement |
-
-**Bases légales possibles à étudier (CNIL assurance) — non attribuées définitivement :** contrat (mesures précontractuelles / exécution) ; obligation légale ; intérêt légitime ; consentement (notamment prospection électronique / cas art. 9).
-**Base juridique finale = TO VERIFY.**
-
-### 14.6 Conservation — guidance / candidats de contrainte
-
-Source prioritaire : CNIL — *Les durées de conservation des données du secteur de l’assurance* (16/07/2021).
-
-| Situation | Guidance CNIL (synthèse) | Applicability CRM | Statut |
-|-----------|--------------------------|-------------------|--------|
-| Prospect / pas de contrat (prospection) | Ne pas conserver au-delà de **3 ans** à compter de la collecte ou du **dernier contact émanant du prospect** | Parcours prospect CRM | LIKELY |
-| Données pour constatation / défense / exercice de droits | Jusqu’à **5 ans** (prescription de droit commun, selon CNIL) | Contentieux potentiel | LIKELY |
-| Contrat conclu | Délais de **prescription sectoriels** (ex. assurance-vie : jusqu’à 30 ans dans certains cas cités) | Vie du contrat / archives | TO VERIFY (selon types de contrats réellement gérés) |
-| Fraude (si un jour) | Règles spécifiques (6 mois qualification alerte ; 5 ans si pertinente) | **Hors périmètre actuel** | NOT APPLICABLE pour l’instant |
-
-**Ce n’est PAS une politique de rétention finale.** Les durées dépendent du type de contrat, de la prescription et de la finalité.
-
-### 14.7 Données de santé / catégories particulières
-
-1. **Définition (RGPD, recital / cadre CNIL)** : données concernant la santé = informations révélant l’état de santé physique ou mentale passé, présent ou futur d’une personne (EUR-Lex GDPR ; traitement encadré art. 9).
-2. **Protection spécifique** : traitement en principe **interdit**, sous dérogations (CNIL : protection sociale ; consentement explicite art. 9.2.a selon cas ; défense de droits, etc.).
-3. **Distinction critique :**
-   - **TYPE DE CONTRAT « SANTÉ »** (catégorie produit du brief) ;
-   - **≠ DONNÉE CONCERNANT LA SANTÉ** (catégorie particulière RGPD).
-4. **Situations potentielles assurance (CNIL)** : complémentaire santé / prévoyance / emprunteur peuvent impliquer des données de santé **si** le traitement le nécessite ; la CNIL appelle à vigilance NIR / santé.
-5. **État du projet 1.1 / 1.2 :** aucun champ, pièce, questionnaire médical, ni traitement de donnée de santé n’est décrit comme stocké dans le CRM.
-
-**Verdict sous-sujet :**
-
-### HEALTH DATA PROCESSING = TO VERIFY
-
-Forme équivalente retenue : **NO EVIDENCE OF HEALTH DATA PROCESSING IN CURRENT PROJECT SCOPE** — la présence future reste **TO VERIFY** dès que le contenu réel des dossiers « santé / prévoyance / sinistres » sera précisé.
-
-### 14.8 AIPD / risques élevés
-
-| Élément | Contenu | Statut |
-|---------|---------|--------|
-| Cadre | RGPD art. 35 ; CNIL page AIPD (18/10/2017) | — |
-| Quand | Traitement susceptible d’engendrer un **risque élevé** : liste CNIL **ou** ≥2 critères G29 (scoring/profilage, décision auto, données sensibles, large échelle, etc.) | — |
-| Projet actuel | Traitements détaillés, volumes, technologies, profilage non définis | — |
-| Conclusion | **Ne pas écrire AIPD REQUIRED** | **TO VERIFY** |
-
-### 14.9 Tableau contraintes / impacts futurs
-
-| ID | Constat sourcé | Applicability | Impact potentiel CRM | Étape future concernée | Statut |
-|----|----------------|---------------|----------------------|------------------------|--------|
-| C-A01 | Demands & needs + cohérence produit (IDD art. 20) | LIKELY | Capacité à recueillir / historiser le besoin et le rattacher à la proposition | Conception fonctionnelle ; UX/UI | OPEN |
-| C-A02 | Recommandation personnalisée motivée si conseil (IDD art. 20) | LIKELY | Tracer justification de conseil | Conception fonctionnelle | OPEN |
-| C-A03 | Formalisation recueil + conseil dans la durée (ACPR 2024-R-03 / 2025) | LIKELY | Rappels périodiques ; revue besoins ; preuves | Conception ; delivery | OPEN |
-| C-A04 | Finalités distinctes contrat vs prospection (CNIL) | LIKELY | Séparer traitements / bases / oppositions | Conception ; architecture fonctionnelle | OPEN |
-| C-A05 | Minimisation (CNIL / RGPD art. 5) | CONFIRMED (principe) | Éviter sur-collecte | Conception ; architecture données | OPEN |
-| C-A06 | Conservation prospect ~3 ans / droits ~5 ans / contrat selon prescription (CNIL) | LIKELY | Règles de rétention différenciées | Architecture ; delivery ; QA | OPEN |
-| C-A07 | Transparence + droits personnes (RGPD / CNIL) | LIKELY | Information + exercice des droits | UX/UI ; delivery | OPEN |
-| C-A08 | Privacy by design (RGPD art. 25) | LIKELY | Intégrer minimisation / droits dès design | Architecture ; UX/UI | OPEN |
-| C-A09 | Sous-traitance (RGPD art. 28) si éditeur SaaS | LIKELY | DPA / garanties processeur | Architecture technique ; delivery | OPEN |
-| C-A10 | Sécurité appropriée (RGPD art. 32) — principe | LIKELY | Exigence de sécurité | **Sécurité/RSSI → 1.3.2-B** | OPEN — handoff B |
-| C-A11 | Données de santé / art. 9 | TO VERIFY | Régime renforcé **si** confirmation projet | Conception ; Sécurité/RSSI | OPEN |
-| C-A12 | AIPD si risque élevé | TO VERIFY | Analyse avant mise en œuvre le cas échéant | Conception ; Sécurité/RSSI | OPEN |
-
-### 14.10 Questions TO VERIFY (1.3.2-A)
-
-1. Statut exact du cabinet fictif comme distributeur / inscription ORIAS.
-2. Types de contrats réellement proposés et pièces demandées (surtout santé / prévoyance).
-3. Présence ou non de **données concernant la santé** dans les dossiers CRM.
-4. Bases légales retenues traitement par traitement.
-5. Volume / échelle des traitements (critère AIPD).
-6. Usage ou non de profilage / décision automatisée.
-7. Sous-traitants techniques futurs (stack NOT DECIDED).
-8. Politique de conservation fine par famille de contrat.
-9. Modalités d’exercice des droits via espace client.
-10. Périmètre exact « conseil dans la durée » applicable aux produits du cas.
-
-### 14.11 Sources exploitées (1.3.2-A)
-
-| ID | Thème | Organisme | Titre / page | Lien | Date (si dispo) | Consultation | Pertinence | Statut |
-|----|-------|-----------|--------------|------|-----------------|--------------|------------|--------|
-| S21 | Assurance / RGPD | CNIL | Le secteur de l’assurance | https://www.cnil.fr/fr/assurance | — | 2026-09-29 | Hub sectoriel | ACTIVE |
-| S22 | Conservation | CNIL | Durées de conservation — secteur assurance | https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees-du-secteur-de-lassurance | 16/07/2021 | 2026-09-29 | Guidance rétention | ACTIVE |
-| S23 | Minimisation / santé | CNIL | Minimisation, NIR et données de santé | https://www.cnil.fr/fr/le-principe-de-minimisation-et-les-traitements-du-nir-et-des-donnees-de-sante-dans-le-secteur-de | 16/07/2021 | 2026-09-29 | Art. 9 / minimisation | ACTIVE |
-| S24 | Bases légales | CNIL | Grands traitements et bases légales | https://www.cnil.fr/fr/les-grands-traitements-du-secteur-de-lassurance-et-leurs-bases-legales | 16/07/2021 | 2026-09-29 | Finalités / bases | ACTIVE |
-| S25 | Droits / profilage | CNIL | Droit des personnes et profilage | https://www.cnil.fr/fr/droit-des-personnes-et-profilage-les-specificites-du-secteur-de-lassurance | 16/07/2021 | 2026-09-29 | Transparence / droits | ACTIVE |
-| S26 | AIPD | CNIL | Ce qu’il faut savoir sur l’AIPD | https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd | 18/10/2017 | 2026-09-29 | Applicability AIPD | ACTIVE |
-| S27 | Devoir de conseil | ACPR | Publication reco. devoir de conseil | https://acpr.banque-france.fr/fr/actualites/publication-de-la-recommandation-sur-le-devoir-de-conseil-en-assurance | 22/09/2025 (maj 25/09/2026) | 2026-09-29 | Conseil dans la durée / calendrier | ACTIVE |
-| S28 | Devoir de conseil | ACPR | Recommandation 2024-R-03 | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/recommandation-2024-r-03-du-21-novembre-2024-sur-le-recueil-des-informations-relatives-au-client | 21/11/2024 (maj 24/09/2026) | 2026-09-29 | Recueil infos client | ACTIVE |
-| S29 | IDD | EIOPA | Insurance Distribution Directive | https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en | — | 2026-09-29 | Cadre distribution UE | ACTIVE |
-| S30 | IDD texte | EUR-Lex | Directive (UE) 2016/97 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L0097 | 2016 | 2026-09-29 | Art. 17 / 20 | ACTIVE |
-| S31 | RGPD texte | EUR-Lex | Règlement (UE) 2016/679 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | 2016 | 2026-09-29 | Art. 5, 6, 9, 12–22, 25, 28, 32, 35 | ACTIVE |
-| S03 | Sécurité données (principe) | CNIL | Guide sécurité des données personnelles | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles | — | 2026-09-29 | Lien principe → 1.3.2-B | ACTIVE (déjà S03) |
-
-### 14.12 Frontière explicite avec 1.3.2-B (Sécurité & résilience)
-
-**Inclus ici (principe RGPD uniquement) :** confidentialité / intégrité comme objectifs ; sécurité appropriée (art. 32) comme contrainte de transmission ; protection documentaire comme besoin métier.
-
-**Exclus / reportés à 1.3.2-B :** threat modeling ; matrice de risques cyber ; IAM détaillé ; chiffrement cible ; MFA ; sauvegarde / PRA / PCA ; durcissement ; évaluation fournisseurs SaaS ; **DORA détaillé**.
-
-### 14.13 Limites / réserves
-
-- Pas d’avis juridique ni de conformité certifiée.
-- Cabinet fictif : taille / statut / produits exacts incomplets.
-- PDF intégral ACPR 2024-R-03 non paraphrasé article par article ; synthèse appuyée sur page officielle + article ACPR 2025.
-- Légifrance non mobilisé (accès technique parfois bloqué) ; droit FR cité via ACPR/CNIL.
-- Aucune stack / architecture / conception SSI.
-
-
-## 15. 1.3.2-B — Sécurité & résilience
-
-| Champ | Valeur |
-|-------|--------|
-| **Statut** | **REVIEW PASS — SECURITY & RESILIENCE** (ChatGPT ; preuve postérieure au handoff Git historique AWAITING REVIEW) |
-| **Date de recherche** | 2026-09-29 |
-| **Type cœur** | Sécurité / RSSI |
-| **Profil** | **Standard** — research-only / cadrage sécurité |
-| **Critical** | **NON** — aucune acceptation de risque, aucune décision d’architecture SSI, aucun contrôle implémenté |
-| **Nature** | Analyse qualitative proportionnée — **pas** audit ; **pas** pentest ; **pas** EBIOS RM complète ; **pas** politique SSI ; **pas** preuve DORA |
-
-### 15.1 Périmètre et méthode
-
-**Périmètre fonctionnel protégé (1.1 / 1.2 uniquement) :** acteurs Courtier / Directeur / Prospect→Client / TPE-PME / particuliers ; processus prospection → devis → relances → RDV → conseil → souscription → renouvellement / résiliation → documents → sinistres → pilotage ; informations identité / besoins / devis / contrats / documents / historique / sinistres (niveau brief) / KPI ; canaux RDV physique / Visio / téléphone / email / espace client ; capacités centralisation / espace documentaire sécurisé / historique / espace client / automatisations futures non définies.
-
-**Réserves héritées de 1.3.2-A (non recalculées) :** `HEALTH DATA PROCESSING = TO VERIFY` ; `AIPD = TO VERIFY` ; bases légales = TO VERIFY ; sous-traitants / SaaS = NOT DECIDED ; architecture / stack = NOT DECIDED. Données de santé **non présumées** ; si confirmées plus tard, contraintes / impacts potentiels augmenteraient.
-
-**Méthode :** analyse qualitative proportionnée (pas de score fictif « RISK = HIGH ») ; cartographie actifs / surfaces ; scénarios R-B01…R-B12 ; familles de contrôles candidates ; exigences C-Bxx. Sources N1 réellement ouvertes (CNIL Guide sécurité 2024 + fiches ; ANSSI hygiène / MFA / sauvegarde ; RGPD art. 32–34 via CNIL + S31 ; DORA 2022/2554 + EIOPA Q&A).
-
-**Posture CKC (fallback synthetic map + §4.10) :** adversarial ; surfaces ; données ; scénarios ; contrôles ; limites ; preuves — **pas** de fausse maturité. Autorité d’exécution : **aucune** (method-candidate).
-
-**Hors scope strict :** architecture SSI ; IAM / RBAC final ; choix MFA / IdP ; algorithmes / KMS / hébergement ; SIEM / SOC / EDR ; PRA/PCA/RPO/RTO finaux ; scoring fournisseur ; pentest ; ouverture 1.3.2-C/D/E ou 1.4.
-
-### 15.2 Synthèse exécutive bornée
-
-1. **FAIT** — RGPD art. 32 exige des mesures techniques et organisationnelles appropriées (intégrité / confidentialité) → **IMPACT** : le futur CRM devra permettre des contrôles proportionnés, non encore choisis → **STATUT** : DESIGN CONSTRAINT / implementation NOT DECIDED
-2. **RECOMMANDATION OFFICIELLE** — CNIL (fiches 4–5) : authentifier chaque utilisateur ; limiter les accès au besoin → **IMPACT** : comptes Courtier / Directeur / Client à séparer conceptuellement → **STATUT** : SECURITY REQUIREMENT CANDIDATE ; ACCESS CONTROL MODEL = TO DESIGN LATER
-3. **RECOMMANDATION OFFICIELLE** — CNIL / ANSSI : privilégier MFA selon analyse de risque (esp. accès externes / privilégiés) → **IMPACT** : MFA candidat pour populations à risque, **pas** décision « MFA obligatoire pour tous » → **STATUT** : MFA / STRONG AUTHENTICATION = SECURITY REQUIREMENT CANDIDATE
-4. **FAIT métier** — espace client + espace documentaire validés comme capacités → **IMPACT** : séparation logique, droits, traçabilité des accès / téléchargements = contraintes de conception → **STATUT** : SECURITY DESIGN CONSTRAINTS
-5. **RECOMMANDATION OFFICIELLE** — CNIL fiche 16 : journaliser accès / modifications / événements sécurité → **IMPACT** : auditabilité candidate (durée / SIEM non décidés) → **STATUT** : AUDITABILITY / LOGGING = DESIGN CONSTRAINT CANDIDATE
-6. **RECOMMANDATION OFFICIELLE** — CNIL fiche 17 + ANSSI sauvegarde : copies régulières, isolation, tests de restauration → **IMPACT** : résilience à concevoir ; RPO/RTO = TO VERIFY → **STATUT** : BUSINESS CONTINUITY REQUIREMENTS = TO DEFINE
-7. **FAIT réglementaire** — RGPD art. 33/34 + CNIL : documenter violations ; notifier si risque ; informer si risque élevé → **IMPACT** : processus incident futur requis → **STATUT** : INCIDENT & BREACH MANAGEMENT = FUTURE PROCESS REQUIREMENT
-8. **RECOMMANDATION OFFICIELLE** — CNIL cloud / sous-traitance : évaluer sécurité fournisseur (auth, rôles, sauvegarde, localisation…) → **IMPACT** : checklist critères futurs SaaS/no-code (sans sélection d’outil) → **STATUT** : à réutiliser en 1.3.2-D
-9. **FAIT réglementaire** — DORA (UE) 2022/2554 art. 2(1)(o) peut couvrir les intermédiaires ; art. 2(3)(e) exclut micro/PME → **IMPACT** : size metrics cabinet manquantes → **STATUT** : **DORA APPLICABILITY = TO VERIFY**
-10. **LIMITE** — architecture / contrôles actuels / fréquences d’incident **inconnus** → **IMPACT** : impacts = POTENTIAL IMPACT / SCENARIO PRIORITY uniquement → **STATUT** : aucune acceptation de risque ; aucune architecture décidée
-
-### 15.3 Actifs / surfaces à protéger
-
-Cartographie de **haut niveau** (pas de CMDB ; pas d’inventaire technique fictif).
-
-| Actif / surface | Valeur / rôle métier | C | I | D | T | Question ouverte |
-|-----------------|----------------------|---|---|---|---|------------------|
-| Comptes internes Courtier | Accès dossiers / conseil / documents | HIGH | HIGH | MEDIUM | HIGH | MFA / sessions / récupération = TO DESIGN |
-| Accès Directeur | Pilotage + vue élargie probable | HIGH | HIGH | MEDIUM | HIGH | Périmètre droits vs Courtier = TO DESIGN |
-| Espace client futur | Canal validé ; conception non définie | HIGH | HIGH | MEDIUM | HIGH | Auth client / récupération de compte |
-| Données prospect | Identité / besoins / devis | HIGH | MEDIUM | MEDIUM | MEDIUM | Minimisation / conservation (→ A) |
-| Données client | Identité / contrats / historique | HIGH | HIGH | HIGH | HIGH | Classification sensibilité = TO VERIFY |
-| Contrats | Engagements / renouvellement | HIGH | HIGH | HIGH | HIGH | Intégrité des versions |
-| Documents (espace documentaire) | Admin / pieces / échanges | HIGH | HIGH | HIGH | HIGH | Séparation logique / partage |
-| Historique échanges / contrats | Continuité relationnelle | MEDIUM | HIGH | HIGH | HIGH | Rétention vs audit |
-| Données sinistre (niveau brief) | Suivi sinistres | HIGH | HIGH | HIGH | HIGH | Santé ? = TO VERIFY (A) |
-| Dashboard / KPI | Pilotage commercial | LOW–MED | MEDIUM | MEDIUM | LOW | Agrégation / accès Directeur |
-| Email (canal) | Relances / échanges | HIGH | MEDIUM | MEDIUM | MEDIUM | Phishing / fuite pièce jointe |
-| Futur SaaS / no-code | Dépendance potentielle | HIGH | HIGH | HIGH | HIGH | Critères sécurité (15.10) ; fournisseur NOT DECIDED |
-
-Légende : C=confidentialité ; I=intégrité ; D=disponibilité ; T=traçabilité (pertinence qualitative). Niveaux = **priorité de conception**, non risque mesuré.
-
-### 15.4 Scénarios de risque
-
-Analyse qualitative. **Pas** de score fictif « RISK = HIGH ». Colonnes : impact potentiel, exposition, confiance.
-
-| ID | Actif / processus | Scénario | Propriété | Impact potentiel | Exposition | Confiance | Mesures candidates | Statut |
-|----|-------------------|----------|-----------|------------------|------------|-----------|--------------------|--------|
-| R-B01 | Comptes Courtier / Directeur | Compromission compte interne (vol crédentials, session) | C / I / T | HIGH | PLAUSIBLE | MEDIUM | Auth forte candidate ; moindre privilège ; journalisation ; sensibilisation | DESIGN CONSTRAINT |
-| R-B02 | Espace client | Compromission compte client | C / I | HIGH | CONTEXT DEPENDENT | MEDIUM | Auth / récupération compte ; séparation dossiers | DESIGN CONSTRAINT |
-| R-B03 | Habilitations | Accès excessif (dossiers hors besoin) | C / T | HIGH | PLAUSIBLE | HIGH | Profils d’habilitation ; revue périodique | DESIGN CONSTRAINT |
-| R-B04 | Documents / email | Divulgation documents / données (mauvais destinataire, partage) | C | HIGH | PLAUSIBLE | MEDIUM | Droits partage ; traçabilité téléchargement ; sensibilisation | DESIGN CONSTRAINT |
-| R-B05 | Données / documents | Perte / altération (suppression, corruption, erreur) | I / D | HIGH | PLAUSIBLE | MEDIUM | Sauvegardes ; contrôles suppression ; restauration testée | DESIGN CONSTRAINT |
-| R-B06 | Service / données | Indisponibilité (panne, ransomware, dépendance SaaS) | D | HIGH | CONTEXT DEPENDENT | MEDIUM | Sauvegarde isolée ; continuité TO DEFINE ; critères fournisseur | DESIGN CONSTRAINT |
-| R-B07 | Email / utilisateurs | Phishing / ingénierie sociale | C / I | HIGH | PLAUSIBLE | HIGH | Sensibilisation ; auth renforcée ; procédures signalement | DESIGN CONSTRAINT |
-| R-B08 | Opérations critiques | Absence / insuffisance de traçabilité | T | MEDIUM–HIGH | PLAUSIBLE | HIGH | Journalisation accès / admin / incidents | DESIGN CONSTRAINT |
-| R-B09 | Futur SaaS / no-code | Mauvaise configuration (partage trop large, MFA off) | C / I / D | HIGH | CONTEXT DEPENDENT | MEDIUM | Checklist config ; moindre privilège ; revue | DESIGN CONSTRAINT — outil NOT SELECTED |
-| R-B10 | Fournisseur / sous-traitant | Dépendance : dispo, garanties sécurité, localisation | C / D | HIGH | CONTEXT DEPENDENT | MEDIUM | Due diligence sécurité ; contrat art. 28 ; réversibilité | DESIGN CONSTRAINT — fournisseur NOT DECIDED |
-| R-B11 | Gouvernance | Incident / violation mal détecté ou mal traité | C / T / gouvernance | HIGH | CONTEXT DEPENDENT | MEDIUM | Processus incident / violation ; documentation | FUTURE PROCESS REQUIREMENT |
-| R-B12 | Résilience | Sauvegarde ou restauration insuffisante | D / I | HIGH | PLAUSIBLE | HIGH | Règle 3-2-1 candidate ; tests restauration ; RPO/RTO TO VERIFY | DESIGN CONSTRAINT |
-
-**Scénarios non ajoutés (hors justification périmètre) :** attaque API (API non retenue) ; fraude paiement ; signature électronique ; biométrie ; IA ; app mobile ; infra cloud détaillée.
-
-### 15.5 Familles de contrôles candidates
-
-| Famille | Source principale | Portée projet | Statut |
-|---------|-------------------|---------------|--------|
-| Authentification (identifiants uniques, mots de passe, MFA candidate) | CNIL F4 ; ANSSI MFA | Comptes internes / client / admin futurs | CANDIDATE — techno NOT DECIDED |
-| Habilitations / moindre privilège | CNIL F5 | Courtier / Directeur / Client | ACCESS CONTROL MODEL = TO DESIGN LATER |
-| Protection échanges / documents | CNIL F13 / espace doc métier | Email, espace documentaire | CANDIDATE |
-| Chiffrement transit / repos | CNIL F21 ; F22 cloud ; RGPD art. 32 | Données / sauvegardes / cloud futur | ENCRYPTION REQUIREMENT = CANDIDATE / TO SPECIFY DURING ARCHITECTURE |
-| Journalisation / audit | CNIL F16 | Accès, admin, modifications, sécurité | DESIGN CONSTRAINT CANDIDATE |
-| Sauvegarde / restauration | CNIL F17 ; ANSSI sauvegarde | Données critiques métier | CANDIDATE — RPO/RTO TO VERIFY |
-| Continuité / reprise | CNIL F18 (principe) | Disponibilité relation client / contrats / sinistres | BUSINESS CONTINUITY = TO DEFINE |
-| Gestion incidents / violations | CNIL F19 ; art. 33/34 | Processus organisationnel | FUTURE PROCESS REQUIREMENT |
-| Sous-traitance / cloud / SaaS | CNIL F14 / F22 | Futurs fournisseurs | Critères 15.10 — outil NOT SELECTED |
-| Sensibilisation utilisateurs | CNIL F3 ; ANSSI hygiène | Phishing / email | CANDIDATE process |
-
-**Note :** recommandations ANSSI = bonnes pratiques (non obligations légales sauf texte contraire). RGPD art. 32 = obligation de mesures **appropriées** (proportionnées), pas une checklist technique imposée ici.
-
-### 15.6 Authentification et habilitations
-
-#### Authentification
-
-**Constat CNIL (F4, 2024) :** identifiant propre ; authentification avant accès ; MFA = ≥2 catégories distinctes (connaissance / possession / inhérence) ; interdiction comptes partagés sauf exception tracée ; politique mots de passe (empreinte, complexité selon cas d’usage) ; privilégier MFA surtout si accès depuis l’extérieur.
-
-**Constat ANSSI (guide MFA / mots de passe, 2021) :** analyser le risque avant choix des moyens ; privilégier MFA et facteur de possession ; adapter robustesse au contexte.
-
-| Élément | Statut projet |
-|---------|---------------|
-| MFA / strong authentication | **SECURITY REQUIREMENT CANDIDATE** |
-| Populations potentiellement concernées | Comptes privilégiés / admin futurs ; accès externes ; Courtier / Directeur (à arbitrer) ; espace client (à arbitrer) |
-| Mots de passe / récupération de compte / sessions | À évaluer en conception — **pas** de politique finale |
-| Technologie IdP / SSO / facteur concret | **NOT DECIDED** |
-| Décision « MFA REQUIRED FOR ALL USERS » | **NON** — hors cadrage Standard |
-
-#### Habilitations
-
-**Constat CNIL (F5) :** moindre privilège ; profils d’habilitation ; validation des demandes ; retrait à départ / changement ; revue a minima annuelle.
-
-**Application projet (principe uniquement) :**
-- **Courtier** : accès aux dossiers / documents nécessaires à son activité — pas de droits admin génériques.
-- **Directeur** : vue pilotage / élargie possible, **sans** présumer « accès total » — à concevoir.
-- **Client** : accès limité à **ses** données / documents via espace client.
-
-**ACCESS CONTROL MODEL = TO DESIGN LATER** — pas de matrice RBAC finale ; pas de permissions décidées.
-
-### 15.7 Espace client / documents / données
-
-**SECURITY DESIGN CONSTRAINTS** (conception UI / stockage / chiffrement **non** choisis) :
-
-| Thème | Contrainte candidate | Statut |
-|-------|----------------------|--------|
-| Accès non autorisé | Authentification + droits avant consultation / téléchargement | CANDIDATE |
-| Confidentialité | Séparation logique des dossiers clients / prospects | CANDIDATE |
-| Droits | Partage / téléchargement limités au besoin | CANDIDATE |
-| Traçabilité | Journaliser accès / partage / suppression significatifs | CANDIDATE |
-| Récupération de compte (espace client) | Processus sûr à définir (éviter prise de contrôle) | TO DESIGN |
-| Suppression / rétention | Alignement conservation (→ 1.3.2-A) + possibilité restauration | TO VERIFY / TO DESIGN |
-| Exposition accidentelle (email) | Sensibilisation ; minimiser pièces jointes sensibles | CANDIDATE process |
-| Chiffrement | Transit + repos = familles à spécifier en architecture | CANDIDATE / TO SPECIFY |
-| Stockage / hébergement | | **NOT DECIDED** |
+**OUTILS CANDIDATS — AUCUNE STACK SÉLECTIONNÉE.**

-Si `HEALTH DATA PROCESSING` était un jour confirmé : **augmentation** des contraintes / impacts potentiels (sans inventer le traitement ici).
+Panel doctrine (présence = candidat à évaluer, pas adopté) : HubSpot, Airtable, Bubble, Softr, Power Apps, Make, n8n, Power Automate, Tally, Power BI, Voiceflow, Postman, Notion, Figma, Miro ; Shopify hors besoin e-commerce validé.

-### 15.8 Journalisation / incidents / violations
+| Besoin | Familles / candidats déjà étudiés | Point d’attention |
+|--------|-----------------------------------|-------------------|
+| CRM / relation client | HubSpot ; apps data (Airtable, Bubble, Power Apps) | Couverture métier, licences, export |
+| Portail / espace client | Softr ; Bubble ; Power Apps / Pages ; portail HubSpot (partiel) | Rôles, sécurité, accessibilité |
+| Formulaires / collecte | Tally ; forms natifs | Consentement, accessibilité |
+| Automatisation | Make, n8n, Power Automate ; workflows CRM | Gouvernance des flux, logs |
+| Reporting / KPI | Power BI ; reporting CRM | Sobriété des tableaux de bord |
+| Documents | Capacités natives / extensions selon outils | Génération accessible souvent à compléter |
+| RDV | Peu de natif unifié dans le panel | **Discovery future éventuelle** (sans ajouter d’outil ici) |
+| Intégrations / API | Docs éditeurs | Quotas, maintenance, DPA |
+| Collaboration / design | Notion, Figma, Miro, Postman | Hors cœur CRM runtime |

-#### Journalisation / traçabilité
+**IA — pistes en veille (non adoptées)**

-**CNIL F16 :** journaliser activités métier, interventions techniques/admin, anomalies et événements sécurité ; conserver typiquement 6 mois–1 an (sauf besoin légal / contentieux / post-incident) ; tracer création / consultation / partage / modification / suppression (auteur, date/heure, nature, référence) ; protéger les journaux ; analyser pour détecter incidents.
+Résumé d’historique ; aide à la rédaction ; classement / extraction documentaire ; recherche d’information ; FAQ / assistant ; synthèse KPI.
+Statut : **à étudier / veille**.

-**AUDITABILITY / LOGGING = DESIGN CONSTRAINT CANDIDATE**
+Usages plus sensibles (scoring, tarification, éligibilité, underwriting, recommandation automatique) : **étude spécifique requise** avant toute idée d’adoption.
+**AI Act :** à vérifier selon le cas d’usage IA réellement retenu.

-**Non décidé :** format logs ; SIEM ; durée finale ; pipeline technique.
-
-#### Incidents / violations
-
-**CNIL F19 + page « Notifier une violation » + RGPD art. 33/34 :**
-- documenter **toutes** les violations en interne ;
-- évaluer le risque pour les personnes ;
-- notifier la CNIL **si** risque pour droits/libertés (objectif 72 h après constatation) ;
-- informer les personnes **si** risque élevé (sauf exceptions) ;
-- intégrer violations dans le processus de gestion d’incidents ; critères de qualification ; sensibilisation au signalement.
-
-**INCIDENT & BREACH MANAGEMENT = FUTURE PROCESS REQUIREMENT**
-
-**Non créé ici :** procédure complète ; rôles DPO / RSSI / SOC fictifs ; playbooks techniques.
-
-### 15.9 Sauvegarde / restauration / résilience
-
-**CNIL F17 :** sauvegardes fréquentes ; copie géographiquement distincte ; au moins une copie hors ligne ; même niveau de sécurité que la production ; canal chiffré si transmission réseau ; **tester** intégrité et restauration ; règle **3-2-1** recommandée.
-
-**ANSSI (fondamentaux sauvegarde, 2023) :** sauvegarde indispensable face aux rançongiciels ; recommandations techniques/organisationnelles (segmentation, comptes dédiés, etc.) — à adapter au contexte futur ; **pas** d’obligation légale autonome ANSSI.
-
-| Élément | Statut |
-|---------|--------|
-| Sauvegardes régulières + isolation | SECURITY REQUIREMENT CANDIDATE |
-| Restauration testée | SECURITY REQUIREMENT CANDIDATE |
-| RPO | **TO VERIFY** |
-| RTO | **TO VERIFY** |
-| Business continuity requirements | **TO DEFINE** |
-| PRA / PCA final | **NOT PRODUCED** |
-| Outil de backup / hébergement | **NOT DECIDED** |
-
-**Questions à arbitrer ultérieurement :** quelles données sont critiques (contrats, documents, historique, sinistres) ? quelle durée d’indisponibilité acceptable métier ? qui opère restauration (cabinet / fournisseur) ? fréquence des tests ?
-
-### 15.10 Critères sécurité futurs SaaS / no-code
-
-Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’éditeur.
-
-| # | Critère candidat | Pourquoi |
-|---|------------------|----------|
-| 1 | Authentification / MFA disponible et configurable | CNIL F4 ; ANSSI MFA |
-| 2 | Gestion des rôles / séparation des accès | CNIL F5 |
-| 3 | Séparation logique des espaces / tenants | Espace client / documents |
-| 4 | Chiffrement déclaré (transit / repos) | CNIL F21/F22 ; art. 32 |
-| 5 | Journalisation / export d’audit | CNIL F16 |
-| 6 | Sauvegarde / restauration / RPO-RTO déclarés | CNIL F17 ; ANSSI |
-| 7 | Disponibilité / continuité documentées | Résilience métier |
-| 8 | Gestion / notification d’incidents | CNIL F19 ; art. 33 |
-| 9 | Sous-traitants / chaîne d’hébergement documentés | CNIL F14/F22 ; art. 28 (A) |
-| 10 | Conditions de suppression / export / réversibilité | Exit / RGPD |
-| 11 | Documentation sécurité / attestations (si pertinentes) | Due diligence — **pas** obligation générique inventée |
-| 12 | Localisation / transferts de données | RGPD transferts (A) ; CNIL cloud |
-
-**Aucun fournisseur évalué. Stack = NOT DECIDED.**
-
-### 15.11 DORA — applicability & watch
-
-#### Champ d’application
-
-**Source :** Règlement (UE) 2022/2554 (DORA), EUR-Lex.
-
-- **Art. 2(1)(o) :** le règlement **peut** s’appliquer aux *insurance intermediaries, reinsurance intermediaries and ancillary insurance intermediaries*.
-- **Art. 2(3)(e) :** **exclusion** des intermédiaires (assurance / réassurance / auxiliaires) qui sont **microenterprises** ou **small or medium-sized enterprises**.
-- **Définitions de taille (Art. 3) :** micro (&lt;10 personnes et CA et/ou bilan ≤ 2 M€) ; small (10–&lt;50 et seuils CA/bilan) ; medium-sized (&lt;250 et CA ≤ 50 M€ et/ou bilan ≤ 43 M€) — définitions DORA (peuvent différer de la Rec. 2003/361/CE ; EIOPA DORA011).
-
-#### Q&A EIOPA / Commission
-
-- **DORA237 / Q&A 3350 :** confirme l’exemption art. 2(3)(e) pour intermédiaires micro/PME ; calcul des seuils pour activités d’assurance limitées = ressources **dédiées à l’assurance** (proportionnalité).
-- **DORA099 / Q&A 3100 :** règles de calcul type Rec. 2003/361/CE avec seuils DORA ; intermédiaires dans un groupe non financier → calcul **au niveau de l’entité individuelle**.
-
-#### Confrontation projet
-
-| Information nécessaire | Disponible ? |
-|------------------------|--------------|
-| Effectif (FTE) | **NON** |
-| Chiffre d’affaires | **NON** |
-| Bilan | **NON** |
-| Structure de groupe | **NON** |
-| Catégorie juridique exacte | **NON** (cabinet fictif / brief) |
-
-#### Verdict
-
-### DORA APPLICABILITY = TO VERIFY
-
-**Pas** de checklist de conformité DORA complète (applicabilité non établie).
-
-**Si applicable plus tard — thèmes à surveiller (watch only) :** gestion du risque ICT ; incidents majeurs ; résilience opérationnelle numérique ; risque tiers ICT — **sans** imposer ces exigences aujourd’hui.
-
-**Informations pour trancher :** effectif, CA, bilan, groupe, statut d’intermédiaire.
-
-### 15.12 Contraintes / exigences à transmettre aux étapes suivantes
-
-| ID | Source / constat | Scénario | Applicability | Exigence candidate | Étape future | Statut |
-|----|------------------|----------|---------------|--------------------|--------------|--------|
-| C-B01 | RGPD art. 32 ; CNIL Guide sécurité | Transverse | LIKELY | Mesures techniques/organisationnelles appropriées (C/I/D) | Architecture technique ; Sécurité/RSSI futur | OPEN — candidate |
-| C-B02 | CNIL F4 ; ANSSI MFA | R-B01, R-B02, R-B07 | LIKELY (principe) | Authentification robuste ; MFA = **candidate** selon risque / population | Conception ; Architecture ; Sécurité/RSSI futur | OPEN — MFA NOT MANDATED FOR ALL |
-| C-B03 | CNIL F5 | R-B03 | LIKELY | Moindre privilège ; profils Courtier / Directeur / Client | Conception fonctionnelle ; Architecture | OPEN — RBAC TO DESIGN |
-| C-B04 | Besoin métier + CNIL F5/F16 | R-B02, R-B04 | LIKELY | Espace client : accès limité aux données autorisées pour l’utilisateur et le périmètre qu’il représente (particulier ou TPE/PME) ; récupération de compte sûre | Conception ; UX/UI ; Architecture | OPEN |
-| C-B05 | Besoin métier + CNIL | R-B04 | LIKELY | Espace documentaire : séparation logique ; droits partage/téléchargement ; traçabilité | Conception ; Architecture | OPEN |
-| C-B06 | CNIL F21/F22 ; art. 32 | R-B04, R-B09 | LIKELY (principe) | Chiffrement transit / repos à spécifier | Architecture technique | OPEN — algo/KMS NOT DECIDED |
-| C-B07 | CNIL F16 | R-B08 | LIKELY | Journalisation accès / admin / modifications / événements sécurité | Architecture ; RUN | OPEN — SIEM NOT DECIDED |
-| C-B08 | CNIL F17 ; ANSSI sauvegarde | R-B05, R-B06, R-B12 | LIKELY | Sauvegardes isolées + restauration testée | Architecture ; RUN ; Sécurité/RSSI futur | OPEN — RPO/RTO TO VERIFY |
-| C-B09 | CNIL F18 (principe) | R-B06 | CONTEXT DEPENDENT | Exigences de continuité métier à définir | Sécurité/RSSI futur ; RUN | OPEN — PCA/PRA TO DEFINE |
-| C-B10 | CNIL F19 ; art. 33/34 | R-B11 | LIKELY | Processus incidents / violations (doc, analyse risque, notification) | Sécurité/RSSI futur ; RUN | OPEN — process NOT WRITTEN |
-| C-B11 | CNIL F3 ; ANSSI hygiène | R-B07 | LIKELY | Sensibilisation phishing / email | Delivery ; RUN | OPEN |
-| C-B12 | CNIL F14/F22 ; checklist 15.10 | R-B09, R-B10 | LIKELY si SaaS | Critères sécurité fournisseurs (auth, rôles, backup, audit, localisation, réversibilité) | 1.3.2-D ; Architecture | OPEN — outil NOT SELECTED |
-| C-B13 | DORA art. 2 + EIOPA Q&A | Résilience réglementaire | **TO VERIFY** | Trancher applicabilité avec size metrics ; sinon watch only | Sécurité/RSSI futur ; conformité | OPEN — DORA TO VERIFY |
-| C-B14 | Héritage 1.3.2-A | Santé / AIPD | TO VERIFY | Si santé confirmée → réévaluer contraintes sécurité / AIPD | Sécurité/RSSI futur ; conformité | OPEN — HEALTH DATA TO VERIFY |
-
-### 15.13 Questions TO VERIFY
-
-1. Effectif / CA / bilan / groupe du cabinet → **DORA applicability** ?
-2. `HEALTH DATA PROCESSING` confirmé ou non (impact sécurité) ?
-3. Populations pour lesquelles MFA sera retenue (interne / client / admin) ?
-4. Modèle d’accès Courtier vs Directeur vs Client (profondeur des droits) ?
-5. RPO / RTO / criticité des données pour continuité ?
-6. Qui opère sauvegarde / restauration (cabinet vs fournisseur) ?
-7. Durée de conservation des journaux (besoin légal / contentieux) ?
-7bis. Périmètre exact des données sinistre à protéger ?
-8. Localisation / transferts si recours cloud / SaaS ?
-9. Processus organisationnel incident (rôles réels du cabinet) — sans inventer DPO/RSSI ici ?
-10. NIS2 / autres cadres cyber sectoriels — **hors conclusion** sans preuve (non tranché ici) ?
-
-### 15.14 Sources exploitées
-
-| ID | Thème | Organisme | Titre | URL | Date | Consultation | Pertinence | Statut |
-|----|-------|-----------|-------|-----|------|--------------|------------|--------|
-| S32 | Guide sécurité | CNIL | Guide de la sécurité des données personnelles (hub + édition 2024) | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles ; PDF https://cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf | 2024-03 | 2026-09-29 | Fiches 4–5, 16–19, 21–22 | ACTIVE |
-| S33 | Auth | CNIL | Sécurité : Authentifier les utilisateurs | https://www.cnil.fr/fr/securite-authentifier-les-utilisateurs | 2024-03-14 | 2026-09-29 | Identifiants ; MFA ; mots de passe | ACTIVE |
-| S34 | Habilitations | CNIL | Sécurité : Gérer les habilitations | https://www.cnil.fr/fr/securite-gerer-les-habilitations | 2024-03-13 | 2026-09-29 | Moindre privilège ; revues | ACTIVE |
-| S35 | Logs | CNIL | Sécurité : Tracer les opérations | https://www.cnil.fr/fr/securite-tracer-les-operations | 2024-03-14 | 2026-09-29 | Journalisation | ACTIVE |
-| S36 | Backup | CNIL | Sécurité : Sauvegarder | https://cnil.fr/fr/securite-sauvegarder | 2024-03-14 | 2026-09-29 | 3-2-1 ; tests restauration | ACTIVE |
-| S37 | Incidents | CNIL | Sécurité : Gérer les incidents et les violations | https://www.cnil.fr/fr/gerer-les-incidents-et-les-violations | 2024-03-14 | 2026-09-29 | Processus ; art. 33/34 | ACTIVE |
-| S38 | Violations | CNIL | Notifier une violation de données personnelles | https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles | 2018-05-24 | 2026-09-29 | Notification 72 h ; art. 33/34 | ACTIVE |
-| S39 | Cloud | CNIL | Sécurité : Cloud, informatique en nuage | https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage | 2024-03-14 | 2026-09-29 | Critères SaaS / cloud | ACTIVE |
-| S40 | Hygiène | ANSSI | Guide d’hygiène informatique | https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique | 2017-01-23 | 2026-09-29 | Socle 42 mesures (bonnes pratiques) | ACTIVE |
-| S41 | MFA | ANSSI | Recommandations authentification multifacteur et mots de passe | https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe | 2021-10-08 | 2026-09-29 | MFA selon risque | ACTIVE |
-| S42 | Backup | ANSSI | Sauvegarde des systèmes d’information (fondamentaux) | https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation | 2023-10-25 | 2026-09-29 | Résilience / ransomware | ACTIVE |
-| S43 | DORA texte | EUR-Lex | Règlement (UE) 2022/2554 (DORA) | https://eur-lex.europa.eu/eli/reg/2022/2554/oj | 2022-12-27 | 2026-09-29 | Art. 2, 3 (60)(63)(64) | ACTIVE |
-| S44 | DORA Q&A | EIOPA / CE | DORA237 — 3350 | https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/dora237-3350_en | 2025-05-26 (submission) | 2026-09-29 | Exemption intermédiaires PME | ACTIVE |
-| S45 | DORA Q&A | EIOPA / CE | 3100 — DORA099 | https://www.eiopa.europa.eu/qa-regulation/questions-and-answers-database/3100-dora099_en | 2024-06-04 (submission) | 2026-09-29 | Calcul taille / groupe | ACTIVE |
-| S31 | RGPD | EUR-Lex | Règlement (UE) 2016/679 | (déjà au registre) | 2016 | 2026-09-29 | Art. 32, 33, 34 | ACTIVE (réutilisé) |
-
-### 15.15 Limites / réserves
-
-- **Pas** d’audit, pentest, homologation, EBIOS RM complète, politique SSI, architecture sécurité, acceptation de risque.
-- Architecture / stack / fournisseur SaaS / chiffrement / MFA / RPO-RTO / PRA-PCA = **NOT DECIDED**.
-- Impacts = **potentiels** ; exposition souvent CONTEXT DEPENDENT faute de runtime.
-- DORA = **TO VERIFY** (size metrics absentes) — **ni** applicable **ni** non applicable déclaré.
-- HEALTH DATA / AIPD / bases légales restent **TO VERIFY** (1.3.2-A).
-- Recommandations ANSSI ≠ obligations légales automatiques.
-- Deep-dive **1.3.2-C** ouvert séparément (accessibilité & numérique responsable).
-
-
-## 16. 1.3.2-C — Accessibilité & numérique responsable
-
-| Champ | Valeur |
-|-------|--------|
-| **Statut** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** (ChatGPT ; preuve postérieure au handoff Git historique AWAITING REVIEW) |
-| **Date de recherche** | 2026-09-29 |
-| **Type** | Cadrage — DOC / accessibility-responsible-digital research |
-| **Transverses** | Accessibilité ; GreenOps / sobriété numérique (§4.16) |
-| **Profil** | **Standard** |
-| **Critical** | **NON** — aucune cible de conformité engagée ; aucune architecture / stack ; aucun engagement environnemental chiffré |
-| **Nature** | Veille / cadrage — **pas** audit RGAA ; **pas** déclaration d’accessibilité ; **pas** certification WCAG ; **pas** bilan carbone / ACV / GreenOps runtime |
-
-### 16.1 Périmètre et méthode
-
-**Périmètre fonctionnel (1.1 / 1.2) :** interfaces internes (Courtier / Directeur) ; espace client (particulier / TPE-PME) ; formulaires ; contenus ; documents générés ; notifications ; prise de rendez-vous ; dashboard / KPI ; canaux physique / Visio / téléphone / email / espace client.
+---

-**Méthode :** sources N1 ouvertes (RGAA officiel, décret 2019-768 **tel que modifié** par décret n° **2026-816** du 24 août 2026 — source primaire **Légifrance** `JORFTEXT000054746617` / ELI `…/eli/decret/2026/8/24/2026-816/jo/texte` (S49b ; consultation HTML 2026-09-29 = Cloudflare challenge — existence confirmée via lien officiel INSEI → Légifrance), EUR-Lex EAA 2019/882, W3C WCAG, RGESN 2024 / Arcep–MiNumEco) ; distinction stricte **obligation juridique** / **référentiel** / **bonne pratique** ; analyse qualitative sans inventer d’écrans ni de scores environnementaux.
+### F. Ce que la veille implique pour la suite

-**Posture CKC Cadrage :** besoin avant solution ; rendre visibles les inconnues ; ne pas convertir un référentiel en obligation sans preuve ; pas d’écoconception = architecture prématurée.
+| Enseignement | À prendre en compte ensuite | Étape concernée |
+|--------------|-----------------------------|-----------------|
+| Traçabilité du conseil | Historique, comptes rendus, règles métier | Conception fonctionnelle |
+| Documents / données sensibles | Droits, sécurité, accès | Architecture / sécurité (futurs) |
+| Accessibilité | Parcours, composants, tests | UX/UI + QA |
+| Multicanal | Parcours adaptés (pas digital-only) | Conception / UX |
+| Réversibilité / export | Critère de sélection d’outils | Choix des outils |
+| Dépendances licences (SSO, audit…) | Coût et faisabilité | Budget |
+| IA assistive | Cas d’usage à cadrer, oversight humain | Conception / IA |
+| Sobriété | Éviter fonctionnalités inutiles | Conception |
+| Gaps RDV / docs générés | Discovery si besoin confirmé | Conception / outils |
+| Conformité conditionnelle (santé, DORA, a11y légale) | Trancher avec données cabinet | Conformité / Morris |

-**Hors scope :** maquettes ; design system ; audit d’écrans ; certification ; bilan carbone ; PUE ; région cloud ; sélection no-code ; ouverture 1.3.2-D / 1.4.
+Cette table **prépare** organisation, budget et vision (étapes ultérieures du cadrage) : elle ne les ouvre pas et ne produit ni backlog, ni sprints, ni architecture cible.

-### 16.2 Synthèse exécutive bornée
+---

-1. **RÉFÉRENTIEL** — RGAA **4.1.2** (DINUM ; MAJ 2023-04-18) = méthode opérationnelle fondée sur WCAG 2.1 A/AA → **IMPACT** : critères design pour espace client, formulaires, contenus → **STATUT** : ACCESSIBILITY DESIGN REFERENCE
-2. **FAIT juridique** — obligation FR (art. 47 loi 2005-102) : organismes publics + entreprises privées au seuil CA moyen France **≥ 250 M€** (3 exercices) → **IMPACT** : CA cabinet fictif **inconnu** → **STATUT** : **ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY** (pas « RGAA REQUIRED »)
-3. **FAIT UE** — Directive (UE) 2019/882 (EAA) : services listés (dont *consumer banking*, e-commerce) ; *consumer banking* **≠** distribution d’assurance (définitions art. 2) → **IMPACT** : banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** si conclusion de contrats consommateurs en ligne → **STATUT** : EAA overall **TO VERIFY** / banking **NOT APPLICABLE**
-4. **STANDARD** — WCAG 2.1 (référence RGAA) / WCAG 2.2 (W3C latest, encouragement) → **IMPACT** : guidance technique ; **pas** obligation FR automatique hors rattachement légal → **STATUT** : STANDARD / GUIDANCE
-5. **GOOD PRACTICE** — clavier, structure, contraste, formulaires/erreurs, focus, alternatives, documents, auth accessible, dashboard → **IMPACT** : FUTURE ACCESSIBILITY DESIGN CONSTRAINTS → **STATUT** : C-C01… candidates
-6. **FAIT métier** — BMC multicanal (physique, Visio, téléphone, email, espace client) → **IMPACT** : digitalisation **ne doit pas** être le seul chemin d’accès au service → **STATUT** : INCLUSION / MULTICHANNEL DESIGN CONSTRAINT
-7. **RÉFÉRENTIEL** — RGESN **version 2024** (v2, 2024-05-28 ; Arcep/Arcom + ADEME ; loi REEN art. 25) = base de **démarches volontaires** d’écoconception → **IMPACT** : guide sobriété CRM → **STATUT** : **RGESN = DESIGN / ECO-CONCEPTION REFERENCE** (pas « RGESN REQUIRED » sans preuve)
-8. **GOOD PRACTICE** — utilité fonctionnelle, parcours simples, données/traitements proportionnés, interfaces légères, réversibilité → **IMPACT** : leviers cadrage sans métriques fictives → **STATUT** : RESPONSIBLE DIGITAL CONSTRAINTS
-9. **CHECKLIST** — critères accessibilité + écoconception pour évaluer futurs outils no-code/SaaS → **IMPACT** : réutiliser en **1.3.2-D** → **STATUT** : FUTURE TOOL EVALUATION CRITERIA (outil NOT SELECTED)
-10. **LIMITE** — architecture / volumes / plateforme **inconnus** → **IMPACT** : pas de bilan carbone, pas de cible CO₂, pas de GreenOps runtime → **STATUT** : hypothèses / questions uniquement
+### G. Points à vérifier et veille à poursuivre
+
+| Question | Moment utile pour trancher |
+|----------|----------------------------|
+| Données de santé réellement traitées ? | Avant modèle de données / conformité |
+| AIPD nécessaire ? | Avant mise en œuvre à risque |
+| DORA applicable au cabinet ? | Conformité / résilience |
+| Accessibilité juridiquement applicable (CA / statut) ? | Conformité / UX |
+| Conservation finale par type de donnée ? | Conception / RUN |
+| Fournisseurs, DPA, localisation, transferts ? | Avant choix d’outils |
+| Objectifs de restauration (RPO / RTO) ? | Architecture / exploitation |
+| Outil RDV / calendrier nécessaire hors panel ? | Discovery / outils |
+| Génération documentaire spécialisée + accessibilité ? | Conception / QA |
+| Cas d’usage IA réellement retenu ? | Avant toute adoption IA |
+| Niveaux de licence des finalistes (SSO, audit…) ? | Budget + choix outils |
+| Budget global acceptable ? | Budget |

-### 16.3 Applicabilité juridique accessibilité
+---

-| Sujet | Source | Nature | Applicability | Impact CRM | Étape future | Statut |
-|-------|--------|--------|---------------|------------|--------------|--------|
-| Obligation accessibilité services en ligne (champ FR) | Loi 2005-102 art. 47 ; décret 2019-768 **modifié par** décret 2026-816 (24/08/2026) ; page RGAA champ d’application | LEGAL REQUIREMENT (si organisme dans le champ) | **TO VERIFY** (CA / statut juridique cabinet inconnus) | Déterminer si déclaration / conformité légale s’imposent | Conformité futur ; Morris | OPEN |
-| Seuil entreprise privée 250 M€ CA moyen FR | Décret 2019-768 ; RGAA obligations | LEGAL REQUIREMENT (seuil) | **TO VERIFY** | Si CA < seuil et hors autres cas → obligation art. 47 **probablement** hors champ — **non démontré** ici | Conformité | OPEN — no false NOT APPLICABLE |
-| RGAA comme méthode technique | DINUM RGAA 4.1.2 | OFFICIAL REFERENCE | LIKELY (référence de conception) même si obligation TO VERIFY | Critères opérationnels UX/QA | UX/UI ; QA ; conception | OPEN |
-| EAA — consumer banking | Dir. 2019/882 art. 2 (liste crédit, MiFID, paiements, comptes, e-money) | LEGAL REQUIREMENT (si service listé) | **NOT APPLICABLE** au courtage assurance *en tant que* banking listé | Ne pas assimiler assurance = banque | — | QUALIFIED |
-| EAA — e-commerce | Dir. 2019/882 art. 2(30) (service à distance visant conclusion contrat consommateur) | LEGAL REQUIREMENT (si service = e-commerce) | **TO VERIFY** | Dépend de la nature exacte de l’espace client / souscription en ligne | Conception ; conformité | OPEN |
-| EAA — microentreprises (exemption services) | Dir. 2019/882 art. 4(5) / recitals | LEGAL REQUIREMENT (exemption) | **TO VERIFY** (effectif/CA/bilan inconnus) | Si micro → exemption possible si EAA applicable | Conformité | OPEN |
-| WCAG 2.1 A/AA | W3C ; renvoi RGAA / entreprises 4° | STANDARD / GUIDANCE | LIKELY as design baseline | Critères techniques | UX/UI ; QA | OPEN |
-| Déclaration d’accessibilité | Cadre FR si assujetti | LEGAL REQUIREMENT (si assujetti) | **TO VERIFY** | Ne pas produire de déclaration dans ce cycle | Conformité futur | NOT PRODUCED |
+### H. Sources prioritaires

-### ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY
+Groupes utiles (détail exhaustif = historique Git) :

-**Ne pas écrire :** RGAA REQUIRED / EAA REQUIRED / ACCESSIBILITY DECLARATION REQUIRED — sans taille / nature de service établies.
+1. **EIOPA** — rapports / structure marché distribution (IDD)
+2. **ACPR** — recommandations devoir de conseil / distribution
+3. **CNIL** — assurance, conservation, minimisation, sécurité des données
+4. **EUR-Lex** — RGPD ; IDD ; AI Act
+5. **ANSSI** — bonnes pratiques sécurité / MFA / sauvegarde
+6. **DINUM / RGAA** — accessibilité numérique
+7. **W3C WCAG** — standard d’accessibilité
+8. **RGESN / MiNumEco–Arcep** — écoconception
+9. **Commission européenne** — cadre AI Act (applicabilité selon cas d’usage)
+10. **Docs éditeurs** du panel (HubSpot, Microsoft Power Platform, Airtable, Bubble, Softr, Make, n8n, Tally…) — capacités **candidats** uniquement

-### 16.4 Référentiels et principes accessibilité
+La recherche détaillée et le registre exhaustif restent traçables dans l’historique Git du chantier 1.3.2.

-**RGAA 4.1.2 (vérifié 2026-09-29) :** version courante du référentiel DINUM ; 106 critères ; aligné WCAG 2.1 A/AA / EN 301 549 V2.1.2 ; RGAA 5 en rédaction (publication prévue fin 2026) — **ne pas suspendre** les travaux d’accessibilité.
+---

-**Domaines d’analyse (contraintes de conception futures — pas audit) :**
+## 5. Limites

-| ID | Domaine | Principe à transmettre | Statut |
-|----|---------|------------------------|--------|
-| A-C01 | Navigation clavier | Toutes fonctions utilisables au clavier | FUTURE ACCESSIBILITY DESIGN CONSTRAINT |
-| A-C02 | Structure / titres / landmarks | Structure sémantique (titres, régions) | idem |
-| A-C03 | Contraste / non-couleur seule | Info non portée uniquement par la couleur ; contraste suffisant | idem |
-| A-C04 | Formulaires / labels / erreurs | Labels associés ; messages d’erreur compréhensibles ; aide | idem |
-| A-C05 | Focus visible | Indicateur de focus perceptible | idem |
-| A-C06 | Alternatives textuelles | Images / icônes / non-texte | idem |
-| A-C07 | Contenu compréhensible | Langage clair lorsque pertinent (conseil / devis) | idem |
-| A-C08 | Documents téléchargeables | Voir §16.6 | ACCESSIBLE DOCUMENT GENERATION = CANDIDATE |
-| A-C09 | Auth / récupération compte | Voir §16.5 — SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE | CONSTRAINT CANDIDATE |
-| A-C10 | Dashboard / graphiques / KPI | Alternatives textuelles / données tabulaires ; pas d’info couleur seule | FUTURE CONSTRAINT |
-| A-C11 | Responsive / zoom / reflow | Contenu utilisable avec zoom / différentes largeurs (réf. WCAG/RGAA) | FUTURE CONSTRAINT |
-| A-C12 | Technologies d’assistance | Compatibilité raisonnable (API accessibilité des composants) | FUTURE CONSTRAINT — stack NOT DECIDED |
-
-### 16.5 Impacts sur les parcours CRM
-
-| Parcours / surface | Implications candidates | Étape future |
-|--------------------|-------------------------|--------------|
-| Espace client | Navigation, formulaires, documents, auth accessibles ; contenu clair | UX/UI ; QA |
-| Formulaires (devis, RDV, besoins) | Labels, erreurs, ordre de tabulation, délais non punitifs | Conception ; UX/UI |
-| Rendez-vous | Parcours digital **complété** par téléphone / physique / Visio | Conception fonctionnelle |
-| Devis / conseil | Contenu compréhensible ; documents accessibles | Conception ; delivery |
-| Dashboard / KPI | Graphiques avec alternative ; contrastes | UX/UI ; QA |
-| Notifications (email / in-app) | Messages clairs ; ne pas dépendre d’un seul canal | Conception ; RUN |
-| Auth / MFA / récupération | Alternatives / canaux de secours ; pas de méthode unique inaccessible ; délais raisonnables | Conception ; Sécurité/RSSI (sans modifier B) |
-
-**SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE** — contrainte transverse : les contrôles candidats de 1.3.2-B (MFA, récupération de compte) devront être conçus pour rester utilisables ; **sans** choisir techno ni affaiblir les exigences sécurité.
-
-### 16.6 Documents numériques et contenus
-
-Le brief prévoit génération / envoi de documents (devis, administratifs, contrats…).
-
-**Enjeux candidats :** structure (titres) ; texte exploitable (pas image seule du texte) ; tableaux lisibles ; alternatives si graphiques ; PDF accessible **si** format PDF retenu.
-
-### ACCESSIBLE DOCUMENT GENERATION = FUTURE REQUIREMENT CANDIDATE
-
-**Non décidé :** format document ; générateur ; outil PDF.
-
-### 16.7 Inclusion numérique / multicanal
-
-**Risque :** parcours **trop exclusivement digital** → exclusion (capacités, équipements, aisance numérique, situations temporaires).
-
-**Levier validé BMC :** pluralité de canaux — RDV physique, Visio, téléphone, email, espace client — peut soutenir **continuité / inclusion** sans décider le détail des parcours.
-
-**Principes candidats :**
-- ne pas rendre l’espace client le **seul** moyen d’accéder aux documents / suivi ;
-- prévoir bascule humaine (téléphone / RDV) pour étapes critiques ;
-- éviter personas handicap inventés / faux résultats d’entretien.
-
-**Statut :** INCLUSION / MULTICHANNEL = DESIGN CONSTRAINT CANDIDATE (parcours détaillés NOT DESIGNED).
-
-### 16.8 Référentiel écoconception / statut
-
-| Élément | Valeur vérifiée |
-|---------|-----------------|
-| Référentiel | **RGESN** — Référentiel général d’écoconception des services numériques |
-| Version | **2024** (Version 2 ; dernière MAJ **28 mai 2024**) |
-| Gouvernance | Arcep & Arcom, en lien avec ADEME (mandat loi REEN art. 25) ; héritage MiNumEco / DINUM 2022 |
-| Contenu | **78** critères / fiches pratiques |
-| Statut juridique pour ce projet | **Référentiel / guide de démarches volontaires** — socle de bonnes pratiques ; déclaration d’écoconception = **prérequis pour se prévaloir** de l’application du référentiel — **pas** démontré comme obligation générique de conformité pour le cabinet fictif |
-
-### RGESN = DESIGN / ECO-CONCEPTION REFERENCE
-
-**Ne pas écrire :** RGESN REQUIRED / RGESN COMPLIANT.
-
-GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, questions — **pas** métriques runtime.
-
-### 16.9 Leviers de sobriété pertinents pour le CRM
-
-| ID | Axe | Leviers cadrage (sans quantification) | Dépend architecture / plateforme ? |
-|----|-----|----------------------------------------|-------------------------------------|
-| E-C01 | Utilité fonctionnelle | Éviter fonctionnalités sans valeur métier démontrée | Non (cadrage) |
-| E-C02 | Parcours simples | Réduire étapes inutiles (devis, RDV, espace client) | Partiel |
-| E-C03 | Données / conservation | Limiter collecte & conservation inutiles (lien A, sans rouvrir) | Partiel |
-| E-C04 | Traitements / automatisations | Automatiser seulement tâches à valeur démontrée | Partiel |
-| E-C05 | Interfaces | Limiter complexité UI / poids pages | Oui (outil) |
-| E-C06 | Médias | Éviter médias lourds non nécessaires | Oui |
-| E-C07 | Requêtes réseau | Critère futur d’évaluation outil | Oui |
-| E-C08 | Services tiers | Minimiser dépendances inutiles | Oui |
-| E-C09 | Volume stocké | Historique « utile » vs rétention maximale | Partiel |
-| E-C10 | Maintenabilité / réversibilité | Export, sortie, durée de vie service | Oui |
-| E-C11 | Terminaux / obsolescence | Compatibilité équipements plus anciens (RGESN) | Oui |
-| E-C12 | Mesure future | Suivi critères environnementaux **plus tard** si engagement | Oui — **pas** de métrique inventée ici |
-
-**Questions projet (design / responsible digital — pas décisions) :**
-1. Centralisation : réduit-elle les doublons sans sur-collecte ?
-2. Historique : quel niveau est réellement utile (aligné conservation A) ?
-3. Génération documentaire : éviter duplications / stockage inutile ?
-4. Automatisations : uniquement valeur métier démontrée ?
-5. Dashboard : KPI réellement utiles, pas surdimensionné ?
-6. Espace client : complexité limitée au besoin utilisateur réel ?
-
-**Interdit ici :** gCO₂eq, PUE, score environnemental fictif, région cloud, autoscaling.
-
-### 16.10 Critères futurs no-code / SaaS
-
-**FUTURE TOOL EVALUATION CRITERIA** — réutiliser en **1.3.2-D** — **sans** scorer ni sélectionner d’éditeur.
-
-**Accessibilité :**
-- interfaces / HTML accessibles ou composants accessibles ;
-- navigation clavier / focus visible ;
-- labels formulaires / gestion d’erreurs ;
-- contraste / thèmes ;
-- possibilité d’ajouter attributs ARIA / sémantique nécessaires ;
-- documents générés accessibles (ou export structuré) ;
-- limites de personnalisation accessibilité documentées.
-
-**Numérique responsable :**
-- maîtrise poids pages / assets ;
-- optimisation ressources ;
-- contrôle dépendances tierces ;
-- maîtrise stockage / cycle de vie données ;
-- maîtrise requêtes ;
-- export / réversibilité ;
-- capacité à désactiver fonctionnalités inutiles ;
-- documentation / transparence environnementale éditeur **si disponible** (non obligatoire inventée) ;
-- mesures / déclarations pertinentes **si** revendiquées.
-
-**Aucun outil évalué. Stack = NOT DECIDED.**
-
-### 16.11 Contraintes / recommandations à transmettre
-
-| ID | Source / constat | Nature | Applicability | Impact CRM | Étape future | Statut |
-|----|------------------|--------|---------------|------------|--------------|--------|
-| C-C01 | RGAA / WCAG — clavier, focus | OFFICIAL REFERENCE / STANDARD | LIKELY (design) | Navigation clavier + focus visible | UX/UI ; QA | OPEN |
-| C-C02 | RGAA / WCAG — formulaires | idem | LIKELY | Labels, aide, erreurs compréhensibles | Conception ; UX/UI ; QA | OPEN |
-| C-C03 | RGAA / WCAG — contraste / structure | idem | LIKELY | Contraste ; titres ; info non-couleur seule | UX/UI ; QA | OPEN |
-| C-C04 | RGAA docs / bonne pratique | GOOD PRACTICE | LIKELY | Génération documents accessibles | Delivery ; QA | OPEN — format NOT DECIDED |
-| C-C05 | WCAG + lien B (MFA candidate) | GOOD PRACTICE | LIKELY | Auth / récupération accessibles ; SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE | Conception ; Sécurité/RSSI ; UX | OPEN — techno NOT DECIDED |
-| C-C06 | BMC multicanal + inclusion | GOOD PRACTICE | LIKELY | Ne pas digitaliser exclusivement ; conserver canaux humains | Conception fonctionnelle | OPEN |
-| C-C07 | RGESN — utilité / parcours | DESIGN / ECO REFERENCE | LIKELY (volontaire) | Sobriété fonctionnelle ; KPI / features utiles | Conception ; UX/UI | OPEN |
-| C-C08 | RGESN — données / traitements | DESIGN / ECO REFERENCE | LIKELY | Limitation traitements / automatisations inutiles | Conception ; architecture futur | OPEN |
-| C-C09 | RGESN — interfaces / ressources | DESIGN / ECO REFERENCE | CONTEXT DEPENDENT | Poids UI / médias / requêtes = critères futurs | Architecture ; 1.3.2-D | OPEN |
-| C-C10 | RGESN + héritage A conservation | DESIGN / ECO REFERENCE | LIKELY | Stockage / historique proportionnés | Conception ; données | OPEN |
-| C-C11 | RGESN — réversibilité / durée de vie | DESIGN / ECO REFERENCE | LIKELY | Export, sortie, maintenabilité | Architecture ; 1.3.2-D | OPEN |
-| C-C12 | Checklist §16.10 | GOOD PRACTICE | LIKELY | Critères accessibilité + écoconception outils | **1.3.2-D** | OPEN — outil NOT SELECTED |
-| C-C13 | Loi 2005-102 / décret 2019-768 | LEGAL REQUIREMENT | **TO VERIFY** | Trancher assujettissement (CA / statut) avant engagement conformité | Conformité ; Morris | OPEN |
-| C-C14 | EAA 2019/882 | LEGAL REQUIREMENT | Banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** | Clarifier nature services numériques consommateurs | Conformité | OPEN |
-| C-C15 | Dashboard / graphiques | STANDARD / GUIDANCE | LIKELY | Alternatives textuelles / données accessibles | UX/UI ; QA | OPEN |
-
-### 16.12 Questions TO VERIFY
-
-1. CA moyen France (3 exercices) du cabinet → seuil 250 M€ / obligation art. 47 ?
-2. Statut juridique exact (privé « pur » vs délégation / intérêt général) ?
-3. L’espace client / souscription conclut-il des **contrats consommateurs en ligne** (EAA e-commerce) ?
-4. Effectif / CA / bilan → exemption micro EAA si un jour dans le champ ?
-5. Niveau d’ambition accessibilité **produit** (au-delà du légal) — arbitrage Morris futur ?
-6. Formats documentaires cibles (PDF / HTML / autre) ?
-7. Engagement éventuel de démarche RGESN / déclaration d’écoconception (volontaire) ?
-8. Périmètre exact des automatisations / KPI « utiles » ?
-9. Compatibilité MFA candidate (B) avec parcours accessibles — design conjoint futur ?
-10. Transposition FR détaillée EAA pour le cas d’espèce (si e-commerce confirmé) ?
-
-### 16.13 Sources exploitées
-
-| ID | Thème | Organisme | Titre | URL | Date | Consultation | Pertinence | Nature | Statut |
-|----|-------|-----------|-------|-----|------|--------------|------------|--------|--------|
-| S46 | RGAA hub | DINUM | Référentiel général d’amélioration de l’accessibilité | https://accessibilite.numerique.gouv.fr/ | MAJ 2023-04-18 (v4) ; note RGAA5 | 2026-09-29 | Version courante 4.1.2 | OFFICIAL REFERENCE | ACTIVE |
-| S47 | RGAA obligations | DINUM | Champ d’application — obligations légales | https://accessibilite.numerique.gouv.fr/obligations/champ-application | — | 2026-09-29 | Organismes ; seuil 250 M€ | LEGAL / OFFICIAL | ACTIVE |
-| S48 | RGAA PDF | DINUM | RGAA version 4.1.2 | https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.2.pdf | 4.1.2 | 2026-09-29 | Critères ; WCAG 2.1 ; EN 301 549 | OFFICIAL REFERENCE | ACTIVE |
-| S49 | Décret accessibilité | Légifrance | Décret n° 2019-768 du 24 juillet 2019 (consol. / modifié) | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937 | 2019-07-24 ; mod. 2026-08-24 | 2026-09-29 | Seuil CA ; normes ; fraîcheur 2026 | LEGAL REQUIREMENT | ACTIVE |
-| S49b | Décret accessibilité (modificatif) | Légifrance (JO) | Décret n° 2026-816 du 24 août 2026 modifiant le 2019-768 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054746617 | 2026-08-24 | 2026-09-29 | Source **primaire** JO ; HTML bot-blocked à la consultation — ID JO confirmé via INSEI ; **ne change pas** ACCESSIBILITY LEGAL APPLICABILITY=TO VERIFY | LEGAL / SOURCE FRESHNESS | ACTIVE |
-| S50 | EAA | EUR-Lex | Directive (UE) 2019/882 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2019.151.01.0070.01.ENG | 2019-04-17 | 2026-09-29 | Champ services ; définitions banking / e-commerce | LEGAL REQUIREMENT | ACTIVE |
-| S51 | WCAG | W3C WAI | WCAG 2 Overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 (2023/2024) ; 2.1 ref RGAA | 2026-09-29 | Standard technique | STANDARD / GUIDANCE | ACTIVE |
-| S52 | RGESN hub | MiNumEco / numérique.gouv | RGESN 2024 | https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/ | v2 ; 2024-05-28 | 2026-09-29 | Version ; outils ; REEN | DESIGN / ECO REFERENCE | ACTIVE |
-| S53 | RGESN PDF | Arcep/Arcom/ADEME | RGESN version 2024 (PDF) | https://ecoresponsable.numerique.gouv.fr/docs/2024/rgesn-mai2024/referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf | 2024-05 | 2026-09-29 | Démarches volontaires ; 78 critères | DESIGN / ECO REFERENCE | ACTIVE |
-| S54 | RGESN fiche | Arcep | Référentiel général écoconception (fiche) | https://www.arcep.fr/mes-demarches-et-services/entreprises/fiches-pratiques/referentiel-general-ecoconception-services-numeriques.html | 2024 | 2026-09-29 | 78 critères ; déclaration | DESIGN / ECO REFERENCE | ACTIVE |
-
-### 16.14 Limites / réserves
-
-- **Pas** d’audit RGAA, déclaration d’accessibilité, certification WCAG, maquette, design system.
-- **Pas** de bilan carbone, ACV, GreenOps runtime, métriques CO₂ fictives.
-- Architecture / stack / plateforme / hosting = **NOT DECIDED**.
-- Applicabilité juridique accessibilité = **TO VERIFY** (données cabinet insuffisantes).
-- RGESN = référence d’écoconception, **pas** obligation démontrée pour ce projet.
-- EAA banking **NOT APPLICABLE** ; e-commerce **TO VERIFY**.
-- Deep-dive **1.3.2-D** ouvert séparément (technologie / no-code / IA / marché).
-
-
-
-
-## 17. 1.3.2-D — Technologie / no-code / IA / marché
+- Cabinet pédagogique / fictif ; pas de terrain utilisateur au-delà de 1.1 / 1.2.
+- Pas d’avis juridique, d’audit sécurité, d’audit RGAA, ni de bilan environnemental.
+- Capacités outils = documentation éditeur ; plans et configs réels restent à confirmer.
+- **Aucune stack, architecture, ni cas IA adoptés.**
+- **1.3 non validé** ; **1.4 non ouvert.**

-| Champ | Valeur |
-|-------|--------|
-| **Statut** | **TECHNOLOGY / NO-CODE / AI / MARKET — AWAITING REVIEW** |
-| **Date de recherche** | 2026-09-29 |
-| **Type** | Cadrage — DOC / technology-market research |
-| **Profil** | **Standard** |
-| **Critical** | **NON** — aucune sélection d’outil ; aucune architecture ; aucun use case IA adopté ; aucun budget |
-| **Statut revue D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** (corrections R-D01…R-D07) |
-| **Nature** | **EVIDENCE FOR FUTURE TOOL DECISION** — **pas** TOOL SELECTION / STACK DECISION |
-
-### 17.1 Périmètre et méthode
+---

-**Périmètre :** tendances marché distribution assurance ; scan concurrentiel léger (4–6 acteurs publics FR) ; familles technologiques CRM ; panel doctrine candidat (niveaux 1–3) ; réutilisation contraintes A/B/C ; IA candidats + veille AI Act ; gaps ; critères futurs.
-
-**Méthode :** sources N1/institutionnelles (EIOPA, ACPR, Commission UE) + sources éditeur officielles (docs / trust / help) ; distinction **SUPPORTED / PARTIAL / NOT NATIVE / TO VERIFY / OUT OF SCOPE** ; aucune cellule « BEST / WINNER » ; pas de pondération.
-
-**Panel doctrine (présence = CANDIDATE ONLY) :** Bubble, Softr, Power Apps, Airtable, HubSpot, Make, n8n, Power Automate, Tally, Power BI, Voiceflow, Postman, Notion, Figma, Miro, Shopify.
-
-**Hors scope :** sélection stack ; architecture ; modèle de données ; budget 1.5 ; API assureurs ; paiement / signature comme exigence validée ; ouverture 1.3.2-E / 1.4.
-
-### 17.2 Synthèse exécutive bornée
-
-1. **FAIT** — EIOPA (3e rapport IDD, 2026-03-30) : digitalisation distribution **lente** ; ventes en ligne souvent **&lt;10 %** primes dans la plupart des marchés ; produits simples ; GenAI via chatbots/outils de vente en hausse → **IMPACT** : CRM courtier doit soutenir **conseil humain + digital**, pas remplacer → **STATUT** : MARKET PATTERN
-2. **FAIT** — Nombre d’intermédiaires en baisse / consolidation ; passeports FoS/FoE **+10 % (2022–2024)** (S56 ; news S55 cite aussi +12 % sur 2020–2024 — période différente) → **IMPACT** : différenciation par relation / outil → **STATUT** : CONTEXT
-3. **OBSERVATION** — Acteurs digitaux FR (comparateurs, assureurs en ligne, insurtech) exposent devis/souscription/espace client/self-service, souvent avec canal humain revendiqué → **IMPACT** : attentes clients sur self-service + contact → **STATUT** : COMPETITIVE OBSERVATION (pas ranking)
-4. **FAIT** — Besoins CRM validés = relation, devis, RDV, documents, espace client, historique, sinistres, KPI — **pas** paiement/API assureur/scoring → **IMPACT** : familles techno à couvrir → **STATUT** : NEED-DRIVEN
-5. **OBSERVATION** — HubSpot = CRM natif documenté (objets, permissions, portail tickets legacy, 2FA/SSO, audit, export, API) ; dépendances **tier** (SSO **Professional / Enterprise** — S86 ; autres features plan-dependent) → **IMPACT** : fort fit CRM commercial **candidat** → **STATUT** : EVIDENCE — NOT SELECTED
-6. **OBSERVATION** — Airtable / Softr / Bubble / Power Apps = données + apps/portails **construisibles** ; sécurité/rôles souvent **à concevoir** (Privacy Rules Bubble ; Dataverse Power ; groups Softr) → **IMPACT** : flexibilité élevée / complexité maintenabilité → **STATUT** : EVIDENCE — NOT SELECTED
-7. **OBSERVATION** — Make / n8n / Power Automate = orchestration ; Tally = formulaires ; Power BI = reporting — briques **complémentaires**, pas CRM cœur seuls → **IMPACT** : intégrations nécessaires pour RDV/docs/IA → **STATUT** : COMPLEMENTARY CANDIDATES
-8. **FAIT** — Contraintes A/B/C (RGPD, MFA candidate, logs, backup, accessibilité, sobriété, réversibilité) **réutilisables** comme critères d’évaluation outils → **IMPACT** : checklist future Phase 2 → **STATUT** : CRITERIA CARRIED FORWARD
-9. **FAIT** — AI Act (UE) 2024/1689 applicable par phases ; Omnibus 2026/1744 (en vigueur 2026-07-27) décale high-risk Annex III → **2027-12-02** → **IMPACT** : gouvernance IA **use-case dependent** → **STATUT** : **AI ACT PROJECT APPLICABILITY = TO VERIFY / USE-CASE DEPENDENT**
-10. **OBSERVATION** — Cas IA « conseil / scoring / underwriting » = **HIGH-SENSITIVITY** ; candidats AI-D01…D08 restent **RESEARCH CANDIDATE / WATCH** — **aucun ADOPTED**
-11. **GAP** — RDV natif, génération documentaire accessible, audit fin, portail client « dossier assurance » : souvent **PARTIAL** ou via extensions → **IMPACT** : **GAP IDENTIFIED — FUTURE TOOL DISCOVERY REQUIRED** pour certaines briques → **STATUT** : OPEN
-12. **LIMITE** — **Architecture = NOT DECIDED** ; **Stack = NOT DECIDED** ; aucun gagnant ; aucun score
-
-### 17.3 Tendances marché assurance / courtage
-
-| Observation | Source | Portée | Implication projet |
-|-------------|--------|--------|-------------------|
-| Digitalisation distribution progresse lentement ; online &lt;10 % GWP dans la plupart des marchés ; produits simples | EIOPA 3rd IDD report / factsheet 2026-03-30 | UE / agrégats NCA | CRM = support omnicanal + conseil, pas pure digital-only |
-| GenAI utilisé via chatbots / sales tools ; IDD ne régule pas exhaustivement ces canaux | EIOPA 2026-03-30 | UE | IA = watch ; human oversight ; pas d’adoption conseil auto |
-| Baisse nombre intermédiaires ; passeports FoS/FoE **+10 % entre 2022 et 2024** | EIOPA S56 | UE | Consolidation / différenciation relationnelle |
-| Canaux de distribution doivent être compatibles marché cible / intérêt client | ACPR Rec. 2024-R-01 | FR | Traçabilité conseil / historique dans le futur CRM |
-| Digitalisation + IA complexifient protection client / fraudes | Pôle commun ACPR-AMF 2025 | FR | Sécurité + clarté parcours (lien B/C) |
-
-**Réserve :** statistiques UE/FR **ne** se traduisent **pas** automatiquement en volumes du cabinet fictif.
-
-### 17.4 Scan concurrentiel léger
-
-**But :** MARKET PATTERNS / COMPETITIVE OBSERVATIONS — **pas** BEST COMPETITOR. Sources = sites officiels consultés 2026-09-29.
-
-| Acteur | Type | Cible visible | Devis / souscription | Espace client / docs | Sinistres | Conseil humain | Différenciation revendiquée |
-|--------|------|---------------|----------------------|----------------------|-----------|----------------|----------------------------|
-| Direct Assurance | Assureur direct (groupe AXA) | Particuliers auto/hab/santé/moto | Parcours produits en ligne | App mobile ; parcours digitaux | Mise en avant résolution sinistres | Conseiller dédié revendiqué | Assurance en ligne depuis 1992 ; labels ; économie multi-contrats |
-| Réassurez-moi | Comparateur / courtage digital | Emprunteur, santé, divers | Simulation + devis + souscription en ligne | Accompagnement experts | — (hors focus) | Interlocuteur humain revendiqué (« pas un robot ») | Comparaison ; experts non commissionnés (revendiqué) |
-| LeLynx.fr | Comparateur (courtier ORIAS) | Particuliers auto/moto/hab/santé/énergie | Formulaire unique ; redirection souscription partenaire | — | — | Service comparaison | Panel partenaires ; gratuit / impartial (revendiqué) |
-| Lovys | Insurtech / abonnement multi-produits | Particuliers | Souscription en ligne ~2 min ; signature en ligne | Espace personnel / attestations | Réactivité sinistre (avis) | Mail, chatbot, téléphone | 100 % en ligne + humain ; mensualité unique |
-| Alan | Assurtech / assureur santé digital (S87) | Entreprises (TPE→grands comptes) + TNS/indépendants ; offres particuliers (retraités / TNS ; fonction publique « très bientôt ») revendiquées sur alan.com | Devis en ligne (« Mon devis en 2 min ») | Expérience digitale / app (pattern insurtech) | — | Support digital revendiqué | Différenciation santé digitale + self-service — **pas** un modèle à copier |
-
-**Patterns utiles au cadrage :** self-service devis ; espace documents ; multicanal humain+digital ; comparaison vs relation de conseil personnalisé (opportunité différenciante du cabinet).
-
-**Non déduit :** outils techniques internes des acteurs ; conformité ; volumes.
-
-### 17.5 Besoins technologiques du CRM
-
-| Besoin validé (1.1/1.2) | Famille techno | Priorité conception |
-|-------------------------|----------------|---------------------|
-| Prospects / clients / TPE-PME / particuliers | CRM / données structurées | Haute |
-| Prospection, devis, relances, RDV, conseil, souscription, renouvellement, résiliation | CRM + workflows + formulaires | Haute |
-| Documents / espace documentaire / historique | Documents + stockage + droits | Haute |
-| Espace client | Portail / auth externe | Haute |
-| Sinistres (niveau brief) | CRM / dossiers | Moyenne–Haute |
-| Dashboard KPI (conversion, panier, satisfaction) | Reporting / BI | Moyenne |
-| Multicanal (physique, Visio, tel, email, espace client) | Intégrations + inclusion (C) | Haute |
-| Génération / envoi documentaire | Documents + automatisation | Haute |
-
-**Non inventé comme besoin validé :** paiement ; signature électronique obligatoire ; API assureurs ; scoring ; underwriting auto ; app native ; biométrie.
-
-### 17.6 Cartographie des familles technologiques
-
-1. CRM relation client
-2. Données structurées / app métier
-3. Portail / espace client
-4. Formulaires / collecte
-5. Workflows / automatisation
-6. Documents
-7. RDV / interactions
-8. Reporting / BI
-9. Intégrations / API / webhooks
-10. Sécurité / rôles / audit
-11. Export / réversibilité / maintenabilité
-12. Accessibilité
-13. Numérique responsable
-14. Capacités IA
-15. Collaboration / knowledge (périphérique)
-
-**Aucune architecture cible combinant ces briques.**
-
-### 17.7 Panel no-code / low-code étudié
-
-| Niveau | Outils | Objectif |
-|--------|--------|----------|
-| 1 | HubSpot, Airtable, Bubble, Softr, Power Apps | Couverture potentielle large CRM/app |
-| 2 | Make, n8n, Power Automate, Tally, Power BI | Briques spécialisées |
-| 3 | Voiceflow, Postman, Notion, Figma, Miro, Shopify | Frontières / hors cœur CRM |
-
-Shopify = **OUT OF SCOPE** (pas de besoin e-commerce validé). Figma/Miro/Postman/Notion = **pas** candidats cœur CRM.
-
-### 17.8 Capability Evidence Matrix
-
-Légende : **S**=SUPPORTED ; **P**=PARTIAL ; **NN**=NOT NATIVE ; **TV**=TO VERIFY ; **OOS**=OUT OF SCOPE. Preuves = sources éditeur ouvertes 2026-09-29. **Aucun classement.**
-
-| Outil | Rôle candidat | CRM natif | Données | Portail / externe | Formulaires | Automatisation | Documents | Reporting | API / intégrations | Rôles / sécurité | Audit / logs | Export / réversib. | Accessibilité doc. | IA doc. | Dépendances / limites | Preuve |
-|-------|---------------|-----------|---------|-------------------|-------------|----------------|-----------|-----------|--------------------|------------------|--------------|--------------------|--------------------|---------|-----------------------|--------|
-| HubSpot | CRM spécialisé | **S** | **S** | **P** (Customer Portal tickets / memberships) **S65** | **S** | **S** (workflows) | **P** (Documents tool / fichiers) | **S** | **S** (API) **S66** | **S** (permissions **S63** ; 2FA **S62** ; SSO **Pro/Ent S86**) | **S** (audit logs **S64** ; tier) | **S** (export ; GDPR delete **S62**) | **TV** | **P**/TV (features AI produit) | Tier / hub ; SSO = Professional **ou** Enterprise | S62–S66, S86 |
-| Airtable | Données / interfaces | **P** | **S** | **P** (Interfaces / Portals — plans) **S68** | **S** **S67** | **S** (Automations) | **P** (attachments) | **P** | **S** (API) | **P**/S (permissions ; SSO Biz/Ent) **S68** | **S** Enterprise Scale audit **S69** | **P**/S (CSV/API) | **TV** | **P** (AI events in audit) | Enterprise pour audit avancé | S67–S69 |
-| Bubble | App full-stack no-code | **NN** (à construire) | **S** | **S** (app users) | **S** (à construire) | **S** (workflows) | **P** (à concevoir) | **P** | **S** (Data/Workflow API) **S71** | **P** (Privacy Rules ; 2FA possible) **S70** | **P**/TV | **P**/TV | **TV** | **TV** | Sécurité **responsabilité partagée** builder | S70–S71 |
-| Softr | Portail / frontend | **NN** | **P** (Softr DB / sources) | **S** (client portal pattern) | **S** | **P** (workflows) | **P** | **P** | **P**/S (API/intégrations) | **S** (user groups **S73** ; 2FA **S72** ; SSO Enterprise **S74**) | **TV** | **TV** | **TV** | **P** (AI claims marketing) | Tier Enterprise SSO | S72–S74 |
-| Power Apps | App low-code | **P** (model-driven / canvas) **S75** | **S** (Dataverse) | **P** (Power Pages lié écosystème) | **S** | **S** (via Automate **S77**) | **P** | **P** (via BI) | **S** (connectors) | **S** (Entra ID + Dataverse roles **S76**) | **P**/S (platform) | **P**/S | **P**/TV (platform guidance) | **P** (Copilot) | Licences Power Platform / Dataverse | S75–S77 |
-| Make | Automatisation | **NN** | **NN** | **NN** | **NN** | **S** (scenarios **S85**) | **P**/TV (modules — détail TV) | **NN** | **S**/P (connections **S85**) | **TV** | **TV** | **TV** | **OOS** | **TV** | Orchestrateur seulement ; sécu/IA = **TV** | S85 |
-| n8n | Automatisation | **NN** | **NN** | **NN** | **NN** | **S** | **P** | **NN** | **S** | **P**/TV (self-host vs cloud) | **P**/TV | **P**/TV | **OOS** | **P** (AI features docs) | Self-host = ops | docs.n8n.io |
-| Power Automate | Automatisation M365 | **NN** | **P** | **NN** | **P** | **S** | **P** | **P** | **S** | **S** (Entra / env) | **P** | **P** | **OOS**/TV | **P** (Copilot) | Environnements / licences | MS Learn |
-| Tally | Formulaires | **NN** | **NN** | **NN** | **S** | **P** (webhooks / Make/n8n/Zapier) | **P** (PDF guides) | **P** (insights) | **P**/S (API/webhooks) | **TV** | **TV** | **P** (retention Pro+) | **TV** | **P** (ChatGPT integ.) | Free vs Pro/Business | help.tally.so |
-| Power BI | Reporting | **NN** | **P** | **NN** | **NN** | **P** | **P** (export) | **S** | **S** | **S** (workspace roles) | **P** | **S** | **P** (alt text ; Accessible PDF paginated) | **P** | Licence Power BI | MS Learn accessibility |
-| Voiceflow | Conversation | **NN** | **NN** | **P** | **NN** | **P** | **NN** | **NN** | **P** | **TV** | **TV** | **TV** | **TV** | **S**/P (voice AI) | Frontière ; pas CRM | Panel L3 |
-| Postman | Test API | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **S** (outil test) | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | Pas runtime CRM | Doctrine |
-| Notion | Collab / docs | **OOS** cœur | **P** | **NN** | **P** | **P** | **P** | **NN** | **P** | **P** | **TV** | **P** | **TV** | **P** | Pas source vérité SFIA | Doctrine |
-| Figma / Miro | Design / atelier | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | Hors runtime | Doctrine |
-| Shopify | E-commerce | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | **OOS** | Pas besoin validé | Doctrine |
-
-**COST / LICENSING IMPACT = FUTURE BUDGET INPUT** (pas de chiffrage 1.5).
-
-### 17.9 Sécurité / données / accessibilité / sobriété dans le panel
-
-| Critère héritage | Application au panel | Statut |
-|------------------|----------------------|--------|
-| A — proportionnalité / export / suppression / DPA / localisation | HubSpot : GDPR delete, export, EU DC option documentés ; autres : TV selon contrat/DPA éditeur | CRITERIA — pas de certificat « RGPD compliant » outil |
-| A — HEALTH DATA / AIPD | **TO VERIFY** inchangé ; si santé → hausser exigences | OPEN |
-| B — auth / MFA candidate | HubSpot 2FA/SSO ; Softr password+OTP ; Bubble 2FA possible ; Power Entra | SECURITY REQUIREMENT CANDIDATE — techno NOT DECIDED |
-| B — rôles / moindre privilège | Permissions HubSpot/Dataverse/Softr groups/Bubble Privacy Rules | ACCESS CONTROL TO DESIGN |
-| B — audit / backup | Audit Enterprise souvent **tier-dependent** ; backups éditeur ≠ PRA cabinet | TO VERIFY / DESIGN |
-| B — DORA | **TO VERIFY** (B) | OPEN |
-| C — accessibilité | Power BI alt text / Accessible PDF documentés ; autres **TV** (pas de VPAT systématiquement ouvert ici) | Ne pas certifier RGAA/WCAG outil |
-| C — sobriété / réversibilité | Préférer outils permettant désactivation features, export, limitation stockage | FUTURE EVAL |
-
-### 17.10 Automatisation et intégrations
-
-| Capacité | Preuve panel | Limite |
-|----------|--------------|--------|
-| Workflows CRM | HubSpot workflows ; Airtable Automations ; Bubble workflows | Complexité / licences |
-| Orchestration multi-apps | Make ; n8n ; Power Automate | Pas un CRM ; gouvernance flux |
-| Formulaires → CRM | Tally webhooks + Make/n8n ; HubSpot forms ; Airtable forms | Mapping champs / consentement |
-| API | HubSpot API ; Airtable API ; Bubble API ; Softr API ; Power connectors | Auth, quotas, maintenance |
-| RDV | Souvent **NN / P** via intégration calendrier tierce | **GAP** fréquent |
-| Documents générés | Souvent **P** (templates + automation) | Accessibilité documents (C) |
-
-### 17.11 IA — cas d’usage candidats
-
-Aucun use case **ADOPTED**.
-
-| ID | Cas | Valeur potentielle | Données | Exposition DP | Human oversight | Statut |
-|----|-----|--------------------|---------|---------------|-----------------|--------|
-| AI-D01 | Résumé historique / échanges | Gain temps courtier | Historique CRM | Haute | Requis | RESEARCH CANDIDATE |
-| AI-D02 | Aide rédaction emails / docs | Productivité | Contenu client | Haute | Requis | RESEARCH CANDIDATE |
-| AI-D03 | Classification documentaire | Classement pièces | Fichiers | Haute | Requis | WATCH |
-| AI-D04 | Extraction d’info documents | Saisie assistée | Docs | Haute | Requis | WATCH |
-| AI-D05 | Recherche / assistant connaissance | Accès info interne | Base connaissance | Moyenne–Haute | Requis | RESEARCH CANDIDATE |
-| AI-D06 | Assistant conversationnel / FAQ | Self-service | FAQ / policies | Moyenne | Requis ; pas conseil produit auto | WATCH |
-| AI-D07 | Aide courtier à retrouver info | Productivité conseil | CRM | Haute | Requis | RESEARCH CANDIDATE |
-| AI-D08 | Synthèse KPI | Pilotage | Agrégats | Faible–Moyenne | Requis | WATCH |
-
-**HIGH-SENSITIVITY / REGULATORY REVIEW REQUIRED (non adoptés) :** recommandation automatique d’assurance ; éligibilité ; tarification auto ; scoring client ; underwriting ; fraude automatisée — cohérent EIOPA (clarification IDD/AI needed).
-
-### 17.12 IA — gouvernance / AI Act watch
-
-| Élément | État vérifié 2026-09-29 | Source |
-|---------|-------------------------|--------|
-| Règlement | (UE) 2024/1689 AI Act | S60 / S61 |
-| Omnibus | (UE) 2026/1744 en vigueur **2026-07-27** | S60 |
-| Interdictions (1–8) / AI literacy | depuis **2025-02-02** | S60 |
-| GPAI + gouvernance GPAI | depuis **2025-08-02** | S60 |
-| Début régime général / enforcement AI Office & autorités | **2026-08-02** — **ne signifie pas** que toutes les obligations high-risk s’appliquent déjà | S60 |
-| Transparence (chatbots, labelling, etc.) | règles de transparence → **août 2026** | S60 |
-| High-risk **Annex III** (cas d’usage sensibles) | **2027-12-02** (après Omnibus) | S60 |
-| High-risk **Annex I** (produits réglementés) | **2028-08-02** | S60 |
-
-### AI ACT PROJECT APPLICABILITY = TO VERIFY / USE-CASE DEPENDENT
-
-**Pas** de claim « AI ACT COMPLIANT ». Human oversight, transparence, minimisation données = principes à transmettre si IA retenue plus tard.
-
-### 17.13 Gaps / limites / dépendances
-
-| Gap / limite | Signal | Suite |
-|--------------|--------|-------|
-| Portail « dossier client assurance » complet (contrats+docs+sinistres+devis) | Souvent à composer (CRM + portail + fichiers) | Architecture futur / discovery |
-| Prise de RDV native unifiée | Souvent intégration tierce | **GAP IDENTIFIED — FUTURE TOOL DISCOVERY REQUIRED** (calendrier) |
-| Génération documentaire accessible (devis PDF/UA) | Rarement native complète | Lien C-C04 ; discovery |
-| Audit / logs fins hors Enterprise | Tier dependency | Budget 1.5 + sécurité |
-| Accessibilité déclarée (VPAT/RGAA) peu visible sur plusieurs no-code | TV | Critère 1.3.2-D→Phase 2 |
-| Maintenabilité Bubble/Power Apps custom | HIGH COMPLEXITY SIGNAL si app métier large | TO VERIFY selon scope |
-| HubSpot simplicité CRM | LOW–MODERATE COMPLEXITY SIGNAL pour cœur commercial | NOT a selection |
-| Dépendance éditeur / lock-in | Export ≠ migration indolore | Réversibilité critère |
-| Shopify / e-commerce | OOS | — |
-
-### 17.14 Future Tool Evaluation Criteria
-
-Dimensions **sans poids / sans score** (poids = Morris / groupe) :
-
-1. Couverture fonctionnelle (CRM, portail, docs, RDV, KPI)
-2. Simplicité opérationnelle
-3. Maintenabilité / gouvernance
-4. Sécurité (auth, MFA candidate, rôles)
-5. Confidentialité / RGPD (export, suppression, DPA, localisation)
-6. Droits / moindre privilège
-7. Portail externe
-8. Automatisation
-9. Intégration / API
-10. Reporting
-11. Documents (génération / accessibilité)
-12. Accessibilité interfaces
-13. Numérique responsable / sobriété
-14. Export / réversibilité
-15. IA (contrôles, oversight, opt-out)
-16. Dépendances licences / tiers
-17. Capacité d’évolution
-
-Réutilise checklists **B §15.10** et **C §16.10**.
-
-### 17.15 Contraintes / éléments à transmettre C-Dxx
-
-| ID | Besoin / contrainte | Preuve A/B/C/D | Implication future sélection | Question à arbitrer | Gate futur | Statut |
-|----|---------------------|----------------|------------------------------|---------------------|------------|--------|
-| C-D01 | CRM relation + historique | Besoins 1.1/1.2 ; HubSpot S ; autres P/NN | Exiger objets contact/deal/historique ou équivalent | CRM natif vs app construite ? | Choix stack | OPEN |
-| C-D02 | Espace client / docs | C + pattern marché ; Softr/HubSpot/Bubble P/S | Portail avec séparation données (B C-B04) | Portail natif vs composé ? | Architecture ; UX | OPEN |
-| C-D03 | Formulaires devis / besoins | Tally S ; HubSpot/Airtable S | Collecte + consentement (A) | Quel front de collecte ? | Stack ; UX | OPEN |
-| C-D04 | Automatisations relances | Make/n8n/PA/HubSpot | Gouvernance flux ; pas d’auto-conseil | Quelle orchestration ? | Architecture ; IA | OPEN |
-| C-D05 | MFA / rôles / audit | B + preuves éditeurs | Tier souvent Enterprise | Niveau licence minimal sécurité ? | Budget 1.5 ; RSSI | OPEN |
-| C-D06 | Export / suppression / DPA | A + HubSpot GDPR delete/export | Réversibilité obligatoire candidat | Preuves contractuelles éditeur ? | Stack ; conformité | OPEN |
-| C-D07 | Accessibilité UI + docs | C | Exiger preuves accessibilité / limites | VPAT / tests QA ? | UX ; QA | OPEN |
-| C-D08 | Sobriété / features inutiles | C RGESN | Désactivation modules ; limiter IA par défaut | Scope fonctionnel minimal ? | Conception | OPEN |
-| C-D09 | RDV | Gap fréquent | Discovery calendrier / intégration | Outil RDV dans panel ? | Discovery ; stack | OPEN |
-| C-D10 | Documents générés accessibles | C-C04 ; gap | Générateur + accessibilité | Format & outil doc ? | Delivery ; QA | OPEN |
-| C-D11 | Reporting KPI | Power BI S ; HubSpot S | Éviter dashboard surdimensionné (C) | BI séparé vs natif CRM ? | Stack | OPEN |
-| C-D12 | IA assistance (D01–D08) | EIOPA + AI Act | Human oversight ; pas conseil auto | Quel use case si GO Morris ? | IA ; Morris | OPEN — not adopted |
-| C-D13 | AI Act classification | Commission 2026 | Use-case dependent | High-risk ou non ? | Conformité IA | TO VERIFY |
-| C-D14 | Multicanal inclusion | C + marché | Ne pas digital-only | Parcours téléphone/physique ? | Conception | OPEN |
-| C-D15 | Pas de sélection prématurée | Doctrine panel | Conserver CANDIDATE ONLY | Qui arbitre pondération critères ? | Morris / groupe | OPEN |
-
-### 17.16 Questions TO VERIFY
-
-1. Pondération des 17 critères futurs (Morris/groupe) ?
-2. CRM natif vs composition no-code pour ce cabinet ?
-3. Niveau licence minimal acceptable (SSO, audit, EU hosting) ?
-4. Outil RDV / calendrier à découvrir hors panel ?
-5. Générateur documentaire et exigence accessibilité ?
-6. Premier use case IA éventuel (si GO) et classification AI Act ?
-7. DPA / sous-traitants / localisation par éditeur finaliste ?
-8. VPAT / accessibilité réelle des finalistes ?
-9. HEALTH DATA impact stack si confirmé ?
-10. Budget 1.5 bornes pour tiers Enterprise ?
-
-### 17.17 Sources exploitées
-
-| ID | Thème | Organisme / éditeur | Titre | URL | Date | Consultation | Claim | Nature | Statut |
-|----|-------|---------------------|-------|-----|------|--------------|-------|--------|--------|
-| S55 | Marché IDD | EIOPA | 3rd Report application IDD (news) | https://www.eiopa.europa.eu/eiopa-publishes-third-report-application-insurance-distribution-directive-2026-03-30_en | 2026-03-30 | 2026-09-29 | Digitalisation lente ; GenAI ; passeports **+12 % 2020–2024** (période news) | N1 | ACTIVE |
-| S56 | Marché IDD | EIOPA | Structure EU insurance distribution market | https://www.eiopa.europa.eu/structure-eu-insurance-distribution-market_en | 2026-03 | 2026-09-29 | Online sales ; intermediaries ; passeports FoS/FoE **+10 % 2022–2024** | N1 | ACTIVE |
-| S57 | Marché IDD | EIOPA | Factsheet Insurance distribution 2024/25 | https://www.eiopa.europa.eu/document/download/1957cba8-284b-4621-a034-4592b59b2f39_en?filename=2026-03-30+-+Factsheet+-+3d+IDD+application+report.pdf | 2026-03-30 | 2026-09-29 | Online &lt;10 % ; GenAI | N1 | ACTIVE |
-| S58 | Distribution FR | ACPR | Rec. 2024-R-01 IDD | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/recommandation-2024-r-01-du-28-juin-2024-sur-la-mise-en-oeuvre-de-certaines-dispositions-issues-de | 2024-06-28 | 2026-09-29 | Canaux / marché cible | N1 | ACTIVE |
-| S59 | Protection client | ACPR-AMF | Rapport pôle commun 2025 | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-du-pole-commun-acpr-amf-2025 | 2025 / MAJ 2026-06 | 2026-09-29 | Digitalisation + IA | N1 | ACTIVE |
-| S60 | AI Act | Commission UE | AI Act policy page | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai | 2026 (Omnibus) | 2026-09-29 | Timeline ; Omnibus ; high-risk dates | N1 | ACTIVE |
-| S61 | AI Act | EUR-Lex | Reg. 2024/1689 consolidé | https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng | 2026-07-27 | 2026-09-29 | Texte consolidé | N1 | ACTIVE |
-| S62 | HubSpot sécu | HubSpot | Security / privacy / control | https://legal.hubspot.com/security | MAJ 2023-04-18 | 2026-09-29 | 2FA, SSO, encryption, EU DC, GDPR delete | Éditeur | ACTIVE |
-| S63 | HubSpot perms | HubSpot | User permissions guide | https://knowledge.hubspot.com/user-management/hubspot-user-permissions-guide | — | 2026-09-29 | Roles, export, portal, audit | Éditeur | ACTIVE |
-| S64 | HubSpot audit | HubSpot | View and export account activity | https://knowledge.hubspot.com/account-management/view-and-export-account-activity-history | — | 2026-09-29 | Audit logs | Éditeur | ACTIVE |
-| S65 | HubSpot portal | HubSpot | Customer portal settings | https://knowledge.hubspot.com/inbox/manage-customer-portal-settings | — | 2026-09-29 | Portal tickets | Éditeur | ACTIVE |
-| S66 | HubSpot API | HubSpot | API reference 2026-09 | https://developers.hubspot.com/docs/api/overview | 2026-09 | 2026-09-29 | API CRM | Éditeur | ACTIVE |
-| S67 | Airtable forms | Airtable | Form views | https://support.airtable.com/docs/getting-started-with-airtable-form-views | — | 2026-09-29 | Forms | Éditeur | ACTIVE |
-| S68 | Airtable interfaces | Airtable | Interface permissions | https://support.airtable.com/docs/interface-designer-permissions | — | 2026-09-29 | Portals/interfaces | Éditeur | ACTIVE |
-| S69 | Airtable audit | Airtable | Enterprise audit logs | https://support.airtable.com/docs/accessing-enterprise-audit-logs-in-airtable | — | 2026-09-29 | Audit Enterprise | Éditeur | ACTIVE |
-| S70 | Bubble sécu | Bubble | Security guide | https://manual.bubble.io/help-guides/security | — | 2026-09-29 | Privacy Rules ; shared responsibility | Éditeur | ACTIVE |
-| S71 | Bubble API | Bubble | Bubble API | https://manual.bubble.io/help-guides/integrations/api/the-bubble-api | — | 2026-09-29 | API + Privacy Rules | Éditeur | ACTIVE |
-| S72 | Softr auth | Softr | User authentication | https://docs.softr.io/core-concepts-overview/user-authentication | — | 2026-09-29 | 2FA password+OTP | Éditeur | ACTIVE |
-| S73 | Softr perms | Softr | User groups & permissions | https://docs.softr.io/core-concepts-overview/user-groups--permissions | — | 2026-09-29 | Groups / data perms | Éditeur | ACTIVE |
-| S74 | Softr SSO | Softr | SAML SSO | https://docs.softr.io/add-and-manage-users/saml-single-sign-on | — | 2026-09-29 | Enterprise SSO | Éditeur | ACTIVE |
-| S75 | Power Apps | Microsoft | Start building apps | https://learn.microsoft.com/en-us/power-apps/maker/ | — | 2026-09-29 | Canvas/model-driven/Dataverse | Éditeur | ACTIVE |
-| S76 | Dataverse sécu | Microsoft | Security in Dataverse | https://learn.microsoft.com/en-us/power-platform/admin/wp-security | — | 2026-09-29 | Entra + roles | Éditeur | ACTIVE |
-| S77 | Power Automate | Microsoft | Getting started | https://learn.microsoft.com/en-us/power-automate/getting-started | — | 2026-09-29 | Flows | Éditeur | ACTIVE |
-| S78 | n8n | n8n | Docs home | https://docs.n8n.io/ | — | 2026-09-29 | Workflow automation + AI | Éditeur | ACTIVE |
-| S79 | Tally | Tally | Help Center | https://help.tally.so/ | — | 2026-09-29 | Forms, webhooks, API | Éditeur | ACTIVE |
-| S80 | Power BI a11y | Microsoft | Design reports for accessibility | https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-creating-reports | — | 2026-09-29 | Alt text / checklist | Éditeur | ACTIVE |
-| S81 | Concurrent | Direct Assurance | Site officiel | https://www.direct-assurance.fr/ | — | 2026-09-29 | Pattern assureur direct | Public | ACTIVE |
-| S82 | Concurrent | Réassurez-moi | Site officiel | https://reassurez-moi.fr/ | — | 2026-09-29 | Comparateur + experts | Public | ACTIVE |
-| S83 | Concurrent | LeLynx | Site officiel | https://www.lelynx.fr/ | — | 2026-09-29 | Comparateur ORIAS | Public | ACTIVE |
-| S84 | Concurrent | Lovys | Site officiel | https://www.lovys.com/fr | — | 2026-09-29 | Insurtech self-service + humain | Public | ACTIVE |
-| S85 | Make automation | Make | Help Center — Get started | https://help.make.com/get-started | MAJ 2026-06-15 | 2026-09-29 | Scenarios / first automation (capacité orchestration) | Éditeur | ACTIVE |
-| S86 | HubSpot SSO | HubSpot | Set up single sign-on (SSO) | https://knowledge.hubspot.com/account-security/set-up-single-sign-on-sso | MAJ 2026-08-05 | 2026-09-29 | SSO disponible **Professional et Enterprise** (tous hubs listés) | Éditeur | ACTIVE |
-| S87 | Concurrentiel | Alan | Site officiel alan.com | https://alan.com/ | — | 2026-09-29 | Cibles entreprises/TNS ; devis digital ; particuliers revendiqués | Éditeur / marché | ACTIVE |
-| S49c | Décret accessibilité (secondaire) | INSEI | Page ressource décret 2026-816 + lien Légifrance | https://www.insei.fr/ressources/decret-ndeg-2026-816-du-24-aout-2026-modifiant-le-decret-ndeg-2019-768-du-24-juillet | 2026-08-28 | 2026-09-29 | Découverte / confirmation lien JO `JORFTEXT000054746617` | SECONDARY | ACTIVE |
-
-### 17.18 Limites / réserves
-
-- **EVIDENCE FOR FUTURE TOOL DECISION** uniquement — **pas** de sélection, ranking, poids, gagnant.
-- Architecture / Stack = **NOT DECIDED**.
-- Capacités = documentées éditeur ; configuration réelle / plans = **TO VERIFY** en Phase 2.
-- Pas de certificat RGPD / RGAA / RGESN / AI Act pour un outil.
-- Make : orchestration sourcée **S85** ; détails sécu / IA Make restent **TV**.
-- Légifrance HTML Cloudflare-challenged à la consultation ; source primaire **S49b** (`JORFTEXT000054746617`) + secondaire **S49c**.
-- Aucun use case IA adopté ; **1.4 NOT OPENED**.
-
-
-## 13. Synthèse 1.3 — état de consolidation
+## 6. État de clôture du document

 | Point | État |
 |-------|------|
-| **1.3** | **OPENED — AWAITING FINAL REVIEW** |
-| **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
-| **1.3.2** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
-| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
-| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
-| **1.3.2-C** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
-| **1.3.2-D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
-| **1.3.2-E** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
-| Architecture | **NOT DECIDED** |
-| Stack | **NOT DECIDED** / CANDIDATE TOOL ECOSYSTEM ONLY |
-| **1.4** | **NOT OPENED** |
-| Miro / Notion | NOT MODIFIED |
-
-La **synthèse exécutive finale** et les impacts à transmettre sont en **§18**. Les deep-dives A–D restent les preuves détaillées.
-
-Le 1.3 **n’est pas** VALIDATED. Aucune stack, architecture ni use case IA n’est adopté.
-
-
-## 18. 1.3.2-E — Consolidation finale du rapport de veille
-
-| Champ | Valeur |
-|-------|--------|
-| **Statut** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
-| **Date** | 2026-09-29 |
-| **Profil** | **Standard** — DOC / final watch consolidation |
-| **Critical** | **NON** |
-| **Nature** | Synthèse / transmission — **pas** sélection d’outil, **pas** architecture, **pas** validation du 1.3 |
-
-### 18.1 Objet et méthode de consolidation
-
-**Objet :** répondre à « qu’avons-nous appris de suffisamment solide pour orienter la suite du CRM Assurance Courtage, sans encore choisir sa solution ? »
-
-**Méthode :**
-1. **1.3.1** a établi le système de veille (axes, registre, méthode).
-2. **A / B / C / D** ont produit les recherches bornées (preuves détaillées conservées en §14–§17).
-3. **E** consolide, corrige les réserves D (R-D01…R-D07), élimine contradictions / formulations obsolètes, et produit une couche de **transmission** vers conception / budget / organisation futurs.
-4. Aucune architecture cible ; aucune stack ; aucun use case IA **ADOPTED**.
-
-**Niveaux de preuve utilisés :**
-
-| Statut | Signification |
-|--------|---------------|
-| **CONFIRMED** | Fait sourcé, non contesté dans le périmètre documentaire |
-| **LIKELY** | Exigence / contrainte probable pour le projet, sous réserve de paramètres cabinet |
-| **TO VERIFY** | Inconnue projet ou applicabilité conditionnelle |
-| **DESIGN REFERENCE** | Référentiel de conception (non = obligation juridique prouvée) |
-| **FUTURE DECISION INPUT** | Élément utile à une décision ultérieure (Morris / groupe) |
-| **WATCH** | Sujet à suivre ; pas d’adoption |
-
-### 18.2 Synthèse exécutive finale
-
-1. **FAIT** — Digitalisation de la distribution d’assurance **lente** ; ventes en ligne souvent faibles (agrégats EIOPA) → **IMPACT CRM** : soutenir omnicanal + conseil, pas un modèle digital-only → **STATUT** : CONFIRMED (marché) / FUTURE DECISION INPUT
-2. **FAIT** — Intermédiaires en consolidation ; passeports FoS/FoE **+10 % (2022–2024)** (S56) → **IMPACT** : différenciation relationnelle / outillage → **STATUT** : CONFIRMED (contexte)
-3. **CONSTAT** — Acteurs digitaux exposent devis / self-service / espace client, souvent avec canal humain revendiqué → **IMPACT** : attentes clients sur self-service **borné** + contact humain → **STATUT** : COMPETITIVE OBSERVATION (pas ranking)
-4. **LIKELY** — IDD / ACPR : devoir d’information, conseil adapté, traçabilité du conseil → **IMPACT** : historique / preuves / formalisation dans le CRM → **STATUT** : PROJECT CONSTRAINT
-5. **TO VERIFY** — Traitement de **données de santé** et **AIPD** → **IMPACT** : régime éventuellement renforcé si confirmé → **STATUT** : LEGAL TO VERIFY (`HEALTH DATA` / `AIPD`)
-6. **LIKELY** — RGPD : finalité, minimisation, conservation, droits, privacy by design, sous-traitants → **IMPACT** : critères de conception + DPA futurs → **STATUT** : PROJECT CONSTRAINT
-7. **LIKELY** — Sécurité appropriée : auth, MFA **candidate**, rôles, logs, backup/restauration, réversibilité fournisseur → **IMPACT** : contraintes SSI de conception (sans architecture SSI) → **STATUT** : SECURITY CONSTRAINT ; **DORA = TO VERIFY**
-8. **TO VERIFY** — Applicabilité juridique accessibilité (seuil CA / statut) → **IMPACT** : ne pas écrire « RGAA REQUIRED » sans preuve → **STATUT** : `ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY`
-9. **DESIGN REFERENCE** — RGAA / WCAG / inclusion multicanal ; RGESN pour sobriété → **IMPACT** : interfaces, docs, poids, features inutiles → **STATUT** : DESIGN REFERENCE (pas certification)
-10. **FAIT** — Panel no-code/low-code = **CANDIDATE ONLY** ; capacités documentées avec gaps (RDV, docs accessibles, portail dossier…) → **IMPACT** : future évaluation outillée, pas sélection ici → **STATUT** : FUTURE DECISION INPUT
-11. **WATCH** — IA assistance (AI-D01…D08) ; cas sensibles (reco auto, scoring, underwriting…) = HIGH-SENSITIVITY → **IMPACT** : human oversight ; pas d’adoption → **STATUT** : RESEARCH CANDIDATE / WATCH ; `AI ACT = TO VERIFY / USE-CASE DEPENDENT`
-12. **LIKELY** — Export / réversibilité / dépendance licences (SSO Pro/Ent, audit Enterprise…) → **IMPACT** : critères 1.5 / Phase 2 → **STATUT** : TOOL EVALUATION INPUT
-13. **LIMITE** — **Architecture = NOT DECIDED** ; **Stack = NOT DECIDED** ; **1.3 ≠ VALIDATED** ; **1.4 NOT OPENED**
-
-### 18.3 Enseignements marché / relation client
-
-| Enseignement | Source | Implication |
-|--------------|--------|-------------|
-| Digitalisation distribution progressive mais limitée | S55–S57 | CRM = soutien omnicanal |
-| GenAI via chatbots / sales tools en hausse ; IDD incomplet sur ces canaux | S55 | IA = watch ; oversight humain |
-| Passeports FoS/FoE **+10 % 2022–2024** (corr. R-D01 ; S56) | S56 | Contexte consolidation / mobilité |
-| Self-service devis + espace client = patterns visibles | Scan §17.4 + S81–S84 + S87 | Différenciation cabinet = proximité / conseil personnalisé / transparence |
-| Canaux compatibles marché cible / intérêt client | S58 | Traçabilité conseil |
-
-**Pas** de « meilleur concurrent » ni de modèle à cloner.
-
-### 18.4 Contraintes réglementaires & données
-
-Consolide A (détail §14) :
-
-| Thème | Statut consolidé |
-|-------|------------------|
-| Exigences / besoins client ; conseil / recommandation ; traçabilité | LIKELY — PROJECT CONSTRAINT |
-| Finalité ; minimisation ; conservation ; droits ; privacy by design | LIKELY |
-| Sous-traitants / DPA | LIKELY si SaaS — FUTURE DECISION INPUT |
-| Sécurité appropriée (art. 32) | LIKELY — lien B |
-| **HEALTH DATA PROCESSING** | **TO VERIFY** |
-| **AIPD** | **TO VERIFY** |
-| Bases légales détaillées | **TO VERIFY** |
-
-**Pas** un avis juridique.
-
-### 18.5 Contraintes sécurité & résilience
-
-Consolide B (détail §15) comme **contraintes de conception futures** :
-
-- authentification ; MFA **candidate** (selon risque / population) ;
-- habilitations / moindre privilège ;
-- espace client & documents (séparation, droits, traçabilité) ;
-- logs / incidents ; sauvegarde / restauration ;
-- critères fournisseurs SaaS ; export / réversibilité.
-
-**DORA APPLICABILITY = TO VERIFY.**
-
-**SECURITY SCENARIOS ARE NOT A MEASURED RISK REGISTER** — les scénarios R-Bxx / formulations d’impact potentiel du deep-dive B **ne constituent pas** une cotation de risque acceptée ni un registre de risques mesuré.
-
-**Pas** d’architecture SSI.
-
-### 18.6 Accessibilité & numérique responsable
-
-| Couche | Contenu | Statut |
-|--------|---------|--------|
-| **A. Obligations juridiques potentielles** | Art. 47 loi 2005-102 ; décret 2019-768 **modifié** par **2026-816** (S49b) ; seuil CA privé | `ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY` |
-| **B. Références de conception** | **RGAA** = ACCESSIBILITY DESIGN REFERENCE ; **WCAG** = STANDARD / GUIDANCE | DESIGN REFERENCE |
-| **C. Bonnes pratiques** | Clavier, focus, formulaires, contraste, docs, auth accessible, sobriété, limiter tiers | DESIGN REFERENCE |
-| Écoconception | **RGESN** = DESIGN / ECO-CONCEPTION REFERENCE | DESIGN REFERENCE |
-
-**Ne pas écrire** RGAA REQUIRED / RGESN REQUIRED sans preuve projet.
-
-### 18.7 Technologie / no-code / IA
-
-Le panel doctrine reste **CANDIDATE TOOL ECOSYSTEM ONLY** (détail matrice §17.8).
-
-**Familles (pas un concours) :**
-
-| Famille | Candidats (exemples panel) | Enseignement principal |
-|---------|----------------------------|------------------------|
-| A. CRM spécialisés | HubSpot | CRM natif documenté ; SSO **Professional/Enterprise** (S86) — **NOT SELECTED** |
-| B. App / data no-code-low-code | Airtable, Bubble, Power Apps | Flexibilité élevée ; sécurité souvent à concevoir |
-| C. Portails | Softr (+ patterns HubSpot/Bubble/Power Pages) | Portail possible ; « dossier assurance » souvent à composer |
-| D. Automatisation | Make (S85), n8n, Power Automate | Orchestration ; pas CRM cœur |
-| E. Formulaires | Tally (+ forms natifs) | Collecte + consentement |
-| F. BI | Power BI (+ reporting CRM) | KPI ; sobriété dashboards |
-| G. Périphériques | Voiceflow, Postman, Notion, Figma, Miro | Hors cœur CRM ; Shopify **OOS** |
-| H. IA / assistants | Features éditeurs + AI-D01…D08 | Assistance ≠ décision ; **aucun ADOPTED** |
-
-**AI Act (corr. R-D02) :** régime progressif — 2026-08-02 = début enforcement / majorité du régime général **concerné**, **sans** assimiler high-risk Annex III (2027-12-02) ni Annex I (2028-08-02). Transparence → août 2026. **`AI ACT PROJECT APPLICABILITY = TO VERIFY / USE-CASE DEPENDENT`.**
-
-Cas sensibles (reco auto, scoring, underwriting, fraude auto…) : **HIGH-SENSITIVITY / REGULATORY REVIEW REQUIRED** — non conçus.
-
-### 18.8 Impacts concrets pour le CRM
-
-| ID | Enseignement | Origine | Impact CRM | Nature | Étape future | Statut |
-|----|--------------|---------|------------|--------|--------------|--------|
-| I-E01 | Omnicanal + conseil humain | D+marché | Ne pas concevoir digital-only | OPPORTUNITY / DESIGN REFERENCE | Conception ; UX | OPEN |
-| I-E02 | Traçabilité conseil / historique | A | Preuves, historique échanges/contrats | PROJECT CONSTRAINT | Conception ; delivery | OPEN |
-| I-E03 | Minimisation / finalité / droits | A | Modèle de données & UX droits | PROJECT CONSTRAINT | Architecture ; UX | OPEN — model NOT DECIDED |
-| I-E04 | HEALTH DATA / AIPD | A | Régime potentiellement renforcé | LEGAL TO VERIFY | Conformité | TO VERIFY |
-| I-E05 | Auth / MFA candidate / rôles | B | Comptes séparés ; moindre privilège | SECURITY CONSTRAINT | Architecture ; RSSI | OPEN |
-| I-E06 | Espace client & docs sécurisés | B+C | Séparation, droits, accessibilité | SECURITY + DESIGN | Conception ; UX | OPEN |
-| I-E07 | Logs / backup / incidents | B | Exigences RUN futures | SECURITY CONSTRAINT | Architecture ; RUN | OPEN |
-| I-E08 | DORA | B | Applicabilité cabinet | LEGAL TO VERIFY | Conformité | TO VERIFY |
-| I-E09 | Accessibilité juridique | C | Déclaration / conformité si champ | LEGAL TO VERIFY | Morris / conformité | TO VERIFY |
-| I-E10 | RGAA/WCAG comme références | C | Critères UI / docs / auth | DESIGN REFERENCE | UX ; QA | OPEN |
-| I-E11 | RGESN / sobriété | C | Scope minimal ; limiter IA/tiers | DESIGN REFERENCE | Conception | OPEN |
-| I-E12 | Panel no-code = candidats | D | Évaluer sans sélection précoce | TOOL EVALUATION INPUT | Phase 2 / Morris | OPEN |
-| I-E13 | Gaps RDV / docs / portail dossier | D | Discovery éventuelle hors panel | TOOL EVALUATION INPUT | Discovery | OPEN |
-| I-E14 | SSO / audit souvent tier-dependent | D | Input budget licences | TOOL EVALUATION INPUT | 1.5 | OPEN |
-| I-E15 | Réversibilité / export | A+B+D | Critère sélection obligatoire | PROJECT CONSTRAINT | Stack futur | OPEN |
-| I-E16 | IA assistance vs décision | D+AI Act | Human oversight ; pas auto-conseil | WATCH | IA ; Morris | OPEN — not adopted |
-| I-E17 | Multicanal inclusion | C+D | Téléphone / physique / Visio | DESIGN REFERENCE | Conception | OPEN |
-| I-E18 | Self-service borné | Marché+D | Espace client utile sans remplacer conseil | OPPORTUNITY | Conception | OPEN |
-
-### 18.9 Contraintes à transmettre aux prochaines étapes
-
-| Catégorie | Acquis (veille) | Reste à décider | Gate futur |
-|-----------|-----------------|-----------------|------------|
-| **DATA** | Principes RGPD / conservation guidance CNIL | Bases légales ; HEALTH DATA ; AIPD ; rétention fine | Conformité ; architecture |
-| **SECURITY** | Familles de contrôles candidates | MFA scope ; IdP ; RPO/RTO ; SIEM | RSSI ; architecture |
-| **ACCESSIBILITY** | Références RGAA/WCAG | Applicabilité légale ; VPAT finalistes | UX ; QA ; Morris |
-| **RESPONSIBLE DIGITAL** | RGESN = référence | Scope features / poids / tiers | Conception |
-| **FUNCTIONAL** | Besoins 1.1/1.2 inchangés | Portail / RDV / docs générés | Architecture ; discovery |
-| **TOOL SELECTION** | Matrice evidence + 17 critères | Pondération ; shortlist ; choix | Morris / groupe ; Phase 2 |
-| **AI GOVERNANCE** | Calendrier AI Act ; cas WATCH | Use case ; classification | Morris ; conformité IA |
-| **OPERATIONS** | Besoin backup / incidents / réversibilité | Process RUN | Delivery ; RUN |
-
-### 18.10 Opportunités à préserver
-
-| Opportunité | Statut |
-|-------------|--------|
-| Relation **humain + digital** (différenciation vs pure digital) | OPPORTUNITY / FUTURE DECISION INPUT |
-| Multicanal (physique, Visio, tel, email, espace client) | OPPORTUNITY |
-| Centralisation historique / documents | OPPORTUNITY |
-| Self-service **borné** (docs, devis, suivi) | OPPORTUNITY |
-| Réduction tâches admin via automatisation **assistive** | OPPORTUNITY |
-| IA comme **assistance** (pas décision) | OPPORTUNITY / WATCH |
-| Sobriété fonctionnelle (RGESN) | OPPORTUNITY |
-| Approche modulaire no-code / briques complémentaires | OPPORTUNITY / FUTURE DECISION INPUT |
-
-### 18.11 Points de vigilance / TO VERIFY
-
-| Question | Pourquoi ça compte | Moment pour trancher |
-|----------|--------------------|----------------------|
-| Taille / CA / bilan / statut juridique cabinet | Accessibilité légale ; DORA ; proportionnalité | Avant conformité / Morris |
-| DORA applicability | Obligations résilience éventuelles | Conformité / RSSI |
-| Accessibilité juridique + EAA e-commerce | Obligations / déclaration | Conformité ; UX |
-| HEALTH DATA ; AIPD ; bases légales | Régime données | Avant modèle de données |
-| Sous-traitants / DPA / localisation / transferts | RGPD art. 28 | Avant choix stack |
-| RPO / RTO | Résilience | Architecture / RUN |
-| Niveau licence sécurité (SSO, audit…) | Budget / faisabilité | 1.5 + stack |
-| Accessibilité réelle plateformes finalistes | Inclusion | QA / UX |
-| Outil RDV ; générateur documentaire accessible | Gaps panel | Discovery / Phase 2 |
-| Use case IA + classification AI Act | Risque / conformité | Morris / IA |
-| Pondération des 17 critères outils | Décision stack | Morris / groupe |
-| Budget global | Viabilité | 1.5 |
-
-### 18.12 Future Tool Evaluation Framework
-
-Les **17 dimensions** de §17.14 restent le cadre (reformulées pour lisibilité) :
-
-1. Couverture fonctionnelle — 2. Simplicité opérationnelle — 3. Maintenabilité / gouvernance — 4. Sécurité — 5. Confidentialité / RGPD — 6. Droits / rôles — 7. Portail externe — 8. Automatisation — 9. Intégration / API — 10. Reporting — 11. Documents — 12. Accessibilité — 13. Numérique responsable — 14. Export / réversibilité — 15. IA (contrôles / oversight) — 16. Dépendances licences / tiers — 17. Capacité d’évolution.
-
-**Aucun poids. Aucun score. Aucun ranking.**
-
-**DECISION OWNER = MORRIS / WORKING GROUP** (pondération et choix futurs — **non décidés ici**).
-
-### 18.13 Inputs pour organisation / budget / vision
-
-| Étape future | Input issu du 1.3 | Ce que le 1.3 **ne** décide **pas** |
-|--------------|-------------------|-------------------------------------|
-| **1.4 Organisation** | Compétences / responsabilités à prévoir (données, sécurité, accessibilité, outils, IA governance) | Organigramme ; RACI final ; staffing |
-| **1.5 Budget** | Impacts licence / tiers / niveaux Professional–Enterprise potentiels ; COST/LICENSING = FUTURE BUDGET INPUT | Budget chiffré ; arbitrage financier |
-| **1.6 Vision** | Contraintes + opportunités + critères d’évaluation | Vision finale / pitch produit |
-
-**1.4 = NOT OPENED.** Aucune mutation des documents 1.4 / 1.5 / 1.6 dans ce cycle.
-
-### 18.14 Points clés pour le rapport et la soutenance
-
-Messages réutilisables (groupe / jury / client pédagogique) :
-
-1. Le CRM doit soutenir une **relation de conseil humain** renforcée par le digital — pas un pure digital-only.
-2. **Données & traçabilité du conseil** sont structurantes (RGPD + devoir de conseil) ; santé / AIPD restent à vérifier.
-3. **Sécurité** : comptes, droits, espace client/docs, logs, sauvegarde, réversibilité — sans architecture figée ici.
-4. **Accessibilité & sobriété** : références de conception (RGAA/WCAG/RGESN) ; obligation légale **à vérifier** selon le cabinet.
-5. **No-code / low-code** : écosystème **candidat** documenté ; gaps connus (RDV, docs, portail) ; **aucun outil choisi**.
-6. **IA** : assistance possible en veille ; décisions automatisées sensibles **hors adoption** ; AI Act **use-case dependent**.
-7. Ce que le 1.3 **n’a pas** décidé : architecture, stack, budget, organisation, vision finale.
-
-### 18.15 Sources prioritaires finales
-
-Shortlist (registre complet = A/B/C/D) :
-
-| Priorité | IDs | Thème |
-|----------|-----|-------|
-| Assurance / IDD / ACPR | S27, S28, S55, S56, S57, S58 | Distribution / conseil / marché |
-| RGPD / CNIL | S21–S26, S31 | Données |
-| Sécurité / ANSSI | S03 + sources B §15 | SSI |
-| Accessibilité | S16, S17, **S49b** (Légifrance JO), S49c | RGAA / décret |
-| RGESN | S18, S19 | Écoconception |
-| AI Act | S60, S61 | Gouvernance IA |
-| Éditeurs structurants | S62–S66, S70–S77, S80, S85, S86 | Capacités outils |
-
-### 18.16 Limites / réserves
-
-- Cabinet **fictif** ; pas de terrain utilisateur réel au-delà de 1.1/1.2.
-- Pas d’avis juridique ; pas d’audit sécurité ; pas d’audit RGAA ; pas de bilan environnemental.
-- Capacités outils = **evidence éditeur** ; plans / configs réels = **TO VERIFY**.
-- HTML Légifrance parfois inaccessible (Cloudflare) — ID JO tracé (S49b).
-- **Aucun outil sélectionné** ; **aucune architecture décidée** ; **aucun use case IA adopté**.
-- Points réglementaires conditionnels restent **TO VERIFY**.
-- **1.3 ≠ VALIDATED** ; **1.4 NOT OPENED**.
+| **1.3** | OPENED — AWAITING FINAL REVIEW |
+| **1.3.1** | REVIEW PASS |
+| **1.3.2** | PEDAGOGICAL SYNTHESIS — AWAITING REVIEW |
+| **Base A→E** | REVIEW PASS (Git) |
+| **Architecture / Stack** | NOT DECIDED |
+| **1.4** | NOT OPENED |

```

## 9. Validations

| Check | Résultat |
|-------|----------|
| Lecture 10–15 min | PASS |
| Volume §4 ~1 800–2 500 | JUSTIFIED (~1710 mots) |
| 6–8 enseignements | PASS (8) |
| Marché / réglem. / sécu-a11y / techno-IA | PASS |
| Impacts suite / TO VERIFY / sources prioritaires | PASS |
| Pas d’import collègue | PASS |
| Pas stack / architecture | PASS |
| 1.4 NOT OPENED | PASS |
| Fidélité A→E (représentation) | PASS |
| 2 fichiers projet | PASS |
| Commit | PASS (91659fee) |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | TO VERIFY AFTER PUBLISH |

## 10. Réserves

Synthèse pédagogique ≠ preuve exhaustive ; Git = détail. Le 1.3 n’est pas validé. TO VERIFY structurants conservés.

## 11. Verdict

**READY FOR CHATGPT REVIEW — CRM 1.3.2 PEDAGOGICAL WATCH SIMPLIFICATION COMPLETE**
