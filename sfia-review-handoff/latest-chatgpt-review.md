# ChatGPT Review Pack — CRM 1.3.2-E Consolidation finale du rapport de veille

## 0. Identité

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 01:52:10 CEST |
| **Cycle** | 1.3.2-E Consolidation finale du rapport de veille |
| **Typologie** | DOC / final watch consolidation |
| **Profil** | **Standard** |
| **Critical** | **NON** |
| **CKC** | Cadrage pilot candidate |
| **Nature** | 1.3.2 FINAL CONSOLIDATION — AWAITING CHATGPT REVIEW (pas validation globale du 1.3) |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | /Users/l/Projects/sfia-worktree-crm-assurance |
| Branche | docs/crm-assurance-courtage-1-3-watch-01 |
| HEAD initial | 58d52ac0be9efbd5bc500fd4087285d6f34e8699 |
| HEAD final | 43b89a9e7690fb53c38b3afe4cf281e2327df692 |
| origin/main | 6f47f74dc9b515c4c79624b21772223ba02c76cd |
| Dirt | .tmp-sfia-review/** only |
| Drift CRM | NONE |
| Git Truth | **PASS** |

Handoff D tip connu avant cycle : 2f81e4c0

## 2. Sources SFIA / projet

Template ; routing ; sfia-v2.5 §4.1/§4.16 ; CKC 01-cadrage ; OM ; guardrails ; checklist ; scripts README ; doctrine ; 01-01 ; 01-02 ; 01-03.

## 3. État entrée → sortie

| Élément | Entrée | Sortie |
|---------|--------|--------|
| 1.3.2-D | REVIEW PASS WITH RESERVES | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
| 1.3.2-E | NOT STARTED | **FINAL CONSOLIDATION — AWAITING REVIEW** |
| 1.3 | OPENED | **OPENED — AWAITING FINAL REVIEW** |
| 1.4 | NOT OPENED | **NOT OPENED** |
| Architecture / Stack | NOT DECIDED | **NOT DECIDED** |


## 4. Corrections R-D01…R-D07

| ID | Avant | Après | Preuve | Statut |
|----|-------|-------|--------|--------|
| R-D01 | passeports +12 % 2020–2024 | **+10 % FoS/FoE 2022–2024** (S56) ; S55 conserve +12 % 2020–2024 comme période news distincte | EIOPA structure page | **RESOLVED** |
| R-D02 | « Applicabilité générale = 2026-08-02 » trop large | Tableau phases : interdictions 2025-02 ; GPAI 2025-08 ; régime général/enforcement 2026-08-02 ≠ high-risk ; transparence août 2026 ; Annex III **2027-12-02** ; Annex I **2028-08-02** | Commission AI Act page S60 | **RESOLVED** |
| R-D03 | SSO Enterprise | SSO **Professional et Enterprise** | HubSpot KB S86 (MAJ 2026-08-05) | **RESOLVED** |
| R-D04 | Alan « particuliers selon pages » vague | Cibles sourcées alan.com (entreprises, TNS, particuliers revendiqués) + S87 | alan.com | **RESOLVED** |
| R-D05 | Make sans source registre / preuve floue | S85 help.make.com/get-started ; cellules sécu/IA = **TV** | Make Help | **RESOLVED** |
| R-D06 | Décret 2026-816 via INSEI primaire | Primaire **Légifrance** `JORFTEXT000054746617` (S49b) ; secondaire INSEI S49c ; HTML Cloudflare-challenged | Légifrance ID + INSEI | **RESOLVED** (accès HTML corps = réserve technique tracée) |
| R-D07 | Preuve « Trust+KB / Docs » | IDs S62–S77 / S85–S86 sur cellules décisionnelles | Matrice §17.8 | **RESOLVED** |

**1.3.2-D = REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E**


## 5. Métadonnées 01-03

```markdown
# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire

| Champ | Valeur |
|-------|--------|
| **Statut 1.3** | **OPENED — AWAITING FINAL REVIEW** |
| **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
| **1.3.2 Rapport de veille** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
| **1.3.2-C** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
| **1.3.2-D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
| **1.3.2-E** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
| **1.1** | VALIDATED |
| **1.2** | VALIDATED (2026-09-28) |
| **1.4** | **NOT OPENED** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |
| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
| **Notion** | Aucune action dans ce cycle |
| **Miro** | Hors scope — non modifié |

**Décision Morris :** 1.3 OPENED ; 1.3.1 établi ; trajectoire 1.3.2 découpée en deep-dives A→E.
```

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
| 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
| 1.3.2-B | **REVIEW PASS — SECURITY & RESILIENCE** |
| 1.3.2-C | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
| 1.3.2-D | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
| Étape actuelle | **1.3.2-E Consolidation finale — AWAITING REVIEW** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revue ChatGPT finale du 1.3.2 puis décision Morris séparée sur validation globale du 1.3 et éventuelle ouverture du 1.4 |

---
```

## 7. §13 complet

```markdown
## 13. Synthèse 1.3 — état de consolidation

| Point | État |
|-------|------|
| **1.3** | **OPENED — AWAITING FINAL REVIEW** |
| **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
| **1.3.2** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
| **1.3.2-C** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
| **1.3.2-D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
| **1.3.2-E** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
| Architecture | **NOT DECIDED** |
| Stack | **NOT DECIDED** / CANDIDATE TOOL ECOSYSTEM ONLY |
| **1.4** | **NOT OPENED** |
| Miro / Notion | NOT MODIFIED |

La **synthèse exécutive finale** et les impacts à transmettre sont en **§18**. Les deep-dives A–D restent les preuves détaillées.

Le 1.3 **n’est pas** VALIDATED. Aucune stack, architecture ni use case IA n’est adopté.
```

## 8. Section §18 COMPLÈTE

```markdown
## 18. 1.3.2-E — Consolidation finale du rapport de veille

| Champ | Valeur |
|-------|--------|
| **Statut** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
| **Date** | 2026-09-29 |
| **Profil** | **Standard** — DOC / final watch consolidation |
| **Critical** | **NON** |
| **Nature** | Synthèse / transmission — **pas** sélection d’outil, **pas** architecture, **pas** validation du 1.3 |

### 18.1 Objet et méthode de consolidation

**Objet :** répondre à « qu’avons-nous appris de suffisamment solide pour orienter la suite du CRM Assurance Courtage, sans encore choisir sa solution ? »

**Méthode :**
1. **1.3.1** a établi le système de veille (axes, registre, méthode).
2. **A / B / C / D** ont produit les recherches bornées (preuves détaillées conservées en §14–§17).
3. **E** consolide, corrige les réserves D (R-D01…R-D07), élimine contradictions / formulations obsolètes, et produit une couche de **transmission** vers conception / budget / organisation futurs.
4. Aucune architecture cible ; aucune stack ; aucun use case IA **ADOPTED**.

**Niveaux de preuve utilisés :**

| Statut | Signification |
|--------|---------------|
| **CONFIRMED** | Fait sourcé, non contesté dans le périmètre documentaire |
| **LIKELY** | Exigence / contrainte probable pour le projet, sous réserve de paramètres cabinet |
| **TO VERIFY** | Inconnue projet ou applicabilité conditionnelle |
| **DESIGN REFERENCE** | Référentiel de conception (non = obligation juridique prouvée) |
| **FUTURE DECISION INPUT** | Élément utile à une décision ultérieure (Morris / groupe) |
| **WATCH** | Sujet à suivre ; pas d’adoption |

### 18.2 Synthèse exécutive finale

1. **FAIT** — Digitalisation de la distribution d’assurance **lente** ; ventes en ligne souvent faibles (agrégats EIOPA) → **IMPACT CRM** : soutenir omnicanal + conseil, pas un modèle digital-only → **STATUT** : CONFIRMED (marché) / FUTURE DECISION INPUT
2. **FAIT** — Intermédiaires en consolidation ; passeports FoS/FoE **+10 % (2022–2024)** (S56) → **IMPACT** : différenciation relationnelle / outillage → **STATUT** : CONFIRMED (contexte)
3. **CONSTAT** — Acteurs digitaux exposent devis / self-service / espace client, souvent avec canal humain revendiqué → **IMPACT** : attentes clients sur self-service **borné** + contact humain → **STATUT** : COMPETITIVE OBSERVATION (pas ranking)
4. **LIKELY** — IDD / ACPR : devoir d’information, conseil adapté, traçabilité du conseil → **IMPACT** : historique / preuves / formalisation dans le CRM → **STATUT** : PROJECT CONSTRAINT
5. **TO VERIFY** — Traitement de **données de santé** et **AIPD** → **IMPACT** : régime éventuellement renforcé si confirmé → **STATUT** : LEGAL TO VERIFY (`HEALTH DATA` / `AIPD`)
6. **LIKELY** — RGPD : finalité, minimisation, conservation, droits, privacy by design, sous-traitants → **IMPACT** : critères de conception + DPA futurs → **STATUT** : PROJECT CONSTRAINT
7. **LIKELY** — Sécurité appropriée : auth, MFA **candidate**, rôles, logs, backup/restauration, réversibilité fournisseur → **IMPACT** : contraintes SSI de conception (sans architecture SSI) → **STATUT** : SECURITY CONSTRAINT ; **DORA = TO VERIFY**
8. **TO VERIFY** — Applicabilité juridique accessibilité (seuil CA / statut) → **IMPACT** : ne pas écrire « RGAA REQUIRED » sans preuve → **STATUT** : `ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY`
9. **DESIGN REFERENCE** — RGAA / WCAG / inclusion multicanal ; RGESN pour sobriété → **IMPACT** : interfaces, docs, poids, features inutiles → **STATUT** : DESIGN REFERENCE (pas certification)
10. **FAIT** — Panel no-code/low-code = **CANDIDATE ONLY** ; capacités documentées avec gaps (RDV, docs accessibles, portail dossier…) → **IMPACT** : future évaluation outillée, pas sélection ici → **STATUT** : FUTURE DECISION INPUT
11. **WATCH** — IA assistance (AI-D01…D08) ; cas sensibles (reco auto, scoring, underwriting…) = HIGH-SENSITIVITY → **IMPACT** : human oversight ; pas d’adoption → **STATUT** : RESEARCH CANDIDATE / WATCH ; `AI ACT = TO VERIFY / USE-CASE DEPENDENT`
12. **LIKELY** — Export / réversibilité / dépendance licences (SSO Pro/Ent, audit Enterprise…) → **IMPACT** : critères 1.5 / Phase 2 → **STATUT** : TOOL EVALUATION INPUT
13. **LIMITE** — **Architecture = NOT DECIDED** ; **Stack = NOT DECIDED** ; **1.3 ≠ VALIDATED** ; **1.4 NOT OPENED**

### 18.3 Enseignements marché / relation client

| Enseignement | Source | Implication |
|--------------|--------|-------------|
| Digitalisation distribution progressive mais limitée | S55–S57 | CRM = soutien omnicanal |
| GenAI via chatbots / sales tools en hausse ; IDD incomplet sur ces canaux | S55 | IA = watch ; oversight humain |
| Passeports FoS/FoE **+10 % 2022–2024** (corr. R-D01 ; S56) | S56 | Contexte consolidation / mobilité |
| Self-service devis + espace client = patterns visibles | Scan §17.4 + S81–S84 + S87 | Différenciation cabinet = proximité / conseil personnalisé / transparence |
| Canaux compatibles marché cible / intérêt client | S58 | Traçabilité conseil |

**Pas** de « meilleur concurrent » ni de modèle à cloner.

### 18.4 Contraintes réglementaires & données

Consolide A (détail §14) :

| Thème | Statut consolidé |
|-------|------------------|
| Exigences / besoins client ; conseil / recommandation ; traçabilité | LIKELY — PROJECT CONSTRAINT |
| Finalité ; minimisation ; conservation ; droits ; privacy by design | LIKELY |
| Sous-traitants / DPA | LIKELY si SaaS — FUTURE DECISION INPUT |
| Sécurité appropriée (art. 32) | LIKELY — lien B |
| **HEALTH DATA PROCESSING** | **TO VERIFY** |
| **AIPD** | **TO VERIFY** |
| Bases légales détaillées | **TO VERIFY** |

**Pas** un avis juridique.

### 18.5 Contraintes sécurité & résilience

Consolide B (détail §15) comme **contraintes de conception futures** :

- authentification ; MFA **candidate** (selon risque / population) ;
- habilitations / moindre privilège ;
- espace client & documents (séparation, droits, traçabilité) ;
- logs / incidents ; sauvegarde / restauration ;
- critères fournisseurs SaaS ; export / réversibilité.

**DORA APPLICABILITY = TO VERIFY.**

**SECURITY SCENARIOS ARE NOT A MEASURED RISK REGISTER** — les scénarios R-Bxx / formulations d’impact potentiel du deep-dive B **ne constituent pas** une cotation de risque acceptée ni un registre de risques mesuré.

**Pas** d’architecture SSI.

### 18.6 Accessibilité & numérique responsable

| Couche | Contenu | Statut |
|--------|---------|--------|
| **A. Obligations juridiques potentielles** | Art. 47 loi 2005-102 ; décret 2019-768 **modifié** par **2026-816** (S49b) ; seuil CA privé | `ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY` |
| **B. Références de conception** | **RGAA** = ACCESSIBILITY DESIGN REFERENCE ; **WCAG** = STANDARD / GUIDANCE | DESIGN REFERENCE |
| **C. Bonnes pratiques** | Clavier, focus, formulaires, contraste, docs, auth accessible, sobriété, limiter tiers | DESIGN REFERENCE |
| Écoconception | **RGESN** = DESIGN / ECO-CONCEPTION REFERENCE | DESIGN REFERENCE |

**Ne pas écrire** RGAA REQUIRED / RGESN REQUIRED sans preuve projet.

### 18.7 Technologie / no-code / IA

Le panel doctrine reste **CANDIDATE TOOL ECOSYSTEM ONLY** (détail matrice §17.8).

**Familles (pas un concours) :**

| Famille | Candidats (exemples panel) | Enseignement principal |
|---------|----------------------------|------------------------|
| A. CRM spécialisés | HubSpot | CRM natif documenté ; SSO **Professional/Enterprise** (S86) — **NOT SELECTED** |
| B. App / data no-code-low-code | Airtable, Bubble, Power Apps | Flexibilité élevée ; sécurité souvent à concevoir |
| C. Portails | Softr (+ patterns HubSpot/Bubble/Power Pages) | Portail possible ; « dossier assurance » souvent à composer |
| D. Automatisation | Make (S85), n8n, Power Automate | Orchestration ; pas CRM cœur |
| E. Formulaires | Tally (+ forms natifs) | Collecte + consentement |
| F. BI | Power BI (+ reporting CRM) | KPI ; sobriété dashboards |
| G. Périphériques | Voiceflow, Postman, Notion, Figma, Miro | Hors cœur CRM ; Shopify **OOS** |
| H. IA / assistants | Features éditeurs + AI-D01…D08 | Assistance ≠ décision ; **aucun ADOPTED** |

**AI Act (corr. R-D02) :** régime progressif — 2026-08-02 = début enforcement / majorité du régime général **concerné**, **sans** assimiler high-risk Annex III (2027-12-02) ni Annex I (2028-08-02). Transparence → août 2026. **`AI ACT PROJECT APPLICABILITY = TO VERIFY / USE-CASE DEPENDENT`.**

Cas sensibles (reco auto, scoring, underwriting, fraude auto…) : **HIGH-SENSITIVITY / REGULATORY REVIEW REQUIRED** — non conçus.

### 18.8 Impacts concrets pour le CRM

| ID | Enseignement | Origine | Impact CRM | Nature | Étape future | Statut |
|----|--------------|---------|------------|--------|--------------|--------|
| I-E01 | Omnicanal + conseil humain | D+marché | Ne pas concevoir digital-only | OPPORTUNITY / DESIGN REFERENCE | Conception ; UX | OPEN |
| I-E02 | Traçabilité conseil / historique | A | Preuves, historique échanges/contrats | PROJECT CONSTRAINT | Conception ; delivery | OPEN |
| I-E03 | Minimisation / finalité / droits | A | Modèle de données & UX droits | PROJECT CONSTRAINT | Architecture ; UX | OPEN — model NOT DECIDED |
| I-E04 | HEALTH DATA / AIPD | A | Régime potentiellement renforcé | LEGAL TO VERIFY | Conformité | TO VERIFY |
| I-E05 | Auth / MFA candidate / rôles | B | Comptes séparés ; moindre privilège | SECURITY CONSTRAINT | Architecture ; RSSI | OPEN |
| I-E06 | Espace client & docs sécurisés | B+C | Séparation, droits, accessibilité | SECURITY + DESIGN | Conception ; UX | OPEN |
| I-E07 | Logs / backup / incidents | B | Exigences RUN futures | SECURITY CONSTRAINT | Architecture ; RUN | OPEN |
| I-E08 | DORA | B | Applicabilité cabinet | LEGAL TO VERIFY | Conformité | TO VERIFY |
| I-E09 | Accessibilité juridique | C | Déclaration / conformité si champ | LEGAL TO VERIFY | Morris / conformité | TO VERIFY |
| I-E10 | RGAA/WCAG comme références | C | Critères UI / docs / auth | DESIGN REFERENCE | UX ; QA | OPEN |
| I-E11 | RGESN / sobriété | C | Scope minimal ; limiter IA/tiers | DESIGN REFERENCE | Conception | OPEN |
| I-E12 | Panel no-code = candidats | D | Évaluer sans sélection précoce | TOOL EVALUATION INPUT | Phase 2 / Morris | OPEN |
| I-E13 | Gaps RDV / docs / portail dossier | D | Discovery éventuelle hors panel | TOOL EVALUATION INPUT | Discovery | OPEN |
| I-E14 | SSO / audit souvent tier-dependent | D | Input budget licences | TOOL EVALUATION INPUT | 1.5 | OPEN |
| I-E15 | Réversibilité / export | A+B+D | Critère sélection obligatoire | PROJECT CONSTRAINT | Stack futur | OPEN |
| I-E16 | IA assistance vs décision | D+AI Act | Human oversight ; pas auto-conseil | WATCH | IA ; Morris | OPEN — not adopted |
| I-E17 | Multicanal inclusion | C+D | Téléphone / physique / Visio | DESIGN REFERENCE | Conception | OPEN |
| I-E18 | Self-service borné | Marché+D | Espace client utile sans remplacer conseil | OPPORTUNITY | Conception | OPEN |

### 18.9 Contraintes à transmettre aux prochaines étapes

| Catégorie | Acquis (veille) | Reste à décider | Gate futur |
|-----------|-----------------|-----------------|------------|
| **DATA** | Principes RGPD / conservation guidance CNIL | Bases légales ; HEALTH DATA ; AIPD ; rétention fine | Conformité ; architecture |
| **SECURITY** | Familles de contrôles candidates | MFA scope ; IdP ; RPO/RTO ; SIEM | RSSI ; architecture |
| **ACCESSIBILITY** | Références RGAA/WCAG | Applicabilité légale ; VPAT finalistes | UX ; QA ; Morris |
| **RESPONSIBLE DIGITAL** | RGESN = référence | Scope features / poids / tiers | Conception |
| **FUNCTIONAL** | Besoins 1.1/1.2 inchangés | Portail / RDV / docs générés | Architecture ; discovery |
| **TOOL SELECTION** | Matrice evidence + 17 critères | Pondération ; shortlist ; choix | Morris / groupe ; Phase 2 |
| **AI GOVERNANCE** | Calendrier AI Act ; cas WATCH | Use case ; classification | Morris ; conformité IA |
| **OPERATIONS** | Besoin backup / incidents / réversibilité | Process RUN | Delivery ; RUN |

### 18.10 Opportunités à préserver

| Opportunité | Statut |
|-------------|--------|
| Relation **humain + digital** (différenciation vs pure digital) | OPPORTUNITY / FUTURE DECISION INPUT |
| Multicanal (physique, Visio, tel, email, espace client) | OPPORTUNITY |
| Centralisation historique / documents | OPPORTUNITY |
| Self-service **borné** (docs, devis, suivi) | OPPORTUNITY |
| Réduction tâches admin via automatisation **assistive** | OPPORTUNITY |
| IA comme **assistance** (pas décision) | OPPORTUNITY / WATCH |
| Sobriété fonctionnelle (RGESN) | OPPORTUNITY |
| Approche modulaire no-code / briques complémentaires | OPPORTUNITY / FUTURE DECISION INPUT |

### 18.11 Points de vigilance / TO VERIFY

| Question | Pourquoi ça compte | Moment pour trancher |
|----------|--------------------|----------------------|
| Taille / CA / bilan / statut juridique cabinet | Accessibilité légale ; DORA ; proportionnalité | Avant conformité / Morris |
| DORA applicability | Obligations résilience éventuelles | Conformité / RSSI |
| Accessibilité juridique + EAA e-commerce | Obligations / déclaration | Conformité ; UX |
| HEALTH DATA ; AIPD ; bases légales | Régime données | Avant modèle de données |
| Sous-traitants / DPA / localisation / transferts | RGPD art. 28 | Avant choix stack |
| RPO / RTO | Résilience | Architecture / RUN |
| Niveau licence sécurité (SSO, audit…) | Budget / faisabilité | 1.5 + stack |
| Accessibilité réelle plateformes finalistes | Inclusion | QA / UX |
| Outil RDV ; générateur documentaire accessible | Gaps panel | Discovery / Phase 2 |
| Use case IA + classification AI Act | Risque / conformité | Morris / IA |
| Pondération des 17 critères outils | Décision stack | Morris / groupe |
| Budget global | Viabilité | 1.5 |

### 18.12 Future Tool Evaluation Framework

Les **17 dimensions** de §17.14 restent le cadre (reformulées pour lisibilité) :

1. Couverture fonctionnelle — 2. Simplicité opérationnelle — 3. Maintenabilité / gouvernance — 4. Sécurité — 5. Confidentialité / RGPD — 6. Droits / rôles — 7. Portail externe — 8. Automatisation — 9. Intégration / API — 10. Reporting — 11. Documents — 12. Accessibilité — 13. Numérique responsable — 14. Export / réversibilité — 15. IA (contrôles / oversight) — 16. Dépendances licences / tiers — 17. Capacité d’évolution.

**Aucun poids. Aucun score. Aucun ranking.**

**DECISION OWNER = MORRIS / WORKING GROUP** (pondération et choix futurs — **non décidés ici**).

### 18.13 Inputs pour organisation / budget / vision

| Étape future | Input issu du 1.3 | Ce que le 1.3 **ne** décide **pas** |
|--------------|-------------------|-------------------------------------|
| **1.4 Organisation** | Compétences / responsabilités à prévoir (données, sécurité, accessibilité, outils, IA governance) | Organigramme ; RACI final ; staffing |
| **1.5 Budget** | Impacts licence / tiers / niveaux Professional–Enterprise potentiels ; COST/LICENSING = FUTURE BUDGET INPUT | Budget chiffré ; arbitrage financier |
| **1.6 Vision** | Contraintes + opportunités + critères d’évaluation | Vision finale / pitch produit |

**1.4 = NOT OPENED.** Aucune mutation des documents 1.4 / 1.5 / 1.6 dans ce cycle.

### 18.14 Points clés pour le rapport et la soutenance

Messages réutilisables (groupe / jury / client pédagogique) :

1. Le CRM doit soutenir une **relation de conseil humain** renforcée par le digital — pas un pure digital-only.
2. **Données & traçabilité du conseil** sont structurantes (RGPD + devoir de conseil) ; santé / AIPD restent à vérifier.
3. **Sécurité** : comptes, droits, espace client/docs, logs, sauvegarde, réversibilité — sans architecture figée ici.
4. **Accessibilité & sobriété** : références de conception (RGAA/WCAG/RGESN) ; obligation légale **à vérifier** selon le cabinet.
5. **No-code / low-code** : écosystème **candidat** documenté ; gaps connus (RDV, docs, portail) ; **aucun outil choisi**.
6. **IA** : assistance possible en veille ; décisions automatisées sensibles **hors adoption** ; AI Act **use-case dependent**.
7. Ce que le 1.3 **n’a pas** décidé : architecture, stack, budget, organisation, vision finale.

### 18.15 Sources prioritaires finales

Shortlist (registre complet = A/B/C/D) :

| Priorité | IDs | Thème |
|----------|-----|-------|
| Assurance / IDD / ACPR | S27, S28, S55, S56, S57, S58 | Distribution / conseil / marché |
| RGPD / CNIL | S21–S26, S31 | Données |
| Sécurité / ANSSI | S03 + sources B §15 | SSI |
| Accessibilité | S16, S17, **S49b** (Légifrance JO), S49c | RGAA / décret |
| RGESN | S18, S19 | Écoconception |
| AI Act | S60, S61 | Gouvernance IA |
| Éditeurs structurants | S62–S66, S70–S77, S80, S85, S86 | Capacités outils |

### 18.16 Limites / réserves

- Cabinet **fictif** ; pas de terrain utilisateur réel au-delà de 1.1/1.2.
- Pas d’avis juridique ; pas d’audit sécurité ; pas d’audit RGAA ; pas de bilan environnemental.
- Capacités outils = **evidence éditeur** ; plans / configs réels = **TO VERIFY**.
- HTML Légifrance parfois inaccessible (Cloudflare) — ID JO tracé (S49b).
- **Aucun outil sélectionné** ; **aucune architecture décidée** ; **aucun use case IA adopté**.
- Points réglementaires conditionnels restent **TO VERIFY**.
- **1.3 ≠ VALIDATED** ; **1.4 NOT OPENED**.
```

## 9. Diff Git

```
 .../crm-assurance-courtage-operating-doctrine.md   |   8 +-
 .../01-03-veille-technologique-reglementaire.md    | 331 ++++++++++++++++++---
 2 files changed, 296 insertions(+), 43 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index e7161d88..f3304b42 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -171,17 +171,17 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
 | 1.1 | **VALIDATED** |
 | 1.2 | **VALIDATED** |
-| 1.3 | **OPENED** |
+| 1.3 | **OPENED — AWAITING FINAL REVIEW** |
 | 1.3.1 | **REVIEW PASS** |
 | 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
 | 1.3.2-B | **REVIEW PASS — SECURITY & RESILIENCE** |
 | 1.3.2-C | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
-| Étape actuelle | **1.3.2-D Technologie / no-code / IA / marché — AWAITING REVIEW** |
-| 1.3.2-E | **NOT STARTED** |
+| 1.3.2-D | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
+| Étape actuelle | **1.3.2-E Consolidation finale — AWAITING REVIEW** |
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revoir 1.3.2-D avant éventuel GO Morris pour consolidation 1.3.2-E |
+| Prochain objectif | Revue ChatGPT finale du 1.3.2 puis décision Morris séparée sur validation globale du 1.3 et éventuelle ouverture du 1.4 |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
index 513dd1c4..6fe7197c 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
@@ -2,14 +2,14 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut 1.3** | **OPENED — WORKING WATCH** |
+| **Statut 1.3** | **OPENED — AWAITING FINAL REVIEW** |
 | **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
-| **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
+| **1.3.2 Rapport de veille** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
 | **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
 | **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
 | **1.3.2-C** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
-| **1.3.2-D** | **TECHNOLOGY / NO-CODE / AI / MARKET — AWAITING REVIEW** |
-| **1.3.2-E** | **NOT STARTED** |
+| **1.3.2-D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
+| **1.3.2-E** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
 | **1.1** | VALIDATED |
 | **1.2** | VALIDATED (2026-09-28) |
 | **1.4** | **NOT OPENED** |
@@ -36,7 +36,7 @@ La veille technologique et réglementaire vise à identifier, pour le CRM Assura
 **Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.

 Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
-Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A / B / C** (REVIEW PASS) et **1.3.2-D** (AWAITING REVIEW). **1.3.2-E** et **1.4** restent **NON OUVERTS**.
+Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A / B / C** (REVIEW PASS), **1.3.2-D** (REVIEW PASS — réserves résolues dans E) et **1.3.2-E** (FINAL CONSOLIDATION — AWAITING REVIEW). **1.4** reste **NOT OPENED**. Le **1.3** n’est **pas** VALIDATED.

 ---

@@ -785,7 +785,7 @@ Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’

 **Périmètre fonctionnel (1.1 / 1.2) :** interfaces internes (Courtier / Directeur) ; espace client (particulier / TPE-PME) ; formulaires ; contenus ; documents générés ; notifications ; prise de rendez-vous ; dashboard / KPI ; canaux physique / Visio / téléphone / email / espace client.

-**Méthode :** sources N1 ouvertes (RGAA officiel, décret 2019-768 **tel que modifié** — fraîcheur 2026-09-29 : décret n° 2026-816 du 24 août 2026 (alignement EAA / exemptions ; accès HTML Légifrance parfois bloqué — preuve secondaire INSEI + existence JO), EUR-Lex EAA 2019/882, W3C WCAG, RGESN 2024 / Arcep–MiNumEco) ; distinction stricte **obligation juridique** / **référentiel** / **bonne pratique** ; analyse qualitative sans inventer d’écrans ni de scores environnementaux.
+**Méthode :** sources N1 ouvertes (RGAA officiel, décret 2019-768 **tel que modifié** par décret n° **2026-816** du 24 août 2026 — source primaire **Légifrance** `JORFTEXT000054746617` / ELI `…/eli/decret/2026/8/24/2026-816/jo/texte` (S49b ; consultation HTML 2026-09-29 = Cloudflare challenge — existence confirmée via lien officiel INSEI → Légifrance), EUR-Lex EAA 2019/882, W3C WCAG, RGESN 2024 / Arcep–MiNumEco) ; distinction stricte **obligation juridique** / **référentiel** / **bonne pratique** ; analyse qualitative sans inventer d’écrans ni de scores environnementaux.

 **Posture CKC Cadrage :** besoin avant solution ; rendre visibles les inconnues ; ne pas convertir un référentiel en obligation sans preuve ; pas d’écoconception = architecture prématurée.

@@ -989,7 +989,7 @@ GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, question
 | S47 | RGAA obligations | DINUM | Champ d’application — obligations légales | https://accessibilite.numerique.gouv.fr/obligations/champ-application | — | 2026-09-29 | Organismes ; seuil 250 M€ | LEGAL / OFFICIAL | ACTIVE |
 | S48 | RGAA PDF | DINUM | RGAA version 4.1.2 | https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.2.pdf | 4.1.2 | 2026-09-29 | Critères ; WCAG 2.1 ; EN 301 549 | OFFICIAL REFERENCE | ACTIVE |
 | S49 | Décret accessibilité | Légifrance | Décret n° 2019-768 du 24 juillet 2019 (consol. / modifié) | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937 | 2019-07-24 ; mod. 2026-08-24 | 2026-09-29 | Seuil CA ; normes ; fraîcheur 2026 | LEGAL REQUIREMENT | ACTIVE |
-| S49b | Décret accessibilité (modificatif) | JO / INSEI (lien Légifrance) | Décret n° 2026-816 du 24 août 2026 modifiant le 2019-768 | https://www.insei.fr/ressources/decret-ndeg-2026-816-du-24-aout-2026-modifiant-le-decret-ndeg-2019-768-du-24-juillet | 2026-08-24 | 2026-09-29 | Alignement EAA / exemptions ; **ne change pas** TO VERIFY projet | LEGAL / SOURCE FRESHNESS | ACTIVE |
+| S49b | Décret accessibilité (modificatif) | Légifrance (JO) | Décret n° 2026-816 du 24 août 2026 modifiant le 2019-768 | https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054746617 | 2026-08-24 | 2026-09-29 | Source **primaire** JO ; HTML bot-blocked à la consultation — ID JO confirmé via INSEI ; **ne change pas** ACCESSIBILITY LEGAL APPLICABILITY=TO VERIFY | LEGAL / SOURCE FRESHNESS | ACTIVE |
 | S50 | EAA | EUR-Lex | Directive (UE) 2019/882 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2019.151.01.0070.01.ENG | 2019-04-17 | 2026-09-29 | Champ services ; définitions banking / e-commerce | LEGAL REQUIREMENT | ACTIVE |
 | S51 | WCAG | W3C WAI | WCAG 2 Overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 (2023/2024) ; 2.1 ref RGAA | 2026-09-29 | Standard technique | STANDARD / GUIDANCE | ACTIVE |
 | S52 | RGESN hub | MiNumEco / numérique.gouv | RGESN 2024 | https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/ | v2 ; 2024-05-28 | 2026-09-29 | Version ; outils ; REEN | DESIGN / ECO REFERENCE | ACTIVE |
@@ -1018,6 +1018,7 @@ GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, question
 | **Type** | Cadrage — DOC / technology-market research |
 | **Profil** | **Standard** |
 | **Critical** | **NON** — aucune sélection d’outil ; aucune architecture ; aucun use case IA adopté ; aucun budget |
+| **Statut revue D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** (corrections R-D01…R-D07) |
 | **Nature** | **EVIDENCE FOR FUTURE TOOL DECISION** — **pas** TOOL SELECTION / STACK DECISION |

 ### 17.1 Périmètre et méthode
@@ -1033,10 +1034,10 @@ GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, question
 ### 17.2 Synthèse exécutive bornée

 1. **FAIT** — EIOPA (3e rapport IDD, 2026-03-30) : digitalisation distribution **lente** ; ventes en ligne souvent **&lt;10 %** primes dans la plupart des marchés ; produits simples ; GenAI via chatbots/outils de vente en hausse → **IMPACT** : CRM courtier doit soutenir **conseil humain + digital**, pas remplacer → **STATUT** : MARKET PATTERN
-2. **FAIT** — Nombre d’intermédiaires en baisse / consolidation ; passeports UE +12 % (2020–2024) → **IMPACT** : différenciation par relation / outil → **STATUT** : CONTEXT
+2. **FAIT** — Nombre d’intermédiaires en baisse / consolidation ; passeports FoS/FoE **+10 % (2022–2024)** (S56 ; news S55 cite aussi +12 % sur 2020–2024 — période différente) → **IMPACT** : différenciation par relation / outil → **STATUT** : CONTEXT
 3. **OBSERVATION** — Acteurs digitaux FR (comparateurs, assureurs en ligne, insurtech) exposent devis/souscription/espace client/self-service, souvent avec canal humain revendiqué → **IMPACT** : attentes clients sur self-service + contact → **STATUT** : COMPETITIVE OBSERVATION (pas ranking)
 4. **FAIT** — Besoins CRM validés = relation, devis, RDV, documents, espace client, historique, sinistres, KPI — **pas** paiement/API assureur/scoring → **IMPACT** : familles techno à couvrir → **STATUT** : NEED-DRIVEN
-5. **OBSERVATION** — HubSpot = CRM natif documenté (objets, permissions, portail tickets legacy, 2FA/SSO, audit, export, API) ; dépendances **tier** (Enterprise SSO, etc.) → **IMPACT** : fort fit CRM commercial **candidat** → **STATUT** : EVIDENCE — NOT SELECTED
+5. **OBSERVATION** — HubSpot = CRM natif documenté (objets, permissions, portail tickets legacy, 2FA/SSO, audit, export, API) ; dépendances **tier** (SSO **Professional / Enterprise** — S86 ; autres features plan-dependent) → **IMPACT** : fort fit CRM commercial **candidat** → **STATUT** : EVIDENCE — NOT SELECTED
 6. **OBSERVATION** — Airtable / Softr / Bubble / Power Apps = données + apps/portails **construisibles** ; sécurité/rôles souvent **à concevoir** (Privacy Rules Bubble ; Dataverse Power ; groups Softr) → **IMPACT** : flexibilité élevée / complexité maintenabilité → **STATUT** : EVIDENCE — NOT SELECTED
 7. **OBSERVATION** — Make / n8n / Power Automate = orchestration ; Tally = formulaires ; Power BI = reporting — briques **complémentaires**, pas CRM cœur seuls → **IMPACT** : intégrations nécessaires pour RDV/docs/IA → **STATUT** : COMPLEMENTARY CANDIDATES
 8. **FAIT** — Contraintes A/B/C (RGPD, MFA candidate, logs, backup, accessibilité, sobriété, réversibilité) **réutilisables** comme critères d’évaluation outils → **IMPACT** : checklist future Phase 2 → **STATUT** : CRITERIA CARRIED FORWARD
@@ -1051,7 +1052,7 @@ GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, question
 |-------------|--------|--------|-------------------|
 | Digitalisation distribution progresse lentement ; online &lt;10 % GWP dans la plupart des marchés ; produits simples | EIOPA 3rd IDD report / factsheet 2026-03-30 | UE / agrégats NCA | CRM = support omnicanal + conseil, pas pure digital-only |
 | GenAI utilisé via chatbots / sales tools ; IDD ne régule pas exhaustivement ces canaux | EIOPA 2026-03-30 | UE | IA = watch ; human oversight ; pas d’adoption conseil auto |
-| Baisse nombre intermédiaires ; +12 % passeports UE 2020–2024 | EIOPA | UE | Consolidation / différenciation relationnelle |
+| Baisse nombre intermédiaires ; passeports FoS/FoE **+10 % entre 2022 et 2024** | EIOPA S56 | UE | Consolidation / différenciation relationnelle |
 | Canaux de distribution doivent être compatibles marché cible / intérêt client | ACPR Rec. 2024-R-01 | FR | Traçabilité conseil / historique dans le futur CRM |
 | Digitalisation + IA complexifient protection client / fraudes | Pôle commun ACPR-AMF 2025 | FR | Sécurité + clarté parcours (lien B/C) |

@@ -1067,7 +1068,7 @@ GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, question
 | Réassurez-moi | Comparateur / courtage digital | Emprunteur, santé, divers | Simulation + devis + souscription en ligne | Accompagnement experts | — (hors focus) | Interlocuteur humain revendiqué (« pas un robot ») | Comparaison ; experts non commissionnés (revendiqué) |
 | LeLynx.fr | Comparateur (courtier ORIAS) | Particuliers auto/moto/hab/santé/énergie | Formulaire unique ; redirection souscription partenaire | — | — | Service comparaison | Panel partenaires ; gratuit / impartial (revendiqué) |
 | Lovys | Insurtech / abonnement multi-produits | Particuliers | Souscription en ligne ~2 min ; signature en ligne | Espace personnel / attestations | Réactivité sinistre (avis) | Mail, chatbot, téléphone | 100 % en ligne + humain ; mensualité unique |
-| Alan | Assurtech santé (emploi/entreprises + particuliers selon pages) | Santé collective / digitale | Parcours digital (site) | App / self-service typique insurtech | — | Support digital | Santé digitale (pattern) — détail produit TO VERIFY hors brief |
+| Alan | Assurtech / assureur santé digital (S87) | Entreprises (TPE→grands comptes) + TNS/indépendants ; offres particuliers (retraités / TNS ; fonction publique « très bientôt ») revendiquées sur alan.com | Devis en ligne (« Mon devis en 2 min ») | Expérience digitale / app (pattern insurtech) | — | Support digital revendiqué | Différenciation santé digitale + self-service — **pas** un modèle à copier |

 **Patterns utiles au cadrage :** self-service devis ; espace documents ; multicanal humain+digital ; comparaison vs relation de conseil personnalisé (opportunité différenciante du cabinet).

@@ -1124,12 +1125,12 @@ Légende : **S**=SUPPORTED ; **P**=PARTIAL ; **NN**=NOT NATIVE ; **TV**=TO VERIF

 | Outil | Rôle candidat | CRM natif | Données | Portail / externe | Formulaires | Automatisation | Documents | Reporting | API / intégrations | Rôles / sécurité | Audit / logs | Export / réversib. | Accessibilité doc. | IA doc. | Dépendances / limites | Preuve |
 |-------|---------------|-----------|---------|-------------------|-------------|----------------|-----------|-----------|--------------------|------------------|--------------|--------------------|--------------------|---------|-----------------------|--------|
-| HubSpot | CRM spécialisé | **S** | **S** | **P** (Customer Portal tickets / memberships) | **S** | **S** (workflows) | **P** (Documents tool / fichiers) | **S** | **S** (API 2026-09) | **S** (permissions, teams, 2FA, SSO Enterprise) | **S** (audit logs ; tier) | **S** (export ; GDPR delete) | **TV** | **P**/TV (features AI produit) | Tier / hub / Enterprise SSO | Trust+KB |
-| Airtable | Données / interfaces | **P** | **S** | **P** (Interfaces / Portals — plans) | **S** | **S** (Automations) | **P** (attachments) | **P** | **S** (API) | **P**/S (permissions interfaces ; SSO Biz/Ent) | **S** Enterprise Scale audit API | **P**/S (CSV/API) | **TV** | **P** (AI events in audit) | Enterprise pour audit avancé | Support+API |
-| Bubble | App full-stack no-code | **NN** (à construire) | **S** | **S** (app users) | **S** (à construire) | **S** (workflows) | **P** (à concevoir) | **P** | **S** (Data/Workflow API) | **P** (Privacy Rules ; 2FA possible) | **P**/TV | **P**/TV | **TV** | **TV** | Sécurité **responsabilité partagée** builder | Manual security |
-| Softr | Portail / frontend | **NN** | **P** (Softr DB / sources) | **S** (client portal pattern) | **S** | **P** (workflows) | **P** | **P** | **P**/S (API/intégrations) | **S** (user groups ; 2FA password+OTP ; SSO Enterprise) | **TV** | **TV** | **TV** | **P** (AI-native claims marketing docs) | Tier Enterprise SSO | Docs Softr |
-| Power Apps | App low-code | **P** (model-driven / canvas) | **S** (Dataverse) | **P** (Power Pages lié écosystème) | **S** | **S** (via Automate) | **P** | **P** (via BI) | **S** (connectors) | **S** (Entra ID + Dataverse roles) | **P**/S (platform) | **P**/S | **P**/TV (platform guidance) | **P** (Copilot) | Licences Power Platform / Dataverse | MS Learn |
-| Make | Automatisation | **NN** | **NN** | **NN** | **NN** | **S** | **P** (via modules) | **NN** | **S** | **TV** (compte Make) | **TV** | **TV** | **OOS** | **P**/TV | Orchestrateur seulement | Make help (accès parfois limité) |
+| HubSpot | CRM spécialisé | **S** | **S** | **P** (Customer Portal tickets / memberships) **S65** | **S** | **S** (workflows) | **P** (Documents tool / fichiers) | **S** | **S** (API) **S66** | **S** (permissions **S63** ; 2FA **S62** ; SSO **Pro/Ent S86**) | **S** (audit logs **S64** ; tier) | **S** (export ; GDPR delete **S62**) | **TV** | **P**/TV (features AI produit) | Tier / hub ; SSO = Professional **ou** Enterprise | S62–S66, S86 |
+| Airtable | Données / interfaces | **P** | **S** | **P** (Interfaces / Portals — plans) **S68** | **S** **S67** | **S** (Automations) | **P** (attachments) | **P** | **S** (API) | **P**/S (permissions ; SSO Biz/Ent) **S68** | **S** Enterprise Scale audit **S69** | **P**/S (CSV/API) | **TV** | **P** (AI events in audit) | Enterprise pour audit avancé | S67–S69 |
+| Bubble | App full-stack no-code | **NN** (à construire) | **S** | **S** (app users) | **S** (à construire) | **S** (workflows) | **P** (à concevoir) | **P** | **S** (Data/Workflow API) **S71** | **P** (Privacy Rules ; 2FA possible) **S70** | **P**/TV | **P**/TV | **TV** | **TV** | Sécurité **responsabilité partagée** builder | S70–S71 |
+| Softr | Portail / frontend | **NN** | **P** (Softr DB / sources) | **S** (client portal pattern) | **S** | **P** (workflows) | **P** | **P** | **P**/S (API/intégrations) | **S** (user groups **S73** ; 2FA **S72** ; SSO Enterprise **S74**) | **TV** | **TV** | **TV** | **P** (AI claims marketing) | Tier Enterprise SSO | S72–S74 |
+| Power Apps | App low-code | **P** (model-driven / canvas) **S75** | **S** (Dataverse) | **P** (Power Pages lié écosystème) | **S** | **S** (via Automate **S77**) | **P** | **P** (via BI) | **S** (connectors) | **S** (Entra ID + Dataverse roles **S76**) | **P**/S (platform) | **P**/S | **P**/TV (platform guidance) | **P** (Copilot) | Licences Power Platform / Dataverse | S75–S77 |
+| Make | Automatisation | **NN** | **NN** | **NN** | **NN** | **S** (scenarios **S85**) | **P**/TV (modules — détail TV) | **NN** | **S**/P (connections **S85**) | **TV** | **TV** | **TV** | **OOS** | **TV** | Orchestrateur seulement ; sécu/IA = **TV** | S85 |
 | n8n | Automatisation | **NN** | **NN** | **NN** | **NN** | **S** | **P** | **NN** | **S** | **P**/TV (self-host vs cloud) | **P**/TV | **P**/TV | **OOS** | **P** (AI features docs) | Self-host = ops | docs.n8n.io |
 | Power Automate | Automatisation M365 | **NN** | **P** | **NN** | **P** | **S** | **P** | **P** | **S** | **S** (Entra / env) | **P** | **P** | **OOS**/TV | **P** (Copilot) | Environnements / licences | MS Learn |
 | Tally | Formulaires | **NN** | **NN** | **NN** | **S** | **P** (webhooks / Make/n8n/Zapier) | **P** (PDF guides) | **P** (insights) | **P**/S (API/webhooks) | **TV** | **TV** | **P** (retention Pro+) | **TV** | **P** (ChatGPT integ.) | Free vs Pro/Business | help.tally.so |
@@ -1187,14 +1188,14 @@ Aucun use case **ADOPTED**.

 | Élément | État vérifié 2026-09-29 | Source |
 |---------|-------------------------|--------|
-| Règlement | (UE) 2024/1689 AI Act | EUR-Lex / Commission |
-| Omnibus | (UE) 2026/1744 en vigueur 2026-07-27 | Commission / EUR-Lex |
-| Interdictions / literacy | depuis 2025-02-02 | Commission |
-| GPAI | depuis 2025-08-02 | Commission |
-| Applicabilité générale | 2026-08-02 | Commission |
-| High-risk Annex III | **2027-12-02** (après Omnibus) | Commission |
-| High-risk Annex I produits | **2028-08-02** | Commission |
-| Transparence (chatbots, etc.) | règles transparence → 2026-08 | Commission |
+| Règlement | (UE) 2024/1689 AI Act | S60 / S61 |
+| Omnibus | (UE) 2026/1744 en vigueur **2026-07-27** | S60 |
+| Interdictions (1–8) / AI literacy | depuis **2025-02-02** | S60 |
+| GPAI + gouvernance GPAI | depuis **2025-08-02** | S60 |
+| Début régime général / enforcement AI Office & autorités | **2026-08-02** — **ne signifie pas** que toutes les obligations high-risk s’appliquent déjà | S60 |
+| Transparence (chatbots, labelling, etc.) | règles de transparence → **août 2026** | S60 |
+| High-risk **Annex III** (cas d’usage sensibles) | **2027-12-02** (après Omnibus) | S60 |
+| High-risk **Annex I** (produits réglementés) | **2028-08-02** | S60 |

 ### AI ACT PROJECT APPLICABILITY = TO VERIFY / USE-CASE DEPENDENT

@@ -1275,8 +1276,8 @@ Réutilise checklists **B §15.10** et **C §16.10**.

 | ID | Thème | Organisme / éditeur | Titre | URL | Date | Consultation | Claim | Nature | Statut |
 |----|-------|---------------------|-------|-----|------|--------------|-------|--------|--------|
-| S55 | Marché IDD | EIOPA | 3rd Report application IDD (news) | https://www.eiopa.europa.eu/eiopa-publishes-third-report-application-insurance-distribution-directive-2026-03-30_en | 2026-03-30 | 2026-09-29 | Digitalisation lente ; GenAI ; passeports +12 % | N1 | ACTIVE |
-| S56 | Marché IDD | EIOPA | Structure EU insurance distribution market | https://www.eiopa.europa.eu/structure-eu-insurance-distribution-market_en | 2026-03 | 2026-09-29 | Online sales charts ; intermediaries | N1 | ACTIVE |
+| S55 | Marché IDD | EIOPA | 3rd Report application IDD (news) | https://www.eiopa.europa.eu/eiopa-publishes-third-report-application-insurance-distribution-directive-2026-03-30_en | 2026-03-30 | 2026-09-29 | Digitalisation lente ; GenAI ; passeports **+12 % 2020–2024** (période news) | N1 | ACTIVE |
+| S56 | Marché IDD | EIOPA | Structure EU insurance distribution market | https://www.eiopa.europa.eu/structure-eu-insurance-distribution-market_en | 2026-03 | 2026-09-29 | Online sales ; intermediaries ; passeports FoS/FoE **+10 % 2022–2024** | N1 | ACTIVE |
 | S57 | Marché IDD | EIOPA | Factsheet Insurance distribution 2024/25 | https://www.eiopa.europa.eu/document/download/1957cba8-284b-4621-a034-4592b59b2f39_en?filename=2026-03-30+-+Factsheet+-+3d+IDD+application+report.pdf | 2026-03-30 | 2026-09-29 | Online &lt;10 % ; GenAI | N1 | ACTIVE |
 | S58 | Distribution FR | ACPR | Rec. 2024-R-01 IDD | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/recommandation-2024-r-01-du-28-juin-2024-sur-la-mise-en-oeuvre-de-certaines-dispositions-issues-de | 2024-06-28 | 2026-09-29 | Canaux / marché cible | N1 | ACTIVE |
 | S59 | Protection client | ACPR-AMF | Rapport pôle commun 2025 | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-du-pole-commun-acpr-amf-2025 | 2025 / MAJ 2026-06 | 2026-09-29 | Digitalisation + IA | N1 | ACTIVE |
@@ -1305,6 +1306,10 @@ Réutilise checklists **B §15.10** et **C §16.10**.
 | S82 | Concurrent | Réassurez-moi | Site officiel | https://reassurez-moi.fr/ | — | 2026-09-29 | Comparateur + experts | Public | ACTIVE |
 | S83 | Concurrent | LeLynx | Site officiel | https://www.lelynx.fr/ | — | 2026-09-29 | Comparateur ORIAS | Public | ACTIVE |
 | S84 | Concurrent | Lovys | Site officiel | https://www.lovys.com/fr | — | 2026-09-29 | Insurtech self-service + humain | Public | ACTIVE |
+| S85 | Make automation | Make | Help Center — Get started | https://help.make.com/get-started | MAJ 2026-06-15 | 2026-09-29 | Scenarios / first automation (capacité orchestration) | Éditeur | ACTIVE |
+| S86 | HubSpot SSO | HubSpot | Set up single sign-on (SSO) | https://knowledge.hubspot.com/account-security/set-up-single-sign-on-sso | MAJ 2026-08-05 | 2026-09-29 | SSO disponible **Professional et Enterprise** (tous hubs listés) | Éditeur | ACTIVE |
+| S87 | Concurrentiel | Alan | Site officiel alan.com | https://alan.com/ | — | 2026-09-29 | Cibles entreprises/TNS ; devis digital ; particuliers revendiqués | Éditeur / marché | ACTIVE |
+| S49c | Décret accessibilité (secondaire) | INSEI | Page ressource décret 2026-816 + lien Légifrance | https://www.insei.fr/ressources/decret-ndeg-2026-816-du-24-aout-2026-modifiant-le-decret-ndeg-2019-768-du-24-juillet | 2026-08-28 | 2026-09-29 | Découverte / confirmation lien JO `JORFTEXT000054746617` | SECONDARY | ACTIVE |

 ### 17.18 Limites / réserves

@@ -1312,26 +1317,274 @@ Réutilise checklists **B §15.10** et **C §16.10**.
 - Architecture / Stack = **NOT DECIDED**.
 - Capacités = documentées éditeur ; configuration réelle / plans = **TO VERIFY** en Phase 2.
 - Pas de certificat RGPD / RGAA / RGESN / AI Act pour un outil.
-- Make.com help parfois inaccessible (bot protection) — capacités Make = **TV** sur détails sécu.
-- Légifrance HTML parfois bloqué ; fraîcheur décret 2026-816 tracée via INSEI + JO.
-- Aucun use case IA adopté ; 1.3.2-E / 1.4 **non ouverts**.
+- Make : orchestration sourcée **S85** ; détails sécu / IA Make restent **TV**.
+- Légifrance HTML Cloudflare-challenged à la consultation ; source primaire **S49b** (`JORFTEXT000054746617`) + secondaire **S49c**.
+- Aucun use case IA adopté ; **1.4 NOT OPENED**.


-## 13. Synthèse 1.3 (état courant)
+## 13. Synthèse 1.3 — état de consolidation

 | Point | État |
 |-------|------|
-| **1.3** | OPENED — WORKING WATCH |
+| **1.3** | **OPENED — AWAITING FINAL REVIEW** |
 | **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
-| **1.3.2** | IN PROGRESS |
+| **1.3.2** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
 | **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
 | **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
 | **1.3.2-C** | **REVIEW PASS — ACCESSIBILITY & RESPONSIBLE DIGITAL** |
-| **1.3.2-D** | **TECHNOLOGY / NO-CODE / AI / MARKET — AWAITING REVIEW** |
-| **1.3.2-E** | NOT STARTED |
-| Architecture | NOT DECIDED |
-| Stack | NOT DECIDED |
-| **1.4** | NOT OPENED |
+| **1.3.2-D** | **REVIEW PASS — RESERVES RESOLVED IN 1.3.2-E** |
+| **1.3.2-E** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
+| Architecture | **NOT DECIDED** |
+| Stack | **NOT DECIDED** / CANDIDATE TOOL ECOSYSTEM ONLY |
+| **1.4** | **NOT OPENED** |
 | Miro / Notion | NOT MODIFIED |

-Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-D **n’est pas** une sélection de stack, une architecture, ni une adoption d’IA.
+La **synthèse exécutive finale** et les impacts à transmettre sont en **§18**. Les deep-dives A–D restent les preuves détaillées.
+
+Le 1.3 **n’est pas** VALIDATED. Aucune stack, architecture ni use case IA n’est adopté.
+
+
+## 18. 1.3.2-E — Consolidation finale du rapport de veille
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | **FINAL CONSOLIDATION — AWAITING REVIEW** |
+| **Date** | 2026-09-29 |
+| **Profil** | **Standard** — DOC / final watch consolidation |
+| **Critical** | **NON** |
+| **Nature** | Synthèse / transmission — **pas** sélection d’outil, **pas** architecture, **pas** validation du 1.3 |
+
+### 18.1 Objet et méthode de consolidation
+
+**Objet :** répondre à « qu’avons-nous appris de suffisamment solide pour orienter la suite du CRM Assurance Courtage, sans encore choisir sa solution ? »
+
+**Méthode :**
+1. **1.3.1** a établi le système de veille (axes, registre, méthode).
+2. **A / B / C / D** ont produit les recherches bornées (preuves détaillées conservées en §14–§17).
+3. **E** consolide, corrige les réserves D (R-D01…R-D07), élimine contradictions / formulations obsolètes, et produit une couche de **transmission** vers conception / budget / organisation futurs.
+4. Aucune architecture cible ; aucune stack ; aucun use case IA **ADOPTED**.
+
+**Niveaux de preuve utilisés :**
+
+| Statut | Signification |
+|--------|---------------|
+| **CONFIRMED** | Fait sourcé, non contesté dans le périmètre documentaire |
+| **LIKELY** | Exigence / contrainte probable pour le projet, sous réserve de paramètres cabinet |
+| **TO VERIFY** | Inconnue projet ou applicabilité conditionnelle |
+| **DESIGN REFERENCE** | Référentiel de conception (non = obligation juridique prouvée) |
+| **FUTURE DECISION INPUT** | Élément utile à une décision ultérieure (Morris / groupe) |
+| **WATCH** | Sujet à suivre ; pas d’adoption |
+
+### 18.2 Synthèse exécutive finale
+
+1. **FAIT** — Digitalisation de la distribution d’assurance **lente** ; ventes en ligne souvent faibles (agrégats EIOPA) → **IMPACT CRM** : soutenir omnicanal + conseil, pas un modèle digital-only → **STATUT** : CONFIRMED (marché) / FUTURE DECISION INPUT
+2. **FAIT** — Intermédiaires en consolidation ; passeports FoS/FoE **+10 % (2022–2024)** (S56) → **IMPACT** : différenciation relationnelle / outillage → **STATUT** : CONFIRMED (contexte)
+3. **CONSTAT** — Acteurs digitaux exposent devis / self-service / espace client, souvent avec canal humain revendiqué → **IMPACT** : attentes clients sur self-service **borné** + contact humain → **STATUT** : COMPETITIVE OBSERVATION (pas ranking)
+4. **LIKELY** — IDD / ACPR : devoir d’information, conseil adapté, traçabilité du conseil → **IMPACT** : historique / preuves / formalisation dans le CRM → **STATUT** : PROJECT CONSTRAINT
+5. **TO VERIFY** — Traitement de **données de santé** et **AIPD** → **IMPACT** : régime éventuellement renforcé si confirmé → **STATUT** : LEGAL TO VERIFY (`HEALTH DATA` / `AIPD`)
+6. **LIKELY** — RGPD : finalité, minimisation, conservation, droits, privacy by design, sous-traitants → **IMPACT** : critères de conception + DPA futurs → **STATUT** : PROJECT CONSTRAINT
+7. **LIKELY** — Sécurité appropriée : auth, MFA **candidate**, rôles, logs, backup/restauration, réversibilité fournisseur → **IMPACT** : contraintes SSI de conception (sans architecture SSI) → **STATUT** : SECURITY CONSTRAINT ; **DORA = TO VERIFY**
+8. **TO VERIFY** — Applicabilité juridique accessibilité (seuil CA / statut) → **IMPACT** : ne pas écrire « RGAA REQUIRED » sans preuve → **STATUT** : `ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY`
+9. **DESIGN REFERENCE** — RGAA / WCAG / inclusion multicanal ; RGESN pour sobriété → **IMPACT** : interfaces, docs, poids, features inutiles → **STATUT** : DESIGN REFERENCE (pas certification)
+10. **FAIT** — Panel no-code/low-code = **CANDIDATE ONLY** ; capacités documentées avec gaps (RDV, docs accessibles, portail dossier…) → **IMPACT** : future évaluation outillée, pas sélection ici → **STATUT** : FUTURE DECISION INPUT
+11. **WATCH** — IA assistance (AI-D01…D08) ; cas sensibles (reco auto, scoring, underwriting…) = HIGH-SENSITIVITY → **IMPACT** : human oversight ; pas d’adoption → **STATUT** : RESEARCH CANDIDATE / WATCH ; `AI ACT = TO VERIFY / USE-CASE DEPENDENT`
+12. **LIKELY** — Export / réversibilité / dépendance licences (SSO Pro/Ent, audit Enterprise…) → **IMPACT** : critères 1.5 / Phase 2 → **STATUT** : TOOL EVALUATION INPUT
+13. **LIMITE** — **Architecture = NOT DECIDED** ; **Stack = NOT DECIDED** ; **1.3 ≠ VALIDATED** ; **1.4 NOT OPENED**
+
+### 18.3 Enseignements marché / relation client
+
+| Enseignement | Source | Implication |
+|--------------|--------|-------------|
+| Digitalisation distribution progressive mais limitée | S55–S57 | CRM = soutien omnicanal |
+| GenAI via chatbots / sales tools en hausse ; IDD incomplet sur ces canaux | S55 | IA = watch ; oversight humain |
+| Passeports FoS/FoE **+10 % 2022–2024** (corr. R-D01 ; S56) | S56 | Contexte consolidation / mobilité |
+| Self-service devis + espace client = patterns visibles | Scan §17.4 + S81–S84 + S87 | Différenciation cabinet = proximité / conseil personnalisé / transparence |
+| Canaux compatibles marché cible / intérêt client | S58 | Traçabilité conseil |
+
+**Pas** de « meilleur concurrent » ni de modèle à cloner.
+
+### 18.4 Contraintes réglementaires & données
+
+Consolide A (détail §14) :
+
+| Thème | Statut consolidé |
+|-------|------------------|
+| Exigences / besoins client ; conseil / recommandation ; traçabilité | LIKELY — PROJECT CONSTRAINT |
+| Finalité ; minimisation ; conservation ; droits ; privacy by design | LIKELY |
+| Sous-traitants / DPA | LIKELY si SaaS — FUTURE DECISION INPUT |
+| Sécurité appropriée (art. 32) | LIKELY — lien B |
+| **HEALTH DATA PROCESSING** | **TO VERIFY** |
+| **AIPD** | **TO VERIFY** |
+| Bases légales détaillées | **TO VERIFY** |
+
+**Pas** un avis juridique.
+
+### 18.5 Contraintes sécurité & résilience
+
+Consolide B (détail §15) comme **contraintes de conception futures** :
+
+- authentification ; MFA **candidate** (selon risque / population) ;
+- habilitations / moindre privilège ;
+- espace client & documents (séparation, droits, traçabilité) ;
+- logs / incidents ; sauvegarde / restauration ;
+- critères fournisseurs SaaS ; export / réversibilité.
+
+**DORA APPLICABILITY = TO VERIFY.**
+
+**SECURITY SCENARIOS ARE NOT A MEASURED RISK REGISTER** — les scénarios R-Bxx / formulations d’impact potentiel du deep-dive B **ne constituent pas** une cotation de risque acceptée ni un registre de risques mesuré.
+
+**Pas** d’architecture SSI.
+
+### 18.6 Accessibilité & numérique responsable
+
+| Couche | Contenu | Statut |
+|--------|---------|--------|
+| **A. Obligations juridiques potentielles** | Art. 47 loi 2005-102 ; décret 2019-768 **modifié** par **2026-816** (S49b) ; seuil CA privé | `ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY` |
+| **B. Références de conception** | **RGAA** = ACCESSIBILITY DESIGN REFERENCE ; **WCAG** = STANDARD / GUIDANCE | DESIGN REFERENCE |
+| **C. Bonnes pratiques** | Clavier, focus, formulaires, contraste, docs, auth accessible, sobriété, limiter tiers | DESIGN REFERENCE |
+| Écoconception | **RGESN** = DESIGN / ECO-CONCEPTION REFERENCE | DESIGN REFERENCE |
+
+**Ne pas écrire** RGAA REQUIRED / RGESN REQUIRED sans preuve projet.
+
+### 18.7 Technologie / no-code / IA
+
+Le panel doctrine reste **CANDIDATE TOOL ECOSYSTEM ONLY** (détail matrice §17.8).
+
+**Familles (pas un concours) :**
+
+| Famille | Candidats (exemples panel) | Enseignement principal |
+|---------|----------------------------|------------------------|
+| A. CRM spécialisés | HubSpot | CRM natif documenté ; SSO **Professional/Enterprise** (S86) — **NOT SELECTED** |
+| B. App / data no-code-low-code | Airtable, Bubble, Power Apps | Flexibilité élevée ; sécurité souvent à concevoir |
+| C. Portails | Softr (+ patterns HubSpot/Bubble/Power Pages) | Portail possible ; « dossier assurance » souvent à composer |
+| D. Automatisation | Make (S85), n8n, Power Automate | Orchestration ; pas CRM cœur |
+| E. Formulaires | Tally (+ forms natifs) | Collecte + consentement |
+| F. BI | Power BI (+ reporting CRM) | KPI ; sobriété dashboards |
+| G. Périphériques | Voiceflow, Postman, Notion, Figma, Miro | Hors cœur CRM ; Shopify **OOS** |
+| H. IA / assistants | Features éditeurs + AI-D01…D08 | Assistance ≠ décision ; **aucun ADOPTED** |
+
+**AI Act (corr. R-D02) :** régime progressif — 2026-08-02 = début enforcement / majorité du régime général **concerné**, **sans** assimiler high-risk Annex III (2027-12-02) ni Annex I (2028-08-02). Transparence → août 2026. **`AI ACT PROJECT APPLICABILITY = TO VERIFY / USE-CASE DEPENDENT`.**
+
+Cas sensibles (reco auto, scoring, underwriting, fraude auto…) : **HIGH-SENSITIVITY / REGULATORY REVIEW REQUIRED** — non conçus.
+
+### 18.8 Impacts concrets pour le CRM
+
+| ID | Enseignement | Origine | Impact CRM | Nature | Étape future | Statut |
+|----|--------------|---------|------------|--------|--------------|--------|
+| I-E01 | Omnicanal + conseil humain | D+marché | Ne pas concevoir digital-only | OPPORTUNITY / DESIGN REFERENCE | Conception ; UX | OPEN |
+| I-E02 | Traçabilité conseil / historique | A | Preuves, historique échanges/contrats | PROJECT CONSTRAINT | Conception ; delivery | OPEN |
+| I-E03 | Minimisation / finalité / droits | A | Modèle de données & UX droits | PROJECT CONSTRAINT | Architecture ; UX | OPEN — model NOT DECIDED |
+| I-E04 | HEALTH DATA / AIPD | A | Régime potentiellement renforcé | LEGAL TO VERIFY | Conformité | TO VERIFY |
+| I-E05 | Auth / MFA candidate / rôles | B | Comptes séparés ; moindre privilège | SECURITY CONSTRAINT | Architecture ; RSSI | OPEN |
+| I-E06 | Espace client & docs sécurisés | B+C | Séparation, droits, accessibilité | SECURITY + DESIGN | Conception ; UX | OPEN |
+| I-E07 | Logs / backup / incidents | B | Exigences RUN futures | SECURITY CONSTRAINT | Architecture ; RUN | OPEN |
+| I-E08 | DORA | B | Applicabilité cabinet | LEGAL TO VERIFY | Conformité | TO VERIFY |
+| I-E09 | Accessibilité juridique | C | Déclaration / conformité si champ | LEGAL TO VERIFY | Morris / conformité | TO VERIFY |
+| I-E10 | RGAA/WCAG comme références | C | Critères UI / docs / auth | DESIGN REFERENCE | UX ; QA | OPEN |
+| I-E11 | RGESN / sobriété | C | Scope minimal ; limiter IA/tiers | DESIGN REFERENCE | Conception | OPEN |
+| I-E12 | Panel no-code = candidats | D | Évaluer sans sélection précoce | TOOL EVALUATION INPUT | Phase 2 / Morris | OPEN |
+| I-E13 | Gaps RDV / docs / portail dossier | D | Discovery éventuelle hors panel | TOOL EVALUATION INPUT | Discovery | OPEN |
+| I-E14 | SSO / audit souvent tier-dependent | D | Input budget licences | TOOL EVALUATION INPUT | 1.5 | OPEN |
+| I-E15 | Réversibilité / export | A+B+D | Critère sélection obligatoire | PROJECT CONSTRAINT | Stack futur | OPEN |
+| I-E16 | IA assistance vs décision | D+AI Act | Human oversight ; pas auto-conseil | WATCH | IA ; Morris | OPEN — not adopted |
+| I-E17 | Multicanal inclusion | C+D | Téléphone / physique / Visio | DESIGN REFERENCE | Conception | OPEN |
+| I-E18 | Self-service borné | Marché+D | Espace client utile sans remplacer conseil | OPPORTUNITY | Conception | OPEN |
+
+### 18.9 Contraintes à transmettre aux prochaines étapes
+
+| Catégorie | Acquis (veille) | Reste à décider | Gate futur |
+|-----------|-----------------|-----------------|------------|
+| **DATA** | Principes RGPD / conservation guidance CNIL | Bases légales ; HEALTH DATA ; AIPD ; rétention fine | Conformité ; architecture |
+| **SECURITY** | Familles de contrôles candidates | MFA scope ; IdP ; RPO/RTO ; SIEM | RSSI ; architecture |
+| **ACCESSIBILITY** | Références RGAA/WCAG | Applicabilité légale ; VPAT finalistes | UX ; QA ; Morris |
+| **RESPONSIBLE DIGITAL** | RGESN = référence | Scope features / poids / tiers | Conception |
+| **FUNCTIONAL** | Besoins 1.1/1.2 inchangés | Portail / RDV / docs générés | Architecture ; discovery |
+| **TOOL SELECTION** | Matrice evidence + 17 critères | Pondération ; shortlist ; choix | Morris / groupe ; Phase 2 |
+| **AI GOVERNANCE** | Calendrier AI Act ; cas WATCH | Use case ; classification | Morris ; conformité IA |
+| **OPERATIONS** | Besoin backup / incidents / réversibilité | Process RUN | Delivery ; RUN |
+
+### 18.10 Opportunités à préserver
+
+| Opportunité | Statut |
+|-------------|--------|
+| Relation **humain + digital** (différenciation vs pure digital) | OPPORTUNITY / FUTURE DECISION INPUT |
+| Multicanal (physique, Visio, tel, email, espace client) | OPPORTUNITY |
+| Centralisation historique / documents | OPPORTUNITY |
+| Self-service **borné** (docs, devis, suivi) | OPPORTUNITY |
+| Réduction tâches admin via automatisation **assistive** | OPPORTUNITY |
+| IA comme **assistance** (pas décision) | OPPORTUNITY / WATCH |
+| Sobriété fonctionnelle (RGESN) | OPPORTUNITY |
+| Approche modulaire no-code / briques complémentaires | OPPORTUNITY / FUTURE DECISION INPUT |
+
+### 18.11 Points de vigilance / TO VERIFY
+
+| Question | Pourquoi ça compte | Moment pour trancher |
+|----------|--------------------|----------------------|
+| Taille / CA / bilan / statut juridique cabinet | Accessibilité légale ; DORA ; proportionnalité | Avant conformité / Morris |
+| DORA applicability | Obligations résilience éventuelles | Conformité / RSSI |
+| Accessibilité juridique + EAA e-commerce | Obligations / déclaration | Conformité ; UX |
+| HEALTH DATA ; AIPD ; bases légales | Régime données | Avant modèle de données |
+| Sous-traitants / DPA / localisation / transferts | RGPD art. 28 | Avant choix stack |
+| RPO / RTO | Résilience | Architecture / RUN |
+| Niveau licence sécurité (SSO, audit…) | Budget / faisabilité | 1.5 + stack |
+| Accessibilité réelle plateformes finalistes | Inclusion | QA / UX |
+| Outil RDV ; générateur documentaire accessible | Gaps panel | Discovery / Phase 2 |
+| Use case IA + classification AI Act | Risque / conformité | Morris / IA |
+| Pondération des 17 critères outils | Décision stack | Morris / groupe |
+| Budget global | Viabilité | 1.5 |
+
+### 18.12 Future Tool Evaluation Framework
+
+Les **17 dimensions** de §17.14 restent le cadre (reformulées pour lisibilité) :
+
+1. Couverture fonctionnelle — 2. Simplicité opérationnelle — 3. Maintenabilité / gouvernance — 4. Sécurité — 5. Confidentialité / RGPD — 6. Droits / rôles — 7. Portail externe — 8. Automatisation — 9. Intégration / API — 10. Reporting — 11. Documents — 12. Accessibilité — 13. Numérique responsable — 14. Export / réversibilité — 15. IA (contrôles / oversight) — 16. Dépendances licences / tiers — 17. Capacité d’évolution.
+
+**Aucun poids. Aucun score. Aucun ranking.**
+
+**DECISION OWNER = MORRIS / WORKING GROUP** (pondération et choix futurs — **non décidés ici**).
+
+### 18.13 Inputs pour organisation / budget / vision
+
+| Étape future | Input issu du 1.3 | Ce que le 1.3 **ne** décide **pas** |
+|--------------|-------------------|-------------------------------------|
+| **1.4 Organisation** | Compétences / responsabilités à prévoir (données, sécurité, accessibilité, outils, IA governance) | Organigramme ; RACI final ; staffing |
+| **1.5 Budget** | Impacts licence / tiers / niveaux Professional–Enterprise potentiels ; COST/LICENSING = FUTURE BUDGET INPUT | Budget chiffré ; arbitrage financier |
+| **1.6 Vision** | Contraintes + opportunités + critères d’évaluation | Vision finale / pitch produit |
+
+**1.4 = NOT OPENED.** Aucune mutation des documents 1.4 / 1.5 / 1.6 dans ce cycle.
+
+### 18.14 Points clés pour le rapport et la soutenance
+
+Messages réutilisables (groupe / jury / client pédagogique) :
+
+1. Le CRM doit soutenir une **relation de conseil humain** renforcée par le digital — pas un pure digital-only.
+2. **Données & traçabilité du conseil** sont structurantes (RGPD + devoir de conseil) ; santé / AIPD restent à vérifier.
+3. **Sécurité** : comptes, droits, espace client/docs, logs, sauvegarde, réversibilité — sans architecture figée ici.
+4. **Accessibilité & sobriété** : références de conception (RGAA/WCAG/RGESN) ; obligation légale **à vérifier** selon le cabinet.
+5. **No-code / low-code** : écosystème **candidat** documenté ; gaps connus (RDV, docs, portail) ; **aucun outil choisi**.
+6. **IA** : assistance possible en veille ; décisions automatisées sensibles **hors adoption** ; AI Act **use-case dependent**.
+7. Ce que le 1.3 **n’a pas** décidé : architecture, stack, budget, organisation, vision finale.
+
+### 18.15 Sources prioritaires finales
+
+Shortlist (registre complet = A/B/C/D) :
+
+| Priorité | IDs | Thème |
+|----------|-----|-------|
+| Assurance / IDD / ACPR | S27, S28, S55, S56, S57, S58 | Distribution / conseil / marché |
+| RGPD / CNIL | S21–S26, S31 | Données |
+| Sécurité / ANSSI | S03 + sources B §15 | SSI |
+| Accessibilité | S16, S17, **S49b** (Légifrance JO), S49c | RGAA / décret |
+| RGESN | S18, S19 | Écoconception |
+| AI Act | S60, S61 | Gouvernance IA |
+| Éditeurs structurants | S62–S66, S70–S77, S80, S85, S86 | Capacités outils |
+
+### 18.16 Limites / réserves
+
+- Cabinet **fictif** ; pas de terrain utilisateur réel au-delà de 1.1/1.2.
+- Pas d’avis juridique ; pas d’audit sécurité ; pas d’audit RGAA ; pas de bilan environnemental.
+- Capacités outils = **evidence éditeur** ; plans / configs réels = **TO VERIFY**.
+- HTML Légifrance parfois inaccessible (Cloudflare) — ID JO tracé (S49b).
+- **Aucun outil sélectionné** ; **aucune architecture décidée** ; **aucun use case IA adopté**.
+- Points réglementaires conditionnels restent **TO VERIFY**.
+- **1.3 ≠ VALIDATED** ; **1.4 NOT OPENED**.

```

## 10. Validations

| Check | Résultat |
|-------|----------|
| Git Truth | PASS |
| R-D01…R-D07 | PASS (R-D06 HTML corps Légifrance = réserve technique tracée) |
| E synthèse | PASS |
| EIOPA +10 % 2022–2024 | PASS |
| AI Act calendrier | PASS |
| HubSpot SSO Pro/Ent | PASS |
| Alan S87 | PASS |
| Make S85 | PASS |
| Décret S49b Légifrance ID | PASS |
| Matrix provenance IDs | PASS |
| Aucun ranking / sélection | PASS |
| Architecture / Stack | NOT DECIDED |
| 1.3 AWAITING FINAL REVIEW | PASS |
| 1.4 NOT OPENED | PASS |
| 2 fichiers projet | PASS |
| git diff --check | PASS |
| Commit | PASS (43b89a9e) |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | PASS — tip 58e0b8c3 / blob 74c56195 |

## 11. Réserves restantes

- HEALTH DATA / AIPD / DORA / accessibility legal / AI Act project applicability = TO VERIFY
- Légifrance HTML parfois inaccessible (ID JO tracé)
- Capacités outils = evidence éditeur ; configs/plans réels TO VERIFY
- 1.3 non VALIDATED (attente revue ChatGPT puis Morris)

## 12. Verdict

**READY FOR CHATGPT FINAL REVIEW — CRM 1.3.2 FINAL WATCH REPORT CONSOLIDATED**

## 13. Handoff remote verification

| Champ | Valeur |
|-------|--------|
| Publisher verdict | HANDOFF UPDATED — REMOTE VERIFIED |
| Branch | sfia/review-handoff |
| Tip | 58e0b8c30a75ab01c9e01e84d262e2c8fe4a7965 |
| Canonical path | sfia-review-handoff/latest-chatgpt-review.md |
| Canonical blob | 74c5619596314447c3aec3d8947dacba0b16f88b |
| Push projet | NOT DONE |
| PR | NOT CREATED |
