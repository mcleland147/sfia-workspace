# ChatGPT Review Pack — FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 00:20:00 CEST |
| **Cycle** | Cadrage projet — ouverture 1.3 / système de veille 1.3.1 |
| **Profil** | Standard |
| **Typologie** | DOC / research-watch setup |
| **Projet** | CRM Assurance Courtage |
| **Baseline** | SFIA v2.6 |

---

## Git Truth

| Check | Valeur |
|-------|--------|
| **Workspace** | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| **Branche initiale** | `docs/crm-assurance-courtage-1-2-user-discovery-01` |
| **Nouvelle branche** | `docs/crm-assurance-courtage-1-3-watch-01` |
| **HEAD initial** | `f035ae6e32b701cff29738ec6e391d597bb83439` |
| **origin/main** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| **Drift CRM main** | **NONE** |
| **Dirt** | `.tmp-sfia-review/**` uniquement |
| **Git Truth** | **PASS** |

---

## Sources SFIA lues

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
4. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
5. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
7. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
8. `scripts/sfia/README.md`
9–11. doctrine, 01-01, 01-02 (locaux CRM)

## Sources pédagogiques prises en compte

Exigences 1.3 / 1.3.1 du brief : marché/concurrence ; réglementation ; no-code/low-code ; IA ; nouvelles technologies ; numérique responsable (écologique, accessible, éthique, inclusif). Support Notion = optionnel ; Git Markdown = équivalent canonique.

## Objectif exact 1.3.1

Établir le système de veille (axes, hiérarchie sources, registre vérifié, méthode, cadence, matrice, questions ouvertes, squelette 1.3.2) — **sans** rapport final, **sans** validation 1.3, **sans** stack/architecture.

## Statut projet d’entrée

1.1 VALIDATED · 1.2 VALIDATED · Architecture NOT DECIDED · Stack NOT DECIDED · 1.3 NOT OPENED (avant cycle) · 1.4 NOT OPENED

---

## Document 1.3 créé — CONTENU COMPLET

Path : `projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md`

```markdown
# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire

| Champ | Valeur |
|-------|--------|
| **Statut 1.3** | **OPENED — WORKING WATCH** |
| **Sous-étape** | **1.3.1 — WATCH SYSTEM ESTABLISHMENT IN PROGRESS** |
| **1.3.2 Rapport de veille** | **NOT STARTED / REPORT NOT YET PRODUCED** — structure only (§11) |
| **1.1** | VALIDATED |
| **1.2** | VALIDATED (2026-09-28) |
| **1.4** | **NOT OPENED** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |
| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
| **Notion** | Aucune action dans ce cycle |
| **Miro** | Hors scope — non modifié |

**Décision Morris :** ouverture du 1.3 et établissement du système de veille **1.3.1**.
Le présent document **n’est pas** une validation globale du 1.3.

---

## 1. Objectif du 1.3

La veille technologique et réglementaire vise à identifier, pour le CRM Assurance Courtage :

- les évolutions technologiques pertinentes (no-code / low-code, IA, nouvelles technologies) ;
- les contraintes réglementaires et de conformité à examiner ;
- les opportunités et risques pour le cabinet et ses utilisateurs ;
- les impacts possibles sur les **choix futurs** (architecture, stack, conception) — **sans** les décider ici.

**Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.

Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
Le sous-cycle **1.3.2** produira le **rapport** de veille (hors périmètre du présent cycle).

---

## 2. Périmètre issu de 1.1 / 1.2

Capacités et éléments utiles pour **orienter** la veille (sans redécrire 1.1 / 1.2) :

| Domaine | Éléments retenus |
|---------|------------------|
| Relation / cycle | Prospects / clients / contrats ; prospection ; devis ; relances / rendez-vous ; souscription ; renouvellement / résiliation |
| Documents | Gestion documentaire ; espace sécurisé documentaire ; historique des échanges et contrats |
| Canaux / accès | Espace client ; canaux physiques et numériques (RDV physique, Visio, téléphone, email) |
| Opérations | Sinistres ; accompagnement personnalisé sur le cycle de vie du contrat |
| Pilotage | Tableau de bord / KPI (conversion, panier moyen, satisfaction) |
| Segments BMC groupe | TPE/PME ; clients particuliers (famille/étudiant) |

**Non décidé :** architecture, stack, UI détaillée, permissions, intégrations techniques.

---

## 3. Axes de veille

| Axe | Sujets à surveiller |
|-----|---------------------|
| **A. Marché et concurrence** | Digitalisation de la distribution d’assurance ; évolution des usages clients ; combinaison relation humaine / parcours numérique ; évolution du rôle des courtiers ; nouveaux modèles de distribution |
| **B. Réglementation métier assurance** | Statut / obligations des intermédiaires et courtiers ; distribution d’assurance ; devoir de conseil / recommandation personnalisée ; information et protection du client ; impacts potentiels de la digitalisation sur la distribution |
| **C. Données personnelles / confidentialité** | Prospects et clients ; contrats ; documents ; données potentiellement sensibles selon les contrats ; historique des échanges ; accès client ; gestion des droits ; sécurité ; durées / finalités **uniquement lorsque sourcées** |
| **D. Cybersécurité / résilience** | Authentification ; contrôle des accès ; stockage documentaire ; protection des données ; fournisseurs SaaS ; résilience opérationnelle ; **DORA** à examiner selon le champ d’application réel du cabinet — **APPLICABILITY TO VERIFY** (ne pas affirmer DORA applicable au cabinet fictif sans preuve suffisante sur taille / catégorie) |
| **E. No-code / low-code** | Capacités : CRM ; base structurée ; workflows ; automatisations ; documents ; formulaires ; rendez-vous ; espace client / portail ; reporting ; intégrations ; sécurité / rôles ; maintenabilité ; réversibilité — **aucun outil sélectionné** |
| **F. IA / nouvelles technologies** | IA générative ; assistants ; classification / extraction documentaire ; aide au traitement ; personnalisation ; analyse / synthèse ; risques d’automatisation ; gouvernance IA ; protection des données ; transparence — **aucun cas d’usage IA ADOPTED** |
| **G. Accessibilité / inclusion** | Accessibilité des interfaces ; formulaires ; navigation ; contraste ; clavier ; technologies d’assistance ; inclusion numérique ; risque d’exclusion lié à une relation uniquement digitale — **ne pas affirmer une obligation juridique précise sans vérifier son champ d’application** |
| **H. Numérique responsable / écoconception** | Sobriété ; utilité des fonctionnalités ; limitation des traitements inutiles ; poids / complexité des interfaces ; consommation de ressources ; durée de vie / maintenabilité du service |

---

## 4. Hiérarchie des sources

### Niveau 1 — sources primaires / officielles

Prioritaires pour les affirmations juridiques ou réglementaires :

- EUR-Lex ;
- Commission européenne ;
- CNIL ;
- ACPR / Banque de France ;
- EIOPA ;
- ORIAS ;
- ANSSI ;
- DINUM / références d’accessibilité (RGAA) ;
- MiNumEco / RGESN ;
- ADEME / ARCEP lorsque directement pertinent ;
- textes législatifs / réglementaires officiels (ex. Légifrance — accès à confirmer selon disponibilité technique).

### Niveau 2 — sources institutionnelles / professionnelles solides

- France Assureurs ;
- organismes publics ;
- publications sectorielles reconnues ;
- études professionnelles identifiées et datées.

Toujours distinguer **analyse sectorielle** et **règle juridique**.

### Niveau 3 — sources éditeurs

Uniquement pour : fonctionnalités produits ; limites ; sécurité déclarée ; intégrations ; tarifs ; roadmap / release notes — via documentations et pages **officielles** des éditeurs.

**Interdit :** utiliser une page marketing éditeur pour démontrer une obligation légale, une tendance de marché générale, ou une supériorité comparative.

---

## 5. Règles de qualité des sources

Chaque information future du rapport **1.3.2** devra porter :

| Métadonnée | Contenu attendu |
|------------|-----------------|
| Organisme / auteur | Obligatoire |
| Titre | Obligatoire |
| URL | Obligatoire — non inventée |
| Date publication / mise à jour | Si disponible |
| Date de consultation | Obligatoire |
| Zone géographique | UE / FR / autre |
| Type de source | Niveau 1 / 2 / 3 |
| Thème | Axe(s) de veille |
| Synthèse courte | Factuelle |
| Impact potentiel projet | Orienté CRM Courtage |
| Niveau de confiance | Haut / moyen / à confirmer |
| Applicability | **CONFIRMED** / **LIKELY** / **TO VERIFY** / **NOT APPLICABLE** |
| Statut | **WATCH** / **PROJECT CONSTRAINT** / **PROJECT OPPORTUNITY** / **INFORMATION ONLY** |

Une absence de preuve ne doit **jamais** être transformée en règle.

---

## 6. Registre initial des sources

**Date de consultation initiale :** 2026-09-29
**Méthode :** ouverture réelle des pages (WebFetch / HTTP) — URLs non inventées.
**Portée :** identification et vérification de pertinence — **pas** de conclusions détaillées (réservées au 1.3.2).

| ID | Thème | Organisme | Source / page | Type | Zone | Pourquoi cette source | Fréquence | Statut | Dernière vérification |
|----|-------|-----------|---------------|------|------|----------------------|-----------|--------|----------------------|
| S01 | C — Données | CNIL | [Site CNIL](https://www.cnil.fr/) | N1 | FR | Autorité FR protection des données — point d’entrée veille RGPD / droits | Hebdo + événementiel | ACTIVE | 2026-09-29 |
| S02 | C — Données | CNIL | [RGPD — page CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) | N1 | FR/UE | Cadre RGPD expliqué par l’autorité compétente | Mensuel | ACTIVE | 2026-09-29 |
| S03 | C — Sécurité données | CNIL | [Guide sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles) | N1 | FR | Précautions sécurité pour organismes traitant des données personnelles | Mensuel | ACTIVE | 2026-09-29 |
| S04 | F — IA | CNIL | [Intelligence artificielle](https://www.cnil.fr/fr/intelligence-artificielle) | N1 | FR | Positions / outils CNIL sur IA et données personnelles | Hebdo | ACTIVE | 2026-09-29 |
| S05 | B — Assurance | ACPR | [ACPR — Banque de France](https://acpr.banque-france.fr/) | N1 | FR | Superviseur banque / assurance FR — distribution, intermédiaires, résilience | Hebdo | ACTIVE | 2026-09-29 |
| S06 | B / D | Banque de France | [Banque de France](https://www.banque-france.fr/) | N1 | FR | Contexte institutionnel ACPR / stabilité financière | Mensuel | ACTIVE | 2026-09-29 |
| S07 | B — Distribution | EIOPA | [EIOPA](https://www.eiopa.europa.eu/) | N1 | UE | Autorité européenne assurance / pensions | Hebdo | ACTIVE | 2026-09-29 |
| S08 | B — IDD | EIOPA | [Insurance Distribution Directive (IDD)](https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en) | N1 | UE | Cadre UE distribution d’assurance ; devoirs d’information / conduite | Mensuel | ACTIVE | 2026-09-29 |
| S09 | A / B — Consommateur | EIOPA | [Consumer protection](https://www.eiopa.europa.eu/browse/consumer-protection_en) | N1 | UE | Tendances consommateurs, protection, innovation | Mensuel | ACTIVE | 2026-09-29 |
| S10 | B / C / D | EUR-Lex | [EUR-Lex homepage](https://eur-lex.europa.eu/homepage.html) | N1 | UE | Portail droit UE — textes primaires | À la demande | ACTIVE | 2026-09-29 |
| S11 | C — RGPD | EUR-Lex | [Règlement (UE) 2016/679 — GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679) | N1 | UE | Texte officiel RGPD | À la demande | ACTIVE | 2026-09-29 |
| S12 | B — IDD | EUR-Lex | [Directive (UE) 2016/97 — IDD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016L0097) | N1 | UE | Texte officiel distribution d’assurance | À la demande | ACTIVE | 2026-09-29 |
| S13 | D — DORA | EUR-Lex | [Règlement (UE) 2022/2554 — DORA](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554) | N1 | UE | Résilience opérationnelle numérique — **applicability cabinet fictif : TO VERIFY** | À la demande | ACTIVE — APPLICABILITY TO VERIFY | 2026-09-29 |
| S14 | B — Intermédiaires | ORIAS | [ORIAS](https://www.orias.fr/) | N1 | FR | Registre unique intermédiaires assurance / banque / finance | Mensuel | ACTIVE | 2026-09-29 |
| S15 | D — Cybersécurité | ANSSI | [cyber.gouv.fr](https://cyber.gouv.fr/) | N1 | FR | Autorité nationale cybersécurité — guides et actualités | Hebdo | ACTIVE | 2026-09-29 |
| S16 | G — Accessibilité | DINUM | [Accessibilité numérique — RGAA](https://accessibilite.numerique.gouv.fr/) | N1 | FR | Référentiel accessibilité services numériques | Mensuel | ACTIVE | 2026-09-29 |
| S17 | G — Accessibilité | DINUM | [RGAA — critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/) | N1 | FR | Critères opérationnels accessibilité | Mensuel | ACTIVE | 2026-09-29 |
| S18 | H — Écoconception | MiNumEco | [Numérique écoresponsable](https://ecoresponsable.numerique.gouv.fr/) | N1 | FR | Mission interministérielle numérique écoresponsable | Mensuel | ACTIVE | 2026-09-29 |
| S19 | H — RGESN | MiNumEco | [Référentiel général d’écoconception (RGESN)](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/) | N1 | FR | Référentiel écoconception services numériques | Mensuel | ACTIVE | 2026-09-29 |
| S20 | A — Marché | France Assureurs | [France Assureurs](https://www.franceassureurs.fr/) | N2 | FR | Fédération professionnelle — tendances / données secteur (≠ règle juridique) | Mensuel | ACTIVE | 2026-09-29 |

**Sources candidates non retenues dans ce registre initial faute de vérification stable :** pages ACPR profondes (HTTP 403/404 selon chemins) ; ADEME (challenge bot) ; Légifrance (challenge Cloudflare au moment de la consultation). Elles restent **à reprendre** en 1.3.2 avec accès navigateur interactif si nécessaire.

**Niveau 3 (éditeurs) :** non peuplé dans 1.3.1 — à ouvrir lors de la veille technologique détaillée des outils candidats, sans sélection.

---

## 7. Dispositif de veille

| Élément | Choix |
|---------|-------|
| **Support canonique** | Git — le présent document |
| **Notion** | OPTIONNEL pédagogiquement — **aucune action** dans ce cycle |
| **Canaux** | Moteurs de recherche → **ouverture de la source** ; pages institutionnelles ; newsletters officielles ; alertes ; flux RSS si disponibles ; release notes / docs éditeurs (niveau 3) |
| **Outils / moyens** | Navigateur ; WebFetch / HTTP pour vérification d’URL ; alertes email institutionnelles lorsque pertinentes ; abonnements newsletters officielles |

### Cadence proposée

| Cadence | Usage |
|---------|-------|
| Revue courte **hebdomadaire** | Pendant la phase active du projet |
| Vérification **ponctuelle** | Avant toute décision technique structurante |
| Vérification **avant** rédaction finale du rapport Bloc 1 | Consolidation |
| Suivi **événementiel** | Changements réglementaires majeurs |

**Qualification :** WORKING CADENCE — **TO BE CONFIRMED BY GROUP**
Cette cadence n’est **pas** présentée comme décision groupe validée.

---

## 8. Workflow de qualification d’une information

```text
Découverte
  → ouverture de la source
  → vérification organisme / date / périmètre
  → synthèse factuelle
  → qualification de pertinence CRM Courtage
  → impact potentiel
  → WATCH / RETAIN / DISCARD
  → éventuelle intégration au rapport 1.3.2
```

**Interdit :**

```text
moteur de recherche → conclusion directe
```

---

## 9. Matrice de veille

| Sujet | Question projet | Sources prioritaires | Information recherchée | Décision future potentiellement éclairée | Statut |
|-------|-----------------|----------------------|------------------------|------------------------------------------|--------|
| RGPD / données clients | Quelles contraintes doivent encadrer données, documents et accès ? | S01–S03, S11 | Bases légales, droits, sécurité, sous-traitance | Conception données / accès / DPA futurs | WATCH |
| Distribution assurance / IDD | Quelles règles doivent être respectées dans un parcours digital ? | S05, S08, S12, S14 | Information client, conseil, transparence distribution | Parcours commercial digital futur | WATCH |
| DORA / résilience | Le cabinet fictif est-il dans le champ ? Quelles exigences si oui ? | S05, S13, S15 | Champ d’application, ICT risk | Hébergement / SaaS / continuité — **si applicable** | WATCH — APPLICABILITY TO VERIFY |
| No-code / low-code | Quelles capacités et limites vérifier avant sélection future ? | Docs éditeurs N3 (à peupler) + critères E | Capacités CRM/workflows/docs/portail/sécurité | Sélection stack future (hors 1.3.1) | WATCH |
| IA | Quels usages sont pertinents et quelles contraintes les encadrent ? | S04, S03, S11 | Gouvernance IA, données, transparence | Cas d’usage IA futurs — aucun ADOPTED | WATCH |
| Accessibilité | Quels principes doivent guider le futur espace client ? | S16, S17 | RGAA / bonnes pratiques ; champ d’obligation TO VERIFY | UX espace client futur | WATCH |
| Écoconception | Quelles bonnes pratiques intégrer dès la conception ? | S18, S19 | RGESN / sobriété | Priorisation fonctionnalités / perf | WATCH |
| Marché / concurrence | Comment évoluent digitalisation et rôle des courtiers ? | S09, S20 | Tendances usages / distribution | Positionnement produit (sans architecture) | WATCH |

---

## 10. Questions de veille ouvertes

Toutes marquées **TO VERIFY** — aucune réponse inventée.

1. Nature exacte des données manipulées selon les types de contrats (auto, habitation, santé, prévoyance, etc.).
2. Présence éventuelle de **données de santé** et conséquences associées.
3. Taille / catégorie juridique du cabinet fictif lorsque nécessaire à l’applicabilité de certains textes (**ex. DORA**).
4. Rôle exact des **compagnies d’assurance partenaires** (BMC) vs intégrations techniques futures.
5. Niveau futur d’accès de l’**espace client** (canal validé — conception NON DÉCIDÉE).
6. Besoins futurs d’**intégration** (compagnies, paiement, signature, etc.).
7. Cas d’usage **IA** réellement retenus (aucun ADOPTED à ce stade).
8. Contraintes de **sécurité** des plateformes candidates (niveau 3 à peupler).
9. Exigences d’**accessibilité** juridiquement applicables vs bonnes pratiques retenues.
10. Exigences de **conservation documentaire**.

---

## 11. Squelette 1.3.2 — Rapport de veille

**Statut :** NOT STARTED — STRUCTURE ONLY

Sections prévues (à remplir uniquement après recherche sourcée) :

1. Synthèse exécutive
2. Tendances marché / concurrence
3. Réglementation assurance
4. RGPD / données
5. Cybersécurité / résilience
6. No-code / low-code
7. IA / nouvelles technologies
8. Accessibilité / inclusion
9. Numérique responsable
10. Impacts concrets pour le CRM
11. Contraintes à transmettre aux étapes suivantes
12. Opportunités
13. Questions encore ouvertes
14. Sources

**Ne pas** remplir ces sections avec des conclusions non recherchées.

---

## 12. Préparation future de la soutenance

Règle pédagogique tracée uniquement :

- la soutenance devra retenir les **éléments essentiels** pour le client ;
- le système et le rapport complet seront plus détaillés dans le rapport de cadrage ;
- un **focus** pourra être choisi ultérieurement selon pertinence (ex. RGPD, sécurité, accessibilité ou écoconception).

**Aucun focus final décidé dans ce cycle.**

---

## 13. Synthèse 1.3.1

| Point | État |
|-------|------|
| **1.3** | OPENED — WORKING WATCH |
| **1.3.1** | Système de veille établi — AWAITING REVIEW |
| Axes A–H | Couverture pédagogique complète |
| Hiérarchie sources N1–N3 | Définie |
| Registre initial | 20 sources vérifiées (2026-09-29) |
| Cadence | WORKING — TO BE CONFIRMED BY GROUP |
| Matrice / questions ouvertes | Établies |
| **1.3.2** | STRUCTURE ONLY / NOT STARTED |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.4** | NOT OPENED |
| Miro / Notion | NOT MODIFIED |

Le 1.3 **n’est pas** VALIDATED par ce document.

```

---

## URLs effectivement vérifiées (2026-09-29)

| ID | URL | Preuve |
|----|-----|--------|
| S01 | https://www.cnil.fr/ | WebFetch OK |
| S02 | https://www.cnil.fr/fr/reglement-europeen-protection-donnees | WebFetch OK |
| S03 | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles | WebFetch OK |
| S04 | https://www.cnil.fr/fr/intelligence-artificielle | WebFetch OK |
| S05 | https://acpr.banque-france.fr/ | WebFetch OK |
| S06 | https://www.banque-france.fr/ | HTTP 200 |
| S07 | https://www.eiopa.europa.eu/ | WebFetch OK |
| S08 | https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en | WebFetch OK |
| S09 | https://www.eiopa.europa.eu/browse/consumer-protection_en | WebFetch OK |
| S10 | https://eur-lex.europa.eu/homepage.html | HTTP 200 |
| S11 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | HTTP 200 |
| S12 | https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016L0097 | HTTP 202 |
| S13 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554 | HTTP 202 — DORA applicability TO VERIFY |
| S14 | https://www.orias.fr/ | WebFetch OK |
| S15 | https://cyber.gouv.fr/ | WebFetch OK (ANSSI) |
| S16 | https://accessibilite.numerique.gouv.fr/ | WebFetch OK |
| S17 | https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/ | HTTP 200 |
| S18 | https://ecoresponsable.numerique.gouv.fr/ | WebFetch OK |
| S19 | https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/ | WebFetch OK |
| S20 | https://www.franceassureurs.fr/ | WebFetch OK |

Non retenues faute d’accès stable : chemins ACPR profonds 404/403 ; ADEME challenge ; Légifrance Cloudflare — à reprendre en 1.3.2.

---

## Doctrine §11 après modification (complète)

```markdown
---

## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED** |
| Étape actuelle | **1.3 Veille technologique et réglementaire — OPENED** |
| Sous-étape | **1.3.1 Système de veille — IN PROGRESS / AWAITING REVIEW** |
| 1.3.2 | **NOT STARTED** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revoir le système de veille 1.3.1 puis ouvrir la production du rapport 1.3.2 après REVIEW PASS |
```

---

## Diff Git utile complet

```diff
commit dabc5c7600cac430ca8e36e5dc84b37d8ffe8394
Author: Ludo243 <ludo_zaya@hotmail.fr>
Date:   Tue Sep 29 00:19:31 2026 +0200

    docs(crm-assurance-courtage): open 1.3 technology regulatory watch

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index dfc4a6e0..5caaae78 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -169,11 +169,15 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 |---------|------|
 | Phase actuelle | Bloc / Phase 1 — cadrage |
 | Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
-| 1.1 | **VALIDATED** — BMC réaligné sur version groupe validée 2026-09-28 |
-| Étape suivante | **1.3 Veille technologique et réglementaire — NOT OPENED** |
+| 1.1 | **VALIDATED** |
+| 1.2 | **VALIDATED** |
+| Étape actuelle | **1.3 Veille technologique et réglementaire — OPENED** |
+| Sous-étape | **1.3.1 Système de veille — IN PROGRESS / AWAITING REVIEW** |
+| 1.3.2 | **NOT STARTED** |
+| 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Attendre le GO Morris pour ouvrir le 1.3 après revue de l’alignement 1.1 / 1.2 sur le BMC groupe |
+| Prochain objectif | Revoir le système de veille 1.3.1 puis ouvrir la production du rapport 1.3.2 après REVIEW PASS |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
new file mode 100644
index 00000000..ad75bf2c
--- /dev/null
+++ b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
@@ -0,0 +1,294 @@
+# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut 1.3** | **OPENED — WORKING WATCH** |
+| **Sous-étape** | **1.3.1 — WATCH SYSTEM ESTABLISHMENT IN PROGRESS** |
+| **1.3.2 Rapport de veille** | **NOT STARTED / REPORT NOT YET PRODUCED** — structure only (§11) |
+| **1.1** | VALIDATED |
+| **1.2** | VALIDATED (2026-09-28) |
+| **1.4** | **NOT OPENED** |
+| **Architecture** | NOT DECIDED |
+| **Stack** | NOT DECIDED |
+| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
+| **Notion** | Aucune action dans ce cycle |
+| **Miro** | Hors scope — non modifié |
+
+**Décision Morris :** ouverture du 1.3 et établissement du système de veille **1.3.1**.
+Le présent document **n’est pas** une validation globale du 1.3.
+
+---
+
+## 1. Objectif du 1.3
+
+La veille technologique et réglementaire vise à identifier, pour le CRM Assurance Courtage :
+
+- les évolutions technologiques pertinentes (no-code / low-code, IA, nouvelles technologies) ;
+- les contraintes réglementaires et de conformité à examiner ;
+- les opportunités et risques pour le cabinet et ses utilisateurs ;
+- les impacts possibles sur les **choix futurs** (architecture, stack, conception) — **sans** les décider ici.
+
+**Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.
+
+Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
+Le sous-cycle **1.3.2** produira le **rapport** de veille (hors périmètre du présent cycle).
+
+---
+
+## 2. Périmètre issu de 1.1 / 1.2
+
+Capacités et éléments utiles pour **orienter** la veille (sans redécrire 1.1 / 1.2) :
+
+| Domaine | Éléments retenus |
+|---------|------------------|
+| Relation / cycle | Prospects / clients / contrats ; prospection ; devis ; relances / rendez-vous ; souscription ; renouvellement / résiliation |
+| Documents | Gestion documentaire ; espace sécurisé documentaire ; historique des échanges et contrats |
+| Canaux / accès | Espace client ; canaux physiques et numériques (RDV physique, Visio, téléphone, email) |
+| Opérations | Sinistres ; accompagnement personnalisé sur le cycle de vie du contrat |
+| Pilotage | Tableau de bord / KPI (conversion, panier moyen, satisfaction) |
+| Segments BMC groupe | TPE/PME ; clients particuliers (famille/étudiant) |
+
+**Non décidé :** architecture, stack, UI détaillée, permissions, intégrations techniques.
+
+---
+
+## 3. Axes de veille
+
+| Axe | Sujets à surveiller |
+|-----|---------------------|
+| **A. Marché et concurrence** | Digitalisation de la distribution d’assurance ; évolution des usages clients ; combinaison relation humaine / parcours numérique ; évolution du rôle des courtiers ; nouveaux modèles de distribution |
+| **B. Réglementation métier assurance** | Statut / obligations des intermédiaires et courtiers ; distribution d’assurance ; devoir de conseil / recommandation personnalisée ; information et protection du client ; impacts potentiels de la digitalisation sur la distribution |
+| **C. Données personnelles / confidentialité** | Prospects et clients ; contrats ; documents ; données potentiellement sensibles selon les contrats ; historique des échanges ; accès client ; gestion des droits ; sécurité ; durées / finalités **uniquement lorsque sourcées** |
+| **D. Cybersécurité / résilience** | Authentification ; contrôle des accès ; stockage documentaire ; protection des données ; fournisseurs SaaS ; résilience opérationnelle ; **DORA** à examiner selon le champ d’application réel du cabinet — **APPLICABILITY TO VERIFY** (ne pas affirmer DORA applicable au cabinet fictif sans preuve suffisante sur taille / catégorie) |
+| **E. No-code / low-code** | Capacités : CRM ; base structurée ; workflows ; automatisations ; documents ; formulaires ; rendez-vous ; espace client / portail ; reporting ; intégrations ; sécurité / rôles ; maintenabilité ; réversibilité — **aucun outil sélectionné** |
+| **F. IA / nouvelles technologies** | IA générative ; assistants ; classification / extraction documentaire ; aide au traitement ; personnalisation ; analyse / synthèse ; risques d’automatisation ; gouvernance IA ; protection des données ; transparence — **aucun cas d’usage IA ADOPTED** |
+| **G. Accessibilité / inclusion** | Accessibilité des interfaces ; formulaires ; navigation ; contraste ; clavier ; technologies d’assistance ; inclusion numérique ; risque d’exclusion lié à une relation uniquement digitale — **ne pas affirmer une obligation juridique précise sans vérifier son champ d’application** |
+| **H. Numérique responsable / écoconception** | Sobriété ; utilité des fonctionnalités ; limitation des traitements inutiles ; poids / complexité des interfaces ; consommation de ressources ; durée de vie / maintenabilité du service |
+
+---
+
+## 4. Hiérarchie des sources
+
+### Niveau 1 — sources primaires / officielles
+
+Prioritaires pour les affirmations juridiques ou réglementaires :
+
+- EUR-Lex ;
+- Commission européenne ;
+- CNIL ;
+- ACPR / Banque de France ;
+- EIOPA ;
+- ORIAS ;
+- ANSSI ;
+- DINUM / références d’accessibilité (RGAA) ;
+- MiNumEco / RGESN ;
+- ADEME / ARCEP lorsque directement pertinent ;
+- textes législatifs / réglementaires officiels (ex. Légifrance — accès à confirmer selon disponibilité technique).
+
+### Niveau 2 — sources institutionnelles / professionnelles solides
+
+- France Assureurs ;
+- organismes publics ;
+- publications sectorielles reconnues ;
+- études professionnelles identifiées et datées.
+
+Toujours distinguer **analyse sectorielle** et **règle juridique**.
+
+### Niveau 3 — sources éditeurs
+
+Uniquement pour : fonctionnalités produits ; limites ; sécurité déclarée ; intégrations ; tarifs ; roadmap / release notes — via documentations et pages **officielles** des éditeurs.
+
+**Interdit :** utiliser une page marketing éditeur pour démontrer une obligation légale, une tendance de marché générale, ou une supériorité comparative.
+
+---
+
+## 5. Règles de qualité des sources
+
+Chaque information future du rapport **1.3.2** devra porter :
+
+| Métadonnée | Contenu attendu |
+|------------|-----------------|
+| Organisme / auteur | Obligatoire |
+| Titre | Obligatoire |
+| URL | Obligatoire — non inventée |
+| Date publication / mise à jour | Si disponible |
+| Date de consultation | Obligatoire |
+| Zone géographique | UE / FR / autre |
+| Type de source | Niveau 1 / 2 / 3 |
+| Thème | Axe(s) de veille |
+| Synthèse courte | Factuelle |
+| Impact potentiel projet | Orienté CRM Courtage |
+| Niveau de confiance | Haut / moyen / à confirmer |
+| Applicability | **CONFIRMED** / **LIKELY** / **TO VERIFY** / **NOT APPLICABLE** |
+| Statut | **WATCH** / **PROJECT CONSTRAINT** / **PROJECT OPPORTUNITY** / **INFORMATION ONLY** |
+
+Une absence de preuve ne doit **jamais** être transformée en règle.
+
+---
+
+## 6. Registre initial des sources
+
+**Date de consultation initiale :** 2026-09-29
+**Méthode :** ouverture réelle des pages (WebFetch / HTTP) — URLs non inventées.
+**Portée :** identification et vérification de pertinence — **pas** de conclusions détaillées (réservées au 1.3.2).
+
+| ID | Thème | Organisme | Source / page | Type | Zone | Pourquoi cette source | Fréquence | Statut | Dernière vérification |
+|----|-------|-----------|---------------|------|------|----------------------|-----------|--------|----------------------|
+| S01 | C — Données | CNIL | [Site CNIL](https://www.cnil.fr/) | N1 | FR | Autorité FR protection des données — point d’entrée veille RGPD / droits | Hebdo + événementiel | ACTIVE | 2026-09-29 |
+| S02 | C — Données | CNIL | [RGPD — page CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) | N1 | FR/UE | Cadre RGPD expliqué par l’autorité compétente | Mensuel | ACTIVE | 2026-09-29 |
+| S03 | C — Sécurité données | CNIL | [Guide sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles) | N1 | FR | Précautions sécurité pour organismes traitant des données personnelles | Mensuel | ACTIVE | 2026-09-29 |
+| S04 | F — IA | CNIL | [Intelligence artificielle](https://www.cnil.fr/fr/intelligence-artificielle) | N1 | FR | Positions / outils CNIL sur IA et données personnelles | Hebdo | ACTIVE | 2026-09-29 |
+| S05 | B — Assurance | ACPR | [ACPR — Banque de France](https://acpr.banque-france.fr/) | N1 | FR | Superviseur banque / assurance FR — distribution, intermédiaires, résilience | Hebdo | ACTIVE | 2026-09-29 |
+| S06 | B / D | Banque de France | [Banque de France](https://www.banque-france.fr/) | N1 | FR | Contexte institutionnel ACPR / stabilité financière | Mensuel | ACTIVE | 2026-09-29 |
+| S07 | B — Distribution | EIOPA | [EIOPA](https://www.eiopa.europa.eu/) | N1 | UE | Autorité européenne assurance / pensions | Hebdo | ACTIVE | 2026-09-29 |
+| S08 | B — IDD | EIOPA | [Insurance Distribution Directive (IDD)](https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en) | N1 | UE | Cadre UE distribution d’assurance ; devoirs d’information / conduite | Mensuel | ACTIVE | 2026-09-29 |
+| S09 | A / B — Consommateur | EIOPA | [Consumer protection](https://www.eiopa.europa.eu/browse/consumer-protection_en) | N1 | UE | Tendances consommateurs, protection, innovation | Mensuel | ACTIVE | 2026-09-29 |
+| S10 | B / C / D | EUR-Lex | [EUR-Lex homepage](https://eur-lex.europa.eu/homepage.html) | N1 | UE | Portail droit UE — textes primaires | À la demande | ACTIVE | 2026-09-29 |
+| S11 | C — RGPD | EUR-Lex | [Règlement (UE) 2016/679 — GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679) | N1 | UE | Texte officiel RGPD | À la demande | ACTIVE | 2026-09-29 |
+| S12 | B — IDD | EUR-Lex | [Directive (UE) 2016/97 — IDD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016L0097) | N1 | UE | Texte officiel distribution d’assurance | À la demande | ACTIVE | 2026-09-29 |
+| S13 | D — DORA | EUR-Lex | [Règlement (UE) 2022/2554 — DORA](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554) | N1 | UE | Résilience opérationnelle numérique — **applicability cabinet fictif : TO VERIFY** | À la demande | ACTIVE — APPLICABILITY TO VERIFY | 2026-09-29 |
+| S14 | B — Intermédiaires | ORIAS | [ORIAS](https://www.orias.fr/) | N1 | FR | Registre unique intermédiaires assurance / banque / finance | Mensuel | ACTIVE | 2026-09-29 |
+| S15 | D — Cybersécurité | ANSSI | [cyber.gouv.fr](https://cyber.gouv.fr/) | N1 | FR | Autorité nationale cybersécurité — guides et actualités | Hebdo | ACTIVE | 2026-09-29 |
+| S16 | G — Accessibilité | DINUM | [Accessibilité numérique — RGAA](https://accessibilite.numerique.gouv.fr/) | N1 | FR | Référentiel accessibilité services numériques | Mensuel | ACTIVE | 2026-09-29 |
+| S17 | G — Accessibilité | DINUM | [RGAA — critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/) | N1 | FR | Critères opérationnels accessibilité | Mensuel | ACTIVE | 2026-09-29 |
+| S18 | H — Écoconception | MiNumEco | [Numérique écoresponsable](https://ecoresponsable.numerique.gouv.fr/) | N1 | FR | Mission interministérielle numérique écoresponsable | Mensuel | ACTIVE | 2026-09-29 |
+| S19 | H — RGESN | MiNumEco | [Référentiel général d’écoconception (RGESN)](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/) | N1 | FR | Référentiel écoconception services numériques | Mensuel | ACTIVE | 2026-09-29 |
+| S20 | A — Marché | France Assureurs | [France Assureurs](https://www.franceassureurs.fr/) | N2 | FR | Fédération professionnelle — tendances / données secteur (≠ règle juridique) | Mensuel | ACTIVE | 2026-09-29 |
+
+**Sources candidates non retenues dans ce registre initial faute de vérification stable :** pages ACPR profondes (HTTP 403/404 selon chemins) ; ADEME (challenge bot) ; Légifrance (challenge Cloudflare au moment de la consultation). Elles restent **à reprendre** en 1.3.2 avec accès navigateur interactif si nécessaire.
+
+**Niveau 3 (éditeurs) :** non peuplé dans 1.3.1 — à ouvrir lors de la veille technologique détaillée des outils candidats, sans sélection.
+
+---
+
+## 7. Dispositif de veille
+
+| Élément | Choix |
+|---------|-------|
+| **Support canonique** | Git — le présent document |
+| **Notion** | OPTIONNEL pédagogiquement — **aucune action** dans ce cycle |
+| **Canaux** | Moteurs de recherche → **ouverture de la source** ; pages institutionnelles ; newsletters officielles ; alertes ; flux RSS si disponibles ; release notes / docs éditeurs (niveau 3) |
+| **Outils / moyens** | Navigateur ; WebFetch / HTTP pour vérification d’URL ; alertes email institutionnelles lorsque pertinentes ; abonnements newsletters officielles |
+
+### Cadence proposée
+
+| Cadence | Usage |
+|---------|-------|
+| Revue courte **hebdomadaire** | Pendant la phase active du projet |
+| Vérification **ponctuelle** | Avant toute décision technique structurante |
+| Vérification **avant** rédaction finale du rapport Bloc 1 | Consolidation |
+| Suivi **événementiel** | Changements réglementaires majeurs |
+
+**Qualification :** WORKING CADENCE — **TO BE CONFIRMED BY GROUP**
+Cette cadence n’est **pas** présentée comme décision groupe validée.
+
+---
+
+## 8. Workflow de qualification d’une information
+
+```text
+Découverte
+  → ouverture de la source
+  → vérification organisme / date / périmètre
+  → synthèse factuelle
+  → qualification de pertinence CRM Courtage
+  → impact potentiel
+  → WATCH / RETAIN / DISCARD
+  → éventuelle intégration au rapport 1.3.2
+```
+
+**Interdit :**
+
+```text
+moteur de recherche → conclusion directe
+```
+
+---
+
+## 9. Matrice de veille
+
+| Sujet | Question projet | Sources prioritaires | Information recherchée | Décision future potentiellement éclairée | Statut |
+|-------|-----------------|----------------------|------------------------|------------------------------------------|--------|
+| RGPD / données clients | Quelles contraintes doivent encadrer données, documents et accès ? | S01–S03, S11 | Bases légales, droits, sécurité, sous-traitance | Conception données / accès / DPA futurs | WATCH |
+| Distribution assurance / IDD | Quelles règles doivent être respectées dans un parcours digital ? | S05, S08, S12, S14 | Information client, conseil, transparence distribution | Parcours commercial digital futur | WATCH |
+| DORA / résilience | Le cabinet fictif est-il dans le champ ? Quelles exigences si oui ? | S05, S13, S15 | Champ d’application, ICT risk | Hébergement / SaaS / continuité — **si applicable** | WATCH — APPLICABILITY TO VERIFY |
+| No-code / low-code | Quelles capacités et limites vérifier avant sélection future ? | Docs éditeurs N3 (à peupler) + critères E | Capacités CRM/workflows/docs/portail/sécurité | Sélection stack future (hors 1.3.1) | WATCH |
+| IA | Quels usages sont pertinents et quelles contraintes les encadrent ? | S04, S03, S11 | Gouvernance IA, données, transparence | Cas d’usage IA futurs — aucun ADOPTED | WATCH |
+| Accessibilité | Quels principes doivent guider le futur espace client ? | S16, S17 | RGAA / bonnes pratiques ; champ d’obligation TO VERIFY | UX espace client futur | WATCH |
+| Écoconception | Quelles bonnes pratiques intégrer dès la conception ? | S18, S19 | RGESN / sobriété | Priorisation fonctionnalités / perf | WATCH |
+| Marché / concurrence | Comment évoluent digitalisation et rôle des courtiers ? | S09, S20 | Tendances usages / distribution | Positionnement produit (sans architecture) | WATCH |
+
+---
+
+## 10. Questions de veille ouvertes
+
+Toutes marquées **TO VERIFY** — aucune réponse inventée.
+
+1. Nature exacte des données manipulées selon les types de contrats (auto, habitation, santé, prévoyance, etc.).
+2. Présence éventuelle de **données de santé** et conséquences associées.
+3. Taille / catégorie juridique du cabinet fictif lorsque nécessaire à l’applicabilité de certains textes (**ex. DORA**).
+4. Rôle exact des **compagnies d’assurance partenaires** (BMC) vs intégrations techniques futures.
+5. Niveau futur d’accès de l’**espace client** (canal validé — conception NON DÉCIDÉE).
+6. Besoins futurs d’**intégration** (compagnies, paiement, signature, etc.).
+7. Cas d’usage **IA** réellement retenus (aucun ADOPTED à ce stade).
+8. Contraintes de **sécurité** des plateformes candidates (niveau 3 à peupler).
+9. Exigences d’**accessibilité** juridiquement applicables vs bonnes pratiques retenues.
+10. Exigences de **conservation documentaire**.
+
+---
+
+## 11. Squelette 1.3.2 — Rapport de veille
+
+**Statut :** NOT STARTED — STRUCTURE ONLY
+
+Sections prévues (à remplir uniquement après recherche sourcée) :
+
+1. Synthèse exécutive
+2. Tendances marché / concurrence
+3. Réglementation assurance
+4. RGPD / données
+5. Cybersécurité / résilience
+6. No-code / low-code
+7. IA / nouvelles technologies
+8. Accessibilité / inclusion
+9. Numérique responsable
+10. Impacts concrets pour le CRM
+11. Contraintes à transmettre aux étapes suivantes
+12. Opportunités
+13. Questions encore ouvertes
+14. Sources
+
+**Ne pas** remplir ces sections avec des conclusions non recherchées.
+
+---
+
+## 12. Préparation future de la soutenance
+
+Règle pédagogique tracée uniquement :
+
+- la soutenance devra retenir les **éléments essentiels** pour le client ;
+- le système et le rapport complet seront plus détaillés dans le rapport de cadrage ;
+- un **focus** pourra être choisi ultérieurement selon pertinence (ex. RGPD, sécurité, accessibilité ou écoconception).
+
+**Aucun focus final décidé dans ce cycle.**
+
+---
+
+## 13. Synthèse 1.3.1
+
+| Point | État |
+|-------|------|
+| **1.3** | OPENED — WORKING WATCH |
+| **1.3.1** | Système de veille établi — AWAITING REVIEW |
+| Axes A–H | Couverture pédagogique complète |
+| Hiérarchie sources N1–N3 | Définie |
+| Registre initial | 20 sources vérifiées (2026-09-29) |
+| Cadence | WORKING — TO BE CONFIRMED BY GROUP |
+| Matrice / questions ouvertes | Établies |
+| **1.3.2** | STRUCTURE ONLY / NOT STARTED |
+| Architecture | NOT DECIDED |
+| Stack | NOT DECIDED |
+| **1.4** | NOT OPENED |
+| Miro / Notion | NOT MODIFIED |
+
+Le 1.3 **n’est pas** VALIDATED par ce document.

```

---

## Validations

| Validation | Résultat |
|------------|----------|
| Git Truth | **PASS** |
| Nouvelle branche 1.3 | **PASS** (`docs/crm-assurance-courtage-1-3-watch-01`) |
| 1.1 inchangé | **PASS** |
| 1.2 inchangé | **PASS** |
| Doctrine alignée | **PASS** |
| Document 1.3 créé | **PASS** |
| 1.3 = OPENED | **PASS** |
| 1.3.1 système de veille | **PASS** |
| Axes pédagogiques A–H | **PASS** |
| Sources officielles prioritaires | **PASS** |
| Sources réellement vérifiées | **PASS** (20) |
| URLs non inventées | **PASS** |
| Registre des sources | **PASS** |
| Cadence | WORKING / documented — TO BE CONFIRMED BY GROUP |
| Matrice de veille | **PASS** |
| Questions ouvertes | **PASS** |
| 1.3.2 | STRUCTURE ONLY / NOT STARTED |
| Aucune conclusion réglementaire non sourcée | **PASS** |
| Aucun choix de stack | **PASS** |
| Architecture NOT DECIDED | **PASS** |
| 1.4 NOT OPENED | **PASS** |
| Miro | **NOT MODIFIED** |
| Notion | **NOT MODIFIED** |
| Exactement 2 fichiers projet | **PASS** |
| git diff --check | **PASS** |
| Commit local | **PASS** |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |

---

## Commit

| Champ | Valeur |
|-------|--------|
| Message | `docs(crm-assurance-courtage): open 1.3 technology regulatory watch` |
| SHA | `dabc5c7600cac430ca8e36e5dc84b37d8ffe8394` |
| Parent | `f035ae6e32b701cff29738ec6e391d597bb83439` |

---

## HEAD final / push / PR

| Champ | Valeur |
|-------|--------|
| **HEAD final** | `dabc5c7600cac430ca8e36e5dc84b37d8ffe8394` |
| **Branche** | `docs/crm-assurance-courtage-1-3-watch-01` |
| **Push projet** | NOT DONE |
| **PR** | NOT CREATED |
| **1.3** | OPENED |
| **1.3.2** | NOT STARTED |
| **1.4** | NOT OPENED |
| **Architecture / Stack** | NOT DECIDED |

---

## Réserves

1. Cadence de veille = WORKING — TO BE CONFIRMED BY GROUP.
2. Applicabilité DORA au cabinet fictif = **TO VERIFY**.
3. Niveau 3 éditeurs non peuplé (volontaire — 1.3.2 / veille outils).
4. Certaines pages institutionnelles (ADEME, Légifrance, chemins ACPR) non accessibles proprement — documentées comme à reprendre.
5. Aucune validation globale du 1.3.

---

## Verdict

**READY FOR CHATGPT REVIEW — CRM 1.3.1 WATCH SYSTEM ESTABLISHED**
