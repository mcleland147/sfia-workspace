# ChatGPT Review Pack — CRM 1.3.2-C Accessibilité & numérique responsable

## 0. Identité du cycle

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 01:22:01 CEST |
| **Cycle** | CRM Assurance Courtage — 1.3.2-C Accessibilité & numérique responsable |
| **Typologie** | DOC / accessibility-responsible-digital research |
| **Profil** | **Standard** |
| **Critical** | **NON adopté** |
| **Transverse 1** | Accessibilité |
| **Transverse 2** | GreenOps / sobriété numérique |
| **Justification Standard** | Veille/cadrage uniquement ; aucune cible de conformité engagée ; aucune architecture/stack ; aucun engagement environnemental chiffré ; aucun audit RGAA/RGESN. Critical non implicite. |
| **SFIA Studio Convergence** | N/A |
| **Fake / Real** | N/A |
| **CKC** | `pilots/01-cadrage.md` candidate + sfia-v2.5 §4.1 / §4.16 — experimental guidance, aucune autorité d’exécution |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| Branche | `docs/crm-assurance-courtage-1-3-watch-01` |
| HEAD initial | `154036ca1ce3b356b28cf24fd92178c608e8461e` |
| HEAD final | `b63c5f37610ac290a5dadea93594f75eee26f8b4` |
| origin/main | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| Dirt | `.tmp-sfia-review/**` uniquement |
| Drift CRM vs origin/main | **NONE** |
| Git Truth | **PASS** |

Handoff B connu avant cycle : tip `9fad213c` / blob `5c0a9734`

## 2. Sources SFIA

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` (§4.1, §4.16 GreenOps, §4.16 Accessibilité)
4. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
5. Operating model / guardrails / validation checklist / `scripts/sfia/README.md`
6–9. Doctrine, 01-01, 01-02, 01-03

## 3. État d’entrée → sortie

| Élément | Entrée | Sortie |
|---------|--------|--------|
| 1.3 | OPENED | OPENED — WORKING WATCH |
| 1.3.1 | REVIEW PASS | REVIEW PASS |
| 1.3.2-A | REVIEW PASS | REVIEW PASS |
| 1.3.2-B | REVIEW PASS ChatGPT (handoff Git historique encore AWAITING REVIEW) | **REVIEW PASS — SECURITY & RESILIENCE** (tracé) |
| 1.3.2-C | NOT STARTED | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
| 1.3.2-D | NOT STARTED | NOT STARTED |
| 1.4 | NOT OPENED | NOT OPENED |
| Architecture / Stack | NOT DECIDED | NOT DECIDED |

**Trace B REVIEW PASS :** meta + §15 statut + synthèse §13 + doctrine §11.

**Correction éditoriale B (C-B04) :**
```
| C-B04 | Besoin métier + CNIL F5/F16 | R-B02, R-B04 | LIKELY | Espace client : accès limité aux données autorisées pour l’utilisateur et le périmètre qu’il représente (particulier ou TPE/PME) ; récupération de compte sûre | Conception ; UX/UI ; Architecture | OPEN |
```

## 4. Stratégie recherche C

- Sources N1 ouvertes : RGAA 4.1.2 + champ d’application ; décret 2019-768 ; EAA 2019/882 ; WCAG overview ; RGESN 2024 (hub + PDF + Arcep).
- Distinction obligation / référentiel / bonne pratique.
- Pas d’audit d’écrans ; pas de métriques CO₂ inventées ; pas de sélection d’outil.

## 5. Sources externes → claims

| ID | Claim | Portée |
|----|-------|--------|
| S46–S48 | RGAA courant = **4.1.2** ; DINUM ; WCAG 2.1 A/AA ; RGAA5 en rédaction | OFFICIAL REFERENCE |
| S47/S49 | Obligation FR si public / cas listés / entreprise CA moyen FR ≥ 250 M€ | LEGAL — applicability projet **TO VERIFY** |
| S50 | EAA services listés ; consumer banking = crédit/MiFID/paiements/comptes/e-money (**pas** assurance) ; e-commerce = conclusion contrat consommateur en ligne | Banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** |
| S51 | WCAG 2.x standard W3C ; 2.2 latest encouragement ; RGAA rattache 2.1 | STANDARD / GUIDANCE |
| S52–S54 | RGESN 2024 v2 (2024-05-28) ; 78 critères ; démarches volontaires ; déclaration pour se prévaloir | DESIGN / ECO-CONCEPTION REFERENCE — **pas** RGESN REQUIRED |

## 6. Résultats clés (détail §16)

- **ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY**
- RGAA = ACCESSIBILITY DESIGN REFERENCE
- EAA banking NOT APPLICABLE ; e-commerce TO VERIFY
- FUTURE ACCESSIBILITY DESIGN CONSTRAINTS (A-C01…12)
- ACCESSIBLE DOCUMENT GENERATION = FUTURE REQUIREMENT CANDIDATE
- SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE
- Inclusion multicanal = DESIGN CONSTRAINT CANDIDATE
- **RGESN = DESIGN / ECO-CONCEPTION REFERENCE** (statut QUALIFIED)
- FUTURE TOOL EVALUATION CRITERIA (§16.10)
- Contraintes **C-C01…C-C15**

## 7. Métadonnées 01-03

```markdown
# CRM Assurance Courtage — 1.3 Veille technologique et réglementaire

| Champ | Valeur |
|-------|--------|
| **Statut 1.3** | **OPENED — WORKING WATCH** |
| **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
| **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
| **1.3.2-C** | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
| **1.3.2-D** | **NOT STARTED** |
| **1.1** | VALIDATED |
| **1.2** | VALIDATED (2026-09-28) |
| **1.4** | **NOT OPENED** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |
| **Support canonique** | Git Markdown (équivalent pédagogique à un workspace Notion) |
| **Notion** | Aucune action dans ce cycle |
| **Miro** | Hors scope — non modifié |

**Décision Morris :** 1.3 OPENED ; 1.3.1 établi ; trajectoire 1.3.2 découpée en deep-dives A→E.
Le présent document **n’est pas** une validation globale du 1.3 ni un avis juridique / conformité certifiée.
```

## 8. Doctrine §11 (complète)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED** |
| 1.3 | **OPENED** |
| 1.3.1 | **REVIEW PASS** |
| 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
| 1.3.2-B | **REVIEW PASS — SECURITY & RESILIENCE** |
| Étape actuelle | **1.3.2-C Accessibilité & numérique responsable — AWAITING REVIEW** |
| 1.3.2-D | **NOT STARTED** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revoir 1.3.2-C avant ouverture de 1.3.2-D |

---
```

## 9. Section §16 complète (1.3.2-C)

```markdown
## 16. 1.3.2-C — Accessibilité & numérique responsable

| Champ | Valeur |
|-------|--------|
| **Statut** | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
| **Date de recherche** | 2026-09-29 |
| **Type** | Cadrage — DOC / accessibility-responsible-digital research |
| **Transverses** | Accessibilité ; GreenOps / sobriété numérique (§4.16) |
| **Profil** | **Standard** |
| **Critical** | **NON** — aucune cible de conformité engagée ; aucune architecture / stack ; aucun engagement environnemental chiffré |
| **Nature** | Veille / cadrage — **pas** audit RGAA ; **pas** déclaration d’accessibilité ; **pas** certification WCAG ; **pas** bilan carbone / ACV / GreenOps runtime |

### 16.1 Périmètre et méthode

**Périmètre fonctionnel (1.1 / 1.2) :** interfaces internes (Courtier / Directeur) ; espace client (particulier / TPE-PME) ; formulaires ; contenus ; documents générés ; notifications ; prise de rendez-vous ; dashboard / KPI ; canaux physique / Visio / téléphone / email / espace client.

**Méthode :** sources N1 ouvertes (RGAA officiel, Légifrance / décret 2019-768, EUR-Lex EAA 2019/882, W3C WCAG, RGESN 2024 / Arcep–MiNumEco) ; distinction stricte **obligation juridique** / **référentiel** / **bonne pratique** ; analyse qualitative sans inventer d’écrans ni de scores environnementaux.

**Posture CKC Cadrage :** besoin avant solution ; rendre visibles les inconnues ; ne pas convertir un référentiel en obligation sans preuve ; pas d’écoconception = architecture prématurée.

**Hors scope :** maquettes ; design system ; audit d’écrans ; certification ; bilan carbone ; PUE ; région cloud ; sélection no-code ; ouverture 1.3.2-D / 1.4.

### 16.2 Synthèse exécutive bornée

1. **RÉFÉRENTIEL** — RGAA **4.1.2** (DINUM ; MAJ 2023-04-18) = méthode opérationnelle fondée sur WCAG 2.1 A/AA → **IMPACT** : critères design pour espace client, formulaires, contenus → **STATUT** : ACCESSIBILITY DESIGN REFERENCE
2. **FAIT juridique** — obligation FR (art. 47 loi 2005-102) : organismes publics + entreprises privées au seuil CA moyen France **≥ 250 M€** (3 exercices) → **IMPACT** : CA cabinet fictif **inconnu** → **STATUT** : **ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY** (pas « RGAA REQUIRED »)
3. **FAIT UE** — Directive (UE) 2019/882 (EAA) : services listés (dont *consumer banking*, e-commerce) ; *consumer banking* **≠** distribution d’assurance (définitions art. 2) → **IMPACT** : banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** si conclusion de contrats consommateurs en ligne → **STATUT** : EAA overall **TO VERIFY** / banking **NOT APPLICABLE**
4. **STANDARD** — WCAG 2.1 (référence RGAA) / WCAG 2.2 (W3C latest, encouragement) → **IMPACT** : guidance technique ; **pas** obligation FR automatique hors rattachement légal → **STATUT** : STANDARD / GUIDANCE
5. **GOOD PRACTICE** — clavier, structure, contraste, formulaires/erreurs, focus, alternatives, documents, auth accessible, dashboard → **IMPACT** : FUTURE ACCESSIBILITY DESIGN CONSTRAINTS → **STATUT** : C-C01… candidates
6. **FAIT métier** — BMC multicanal (physique, Visio, téléphone, email, espace client) → **IMPACT** : digitalisation **ne doit pas** être le seul chemin d’accès au service → **STATUT** : INCLUSION / MULTICHANNEL DESIGN CONSTRAINT
7. **RÉFÉRENTIEL** — RGESN **version 2024** (v2, 2024-05-28 ; Arcep/Arcom + ADEME ; loi REEN art. 25) = base de **démarches volontaires** d’écoconception → **IMPACT** : guide sobriété CRM → **STATUT** : **RGESN = DESIGN / ECO-CONCEPTION REFERENCE** (pas « RGESN REQUIRED » sans preuve)
8. **GOOD PRACTICE** — utilité fonctionnelle, parcours simples, données/traitements proportionnés, interfaces légères, réversibilité → **IMPACT** : leviers cadrage sans métriques fictives → **STATUT** : RESPONSIBLE DIGITAL CONSTRAINTS
9. **CHECKLIST** — critères accessibilité + écoconception pour évaluer futurs outils no-code/SaaS → **IMPACT** : réutiliser en **1.3.2-D** → **STATUT** : FUTURE TOOL EVALUATION CRITERIA (outil NOT SELECTED)
10. **LIMITE** — architecture / volumes / plateforme **inconnus** → **IMPACT** : pas de bilan carbone, pas de cible CO₂, pas de GreenOps runtime → **STATUT** : hypothèses / questions uniquement

### 16.3 Applicabilité juridique accessibilité

| Sujet | Source | Nature | Applicability | Impact CRM | Étape future | Statut |
|-------|--------|--------|---------------|------------|--------------|--------|
| Obligation accessibilité services en ligne (champ FR) | Loi 2005-102 art. 47 ; décret 2019-768 ; page RGAA champ d’application | LEGAL REQUIREMENT (si organisme dans le champ) | **TO VERIFY** (CA / statut juridique cabinet inconnus) | Déterminer si déclaration / conformité légale s’imposent | Conformité futur ; Morris | OPEN |
| Seuil entreprise privée 250 M€ CA moyen FR | Décret 2019-768 ; RGAA obligations | LEGAL REQUIREMENT (seuil) | **TO VERIFY** | Si CA < seuil et hors autres cas → obligation art. 47 **probablement** hors champ — **non démontré** ici | Conformité | OPEN — no false NOT APPLICABLE |
| RGAA comme méthode technique | DINUM RGAA 4.1.2 | OFFICIAL REFERENCE | LIKELY (référence de conception) même si obligation TO VERIFY | Critères opérationnels UX/QA | UX/UI ; QA ; conception | OPEN |
| EAA — consumer banking | Dir. 2019/882 art. 2 (liste crédit, MiFID, paiements, comptes, e-money) | LEGAL REQUIREMENT (si service listé) | **NOT APPLICABLE** au courtage assurance *en tant que* banking listé | Ne pas assimiler assurance = banque | — | QUALIFIED |
| EAA — e-commerce | Dir. 2019/882 art. 2(30) (service à distance visant conclusion contrat consommateur) | LEGAL REQUIREMENT (si service = e-commerce) | **TO VERIFY** | Dépend de la nature exacte de l’espace client / souscription en ligne | Conception ; conformité | OPEN |
| EAA — microentreprises (exemption services) | Dir. 2019/882 art. 4(5) / recitals | LEGAL REQUIREMENT (exemption) | **TO VERIFY** (effectif/CA/bilan inconnus) | Si micro → exemption possible si EAA applicable | Conformité | OPEN |
| WCAG 2.1 A/AA | W3C ; renvoi RGAA / entreprises 4° | STANDARD / GUIDANCE | LIKELY as design baseline | Critères techniques | UX/UI ; QA | OPEN |
| Déclaration d’accessibilité | Cadre FR si assujetti | LEGAL REQUIREMENT (si assujetti) | **TO VERIFY** | Ne pas produire de déclaration dans ce cycle | Conformité futur | NOT PRODUCED |

### ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY

**Ne pas écrire :** RGAA REQUIRED / EAA REQUIRED / ACCESSIBILITY DECLARATION REQUIRED — sans taille / nature de service établies.

### 16.4 Référentiels et principes accessibilité

**RGAA 4.1.2 (vérifié 2026-09-29) :** version courante du référentiel DINUM ; 106 critères ; aligné WCAG 2.1 A/AA / EN 301 549 V2.1.2 ; RGAA 5 en rédaction (publication prévue fin 2026) — **ne pas suspendre** les travaux d’accessibilité.

**Domaines d’analyse (contraintes de conception futures — pas audit) :**

| ID | Domaine | Principe à transmettre | Statut |
|----|---------|------------------------|--------|
| A-C01 | Navigation clavier | Toutes fonctions utilisables au clavier | FUTURE ACCESSIBILITY DESIGN CONSTRAINT |
| A-C02 | Structure / titres / landmarks | Structure sémantique (titres, régions) | idem |
| A-C03 | Contraste / non-couleur seule | Info non portée uniquement par la couleur ; contraste suffisant | idem |
| A-C04 | Formulaires / labels / erreurs | Labels associés ; messages d’erreur compréhensibles ; aide | idem |
| A-C05 | Focus visible | Indicateur de focus perceptible | idem |
| A-C06 | Alternatives textuelles | Images / icônes / non-texte | idem |
| A-C07 | Contenu compréhensible | Langage clair lorsque pertinent (conseil / devis) | idem |
| A-C08 | Documents téléchargeables | Voir §16.6 | ACCESSIBLE DOCUMENT GENERATION = CANDIDATE |
| A-C09 | Auth / récupération compte | Voir §16.5 — SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE | CONSTRAINT CANDIDATE |
| A-C10 | Dashboard / graphiques / KPI | Alternatives textuelles / données tabulaires ; pas d’info couleur seule | FUTURE CONSTRAINT |
| A-C11 | Responsive / zoom / reflow | Contenu utilisable avec zoom / différentes largeurs (réf. WCAG/RGAA) | FUTURE CONSTRAINT |
| A-C12 | Technologies d’assistance | Compatibilité raisonnable (API accessibilité des composants) | FUTURE CONSTRAINT — stack NOT DECIDED |

### 16.5 Impacts sur les parcours CRM

| Parcours / surface | Implications candidates | Étape future |
|--------------------|-------------------------|--------------|
| Espace client | Navigation, formulaires, documents, auth accessibles ; contenu clair | UX/UI ; QA |
| Formulaires (devis, RDV, besoins) | Labels, erreurs, ordre de tabulation, délais non punitifs | Conception ; UX/UI |
| Rendez-vous | Parcours digital **complété** par téléphone / physique / Visio | Conception fonctionnelle |
| Devis / conseil | Contenu compréhensible ; documents accessibles | Conception ; delivery |
| Dashboard / KPI | Graphiques avec alternative ; contrastes | UX/UI ; QA |
| Notifications (email / in-app) | Messages clairs ; ne pas dépendre d’un seul canal | Conception ; RUN |
| Auth / MFA / récupération | Alternatives / canaux de secours ; pas de méthode unique inaccessible ; délais raisonnables | Conception ; Sécurité/RSSI (sans modifier B) |

**SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE** — contrainte transverse : les contrôles candidats de 1.3.2-B (MFA, récupération de compte) devront être conçus pour rester utilisables ; **sans** choisir techno ni affaiblir les exigences sécurité.

### 16.6 Documents numériques et contenus

Le brief prévoit génération / envoi de documents (devis, administratifs, contrats…).

**Enjeux candidats :** structure (titres) ; texte exploitable (pas image seule du texte) ; tableaux lisibles ; alternatives si graphiques ; PDF accessible **si** format PDF retenu.

### ACCESSIBLE DOCUMENT GENERATION = FUTURE REQUIREMENT CANDIDATE

**Non décidé :** format document ; générateur ; outil PDF.

### 16.7 Inclusion numérique / multicanal

**Risque :** parcours **trop exclusivement digital** → exclusion (capacités, équipements, aisance numérique, situations temporaires).

**Levier validé BMC :** pluralité de canaux — RDV physique, Visio, téléphone, email, espace client — peut soutenir **continuité / inclusion** sans décider le détail des parcours.

**Principes candidats :**
- ne pas rendre l’espace client le **seul** moyen d’accéder aux documents / suivi ;
- prévoir bascule humaine (téléphone / RDV) pour étapes critiques ;
- éviter personas handicap inventés / faux résultats d’entretien.

**Statut :** INCLUSION / MULTICHANNEL = DESIGN CONSTRAINT CANDIDATE (parcours détaillés NOT DESIGNED).

### 16.8 Référentiel écoconception / statut

| Élément | Valeur vérifiée |
|---------|-----------------|
| Référentiel | **RGESN** — Référentiel général d’écoconception des services numériques |
| Version | **2024** (Version 2 ; dernière MAJ **28 mai 2024**) |
| Gouvernance | Arcep & Arcom, en lien avec ADEME (mandat loi REEN art. 25) ; héritage MiNumEco / DINUM 2022 |
| Contenu | **78** critères / fiches pratiques |
| Statut juridique pour ce projet | **Référentiel / guide de démarches volontaires** — socle de bonnes pratiques ; déclaration d’écoconception = **prérequis pour se prévaloir** de l’application du référentiel — **pas** démontré comme obligation générique de conformité pour le cabinet fictif |

### RGESN = DESIGN / ECO-CONCEPTION REFERENCE

**Ne pas écrire :** RGESN REQUIRED / RGESN COMPLIANT.

GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, questions — **pas** métriques runtime.

### 16.9 Leviers de sobriété pertinents pour le CRM

| ID | Axe | Leviers cadrage (sans quantification) | Dépend architecture / plateforme ? |
|----|-----|----------------------------------------|-------------------------------------|
| E-C01 | Utilité fonctionnelle | Éviter fonctionnalités sans valeur métier démontrée | Non (cadrage) |
| E-C02 | Parcours simples | Réduire étapes inutiles (devis, RDV, espace client) | Partiel |
| E-C03 | Données / conservation | Limiter collecte & conservation inutiles (lien A, sans rouvrir) | Partiel |
| E-C04 | Traitements / automatisations | Automatiser seulement tâches à valeur démontrée | Partiel |
| E-C05 | Interfaces | Limiter complexité UI / poids pages | Oui (outil) |
| E-C06 | Médias | Éviter médias lourds non nécessaires | Oui |
| E-C07 | Requêtes réseau | Critère futur d’évaluation outil | Oui |
| E-C08 | Services tiers | Minimiser dépendances inutiles | Oui |
| E-C09 | Volume stocké | Historique « utile » vs rétention maximale | Partiel |
| E-C10 | Maintenabilité / réversibilité | Export, sortie, durée de vie service | Oui |
| E-C11 | Terminaux / obsolescence | Compatibilité équipements plus anciens (RGESN) | Oui |
| E-C12 | Mesure future | Suivi critères environnementaux **plus tard** si engagement | Oui — **pas** de métrique inventée ici |

**Questions projet (design / responsible digital — pas décisions) :**
1. Centralisation : réduit-elle les doublons sans sur-collecte ?
2. Historique : quel niveau est réellement utile (aligné conservation A) ?
3. Génération documentaire : éviter duplications / stockage inutile ?
4. Automatisations : uniquement valeur métier démontrée ?
5. Dashboard : KPI réellement utiles, pas surdimensionné ?
6. Espace client : complexité limitée au besoin utilisateur réel ?

**Interdit ici :** gCO₂eq, PUE, score environnemental fictif, région cloud, autoscaling.

### 16.10 Critères futurs no-code / SaaS

**FUTURE TOOL EVALUATION CRITERIA** — réutiliser en **1.3.2-D** — **sans** scorer ni sélectionner d’éditeur.

**Accessibilité :**
- interfaces / HTML accessibles ou composants accessibles ;
- navigation clavier / focus visible ;
- labels formulaires / gestion d’erreurs ;
- contraste / thèmes ;
- possibilité d’ajouter attributs ARIA / sémantique nécessaires ;
- documents générés accessibles (ou export structuré) ;
- limites de personnalisation accessibilité documentées.

**Numérique responsable :**
- maîtrise poids pages / assets ;
- optimisation ressources ;
- contrôle dépendances tierces ;
- maîtrise stockage / cycle de vie données ;
- maîtrise requêtes ;
- export / réversibilité ;
- capacité à désactiver fonctionnalités inutiles ;
- documentation / transparence environnementale éditeur **si disponible** (non obligatoire inventée) ;
- mesures / déclarations pertinentes **si** revendiquées.

**Aucun outil évalué. Stack = NOT DECIDED.**

### 16.11 Contraintes / recommandations à transmettre

| ID | Source / constat | Nature | Applicability | Impact CRM | Étape future | Statut |
|----|------------------|--------|---------------|------------|--------------|--------|
| C-C01 | RGAA / WCAG — clavier, focus | OFFICIAL REFERENCE / STANDARD | LIKELY (design) | Navigation clavier + focus visible | UX/UI ; QA | OPEN |
| C-C02 | RGAA / WCAG — formulaires | idem | LIKELY | Labels, aide, erreurs compréhensibles | Conception ; UX/UI ; QA | OPEN |
| C-C03 | RGAA / WCAG — contraste / structure | idem | LIKELY | Contraste ; titres ; info non-couleur seule | UX/UI ; QA | OPEN |
| C-C04 | RGAA docs / bonne pratique | GOOD PRACTICE | LIKELY | Génération documents accessibles | Delivery ; QA | OPEN — format NOT DECIDED |
| C-C05 | WCAG + lien B (MFA candidate) | GOOD PRACTICE | LIKELY | Auth / récupération accessibles ; SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE | Conception ; Sécurité/RSSI ; UX | OPEN — techno NOT DECIDED |
| C-C06 | BMC multicanal + inclusion | GOOD PRACTICE | LIKELY | Ne pas digitaliser exclusivement ; conserver canaux humains | Conception fonctionnelle | OPEN |
| C-C07 | RGESN — utilité / parcours | DESIGN / ECO REFERENCE | LIKELY (volontaire) | Sobriété fonctionnelle ; KPI / features utiles | Conception ; UX/UI | OPEN |
| C-C08 | RGESN — données / traitements | DESIGN / ECO REFERENCE | LIKELY | Limitation traitements / automatisations inutiles | Conception ; architecture futur | OPEN |
| C-C09 | RGESN — interfaces / ressources | DESIGN / ECO REFERENCE | CONTEXT DEPENDENT | Poids UI / médias / requêtes = critères futurs | Architecture ; 1.3.2-D | OPEN |
| C-C10 | RGESN + héritage A conservation | DESIGN / ECO REFERENCE | LIKELY | Stockage / historique proportionnés | Conception ; données | OPEN |
| C-C11 | RGESN — réversibilité / durée de vie | DESIGN / ECO REFERENCE | LIKELY | Export, sortie, maintenabilité | Architecture ; 1.3.2-D | OPEN |
| C-C12 | Checklist §16.10 | GOOD PRACTICE | LIKELY | Critères accessibilité + écoconception outils | **1.3.2-D** | OPEN — outil NOT SELECTED |
| C-C13 | Loi 2005-102 / décret 2019-768 | LEGAL REQUIREMENT | **TO VERIFY** | Trancher assujettissement (CA / statut) avant engagement conformité | Conformité ; Morris | OPEN |
| C-C14 | EAA 2019/882 | LEGAL REQUIREMENT | Banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** | Clarifier nature services numériques consommateurs | Conformité | OPEN |
| C-C15 | Dashboard / graphiques | STANDARD / GUIDANCE | LIKELY | Alternatives textuelles / données accessibles | UX/UI ; QA | OPEN |

### 16.12 Questions TO VERIFY

1. CA moyen France (3 exercices) du cabinet → seuil 250 M€ / obligation art. 47 ?
2. Statut juridique exact (privé « pur » vs délégation / intérêt général) ?
3. L’espace client / souscription conclut-il des **contrats consommateurs en ligne** (EAA e-commerce) ?
4. Effectif / CA / bilan → exemption micro EAA si un jour dans le champ ?
5. Niveau d’ambition accessibilité **produit** (au-delà du légal) — arbitrage Morris futur ?
6. Formats documentaires cibles (PDF / HTML / autre) ?
7. Engagement éventuel de démarche RGESN / déclaration d’écoconception (volontaire) ?
8. Périmètre exact des automatisations / KPI « utiles » ?
9. Compatibilité MFA candidate (B) avec parcours accessibles — design conjoint futur ?
10. Transposition FR détaillée EAA pour le cas d’espèce (si e-commerce confirmé) ?

### 16.13 Sources exploitées

| ID | Thème | Organisme | Titre | URL | Date | Consultation | Pertinence | Nature | Statut |
|----|-------|-----------|-------|-----|------|--------------|------------|--------|--------|
| S46 | RGAA hub | DINUM | Référentiel général d’amélioration de l’accessibilité | https://accessibilite.numerique.gouv.fr/ | MAJ 2023-04-18 (v4) ; note RGAA5 | 2026-09-29 | Version courante 4.1.2 | OFFICIAL REFERENCE | ACTIVE |
| S47 | RGAA obligations | DINUM | Champ d’application — obligations légales | https://accessibilite.numerique.gouv.fr/obligations/champ-application | — | 2026-09-29 | Organismes ; seuil 250 M€ | LEGAL / OFFICIAL | ACTIVE |
| S48 | RGAA PDF | DINUM | RGAA version 4.1.2 | https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.2.pdf | 4.1.2 | 2026-09-29 | Critères ; WCAG 2.1 ; EN 301 549 | OFFICIAL REFERENCE | ACTIVE |
| S49 | Décret accessibilité | Légifrance | Décret n° 2019-768 du 24 juillet 2019 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937/2025-04-22/ | 2019-07-24 | 2026-09-29 | Seuil CA ; normes | LEGAL REQUIREMENT | ACTIVE |
| S50 | EAA | EUR-Lex | Directive (UE) 2019/882 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2019.151.01.0070.01.ENG | 2019-04-17 | 2026-09-29 | Champ services ; définitions banking / e-commerce | LEGAL REQUIREMENT | ACTIVE |
| S51 | WCAG | W3C WAI | WCAG 2 Overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 (2023/2024) ; 2.1 ref RGAA | 2026-09-29 | Standard technique | STANDARD / GUIDANCE | ACTIVE |
| S52 | RGESN hub | MiNumEco / numérique.gouv | RGESN 2024 | https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/ | v2 ; 2024-05-28 | 2026-09-29 | Version ; outils ; REEN | DESIGN / ECO REFERENCE | ACTIVE |
| S53 | RGESN PDF | Arcep/Arcom/ADEME | RGESN version 2024 (PDF) | https://ecoresponsable.numerique.gouv.fr/docs/2024/rgesn-mai2024/referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf | 2024-05 | 2026-09-29 | Démarches volontaires ; 78 critères | DESIGN / ECO REFERENCE | ACTIVE |
| S54 | RGESN fiche | Arcep | Référentiel général écoconception (fiche) | https://www.arcep.fr/mes-demarches-et-services/entreprises/fiches-pratiques/referentiel-general-ecoconception-services-numeriques.html | 2024 | 2026-09-29 | 78 critères ; déclaration | DESIGN / ECO REFERENCE | ACTIVE |

### 16.14 Limites / réserves

- **Pas** d’audit RGAA, déclaration d’accessibilité, certification WCAG, maquette, design system.
- **Pas** de bilan carbone, ACV, GreenOps runtime, métriques CO₂ fictives.
- Architecture / stack / plateforme / hosting = **NOT DECIDED**.
- Applicabilité juridique accessibilité = **TO VERIFY** (données cabinet insuffisantes).
- RGESN = référence d’écoconception, **pas** obligation démontrée pour ce projet.
- EAA banking **NOT APPLICABLE** ; e-commerce **TO VERIFY**.
- **1.3.2-D / E** et **1.4** **non ouverts**.
```

## 10. Synthèse §13 (complète)

```markdown
## 13. Synthèse 1.3 (état courant)

| Point | État |
|-------|------|
| **1.3** | OPENED — WORKING WATCH |
| **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
| **1.3.2** | IN PROGRESS |
| **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
| **1.3.2-C** | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
| **1.3.2-D** | NOT STARTED |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.4** | NOT OPENED |
| Miro / Notion | NOT MODIFIED |

Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-C **n’est pas** un audit d’accessibilité, une conformité RGAA/RGESN certifiée, ni un bilan environnemental.
```

## 11. Diff Git utile (commit HEAD)

```
 .../crm-assurance-courtage-operating-doctrine.md   |   6 +-
 .../01-03-veille-technologique-reglementaire.md    | 256 ++++++++++++++++++++-
 2 files changed, 250 insertions(+), 12 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index fac49558..e93f5e18 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -174,13 +174,13 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.3 | **OPENED** |
 | 1.3.1 | **REVIEW PASS** |
 | 1.3.2-A | **REVIEW PASS — REGULATION & DATA** |
-| Étape actuelle | **1.3.2-B Sécurité & résilience — AWAITING REVIEW** |
-| 1.3.2-C | **NOT STARTED** |
+| 1.3.2-B | **REVIEW PASS — SECURITY & RESILIENCE** |
+| Étape actuelle | **1.3.2-C Accessibilité & numérique responsable — AWAITING REVIEW** |
 | 1.3.2-D | **NOT STARTED** |
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revoir 1.3.2-B avant ouverture de 1.3.2-C |
+| Prochain objectif | Revoir 1.3.2-C avant ouverture de 1.3.2-D |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
index b2df43e8..e9cdfabd 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-03-veille-technologique-reglementaire.md
@@ -6,8 +6,8 @@
 | **1.3.1** | **REVIEW PASS — WATCH SYSTEM ESTABLISHED** |
 | **1.3.2 Rapport de veille** | **IN PROGRESS** (deep-dives bornés ; rapport final non produit) |
 | **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
-| **1.3.2-B** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
-| **1.3.2-C** | **NOT STARTED** |
+| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
+| **1.3.2-C** | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
 | **1.3.2-D** | **NOT STARTED** |
 | **1.1** | VALIDATED |
 | **1.2** | VALIDATED (2026-09-28) |
@@ -35,7 +35,7 @@ La veille technologique et réglementaire vise à identifier, pour le CRM Assura
 **Règle de gouvernance :** la veille **informe** les décisions futures ; elle **ne choisit pas** elle-même la stack ni l’architecture.

 Le sous-cycle **1.3.1** établit le **système** de veille (axes, sources, méthode, registre, matrice).
-Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A** (REVIEW PASS) et **1.3.2-B** (AWAITING REVIEW). **1.3.2-C / D / E** et **1.4** restent **NON OUVERTS**.
+Le sous-cycle **1.3.2** produit le **rapport** de veille par deep-dives bornés. Le présent état documente **1.3.2-A / B** (REVIEW PASS) et **1.3.2-C** (AWAITING REVIEW). **1.3.2-D / E** et **1.4** restent **NON OUVERTS**.

 ---

@@ -471,7 +471,7 @@ Forme équivalente retenue : **NO EVIDENCE OF HEALTH DATA PROCESSING IN CURRENT

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
+| **Statut** | **REVIEW PASS — SECURITY & RESILIENCE** (ChatGPT ; preuve postérieure au handoff Git historique AWAITING REVIEW) |
 | **Date de recherche** | 2026-09-29 |
 | **Type cœur** | Sécurité / RSSI |
 | **Profil** | **Standard** — research-only / cadrage sécurité |
@@ -711,7 +711,7 @@ Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’
 | C-B01 | RGPD art. 32 ; CNIL Guide sécurité | Transverse | LIKELY | Mesures techniques/organisationnelles appropriées (C/I/D) | Architecture technique ; Sécurité/RSSI futur | OPEN — candidate |
 | C-B02 | CNIL F4 ; ANSSI MFA | R-B01, R-B02, R-B07 | LIKELY (principe) | Authentification robuste ; MFA = **candidate** selon risque / population | Conception ; Architecture ; Sécurité/RSSI futur | OPEN — MFA NOT MANDATED FOR ALL |
 | C-B03 | CNIL F5 | R-B03 | LIKELY | Moindre privilège ; profils Courtier / Directeur / Client | Conception fonctionnelle ; Architecture | OPEN — RBAC TO DESIGN |
-| C-B04 | Besoin métier + CNIL F5/F16 | R-B02, R-B04 | LIKELY | Espace client : accès limité aux données du titulaire ; récupération de compte sûre | Conception ; UX/UI ; Architecture | OPEN |
+| C-B04 | Besoin métier + CNIL F5/F16 | R-B02, R-B04 | LIKELY | Espace client : accès limité aux données autorisées pour l’utilisateur et le périmètre qu’il représente (particulier ou TPE/PME) ; récupération de compte sûre | Conception ; UX/UI ; Architecture | OPEN |
 | C-B05 | Besoin métier + CNIL | R-B04 | LIKELY | Espace documentaire : séparation logique ; droits partage/téléchargement ; traçabilité | Conception ; Architecture | OPEN |
 | C-B06 | CNIL F21/F22 ; art. 32 | R-B04, R-B09 | LIKELY (principe) | Chiffrement transit / repos à spécifier | Architecture technique | OPEN — algo/KMS NOT DECIDED |
 | C-B07 | CNIL F16 | R-B08 | LIKELY | Journalisation accès / admin / modifications / événements sécurité | Architecture ; RUN | OPEN — SIEM NOT DECIDED |
@@ -765,7 +765,244 @@ Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’
 - DORA = **TO VERIFY** (size metrics absentes) — **ni** applicable **ni** non applicable déclaré.
 - HEALTH DATA / AIPD / bases légales restent **TO VERIFY** (1.3.2-A).
 - Recommandations ANSSI ≠ obligations légales automatiques.
-- **1.3.2-C / D / E** et **1.4** **non ouverts**.
+- Deep-dive **1.3.2-C** ouvert séparément (accessibilité & numérique responsable).
+
+
+## 16. 1.3.2-C — Accessibilité & numérique responsable
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
+| **Date de recherche** | 2026-09-29 |
+| **Type** | Cadrage — DOC / accessibility-responsible-digital research |
+| **Transverses** | Accessibilité ; GreenOps / sobriété numérique (§4.16) |
+| **Profil** | **Standard** |
+| **Critical** | **NON** — aucune cible de conformité engagée ; aucune architecture / stack ; aucun engagement environnemental chiffré |
+| **Nature** | Veille / cadrage — **pas** audit RGAA ; **pas** déclaration d’accessibilité ; **pas** certification WCAG ; **pas** bilan carbone / ACV / GreenOps runtime |
+
+### 16.1 Périmètre et méthode
+
+**Périmètre fonctionnel (1.1 / 1.2) :** interfaces internes (Courtier / Directeur) ; espace client (particulier / TPE-PME) ; formulaires ; contenus ; documents générés ; notifications ; prise de rendez-vous ; dashboard / KPI ; canaux physique / Visio / téléphone / email / espace client.
+
+**Méthode :** sources N1 ouvertes (RGAA officiel, Légifrance / décret 2019-768, EUR-Lex EAA 2019/882, W3C WCAG, RGESN 2024 / Arcep–MiNumEco) ; distinction stricte **obligation juridique** / **référentiel** / **bonne pratique** ; analyse qualitative sans inventer d’écrans ni de scores environnementaux.
+
+**Posture CKC Cadrage :** besoin avant solution ; rendre visibles les inconnues ; ne pas convertir un référentiel en obligation sans preuve ; pas d’écoconception = architecture prématurée.
+
+**Hors scope :** maquettes ; design system ; audit d’écrans ; certification ; bilan carbone ; PUE ; région cloud ; sélection no-code ; ouverture 1.3.2-D / 1.4.
+
+### 16.2 Synthèse exécutive bornée
+
+1. **RÉFÉRENTIEL** — RGAA **4.1.2** (DINUM ; MAJ 2023-04-18) = méthode opérationnelle fondée sur WCAG 2.1 A/AA → **IMPACT** : critères design pour espace client, formulaires, contenus → **STATUT** : ACCESSIBILITY DESIGN REFERENCE
+2. **FAIT juridique** — obligation FR (art. 47 loi 2005-102) : organismes publics + entreprises privées au seuil CA moyen France **≥ 250 M€** (3 exercices) → **IMPACT** : CA cabinet fictif **inconnu** → **STATUT** : **ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY** (pas « RGAA REQUIRED »)
+3. **FAIT UE** — Directive (UE) 2019/882 (EAA) : services listés (dont *consumer banking*, e-commerce) ; *consumer banking* **≠** distribution d’assurance (définitions art. 2) → **IMPACT** : banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** si conclusion de contrats consommateurs en ligne → **STATUT** : EAA overall **TO VERIFY** / banking **NOT APPLICABLE**
+4. **STANDARD** — WCAG 2.1 (référence RGAA) / WCAG 2.2 (W3C latest, encouragement) → **IMPACT** : guidance technique ; **pas** obligation FR automatique hors rattachement légal → **STATUT** : STANDARD / GUIDANCE
+5. **GOOD PRACTICE** — clavier, structure, contraste, formulaires/erreurs, focus, alternatives, documents, auth accessible, dashboard → **IMPACT** : FUTURE ACCESSIBILITY DESIGN CONSTRAINTS → **STATUT** : C-C01… candidates
+6. **FAIT métier** — BMC multicanal (physique, Visio, téléphone, email, espace client) → **IMPACT** : digitalisation **ne doit pas** être le seul chemin d’accès au service → **STATUT** : INCLUSION / MULTICHANNEL DESIGN CONSTRAINT
+7. **RÉFÉRENTIEL** — RGESN **version 2024** (v2, 2024-05-28 ; Arcep/Arcom + ADEME ; loi REEN art. 25) = base de **démarches volontaires** d’écoconception → **IMPACT** : guide sobriété CRM → **STATUT** : **RGESN = DESIGN / ECO-CONCEPTION REFERENCE** (pas « RGESN REQUIRED » sans preuve)
+8. **GOOD PRACTICE** — utilité fonctionnelle, parcours simples, données/traitements proportionnés, interfaces légères, réversibilité → **IMPACT** : leviers cadrage sans métriques fictives → **STATUT** : RESPONSIBLE DIGITAL CONSTRAINTS
+9. **CHECKLIST** — critères accessibilité + écoconception pour évaluer futurs outils no-code/SaaS → **IMPACT** : réutiliser en **1.3.2-D** → **STATUT** : FUTURE TOOL EVALUATION CRITERIA (outil NOT SELECTED)
+10. **LIMITE** — architecture / volumes / plateforme **inconnus** → **IMPACT** : pas de bilan carbone, pas de cible CO₂, pas de GreenOps runtime → **STATUT** : hypothèses / questions uniquement
+
+### 16.3 Applicabilité juridique accessibilité
+
+| Sujet | Source | Nature | Applicability | Impact CRM | Étape future | Statut |
+|-------|--------|--------|---------------|------------|--------------|--------|
+| Obligation accessibilité services en ligne (champ FR) | Loi 2005-102 art. 47 ; décret 2019-768 ; page RGAA champ d’application | LEGAL REQUIREMENT (si organisme dans le champ) | **TO VERIFY** (CA / statut juridique cabinet inconnus) | Déterminer si déclaration / conformité légale s’imposent | Conformité futur ; Morris | OPEN |
+| Seuil entreprise privée 250 M€ CA moyen FR | Décret 2019-768 ; RGAA obligations | LEGAL REQUIREMENT (seuil) | **TO VERIFY** | Si CA < seuil et hors autres cas → obligation art. 47 **probablement** hors champ — **non démontré** ici | Conformité | OPEN — no false NOT APPLICABLE |
+| RGAA comme méthode technique | DINUM RGAA 4.1.2 | OFFICIAL REFERENCE | LIKELY (référence de conception) même si obligation TO VERIFY | Critères opérationnels UX/QA | UX/UI ; QA ; conception | OPEN |
+| EAA — consumer banking | Dir. 2019/882 art. 2 (liste crédit, MiFID, paiements, comptes, e-money) | LEGAL REQUIREMENT (si service listé) | **NOT APPLICABLE** au courtage assurance *en tant que* banking listé | Ne pas assimiler assurance = banque | — | QUALIFIED |
+| EAA — e-commerce | Dir. 2019/882 art. 2(30) (service à distance visant conclusion contrat consommateur) | LEGAL REQUIREMENT (si service = e-commerce) | **TO VERIFY** | Dépend de la nature exacte de l’espace client / souscription en ligne | Conception ; conformité | OPEN |
+| EAA — microentreprises (exemption services) | Dir. 2019/882 art. 4(5) / recitals | LEGAL REQUIREMENT (exemption) | **TO VERIFY** (effectif/CA/bilan inconnus) | Si micro → exemption possible si EAA applicable | Conformité | OPEN |
+| WCAG 2.1 A/AA | W3C ; renvoi RGAA / entreprises 4° | STANDARD / GUIDANCE | LIKELY as design baseline | Critères techniques | UX/UI ; QA | OPEN |
+| Déclaration d’accessibilité | Cadre FR si assujetti | LEGAL REQUIREMENT (si assujetti) | **TO VERIFY** | Ne pas produire de déclaration dans ce cycle | Conformité futur | NOT PRODUCED |
+
+### ACCESSIBILITY LEGAL APPLICABILITY = TO VERIFY
+
+**Ne pas écrire :** RGAA REQUIRED / EAA REQUIRED / ACCESSIBILITY DECLARATION REQUIRED — sans taille / nature de service établies.
+
+### 16.4 Référentiels et principes accessibilité
+
+**RGAA 4.1.2 (vérifié 2026-09-29) :** version courante du référentiel DINUM ; 106 critères ; aligné WCAG 2.1 A/AA / EN 301 549 V2.1.2 ; RGAA 5 en rédaction (publication prévue fin 2026) — **ne pas suspendre** les travaux d’accessibilité.
+
+**Domaines d’analyse (contraintes de conception futures — pas audit) :**
+
+| ID | Domaine | Principe à transmettre | Statut |
+|----|---------|------------------------|--------|
+| A-C01 | Navigation clavier | Toutes fonctions utilisables au clavier | FUTURE ACCESSIBILITY DESIGN CONSTRAINT |
+| A-C02 | Structure / titres / landmarks | Structure sémantique (titres, régions) | idem |
+| A-C03 | Contraste / non-couleur seule | Info non portée uniquement par la couleur ; contraste suffisant | idem |
+| A-C04 | Formulaires / labels / erreurs | Labels associés ; messages d’erreur compréhensibles ; aide | idem |
+| A-C05 | Focus visible | Indicateur de focus perceptible | idem |
+| A-C06 | Alternatives textuelles | Images / icônes / non-texte | idem |
+| A-C07 | Contenu compréhensible | Langage clair lorsque pertinent (conseil / devis) | idem |
+| A-C08 | Documents téléchargeables | Voir §16.6 | ACCESSIBLE DOCUMENT GENERATION = CANDIDATE |
+| A-C09 | Auth / récupération compte | Voir §16.5 — SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE | CONSTRAINT CANDIDATE |
+| A-C10 | Dashboard / graphiques / KPI | Alternatives textuelles / données tabulaires ; pas d’info couleur seule | FUTURE CONSTRAINT |
+| A-C11 | Responsive / zoom / reflow | Contenu utilisable avec zoom / différentes largeurs (réf. WCAG/RGAA) | FUTURE CONSTRAINT |
+| A-C12 | Technologies d’assistance | Compatibilité raisonnable (API accessibilité des composants) | FUTURE CONSTRAINT — stack NOT DECIDED |
+
+### 16.5 Impacts sur les parcours CRM
+
+| Parcours / surface | Implications candidates | Étape future |
+|--------------------|-------------------------|--------------|
+| Espace client | Navigation, formulaires, documents, auth accessibles ; contenu clair | UX/UI ; QA |
+| Formulaires (devis, RDV, besoins) | Labels, erreurs, ordre de tabulation, délais non punitifs | Conception ; UX/UI |
+| Rendez-vous | Parcours digital **complété** par téléphone / physique / Visio | Conception fonctionnelle |
+| Devis / conseil | Contenu compréhensible ; documents accessibles | Conception ; delivery |
+| Dashboard / KPI | Graphiques avec alternative ; contrastes | UX/UI ; QA |
+| Notifications (email / in-app) | Messages clairs ; ne pas dépendre d’un seul canal | Conception ; RUN |
+| Auth / MFA / récupération | Alternatives / canaux de secours ; pas de méthode unique inaccessible ; délais raisonnables | Conception ; Sécurité/RSSI (sans modifier B) |
+
+**SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE** — contrainte transverse : les contrôles candidats de 1.3.2-B (MFA, récupération de compte) devront être conçus pour rester utilisables ; **sans** choisir techno ni affaiblir les exigences sécurité.
+
+### 16.6 Documents numériques et contenus
+
+Le brief prévoit génération / envoi de documents (devis, administratifs, contrats…).
+
+**Enjeux candidats :** structure (titres) ; texte exploitable (pas image seule du texte) ; tableaux lisibles ; alternatives si graphiques ; PDF accessible **si** format PDF retenu.
+
+### ACCESSIBLE DOCUMENT GENERATION = FUTURE REQUIREMENT CANDIDATE
+
+**Non décidé :** format document ; générateur ; outil PDF.
+
+### 16.7 Inclusion numérique / multicanal
+
+**Risque :** parcours **trop exclusivement digital** → exclusion (capacités, équipements, aisance numérique, situations temporaires).
+
+**Levier validé BMC :** pluralité de canaux — RDV physique, Visio, téléphone, email, espace client — peut soutenir **continuité / inclusion** sans décider le détail des parcours.
+
+**Principes candidats :**
+- ne pas rendre l’espace client le **seul** moyen d’accéder aux documents / suivi ;
+- prévoir bascule humaine (téléphone / RDV) pour étapes critiques ;
+- éviter personas handicap inventés / faux résultats d’entretien.
+
+**Statut :** INCLUSION / MULTICHANNEL = DESIGN CONSTRAINT CANDIDATE (parcours détaillés NOT DESIGNED).
+
+### 16.8 Référentiel écoconception / statut
+
+| Élément | Valeur vérifiée |
+|---------|-----------------|
+| Référentiel | **RGESN** — Référentiel général d’écoconception des services numériques |
+| Version | **2024** (Version 2 ; dernière MAJ **28 mai 2024**) |
+| Gouvernance | Arcep & Arcom, en lien avec ADEME (mandat loi REEN art. 25) ; héritage MiNumEco / DINUM 2022 |
+| Contenu | **78** critères / fiches pratiques |
+| Statut juridique pour ce projet | **Référentiel / guide de démarches volontaires** — socle de bonnes pratiques ; déclaration d’écoconception = **prérequis pour se prévaloir** de l’application du référentiel — **pas** démontré comme obligation générique de conformité pour le cabinet fictif |
+
+### RGESN = DESIGN / ECO-CONCEPTION REFERENCE
+
+**Ne pas écrire :** RGESN REQUIRED / RGESN COMPLIANT.
+
+GreenOps SFIA activé en **cadrage uniquement** : hypothèses, leviers, questions — **pas** métriques runtime.
+
+### 16.9 Leviers de sobriété pertinents pour le CRM
+
+| ID | Axe | Leviers cadrage (sans quantification) | Dépend architecture / plateforme ? |
+|----|-----|----------------------------------------|-------------------------------------|
+| E-C01 | Utilité fonctionnelle | Éviter fonctionnalités sans valeur métier démontrée | Non (cadrage) |
+| E-C02 | Parcours simples | Réduire étapes inutiles (devis, RDV, espace client) | Partiel |
+| E-C03 | Données / conservation | Limiter collecte & conservation inutiles (lien A, sans rouvrir) | Partiel |
+| E-C04 | Traitements / automatisations | Automatiser seulement tâches à valeur démontrée | Partiel |
+| E-C05 | Interfaces | Limiter complexité UI / poids pages | Oui (outil) |
+| E-C06 | Médias | Éviter médias lourds non nécessaires | Oui |
+| E-C07 | Requêtes réseau | Critère futur d’évaluation outil | Oui |
+| E-C08 | Services tiers | Minimiser dépendances inutiles | Oui |
+| E-C09 | Volume stocké | Historique « utile » vs rétention maximale | Partiel |
+| E-C10 | Maintenabilité / réversibilité | Export, sortie, durée de vie service | Oui |
+| E-C11 | Terminaux / obsolescence | Compatibilité équipements plus anciens (RGESN) | Oui |
+| E-C12 | Mesure future | Suivi critères environnementaux **plus tard** si engagement | Oui — **pas** de métrique inventée ici |
+
+**Questions projet (design / responsible digital — pas décisions) :**
+1. Centralisation : réduit-elle les doublons sans sur-collecte ?
+2. Historique : quel niveau est réellement utile (aligné conservation A) ?
+3. Génération documentaire : éviter duplications / stockage inutile ?
+4. Automatisations : uniquement valeur métier démontrée ?
+5. Dashboard : KPI réellement utiles, pas surdimensionné ?
+6. Espace client : complexité limitée au besoin utilisateur réel ?
+
+**Interdit ici :** gCO₂eq, PUE, score environnemental fictif, région cloud, autoscaling.
+
+### 16.10 Critères futurs no-code / SaaS
+
+**FUTURE TOOL EVALUATION CRITERIA** — réutiliser en **1.3.2-D** — **sans** scorer ni sélectionner d’éditeur.
+
+**Accessibilité :**
+- interfaces / HTML accessibles ou composants accessibles ;
+- navigation clavier / focus visible ;
+- labels formulaires / gestion d’erreurs ;
+- contraste / thèmes ;
+- possibilité d’ajouter attributs ARIA / sémantique nécessaires ;
+- documents générés accessibles (ou export structuré) ;
+- limites de personnalisation accessibilité documentées.
+
+**Numérique responsable :**
+- maîtrise poids pages / assets ;
+- optimisation ressources ;
+- contrôle dépendances tierces ;
+- maîtrise stockage / cycle de vie données ;
+- maîtrise requêtes ;
+- export / réversibilité ;
+- capacité à désactiver fonctionnalités inutiles ;
+- documentation / transparence environnementale éditeur **si disponible** (non obligatoire inventée) ;
+- mesures / déclarations pertinentes **si** revendiquées.
+
+**Aucun outil évalué. Stack = NOT DECIDED.**
+
+### 16.11 Contraintes / recommandations à transmettre
+
+| ID | Source / constat | Nature | Applicability | Impact CRM | Étape future | Statut |
+|----|------------------|--------|---------------|------------|--------------|--------|
+| C-C01 | RGAA / WCAG — clavier, focus | OFFICIAL REFERENCE / STANDARD | LIKELY (design) | Navigation clavier + focus visible | UX/UI ; QA | OPEN |
+| C-C02 | RGAA / WCAG — formulaires | idem | LIKELY | Labels, aide, erreurs compréhensibles | Conception ; UX/UI ; QA | OPEN |
+| C-C03 | RGAA / WCAG — contraste / structure | idem | LIKELY | Contraste ; titres ; info non-couleur seule | UX/UI ; QA | OPEN |
+| C-C04 | RGAA docs / bonne pratique | GOOD PRACTICE | LIKELY | Génération documents accessibles | Delivery ; QA | OPEN — format NOT DECIDED |
+| C-C05 | WCAG + lien B (MFA candidate) | GOOD PRACTICE | LIKELY | Auth / récupération accessibles ; SECURITY CONTROLS MUST BE ACCESSIBILITY-AWARE | Conception ; Sécurité/RSSI ; UX | OPEN — techno NOT DECIDED |
+| C-C06 | BMC multicanal + inclusion | GOOD PRACTICE | LIKELY | Ne pas digitaliser exclusivement ; conserver canaux humains | Conception fonctionnelle | OPEN |
+| C-C07 | RGESN — utilité / parcours | DESIGN / ECO REFERENCE | LIKELY (volontaire) | Sobriété fonctionnelle ; KPI / features utiles | Conception ; UX/UI | OPEN |
+| C-C08 | RGESN — données / traitements | DESIGN / ECO REFERENCE | LIKELY | Limitation traitements / automatisations inutiles | Conception ; architecture futur | OPEN |
+| C-C09 | RGESN — interfaces / ressources | DESIGN / ECO REFERENCE | CONTEXT DEPENDENT | Poids UI / médias / requêtes = critères futurs | Architecture ; 1.3.2-D | OPEN |
+| C-C10 | RGESN + héritage A conservation | DESIGN / ECO REFERENCE | LIKELY | Stockage / historique proportionnés | Conception ; données | OPEN |
+| C-C11 | RGESN — réversibilité / durée de vie | DESIGN / ECO REFERENCE | LIKELY | Export, sortie, maintenabilité | Architecture ; 1.3.2-D | OPEN |
+| C-C12 | Checklist §16.10 | GOOD PRACTICE | LIKELY | Critères accessibilité + écoconception outils | **1.3.2-D** | OPEN — outil NOT SELECTED |
+| C-C13 | Loi 2005-102 / décret 2019-768 | LEGAL REQUIREMENT | **TO VERIFY** | Trancher assujettissement (CA / statut) avant engagement conformité | Conformité ; Morris | OPEN |
+| C-C14 | EAA 2019/882 | LEGAL REQUIREMENT | Banking **NOT APPLICABLE** ; e-commerce **TO VERIFY** | Clarifier nature services numériques consommateurs | Conformité | OPEN |
+| C-C15 | Dashboard / graphiques | STANDARD / GUIDANCE | LIKELY | Alternatives textuelles / données accessibles | UX/UI ; QA | OPEN |
+
+### 16.12 Questions TO VERIFY
+
+1. CA moyen France (3 exercices) du cabinet → seuil 250 M€ / obligation art. 47 ?
+2. Statut juridique exact (privé « pur » vs délégation / intérêt général) ?
+3. L’espace client / souscription conclut-il des **contrats consommateurs en ligne** (EAA e-commerce) ?
+4. Effectif / CA / bilan → exemption micro EAA si un jour dans le champ ?
+5. Niveau d’ambition accessibilité **produit** (au-delà du légal) — arbitrage Morris futur ?
+6. Formats documentaires cibles (PDF / HTML / autre) ?
+7. Engagement éventuel de démarche RGESN / déclaration d’écoconception (volontaire) ?
+8. Périmètre exact des automatisations / KPI « utiles » ?
+9. Compatibilité MFA candidate (B) avec parcours accessibles — design conjoint futur ?
+10. Transposition FR détaillée EAA pour le cas d’espèce (si e-commerce confirmé) ?
+
+### 16.13 Sources exploitées
+
+| ID | Thème | Organisme | Titre | URL | Date | Consultation | Pertinence | Nature | Statut |
+|----|-------|-----------|-------|-----|------|--------------|------------|--------|--------|
+| S46 | RGAA hub | DINUM | Référentiel général d’amélioration de l’accessibilité | https://accessibilite.numerique.gouv.fr/ | MAJ 2023-04-18 (v4) ; note RGAA5 | 2026-09-29 | Version courante 4.1.2 | OFFICIAL REFERENCE | ACTIVE |
+| S47 | RGAA obligations | DINUM | Champ d’application — obligations légales | https://accessibilite.numerique.gouv.fr/obligations/champ-application | — | 2026-09-29 | Organismes ; seuil 250 M€ | LEGAL / OFFICIAL | ACTIVE |
+| S48 | RGAA PDF | DINUM | RGAA version 4.1.2 | https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.2.pdf | 4.1.2 | 2026-09-29 | Critères ; WCAG 2.1 ; EN 301 549 | OFFICIAL REFERENCE | ACTIVE |
+| S49 | Décret accessibilité | Légifrance | Décret n° 2019-768 du 24 juillet 2019 | https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937/2025-04-22/ | 2019-07-24 | 2026-09-29 | Seuil CA ; normes | LEGAL REQUIREMENT | ACTIVE |
+| S50 | EAA | EUR-Lex | Directive (UE) 2019/882 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2019.151.01.0070.01.ENG | 2019-04-17 | 2026-09-29 | Champ services ; définitions banking / e-commerce | LEGAL REQUIREMENT | ACTIVE |
+| S51 | WCAG | W3C WAI | WCAG 2 Overview | https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2.2 (2023/2024) ; 2.1 ref RGAA | 2026-09-29 | Standard technique | STANDARD / GUIDANCE | ACTIVE |
+| S52 | RGESN hub | MiNumEco / numérique.gouv | RGESN 2024 | https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/ | v2 ; 2024-05-28 | 2026-09-29 | Version ; outils ; REEN | DESIGN / ECO REFERENCE | ACTIVE |
+| S53 | RGESN PDF | Arcep/Arcom/ADEME | RGESN version 2024 (PDF) | https://ecoresponsable.numerique.gouv.fr/docs/2024/rgesn-mai2024/referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf | 2024-05 | 2026-09-29 | Démarches volontaires ; 78 critères | DESIGN / ECO REFERENCE | ACTIVE |
+| S54 | RGESN fiche | Arcep | Référentiel général écoconception (fiche) | https://www.arcep.fr/mes-demarches-et-services/entreprises/fiches-pratiques/referentiel-general-ecoconception-services-numeriques.html | 2024 | 2026-09-29 | 78 critères ; déclaration | DESIGN / ECO REFERENCE | ACTIVE |
+
+### 16.14 Limites / réserves
+
+- **Pas** d’audit RGAA, déclaration d’accessibilité, certification WCAG, maquette, design system.
+- **Pas** de bilan carbone, ACV, GreenOps runtime, métriques CO₂ fictives.
+- Architecture / stack / plateforme / hosting = **NOT DECIDED**.
+- Applicabilité juridique accessibilité = **TO VERIFY** (données cabinet insuffisantes).
+- RGESN = référence d’écoconception, **pas** obligation démontrée pour ce projet.
+- EAA banking **NOT APPLICABLE** ; e-commerce **TO VERIFY**.
+- **1.3.2-D / E** et **1.4** **non ouverts**.


 ## 13. Synthèse 1.3 (état courant)
@@ -776,11 +1013,12 @@ Checklist **réutilisable en 1.3.2-D** — **sans** scorer ni sélectionner d’
 | **1.3.1** | REVIEW PASS — WATCH SYSTEM ESTABLISHED |
 | **1.3.2** | IN PROGRESS |
 | **1.3.2-A** | **REVIEW PASS — REGULATION & DATA** |
-| **1.3.2-B** | **SECURITY & RESILIENCE — AWAITING REVIEW** |
-| **1.3.2-C / D** | NOT STARTED |
+| **1.3.2-B** | **REVIEW PASS — SECURITY & RESILIENCE** |
+| **1.3.2-C** | **ACCESSIBILITY & RESPONSIBLE DIGITAL — AWAITING REVIEW** |
+| **1.3.2-D** | NOT STARTED |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
 | **1.4** | NOT OPENED |
 | Miro / Notion | NOT MODIFIED |

-Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-B **n’est pas** un audit de sécurité, une homologation, ni une preuve de conformité DORA.
+Le 1.3 **n’est pas** VALIDATED. Le deep-dive 1.3.2-C **n’est pas** un audit d’accessibilité, une conformité RGAA/RGESN certifiée, ni un bilan environnemental.

```

## 12. Validations

| Check | Résultat |
|-------|----------|
| Git Truth | **PASS** |
| 1.3.2-B REVIEW PASS tracé | **PASS** |
| Correction éditoriale B | **PASS** |
| 1.3.2-C seul ouvert | **PASS** |
| Transverse Accessibilité | **PASS** |
| Transverse GreenOps | **PASS** |
| Sources officielles | **PASS** |
| RGAA version vérifiée | **PASS** (4.1.2) |
| RGAA legal applicability | **TO VERIFY** |
| EAA | banking **NOT APPLICABLE** ; overall/e-commerce **TO VERIFY** |
| Principes accessibility | **PASS** |
| Documents numériques | **PASS** |
| Auth accessibility | **PASS** |
| Inclusion multicanal | **PASS** |
| RGESN version vérifiée | **PASS** (2024 / v2 / 2024-05-28) |
| RGESN statut juridique | **QUALIFIED** (référence / volontaire — pas obligation projet) |
| Sobriété fonctionnelle / données / interfaces | **PASS** |
| Aucun impact environnemental fictif | **PASS** |
| Checklist outils futurs | **PASS** |
| Aucun outil évalué | **PASS** |
| Architecture / Stack | **NOT DECIDED** |
| 1.3 OPENED ; D NOT STARTED ; 1.4 NOT OPENED | **PASS** |
| Miro / Notion | **NOT MODIFIED** |
| Exactement 2 fichiers projet | **PASS** |
| git diff --check | **PASS** |
| Commit | **PASS** (`b63c5f37` — docs(crm-assurance-courtage): research 1.3.2c accessibility responsible digital) |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |
| Review Handoff | *(à publier)* |

## 13. Réserves

- Pas d’audit RGAA / déclaration / certification WCAG.
- Pas de bilan carbone / ACV / GreenOps runtime.
- Applicabilité juridique accessibilité TO VERIFY (CA / statut / nature services).
- RGESN = référence volontaire pour ce projet.
- Architecture / stack / plateforme NOT DECIDED.
- 1.3.2-D non ouvert.

## 14. Verdict

**READY FOR CHATGPT REVIEW — CRM 1.3.2-C ACCESSIBILITY & RESPONSIBLE DIGITAL RESEARCH COMPLETE**
