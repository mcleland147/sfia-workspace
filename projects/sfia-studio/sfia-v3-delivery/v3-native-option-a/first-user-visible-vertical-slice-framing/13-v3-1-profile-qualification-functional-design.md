# 13 — V3.1 Profile Qualification UI — Conception fonctionnelle

## A. Meta et cycle record

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 19:09:00 CEST (+0200) |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Typologie** | DOC |
| **Profondeur** | Standard |
| **GO Morris consommé** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1 PROFILE QUALIFICATION UI — USER SELECTS CYCLE TYPE — T-A2 RECOMMENDS PROFILE — READ-ONLY FIRST — NO CREATE CYCLE` |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **CKC** | `pilots/02-conception-fonctionnelle.md` · status `candidate` · v0.1.0 · **aucune autorité d’exécution** |
| **Document d’arbitrage hérité** | `12-v3-cycle-recommendation-cadrage.md` (**lecture seule** — non modifié) |
| **Architecture catalogue** | `14` — décisions D-V3.1-CAT **adoptées** · CKC obligatoire intégré · runtime **non** implémenté |
| **Statut documentaire** | `V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
| **Commit / push / PR projet** | **non** |
| **Code / tests / Figma** | **non modifiés** |

## B. Décisions d’entrée (D-V3)

| ID | Décision | Conséquence exacte sur V3.1 |
|----|----------|------------------------------|
| D-V3-01 = 1 | Type sélectionné · profil T-A2 | L’UI exige une sélection de type ; QualifyCycle produit uniquement le profil |
| D-V3-02 = 1 | Catalogue contrôlé | Aucun moteur de recommandation du type ; pas de saisie libre |
| D-V3-03 = 2 | CTA create (cible globale) | **Hors V3.1** : aucun CreateCycle, aucun CTA create actif |
| D-V3-04 = 1 | Pas de lien LPS actif | Aucun `linkAsActiveCycle` |
| D-V3-05 = 1 | Reco non persistée | Aucun EpistemicItem Recommendation |
| D-V3-06 | Critical fail-closed | Résultat Critical informatif ; pas d’activation / ack / gate |
| D-V3-07 = 1 + réserve | Contrat Git temporaire | Aucune frame Figma baseline ; réévaluation avant UI substantielle |
| D-V3-08 = 1 | Slicing progressif | V3.1 = read-only · V3.2 = create explicite |

**Réserves maintenues :** D-VS-05 NOT CONSUMED · B5 / R1 hors périmètre · volatilité process-local · runtime catalogue / resolver **pending** (contrat + arbitrage résolus — voir `14`).

## C. Objectif fonctionnel et valeur

### Problème

Après Create Project et Project Workspace, l’opérateur local doit préparer un cycle en comprenant **quel profil de contrôle** T-A2 recommande, sans confondre cela avec une décision Morris ni avec la création d’un CycleInstance.

### Valeur

- Rendre **observable** la qualification de profil à partir de réponses explicites.
- Afficher une **justification compréhensible** et des **réserves honnêtes**.
- Préparer V3.2 (create) sans anticiper la mutation.

### Résultat observable

Une surface où l’utilisateur sélectionne un type, répond aux six signaux, lance la qualification, et lit un profil Light / Standard / Critical avec explications — **sans** création, lien LPS, ni persistance épistémique.

### Ce que V3.1 ne fait pas

CreateCycle · linkAsActiveCycle · EpistemicItem · décision Morris · recommandation auto du type · requestedProfile · agent/LLM · IAM · Figma write · delivery.

## D. Usager, rôle et autorité

| Élément | Position |
|---------|----------|
| Usager | Morris local — opérateur du démonstrateur Studio |
| Rôle | Lecture contexte projet + qualification read-only |
| IAM | **aucune** |
| Autorité Critical réelle | **absente** |
| Stakeholder inventé | **interdit** |

## E. Glossaire fonctionnel

| Terme | Définition V3.1 |
|-------|-----------------|
| Projet | Agrégat Project process-local créé en V2 |
| LPS | Living Project State — contexte read-only ; non muté |
| Type de cycle | Entrée catalogue contrôlée (identité stable + label) |
| cycleTypeId | Identifiant technique de l’entrée catalogue |
| Signal | Réponse Oui/Non explicite mappée vers T-A2 |
| Profil recommandé | Light \| Standard \| Critical — sortie QualifyCycle |
| Rationale | Code interne T-A2 — **non affiché brut** ; mappé en texte utilisateur |
| Recommandation | Sortie QualifyCycle · `isMorrisDecision=false` |
| Décision Morris | Acte humain (V4) — hors V3.1 |
| CycleInstance | Entité créée par CreateCycle — **absente** de V3.1 |

## F. Périmètre fonctionnel

### Inclus

- Entrée depuis Project Workspace.
- Sélection type (catalogue contrôlé).
- Six signaux explicites.
- Appel fonctionnel à QualifyCycle (contrat T-A2).
- Affichage profil + justification + disclosures.
- États, erreurs read-only, critères d’acceptation, a11y, plan de preuves.

### Hors périmètre

CreateCycle · CTA create · LPS link · EpistemicItem · UpdateEpistemicState · V4 · V3.2 · moteur type · scoring · LLM · Figma · architecture technique · code.

### Préconditions

- Un Project process-local accessible via `projectId`.
- Runtime capable de lire le projet (existant V2).
- Catalogue contrôlé **résolu** pour delivery (voir réserve).
- Contrat T-A2 QualifyCycle inchangé.

### Résultat de sortie

Projection volatile de recommandation de profil + contexte sélectionné — **non persistée**.

## G. Position dans le parcours

**Départ :** `/studio/projects/[id]` (Project Workspace V2-A3).

**Entrée recommandée (fonctionnelle, non décision d’architecture) :**

- CTA / lien sémantique **« Préparer un cycle »** depuis la zone d’actions du workspace (aujourd’hui : lien « Créer un autre projet » uniquement).
- Placement candidat le plus simple : **même namespace** `/studio/projects/[id]/…` (section ou sous-route) — *recommandation de placement*, pas choix technique figé.

**Retour :** lien « Retour à l’espace projet » vers `/studio/projects/[id]`.

**Interdit :** CTA CreateCycle, activation, décision Morris, redirection auto V4.

## H. Parcours nominal

1. Consulter le Project Workspace (projet + LPS + disclosures runtime).
2. Ouvrir « Préparer un cycle ».
3. Voir le contexte projet (objectif, résumé) en **lecture seule**, avec mention qu’il **n’influence pas** l’algorithme de qualification actuel.
4. Sélectionner un type de cycle dans le catalogue (obligatoire, non libre).
5. Répondre **explicitement** Oui ou Non aux **six** signaux (aucun précoché).
6. Activer « Qualifier le profil » (désactivé ou refusé si incomplet).
7. Obtenir le profil recommandé + explication + signaux contributeurs + disclosures.
8. Modifier les réponses et re-qualifier si besoin.
9. Revenir au workspace.
10. **Aucun** CycleInstance créé · **aucune** mutation LPS · **aucune** persistance épistémique.

## I. Contrat du catalogue des types de cycle

### Exigences fonctionnelles

| Règle | Position |
|-------|----------|
| Sélection | **Obligatoire** avant qualification |
| Saisie libre | **Interdite** |
| Champs par entrée | `cycleTypeId` stable · label · description courte |
| Recommandation du type | **Interdite** |
| Influence sur le profil | **Aucune** (le type ne détermine pas Light/Standard/Critical) |
| Capitalization | Si `cycleTypeId = cyc:capitalization`, l’indicateur `capitalizationViaCycleTypeId` peut être vrai — **ce n’est pas un profil** |

### Comportements

| Situation | Comportement |
|-----------|--------------|
| Catalogue en chargement | État dédié · pas de qualification |
| Catalogue indisponible / vide | État bloquant · message clair · pas de fallback inventé |
| ID inconnu / invalide | Refus · message · pas de QualifyCycle |
| Refresh | Resélection requise si état volatile perdu |

### Investigation repo (constat)

| Source | Contenu | Statut pour V3.1 runtime |
|--------|---------|--------------------------|
| `CAPITALIZATION_CYCLE_TYPE_ID = cyc:capitalization` | Un seul ID OA runtime explicite | Partiel |
| `SFIA_CYCLE_LABELS` (harness Increment C) | 15 labels slugs (`cadrage`, …) **sans** préfixe `cyc:` | Labels UI hors contrat OA — **non catalogue runtime** |
| Méthode — 15 cycles (`02-fifteen-cycles-synthetic-map.md`) | Noms canoniques 1…15 | Documentaire méthode — **non IDs runtime** |
| Schema CycleType modélisé | Entité citée ; **pas** de registry runtime des 15 | Absent |
| D1 intake `proposedCycleType` | Valeurs ad hoc (ex. `FRAMING`) | Stack legacy — **hors** vertical-slice |

### Réserve catalogue (requalifiée)

**R-V3.1-CATALOG-01**

| Aspect | État |
|--------|------|
| Constat runtime | Registry des 15 **toujours absente** (non implémentée) |
| Contrat + arbitrage | **RESOLVED** — D-V3.1-CAT-01…08 adoptées (`14`) |
| IDs | Quinze CAT-I1 **adoptés contractuellement** · non implémentés |
| CKC | **Obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` |
| Delivery D1 | **Non autorisé** — GO distinct requis |

- L’UI ne hardcode pas de liste d’autorité.
- Le résultat de QualifyCycle n’est **contractuellement exploitable** dans le parcours produit qu’avec une résolution CKC **valide** (detailed ou synthetic fallback).
- Les règles de qualification, CA et scénarios ci-dessous restent inchangés.

## J. Contrat des signaux

Tous les signaux : réponse **Oui / Non obligatoire** · **aucune** valeur précochée · absence ≠ `false`.

| Signal T-A2 | Libellé utilisateur | Aide contextuelle | Mapping |
|-------------|---------------------|-------------------|---------|
| `structuralChange` | Changement structurel | Ce travail modifie-t-il durablement la structure du produit, de la méthode ou du dépôt ? | `true`/`false` explicite |
| `securityImpact` | Impact sécurité | Ce travail touche-t-il à la sécurité, aux secrets, aux contrôles d’accès ou à une surface d’attaque ? | idem |
| `architectureImpact` | Impact architecture | Ce travail engage-t-il un choix ou une modification d’architecture significative ? | idem |
| `dataImpact` | Impact données | Ce travail affecte-t-il des données sensibles, des migrations ou des pertes potentielles ? | idem |
| `irreversible` | Caractère difficilement réversible | Une erreur serait-elle difficile ou coûteuse à annuler ? | idem |
| `lowRiskBounded` | Risque faible et borné | Le périmètre est-il clairement limité et le risque faible **en l’absence** de signaux critiques ? | idem |

### Règles UI

1. Les six réponses doivent être présentes avant QualifyCycle.
2. Une réponse absente **bloque** la qualification (pas d’envoi de `undefined` assimilé à false).
3. Les contradictions restent visibles (ex. Critical + lowRiskBounded) ; le moteur applique la priorité Critical.
4. Aucun score implicite depuis objectif / scope / contexte.

## K. Données de contexte

| Donnée | Usage V3.1 |
|--------|------------|
| `projectId` | Précondition · navigation |
| Objectif projet | Affichage read-only · **n’influence pas** QualifyCycle actuel |
| Scope / contexte résumé | Affichage read-only · idem |
| LPS (id, version) | Affichage contextuel · **non muté** |
| `requestedProfile` | **Non exposé** |
| Justification Critical | **Non collectée / non persistée** ; info future V3.2 uniquement |
| `cycleTypeId` | Sélection catalogue · passé à QualifyCycle (hint capitalization) |

## L. Règles de qualification (contrat T-A2 exact)

Source : `recommendProfile` / `hasCriticalSignals` (`lib/oa/cycle/domain/invariants.ts`).

1. Si **un** parmi `structuralChange`, `securityImpact`, `architectureImpact`, `dataImpact`, `irreversible` vaut `true` → profil **Critical** · rationale `critical_signal_present`.
2. Sinon, si `lowRiskBounded === true` → profil **Light** · rationale `low_risk_bounded_no_critical_signals`.
3. Sinon → profil **Standard** · rationale `default_standard` (parcours V3.1 sans `requestedProfile`).
4. **Critical gagne toujours** sur `lowRiskBounded` (règle 1 avant règle 2).
5. `cycleTypeId` **ne détermine pas** le profil.
6. `capitalizationViaCycleTypeId` = true seulement si `cycleTypeId === cyc:capitalization` — indicateur, **pas** un profil Capitalization.
7. `isMorrisDecision` est **toujours** `false`.
8. Aucun gate Morris consommé.
9. Rationales hors parcours V3.1 (car `requestedProfile` non exposé) : `default_standard_light_requires_low_risk_bounded`, `requested_critical_without_signals`.

## M. Sortie fonctionnelle

### Afficher

- Type sélectionné (label + id).
- Profil recommandé (texte : Light / Standard / Critical — compréhensible **sans** couleur).
- Explication utilisateur (mapping N).
- Liste des signaux Oui ayant conduit au résultat (et mention des Non si utile à la compréhension).
- Disclosure : **« Ceci est une recommandation, pas une décision Morris. »**
- Disclosure : résultat **process-local / non persisté** · un refresh peut le perdre.
- Si Critical : indication fail-closed + « une justification sera requise lors d’une future création (V3.2) » — **sans** formulaire de justification.
- Prochaine étape **informative** uniquement (ex. « La création explicite du cycle relèvera d’un prochain incrément »).

### Ne pas afficher

- Codes rationale bruts.
- Statut `acknowledged` / `proposed` de CycleInstance (aucune instance).
- Faux score / pourcentage de confiance.
- CTA CreateCycle / activation / décision.
- Claim d’autorité humaine ou IAM.

## N. Mapping des rationales → contenus utilisateurs

| Code T-A2 | Texte utilisateur (V3.1) |
|-----------|-------------------------|
| `critical_signal_present` | « Au moins un signal de criticité est positif. Le profil recommandé est Critical. Aucune activation n’est effectuée. » |
| `low_risk_bounded_no_critical_signals` | « Aucun signal de criticité n’est positif et le risque est déclaré faible et borné. Le profil recommandé est Light. » |
| `default_standard` | « Aucun signal de criticité n’est positif et le risque n’est pas déclaré faible et borné. Le profil recommandé est Standard. » |
| `default_standard_light_requires_low_risk_bounded` | Hors parcours V3.1 (`requestedProfile` non exposé). |
| `requested_critical_without_signals` | Hors parcours V3.1. |

## O. États fonctionnels

| État | Description |
|------|-------------|
| initial | Surface ouverte · pas encore de saisie |
| contexte projet chargé | Project/LPS affichés |
| catalogue en chargement | Attente catalogue |
| catalogue indisponible | Bloqué · pas de qualify |
| formulaire incomplet | Type et/ou signaux manquants · action refuse |
| prêt à qualifier | Type + 6 réponses · CTA actif |
| qualification en cours | Attente résultat |
| résultat Light | Affichage Light + disclosures |
| résultat Standard | Affichage Standard + disclosures |
| résultat Critical | Affichage Critical fail-closed + info V3.2 |
| erreur technique | Bridge/runtime/qualification inattendue |
| projet introuvable | Contexte perdu · recovery vers création |
| état local perdu après refresh | Message volatilité · reprise |
| retour / nouvelle qualification | Re-saisie ou modification puis re-qualify |

## P. Critical

- Résultat Critical **clairement identifiable** (texte + structure, pas seulement couleur).
- QualifyCycle **non bloqué** par Critical.
- Aucune création · aucune activation · aucun acknowledgement · aucun gate.
- Information : justification **requise à la création future** (V3.2).
- Aucune autorité simulée · aucune redirection automatique V4.
- Fail-closed respecté.

## Q. Exceptions et recovery V3.1

### Pertinentes (read-only)

| Situation | Comportement |
|-----------|--------------|
| Projet introuvable / contexte perdu | Message + CTA retour création projet |
| Catalogue indisponible | Bloquer qualify · message · pas d’IDs inventés |
| cycleTypeId invalide / inconnu | Refus · corriger la sélection |
| Formulaire incomplet | CTA désactivé ou refus explicite + résumé d’erreurs |
| Runtime / bridge QualifyCycle indisponible | Erreur technique · retry · disclosure process-local |
| Qualification inattendue | Message borné · pas de mutation |
| Refresh / hot reload | Perte possible du résultat · reprendre |

### Explicitement **non applicables** en V3.1

- `CYCLE_ALREADY_EXISTS`
- `LPS_VERSION_CONFLICT`
- `PERSISTENCE_FAILURE` liée à CreateCycle
- Erreurs d’activation / lien LPS
- Erreurs épistémiques de persistance (`EPISTEMIC_*`)
- `CYCLE_CRITICAL_JUSTIFICATION_REQUIRED` (création uniquement)

## R. Permissions et visibilité

Opérateur local unique · aucune gestion de rôles · aucune authentification · aucune autorisation Critical · aucun masquage présenté comme sécurité.

## S. Intégrations fonctionnelles (quoi, pas comment)

| Intégration | Rôle |
|-------------|------|
| Project Workspace | Contexte projet / LPS read-only |
| Catalogue contrôlé (contrat `14`) | Type id/label/description + métadonnées CKC |
| CKC Resolver | Résolution obligatoire · consommation orchestration · `executionAuthority=false` |
| T-A2 QualifyCycle | Recommandation de profil (domaine) |
| UI | Projection volatile · état CKC sans contrat brut |

**Aucune** mutation projet, cycle, trajectoire, LPS ou épistémique.

Le parcours produit ne présente pas le résultat de qualification comme contractuellement exploitable sans CKC valide.

**Non défini ici :** Server Action · classes · fichiers · protocole · stockage.

## T. Accessibilité

1. Navigation clavier complète de tous les contrôles.
2. Ordre de focus cohérent : contexte → type → signaux → CTA → résultat.
3. Groupe de questions signaux correctement labellisé (`fieldset` / équivalent sémantique).
4. Chaque Oui / Non accessible **sans dépendre de la couleur** (texte visible).
5. Erreurs associées aux champs concernés.
6. Résumé d’erreur annoncé (région appropriée).
7. Changement de résultat annoncé via région live appropriée.
8. Titres hiérarchisés (h1/h2/h3 cohérents avec StudioShell).
9. Texte du profil compréhensible sans badge coloré.
10. État Critical compréhensible sans couleur.
11. CTA « Qualifier le profil » — libellé explicite.
12. Aucun verdict de conformité a11y sans tests futurs.

## U. Critères d’acceptation (observables)

| ID | Critère |
|----|---------|
| CA-01 | Depuis un projet existant, l’opérateur ouvre la surface de qualification. |
| CA-02 | La sélection d’un type de cycle est obligatoire ; aucune saisie libre. |
| CA-03 | Les six signaux exigent chacun une réponse Oui/Non explicite. |
| CA-04 | Si type ou signal manquant, l’action de qualification est désactivée ou refusée avec message. |
| CA-05 | `structuralChange=Oui` (seuls les autres Non) → profil Critical. |
| CA-06 | `securityImpact=Oui` → Critical. |
| CA-07 | `architectureImpact=Oui` → Critical. |
| CA-08 | `dataImpact=Oui` → Critical. |
| CA-09 | `irreversible=Oui` → Critical. |
| CA-10 | Tous Critical Non + `lowRiskBounded=Oui` → Light. |
| CA-11 | Tous Non (y compris lowRiskBounded) → Standard. |
| CA-12 | Au moins un Critical Oui + `lowRiskBounded=Oui` → Critical (Critical gagne). |
| CA-13 | Le type sélectionné (label) est visible dans le résultat. |
| CA-14 | Profil + justification utilisateur visibles. |
| CA-15 | Aucun code rationale brut visible. |
| CA-16 | Disclosure « recommandation ≠ décision Morris » visible. |
| CA-17 | Aucune création de CycleInstance observable. |
| CA-18 | Aucune persistance EpistemicItem Recommendation observable. |
| CA-19 | Aucun lien LPS / `linkAsActiveCycle` observable. |
| CA-20 | Aucun contrôle `requestedProfile` exposé. |
| CA-21 | Après refresh, le résultat peut être perdu ; message/état cohérent. |
| CA-22 | Catalogue indisponible : qualification impossible + message clair. |
| CA-23 | Parcours clavier complet sans piège au clavier. |

## V. Scénarios fonctionnels

| ID | Scénario | Attendu |
|----|----------|---------|
| S-01 | Nominal Light | lowRiskBounded Oui · 5 Critical Non → Light |
| S-02 | Nominal Standard | 6 Non → Standard |
| S-03 | Critical structural | structuralChange Oui → Critical |
| S-04 | Critical security | securityImpact Oui → Critical |
| S-05 | Critical architecture | architectureImpact Oui → Critical |
| S-06 | Critical data | dataImpact Oui → Critical |
| S-07 | Critical irreversible | irreversible Oui → Critical |
| S-08 | Contradiction Critical + lowRiskBounded | Critical |
| S-09 | Formulaire incomplet | Refus · pas d’appel qualify |
| S-10 | Catalogue absent | État bloquant |
| S-11 | Project missing | Recovery création |
| S-12 | Retry après erreur technique | Reprise sans mutation |
| S-13 | Nouvelle qualification après modification | Nouveau résultat cohérent |

## W. Plan de preuves futur

- Tests unitaires des règles (déjà T-A2) + mapping UI textes.
- Tests composant états / formulaire / a11y.
- Tests boundary : **aucun** CreateCycle · **aucune** mutation LPS/épistémique.
- Captures desktop + responsive.
- **Aucune preuve exécutée dans ce cycle documentaire.**

## X. Contrat UX temporaire et réserve Figma

### Hiérarchie fonctionnelle des zones

1. Bandeau disclosures runtime (réutiliser le langage V2).
2. Titre « Préparer un cycle » + rappel read-only.
3. Contexte projet (compact).
4. Sélection type.
5. Signaux (groupe unique).
6. CTA qualification.
7. Zone résultat + réserves.
8. Navigation retour.

### Priorités de contenu

Profil + type + justification + disclosure décision > détails techniques.

### Figma

- Source design : **contrat Git temporaire**.
- Aucune frame V3 baseline.
- D-VS-05 **NOT CONSUMED**.
- Réévaluer un cycle UX/UI + Figma **avant** delivery si la surface est jugée substantielle ou si une fidélité visuelle est revendiquée.
- Recommandation non décisionnelle : un cycle UX/UI dédié est **probable** avant un delivery UI dense ; **Morris décide**.

## Y. Risques et réserves

| ID | Risque / réserve | Sévérité |
|----|------------------|----------|
| R-V3.1-CATALOG-01 | Contrat+arbitrage résolus · runtime pending | Delivery D1 bloqué jusqu’à GO |
| R-V3.1-02 | Duplication méthode / scoring dans React | Haute — interdite |
| R-V3.1-03 | Exposition codes rationale bruts | Moyenne |
| R-V3.1-04 | Fausse influence objectif/scope | Haute |
| R-V3.1-05 | `undefined` assimilé à false | Haute — UI doit bloquer |
| R-V3.1-06 | Critical overclaim / autorité simulée | Haute |
| R-V3.1-07 | `requestedProfile` prématuré | Moyenne |
| R-V3.1-08 | Confusion recommandation / décision | Haute |
| R-V3.1-09 | Volatilité process-local | Acceptée · disclosure |
| R-V3.1-10 | D-VS-05 / Figma | Maintenue |
| R-V3.1-11 | B5 / R1 | Hors périmètre |
| R-V3.1-12 | Absence de preuve visuelle ce cycle | Acceptée |

## Z. Slicing et transition

| Étape | Statut |
|-------|--------|
| V3 cadrage + arbitrage | Terminé (`12`) |
| V3.1 conception fonctionnelle | Terminée (`13`) |
| V3.1 architecture + adoption catalogue | Terminée (`14`) · D-V3.1-CAT adoptées · CKC obligatoire |
| V3.1-D1 catalogue runtime + CKC mapping | **Candidat** · non ouvert |
| V3.1-D2 projection + resolver + QualifyCycle bridge | Après D1 |
| V3.1-D3 UI | Après D2 · réserve Figma |
| V3.2 CreateCycle | Non ouvert |
| V4 décision Morris | Non ouvert |

Aucun cycle suivant ouvert automatiquement.

## AA. Anti-claims

- Conception fonctionnelle ≠ implémentation.
- IDs adoptés ≠ registry runtime.
- CKC obligatoire ≠ baseline méthode globale ≠ autorité d’exécution.
- Candidate ≠ optionnel (produit candidate).
- Profil recommandé ≠ type recommandé automatiquement.
- Recommandation ≠ décision Morris.
- Read-only ≠ CycleInstance créé.
- Résultat Critical ≠ autorisation.
- Contrat Git ≠ Figma validé.
- Tests planifiés ≠ tests exécutés.
- Aucun PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

## AB. Verdict

**V3.1 FUNCTIONAL DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`

**Précondition D1 :** GO delivery distinct · respect contrat `14` · pas d’élargissement D2/D3/V3.2.
