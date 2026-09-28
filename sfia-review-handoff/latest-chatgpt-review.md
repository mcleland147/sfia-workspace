# ChatGPT Review Pack — FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 00:55:00 CEST |
| **Cycle** | Cadrage — recherche 1.3.2-A Réglementation assurance & données personnelles |
| **Profil** | Standard |
| **Typologie** | DOC / regulatory research deep-dive |
| **Transverse activé** | RGPD / conformité |
| **Sécurité / RSSI autonome** | NON |
| **Baseline** | SFIA v2.6 |

---

## Git Truth

| Check | Valeur |
|-------|--------|
| Workspace | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| Branche | `docs/crm-assurance-courtage-1-3-watch-01` |
| HEAD initial | `dabc5c7600cac430ca8e36e5dc84b37d8ffe8394` |
| origin/main | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| Drift CRM | NONE |
| Dirt | `.tmp-sfia-review/**` |
| Git Truth | **PASS** |

---

## Sources SFIA / projet

SFIA : template, routing, v2.5, CKC cadrage, operating model, guardrails, checklist, scripts README.
Projet : doctrine, 01-01, 01-02, **01-03 au HEAD dabc5c76** (base d’entrée).

---

## Méthode de recherche

1. Hub CNIL assurance → fiches conservation / minimisation-santé / bases légales / droits / AIPD.
2. ACPR reco 2024-R-03 + article officiel 2025 (entrée en application 31/12/2025).
3. EIOPA IDD page + EUR-Lex Directive 2016/97 (art. 17, 20).
4. EUR-Lex GDPR 2016/679 (art. 5, 9, 25, 28, 32, 35 ; recital health data).
5. Croisement strict avec périmètre 1.1/1.2 ; pas de conclusion depuis snippets seuls.

### Requêtes / chemins utiles

- `site:cnil.fr assurance`
- `CNIL durées conservation secteur assurance`
- `ACPR recommandation 2024-R-03 devoir de conseil`
- `EUR-Lex CELEX:32016L0097` / `32016R0679`
- `CNIL AIPD`

---

## Métadonnées document 1.3 après mutation

```markdown
# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire

| Champ | Valeur |
|-------|--------|
| **Statut 1.3** | **OPENED — WORKING WATCH** |
| **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
| **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
| **1.3.2-A** | **REGULATION & DATA — AWAITING REVIEW** |
| **1.3.2-B** | **NOT STARTED** |
| **1.3.2-C** | **NOT STARTED** |
| **1.3.2-D** | **NOT STARTED** |
| **1.1** | VALIDATED |
| **1.2** | VALIDATED (2026-09-28) |
| **1.4** | **NOT OPENED** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |
| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
| **Notion** | Aucune action dans ce cycle |
| **Miro** | Hors scope — non modifié |

```

---

## Section 1.3.2-A COMPLÈTE

```markdown
## 14. 1.3.2-A — Réglementation assurance & données personnelles

| Champ | Valeur |
|-------|--------|
| **Statut** | **AWAITING REVIEW** |
| **Date de recherche** | 2026-09-29 |
| **Transverse** | RGPD / conformité (activé) |
| **Sécurité / RSSI autonome** | **NON** — frontière stricte avec 1.3.2-B |
| **Nature** | Veille / analyse de cadrage sourcée — **pas** avis juridique ; **pas** conformité certifiée |

### 14.1 Périmètre et méthode

**Périmètre fonctionnel utilisé (1.1 / 1.2 uniquement) :** prospects ; clients ; contrats ; TPE/PME ; particuliers ; prospection ; devis ; relances ; RDV ; compréhension du besoin ; conseil / recommandation personnalisée ; souscription ; renouvellement / résiliation ; documents ; espace sécurisé documentaire ; historique ; espace client ; sinistres ; dashboard / KPI ; canaux RDV physique / Visio / téléphone / email / espace client.

**Non inventé :** paiement ; signature électronique ; enregistrement d’appels ; API compagnies ; données bancaires ; données médicales stockées ; scoring / profilage automatisé ; antifraude — sauf mention **TO VERIFY** si une source montre une pertinence potentielle.

**Méthode :** ouverture réelle de sources N1 (CNIL, ACPR, EIOPA, EUR-Lex) ; distinction fait réglementaire / implication projet / applicability ; interdiction moteur → conclusion.

### 14.2 Synthèse exécutive bornée

1. **IDD art. 20 (EUR-Lex)** : avant conclusion, le distributeur doit spécifier exigences et besoins du client, fournir une information compréhensible, et proposer un contrat **cohérent** avec ces besoins ; si conseil, une **recommandation personnalisée** motivée est requise → le CRM doit pouvoir **soutenir** (pas « décider ») le recueil / la traçabilité du parcours de conseil — **LIKELY** pour un parcours courtage digitalisé.
2. **IDD art. 17 (EUR-Lex)** : agir honnêtement, loyalement et professionnellement dans l’intérêt du client → principe de conduite à transmettre à la conception du parcours — **LIKELY**.
3. **ACPR reco. 2024-R-03** (+ article ACPR 2025) : formaliser le recueil d’informations pour devoir de conseil / recommandation personnalisée ; étendre le conseil dans la durée (dont dommages / prévoyance) ; entrée en application **31/12/2025** → le CRM a un intérêt fort à conserver l’historique besoins / conseils / échanges — **LIKELY** (applicabilité exacte au cabinet fictif **TO VERIFY** selon statut distributeur).
4. **CNIL assurance — finalités** : distinguer (i) passation / gestion / exécution des contrats et (ii) prospection ; chaque finalité exige une base légale propre — bases finales du projet = **TO VERIFY**.
5. **CNIL — minimisation** : ne traiter que données pertinentes / nécessaires ; exemple : localisation du bien non nécessaire pour une complémentaire santé — le modèle de données futur doit rester **minimal** — **CONFIRMED** (principe) / champs exacts **TO VERIFY**.
6. **CNIL — conservation assurance** : prospect sans contrat ≈ **3 ans** depuis collecte / dernier contact prospect ; données utiles à défense de droits ≈ **5 ans** ; contrat conclu → délais de prescription sectoriels (ex. vie 30 ans dans certains cas) → guidance, **pas** politique finale — **LIKELY** / calibrage contrat par contrat **TO VERIFY**.
7. **Contrat « santé » ≠ donnée de santé** : le brief cite des **catégories de contrats** (auto, habitation, santé, prévoyance) sans prouver le stockage de données concernant la santé → **HEALTH DATA PROCESSING = TO VERIFY** (voir §14.7).
8. **RGPD art. 9 / CNIL** : données de santé = catégorie particulière ; traitement en principe interdit hors dérogations (protection sociale / consentement explicite selon cas) → si le CRM devait en traiter un jour, contraintes renforcées — **NON confirmé** dans le périmètre actuel.
9. **Transparence / droits (CNIL + RGPD ch. III)** : information concise et accessible ; droits d’accès, rectification, opposition, etc. → à prévoir pour espace client / parcours — **LIKELY** sans UI décidée.
10. **AIPD** : obligatoire si risque élevé (liste CNIL ou ≥2 critères G29) ; traitements réels non encore définis → **AIPD = TO VERIFY** — **ne pas** écrire REQUIRED.

### 14.3 Distribution / devoir de conseil

| Point | Fait réglementaire | Source | Applicability projet | Impact potentiel CRM | Statut |
|-------|-------------------|--------|----------------------|----------------------|--------|
| Exigences et besoins | Avant conclusion, spécifier demands & needs sur la base d’informations obtenues du client | IDD art. 20 §1 — EUR-Lex CELEX:32016L0097 | Parcours devis → RDV → proposition → souscription | Soutenir saisie / conservation des informations de besoin | LIKELY |
| Cohérence produit | Tout contrat proposé doit être cohérent avec demands & needs | IDD art. 20 §1 | Conseil personnalisé BMC / 1.2 | Traçabilité du lien besoin → proposition | LIKELY |
| Recommandation personnalisée | Si conseil fourni : recommandation personnalisée expliquant pourquoi le produit convient | IDD art. 20 §1 | « Conseil personnalisé » BMC | Enregistrer motivation / justification de conseil (niveau métier) | LIKELY |
| Gradation | Détails modulés selon complexité produit et type de client | IDD art. 20 §2 | Segments TPE/PME / particuliers | Parcours / questionnaires différenciés possibles — **non conçus ici** | TO VERIFY |
| Conduite générale | Agir honestly, fairly, professionally ; best interests of customers | IDD art. 17 | Tous canaux validés | Gouvernance du parcours digital / humain | LIKELY |
| Information précontractuelle | Information claire avant signature ; IPID pour non-vie (cadre IDD / EIOPA) | EIOPA IDD page ; IDD | Souscription | Mettre à disposition / tracer remise d’informations — modalités **TO VERIFY** | LIKELY |
| Recueil formalisé (FR) | Recommandation ACPR sur recueil d’informations client pour devoir de conseil / reco. personnalisée | ACPR 2024-R-03 (21/11/2024) ; article ACPR 22/09/2025 | Distributeurs FR | Formaliser questionnaires / historique / preuves de conseil | LIKELY |
| Conseil dans la durée | ACPR recommande conseil périodique aussi pour dommages / prévoyance ; entrée en application 31/12/2025 | ACPR article 2025 | Renouvellement / vie du contrat | Rappels / revue besoins / historique | LIKELY / calendrier exact TO VERIFY |
| Traçabilité documentaire | Nécessaire pour démontrer le parcours de conseil (principe issu des obligations d’information / reco.) | IDD + ACPR (lecture combinée) | Documents + historique + espace sécurisé | Conserver échanges / pièces / besoins | LIKELY |
| Digitalisation | ACPR : quel que soit le canal de vente (ex. préférences durabilité assurance-vie) | ACPR article 2025 | Canaux Visio / email / espace client | Même exigence de qualité de conseil en digital | LIKELY |
| Support durable / com. | Non approfondi ici hors besoins sourcés IDD/ACPR | — | — | Hors scope détaillé 1.3.2-A | NOT APPLICABLE (pour l’instant) |

**Limite :** ACPR 2024-R-03 est une **recommandation** de superviseur (bonnes pratiques / attentes de Place), distincte du texte IDD. Le statut juridique exact pour le cabinet fictif reste **TO VERIFY** (ORIAS / catégorie d’intermédiaire).

### 14.4 Cartographie des catégories de données (pas un modèle de données)

| Domaine | Donnée / catégorie identifiable | Source projet | Donnée personnelle ? | Catégorie particulière potentielle ? | Finalité probable issue du besoin | Statut | Question restante |
|---------|--------------------------------|---------------|----------------------|--------------------------------------|-----------------------------------|--------|-------------------|
| Prospect | Identité / coordonnées de contact | 1.1 / 1.2 (prise de contact, devis, RDV) | Oui (si personne physique) | Non a priori | Entrée en relation / devis / RDV | LIKELY | Champs exacts NON DÉCIDÉS |
| Prospect | Contenu devis / besoin initial | 1.1 / 1.2 | Oui si rattaché à une personne | Possible selon produit (santé) — **TO VERIFY** | Préparation devis / conseil | LIKELY | Contenu devis santé ? |
| Prospect | Historique d’échanges | 1.1 / 1.2 / BMC transparence | Oui | Non a priori | Continuité / traçabilité relation | LIKELY | Canaux de capture |
| Client | Identité / coordonnées | 1.1 / 1.2 | Oui | Non a priori | Gestion relation / contrat | LIKELY | — |
| Client | Données de contrat (type, garanties, échéances) | 1.1 / 1.2 / BMC | Oui si personne physique | Le **type** « santé » ≠ donnée de santé | Gestion / renouvellement / conseil | LIKELY | Périmètre champs contrat |
| Client | Documents administratifs | 1.1 / 1.2 / espace sécurisé | Oui souvent | Possible (Pièces) — **TO VERIFY** | Gestion documentaire | LIKELY | Types de pièces |
| Client | Historique échanges / contrats | BMC | Oui | Non a priori | Transparence / confiance | LIKELY | Accès espace client |
| Sinistre | Infos déclaration / suivi | 1.1 / 1.2 (niveau brief) | Oui | Possible selon sinistre — **TO VERIFY** | Suivi sinistre | LIKELY | Granularité non définie |
| Pilotage | KPI (conversion, panier, satisfaction) | 1.1 / 1.2 | Agrégats : pas nécessairement ; individuels : oui | Non a priori | Pilotage commercial | TO VERIFY | Agrégation vs individuel |
| Segments | TPE/PME / particulier | BMC groupe | Particulier : oui ; TPE/PME : selon personnes | Non a priori | Segmentation relationnelle | LIKELY | Statut PME vs personne |

### 14.5 Principes RGPD pertinents à transmettre

| Principe | Source officielle | Applicability | Impact futur | Décision encore nécessaire |
|----------|-------------------|---------------|--------------|----------------------------|
| Licéité / loyauté / transparence | RGPD art. 5 ; CNIL information | LIKELY | Mentions d’information ; UX transparence | Rédaction mentions ; responsable de traitement |
| Finalités déterminées | RGPD art. 5 ; CNIL bases légales assurance | LIKELY | Séparer finalités contrat vs prospection | Cartographie traitements réelle |
| Minimisation | RGPD art. 5 ; CNIL minimisation assurance | CONFIRMED (principe) | Limiter champs CRM | Liste de champs |
| Exactitude | RGPD art. 5 | LIKELY | Mise à jour coordonnées / besoin | Processus de mise à jour |
| Limitation de conservation | RGPD art. 5 ; CNIL durées assurance | LIKELY | Politique rétention différenciée | Calibrage par finalité / contrat |
| Intégrité / confidentialité (sécurité appropriée) | RGPD art. 5 + art. 32 | LIKELY (principe) | Exigence de sécurité — **détails → 1.3.2-B** | Mesures techniques |
| Privacy by design / by default | RGPD art. 25 | LIKELY | Intégrer minimisation dès conception | Architecture future |
| Sous-traitance | RGPD art. 28 | LIKELY si SaaS / no-code | Contrats / garanties processeur | Choix plateforme (NOT DECIDED) |
| Droits des personnes | RGPD art. 12–22 ; CNIL droits assurance | LIKELY | Accès / rectification / opposition via process ou espace client | Modalités |
| Bases légales | RGPD art. 6 ; CNIL grands traitements | **TO VERIFY** | Ne pas figer une base par traitement fictif | Analyse traitement par traitement |
| Catégories particulières | RGPD art. 9 ; CNIL données de santé assurance | **TO VERIFY** | Si santé : régime renforcé | Preuve projet de traitement |

**Bases légales possibles à étudier (CNIL assurance) — non attribuées définitivement :** contrat (mesures précontractuelles / exécution) ; obligation légale ; intérêt légitime ; consentement (notamment prospection électronique / cas art. 9).
**Base juridique finale = TO VERIFY.**

### 14.6 Conservation — guidance / candidats de contrainte

Source prioritaire : CNIL — *Les durées de conservation des données du secteur de l’assurance* (16/07/2021).

| Situation | Guidance CNIL (synthèse) | Applicability CRM | Statut |
|-----------|--------------------------|-------------------|--------|
| Prospect / pas de contrat (prospection) | Ne pas conserver au-delà de **3 ans** à compter de la collecte ou du **dernier contact émanant du prospect** | Parcours prospect CRM | LIKELY |
| Données pour constatation / défense / exercice de droits | Jusqu’à **5 ans** (prescription de droit commun, selon CNIL) | Contentieux potentiel | LIKELY |
| Contrat conclu | Délais de **prescription sectoriels** (ex. assurance-vie : jusqu’à 30 ans dans certains cas cités) | Vie du contrat / archives | TO VERIFY (selon types de contrats réellement gérés) |
| Fraude (si un jour) | Règles spécifiques (6 mois qualification alerte ; 5 ans si pertinente) | **Hors périmètre actuel** | NOT APPLICABLE pour l’instant |

**Ce n’est PAS une politique de rétention finale.** Les durées dépendent du type de contrat, de la prescription et de la finalité.

### 14.7 Données de santé / catégories particulières

1. **Définition (RGPD, recital / cadre CNIL)** : données concernant la santé = informations révélant l’état de santé physique ou mentale passé, présent ou futur d’une personne (EUR-Lex GDPR ; traitement encadré art. 9).
2. **Protection spécifique** : traitement en principe **interdit**, sous dérogations (CNIL : protection sociale ; consentement explicite art. 9.2.a selon cas ; défense de droits, etc.).
3. **Distinction critique :**
   - **TYPE DE CONTRAT « SANTÉ »** (catégorie produit du brief) ;
   - **≠ DONNÉE CONCERNANT LA SANTÉ** (catégorie particulière RGPD).
4. **Situations potentielles assurance (CNIL)** : complémentaire santé / prévoyance / emprunteur peuvent impliquer des données de santé **si** le traitement le nécessite ; la CNIL appelle à vigilance NIR / santé.
5. **État du projet 1.1 / 1.2 :** aucun champ, pièce, questionnaire médical, ni traitement de donnée de santé n’est décrit comme stocké dans le CRM.

**Verdict sous-sujet :**

### HEALTH DATA PROCESSING = TO VERIFY

Forme équivalente retenue : **NO EVIDENCE OF HEALTH DATA PROCESSING IN CURRENT PROJECT SCOPE** — la présence future reste **TO VERIFY** dès que le contenu réel des dossiers « santé / prévoyance / sinistres » sera précisé.

### 14.8 AIPD / risques élevés

| Élément | Contenu | Statut |
|---------|---------|--------|
| Cadre | RGPD art. 35 ; CNIL page AIPD (18/10/2017) | — |
| Quand | Traitement susceptible d’engendrer un **risque élevé** : liste CNIL **ou** ≥2 critères G29 (scoring/profilage, décision auto, données sensibles, large échelle, etc.) | — |
| Projet actuel | Traitements détaillés, volumes, technologies, profilage non définis | — |
| Conclusion | **Ne pas écrire AIPD REQUIRED** | **TO VERIFY** |

### 14.9 Tableau contraintes / impacts futurs

| ID | Constat sourcé | Applicability | Impact potentiel CRM | Étape future concernée | Statut |
|----|----------------|---------------|----------------------|------------------------|--------|
| C-A01 | Demands & needs + cohérence produit (IDD art. 20) | LIKELY | Capacité à recueillir / historiser le besoin et le rattacher à la proposition | Conception fonctionnelle ; UX/UI | OPEN |
| C-A02 | Recommandation personnalisée motivée si conseil (IDD art. 20) | LIKELY | Tracer justification de conseil | Conception fonctionnelle | OPEN |
| C-A03 | Formalisation recueil + conseil dans la durée (ACPR 2024-R-03 / 2025) | LIKELY | Rappels périodiques ; revue besoins ; preuves | Conception ; delivery | OPEN |
| C-A04 | Finalités distinctes contrat vs prospection (CNIL) | LIKELY | Séparer traitements / bases / oppositions | Conception ; architecture fonctionnelle | OPEN |
| C-A05 | Minimisation (CNIL / RGPD art. 5) | CONFIRMED (principe) | Éviter sur-collecte | Conception ; architecture données | OPEN |
| C-A06 | Conservation prospect ~3 ans / droits ~5 ans / contrat selon prescription (CNIL) | LIKELY | Règles de rétention différenciées | Architecture ; delivery ; QA | OPEN |
| C-A07 | Transparence + droits personnes (RGPD / CNIL) | LIKELY | Information + exercice des droits | UX/UI ; delivery | OPEN |
| C-A08 | Privacy by design (RGPD art. 25) | LIKELY | Intégrer minimisation / droits dès design | Architecture ; UX/UI | OPEN |
| C-A09 | Sous-traitance (RGPD art. 28) si éditeur SaaS | LIKELY | DPA / garanties processeur | Architecture technique ; delivery | OPEN |
| C-A10 | Sécurité appropriée (RGPD art. 32) — principe | LIKELY | Exigence de sécurité | **Sécurité/RSSI → 1.3.2-B** | OPEN — handoff B |
| C-A11 | Données de santé / art. 9 | TO VERIFY | Régime renforcé **si** confirmation projet | Conception ; Sécurité/RSSI | OPEN |
| C-A12 | AIPD si risque élevé | TO VERIFY | Analyse avant mise en œuvre le cas échéant | Conception ; Sécurité/RSSI | OPEN |

### 14.10 Questions TO VERIFY (1.3.2-A)

1. Statut exact du cabinet fictif comme distributeur / inscription ORIAS.
2. Types de contrats réellement proposés et pièces demandées (surtout santé / prévoyance).
3. Présence ou non de **données concernant la santé** dans les dossiers CRM.
4. Bases légales retenues traitement par traitement.
5. Volume / échelle des traitements (critère AIPD).
6. Usage ou non de profilage / décision automatisée.
7. Sous-traitants techniques futurs (stack NOT DECIDED).
8. Politique de conservation fine par famille de contrat.
9. Modalités d’exercice des droits via espace client.
10. Périmètre exact « conseil dans la durée » applicable aux produits du cas.

### 14.11 Sources exploitées (1.3.2-A)

| ID | Thème | Organisme | Titre / page | Lien | Date (si dispo) | Consultation | Pertinence | Statut |
|----|-------|-----------|--------------|------|-----------------|--------------|------------|--------|
| S21 | Assurance / RGPD | CNIL | Le secteur de l’assurance | https://www.cnil.fr/fr/assurance | — | 2026-09-29 | Hub sectoriel | ACTIVE |
| S22 | Conservation | CNIL | Durées de conservation — secteur assurance | https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees-du-secteur-de-lassurance | 16/07/2021 | 2026-09-29 | Guidance rétention | ACTIVE |
| S23 | Minimisation / santé | CNIL | Minimisation, NIR et données de santé | https://www.cnil.fr/fr/le-principe-de-minimisation-et-les-traitements-du-nir-et-des-donnees-de-sante-dans-le-secteur-de | 16/07/2021 | 2026-09-29 | Art. 9 / minimisation | ACTIVE |
| S24 | Bases légales | CNIL | Grands traitements et bases légales | https://www.cnil.fr/fr/les-grands-traitements-du-secteur-de-lassurance-et-leurs-bases-legales | 16/07/2021 | 2026-09-29 | Finalités / bases | ACTIVE |
| S25 | Droits / profilage | CNIL | Droit des personnes et profilage | https://www.cnil.fr/fr/droit-des-personnes-et-profilage-les-specificites-du-secteur-de-lassurance | 16/07/2021 | 2026-09-29 | Transparence / droits | ACTIVE |
| S26 | AIPD | CNIL | Ce qu’il faut savoir sur l’AIPD | https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd | 18/10/2017 | 2026-09-29 | Applicability AIPD | ACTIVE |
| S27 | Devoir de conseil | ACPR | Publication reco. devoir de conseil | https://acpr.banque-france.fr/fr/actualites/publication-de-la-recommandation-sur-le-devoir-de-conseil-en-assurance | 22/09/2025 (maj 25/09/2026) | 2026-09-29 | Conseil dans la durée / calendrier | ACTIVE |
| S28 | Devoir de conseil | ACPR | Recommandation 2024-R-03 | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/recommandation-2024-r-03-du-21-novembre-2024-sur-le-recueil-des-informations-relatives-au-client | 21/11/2024 (maj 24/09/2026) | 2026-09-29 | Recueil infos client | ACTIVE |
| S29 | IDD | EIOPA | Insurance Distribution Directive | https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en | — | 2026-09-29 | Cadre distribution UE | ACTIVE |
| S30 | IDD texte | EUR-Lex | Directive (UE) 2016/97 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L0097 | 2016 | 2026-09-29 | Art. 17 / 20 | ACTIVE |
| S31 | RGPD texte | EUR-Lex | Règlement (UE) 2016/679 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | 2016 | 2026-09-29 | Art. 5, 6, 9, 12–22, 25, 28, 32, 35 | ACTIVE |
| S03 | Sécurité données (principe) | CNIL | Guide sécurité des données personnelles | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles | — | 2026-09-29 | Lien principe → 1.3.2-B | ACTIVE (déjà S03) |

### 14.12 Frontière explicite avec 1.3.2-B (Sécurité & résilience)

**Inclus ici (principe RGPD uniquement) :** confidentialité / intégrité comme objectifs ; sécurité appropriée (art. 32) comme contrainte de transmission ; protection documentaire comme besoin métier.

**Exclus / reportés à 1.3.2-B :** threat modeling ; matrice de risques cyber ; IAM détaillé ; chiffrement cible ; MFA ; sauvegarde / PRA / PCA ; durcissement ; évaluation fournisseurs SaaS ; **DORA détaillé**.

### 14.13 Limites / réserves

- Pas d’avis juridique ni de conformité certifiée.
- Cabinet fictif : taille / statut / produits exacts incomplets.
- PDF intégral ACPR 2024-R-03 non paraphrasé article par article ; synthèse appuyée sur page officielle + article ACPR 2025.
- Légifrance non mobilisé (accès technique parfois bloqué) ; droit FR cité via ACPR/CNIL.
- Aucune stack / architecture / conception SSI.
```

---

## Doctrine §11 complète après modification

```markdown
---

## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED** |
| 1.3 | **OPENED** |
| 1.3.1 | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
| Étape actuelle | **1.3.2-A Réglementation assurance & données — AWAITING REVIEW** |
| 1.3.2-B | **NOT STARTED** |
| 1.3.2-C | **NOT STARTED** |
| 1.3.2-D | **NOT STARTED** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revoir le deep-dive 1.3.2-A avant d’ouvrir 1.3.2-B |

---
```

---

## Diff Git utile complet

```diff
commit b2e6fb98dee3cb498e073837c32cc7e75c7d0fa7
Author: Ludo243 <ludo_zaya@hotmail.fr>
Date:   Tue Sep 29 00:54:59 2026 +0200

    docs(crm-assurance-courtage): research 1.3.2a regulation and data

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 5caaae78..5873c9b1 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -171,13 +171,16 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
 | 1.1 | **VALIDATED** |
 | 1.2 | **VALIDATED** |
-| Étape actuelle | **1.3 Veille technologique et réglementaire — OPENED** |
-| Sous-étape | **1.3.1 Système de veille — IN PROGRESS / AWAITING REVIEW** |
-| 1.3.2 | **NOT STARTED** |
+| 1.3 | **OPENED** |
+| 1.3.1 | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
+| Étape actuelle | **1.3.2-A Réglementation assurance & données — AWAITING REVIEW** |
+| 1.3.2-B | **NOT STARTED** |
+| 1.3.2-C | **NOT STARTED** |
+| 1.3.2-D | **NOT STARTED** |
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revoir le système de veille 1.3.1 puis ouvrir la production du rapport 1.3.2 après REVIEW PASS |
+| Prochain objectif | Revoir le deep-dive 1.3.2-A avant d’ouvrir 1.3.2-B |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
index ad75bf2c..e0b981b6 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
@@ -3,8 +3,12 @@
 | Champ | Valeur |
 |-------|--------|
 | **Statut 1.3** | **OPENED — WORKING WATCH** |
-| **Sous-étape** | **1.3.1 — WATCH SYSTEM ESTABLISHMENT IN PROGRESS** |
-| **1.3.2 Rapport de veille** | **NOT STARTED / REPORT NOT YET PRODUCED** — structure only (§11) |
+| **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
+| **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
+| **1.3.2-A** | **REGULATION & DATA — AWAITING REVIEW** |
+| **1.3.2-B** | **NOT STARTED** |
+| **1.3.2-C** | **NOT STARTED** |
+| **1.3.2-D** | **NOT STARTED** |
 | **1.1** | VALIDATED |
 | **1.2** | VALIDATED (2026-09-28) |
 | **1.4** | **NOT OPENED** |
@@ -14,8 +18,8 @@
 | **Notion** | Aucune action dans ce cycle |
 | **Miro** | Hors scope — non modifié |

-**Décision Morris :** ouverture du 1.3 et établissement du système de veille **1.3.1**.
-Le présent document **n’est pas** une validation globale du 1.3.
+**Décision Morris :** 1.3 OPENED ; 1.3.1 établi ; trajectoire 1.3.2 découpée en deep-dives A→E.
+Le présent document **n’est pas** une validation globale du 1.3 ni un avis juridique / conformité certifiée.

 ---

@@ -31,7 +35,7 @@ La veille technologique et réglementaire vise à identifier, pour le CRM Assura
 **Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.

 Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
-Le sous-cycle **1.3.2** produira le **rapport** de veille (hors périmètre du présent cycle).
+Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A** uniquement.

 ---

@@ -157,6 +161,9 @@ Une absence de preuve ne doit **jamais** être transformée en règle.

 **Sources candidates non retenues dans ce registre initial faute de vérification stable :** pages ACPR profondes (HTTP 403/404 selon chemins) ; ADEME (challenge bot) ; Légifrance (challenge Cloudflare au moment de la consultation). Elles restent **à reprendre** en 1.3.2 avec accès navigateur interactif si nécessaire.

+
+**Enrichissement 1.3.2-A :** sources S21–S31 ajoutées en §14.11 (CNIL assurance profond, ACPR 2024-R-03, EUR-Lex IDD/RGPD). Les entrées S01–S20 du registre 1.3.1 restent valides.
+
 **Niveau 3 (éditeurs) :** non peuplé dans 1.3.1 — à ouvrir lors de la veille technologique détaillée des outils candidats, sans sélection.

 ---
@@ -274,21 +281,204 @@ Règle pédagogique tracée uniquement :

 ---

-## 13. Synthèse 1.3.1
+
+---
+
+## 14. 1.3.2-A — Réglementation assurance & données personnelles
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | **AWAITING REVIEW** |
+| **Date de recherche** | 2026-09-29 |
+| **Transverse** | RGPD / conformité (activé) |
+| **Sécurité / RSSI autonome** | **NON** — frontière stricte avec 1.3.2-B |
+| **Nature** | Veille / analyse de cadrage sourcée — **pas** avis juridique ; **pas** conformité certifiée |
+
+### 14.1 Périmètre et méthode
+
+**Périmètre fonctionnel utilisé (1.1 / 1.2 uniquement) :** prospects ; clients ; contrats ; TPE/PME ; particuliers ; prospection ; devis ; relances ; RDV ; compréhension du besoin ; conseil / recommandation personnalisée ; souscription ; renouvellement / résiliation ; documents ; espace sécurisé documentaire ; historique ; espace client ; sinistres ; dashboard / KPI ; canaux RDV physique / Visio / téléphone / email / espace client.
+
+**Non inventé :** paiement ; signature électronique ; enregistrement d’appels ; API compagnies ; données bancaires ; données médicales stockées ; scoring / profilage automatisé ; antifraude — sauf mention **TO VERIFY** si une source montre une pertinence potentielle.
+
+**Méthode :** ouverture réelle de sources N1 (CNIL, ACPR, EIOPA, EUR-Lex) ; distinction fait réglementaire / implication projet / applicability ; interdiction moteur → conclusion.
+
+### 14.2 Synthèse exécutive bornée
+
+1. **IDD art. 20 (EUR-Lex)** : avant conclusion, le distributeur doit spécifier exigences et besoins du client, fournir une information compréhensible, et proposer un contrat **cohérent** avec ces besoins ; si conseil, une **recommandation personnalisée** motivée est requise → le CRM doit pouvoir **soutenir** (pas « décider ») le recueil / la traçabilité du parcours de conseil — **LIKELY** pour un parcours courtage digitalisé.
+2. **IDD art. 17 (EUR-Lex)** : agir honnêtement, loyalement et professionnellement dans l’intérêt du client → principe de conduite à transmettre à la conception du parcours — **LIKELY**.
+3. **ACPR reco. 2024-R-03** (+ article ACPR 2025) : formaliser le recueil d’informations pour devoir de conseil / recommandation personnalisée ; étendre le conseil dans la durée (dont dommages / prévoyance) ; entrée en application **31/12/2025** → le CRM a un intérêt fort à conserver l’historique besoins / conseils / échanges — **LIKELY** (applicabilité exacte au cabinet fictif **TO VERIFY** selon statut distributeur).
+4. **CNIL assurance — finalités** : distinguer (i) passation / gestion / exécution des contrats et (ii) prospection ; chaque finalité exige une base légale propre — bases finales du projet = **TO VERIFY**.
+5. **CNIL — minimisation** : ne traiter que données pertinentes / nécessaires ; exemple : localisation du bien non nécessaire pour une complémentaire santé — le modèle de données futur doit rester **minimal** — **CONFIRMED** (principe) / champs exacts **TO VERIFY**.
+6. **CNIL — conservation assurance** : prospect sans contrat ≈ **3 ans** depuis collecte / dernier contact prospect ; données utiles à défense de droits ≈ **5 ans** ; contrat conclu → délais de prescription sectoriels (ex. vie 30 ans dans certains cas) → guidance, **pas** politique finale — **LIKELY** / calibrage contrat par contrat **TO VERIFY**.
+7. **Contrat « santé » ≠ donnée de santé** : le brief cite des **catégories de contrats** (auto, habitation, santé, prévoyance) sans prouver le stockage de données concernant la santé → **HEALTH DATA PROCESSING = TO VERIFY** (voir §14.7).
+8. **RGPD art. 9 / CNIL** : données de santé = catégorie particulière ; traitement en principe interdit hors dérogations (protection sociale / consentement explicite selon cas) → si le CRM devait en traiter un jour, contraintes renforcées — **NON confirmé** dans le périmètre actuel.
+9. **Transparence / droits (CNIL + RGPD ch. III)** : information concise et accessible ; droits d’accès, rectification, opposition, etc. → à prévoir pour espace client / parcours — **LIKELY** sans UI décidée.
+10. **AIPD** : obligatoire si risque élevé (liste CNIL ou ≥2 critères G29) ; traitements réels non encore définis → **AIPD = TO VERIFY** — **ne pas** écrire REQUIRED.
+
+### 14.3 Distribution / devoir de conseil
+
+| Point | Fait réglementaire | Source | Applicability projet | Impact potentiel CRM | Statut |
+|-------|-------------------|--------|----------------------|----------------------|--------|
+| Exigences et besoins | Avant conclusion, spécifier demands & needs sur la base d’informations obtenues du client | IDD art. 20 §1 — EUR-Lex CELEX:32016L0097 | Parcours devis → RDV → proposition → souscription | Soutenir saisie / conservation des informations de besoin | LIKELY |
+| Cohérence produit | Tout contrat proposé doit être cohérent avec demands & needs | IDD art. 20 §1 | Conseil personnalisé BMC / 1.2 | Traçabilité du lien besoin → proposition | LIKELY |
+| Recommandation personnalisée | Si conseil fourni : recommandation personnalisée expliquant pourquoi le produit convient | IDD art. 20 §1 | « Conseil personnalisé » BMC | Enregistrer motivation / justification de conseil (niveau métier) | LIKELY |
+| Gradation | Détails modulés selon complexité produit et type de client | IDD art. 20 §2 | Segments TPE/PME / particuliers | Parcours / questionnaires différenciés possibles — **non conçus ici** | TO VERIFY |
+| Conduite générale | Agir honestly, fairly, professionally ; best interests of customers | IDD art. 17 | Tous canaux validés | Gouvernance du parcours digital / humain | LIKELY |
+| Information précontractuelle | Information claire avant signature ; IPID pour non-vie (cadre IDD / EIOPA) | EIOPA IDD page ; IDD | Souscription | Mettre à disposition / tracer remise d’informations — modalités **TO VERIFY** | LIKELY |
+| Recueil formalisé (FR) | Recommandation ACPR sur recueil d’informations client pour devoir de conseil / reco. personnalisée | ACPR 2024-R-03 (21/11/2024) ; article ACPR 22/09/2025 | Distributeurs FR | Formaliser questionnaires / historique / preuves de conseil | LIKELY |
+| Conseil dans la durée | ACPR recommande conseil périodique aussi pour dommages / prévoyance ; entrée en application 31/12/2025 | ACPR article 2025 | Renouvellement / vie du contrat | Rappels / revue besoins / historique | LIKELY / calendrier exact TO VERIFY |
+| Traçabilité documentaire | Nécessaire pour démontrer le parcours de conseil (principe issu des obligations d’information / reco.) | IDD + ACPR (lecture combinée) | Documents + historique + espace sécurisé | Conserver échanges / pièces / besoins | LIKELY |
+| Digitalisation | ACPR : quel que soit le canal de vente (ex. préférences durabilité assurance-vie) | ACPR article 2025 | Canaux Visio / email / espace client | Même exigence de qualité de conseil en digital | LIKELY |
+| Support durable / com. | Non approfondi ici hors besoins sourcés IDD/ACPR | — | — | Hors scope détaillé 1.3.2-A | NOT APPLICABLE (pour l’instant) |
+
+**Limite :** ACPR 2024-R-03 est une **recommandation** de superviseur (bonnes pratiques / attentes de Place), distincte du texte IDD. Le statut juridique exact pour le cabinet fictif reste **TO VERIFY** (ORIAS / catégorie d’intermédiaire).
+
+### 14.4 Cartographie des catégories de données (pas un modèle de données)
+
+| Domaine | Donnée / catégorie identifiable | Source projet | Donnée personnelle ? | Catégorie particulière potentielle ? | Finalité probable issue du besoin | Statut | Question restante |
+|---------|--------------------------------|---------------|----------------------|--------------------------------------|-----------------------------------|--------|-------------------|
+| Prospect | Identité / coordonnées de contact | 1.1 / 1.2 (prise de contact, devis, RDV) | Oui (si personne physique) | Non a priori | Entrée en relation / devis / RDV | LIKELY | Champs exacts NON DÉCIDÉS |
+| Prospect | Contenu devis / besoin initial | 1.1 / 1.2 | Oui si rattaché à une personne | Possible selon produit (santé) — **TO VERIFY** | Préparation devis / conseil | LIKELY | Contenu devis santé ? |
+| Prospect | Historique d’échanges | 1.1 / 1.2 / BMC transparence | Oui | Non a priori | Continuité / traçabilité relation | LIKELY | Canaux de capture |
+| Client | Identité / coordonnées | 1.1 / 1.2 | Oui | Non a priori | Gestion relation / contrat | LIKELY | — |
+| Client | Données de contrat (type, garanties, échéances) | 1.1 / 1.2 / BMC | Oui si personne physique | Le **type** « santé » ≠ donnée de santé | Gestion / renouvellement / conseil | LIKELY | Périmètre champs contrat |
+| Client | Documents administratifs | 1.1 / 1.2 / espace sécurisé | Oui souvent | Possible (Pièces) — **TO VERIFY** | Gestion documentaire | LIKELY | Types de pièces |
+| Client | Historique échanges / contrats | BMC | Oui | Non a priori | Transparence / confiance | LIKELY | Accès espace client |
+| Sinistre | Infos déclaration / suivi | 1.1 / 1.2 (niveau brief) | Oui | Possible selon sinistre — **TO VERIFY** | Suivi sinistre | LIKELY | Granularité non définie |
+| Pilotage | KPI (conversion, panier, satisfaction) | 1.1 / 1.2 | Agrégats : pas nécessairement ; individuels : oui | Non a priori | Pilotage commercial | TO VERIFY | Agrégation vs individuel |
+| Segments | TPE/PME / particulier | BMC groupe | Particulier : oui ; TPE/PME : selon personnes | Non a priori | Segmentation relationnelle | LIKELY | Statut PME vs personne |
+
+### 14.5 Principes RGPD pertinents à transmettre
+
+| Principe | Source officielle | Applicability | Impact futur | Décision encore nécessaire |
+|----------|-------------------|---------------|--------------|----------------------------|
+| Licéité / loyauté / transparence | RGPD art. 5 ; CNIL information | LIKELY | Mentions d’information ; UX transparence | Rédaction mentions ; responsable de traitement |
+| Finalités déterminées | RGPD art. 5 ; CNIL bases légales assurance | LIKELY | Séparer finalités contrat vs prospection | Cartographie traitements réelle |
+| Minimisation | RGPD art. 5 ; CNIL minimisation assurance | CONFIRMED (principe) | Limiter champs CRM | Liste de champs |
+| Exactitude | RGPD art. 5 | LIKELY | Mise à jour coordonnées / besoin | Processus de mise à jour |
+| Limitation de conservation | RGPD art. 5 ; CNIL durées assurance | LIKELY | Politique rétention différenciée | Calibrage par finalité / contrat |
+| Intégrité / confidentialité (sécurité appropriée) | RGPD art. 5 + art. 32 | LIKELY (principe) | Exigence de sécurité — **détails → 1.3.2-B** | Mesures techniques |
+| Privacy by design / by default | RGPD art. 25 | LIKELY | Intégrer minimisation dès conception | Architecture future |
+| Sous-traitance | RGPD art. 28 | LIKELY si SaaS / no-code | Contrats / garanties processeur | Choix plateforme (NOT DECIDED) |
+| Droits des personnes | RGPD art. 12–22 ; CNIL droits assurance | LIKELY | Accès / rectification / opposition via process ou espace client | Modalités |
+| Bases légales | RGPD art. 6 ; CNIL grands traitements | **TO VERIFY** | Ne pas figer une base par traitement fictif | Analyse traitement par traitement |
+| Catégories particulières | RGPD art. 9 ; CNIL données de santé assurance | **TO VERIFY** | Si santé : régime renforcé | Preuve projet de traitement |
+
+**Bases légales possibles à étudier (CNIL assurance) — non attribuées définitivement :** contrat (mesures précontractuelles / exécution) ; obligation légale ; intérêt légitime ; consentement (notamment prospection électronique / cas art. 9).
+**Base juridique finale = TO VERIFY.**
+
+### 14.6 Conservation — guidance / candidats de contrainte
+
+Source prioritaire : CNIL — *Les durées de conservation des données du secteur de l’assurance* (16/07/2021).
+
+| Situation | Guidance CNIL (synthèse) | Applicability CRM | Statut |
+|-----------|--------------------------|-------------------|--------|
+| Prospect / pas de contrat (prospection) | Ne pas conserver au-delà de **3 ans** à compter de la collecte ou du **dernier contact émanant du prospect** | Parcours prospect CRM | LIKELY |
+| Données pour constatation / défense / exercice de droits | Jusqu’à **5 ans** (prescription de droit commun, selon CNIL) | Contentieux potentiel | LIKELY |
+| Contrat conclu | Délais de **prescription sectoriels** (ex. assurance-vie : jusqu’à 30 ans dans certains cas cités) | Vie du contrat / archives | TO VERIFY (selon types de contrats réellement gérés) |
+| Fraude (si un jour) | Règles spécifiques (6 mois qualification alerte ; 5 ans si pertinente) | **Hors périmètre actuel** | NOT APPLICABLE pour l’instant |
+
+**Ce n’est PAS une politique de rétention finale.** Les durées dépendent du type de contrat, de la prescription et de la finalité.
+
+### 14.7 Données de santé / catégories particulières
+
+1. **Définition (RGPD, recital / cadre CNIL)** : données concernant la santé = informations révélant l’état de santé physique ou mentale passé, présent ou futur d’une personne (EUR-Lex GDPR ; traitement encadré art. 9).
+2. **Protection spécifique** : traitement en principe **interdit**, sous dérogations (CNIL : protection sociale ; consentement explicite art. 9.2.a selon cas ; défense de droits, etc.).
+3. **Distinction critique :**
+   - **TYPE DE CONTRAT « SANTÉ »** (catégorie produit du brief) ;
+   - **≠ DONNÉE CONCERNANT LA SANTÉ** (catégorie particulière RGPD).
+4. **Situations potentielles assurance (CNIL)** : complémentaire santé / prévoyance / emprunteur peuvent impliquer des données de santé **si** le traitement le nécessite ; la CNIL appelle à vigilance NIR / santé.
+5. **État du projet 1.1 / 1.2 :** aucun champ, pièce, questionnaire médical, ni traitement de donnée de santé n’est décrit comme stocké dans le CRM.
+
+**Verdict sous-sujet :**
+
+### HEALTH DATA PROCESSING = TO VERIFY
+
+Forme équivalente retenue : **NO EVIDENCE OF HEALTH DATA PROCESSING IN CURRENT PROJECT SCOPE** — la présence future reste **TO VERIFY** dès que le contenu réel des dossiers « santé / prévoyance / sinistres » sera précisé.
+
+### 14.8 AIPD / risques élevés
+
+| Élément | Contenu | Statut |
+|---------|---------|--------|
+| Cadre | RGPD art. 35 ; CNIL page AIPD (18/10/2017) | — |
+| Quand | Traitement susceptible d’engendrer un **risque élevé** : liste CNIL **ou** ≥2 critères G29 (scoring/profilage, décision auto, données sensibles, large échelle, etc.) | — |
+| Projet actuel | Traitements détaillés, volumes, technologies, profilage non définis | — |
+| Conclusion | **Ne pas écrire AIPD REQUIRED** | **TO VERIFY** |
+
+### 14.9 Tableau contraintes / impacts futurs
+
+| ID | Constat sourcé | Applicability | Impact potentiel CRM | Étape future concernée | Statut |
+|----|----------------|---------------|----------------------|------------------------|--------|
+| C-A01 | Demands & needs + cohérence produit (IDD art. 20) | LIKELY | Capacité à recueillir / historiser le besoin et le rattacher à la proposition | Conception fonctionnelle ; UX/UI | OPEN |
+| C-A02 | Recommandation personnalisée motivée si conseil (IDD art. 20) | LIKELY | Tracer justification de conseil | Conception fonctionnelle | OPEN |
+| C-A03 | Formalisation recueil + conseil dans la durée (ACPR 2024-R-03 / 2025) | LIKELY | Rappels périodiques ; revue besoins ; preuves | Conception ; delivery | OPEN |
+| C-A04 | Finalités distinctes contrat vs prospection (CNIL) | LIKELY | Séparer traitements / bases / oppositions | Conception ; architecture fonctionnelle | OPEN |
+| C-A05 | Minimisation (CNIL / RGPD art. 5) | CONFIRMED (principe) | Éviter sur-collecte | Conception ; architecture données | OPEN |
+| C-A06 | Conservation prospect ~3 ans / droits ~5 ans / contrat selon prescription (CNIL) | LIKELY | Règles de rétention différenciées | Architecture ; delivery ; QA | OPEN |
+| C-A07 | Transparence + droits personnes (RGPD / CNIL) | LIKELY | Information + exercice des droits | UX/UI ; delivery | OPEN |
+| C-A08 | Privacy by design (RGPD art. 25) | LIKELY | Intégrer minimisation / droits dès design | Architecture ; UX/UI | OPEN |
+| C-A09 | Sous-traitance (RGPD art. 28) si éditeur SaaS | LIKELY | DPA / garanties processeur | Architecture technique ; delivery | OPEN |
+| C-A10 | Sécurité appropriée (RGPD art. 32) — principe | LIKELY | Exigence de sécurité | **Sécurité/RSSI → 1.3.2-B** | OPEN — handoff B |
+| C-A11 | Données de santé / art. 9 | TO VERIFY | Régime renforcé **si** confirmation projet | Conception ; Sécurité/RSSI | OPEN |
+| C-A12 | AIPD si risque élevé | TO VERIFY | Analyse avant mise en œuvre le cas échéant | Conception ; Sécurité/RSSI | OPEN |
+
+### 14.10 Questions TO VERIFY (1.3.2-A)
+
+1. Statut exact du cabinet fictif comme distributeur / inscription ORIAS.
+2. Types de contrats réellement proposés et pièces demandées (surtout santé / prévoyance).
+3. Présence ou non de **données concernant la santé** dans les dossiers CRM.
+4. Bases légales retenues traitement par traitement.
+5. Volume / échelle des traitements (critère AIPD).
+6. Usage ou non de profilage / décision automatisée.
+7. Sous-traitants techniques futurs (stack NOT DECIDED).
+8. Politique de conservation fine par famille de contrat.
+9. Modalités d’exercice des droits via espace client.
+10. Périmètre exact « conseil dans la durée » applicable aux produits du cas.
+
+### 14.11 Sources exploitées (1.3.2-A)
+
+| ID | Thème | Organisme | Titre / page | Lien | Date (si dispo) | Consultation | Pertinence | Statut |
+|----|-------|-----------|--------------|------|-----------------|--------------|------------|--------|
+| S21 | Assurance / RGPD | CNIL | Le secteur de l’assurance | https://www.cnil.fr/fr/assurance | — | 2026-09-29 | Hub sectoriel | ACTIVE |
+| S22 | Conservation | CNIL | Durées de conservation — secteur assurance | https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees-du-secteur-de-lassurance | 16/07/2021 | 2026-09-29 | Guidance rétention | ACTIVE |
+| S23 | Minimisation / santé | CNIL | Minimisation, NIR et données de santé | https://www.cnil.fr/fr/le-principe-de-minimisation-et-les-traitements-du-nir-et-des-donnees-de-sante-dans-le-secteur-de | 16/07/2021 | 2026-09-29 | Art. 9 / minimisation | ACTIVE |
+| S24 | Bases légales | CNIL | Grands traitements et bases légales | https://www.cnil.fr/fr/les-grands-traitements-du-secteur-de-lassurance-et-leurs-bases-legales | 16/07/2021 | 2026-09-29 | Finalités / bases | ACTIVE |
+| S25 | Droits / profilage | CNIL | Droit des personnes et profilage | https://www.cnil.fr/fr/droit-des-personnes-et-profilage-les-specificites-du-secteur-de-lassurance | 16/07/2021 | 2026-09-29 | Transparence / droits | ACTIVE |
+| S26 | AIPD | CNIL | Ce qu’il faut savoir sur l’AIPD | https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd | 18/10/2017 | 2026-09-29 | Applicability AIPD | ACTIVE |
+| S27 | Devoir de conseil | ACPR | Publication reco. devoir de conseil | https://acpr.banque-france.fr/fr/actualites/publication-de-la-recommandation-sur-le-devoir-de-conseil-en-assurance | 22/09/2025 (maj 25/09/2026) | 2026-09-29 | Conseil dans la durée / calendrier | ACTIVE |
+| S28 | Devoir de conseil | ACPR | Recommandation 2024-R-03 | https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/recommandation-2024-r-03-du-21-novembre-2024-sur-le-recueil-des-informations-relatives-au-client | 21/11/2024 (maj 24/09/2026) | 2026-09-29 | Recueil infos client | ACTIVE |
+| S29 | IDD | EIOPA | Insurance Distribution Directive | https://www.eiopa.europa.eu/browse/regulation-and-policy/insurance-distribution-directive-idd_en | — | 2026-09-29 | Cadre distribution UE | ACTIVE |
+| S30 | IDD texte | EUR-Lex | Directive (UE) 2016/97 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L0097 | 2016 | 2026-09-29 | Art. 17 / 20 | ACTIVE |
+| S31 | RGPD texte | EUR-Lex | Règlement (UE) 2016/679 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | 2016 | 2026-09-29 | Art. 5, 6, 9, 12–22, 25, 28, 32, 35 | ACTIVE |
+| S03 | Sécurité données (principe) | CNIL | Guide sécurité des données personnelles | https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles | — | 2026-09-29 | Lien principe → 1.3.2-B | ACTIVE (déjà S03) |
+
+### 14.12 Frontière explicite avec 1.3.2-B (Sécurité & résilience)
+
+**Inclus ici (principe RGPD uniquement) :** confidentialité / intégrité comme objectifs ; sécurité appropriée (art. 32) comme contrainte de transmission ; protection documentaire comme besoin métier.
+
+**Exclus / reportés à 1.3.2-B :** threat modeling ; matrice de risques cyber ; IAM détaillé ; chiffrement cible ; MFA ; sauvegarde / PRA / PCA ; durcissement ; évaluation fournisseurs SaaS ; **DORA détaillé**.
+
+### 14.13 Limites / réserves
+
+- Pas d’avis juridique ni de conformité certifiée.
+- Cabinet fictif : taille / statut / produits exacts incomplets.
+- PDF intégral ACPR 2024-R-03 non paraphrasé article par article ; synthèse appuyée sur page officielle + article ACPR 2025.
+- Légifrance non mobilisé (accès technique parfois bloqué) ; droit FR cité via ACPR/CNIL.
+- Aucune stack / architecture / conception SSI.
+
+
+## 13. Synthèse 1.3 (état courant)

 | Point | État |
 |-------|------|
 | **1.3** | OPENED — WORKING WATCH |
-| **1.3.1** | Système de veille établi — AWAITING REVIEW |
-| Axes A–H | Couverture pédagogique complète |
-| Hiérarchie sources N1–N3 | Définie |
-| Registre initial | 20 sources vérifiées (2026-09-29) |
-| Cadence | WORKING — TO BE CONFIRMED BY GROUP |
-| Matrice / questions ouvertes | Établies |
-| **1.3.2** | STRUCTURE ONLY / NOT STARTED |
+| **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
+| **1.3.2** | IN PROGRESS |
+| **1.3.2-A** | REGULATION & DATA — AWAITING REVIEW |
+| **1.3.2-B / C / D** | NOT STARTED |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
 | **1.4** | NOT OPENED |
 | Miro / Notion | NOT MODIFIED |

-Le 1.3 **n’est pas** VALIDATED par ce document.
+Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-A **n’est pas** une conformité RGPD certifiée ni un avis juridique.

```

---

## Validations

| Validation | Résultat |
|------------|----------|
| Git Truth | **PASS** |
| 1.3.1 REVIEW PASS conservé | **PASS** |
| 1.3.2-A ouvert uniquement | **PASS** |
| Sources officielles prioritaires | **PASS** |
| IDD / devoir de conseil sourcé | **PASS** |
| Cartographie données | **PASS** |
| Contrat santé ≠ donnée de santé | **PASS** |
| Health data status | **TO VERIFY** (NO EVIDENCE in current scope) |
| RGPD principes | **PASS** |
| Conservation assurance | **PASS** |
| AIPD applicability | **PASS** (TO VERIFY) |
| Bases légales non inventées | **PASS** |
| Impacts CRM sans conception | **PASS** |
| Frontière RSSI | **PASS** |
| DORA non conclu | **PASS** |
| 1.3 OPENED | **PASS** |
| 1.3.2-B/C/D NOT STARTED | **PASS** |
| 1.4 NOT OPENED | **PASS** |
| Architecture / Stack NOT DECIDED | **PASS** |
| Miro / Notion NOT MODIFIED | **PASS** |
| Exactement 2 fichiers projet | **PASS** |
| git diff --check | **PASS** |
| Commit local | **PASS** |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |

---

## Commit

| Champ | Valeur |
|-------|--------|
| Message | `docs(crm-assurance-courtage): research 1.3.2a regulation and data` |
| SHA | `b2e6fb98dee3cb498e073837c32cc7e75c7d0fa7` |
| Parent | `dabc5c7600cac430ca8e36e5dc84b37d8ffe8394` |

---

## HEAD final / push / PR

| Champ | Valeur |
|-------|--------|
| HEAD final | `b2e6fb98dee3cb498e073837c32cc7e75c7d0fa7` |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| 1.3 | OPENED |
| 1.3.2-A | AWAITING REVIEW |
| 1.3.2-B/C/D | NOT STARTED |
| Architecture / Stack | NOT DECIDED |

---

## Réserves

1. Pas d’avis juridique / conformité certifiée.
2. PDF ACPR 2024-R-03 non paraphrasé ligne à ligne ; synthèse via pages officielles ACPR.
3. Health data / AIPD / bases légales restent TO VERIFY.
4. Détail SSI / DORA hors scope → 1.3.2-B.
5. Légifrance non utilisé (accès technique).

---

## Verdict

**READY FOR CHATGPT REVIEW — CRM 1.3.2-A REGULATION AND DATA RESEARCH COMPLETE**
